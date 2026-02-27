import { type Locator, type Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";
// import {expect} from '@playwright/test';

export class LoginPage extends BasePage {
    //selectors
    // readonly signUpLink: Locator;
    readonly logo: Locator;
    readonly formHeading: Locator;
    readonly labels: {
        userNameLabel: Locator;
        emailLabel: Locator;
        firstNameLabel: Locator;
        lastNameLabel: Locator;
        passwordLabel: Locator;
        confirmPasswordLabel: Locator;
        countryLabel: Locator;
        termsAndPrivacyLabel: Locator;
        promotionalLabel: Locator;
    }
    readonly inputs: {
        userNameInput: Locator;
        emailInput: Locator;
        firstNameInput: Locator;
        lastNameInput: Locator;
        passwordInput: Locator;
        confirmPasswordInput: Locator;
        countryDropdown: Locator;
    }
    // readonly userNameInput: Locator;
    // readonly emailInput: Locator;
    // readonly firstNameInput: Locator;
    // readonly lastNameInput: Locator;
    // readonly passwordInput: Locator;
    // readonly confirmPasswordInput: Locator;
    // readonly countryDropdown: Locator;
    readonly checkboxes: {
        termsAndPrivacyCheckbox: Locator;
        promotionalCheckbox: Locator;
    }
    // readonly termsAndPrivacyCheckbox: Locator;
    // readonly promotionalCheckbox: Locator;
    readonly loginButton: Locator;

    //error message locators
    // readonly usernameError: Locator;
    // readonly emailError: Locator;
    // readonly firstNameError: Locator;
    // readonly lastNameError: Locator;
    // readonly passwordError: Locator;
    // readonly confirmPasswordError: Locator;
    // readonly countryError: Locator;
    // readonly termsError: Locator;
    // readonly promotionalError: Locator;
    readonly okButton: Locator;

    constructor(page: Page) {
        super(page);
        // this.signUpLink = page.locator('a[href="/signup"]');
        this.logo = page.locator('nav').locator('img[alt="NEX Predictor Logo"]');
        this.formHeading = page.locator('h2.text-white');
        this.labels = {
            userNameLabel: page.locator('label[for="userName"]'),
            emailLabel: page.locator('label[for="emailId"]'),
            firstNameLabel: page.locator('label[for="firstName"]'),
            lastNameLabel: page.locator('label[for="lastName"]'),
            passwordLabel: page.locator('label[for="password"]'),
            confirmPasswordLabel: page.locator('label[for="confirmPassword"]'),
            countryLabel: page.locator('label[for="country"]'),
            termsAndPrivacyLabel: page.locator('label[for="agreeTerms"]'),
            promotionalLabel: page.locator('label[for="agreeMarketing"]'),
        }
        this.inputs = {
            userNameInput: page.locator('input[name="userName"]'),
            emailInput: page.locator('input[name="emailId"]'),
            firstNameInput: page.locator('input[name="firstName"]'),
            lastNameInput: page.locator('input[name="lastName"]'),
            passwordInput: page.locator('input[name="password"][type="password"]'),
            confirmPasswordInput: page.locator('input[name="confirmPassword"][type="password"]'),
            countryDropdown: page.locator('select[name="country"]'),
        }
        this.checkboxes = {
            termsAndPrivacyCheckbox: page.locator('input[name="agreeTerms"][type="checkbox"]'),
            promotionalCheckbox: page.locator('input[name="agreeMarketing"][type="checkbox"]'),
        }
        // this.userNameInput = page.locator('input[name="userName"]');
        // this.emailInput = page.locator('input[name="emailId"]');
        // this.firstNameInput = page.locator('input[name="firstName"]');
        // this.lastNameInput = page.locator('input[name="lastName"]');
        // this.passwordInput = page.locator('input[name="password"][type="password"]');
        // this.confirmPasswordInput = page.locator('input[name="confirmPassword"][type="password"]');
        // this.countryDropdown = page.locator('select[name="country"]');
        // this.termsAndPrivacyCheckbox = page.locator('input[name="agreeTerms"][type="checkbox"]');
        // this.promotionalCheckbox = page.locator('input[name="agreeMarketing"][type="checkbox"]');
        this.loginButton = page.locator('button[type="submit"]');

        //errors
        this.okButton = page.locator('button:has-text("OK")');
    }

    //actions
    // async clickSignUpLink(): Promise<void> {
    //     await this.signUpLink.click();
    // }
    async fillUsername(username: string) {
        await this.inputs.userNameInput.fill(username);
    }

    async fillEmail(email: string) {
        await this.inputs.emailInput.fill(email);
    }

    async fillFirstName(firstName: string) {
        await this.inputs.firstNameInput.fill(firstName);
    }

    async fillLastName(lastName: string) {
        await this.inputs.lastNameInput.fill(lastName);
    }

    async fillPassword(password: string) {
        await this.inputs.passwordInput.fill(password);
    }

    async fillConfirmPassword(password: string) {
        await this.inputs.confirmPasswordInput.fill(password);
    }

    async selectCountry(country: string) {
        await this.inputs.countryDropdown.selectOption(country);
    }

    async acceptTerms() {
        await this.checkboxes.termsAndPrivacyCheckbox.check();
    }

    async acceptMarketing() {
        await this.checkboxes.promotionalCheckbox.check();
    }

    async unacceptTerms() {
        await this.checkboxes.termsAndPrivacyCheckbox.uncheck();
    }

    async unacceptMarketing() {
        await this.checkboxes.promotionalCheckbox.uncheck();
    }

    async clickSubmit() {
        await this.loginButton.click();
    }
    // userNameInput(): Locator {
    //     return this.current_page.locator('input[name="userName"]');
    // }
}
