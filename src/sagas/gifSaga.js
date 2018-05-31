import { call, put, takeLatest, } from 'redux-saga/effects'
import { FETCH_GIF_REQUEST, FETCH_GIF_SUCCESS } from '../constants';
import axios from 'axios'


export function* gifSaga() {
  yield takeLatest(FETCH_GIF_REQUEST, callFetchGif)
}

const fetchGif = (action) => {
  const keyword = action.payload
  return axios({
    method: 'GET',
    url: `https://api.giphy.com/v1/gifs/random?api_key=zVZ3RoEvQhvaeSKml8UmQhQqIAfPb4H0&tag=${keyword}&rating=PG-13`
  })
    .then(result => {
      console.log(result.data.data)
      return result.data.data.image_original_url
    })
}

function* callFetchGif(action) {
  const gif = yield call(fetchGif, action)
  yield put({ type: FETCH_GIF_SUCCESS, payload: gif })
}

