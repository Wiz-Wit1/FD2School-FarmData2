describe("Test the Seeding Report default values", ()=>{
    beforeEach(()=> {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-barn-kit/seedingReport")
    })
    it("Check the page header", ()=> {
        cy.get("[data-cy=text-center]")
        .should("have.text","Seeding Report")
    })

    it("Check for Set Dates section", () => {
        cy.get("legend")  
            .should("contain", "Set Dates") 
    })

    it("Check that report components are not initially visible", () => {
        
        cy.get('[data-cy=filters-panel]')
            .should('not.exist')
        cy.get('[data-cy=report-table]')
            .should('not.exist')
        cy.get('[data-cy=direct-summary]')
            .should('not.exist')
        cy.get('[data-cy=tray-summary]')
            .should('not.exist')
    })
})