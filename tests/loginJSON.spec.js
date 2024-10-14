const {test, expect} = require("@playwright/test")
const testData = JSON.parse(JSON.stringify(require("../testData.json")))
const testLogin = JSON.parse(JSON.stringify(require("../testLogin.json")))

test.describe("Data Driven Login Test", async () => {
        
    for(const data of testLogin) {
        test.describe(`Login with users ${data.id}`, () => {
            test("Login to App", async function({page}){

                await page.goto("https://freelance-learn-automation.vercel.app/login")
                
                await page.getByPlaceholder("Enter Email").fill(data.username)
            
                await page.getByPlaceholder("Enter Password").fill(data.password)
            
            })
        })
    }
})

// test("Login to Application", async function({page}){

//     await page.goto("https://freelance-learn-automation.vercel.app/login")
    
//     await page.getByPlaceholder("Enter Email").fill(testData.username)

//     await page.getByPlaceholder("Enter Password").fill(testData.password)

//     // await page.getByRole('button', {name:'Sign in'}).click()

//     // await page.locator("//span[text()='Manage']").hover()

//     // await page.locator("//a[normalize-space()='Manage Courses']").click()

//     // await page.waitForTimeout(3000)

// })