const {Builder, By} = require('selenium-webdriver');
const { env } = require('process');


const LIVE_SERVER_URL = env.LIVE_SERVER_URL ? env.LIVE_SERVER_URL : 'http://localhost:3000';


describe('Functional tests', () => {
  const browser = new Builder().forBrowser('firefox').build();
  browser.manage().setTimeouts({implicit: 10000});
  jest.setTimeout(30000);

  afterAll(async () => {
    await browser.quit();
  });

  it('Should be a functional website', async () => {
    // Jane opens the website.
    await browser.get(LIVE_SERVER_URL);
    // The title should be as expected
    expect(await browser.getTitle()).toEqual('Caffeine Calculator');
    // The title is visible
    expect(await browser.findElement(By.tagName('h1')).getText()).toEqual('Caffeine Calculator');
  });
});