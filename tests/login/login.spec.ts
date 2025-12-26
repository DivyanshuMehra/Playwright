import { test, expect, Browser, Locator, Page } from '@playwright/test';
// import { chromium, webkit, firefox } from 'playwright';
const loginEmail = process.env.EMAIL_ID;
const loginPassword = process.env.PASSWORD;

test.describe('Login Page Tests', () => {
  test.beforeEach(async () => {
    // const browser: Browser = await chromium.launch({ headless: false });
    // const page: Page = await browser.newPage();
  });

  test('login test', async ({ page }) => {

    await page.goto(process.env.BASE_URL)
    const email: Locator = await page.locator("input[type='text']");
    const password: Locator = await page.locator("[type='password']");
    const loginButton: Locator = await page.locator("button[type='submit']")

    //fill in the inputs
    console.log("email and password", loginEmail, loginPassword);

    await email.fill(process.env.EMAIL_ID);
    await password.fill(process.env.PASSWORD);
    await loginButton.click();
    // password.fill(process.env.PASSWORD);
    // loginButton.click();
    // Example test assertions:
    // await expect(page.locator('input[name="username"]')).toBeVisible();
    
    // Fill in login form
    // await page.fill('input[name="username"]', 'testuser');
    // await page.fill('input[name="password"]', 'password123');
    // await page.click('button[type="submit"]');
    
    // Assert login was successful
    await expect(page).toHaveURL("/");
    await expect(page).toHaveTitle("Nex Predictor");
    // await expect(page.title()).toContain("Nex Predictor");
  });
});