import axios from 'axios'

const planets = axios.create({
  baseURL: 'https://swapi.dev/api/planets',
  headers: {
    "Content-Type": 'application/json'
  }
})

export const planetsAPI = {
  getPlanets() {
    return planets.get('/')
      .then(res => res.data.results)
      .catch(res => {throw Error(res.error)})
  }
}