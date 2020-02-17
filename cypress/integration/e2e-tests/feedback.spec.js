import HomePage from "../../page-objects/HomePage";
import FeedbackPage from "../../page-objects/FeedbackPage";


describe("Feedback Test", () => {


    const homePage = new HomePage();
    const feedbackPage = new FeedbackPage();

    before(function () {
        homePage.visit();
    });

    it('should display feedback form', () => {
        homePage.clickOnOnlineFeedback();
        feedbackPage.feedbackFormIsVisible();
    });

    it('should submit feedback form', function () {
        feedbackPage.fillFeedbackForm("Name", "email@mail.com", "subject", "comment");
        feedbackPage.submitFeedbackForm();
    });

    it("should display succes message", function () {
        feedbackPage.showSuccessMessage();
    })

});