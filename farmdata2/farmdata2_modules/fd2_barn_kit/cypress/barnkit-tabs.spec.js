/**
 * This spec tests the BarnKit Sub-Tabs
 */

describe("Test the BarnKit Sub-Tabs", () => {

    beforeEach(()=> {
        cy.login("manager1", "farmdata2");
        cy.visit("/farm/fd2-barn-kit/cypress");
    });
    
    it("Check if the order of the tabs")
})