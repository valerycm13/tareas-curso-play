class LoginPage{

    constructor(page){
        this.page=page;
    }

    get inputUser(){
        return this.page.locator('[data-test="username"]')
    }
    get inputPassword(){
        return this.page.locator('[data-test="password"]')
    }
    get btnLogin(){
        return this.page.locator('[data-test="login-button"]')
    }

    get inputFirstname(){
        return this.page.locator('[data-test="firstName"]')
    }

    get inputLastname(){
        return this.page.locator('[data-test="lastName"]')
    }

    get inputPostalcode(){
        return this.page.locator('[data-test="postalCode"]')
    }




    async login(user, password){
        await this.inputUser.fill(user)
        await this.inputPassword.fill(password)
        await this.btnLogin.click()
    }

}

module.exports =LoginPage;