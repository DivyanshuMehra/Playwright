import { test, expect, Browser, Locator, Page, chromium } from '@playwright/test';

test.describe('Locators Tests', () => {
    test('example locator test', async ({ page }) => {
        const browser: Browser = await chromium.launch({ headless: false, channel:'chrome'});
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
        // const exampleLocator: Locator = page.locator('h1');
        // id
        const firstname: Locator = page.locator('#input-firstname');
        const lastname: Locator = page.locator('id=input-lastname');
        //class
        const logo: Locator = page.locator('.img-responsive');
        //text
        const register_heading: Locator = page.locator('text=Register Account');
        //css
        const email: Locator = page.locator('css=input#input-email');
        const telephone: Locator = page.locator('css=input[type="tel"]');
        const privacyCheckbox: Locator = page.locator('input[type="checkbox"]');
        
        //xpath
        const password: Locator = page.locator('xpath=//input[@id="input-password"]');
        // const confirmpassword: Locator = page.locator('//input[@id="input-confirm"]');
        const search: Locator = page.locator('//input[@name="search"] and @type="text"]');


        const logoExist = await logo.isEnabled();
        console.log("Logo is visible ", logoExist);

        const register_heading_exist = await register_heading.isVisible();
        console.log("Register heading is visible ", register_heading_exist);


        //fill in the inputs
        await firstname.fill('Divyanshu');
        await lastname.fill('Mehra');
        await email.fill('div@emample.com');
        await telephone.fill('1234567890');
        await privacyCheckbox.check();
        await password.fill('Password123');
        await search.fill('Macbook Pro');

        // await new Promise(resolve => setTimeout(resolve, 10000));

    });
});
