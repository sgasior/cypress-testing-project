import HomePage from "../../page-objects/HomePage";
import TopNavbar from "../../page-objects/components/TopNavbar";
import SearchResultsPage from "../../page-objects/SearchResultsPage";

describe("Searchbox Test", () => {

    const homePage = new HomePage();
    const topNavbar = new TopNavbar();
    const searchResultPage = new SearchResultsPage();

    before(function () {
        homePage.visit();
    });

    it('should search for value via searchbox', function () {
        topNavbar.search('bank');
    });

    it('should display search result page', function () {
        searchResultPage.displayTitle();
    });

    it('should display homepage again', function () {
        cy.go("back");
        cy.url().should('include', 'index.html')
    })


});