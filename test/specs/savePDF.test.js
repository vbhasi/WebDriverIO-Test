//import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'



describe('Verify Pages', () => {
    it('should save a PDF screenshot of the browser view', async () => {
        await LoginPage.open()
        await browser.savePDF('./Results/screenshot.pdf');
    });
})


