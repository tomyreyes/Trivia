import { CHANGE_CATEGORY } from "../actions";

const initialState = {
  category: []
}

export const categoryReducer = (state = initialState, action) => {
  //switch statement in here 
  switch(action.type){
    case CHANGE_CATEGORY:
    return action.payload
    default:
    return state
  }
} 