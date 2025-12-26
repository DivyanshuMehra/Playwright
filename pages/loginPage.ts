import { Locator, Page } from "playwright";
// import {expect} from '@playwright/test';

export class LoginPage {
    readonly current_page: Page;
    readonly userNameInput: Locator;
    readonly emailInput: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly countryDropdown: Locator;
    readonly termsAndPrivacyCheckbox: Locator;
    readonly loginButton: Locator;
    constructor(page: Page) {
        this.current_page = page;
        this.userNameInput = page.locator('input[name="userName"]');
        this.emailInput = page.locator('input[name="emailId"]');
        // this.emailInput = page.locator('input[name="emailId"]');
        this.firstNameInput = page.locator('input[name="firstName"]');
        this.lastNameInput = page.locator('input[name="lastName"]');
        this.passwordInput = page.locator('input[name="password"]');
        // this.passwordInput = page.locator('input[name="password"]');
        this.confirmPasswordInput = page.locator('input[name="confirmPassword"]');
        this.countryDropdown = page.locator('select[name="country"]');
        this.termsAndPrivacyCheckbox = page.locator('input[name="termsAndPrivacy"]');
        this.loginButton = page.locator('button[type="submit"]');
    }
    
        // userNameInput(): Locator {
        //     return this.current_page.locator('input[name="userName"]');
        // }
}
