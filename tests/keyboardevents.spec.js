const {test, expect} = require("@playwright/test")

test("", async function ({page}) {

    await page.goto("https://google.ca")

    await page.locator("//a[normalize-space()='English']").click()

    await page.locator("textarea[name='q']").focus()

    await page.keyboard.type('Mukesh Otwani!')

    await page.keyboard.press('ArrowLeft')

    await page.keyboard.down('Shift')


    for(let i = 0; i < 6; i++) {
        await page.keyboard.press("ArrowLeft")
    }

    await page.keyboard.up('Shift')

    await page.keyboard.press('Backspace')

    // await page.locator("textarea[name='q']").fill("Mukesh Otwani")

    // await page.keyboard.press('Enter')

    // await page.keyboard.press("Control+A")

    // await page.keyboard.press("Control+C")

    // await page.keyboard.press("Backspace")

    // await page.keyboard.press("Control+V")


})