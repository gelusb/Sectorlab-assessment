import { HomePageSelectors } from '../utils/selectors';

export class HomePage {

    enterLocation(location) {
        cy.get(HomePageSelectors.locationInput).type(location, { delay: 100 });
        cy.contains(HomePageSelectors.locationSuggestionItem, location).click();
    }

    selectDates(checkInDate, checkOutDate) {
        cy.get(HomePageSelectors.dateInput).click();
        cy.get(HomePageSelectors.calendarDay(checkInDate)).click();
        cy.get(HomePageSelectors.calendarDay(checkOutDate)).click();
    }

    selectGuests(adults, children) {
        cy.get(HomePageSelectors.guestsButton).click();
        for (let i = 0; i < adults; i++) {
            cy.get(HomePageSelectors.adultsIncreaseButton).click();
        }
        for (let i = 0; i < children; i++) {
            cy.get(HomePageSelectors.childrenIncreaseButton).click();
        }
    }

    search() {
        cy.get(HomePageSelectors.searchButton).click();
    }

    openMoreFilters() {
        cy.get(HomePageSelectors.moreFiltersButton).click();
    }

    setBedrooms(number) {
        cy.get(HomePageSelectors.bedroomsInput).clear().type(number);
    }

    selectPool() {
        cy.get(HomePageSelectors.poolCheckbox).check({ force: true });
    }

    applyFilters() {
        cy.get(HomePageSelectors.showStaysButton).click();
    }
}

export const homePage = new HomePage;
