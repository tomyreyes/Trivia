import { gifSaga } from './gifSaga'
import { categorySaga } from './categorySaga'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([
    gifSaga(),
    categorySaga()
  ])
}
