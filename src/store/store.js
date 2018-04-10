import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware  from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { logger } from 'redux-logger'

import { combineReducers } from 'redux'
import { homeReducer } from './../app/Container/HomePage/reducer'
const rootReducer = combineReducers({
	homeReducer
})
export { rootReducer }

export const store = applyMiddleware(logger, promise(), thunkMiddleware)(createStore)
