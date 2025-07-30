import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('test', { tag: ["@Home"] }, async ({ page }, testInfo) => {

    
await allure.step("Navigate to https://aksharsoftsolutions.com/ : https://aksharsoftsolutions.com/", async() =>{ await page.goto('https://aksharsoftsolutions.com/');});

await allure.step("Click CONTACT US : ", async() =>{ await page.locator('xpath=/html[1]/body[1]/header[1]/div[1]/div[1]/nav[1]/div[1]/div[1]/ul[1]/li[5]/a[1]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/header[1]/div[1]/div[1]/nav[1]/div[1]/div[1]/ul[1]/li[5]/a[1]').click();});

await allure.step("Click To better assist you, please describe how we can help... : ", async() =>{ await page.locator('//*[@placeholder="To better assist you, please describe how we can help..."]').waitFor({state:"visible"}); await page.locator('//*[@placeholder="To better assist you, please describe how we can help..."]').click();});

await allure.step("Click How Can We Help You? Select Option Managed Services IT Consulting & Advisory Web Development App Development Cloud Services Other : ", async() =>{ await page.locator('xpath=/html[1]/body[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[5]/p[1]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[5]/p[1]').click();});

await allure.step('Enter vxcvxc in To better assist you, please describe how we can help... : vxcvxc', async() =>{ await page.locator('//*[@placeholder="To better assist you, please describe how we can help..."]').waitFor({state:"visible"}); await page.locator('//*[@placeholder="To better assist you, please describe how we can help..."]').click(); await page.locator('//*[@placeholder="To better assist you, please describe how we can help..."]').fill('vxcvxc');});

await allure.step("in Select Option Managed Services IT Consulting & Advisory Web Development App Development Cloud Services Other : Managed Services", async() =>{ await page.locator('//*[@id="service"]').waitFor({ state: "visible" }); await page.locator('//*[@id="service"]').click(); await page.locator('//*[@id="service"]').selectOption('Managed Services');});

await allure.step("Click Explore our business opening hours. Mon - Fri 10AM - 7PM Sat - Sun OFF : ", async() =>{ await page.locator('xpath=/html[1]/body[1]/section[1]/div[2]/div[1]/div[2]/div[3]/div[1]/div[2]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/section[1]/div[2]/div[1]/div[2]/div[3]/div[1]/div[2]').click();});


});