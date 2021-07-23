describe('Testing Home Page rendering', () => {

    beforeEach(()=>{
        cy.visit('/');
    })

    it('should render the home page correctly ', function () {
        // cy.wait(2000);
        cy.get('#bookings').should("exist");
        cy.get('#bookables').should("exist");
        cy.get('#users').should("exist");
        cy.findAllByText('Bookings').should('exist')
    });

    it('should visit bookables page correctly ', function () {
        cy.visit('/bookables');
        cy.get('#bookables').should("exist");
        cy.get('.bookables > :nth-child(1) > .btn',{timeout: 10000}).should('be.visible');
        cy.contains("Meeting Room");
        cy.contains("Lecture Hall");
        cy.get('.bookables > :nth-child(1) > .btn').click();
        cy.wait(2000);
        cy.get('.controls > button').should('exist');
        cy.get('.controls > button').click();
        cy.contains('Show Details');
        cy.get('input').click();
        cy.wait(1000);
    });

})