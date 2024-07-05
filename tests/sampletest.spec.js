const {test, expect}  = require('@playwright/test');

test(' Myfirst ', async ({page}) => {

    await page.goto('https://google.com');
    await expect(page).toHaveTitle('Google');
}
);
