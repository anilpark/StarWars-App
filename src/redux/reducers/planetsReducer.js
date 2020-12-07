import * as type from '../types/planetTypes'

const initialState = {
  planets: [],
  isFetching: false,
  error: null
}

const planetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_PLANETS_REQUESTED:
      return {...state, isFetching: true}
    case type.GET_PLANETS_SUCCESSFUL:
      return {...state,
        isFetching: false,
        planets: action.planets
      }
    case type.GET_PLANETS_FAILED:
      return {...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state
  }
}

export default planetsReducer