import { test, expect, Locator, Page } from "@playwright/test";
import { WicketPage } from "../pages/wicketPage";
import { BasePage } from "../pages/basePage";
import { WICKET_DATA } from "../fixtures/wicket-data";

test.describe('Wicket Page Tests', () => {
    let wicketPage: WicketPage;
    test.beforeEach(async ({ page }) => {
        await page.goto("https://wicketcrash-dev.taabplay.com/free-to-play");
        wicketPage = new WicketPage(page);
    });

    test("play some round of games", async ({ page }) => {
        //set wicket count, bet amount for 3x3 grid and Get number of tiles to be opened
        // await wicketPage.randomWicketCount(WICKET_DATA.MIN_WICKETS_3x3, WICKET_DATA.MAX_WICKETS_3x3);
        // await wicketPage.randomBetAmount(WICKET_DATA.MIN_BET_AMOUNT, WICKET_DATA.MAX_BET_AMOUNT);
        let randomTilesCount:number = await wicketPage.randomTilesCount(WICKET_DATA.TOTAL_3x3_TILES);
        console.log("Random Tiles Count: ", randomTilesCount);
        let tilesIndexes:number[] = await wicketPage.getRandomTilesIndexes(randomTilesCount);
        console.log(`Final array: [${tilesIndexes}]`);
        await wicketPage.startGameButton.click();
        await expect(wicketPage.cancelButton).toBeVisible();
        await expect(wicketPage.bet.max).toBeDisabled();
        await expect(wicketPage.cancelButton).toBeEnabled();
        // await page.getByRole('button').nth(1).click();
        await expect(page).toHaveURL('')
        // await wicketPage.cancelButton.click();
        await wicketPage.openTiles(tilesIndexes);
        await expect(page).toHaveURL('');

        // await page.locator('.relative.cursor-pointer.overflow-hidden').first().click();
        // await page.locator('.relative.grid > div:nth-child(2)').click();
        // await wicketPage.cashOutButton.isVisible();
        // await wicketPage.cashOutButton.click();
    });
})