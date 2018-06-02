import * as type from '../constants'

export const fetchCategoryRequest = (params) =>{
  return {
    type: type.FETCH_CATEGORY_REQUEST,
    payload: params
  }
}

export const fetchCategorySuccess = (categoryData) => {
  return {
    type: type.FETCH_CATEGORY_REQUEST,
    payload: categoryData 
  }
}

export const fetchCategoryError = (error) =>{ // ADD THIS IS OPTIONALLY LATER
  return {
    type: type.FETCH_CATEGORY_ERROR,
    payload: error
  }
}

export const changeQuestion = () => {
  return {
    type: type.CHANGE_QUESTION,
    payload: 1
  }
}

export const changeScore = () => {
  return {
    type: type.CHANGE_SCORE,
    payload: 1
  }
}

export const resetScore = () => {
  return {
    type: type.RESET_SCORE,
    payload: 0
  }
}

export const resetIndex = () => {
  return {
    type: type.RESET_INDEX,
    payload: 0
  }
}

export const resetCategoryData = () => {
  return {
    type: type.RESET_CATEGORY_DATA,
    payload: []
  }
}

export const fetchGifRequest= (assessment) => {
  return {
    type: type.FETCH_GIF_REQUEST,
    payload: assessment
  }
}

export const fetchGifSuccess = (gif) => {
  return { 
    type: type.FETCH_GIF_SUCCESSS, 
    payload: gif 
  }
}

export const startTimer = () => {
  console.log('starting')
  return {
    type: type.START_TIMER,
    payload: -1
  }
}

export const resetTimer = () => {
  console.log('resetting')
  return {
    type: type.RESET_TIMER,
    payload: 10
  }
}