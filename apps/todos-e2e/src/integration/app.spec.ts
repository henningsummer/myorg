import { getTodos, getAddTodoButton, getColorButton } from './../support/app.po';

describe('todos', () => {
  beforeEach(() => cy.visit('/'));

  it('should display todos', () => {
    getTodos().should((t) => expect(t.length).equal(2))
    getAddTodoButton().click()
    getTodos().should((t) => expect(t.length).equal(3))
    getColorButton().should('have.attr', 'style')
  });
});
