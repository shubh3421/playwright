import {test, expect} from "@playwright/test";

test.only("will work on Xpath in this session", async ({page})=>
{
    // Site Url Which we will access for testing
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Enter the username
    await page.locator("//input[@name='username']").fill("admin");

    //Enter the password
    await page.locator("//input[@name='password']").fill("admin123");

    //Click on submit button
    await page.locator("//button[@type='submit']").click();

    await page.waitForTimeout(5000);

    //validate the page
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    console.log("page open successfully");

});