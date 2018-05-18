export const FETCH_CATEGORY_REQUEST = 'FETCH_CATEGORY_REQUEST'
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'

export const fetchCategoryRequesrt = (id) =>{
  return {
    type: FETCH_CATEGORY_REQUEST,
    payload: id
  }
}

export const changeCategory = (category) => {
  return {
    type: CHANGE_CATEGORY,
    payload: category
  }
}