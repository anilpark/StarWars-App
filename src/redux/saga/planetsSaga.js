import { call, put, takeEvery } from 'redux-saga/effects'
import {planetsAPI} from "../../api/planetsApi";
import {setPlanets, setPlanetsError} from "../actions/planetsActions";
import {GET_PLANETS_REQUESTED} from "../types/planetTypes";

function* fetchPlanets() {
  try {
    const planets = yield call(planetsAPI.getPlanets)
    yield put(setPlanets(planets))
  }catch (e) {
    yield put(setPlanetsError(e))
  }
}

function* planetsSaga() {
  yield takeEvery(GET_PLANETS_REQUESTED, fetchPlanets)
}

export default planetsSaga

