import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';

test('test', { tag: ["@Navigation"] }, async ({ page }, testInfo) => {

    
await allure.step("Navigate to https://aksharsoftsolutions.com/ : https://aksharsoftsolutions.com/", async() =>{ await page.goto('https://aksharsoftsolutions.com/');});

await allure.step("Click ABOUT US : ", async() =>{ await page.locator('xpath=/html[1]/body[1]/header[1]/div[1]/div[1]/nav[1]/div[1]/div[1]/ul[1]/li[3]/a[1]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/header[1]/div[1]/div[1]/nav[1]/div[1]/div[1]/ul[1]/li[3]/a[1]').click();});

await allure.step("Click TESTIMONIALS : ", async() =>{ await page.locator('xpath=/html[1]/body[1]/header[1]/div[1]/div[1]/nav[1]/div[1]/div[1]/ul[1]/li[4]/a[1]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/header[1]/div[1]/div[1]/nav[1]/div[1]/div[1]/ul[1]/li[4]/a[1]').click();});

await allure.step("Click CONTACT US : ", async() =>{ await page.locator('xpath=/html[1]/body[1]/header[1]/div[1]/div[1]/nav[1]/div[1]/div[1]/ul[1]/li[5]/a[1]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/header[1]/div[1]/div[1]/nav[1]/div[1]/div[1]/ul[1]/li[5]/a[1]').click();});

await allure.step("Click SERVICES : ", async() =>{ await page.locator('xpath=/html[1]/body[1]/header[1]/div[1]/div[1]/nav[1]/div[1]/div[1]/ul[1]/li[2]/a[1]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/header[1]/div[1]/div[1]/nav[1]/div[1]/div[1]/ul[1]/li[2]/a[1]').click();});

await allure.step("Click Website Development : ", async() =>{ await page.locator('xpath=/html[1]/body[1]/section[2]/div[1]/div[1]/div[1]/div[3]/a[1]/div[1]/h2[1]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/section[2]/div[1]/div[1]/div[1]/div[3]/a[1]/div[1]/h2[1]').click();});

await allure.step("Click E-Commerce : ", async() =>{ await page.locator('xpath=/html[1]/body[1]/section[2]/div[1]/div[1]/div[1]/div[4]/a[1]/div[1]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/section[2]/div[1]/div[1]/div[1]/div[4]/a[1]/div[1]').click();});

await allure.step("Click ReactJS : ", async() =>{ await page.locator('xpath=/html[1]/body[1]/section[2]/div[1]/div[1]/div[1]/div[2]/a[1]/div[1]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/section[2]/div[1]/div[1]/div[1]/div[2]/a[1]/div[1]').click();});

await allure.step("Click REST API Integration : ", async() =>{ await page.locator('xpath=/html[1]/body[1]/section[2]/div[1]/div[1]/div[1]/div[7]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/section[2]/div[1]/div[1]/div[1]/div[7]').click();});

await allure.step("Click No posts found under this service. : ", async() =>{ await page.locator('xpath=/html[1]/body[1]/section[2]/div[1]/div[1]/p[1]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/section[2]/div[1]/div[1]/p[1]').click();});


});
