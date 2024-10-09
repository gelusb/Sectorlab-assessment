
import { PropertyDetailsPageSelectors } from '../utils/selectors';

export class PropertyDetailsPage {
    verifyPoolFacility() {
        cy.get(PropertyDetailsPageSelectors.amenitiesPopup)
            .should('be.visible')
            .within(() => {
                cy.get(PropertyDetailsPageSelectors.facilityPool).should('be.visible');
            });
    }
}

export const propertyDetailsPage = new PropertyDetailsPage();
