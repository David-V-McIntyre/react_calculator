describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })



it('should be able to add', () => {
  cy.get('#number1').click();
  cy.get('#operator_add').click();
  cy.get('#number4').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '5')
})




it('should be able to subtract', () => {
  cy.get('#number4').click();
  cy.get('#operator-subtract').click();
  cy.get('#number7').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '3')
})

/
it('should be able to multiply', () => {
  cy.get('#number3').click();
  cy.get('#operator-multiply').click();
  cy.get('#number5').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '15')
})

it('should be able to divide', () => {
  cy.get('#number2').click();
  cy.get('#number1').click();
  cy.get('#operator-divide').click();
  cy.get('#number7').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '3')
})

it('should be able to concatenate multiple number button clicks', () => {
  cy.get('#number4').click();
  cy.get('#number4').click();
  cy.get('#number4').click();
  cy.get('.display').should('contain', '444')
})
// operatorClick() - chain multiple operations together
it('should be able to chain multiple operations together', () => {
  cy.get('#number3').click();
  cy.get('#operator-multiply').click();
  cy.get('#number5').click();
  cy.get('#operator_add').click();
  cy.get('#number4').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '19')
})

it('should be able to clear the running total without affecting the calculation', () => {
  cy.get('#number2').click();
  cy.get('#operator_add').click();
  cy.get('#number4').click();
  cy.get('#operator-equals').click();
  cy.get('#operator_add').click();
  cy.get('#number2').click();
  cy.get('#clear').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '6')
})


it('should output as expected for positive numbers', () => {
  cy.get('#number6').click();
  cy.get('#operator_add').click();
  cy.get('#number4').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '10')
})

it('should output as expected for negative numbers', () => {
  cy.get('#number4').click();
  cy.get('#operator-subtract').click();
  cy.get('#number6').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '-2')
})

it('should output as expected for float numbers', () => {
  cy.get('#number2').click();
  cy.get('#operator-divide').click();
  cy.get('#number4').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '0.5')
})

it('should output as expected for very large numbers', () => {
  cy.get('#number1').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#operator-multiply').click();
  cy.get('#number1').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '10000000000')
})

it('should output an exception for impossible division', () => {
  cy.get('#number2').click();
  cy.get('#operator-divide').click();
  cy.get('#number0').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', 'Cannot divide by zero')
})

})