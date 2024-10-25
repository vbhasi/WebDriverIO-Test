import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await browser.pause(1000)
        await LoginPage.login(process.env.USERNAME, process.env.PASSWORD)
        await browser.pause(1000)
        await expect(SecurePage.flashAlert).toBeExisting()
        await browser.pause(1000)
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
        browser.pause(6000)
    })
})

