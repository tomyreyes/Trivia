import { call, put, takeLatest,  } from 'redux-saga/effects'
import { FETCH_CATEGORY_REQUEST, fetchCategoryRequest } from '../actions';
import axios from 'axios'

function* categorySaga() { //this is a watcher saga, everytime FETCH_CATEGORY_REQUEST is dispatched, we will callFetchCategory 
  yield takeLatest(fetchCategoryRequest, callFetchCategory) //optionall i can use (FETCH_CATEGORY_REQUEST, fetchCategoryRequest)
}

//optionally place in an api directory 
const fetchCategory = (action) => { //the id will be received when this function is called by callFetchCategories()
 const id = action.payload
  const result = 
  axios({
   method: 'GET',
      url: `https://opentdb.com/api.php?amount=10&category=${id}&type=multiple`
  })
  .then(result => {
    console.log(result.data.results)
    return result.data.results //this is the array of questions, incorrect answers and correct answers 
  })
}

function* callFetchCategory(action){ //this is a generator function that once called will first call the fetchCategoryFunction
  
  try {
    const categoryData = yield call(fetchCategory, action)
    //yield put FETCH_CATEGORY_SUCCESS, categoryData
  }catch(error){
    console.log(error)    
  }
}


export default categorySaga
