import puppeteer from 'puppeteer';

export const login = async (username, password) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let cookies = [];
  await page.goto('https://XXXX');
  await page.setViewport({ width: 1080, height: 1024 });
  await page.type('#username', username);
  await page.type('#password', password);
  const searchResultSelector = '[data-action-button-primary="true"]';
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);
  try {
    await page.evaluate(async () => {
      await new Promise(function (resolve) {
        setTimeout(resolve, 3000)
      });
    });
    cookies = await page.cookies();
  } catch {
    console.log('could not log in')
  }

  await browser.close();
  return cookies;
};