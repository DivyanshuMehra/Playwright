import { test, expect, Browser, Locator, Page } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { faker } from '@faker-js/faker';
import { UserInfo } from '../../interfaces/user.info';
import { SIGNUP_TEXTS } from '../../fixtures/login-data';
// import { chromium, webkit, firefox } from 'playwright';
const password = faker.internet.password({ length: 12, prefix: "Taab" });
const newUser: UserInfo = {
  username: faker.internet.username(),
  email: faker.internet.email({ provider: 'taabsolutions.com' }),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  password: password,
  confirmPassword: password
}
const loginEmail = process.env.EMAIL_ID;
const loginPassword = process.env.PASSWORD;

test.describe('Login Page Tests', () => {
  let loginPage: LoginPage;
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.BASE_URL);

    loginPage = new LoginPage(page);
    await page.goto("/signup")
    await expect(page).toHaveURL("/signup");
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  /**
   * Test Case: Logo and form heading UI
   * Expected result: verify logo and form heading are displayed correctly
   */
  test('Verify logo and form heading are displayed correctly', async ({ page }) => {
    await expect(loginPage.logo).toBeVisible();
    await expect(loginPage.formHeading).toBeVisible();
    await expect(loginPage.formHeading).toHaveText(SIGNUP_TEXTS.SIGNUP);
  });

  /**
   * Test Case: Labels and placeholders for all input fields
   * Expected result: verify labels and placeholders for all input fields are correct
   */
  test('Verify labels and placeholders for all input fields are correct', async ({ page }) => {
    // Verify labels
    // const labels = Object.values(loginPage.labels);
    // const labelTexts = Object.values(SIGNUP_TEXTS.LABELS);
    // for (let label=0; label < Object.keys(SIGNUP_TEXTS.LABELS).length -1; label++) {
    //     await expect(labels[label]).toHaveText(labelTexts[label]);
    // }
    await expect(page.locator('label[for="username"]')).toHaveText('Username');
    await expect(page.locator('label[for="email"]')).toHaveText('Email');
    await expect(page.locator('label[for="firstName"]')).toHaveText('First Name');
    await expect(page.locator('label[for="lastName"]')).toHaveText('Last Name');
    await expect(page.locator('label[for="password"]')).toHaveText('Password');
    await expect(page.locator('label[for="confirmPassword"]')).toHaveText('Confirm Password');
    await expect(page.locator('label[for="country"]')).toHaveText('Country');
    // Verify placeholders
    await expect(page.locator('input[name="userName"]')).toHaveAttribute('placeholder', 'Enter your username');
    await expect(page.locator('input[name="emailId"]')).toHaveAttribute('placeholder', 'Enter your email');
    await expect(page.locator('input[name="firstName"]')).toHaveAttribute('placeholder', 'Enter your first name');
    await expect(page.locator('input[name="lastName"]')).toHaveAttribute('placeholder', 'Enter your last name');
    await expect(page.locator('input[name="password"]')).toHaveAttribute('placeholder', 'Enter your password');
    await expect(page.locator('input[name="confirmPassword"]')).toHaveAttribute('placeholder', 'Confirm your password');
  });

  test('login test', async ({ page }) => {

    // const email: Locator = await page.locator("input[type='text']");
    // const password: Locator = await page.locator("[type='password']");
    // const loginButton: Locator = await page.locator("button[type='submit']")

    //fill in the inputs

    await loginPage.fillUsername(newUser.username);
    await loginPage.fillEmail(newUser.email);
    await loginPage.fillFirstName(newUser.firstName);
    await loginPage.fillLastName(newUser.lastName);
    await loginPage.fillPassword(newUser.password);
    await loginPage.fillConfirmPassword(newUser.password);
    await loginPage.selectCountry("India");
    await loginPage.acceptTerms();
    await loginPage.acceptMarketing();
    // await loginPage.loginButton.click();

    // Assert login was successful
    // await expect(page).toHaveURL("/");
    // await expect(page).toHaveTitle("Nex Predictor");
    // await expect(page.title()).toContain("Nex Predictor");
  });

  /**
   * Test Case: Signup with an existing user
   * Expected result: User should be redirected to login page with an error message
   */
  test('login with existing user', async ({ page }) => {
    await loginPage.fillUsername(newUser.username);
    //Entering existing user's email id
    await loginPage.fillEmail(loginEmail);
    await loginPage.fillFirstName(newUser.firstName);
    await loginPage.fillLastName(newUser.lastName);
    await loginPage.fillPassword(newUser.password);
    await loginPage.fillConfirmPassword(newUser.password);
    await loginPage.selectCountry("India");
    await loginPage.acceptTerms();
    await loginPage.acceptMarketing();
    await loginPage.clickSubmit();

    //verify error message is displayed
    await expect(page.getByText("Warning")).toBeVisible();
    await expect(page.getByText("This email is already associated with an account.")).toBeVisible();
    await loginPage.okButton.click();
    // Assert user is redirected to signup page
    await expect(page).toHaveURL("/signup");
  });

  /**
   * Test Case: Signup with empty required fields
   * Expected result: Error messages should be displayed for all required fields
   */
  test('Login with empty fields', async ({ page }) => {
    // await loginPage.clickLoginButton();
    // Assert error messages are displayed
    // await expect(loginPage.usernameError).toBeVisible();
    // await expect(loginPage.emailError).toBeVisible();
    // await expect(loginPage.firstNameError).toBeVisible();
    // await expect(loginPage.lastNameError).toBeVisible();
    // await expect(loginPage.passwordError).toBeVisible();
    // await expect(loginPage.confirmPasswordError).toBeVisible();
    // await expect(loginPage.countryError).toBeVisible();
    // await expect(loginPage.termsError).toBeVisible();
  });

  /**
    * Test Case: Signup with invalid email format
    * Expected result: Error messages should be displayed with invalid email format
    */
  test('Should show error for invalid email format', async ({ page }) => {
    // await fillValidForm(page);
    await page.fill('#email', 'invalidemail');
    await page.click('button[type="submit"]');
    await expect(page.locator('#email-error')).toBeVisible();
  });

  /**
    * Test Case: Should show error for short password
    * Expected result: should show error for short password
    */
  test('Should show error for short password', async ({ page }) => {
    // await fillValidForm(page);
    await page.fill('#password', '123');
    await page.fill('#confirmPassword', '123');
    await page.click('button[type="submit"]');
    await expect(page.locator('#password-error')).toBeVisible();
  });

  /**
   * Test Case: Signup when passwords do not match
   * Expected result: Should show error when passwords do not match
   */
  test('Should show error when passwords do not match', async ({ page }) => {
    // await fillValidForm(page);
    await page.fill('#confirmPassword', 'Different@123');
    await page.click('button[type="submit"]');
    await expect(page.locator('#confirmPassword-error')).toBeVisible();
  });


});