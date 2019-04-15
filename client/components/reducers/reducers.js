import {AUTH_USER, ADD_USER, LOGIN_USER, LOGOUT_USER, SECTIONS_LIST, DEFAULT_STATE} from '../actions/types'

// export const authReducer = (state=false, action)=>{
// 	   switch(action.type){
// 	   	 case AUTH_USER:
// 	   	  return action.payload;
//          break;
// 	   	 default: 
// 	   	  return state;
// 	   }
// } 

export const loginReducer = (state=null, action)=>{
		switch(action.type){
	   	   case LOGIN_USER:
	   	     return action.payload;
	   	   case AUTH_USER:
	   	     return action.payload;
            break;
           case LOGOUT_USER:
	   	     return action.payload;
           case ADD_USER:
	   	     return action.payload;
            break;
	   	   default: 
	   	    return state;
	    }
} 


export const sectionsReducer = (state=[], action)=>{
		switch(action.type){
	   	   case SECTIONS_LIST:
	   	     return action.payload;
	   	   default: 
	   	    return state;
	    }
} 

export const defaultReducer = (state=1, action)=>{
		switch(action.type){
	   	   case DEFAULT_STATE:
	   	     return action.payload;
	   	   default: 
	   	    return state;
	    }
} 


