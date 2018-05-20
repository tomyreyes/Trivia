import { combineReducers } from 'redux'
import { categoryReducer } from './CategoryReducer'
import { idReducer } from './IdReducer'
import { questionReducer } from './QuestionReducer'


export const rootReducer = combineReducers({
  categoryReducer,
  idReducer,
  questionReducer
})