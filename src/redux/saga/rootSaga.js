import { all } from 'redux-saga/effects'
import {planetsSaga, planetSaga, filmsSaga, residentsSaga} from "./planetsSaga";

export default function* rootSaga() {
  yield all([
    planetsSaga(),
    planetSaga(),
    filmsSaga(),
    residentsSaga()
  ])
}