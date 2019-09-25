// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

context('Top Posts Feed', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('adds a new post and appends it to the feed', () => {
    cy.get('.new-post-title')
      .type('Feedr surpasses Reddit in active daily users!{tab}')
      .type('Someday this will happen...')
    cy.get('.new-post-add').click()
    cy.get('.posts li').should('have.length', 1)
  })

  
})
