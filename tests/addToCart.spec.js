const {test, expect}= require('@playwright/test');
const LoginPage = require('../pageObjects/login.page')


test.describe('Add to cart', () =>{

test.beforeEach( async({page})=>{

    const loginPage = new LoginPage(page)
    await page.goto('/')
        await loginPage.inputUser.fill('standard_user') 
        await loginPage.inputPassword.fill('secret_sauce')
        await loginPage.btnLogin.click()

})

    test('Positive add to cart',  async({page}) =>{
//document.querySelectorAll('.btn_inventory')
// document.querySelectorAll('.inventory_item_name')

//utilizar pageobject page 
const loginPage = new LoginPage(page)


        const elementToFind ='Sauce Labs Fleece Jacket'
        const titleList = page.locator('.inventory_item_name')
        let elementFound;

        //playwrightall iterar
        for (const element of await titleList.all()){
            //guardo en esta constante elementText el nombre de los elementos que encuente 
            const elementText =await element.textContent()

            if (elementText === elementToFind){

                console.log(elementText,"found",)
                elementFound=element;
            }else{
                
                console.log(elementText,"isnot",elementToFind)
            }
        }

           // await page.pause()
            await elementFound.click()
            await page.locator('[data-test="add-to-cart"]').click()
            await expect(page.locator('[data-test="remove"]')).toBeVisible()



        


   
    })




    
    test.only('Add cart',  async({page}) =>{

       // await page.goto('/')
       const loginPage = new LoginPage(page)



        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="checkout"]').click();
        await loginPage.inputFirstname.click();
        await loginPage.inputFirstname.fill('valet');
        await loginPage.inputLastname.click();
        await loginPage.inputLastname.fill('test1');
        await loginPage.inputPostalcode.click();
        await loginPage.inputPostalcode.fill('301000');
        await page.locator('[data-test="continue"]').click();
        await page.locator('[data-test="finish"]').click();
        const pagetest = page.locator('[data-test="complete-header"]')
        await pagetest.waitFor({state: "visible"})
        await expect(pagetest).toBeVisible()

        await expect(pagetest).toHaveText('Thank you for your order!')

        await page.pause()
    })

    //this is a github test 
})