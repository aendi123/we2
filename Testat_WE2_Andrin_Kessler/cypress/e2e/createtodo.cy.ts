describe('Create todo', () => {
  it('successfully creates todo', () => {
    cy.visit('http://127.0.0.1:3001/todo');
    
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');    
    const formattedDate = `${year}-${month}-${day}`;
        
    cy.get('input[name="title"]')
    .type("Cypress Test")
    .should("have.value", "Cypress Test");
    cy.get('input[name="importance"]')
    .type("3")
    .should("have.value", 3);
    cy.get('input[name="duedate"]')
    .type(formattedDate)
    .should("have.value", formattedDate);
    cy.get('input[name="finished"]')
    .check()
    .should("be.checked");
    cy.get('textarea[name="description"]')
    .type("This is a description")
    .should("have.value", "This is a description");
    
    cy.get('form').submit();
    
    cy.visit('http://127.0.0.1:3001/');
    
    cy.contains('Cypress Test').should('exist');
    cy.contains('↯↯↯').should('exist');
    cy.contains('0 days ago').should('exist');
    cy.contains('This is a description').should('exist');
    cy.get('span:contains("Completed") input[type="checkbox"][disabled]').should("be.checked");
  })
})
