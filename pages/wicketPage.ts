import { Locator, Page, expect } from "playwright/test";
import { BasePage } from "./basePage";
let wicketCount: number;
export class WicketPage extends BasePage {
    //selectors
    readonly wicket: {
        input: Locator;
        plus: Locator;
        minus: Locator;
    }
    readonly bet: {
        amount: Locator;
        plus: Locator;
        minus: Locator;
        max: Locator;
        min: Locator;
    }
    readonly tileIndex: Locator;
    readonly selectedGrid: Locator;
    readonly thirdUmpireOption: Locator;
    readonly startGameButton: Locator;
    readonly cancelButton: Locator;
    readonly cashOutButton: Locator;
    readonly winLossPage: {
        history: Locator;
        playAgain: Locator;
    }
    constructor(page: Page) {
        super(page);
        this.wicket = {
            input: page.locator("input[name='wicket-count']"),
            plus: page.getByRole('button').nth(3),
            minus: page.getByRole('button').nth(2)
        }
        this.bet = {
            amount: page.getByRole('textbox').nth(1),
            plus: page.locator('#bet-plus'),
            minus: page.locator('#bet-minus'),
            max: page.getByRole('button', { name: 'Max' }),
            min: page.locator('#bet-min')
        }
        this.tileIndex = page.locator('.relative.cursor-pointer');
        // this.tileIndex = page.locator('.relative.cursor-auto.aspect-square');
        this.selectedGrid = page.locator('#selected-grid');
        this.thirdUmpireOption = page.locator('#third-umpire-option');
        this.startGameButton = page.getByRole('button', { name: 'Start Game' });
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
        this.cashOutButton = page.getByRole('button', { name: 'Cash Out' });
        this.winLossPage = {
            history: page.getByRole('button', { name: 'History' }),
            playAgain: page.getByRole('button', { name: 'Play Again' })
        }
    }

    //actions for the game

    async setWicketCount(count: number): Promise<void> {
        await this.wicket.input.fill(count.toString());
    }

    async setBetAmount(amount: number): Promise<void> {
        await this.bet.amount.fill(amount.toString());
    }

    async selectThirdUmpireOption(option: string): Promise<void> {
        await this.thirdUmpireOption.selectOption(option);
    }

    async randomBetAmount(min: number, max: number): Promise<void> {
        const randomAmount = Math.floor(Math.random() * (max - min + 1)) + min;
        await this.setBetAmount(randomAmount);
        wicketCount = parseInt(await this.wicket.input.inputValue());
    }

    async getWicketCount(): Promise<number> {
        return parseInt(await this.wicket.input.inputValue());
    }

    async randomWicketCount(min: number, max: number): Promise<void> {
        const randomCount = Math.floor(Math.random() * (max - min + 1)) + min;
        await this.setWicketCount(randomCount);
    }

    async randomTilesCount(total_tiles: number): Promise<number> {
        const wicketCount = await this.getWicketCount();
        // console.log("Wicket Count: ", wicketCount);
        const randomTilesCount = Math.floor(Math.random() * (total_tiles - wicketCount + 1));
        // await this.selectedGrid.fill(randomCount.toString());
        if (randomTilesCount === 0) {
            return 1;
        }
        return randomTilesCount;
    }

    async getRandomTilesIndexes(count: number): Promise<number[]> {
        const selectedIndexes: number[] = [];

        while (selectedIndexes.length < count) {  // Loop until we have 'count' unique items
            const randomTileIndex = Math.floor(Math.random() * 9) + 1;

            if (!selectedIndexes.includes(randomTileIndex)) {
                // Only push if it's unique
                selectedIndexes.push(randomTileIndex);
            }
        }
        return selectedIndexes;
    }

    async openTiles(indexes: number[]): Promise<void> {
        let currentIndex = 0;

        for (const index of indexes) {
            const isLastIteration = currentIndex === indexes.length - 1;
            let tileLocator = this.tileIndex.nth(index - 1).locator('.flex').first();
            await expect(tileLocator).toBeVisible();
            await tileLocator.click();
            // await this.tileIndex.nth(index - 1).locator('.aspect-square.group').click();
            const isPlayAgainVisible: boolean = await this.winLossPage.playAgain.isVisible().catch(() => false);
            if (isPlayAgainVisible) {
                console.log(`Play Again appeared after tile ${index} - breaking loop`);
                await this.winLossPage.playAgain.click();
                break;
            }

            if (isLastIteration) {
                console.log('Last tile reached - clicking Cashout button');
                await this.cashOutButton.click();
            }
            currentIndex++;
        }
    }
}