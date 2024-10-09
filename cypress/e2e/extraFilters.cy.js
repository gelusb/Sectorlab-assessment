import { homePage } from '../pages/homepage';
import { searchResultsPage } from '../pages/searchResultsPage';
import { propertyDetailsPage } from '../pages/propertyDetailsPage';
import { getFormattedDate } from '../utils/dateUtils';

describe('Verify that the results and details page match the extra filters.', () => {
    const location = 'Rome, Italy';
    const checkInDate = getFormattedDate(7);
    const checkOutDate = getFormattedDate(14);
    const adults = 2;
    const children = 1;

    it('Apply the selected filters and verify the search results.', () => {
        cy.visit('https://www.airbnb.com');
        homePage.enterLocation(location);
        homePage.selectDates(checkInDate, checkOutDate);
        homePage.selectGuests(adults, children);
        homePage.search();
        homePage.openMoreFilters();
        homePage.setBedrooms(5);
        homePage.selectPool();
        homePage.applyFilters();
        searchResultsPage.verifyResultsHaveMinimumBedrooms(5);
        searchResultsPage.openFirstProperty();
        propertyDetailsPage.verifyPoolFacility();
    });
});
