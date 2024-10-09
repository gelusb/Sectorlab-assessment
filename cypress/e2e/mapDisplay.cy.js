import { homePage } from '../pages/homepage';
import { searchResultsPage } from '../pages/searchResultsPage';
import { getFormattedDate } from '../utils/dateUtils';

describe('Verify that a property is displayed on the map correctly', () => {
    const location = 'Rome, Italy';
    const checkInDate = getFormattedDate(7);
    const checkOutDate = getFormattedDate(14);
    const adults = 2;
    const children = 1;

    it('Should verify the property is displayed on the map', () => {
        cy.visit('https://www.airbnb.com');
        homePage.enterLocation(location);
        homePage.selectDates(checkInDate, checkOutDate);
        homePage.selectGuests(adults, children);
        homePage.search();
        searchResultsPage.verifyResultsSummary();
        searchResultsPage.hoverOverFirstProperty();
        searchResultsPage.verifyMapPinChangesColor();
        searchResultsPage.clickOnMapPin();
        searchResultsPage.verifyPropertyDetailsInPopup();
    });
  })