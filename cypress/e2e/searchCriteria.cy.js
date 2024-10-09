import { homePage } from '../pages/homepage';
import { searchResultsPage } from '../pages/searchResultsPage';
import { getFormattedDate } from '../utils/dateUtils';

describe('Verify that the results match the search criteria', () => {
    const location = 'Rome, Italy';
    const checkInDate = getFormattedDate(7);
    const checkOutDate = getFormattedDate(14);
    const adults = 2;
    const children = 1;

    it('Should search properties with the specified dates and guests', () => {
        cy.visit('https://www.airbnb.com');
        homePage.enterLocation(location);
        homePage.selectDates(checkInDate, checkOutDate);
        homePage.selectGuests(adults, children);
        homePage.search();
        searchResultsPage.verifyLocation(location);
        searchResultsPage.verifyDates(checkInDate, checkOutDate);
        searchResultsPage.verifyGuests(adults, children);
    });
});
