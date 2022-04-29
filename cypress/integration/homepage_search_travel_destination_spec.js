describe('Testing Wikipedia', () => {
    it('A user can search for a travel destination', () => {
        cy.visit('https://www.wikipedia.org/');
        cy.get('.other-project-link')
        .eq(1)
        .click()
        cy.get('#searchLanguage').select('English');
        cy.contains('English').click();
        cy.get('#searchInput').type('Vienna{enter}')
        cy.contains('Climate');
        cy.contains('Vienna')
        cy.get('.interwiki-pl > .interlanguage-link-target > span').click();
        // cy.contains('Polski').click()
        cy.contains('Wiedeń')
    })
})