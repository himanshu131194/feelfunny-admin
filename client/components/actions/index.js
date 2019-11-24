import {AUTH_USER, ADD_USER, LOGIN_USER, LOGOUT_USER, SECTIONS_LIST, DEFAULT_STATE, ADD_SECTION, MEMES_LIST} from './types'
import CONFIG from '../../../config'
import axios from 'axios'

export const authUser = ()=>{
          return async (dispatch)=>{
                 const token = localStorage.getItem(CONFIG.ACCESS_TOKEN);
                 let err = null, result = null;
                 if(token){
                     try{
                        let {data} = await axios.post(`${CONFIG.API_URL}/api/validate`, {}, {
                            headers:{
                                [CONFIG.ACCESS_TOKEN] : token
                            }
                        });
                        result = data;
                     }catch(e){
                         err = e.response.data.error
                     }
                 }
                 dispatch({
                     type: AUTH_USER,
                     payload: result
                 })
          }    
} 

export const loginUser = ({email, password}, cb)=>{
          return async (dispatch)=>{
                 let err = null, result = null;
                 try{
                     let {data} = await axios.post(`${CONFIG.API_URL}/api/login`, {email, password});
                         result = {user : data.data, token: data.token}; 
                 }catch(e){
                     err = e.response.data.error;
                 }
                 dispatch({
                     type: LOGIN_USER,
                     payload: result
                 })
                 cb(err)
          }
}


export const addUser = ({usrname, email, password}, cb)=>{
        return async (dispatch)=>{
                 let err = null, result = null;
                 try{
                     let {data} = await axios.post(`${CONFIG.API_URL}/api/users`, {name: usrname, email, password});
                         result = {user : data.data, token: data.token}; 
                 }catch(e){
                     err = e.response.data.error;
                 }
                 dispatch({
                     type: ADD_USER,
                     payload: result
                 })
                 cb(err);
        }
} 



export const addSection = ({section_value, section_desc, section_url}, cb)=>{
        return async ()=>{
                 let err = null, result = null;
                 try{
                     let {data} = await axios.post(`${CONFIG.API_URL}/api/sections`, {section_value, section_desc, section_url});
                         //result = {user : data.data, token: data.token}; 
                         console.log(data)
                 }catch(e){
                     err = e.response.data.error;
                 }
                 cb(err);
        }
} 

export const logoutUser = ()=>{
          return (dispatch)=>{
                 localStorage.removeItem(CONFIG.ACCESS_TOKEN);
                 dispatch({
                     type: LOGOUT_USER,
                     payload: null
                 })
          }
}


export const listSections = ()=>{
          return async (dispatch)=>{
                 let err = null, result = [];
                 try{
                     let {data} = await axios.get(`${CONFIG.API_URL}/api/list-sections`);
                          result = data
                 }catch(e){
                     err = e.response.data.error;
                 }
                 dispatch({
                     type: SECTIONS_LIST,
                     payload: result
                 })
          }
}


export const loadAllMemes = (queryParams, cb)=>{
    console.log(queryParams);
    return async (dispatch)=>{
           let err = null, result = [];
           try{
               let {data} = await axios.get(`${CONFIG.SELF_URL}/api/memes-list`, {
                    params : {
                        section : queryParams.section, 
                        limit : queryParams.limit, 
                        offset : queryParams.offset
                    }
               });
                    result = data.data
           }catch(e){
               err = e.response.data.error;
           }
           dispatch({
               type: MEMES_LIST,
               payload: result
           })
           cb();
    }
}

// export const uploadMimeToS3 = ({url, mime, ext}, cb)=>{
//         return async ()=>{
//                  let err = null, result = null;
//                      try{
//                          let {data} = await axios.post(`${CONFIG.API_URL}/api/uplod-localmemes-s3`, {url, mime, ext});
//                          cb(null, data) 
//                      }catch(e){
//                          err = e.response.data.error;
//                          cb(err, null)
//                      }
//         }
// }

export const uploadMimeToS3 = ({url, mime, ext, data64}, cb)=>{
    return async ()=>{
             let err = null, result = null;
                 try{
                     let {data} = await axios.post(`${CONFIG.SELF_URL}/api/uplod-localmemes-s3`, {url, mime, ext, data64});
                     cb(null, data) 
                 }catch(e){
                     err = e.response.data.error;
                     cb(err, null)
                 }
    }
}


export const uploadAll = ({uploadedURL, postSlug, postTitle, postTags, postSection, postMime, postNSFW}, cb)=>{
        return async ()=>{
                 const token = localStorage.getItem(CONFIG.ACCESS_TOKEN);
                 let err = null, result = null;
                 if(token){
                     try{
                         let {data} = await axios.post(`${CONFIG.API_URL}/api/upload-post`,
                            {uploadedURL, postSlug, postTitle, postTags, postSection, postMime, postNSFW}, 
                            {
                            headers:{
                                [CONFIG.ACCESS_TOKEN] : token
                            }
                           }
                         );
                         cb(null, data) 
                     }catch(e){
                         console.log(e)
                         //err = e.response.data.error;
                         cb(err, null)
                     }
                 }else{
                    err = CONFIG.ERROR[code];
                    cb(err, null)
                 }
        }
}

export const setDefaultState = (state)=>{
       return (dispatch)=>{
                 dispatch({
                     type: DEFAULT_STATE,
                     payload: state
                 })
       }
}











