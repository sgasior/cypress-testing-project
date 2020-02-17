import HomePage from "../../page-objects/HomePage";
import TopNavbar from "../../page-objects/components/TopNavbar";

describe("Forgotten Password", () => {

    const homePage = new HomePage();
    const topNavbar = new TopNavbar();

    before(function () {
        homePage.visit();
    });

    it('should display login form', function () {
        topNavbar.clickOnSignInButton();
    });

    it('should display forgotten password form', function () {
        cy.contains("Forgot your password ?").click();
        cy.get('#send_password_form').should('be.visible');
        cy.url().should("include", "forgot-password.html");
    });

    it('should submit forgotten password form', function () {
        cy.get('#user_email').type("@email.@email.com");
        cy.contains("Send Password").click();
    });

    it('should display sucess message', function () {
        cy.get("h3").contains('Forgotten Password');
        cy.url().should('include', 'forgotten-password-send.html');
    })

});