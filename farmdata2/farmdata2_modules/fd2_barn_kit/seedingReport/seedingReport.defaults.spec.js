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
})