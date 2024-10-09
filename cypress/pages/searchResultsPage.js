
import { SearchResultsPageSelectors } from '../utils/selectors';

export class SearchResultsPage {
    verifyLocation(location) {
        cy.get(SearchResultsPageSelectors.locationText).should('contain.text', location);
    }

    verifyDates(checkInDate, checkOutDate) {
        cy.get(SearchResultsPageSelectors.dateSummary).should('contain.text', checkInDate);
        cy.get(SearchResultsPageSelectors.dateSummary).should('contain.text', checkOutDate);
    }

    verifyGuests(adults, children) {
        const totalGuests = adults + children;
        cy.get(SearchResultsPageSelectors.guestsSummary).should('contain.text', `${totalGuests} guests`);
    }

    verifyResultsSummary() {
        cy.get(SearchResultsPageSelectors.searchSummary).should('be.visible');
    }

    hoverOverFirstProperty() {
        cy.get(SearchResultsPageSelectors.firstPropertyCard).trigger('mouseover');
    }

    verifyMapPinChangesColor() {
        cy.get(SearchResultsPageSelectors.mapPin).should('have.class', 'hovered-pin-class'); // Replace with the actual class applied when hovered
    }

    clickOnMapPin() {
        cy.get(SearchResultsPageSelectors.mapPin).click();
    }

    verifyPropertyDetailsInPopup() {
        cy.get(SearchResultsPageSelectors.propertyNameInResults).first().invoke('text').then((propertyName) => {
            cy.get(SearchResultsPageSelectors.mapPopup).should('be.visible');
            cy.get(SearchResultsPageSelectors.propertyNameInPopup).should('contain', propertyName);
        });
    }
}

export const searchResultsPage = new SearchResultsPage();
