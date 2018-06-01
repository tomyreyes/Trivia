import { START_TIMER, RESET_TIMER} from '../constants'

const initialState = {
  timer: 10
}

export const timerReducer = (state = initialState, action) => {
  switch(action.type){
    case START_TIMER: 
    return Object.assign({}, state, {timer: state.timer + action.payload  })
    case RESET_TIMER:
    return Object.assign({}, state, {timer: action.payload})
    default:
    return state
  }
}
