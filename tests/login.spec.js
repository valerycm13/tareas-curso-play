

const {test, expect}= require('@playwright/test');


test.describe('login', () =>{



    test('Positive login',  async({page}) =>{

        await page.goto('/')

        await page.locator('#user-name').fill('standard_user')
        await page.locator('#password').fill('secret_sauce')

        await page.locator('#login-button').click()

   
    })




    
    test('Add cart',  async({page}) =>{

        await page.goto('/')

        await page.locator('#user-name').fill('standard_user')
        await page.locator('#password').fill('secret_sauce')

        await page.locator('#login-button').click()

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="firstName"]').click();
        await page.locator('[data-test="firstName"]').fill('valet');
        await page.locator('[data-test="lastName"]').click();
        await page.locator('[data-test="lastName"]').fill('test1');
        await page.locator('[data-test="postalCode"]').click();
        await page.locator('[data-test="postalCode"]').fill('301000');
        await page.locator('[data-test="continue"]').click();
        await page.locator('[data-test="finish"]').click();
        const pagetest = page.locator('[data-test="complete-header"]')
        await pagetest.waitFor({state: "visible"})
        await expect(pagetest).toBeVisible()

        await expect(pagetest).toHaveText('Thank you for your order!')

        await page.pause()
    })








    /*  test.only('other page',  async({page}) =>{

        await page.goto('https://www.espanol.skyscanner.com/')
        await page.getByRole('combobox', { name: '. Ingresa tu destino o elige' }).click();
        await page.getByRole('button', { name: 'Explora cualquier lugar' }).click();
        await page.getByLabel('Fechas flexibles').click();
        await page.getByLabel('octubre de').click();
        await page.getByTestId('desktop-cta').click();

        //const context = await browser.newContext();
        //await page.getByRole('combobox', { name: '. Ingresa tu destino o elige' }).click();
        //await page.getByRole('button', { name: 'Explora cualquier lugar' }).click();
      await page.locator('#originInput-input').fill('san jose')
        await page.locator('#destinationInput-input').fill('tokio')
        await page.getByTestId('depart-btn').click();
        await page.getByLabel('domingo, 16 de junio de 2024').click();
        await page.getByTestId('return-btn').click();
        await page.getByLabel('sábado, 22 de junio de 2024.').click();
        await page.getByTestId('desktop-cta').click();   
        await page.pause()

   
    })

*/
})
    
    
    /*
     await page.goto('/')
        //const context = await browser.newContext();
        //await page.getByRole('combobox', { name: '. Ingresa tu destino o elige' }).click();
        //await page.getByRole('button', { name: 'Explora cualquier lugar' }).click();
        await page.locator('#originInput-input').fill('san jose')
        await page.locator('#destinationInput-input').fill('tokio')
        await page.getByTestId('depart-btn').click();
        await page.getByLabel('domingo, 16 de junio de 2024').click();
        await page.getByTestId('return-btn').click();
        await page.getByLabel('sábado, 22 de junio de 2024.').click();
        await page.getByTestId('desktop-cta').click();
        await page.pause()
   */