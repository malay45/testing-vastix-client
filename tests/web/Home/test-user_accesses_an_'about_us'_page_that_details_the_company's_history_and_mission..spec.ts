import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


<<<<<<< HEAD
test('test', { tag: ["@Home"] }, async ({ page }, testInfo6) => {
=======
test('test', { tag: ["@Home"] }, async ({ page }, testInfo5) => {
>>>>>>> fca381f3b2154ff2b1bdf1c2b84b659d2a208827


    await allure.step("Navigate to https://aksharsoftsolutions.com/ : https://aksharsoftsolutions.com/", async () => { await page.goto('https://aksharsoftsolutions.com/'); });

    await allure.step("Click WooCommerce : ", async () => { await page.locator('xpath=/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[6]/a[1]/div[1]').waitFor({ state: "visible" }); await page.locator('xpath=/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[6]/a[1]/div[1]').click(); });

    await allure.step("Click  : ", async () => { await page.locator('xpath=/html[1]/body[1]/section[2]/div[1]/div[1]/div[2]/a[1]/div[1]/div[1]/img[1]').waitFor({ state: "visible" }); await page.locator('xpath=/html[1]/body[1]/section[2]/div[1]/div[1]/div[2]/a[1]/div[1]/div[1]/img[1]').click(); });

    await allure.step("Click Dr. Chaitanya Buch : ", async () => { await page.locator('xpath=/html[1]/body[1]/div[1]/div[4]/div[2]/a[1]/div[1]/div[2]').waitFor({ state: "visible" }); await page.locator('xpath=/html[1]/body[1]/div[1]/div[4]/div[2]/a[1]/div[1]/div[2]').click(); });

    await allure.step("Click  : ", async () => { await page.locator('xpath=/html[1]/body[1]/div[1]/div[4]/div[2]/a[1]/div[1]/div[1]/img[1]').waitFor({ state: "visible" }); await page.locator('xpath=/html[1]/body[1]/div[1]/div[4]/div[2]/a[1]/div[1]/div[1]/img[1]').click(); });


});
