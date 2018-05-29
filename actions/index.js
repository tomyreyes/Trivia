export const FETCH_CATEGORY_REQUEST = 'FETCH_CATEGORY_REQUEST'
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS'
export const FETCH_CATEGORY_ERROR = 'FETCH_CATEGORY_ERROR'
export const CHANGE_QUESTION = 'CHANGE_QUESTION'
export const CHANGE_SCORE = 'CHANGE_SCORE'
export const RESET_SCORE = 'RESET_SCORE'
export const RESET_INDEX = 'RESET_INDEX'
export const RESET_CATEGORY_DATA = 'RESET_CATEGORY_DATA'
export const FETCH_GIF_REQUEST = 'FETCH_GIF_REQUEST'
export const FETCH_GIF_SUCCESS = 'FETCH_GIF_SUCCESS'

export const fetchCategoryRequest = (params) =>{
  return {
    type: FETCH_CATEGORY_REQUEST,
    payload: params
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

export const changeScore = () => {
  return {
    type: CHANGE_SCORE,
    payload: 1
  }
}

export const resetScore = () => {
  return {
    type: RESET_SCORE,
    payload: 0
  }
}

export const resetIndex = () => {
  return {
    type: RESET_INDEX,
    payload: 0
  }
}

export const resetCategoryData = () => {
  return {
    type: RESET_CATEGORY_DATA,
    payload: []
  }
}

export const fetchGifRequest= (assessment) => {
  return {
    type: FETCH_GIF_REQUEST,
    payload: assessment
  }
}

export const fetchGifSuccess = (gif) => {
  return { 
    type: FETCH_GIF_SUCCESSS, 
    payload: gif }
}