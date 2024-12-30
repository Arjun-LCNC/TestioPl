const { expect } = require('@playwright/test');
const indexPage = require('../utils/index.page');
const navcomponents = require('../data/data.json');
require('dotenv').config();
class HeaderPage {
  constructor(page) {
    this.page = page;
    this.logo = page.locator("//img[@alt='Tricentis Testim Logo']");
    this.products = page.locator("//a[normalize-space()='Products']");
    this.Solutions = page.locator("//a[normalize-space()='Solutions']");
    this.Developers = page.locator("//a[normalize-space()='Developers']");
    this.Company = page.locator("//a[normalize-space()='Company']");
    this.Resources = page.locator("//a[normalize-space()='Resources']");
    this.Pricing = page.locator("//ul[@class='h-nav']//a[normalize-space()='Pricing']");
    this.Login = page.locator("//a[@class='btn-link']");
    this.companyAbout = page.locator("//span[text()='About']");
    this.comapnyCustomers = page.locator("//span[text()='Customers']");
    this.comapnyCareers = page.locator("//span[text()='Careers']");
    this.comapnyTestimPartners = page.locator("//span[text()='Testim Partners']")

  }
  async verifyHeaderComponents() {
    await expect(this.logo).toBeVisible();
    await expect(this.products).toBeVisible();
    expect(this.products).toHaveText(navcomponents.navElements.Products);
    await expect(this.Solutions).toBeVisible();
    expect(this.Solutions).toHaveText(navcomponents.navElements.Solutions);
    await expect(this.Developers).toBeVisible();
    expect(this.Developers).toHaveText(navcomponents.navElements.Developers);
    await expect(this.Company).toBeVisible();
    expect(this.Company).toHaveText(navcomponents.navElements.Company);
    await expect(this.Resources).toBeVisible();
    expect(this.Resources).toHaveText(navcomponents.navElements.Resources);
    await expect(this.Pricing).toBeVisible();
    expect(this.Pricing).toHaveText(navcomponents.navElements.Pricing);
    await expect(this.Login).toBeVisible();
  }
  async navigateToLoginPage() {
    await this.Login.click();
    await this.page.goBack();
  }

  async navigateToCompany() {
    await this.Company.hover();
    expect(this.companyAbout).toBeVisible();
    expect(this.comapnyCustomers).toBeVisible();
    expect(this.comapnyCareers).toBeVisible();
    expect(this.comapnyTestimPartners).toBeVisible();
  }

  async navigateCustomersReviews() {
    await this.Company.hover();
    await this.comapnyCustomers.click();
    expect(this.comapnyCustomers).click();
  }

}
module.exports = HeaderPage;
