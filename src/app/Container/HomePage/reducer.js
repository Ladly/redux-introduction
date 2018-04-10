import { ADD_ONE } from './constants'
import { SUBTRACT } from './constants'

const initialState = {
	  number: 0,
	  stuff: []
}

export const homeReducer = (state = initialState, action) => {
  	switch (action.type) {
	case ADD_ONE:
		return { 
			...state, 
			number : state.number + action.payload
		}
	case SUBTRACT:
		return { 
			...state, 
			number : state.number - action.payload
		}
	case 'FETCH_DATA_SUCCESS':
		return { 
			...state, 
			posts : action.payload
		}
	case 'FETCH_DATA_REQUEST':
		return state
		  default:
	  	return state
  	}
}