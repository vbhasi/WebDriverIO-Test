//import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'



describe('Verify Pages', () => {
    it('should demonstrate the scroll command', async () => {
        await browser.url('https://webdriver.io')
    
        console.log(await browser.execute(() => window.scrollY)) // returns 0
        await browser.scroll(0, 2000)
        console.log(await browser.execute(() => window.scrollY)) // returns 200

        await browser.pause(10000)
    });
})


