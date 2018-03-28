import { createStore, applyMiddleware } from 'redux'

export const store = applyMiddleware()(createStore)
