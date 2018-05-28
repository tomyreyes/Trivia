import { combineReducers } from 'redux'
import { categoryReducer } from './CategoryReducer'
import { idReducer } from './IdReducer'
import { questionReducer } from './QuestionReducer'
import { scoreReducer } from './ScoreReducer'
import { gifReducer } from './GifReducer'


export const rootReducer = combineReducers({
  categoryReducer,
  idReducer,
  gifReducer,
  questionReducer,
  scoreReducer
})