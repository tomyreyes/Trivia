import { FETCH_CATEGORY_REQUEST } from "../actions";

const initialState = {
  categoryId: 0,
  difficulty: null
}

export const idReducer = (state = initialState, action) =>{
  switch(action.type){
  case FETCH_CATEGORY_REQUEST:
  return Object.assign({}, state, {
    categoryId: action.payload.id, difficulty: action.payload.difficulty
  })
  default:
  return state
  }
}

