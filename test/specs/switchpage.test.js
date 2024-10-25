//import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('Verify Pages', () => {
    it('should switch to another window', async () => {
        // open url
        await LoginPage.open()
        await browser.pause(2000)
       // await browser.url('https://google.com')
        // create new window
        await browser.newWindow('https://the-internet.herokuapp.com/status_codes')
        await browser.pause(2000)
       // await browser.newWindow('https://webdriver.io')
    
        // switch back via url match
        await browser.switchWindow('login')
        await browser.pause(2000)
        // switch back via url match
        await browser.switchWindow('status_codes')
        await browser.pause(2000)
    });
})


