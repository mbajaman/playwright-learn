const {test, expect} = require("@playwright/test")

test("Working with multiple tabs", async ({browser}) => {

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const [newPage] = await Promise.all(
        [
            context.waitForEvent("page"),

            page.locator("(//a[contains(@href,'facebook')])[1]").click()
        ]
    )

    await newPage.locator("(//input[@name='email'])[2]").fill("mukesh@gmail.com")

    await newPage.close()
    
    await page.getByPlaceholder("Enter Email").fill("admin@email.com")

    await page.getByPlaceholder("Enter Password").fill("admin@123")

    // await page.getByRole('button', {name:'Sign in'}).click()

    // await page.locator("//span[text()='Manage']").hover()

    // await page.locator("//a[normalize-space()='Manage Courses']").click()

    // await page.waitForTimeout(3000)

})
