import {Page, Locator} from '@playwright/test';

export abstract class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //common locators
    readonly commonElements = {
        // add common locators here
    }

    //common methods
    async performTask(): Promise<void> {
        // use this when method is not returning any value
        // implement common task here 
    }
    async returnSomeValue(): Promise<string> {
        // use this when method is returning some value
        // implement common task here 
        return "some value";
    }
}