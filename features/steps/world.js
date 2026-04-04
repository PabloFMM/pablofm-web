import { chromium } from "playwright";
import { Before, After, setWorldConstructor } from "@cucumber/cucumber";

class PlaywrightWorld {
  constructor() {
    this.browser = null;
    this.page = null;
    this.baseUrl = process.env.BASE_URL || "https://pablofm.com";
  }
}

setWorldConstructor(PlaywrightWorld);

Before(async function () {
  this.browser = await chromium.launch({ headless: true });
  const context = await this.browser.newContext({
    viewport: { width: 1280, height: 720 },
  });
  this.page = await context.newPage();
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});
