import { expect, type Locator, type Page } from '@playwright/test';
import { BASE_URL } from '../constants/api';

export class KlmHomePage {
    readonly page: Page;
    readonly cookieWindow: Locator;
    readonly tripOption: Locator;
    readonly departure: Locator;
    readonly arrival: Locator;
    readonly calendar: Locator;
    readonly departureDate: Locator;
    readonly returnDate: Locator;
    readonly nrOfPassengers: Locator;
    readonly flightOption: Locator;
    readonly search: Locator;

  constructor(page: Page) {
    this.page = page;
    // this.cookieWindow = page.locator('div', { hasText: 'KLM uses cookies'});
    this.cookieWindow = page.locator('#accept_cookies_btn')
    this.departure = page.locator("#mat-input-5");
    this.arrival = page.locator("#mat-input-6");
    this.calendar = page.locator("bwc-date-picker-range-input");
    this.departureDate = page.getByText("23").first();
    this.returnDate = page.locator('mdc-button__label').getByText("30").first();
  }

  async goto() {
    await this.page.goto(BASE_URL);
    await this.page.waitForTimeout(6500);
  }

  async acceptCookieWindow() {
    await this.cookieWindow.click();
  }

  async selectCities(departureCityName, arrivalCityName) {
    await this.departure.click();
    await this.page.keyboard.insertText(departureCityName);
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(2500);

    await this.arrival.click();
    await this.page.keyboard.insertText(arrivalCityName);
    await this.page.waitForTimeout(1000);
    await this.page.keyboard.press('Enter');
  }

  async selectDatesFromCalendar() {
    await this.calendar.click();
    await this.page.waitForTimeout(100);
    await this.departureDate.click();
    await this.page.waitForTimeout(1500);
    await this.returnDate.click();
    await this.page.getByText("Confirm dates").click();
  }

  async selectNrOfAdults() {}

  async selectflightClass() {}

  async searchFlight() {
    await this.search.click();
  }

}