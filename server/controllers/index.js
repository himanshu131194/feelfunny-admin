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
 
      router.get('/9gag-data', async (req, res)=>{
             //get data form 9gag url
             const gagURL = 'https://9gag.com/v1/group-posts/group/wtf';

             const {data} = await rp({ 
                  uri: gagURL,
                  json: true
             });
             const {posts, nextCursor} = data;
             const finalArray = [];
             console.log(posts);
             //LOOOP OVER SET OF DATA 
             for(let post of posts){
                let objJSON = {};
                 objJSON['post_title'] = post.title;
                 objJSON['post_id'] = uuid();
                 //check video
                 
                 let mediapost = '';
                 if(post.type=="Photo" || post.type=="Article"){
                    objJSON['media_type'] = CONFIG.CONTENT_TYPE.PHOTO;
                    objJSON['ext'] = post.images.image700.url.split('.').pop();
                    console.log(post.images.image700.url);
                    try {
                        mediapost = await rp.get({
                            uri: post.images.image700.url,
                            encoding: null
                        });
                    } catch (error) {
                        console.log(error)
                    }
                 }else{
                    objJSON['media_type'] = CONFIG.CONTENT_TYPE.PHOTO;
                    objJSON['ext'] = post.images.image460sv.url.split('.').pop();
                    
                    mediapost = await rp.get({
                        uri: post.images.image460sv.url,
                        encoding: null
                    });
                 }
                 fs.writeFileSync(`./crawled-memes/${objJSON['post_id']}.${objJSON['ext']}`, mediapost);
                 console.log(objJSON);
                 finalArray.push(objJSON);
             }

             crawledPosts.insertMany(finalArray, function(error, docs) {
                res.send({
                    docs
                })
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