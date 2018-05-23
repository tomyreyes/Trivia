import index from "../components/MultipleChoice";

export const FETCH_CATEGORY_REQUEST = 'FETCH_CATEGORY_REQUEST'
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS'
export const FETCH_CATEGORY_ERROR = 'FETCH_CATEGORY_ERROR'
export const CHANGE_QUESTION = 'CHANGE_QUESTION'

export const fetchCategoryRequest = (id) =>{
  return {
    type: FETCH_CATEGORY_REQUEST,
    payload: id
  }
}

export const fetchCategorySuccess = (categoryData) => {
  return {
    type: FETCH_CATEGORY_REQUEST,
    payload: categoryData 
  }
}

export const fetchCategoryError = (error) =>{ // ADD THIS IS OPTIONALLY LATER
  return {
    type: FETCH_CATEGORY_ERROR,
    payload: error
  }
}

export const changeQuestion = () => {
  return {
    type: CHANGE_QUESTION,
    payload: 1
  }
}