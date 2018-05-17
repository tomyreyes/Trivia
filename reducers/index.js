import { combineReducers } from 'redux'
import { categoryReducer } from './CategoryReducer'
import { idReducer } from './IdReducer'


export const rootReducer = combineReducers({
  categoryReducer,
  idReducer
})