import fetch from 'cross-fetch'

import { ADD_ONE } from './constants'
import { SUBTRACT } from './constants'

export const addOneAction = () => ({ type: ADD_ONE, payload: 1 })
export const subtractAction = number => ({ type: SUBTRACT, payload: number})

const fetchDataSuccsess = (payload) => {
	return {
		type: 'FETCH_DATA_SUCCESS',
		payload
	}
}

const fetchDataRequest = () => {
	return {
		type: 'FETCH_DATA_REQUEST',
	}
}

const simpleFetch = () => {
	return fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
		.then(resp => resp.json())
		.then(resp => {
			return resp.map(res => {
				return res.body
			})
		})	
}

export const fetchDataWithRedux = () => {
	return dispatch => {
		dispatch(fetchDataRequest())
		return simpleFetch()
			.then(json => {
				dispatch(fetchDataSuccsess(json))
			})
	}
}
