import {combineReducers} from 'redux'
import {authReducer, loginReducer, sectionsReducer, defaultReducer} from './reducers'

export default combineReducers({
	  uploadedState: defaultReducer,
	  auth: loginReducer,
	  sectionsList : sectionsReducer
})