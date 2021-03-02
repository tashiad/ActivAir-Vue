import key from './keyAPI'

export default {
  getStates () {
    return fetch(`https://api.airvisual.com/v2/states?country=USA&key=${key}`)
      .then(response => response.json())
  },

  getCities (state) {
    return fetch(`https://api.airvisual.com/v2/cities?state=${state}&country=USA&key=${key}`)
      .then(response => response.json())
  },

  getLocale (city, state) {
    return fetch(`https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=USA&key=${key}`)
      .then(response => response.json())
  },

  getCurrent () {
    return fetch(`https://api.airvisual.com/v2/nearest_city?key=${key}`)
      .then(response => response.json())
  }
}
