import { FETCH_CATEGORY } from "../actions";

const initialState = {
  categoryId: 0
}

export const idReducer = (state = initialState, action) =>{
  switch(action.type){
  case FETCH_CATEGORY:
  return Object.assign({}, state, {
    categoryId: action.payload
  })
  default:
  return state
  }
}
