const {test, expect} = require("@playwright/test")

test("Verify Application Title", async function ({page}) {

    await page.goto("https://google.ca")

    await page.locator("//a[normalize-space()='English']").click()

    await page.locator("textarea[name='q']").fill("Mukesh Otwani")

    await page.waitForSelector("//li[@role='presentation']")

    await page.keyboard.press("ArrowDown")
    
    await page.keyboard.press("ArrowDown")

    await page.keyboard.press("Enter")
})

test ("Verify Title Using Loop", async function ({page}) {

    await page.goto("https://google.ca")

    await page.locator("//a[normalize-space()='English']").click()

    await page.locator("textarea[name='q']").fill("Mukesh Otwani")

    await page.waitForSelector("//li[@role='presentation']")

    const arr = await page.$$("//li[@role='presentation']")

    for(let i = 0; i < arr.length; i++) {
        
        let text = await arr[i].textContent()
        if(text.includes('youtube')) {
            await arr[i].click()
            break
        }
    }
})