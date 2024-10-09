
export const HomePageSelectors = {
    locationInput: '[data-testid="structured-search-input-field-query"]',
    locationSuggestionItem: '[data-testid="option-0"]',
    dateInput: '[data-testid="structured-search-input-field-split-dates-0"]',
    calendarDay: (date) => `[data-testid="calendar-day-${date}"]`,
    guestsButton: '[data-testid="structured-search-input-field-guests-button"]',
    adultsIncreaseButton: '[data-testid="stepper-adults-increase-button"]',
    childrenIncreaseButton: '[data-testid="stepper-children-increase-button"]',
    searchButton: '[data-testid="structured-search-input-search-button"]',
    moreFiltersButton: 'button[data-testid="more-filters-button"]', 
    bedroomsInput: 'input[name="bedrooms"]', 
    poolCheckbox: 'input[name="pool"]',
    showStaysButton: 'button[data-testid="save-filter-button"]' 
};

export const SearchResultsPageSelectors = {
    locationText: '[data-testid="little-search-location"]',
    dateSummary: '[data-testid="little-search-date""]',
    guestsSummary: '[data-testid="little-search-guests"]',
    searchSummary: '[data-testid="search-summary"]', 
    resultsList: '[data-testid="property-list"]',
    firstPropertyViewDetailsButton: '[data-testid="property-card"] button',
    firstPropertyCard: '[data-testid="property-card"]:first',
    mapPin: '[data-testid="map-pin"]', 
    mapPopup: '[data-testid="map-popup"]', 
    propertyNameInResults: '[data-testid="property-name"]', 
    propertyNameInPopup: '[data-testid="map-popup-property-name"]'
    };

export const PropertyDetailsPageSelectors = {
    amenitiesPopup: '[data-testid="amenities-popup"]', 
    facilityPool: '[data-testid="facility-pool"]' 
};
