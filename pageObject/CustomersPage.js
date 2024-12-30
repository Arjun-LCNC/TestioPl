class CustomersPage {
  constructor(page) {
    this.page = page;
    this.reviews = page.locator('.customer-review');
  }
  async navigateToCustomersSection() {
    await this.page.click('text=Customers');
  }
  async navigateToReviews() {
    await this.page.click('text=Reviews');
  }
  async getReviewDetails() {
    const review = await this.page.locator('.customer-review').first();
    const customerName = await review.locator('.customer-name').textContent();
    const reviewTitle = await review.locator('.review-title').textContent();
    const reviewContent = await review.locator('.review-content').textContent();

    return { customerName, reviewTitle, reviewContent };
  }
}
module.exports = CustomersPage;
