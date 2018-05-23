import { CHANGE_QUESTION } from '../actions'

const initialState = {
  index: 0
}

export const questionReducer = (state  = initialState, action) => {
  switch(action.type) {
    case CHANGE_QUESTION:
    return Object.assign({}, state, {index: state.index + action.payload})
    default:
    return state
  }
}

