import { call, put, takeLatest,  } from 'redux-saga/effects'
import { FETCH_CATEGORY_REQUEST } from '../actions';


function* categorySaga() { //this is a watcher saga, everytime FETCH_CATEGORY_REQUEST is dispatched, we will callFetchCategory 
  yield takeLatest(FETCH_CATEGORY_REQUEST, callFetchCategory)
}

//optionally place in an api directory 
const fetchCategory = (id) => { //the id will be received when this function is called by callFetchCategories()
  //API REQ HERE
}

function* callFetchCategory(action){ //this is a generator function that once called will first call the fetchCategoryFunction
  try {
    const categoryData = yield call(fetchCategory, action.payload)
    //yield put FETCH_CATEGORY_SUCCESS, categoryData
  }catch(error){
    console.log(error)    
  }
}


export default categorySaga
