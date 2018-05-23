import { CHANGE_SCORE, RESET_SCORE} from '../actions'

const initialState = {
  score: 0
}

export const scoreReducer = (state = initialState, action) =>{
  switch(action.type) {
    case CHANGE_SCORE:
    return Object.assign({}, state, {score: state.score + action.payload})
    case RESET_SCORE:
    return Object.assign({}, state, {score: action.payload})
    default:
    return state
  }
}