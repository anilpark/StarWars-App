import * as type from '../types/planetTypes'

export const getPlanets = nextQuery => ({type: type.GET_PLANETS_REQUESTED, nextQuery})
export const setPlanets = payload => ({type: type.GET_PLANETS_SUCCESSFUL, payload})
export const setPlanetsError = err => ({type: type.GET_PLANETS_FAILED, err})

export const getPlanet = planetId => ({type: type.GET_PLANET_DETAILS_REQUESTED, planetId})
export const setCurrentPlanetDetails = currentPlanetDetails => ({type: type.GET_CURRENT_PLANET_DETAILS_SUCCESSFUL, currentPlanetDetails})

export const getFilms = filmsLinks => ({type: type.GET_FILMS_REQUESTED, filmsLinks})
export const setFilms = films => ({type: type.GET_FILMS_SUCCESSFUL, films})

export const getResidents = residentsLinks => ({type: type.GET_RESIDENTS_REQUESTED, residentsLinks})
export const setResidents = residents => ({type: type.GET_RESIDENTS_SUCCESSFUL, residents})
