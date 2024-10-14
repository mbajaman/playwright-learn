const {test, expect} = require('@playwright/test')

test("Verify Error message", async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").pressSequentially('Admin', {delay: 200})
    await page.getByPlaceholder("Password").pressSequentially('admin1234', {delay: 100})
    await page.locator("//button[@type='submit']").click()

    const errorMsg = await page.locator("//p[contains(@class, 'alert-content-text')]").textContent()
    console.log("Error Message: " + errorMsg)

    expect(errorMsg.includes("Invalid")).toBeTruthy()

    expect(errorMsg === "Invalid credentials").toBeTruthy()
})