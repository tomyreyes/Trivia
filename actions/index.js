export const FETCH_CATEGORY_REQUEST = 'FETCH_CATEGORY_REQUEST'
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS'

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



export const changeCategory = (category) => {
  return {
    type: CHANGE_CATEGORY,
    payload: category
  }
}