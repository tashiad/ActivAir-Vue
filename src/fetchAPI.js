export default {
  getStates () {
    return fetch('http://api.airvisual.com/v2/states?country=USA&key=ef754ecf-5ebf-47b6-ae9f-f96d1f8eda21')
      .then(response => response.json())
      .catch(error => console.log(error))
  },

  getCities (state) {
    return fetch(`http://api.airvisual.com/v2/cities?state=${state}&country=USA&key=ef754ecf-5ebf-47b6-ae9f-f96d1f8eda21`)
      .then(response => response.json())
      .catch(error => console.log(error))
  },

  getLocale (city, state) {
    return fetch(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=USA&key=ef754ecf-5ebf-47b6-ae9f-f96d1f8eda21`)
      .then(response => response.json())
      .catch(error => console.log(error))
  },

  getCurrent () {
    return fetch('http://api.airvisual.com/v2/nearest_city?key=ef754ecf-5ebf-47b6-ae9f-f96d1f8eda21')
      .then(response => response.json())
      .catch(error => console.log(error))
  }
}
