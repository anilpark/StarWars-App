import axios from 'axios'

const planets = axios.create({
  baseURL: 'https://swapi.dev/api/planets/',
  headers: {
    "Content-Type": 'application/json'
  }
})

export const planetsAPI = {
  getPlanets(nextPage = '') {
    return planets.get(`?${nextPage}`)
      .then(res => res.data)
      .catch(res => {throw Error(res.error)})
  },

  getPlanet(planetId = ''){
    return planets.get(planetId)
      .then(res => res.data)
      .catch(res => {throw Error(res.error)})
  },

  async getResources(resourcesArr = []){
    const results = await Promise.all(
      resourcesArr.map((resourceUrl) => {
        return axios
          .get(resourceUrl)
          .catch(res => {throw Error(res.error)})
      })
    )

    return results.filter((res) => res).map((res) => res.data)
  }
}