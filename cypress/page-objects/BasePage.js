class BasePage {
    pause(miliseconds) {
        cy.wait(miliseconds);
    }
}

export default BasePage;