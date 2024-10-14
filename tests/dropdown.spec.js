const {test, expect} = require('@playwright/test')

test("Select values from Dropdown", async function({page}){

    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    // High pref
    await page.locator("#state").selectOption({label:"Goa"})
    
    // await page.waitForTimeout(1000)

    // 2nd pref
    await page.locator("#state").selectOption({value:"Bihar"})

    // await page.waitForTimeout(1000)

    // 3rd pref
    await page.locator("#state").selectOption({index: 3})

    // Check if dropdown has value
    // const states = await page.locator("#state").textContent()

    // await expect(states.includes("Kerala")).toBeTruthy()

    let state = await page.$("#state")

    let allStates = await state.$$("option")
    
    let ddStatus = false

    for(let i = 0; i < allStates.length; i++){
        let ele = allStates[i]
        let value = await ele.textContent()
        if(value.includes("Rajasthan")){
            ddStatus = true
            break
        }
        console.log(value+"\n")
    }

    await expect(ddStatus).toBeTruthy()

    await page.locator("#hobbies").selectOption(['Playing', 'Swimming'])

    // await page.waitForTimeout(3000)
})