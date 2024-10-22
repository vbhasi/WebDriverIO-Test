//import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'



describe('Verify Pages', () => {
    it('should switch to another window', async () => {
        // open url
        await browser.url('https://google.com')
    
        // create new window
        await browser.newWindow('https://webdriver.io')
    
        // switch back via url match
        await browser.switchWindow('google.com')
    
        // switch back via title match
        await browser.switchWindow('Next-gen browser and mobile automation test framework for Node.js')
    });
})


