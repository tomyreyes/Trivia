import { combineReducers } from 'redux'
import { categoryReducer } from './CategoryReducer'
import { idReducer } from './IdReducer'
import { questionReducer } from './QuestionReducer'
import { scoreReducer } from './ScoreReducer'


export const rootReducer = combineReducers({
  categoryReducer,
  idReducer,
  questionReducer,
  scoreReducer
})