import { all } from 'redux-saga/effects'
import planetsSaga from "./planetsSaga";

export default function* rootSaga() {
  yield all([
    planetsSaga()
  ])
}