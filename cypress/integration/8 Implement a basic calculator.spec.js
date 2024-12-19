describe('Basic Calculator', () => {
  const operators = ['+', '-', '*', '/'];
  const testCases = [
    { num1: 5, num2: 3, operator: '+', expected: 8 },
    { num1: 5, num2: 3, operator: '-', expected: 2 },
    { num1: 5, num2: 3, operator: '*', expected: 15 },
    { num1: 6, num2: 3, operator: '/', expected: 2 },
    { num1: 5, num2: 0, operator: '/', expected: 'Cannot divide by zero' },
    { num1: 5, num2: 3, operator: '%', expected: 'Invalid operator' },
  ];

  testCases.forEach(({ num1, num2, operator, expected }) => {
    it(`should calculate ${num1} ${operator} ${num2} correctly using if-else`, () => {
      cy.wrap(calculate1(num1, num2, operator)).should('eq', expected);
    });

    it(`should calculate ${num1} ${operator} ${num2} correctly using switch`, () => {
      cy.wrap(calculate2(num1, num2, operator)).should('eq', expected);
    });

    it(`should calculate ${num1} ${operator} ${num2} correctly using object literal`, () => {
      cy.wrap(calculate3(num1, num2, operator)).should('eq', expected);
    });

    it(`should calculate ${num1} ${operator} ${num2} correctly using eval`, () => {
        if (expected !== 'Cannot divide by zero' && expected !== 'Invalid operator') {
            cy.wrap(calculate4(num1, num2, operator)).should('eq', expected);
        } else {
            cy.wrap(calculate4(num1, num2, operator)).should('eq', expected);
        }
    });

    it(`should calculate ${num1} ${operator} ${num2} correctly using function that returns a function`, () => {
        cy.wrap(calculate5(num1, num2, operator)).should('eq', expected);
    });
  });
});
