import { FETCH_GIF_SUCCESS } from "../constants";

const initialState = {
  gif: null
}

export const gifReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_GIF_SUCCESS:
    return Object.assign({}, state, {gif: action.payload})
    default:
    return state
  }
}

