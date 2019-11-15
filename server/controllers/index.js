import request from 'request'
import rp from 'request-promise'
import CONFIG from '../../config';
import uuid from 'uuid/v4';
import AWS from 'aws-sdk';
import fs from 'fs';
import crawledPosts from '../models/posts';

export default (router)=>{

      router.get('/update-token', (req, res)=>{
       
        var options = {
            uri: "https://graph.facebook.com/v5.0/oauth/access_token",
            qs: {
                grant_type: "fb_exchange_token",          
                client_id:"426940641303361",
                client_secret: "9201de519aee8843c2b7fe94f7ad0a5a",
                fb_exchange_token : "EAAGETN1D20EBAOwFM3Q30NyLBDRcMyZCybsvUhyipskzZAwMfBiYoN3H6KCUk18MRZBlzINVJmflJK4bDe9hH57GhZCtLz3YcdWZCRJcS4pLYWmG2zWLRN40qrRLjls6xGZCUgfUtOR3NHZCSWWGqmSZBCjX6HubHG2DAe8EQfzQZC9QAuf65bYxCgAYZBd7mSLYVLX97HILumnwZDZD"
            },
            json: true
        };
        // {
        //     "key": {
        //       "access_token": "EAAGETN1D20EBAAKG2AY4hepWIzNtZCf8TGZCmaAB0f6P1WB3ypyhUGTAZB046iaEYXG8KJS7IIuxlkKkhRSp2hUEgyr334AGAPiO1560kcUZCxPOMPBcgKqUEuJpU9SvVmO6DV3WB79VVUPtUS4WJgP90Ohecesk86RvYd7ZBbwZDZD",
        //       "token_type": "bearer",
        //       "expires_in": 5184000
        //     }
        //   }
        rp(options)
        .then(function (parsedBody) {
            res.send({
                key: parsedBody
           })
        })
        .catch(function (err) {
            res.send({
                key: err
           })
        });

      })


      const s3upload = async (mediapost, contentType, key)=>{
        const s3 = new AWS.S3({
            accessKeyId: CONFIG.S3.ACCESS,
            secretAccessKey: CONFIG.S3.SECRET
        });
        const paramsThumb = {
            Bucket: CONFIG.S3.BUCKET,
            Key: key,
            Body: mediapost,
            ContentType: contentType
          }
          try {
            const s3Response = await s3.putObject(paramsThumb).promise();
                  s3Response['post_url'] = `https://stylemycv.s3.ap-south-1.amazonaws.com/${key}`;
            return s3Response;
          } catch (error) {
             return {
                 error
             }
          }
      }

      let alldata = false;
      let a = 0;
      const update9gagdb = async (section, cursor_url)=>{
            
            const refresh = alldata ? 1: 0;
            console.log(++a);
            
            let url =  cursor_url ? `${section}?${cursor_url}` : section;
            const gagURL = `https://9gag.com/v1/group-posts/group/${url}`;

            const {data} = await rp({ 
                uri: gagURL,
                json: true
            });
            const {posts, nextCursor} = data;
            const finalArray = [];
            let result = [];

            for(let post of posts){
                //check post is already exists 
                //console.log(post);
                const checkpostexists = await crawledPosts.findOne({ crawled_id : post.id})
                if(checkpostexists){
                     if (alldata){
                         continue;
                     }else{
                      return {
                         result: true
                      }
                    }
                }else{
                let objJSON = {};
                 objJSON['refresh'] = refresh;
                 objJSON['next_cursor'] = nextCursor;
                 objJSON['post_title'] = post.title;
                 objJSON['post_id'] = uuid();
                 objJSON['post_type'] = section;
                 objJSON['crawled_id'] = post.id;
                 //check video                 
                 let mediapost = '';
                 if(post.type=="Photo" || post.type=="Article"){
                    objJSON['media_type'] = CONFIG.CONTENT_TYPE.PHOTO;
                    objJSON['ext'] = post.images.image700.url.split('.').pop();
                    try {
                        mediapost = await rp.get({
                            uri: post.images.image700.url,
                            encoding: null
                        });
                    } catch (error) {
                        console.log(error)
                    }
                 }else{
                    objJSON['media_type'] = CONFIG.CONTENT_TYPE.VIDEO;
                    objJSON['ext'] = post.images.image460sv.url.split('.').pop();
                    
                    try{
                        mediapost = await rp.get({
                            uri: post.images.image460sv.url,
                            encoding: null
                        });
                    }catch(error){
                           console.log(error)
                    }

                 }
                 let date = new Date(), 
                     month = date.getMonth()+1,
                     today = `${date.getDate()}-${month}-${date.getFullYear()}`;
                     
                 let perdayFolder = `${section}_${today}`;
                 if(!fs.existsSync(`./crawled-memes/${perdayFolder}`)){
                    fs.mkdirSync(`./crawled-memes/${perdayFolder}`);                
                 }                 

                 const contentType = objJSON['media_type'] == CONFIG.CONTENT_TYPE.VIDEO ? `video/${objJSON['ext']}` : `image/${objJSON['ext']}`;
                 const s3Uploadresult = await s3upload(mediapost, contentType, `9gag_data/${objJSON['post_id']}.${objJSON['ext']}`);
                       console.log(s3Uploadresult);
                       objJSON['post_url'] = s3Uploadresult['post_url'];

                  fs.writeFileSync(`./crawled-memes/${perdayFolder}/${objJSON['post_id']}.${objJSON['ext']}`, mediapost);
                  console.log(objJSON);
                  finalArray.push(objJSON);
                }
             }

             let response = await crawledPosts.insertMany(finalArray);
             result = result.concat(response);
             
             //CALL FOR NEXT ROUND 
             update9gagdb(section, nextCursor);
      }

      const getLatestCursor =  async (section)=>{
            const lastCursor = await crawledPosts.findOne({refresh : 1}).sort({created: -1});
            update9gagdb(section, lastCursor['next_cursor']);
            // { posted_fb: false,
            //     posted_web: false,
            //     refresh: true,
            //     _id: 5dcc1e9d6760226b2f947b50,
            //     next_cursor: 'after=aGgz9m0%2CaDgDwGK%2CaZ7rWmn&c=60',
            //     post_title: 'One, venti diarrhea please. Extra hot, extra old.',
            //     post_id: '46275502-5007-48df-b108-03896305d13e',
            //     post_type: 'awesome',
            //     crawled_id: 'aZ7rWmn',
            //     media_type: 1,
            //     ext: 'jpg',
            //     post_url:
            //      'https://stylemycv.s3.ap-south-1.amazonaws.com/9gag_data/46275502-5007-48df-b108-03896305d13e.jpg',
            //     created: 2019-11-13T15:17:49.412Z,
            //     __v: 0 }
      }
 
      router.get('/9gag-data', (req, res)=>{
            const section = req.query.section || 'funny';
            const mine = req.query.mine;
            let result = '';
            if(mine!==''){
                alldata = true;
                getLatestCursor(section);
            }else{
                alldata = false;
                result = update9gagdb(section);
            }
            console.log(mine); 
            res.send({
                result
            });
      });

      router.get('/facebook-page', (req, res)=>{
            
            const posts = [
                {
                    text : "",
                    url : "https://media.farandwide.com/4e/50/4e505d7c1c3a4f64917a70d40ee1385c.jpeg"
                },
                {
                    text: "",
                    url: "https://s4.scoopwhoop.com/anj/sw/51b1f5e3-6473-4aae-a2c6-81b6474cdd68.jpg"
                }
            ]
            //     curl -i -X GET "https://graph.facebook.com/v5.0/oauth/access_token?  
            // grant_type=fb_exchange_token&          
            // client_id=426940641303361&
            // client_secret=9201de519aee8843c2b7fe94f7ad0a5a&
            // fb_exchange_token=EAAGETN1D20EBAOwFM3Q30NyLBDRcMyZCybsvUhyipskzZAwMfBiYoN3H6KCUk18MRZBlzINVJmflJK4bDe9hH57GhZCtLz3YcdWZCRJcS4pLYWmG2zWLRN40qrRLjls6xGZCUgfUtOR3NHZCSWWGqmSZBCjX6HubHG2DAe8EQfzQZC9QAuf65bYxCgAYZBd7mSLYVLX97HILumnwZDZD


            //https://9gag.com/v1/group-posts/group/football
            // {
            //     "access_token": "EAAGETN1D20EBACSsZAErRNODDBKN9QpzLMLTkVUIlzNm9WtlqoAs8cZCo9vJfdSXlCqt61zHOAR5XMQ3B94i1a6mGc7voLDQTtNUZB3ZCrI97qNqbLapW2SkCAFsfkjxZAZBP3t7aS84vF4mMq1Xb4fx3ZBpHj3oOtlPjU5i3fG4QZDZD",
            //     "id": "1034103903466704"
            //   }
            // curl -i -X POST \
            // -d "message=Testing multi-photo post!" \
            // -d "attached_media[0]={"media_fbid":"1002088839996"}" \
            // -d "attached_media[1]={"media_fbid":"1002088840149"}" \
            // -d "access_token=<access_token>" \
            // -d "published=false" \
            // -d "scheduled_publish_time=1512068400" \
            // -d "unpublished_content_type=SCHEDULED" \
            // "https://graph.facebook.com/me/feed"
            var options = {
                method: 'POST',
                uri: 'https://graph.facebook.com/v5.0/1034103903466704/photos',
                body: {
                    published : 'true',
                    caption: "😂🤣",
                    url: "https://i.imgflip.com/3f4ivz.jpg",
                    access_token: "EAAGETN1D20EBAAKG2AY4hepWIzNtZCf8TGZCmaAB0f6P1WB3ypyhUGTAZB046iaEYXG8KJS7IIuxlkKkhRSp2hUEgyr334AGAPiO1560kcUZCxPOMPBcgKqUEuJpU9SvVmO6DV3WB79VVUPtUS4WJgP90Ohecesk86RvYd7ZBbwZDZD",
                },
                json: true
            };
             
            rp(options)
                .then(function (parsedBody) {
                    res.send({
                        key: parsedBody
                   })
                })
                .catch(function (err) {
                    res.send({
                        key: err
                   })
                });
      })

      return router;
}