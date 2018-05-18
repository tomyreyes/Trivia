import { call, put, takeLatest,  } from 'redux-saga'
import { FETCH_CATEGORY_REQUEST } from '../actions';


//optionally this u=function 
const fetchCategory = (id) => { //the id will be received when this function is called by callFetchCategories()
  //API REQ HERE
  
}

function* callFetchCategory(){ //this is a generator function that once called will first call the fetchCategoryFunction
  try {
    const categoryData = yield call(fetchCategory)
  }catch{
    
  }
}

function* categorySaga(){ //this is a listener saga, everytime FETCH_CATEGORY_REQUEST is dispatched, we will callFetchCategory 
  yield takeLatest(FETCH_CATEGORY_REQUEST, callFetchCategory)
}


