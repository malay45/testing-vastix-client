import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('test', { tag: ["@Home"] }, async ({ page }, testInfo) => {

    
await allure.step("Navigate to https://aksharsoftsolutions.com/ : https://aksharsoftsolutions.com/", async() =>{ await page.goto('https://aksharsoftsolutions.com/');});

await allure.step("Click ReactJS : ", async() =>{ await page.locator('xpath=/html[1]/body[1]/section[2]/div[1]/div[1]/div[1]/div[2]/a[1]/div[1]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/section[2]/div[1]/div[1]/div[1]/div[2]/a[1]/div[1]').click();});

await allure.step("Click Website Development : ", async() =>{ await page.locator('xpath=/html[1]/body[1]/section[2]/div[1]/div[1]/div[1]/div[3]/a[1]/div[1]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/section[2]/div[1]/div[1]/div[1]/div[3]/a[1]/div[1]').click();});


});