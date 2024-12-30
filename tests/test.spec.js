const { test, expect } = require('@playwright/test');
const HeaderPage = require('../pageObject/HeaderPage');
const CompanyPage = require('../pageObject/CompanyPage');
const CustomersPage = require('../pageObject/CustomersPage');
const FooterPage = require('../pageObject/FooterPage');
const indexPage = require('../utils/index.page');

test('Testim Application Automation', async ({ page }) => {  
  const headerPage = new HeaderPage(page);
  const companyPage = new CompanyPage(page);
  const customersPage = new CustomersPage(page);
  const footerPage = new FooterPage(page);
  await page.goto(indexPage.data.testimlink);  
  await headerPage.verifyHeaderComponents();
  await headerPage.navigateToLoginPage();
  await headerPage.navigateToCompany();
  await companyPage.validateSubSections();
  await customersPage.navigateToCustomersSection();
  await customersPage.navigateToReviews();
  const reviewData = await customersPage.getReviewDetails();
  const storedReview = JSON.stringify(reviewData);
  const retrievedReview = await customersPage.getReviewDetails();
  expect(JSON.stringify(retrievedReview)).toBe(storedReview);
  await footerPage.scrollToFooter();
  await footerPage.validateFooterComponents();
});
