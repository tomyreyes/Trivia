import { call, put, takeLatest,  } from 'redux-saga/effects'
import { FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_REQUEST} from '../constants';
import axios from 'axios'

export function* categorySaga() { //this is a watcher saga, everytime FETCH_CATEGORY_REQUEST is dispatched, we will callFetchCategory 
  yield takeLatest(FETCH_CATEGORY_REQUEST, callFetchCategory)
}

//optionally place in an api directory 
const fetchCategory = (action) => { //the id will be received when this function is called by callFetchCategories()
 const { id, difficulty } = action.payload
  return axios({
   method: 'GET',
      url: `https://opentdb.com/api.php?amount=10&category=${id}&type=multiple&difficulty=${difficulty}`
  })
  .then(result => {
    return result.data.results //this is the array of questions, incorrect answers and correct answers 
  })
}

function* callFetchCategory(action){ //this is a generator function that once called will first call the fetchCategoryFunction
    const categoryData = yield call(fetchCategory, action)
    yield put ({type: FETCH_CATEGORY_SUCCESS, payload: categoryData}) //this is where array is 
}


