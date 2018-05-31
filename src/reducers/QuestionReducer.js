import { CHANGE_QUESTION, RESET_INDEX } from '../constants'

const initialState = {
  index: 0
}

export const questionReducer = (state  = initialState, action) => {
  switch(action.type) {
    case CHANGE_QUESTION:
    return Object.assign({}, state, {index: state.index + action.payload})
    case RESET_INDEX:
    return Object.assign({}, state, {index: action.payload})
    default:
    return state
  }
}

