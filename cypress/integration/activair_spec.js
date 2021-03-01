const baseUrl = 'http://localhost:8080/'
const key = '643484ca-9138-4647-b058-430c60bdb96f'
const city = 'Denver'
const state = 'Colorado'
const citiesAPI = `http://api.airvisual.com/v2/cities?state=${state}&country=USA&key=${key}`
const statesAPI = `http://api.airvisual.com/v2/states?country=USA&key=${key}`
const cityStateAPI = `http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=USA&key=${key}`
const currentLocationAPI = `http://api.airvisual.com/v2/nearest_city?key=${key}`

describe('ActivAir Website', () => {
  it('Should display a header with website name and subheader', () => {
    cy.intercept('GET', statesAPI, { fixture: 'state-data' })
      .visit(baseUrl)
      .get('header')
        .get('h1').should('have.text', 'ActivAir')
        .get('h2').should('have.text', 'Find fresh air for your outdoor activities.')
  })

})
