import { combineReducers } from 'redux'
import { homeReducer } from './../app/Container/HomePage/reducer'
const rootReducer = combineReducers({
	homeReducer
})
export { rootReducer }