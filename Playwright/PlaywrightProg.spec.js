import {test, expect} from '@playwright/test';

test("my first test case", async ({ page })=> {

//step 1: Navigate to a URL
await page.goto("https://www.facebook.com/");

//step 2: Get page title
let title = await page.title();

//step 3: print title in console
console.log("page title is :", title);



});


test('this is my secon test case',async({page})=>{

    await page.goto("https://demoqa.com/");

    // will set the 2 seconds time
    await page.waitForTimeout(5000);

    //cptutre the page title
    let titlePage =await page.title();

    console.log("page title is :", titlePage);

    await expect(page).toHaveTitle(titlePage);

});

test("Home page test", async({page})=>{

await page.goto("https://demoqa.com/");

let getTheTitle =await page.title();

console.log("page title is :", getTheTitle);

await expect(page).toHaveTitle(getTheTitle);

});

test("Check Page URL", async({page})=>{

    await page.goto("https://demoqa.com/");
    
    await expect(page).toHaveURL("https://demoqa.com/")

});

test("Check this test case only", async({page})=>{


    await page.goto("https://demoqa.com/");

    await page.waitForTimeout(10000);
    
    await expect(page).toHaveURL("https://demoqa.com/");

});

test("will check navigation", async ({page})=>
{
    //First website
    await page.goto("https://demoqa.com/");
    let getTheTitle = await page.title();
    await expect(page).toHaveTitle(getTheTitle);
    console.log("First Page open successfully");
    await page.waitForTimeout(5000);

    // Second website
    await page.goto("https://www.saucedemo.com/");
    let RegisterTitle = await page.title();
    await expect(page).toHaveTitle(RegisterTitle);
    console.log("Second Page open successfully");
    await page.waitForTimeout(5000);

    await page.goBack();
    await page.waitForTimeout(5000);
    let siteName = await page.title();
    console.log("Print the page title", siteName);
    await expect(page).toHaveTitle(siteName);

    await page.goForward();
    await page.waitForTimeout(5000);
    let forwardPageTitleName = await page.title();
    console.log("Forward page name is:", forwardPageTitleName);
});
