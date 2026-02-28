describe('SauceDemo - Studio Prototypes', () => {
  it('records a successful login', () => {
    // Start with a simple visit to the base URL
    cy.visit('/');
    cy.get('[data-test="username"]').click();
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').click();
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="title"]').should('have.text', 'Products');
    cy.get('[data-test="shopping-cart-link"]').should('be.visible');
    cy.get('[data-test="title"]').should('be.visible');
  });
});