/**
 * This spec tests the seeding report empty state behavior:
 *   - "No Logs" message appears when no logs exist in date range
 *   - Table is not visible when no logs exist in date range
 *   - Rows in the table are sorted by date in ascending order
 */
describe('Seeding Report Table Validation', () => {
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-barn-kit/seedingReport')
        cy.waitForPage()
    })

    it('verify generating table', () => {
        // Set a date range known to have data
        cy.get('[data-cy=date-range-selection]').within(() => {
            cy.get('input').first()
                .clear()
                .type('2019-07-01')
            cy.get('input').last()
                .clear()
                .type('2019-07-31')
        })
        cy.get('[data-cy=generate-rpt-btn]').click()
    })

    it('verify "No Logs" message appears when no logs exist', () => {
        // Set a date range known to have no data
        cy.get('[data-cy=date-range-selection]').within(() => {
            cy.get('input').first()
                .clear()
                .type('2018-01-01')
            cy.get('input').last()
                .clear()
                .type('2018-01-31')
        })
        cy.get('[data-cy=generate-rpt-btn]').click()
        
        // Verify "No Logs" message is displayed
        cy.get('[data-cy=no-logs-message]')
            .should('be.visible')
            .and('contain', 'No Logs Found in These Dates')
    })

    it('verify table is not visible when no logs exist', () => {
        // Use a different empty date range for second test
        cy.get('[data-cy=date-range-selection]').within(() => {
            cy.get('input').first()
                .clear()
                .type('2018-02-01')
            cy.get('input').last()
                .clear()
                .type('2018-02-28')
        })
        cy.get('[data-cy=generate-rpt-btn]').click()
        
        // Verify table is not visible
        cy.get('[data-cy=report-table]').should('not.exist')
    })

    it('should set the date range and have rows sorted by date in ascending order', () => {
        // Set the date range
        cy.get('input').first()
            .clear()
            .type('2019-07-01');
        cy.get('input').last()
            .clear()
            .type('2019-07-31');

        // Click the generate report button
        cy.get('[data-cy=generate-rpt-btn]').click();

        // Wait for the page to load completely
        cy.get('[data-cy="report-table"]').should('be.visible');

        // Get all the rows in the table
        cy.get('[data-cy="report-table"] tbody tr').then(rows => {
            // Extract the dates from the rows
            const dates = [...rows].map(row => new Date(row.cells[0].innerText));

            // Check if the dates are sorted in ascending order
            const sortedDates = [...dates].sort((a, b) => a - b);
            expect(dates).to.deep.equal(sortedDates);
        });
    });
})
