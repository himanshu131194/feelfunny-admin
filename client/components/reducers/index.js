import {combineReducers} from 'redux'
import {authReducer, loginReducer, sectionsReducer, defaultReducer, listMemes} from './reducers'

export default combineReducers({
	  uploadedState: defaultReducer,
	  auth: loginReducer,
	  sectionsList : sectionsReducer,
	  listOfMemes :  listMemes
})