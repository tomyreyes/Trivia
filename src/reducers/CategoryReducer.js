import { FETCH_CATEGORY_SUCCESS, RESET_CATEGORY_DATA } from "../constants";

const initialState = {
  categoryData: [],
  difficulty: null
}

export const categoryReducer = (state = initialState, action) => {
  //switch statement in here 
  switch(action.type){
    case FETCH_CATEGORY_SUCCESS:
    return Object.assign({}, state, {categoryData: action.payload }) 
    case RESET_CATEGORY_DATA:
    return Object.assign({}, state, {categoryData: action.payload})

    default:
    return state
  }
}