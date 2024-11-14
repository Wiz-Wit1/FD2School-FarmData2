describe("Test the Seeding Report default values", ()=>{

    beforeEach(()=> {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-barn-kit/seedingReport")
    })
    it("Check the page header", ()=> {
        cy.get("[data-cy=text-center]")
        .should("have.text","Seeding Report")
    })
    it("Check the default date - end date", ()=> {
        const today = new Date().toISOString().split("T")[0]
        cy.get("[data-cy=date-range-selection]")
        .find('input[data-cy="end-date"]').should("have.value", today)
    })
})