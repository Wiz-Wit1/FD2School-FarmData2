/**
 * This spec tests the BarnKit Sub-Tabs
 */

describe("Test the BarnKit Sub-Tabs", () => {

    beforeEach(()=> {
        cy.login("manager1", "farmdata2");
        cy.visit("/farm/fd2-barn-kit/cypress");
    });
    
    it("Checks that the BarnKit tab has exactly 3 sub-tabs", () => {
        // Wait for the secondary tabs element to exist
        cy.get("ul.tabs--secondary.pagination", { timeout: 10000 })
            .should("exist")
            .then((tabList) => {

                // Get all sub-tabs links within the secondary tabs list
                cy.get("ul.tabs--secondary.pagination li > a")
                    .should("be.visible")
                    .then((tabs) => {
                        // Check the number of tabs
                        expect(tabs).to.have.length(3);

                        
                        
                    });
            });
    });
    
})