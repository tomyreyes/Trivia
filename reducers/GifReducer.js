import { FETCH_GIF_SUCCESS } from "../actions";

const initialState = {
  gif: null
}

export const gifReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_GIF_SUCCESS:
    return Object.assign({}, state, {gif: action.payload})
  }
}

