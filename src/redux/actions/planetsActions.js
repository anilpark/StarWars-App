import * as type from '../types/planetTypes'

export const getPlanets = () => ({type: type.GET_PLANETS_REQUESTED})
export const setPlanets = planets => ({type: type.GET_PLANETS_SUCCESSFUL, planets})
export const setPlanetsError = err => ({type: type.GET_PLANETS_FAILED, err})