describe('ActivAir Website', () => {
  const baseUrl = 'http://localhost:8080/'
  const key = '643484ca-9138-4647-b058-430c60bdb96f'
  const citiesAPI = `http://api.airvisual.com/v2/cities?state=Colorado&country=USA&key=${key}`
  const statesAPI = `http://api.airvisual.com/v2/states?country=USA&key=${key}`
  const cityStateAPI = `http://api.airvisual.com/v2/city?city=Denver&state=Colorado&country=USA&key=${key}`
  const nearestAPI = `http://api.airvisual.com/v2/nearest_city?key=${key}`

  it('Should display a header with website name and subheader', () => {
    cy.intercept('GET', statesAPI, { fixture: 'state-data' })
      .visit(baseUrl)
      .get('header')
      .get('h1').should('have.text', 'ActivAir')
      .get('h2').should('have.text', 'Find fresh air for your outdoor activities.')
  })

  it('Should populate a location card with prefilled nearest location data', () => {
    cy.intercept('GET', nearestAPI, { fixture: 'location-thornton' })
    cy.intercept('GET', statesAPI, { fixture: 'state-data' })
      .visit(baseUrl)
      .get('input[name=nearestLocation]').click()
  })

  it.skip('Should populate state and city dropdowns with relevant information', () => {
    cy.intercept('GET', cityStateAPI, { fixture: 'location-denver' })
    cy.intercept('GET', statesAPI, { fixture: 'state-data' })
      .intercept('GET', citiesAPI, { fixture: 'city-data' })
      .visit(baseUrl)
      .get('select#dropdown-states').select('Colorado')
      .get('select#dropdown-cities').select('Denver')
      .get('input[name=submit]').click()
  })
})
