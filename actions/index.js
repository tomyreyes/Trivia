export const FETCH_CATEGORY = 'FETCH_CATEGORY'
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'

export const fetchCategory = (id) =>{
  return {
    type: FETCH_CATEGORY,
    payload: id
  }
}

export const changeCategory = (category) => {
  return {
    type: CHANGE_CATEGORY,
    payload: category
  }
}