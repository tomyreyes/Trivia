import { FETCH_CATEGORY_REQUEST } from "../actions";

const initialState = {
  categoryId: 0
}

export const idReducer = (state = initialState, action) =>{
  switch(action.type){
  case FETCH_CATEGORY_REQUEST:
  return Object.assign({}, state, {
    categoryId: action.payload
  })
  // return action.payload
  default:
  return state
  }
}
