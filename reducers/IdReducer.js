import { FETCH_CATEGORY } from "../actions";

const initialState = {
  categoryId: 0
}

export const idReducer = (state = initialState, action) =>{
  switch(action.type){
  case FETCH_CATEGORY:
  return action.payload
  default:
  return state
  }
}
