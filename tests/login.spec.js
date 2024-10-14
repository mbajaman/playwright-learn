const {test, expect} = require('@playwright/test')
const { url } = require('inspector')

test.use({viewport:{width:1500, height:900}})

test("Valid Login", async function({page}){
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)
    
    await page.getByPlaceholder("Username").pressSequentially('Admin', {delay: 200})
    await page.locator("input[name='password']").pressSequentially('admin123', {delay: 100})
    await page.locator("//button[@type='submit']").click()

    await expect(page).toHaveURL(/dashboard/)

    await page.getByAltText("profile picture").first().click()
    await page.getByText("Logout").click()

    await expect(page).toHaveURL(/login/)

})