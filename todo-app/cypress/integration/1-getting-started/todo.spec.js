describe('todo app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001')
  })

  it('displays no todo items by default', () => {

    cy.get('.todos-list').should('have.length', 0)

  })
  it('can add new todo items', () => {
    const newItem = 'Feed the cat'
    cy.get('#todoinput').type(`${newItem}{enter}`)
    cy.get('.todos-list')
      .should('have.length', 1)
      .last()
      .should('contain.text', newItem)

    cy.contains('Feed the cat')
        .parent()
        // .closest('button')
        .find('.button-complete')
        .click()

    cy.contains('Feed the cat')
        .should('have.class', 'complete')
  })

  it('can check off an item as completed', () => {
    // cy.get('.button-complete').click();
    cy.contains('Feed the cat')
      .closest('button')
      .find('.button-complete')
      .click()

    // Now that we've checked the button, we can go ahead and make sure
    // that the list element is now marked as completed.
    // Again we'll use `contains` to find the <label> element and then use the `parents` command
    // to traverse multiple levels up the dom until we find the corresponding <li> element.
    // Once we get that element, we can assert that it has the completed class.
    cy.contains('Feed the cat')
      .parents('div')
      .should('have.class', 'complete')
  })

})
