import * as type from '../types/planetTypes'

const initialState = {
  planets: [],
  isFetching: false,
  nextQuery: '',
  currentPlanetDetails: {},
  currentFilms: [],
  currentResidents: [],
  error: null
}

const planetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_PLANETS_REQUESTED:
      return {...state, isFetching: true}

    case type.GET_PLANETS_SUCCESSFUL:
      const planetsWithIds = action.payload.results.map((planet) => ({
        ...planet,
        id: getPlanetIdFromUrl(planet.url),
      }));

      return {...state,
        isFetching: false,
        planets: [...state.planets, ...planetsWithIds],
        nextQuery: action.payload.next.split('?')[1] || '',
      }

    case type.GET_PLANETS_FAILED:
      return {...state,
        isFetching: false,
        error: action.error
      }


    case type.GET_PLANET_DETAILS_REQUESTED:
      return {...state,
        isFetching: true
      }

    case type.GET_CURRENT_PLANET_DETAILS_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        currentPlanetDetails: {...action.currentPlanetDetails}
      }

    case type.GET_FILMS_REQUESTED:
      return {...state,
        isFetching: true
      }

    case type.GET_FILMS_SUCCESSFUL:
      return {
        ...state,
        currentFilms: action.films,
        isFetching: false
      }

    case type.GET_RESIDENTS_REQUESTED:
      return {...state,
        isFetching: true
      }

    case type.GET_RESIDENTS_SUCCESSFUL:
      return {
        ...state,
        currentResidents: action.residents,
        isFetching: false
      }

    default:
      return state
  }
}

function getPlanetIdFromUrl(url) {
  return url.match(/(?<=planets\/)\d+(?=\/$)/)[0];
}

export default planetsReducer