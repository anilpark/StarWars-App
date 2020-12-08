import { call, put, takeEvery } from 'redux-saga/effects'
import {planetsAPI} from "../../api/planetsApi";
import {
  setCurrentPlanetDetails,
  setFilms,
  setPlanets,
  setPlanetsError,
  setResidents} from "../actions/planetsActions";
import {
  GET_FILMS_REQUESTED,
  GET_PLANET_DETAILS_REQUESTED,
  GET_PLANETS_REQUESTED,
  GET_RESIDENTS_REQUESTED
} from "../types/planetTypes";

function* fetchPlanets(action) {
  try {
    const planets = yield call(planetsAPI.getPlanets, action.nextQuery)
    yield put(setPlanets(planets))
  }catch (e) {
    yield put(setPlanetsError(e))
  }
}

function* fetchPlanet(action) {
  try {
    const currentPlanet = yield call(planetsAPI.getPlanet, action.planetId)
    yield put(setCurrentPlanetDetails(currentPlanet))
  }catch (e) {
    yield put(setPlanetsError(e))
  }
}

function* fetchFilms(action) {
  try {
    const films = yield call(planetsAPI.getResources, action.filmsLinks)
    yield put(setFilms(films))
  }catch (e) {
    yield put(setPlanetsError(e))
  }
}

function* fetchResidents(action) {
  try {
    const residents = yield call(planetsAPI.getResources, action.residentsLinks)
    yield put(setResidents(residents))
  }catch (e) {
    yield put(setPlanetsError(e))
  }
}



export function* planetsSaga() {
  yield takeEvery(GET_PLANETS_REQUESTED, fetchPlanets)
}

export function* planetSaga() {
  yield takeEvery(GET_PLANET_DETAILS_REQUESTED, fetchPlanet)
}

export function* filmsSaga() {
  yield takeEvery(GET_FILMS_REQUESTED, fetchFilms)
}

export function* residentsSaga() {
  yield takeEvery(GET_RESIDENTS_REQUESTED, fetchResidents)
}