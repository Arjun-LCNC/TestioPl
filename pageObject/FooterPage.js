class FooterPage {
  constructor(page) {
    this.page = page;
    this.socialLinks = page.locator('.social-media-links');
    this.newsletterSubscription = page.locator('.newsletter-subscription');
    this.copyrightText = page.locator('.copyright');
    this.privacyPolicyLink = page.locator('text=Privacy Policy');
  }
  async validateFooterComponents() {
    await expect(this.socialLinks).toBeVisible();
    await expect(this.newsletterSubscription).toBeVisible();
    await expect(this.copyrightText).toBeVisible();
    await expect(this.privacyPolicyLink).toBeVisible();
  }
  async scrollToFooter() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }
}
module.exports = FooterPage;
