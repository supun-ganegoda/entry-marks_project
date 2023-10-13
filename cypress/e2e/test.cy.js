describe('project test', () => {

    // Server loading and title testing
    beforeEach(()=>{
        cy.visit('https://entry-marks-portal.netlify.app/')
        cy.title().should('eq', 'Entry Marks Calculation Portal')
    })

    // Regiatration testing
    /*it('test2', () => {
  
        cy.get('.btn--outline').click()

        cy.get('#username').type('ATest')
        cy.get('#email').type('atest@gmail.com')
        cy.get('#password').type('Atest99@@##')
        cy.get('#confirmPassword').type('Atest99@@##')
        
        cy.get('form > button').click()
    })*/

    // Login testing
    it.only('test3', () => {
  
        cy.get('.login > a').click()

        cy.get('#email').type('qtest@gmail.com')
        cy.get('#password').type('Qtest99@@##')
        cy.get('form > button').click()
    })
})