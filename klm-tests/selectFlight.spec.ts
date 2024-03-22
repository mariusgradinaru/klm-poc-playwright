import { test, expect, Browser, BrowserContext, Page } from '@playwright/test';
import { KlmHomePage } from '../src/pages/klm-home-page';

test('select flight', async ({ page }) => {

  const klmDev = new KlmHomePage(page);
  await klmDev.goto();
  await klmDev.acceptCookieWindow();
  await klmDev.selectCities('AMS', 'Bucharest');
  await klmDev.selectDatesFromCalendar();
  await klmDev.searchFlight();

  await expect(page.locator("mat-input-0")).toBeVisible(); // needs to be improved, to be continued

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // await page.goto(BASE_URL);

    // await page.waitForTimeout(50000);

    // await expect(page.locator("#accept_cookies_btn")).toBeVisible();

    // await page.locator("#accept_cookies_btn").click();

    // await page.locator("#mat-input-5").click();

    // await page.keyboard.insertText("AMS");

    // await page.keyboard.press("Enter");

    // await page.locator("#mat-input-6").click();

    // await page.waitForTimeout(3000);

    // await page.keyboard.insertText("Bucharest");

    // await page.waitForTimeout(2000);

    // await page.keyboard.press("Enter");

    // await page.waitForTimeout(2000);

    // await page.locator("bwc-date-picker-range-input").click();

    // await page.waitForTimeout(2000);

    // await page.getByText("23").first().click();

    // await page.getByText("30").first().click();

    // await page.getByText("Confirm dates").click();

    // await page.getByText("Search flights").click();

    // await page.waitForTimeout(15000);

    // await expect (page.locator("bw-itinerary-select__flight")).toBeVisible();

    // await page.locator("bw-itinerary-select__flight").first().click();

    // // await expect(page.getByTitle('mdc-button__label')).toHaveText('22');

    // // await page.locator('mdc-button__label').getByText("22").click();

    // // await expect(page.locator("mat-input-0")).toBeVisible();
  
    // // Expect a title "to contain" a substring.
    // await expect(page).toHaveTitle(/KLM Royal Dutch Airlines - Book flights online - KLM Netherlands/);
  });