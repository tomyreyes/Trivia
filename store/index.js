import { createStore, applyMiddleware } from 'redux'
import {rootReducer} from '../reducers'
import createSagaMiddleware from 'redux-saga'
import categorySaga from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(categorySaga)

export default store