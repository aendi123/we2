describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.get('input[name="name"]')
      .type("Markus")
      .should("have.value", "Markus");
    cy.get('form').submit();
    cy.get('form:invalid')
      .should('have.length', 1); //form is invalid
    cy.get('input:invalid')
      .should('have.length', 1) //a field (email) is invalid
      .then(($input) => {  //us jquery to access validation msg
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
      })
  })
})
