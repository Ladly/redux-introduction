import { ADD_ONE } from './constants'
import { SUBTRACT } from './constants'

export const addOneAction = () => ({ type: ADD_ONE, payload: 1 })
export const subtractAction = number => ({ type: SUBTRACT, payload: number})

