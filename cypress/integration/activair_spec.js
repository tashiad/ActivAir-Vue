import key from '../../src/keyAPI'
const baseUrl = 'http://localhost:8080/'

describe('ActivAir Website', () => {
  it('Should display a header with website name and subheader', () => {
    cy.intercept('GET', 'states', { fixture: 'state-data' })
      .visit(baseUrl)
      .get('header')
      .get('h1').should('have.text', 'ActivAir')
      .get('h2').should('have.text', 'Find fresh air for your outdoor activities.')
  })

  it('Should populate a location card with mock nearest location data', () => {
    cy.intercept('GET', 'states', { fixture: 'state-data' })
      .visit(baseUrl)
      .intercept('GET', 'nearest', { fixture: 'location-boulder' })
      .get('input[name=nearestLocation]').click()
      .get('.location-card').find('h2').should('have.text', 'Boulder, Colorado')
  })

  it('Should populate state and city dropdowns with relevant information and create a card from the selected location', () => {
    cy.intercept('GET', 'states', { fixture: 'state-data' })
      .visit(baseUrl)
      .intercept('GET', 'city=Denver', { fixture: 'location-denver' })
      .intercept('GET', 'cities?state=Colorado', { fixture: 'city-data' })
      .get('select#dropdown-states').select('Colorado').should('have.value', 'Colorado')
      .get('select#dropdown-cities').select('Denver').should('have.value', 'Denver')
      .get('input[name=submit]').click()
      .get('.location-card').find('h2').should('have.text', 'Denver, Colorado')
      .get('.location-card').find('.button-delete').click()
  })

  it('Should display an error message when the server returns a 400 error', () => {
    cy.intercept('GET', 'states', { statusCode: 404 , body: 'failure'})
      .visit(baseUrl)
      .get('.error-message').should('have.text', 'Please wait a minute and refresh the page. Something went wrong with the server.')
  })

  it('Should display an error message when the server returns a 500 error', () => {
    cy.intercept('GET', 'states', { statusCode: 500, body: 'failure' })
      .visit(baseUrl)
      .get('.error-message').should('have.text', 'Please wait a minute and refresh the page. Something went wrong with the server.')
  })
})
