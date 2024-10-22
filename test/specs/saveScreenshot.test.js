//import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'



describe('Verify Different Pages', () => {
it('should save a screenshot of the browser view', async () => {
    await LoginPage.open()


    await browser.saveScreenshot('./Results/screenshot.png');
})
})


