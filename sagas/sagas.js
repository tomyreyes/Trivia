import { call, put, takeLatest,  } from 'redux-saga/effects'
import { fetchCategoryRequest, FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_REQUEST, FETCH_GIF_REQUEST, FETCH_GIF_SUCCESS } from '../actions';
import axios from 'axios'

function* categorySaga() { //this is a watcher saga, everytime FETCH_CATEGORY_REQUEST is dispatched, we will callFetchCategory 
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

function* gifSaga() {
  yield takeLatest(FETCH_GIF_REQUEST, callFetchGif)
}

const fetchGif = (action) => {
  const keyword = action.payload
  return axios({
    method: 'GET',
    url: `https://api.giphy.com/v1/gifs/random?api_key=zVZ3RoEvQhvaeSKml8UmQhQqIAfPb4H0&tag=${keyword}&rating=PG-13`
  })
  .then(result => {
    return result.data.url
  })
}

function* callFetchGif(action) {
  const gif = yield call(fetchGif, action)
  yield put ({FETCH_GIF_SUCCESS, payload: gif})
}


export default categorySaga
