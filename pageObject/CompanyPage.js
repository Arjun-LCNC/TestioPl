const { expect } = require('@playwright/test');
class CompanyPage {
  constructor(page) {
    this.page = page;
    this.subSections = page.locator('nav a');

  }
  async navigateToCompanySection() {
    await this.page.click('text=Company');
  }
  async validateSubSections() {
    const sections = ['About Us', 'Careers', 'Customers', 'Testim Partners'];
    for (const section of sections) {
      await expect(this.page.locator(`text=${section}`)).toBeVisible();
    }
  }
}
module.exports = CompanyPage;
