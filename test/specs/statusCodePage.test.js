//import { expect } from '@wdio/globals'
import StatusCodesPage from '../pageobjects/status_codes.js'



describe('Status Code Page Tests', () => {
    it('Link Check', async () => {
        await StatusCodesPage.open()
        await StatusCodesPage.listStatusCodes.click()
        await StatusCodesPage.statusListTitle.waitForExist()
        browser.back()
        await StatusCodesPage.status200.click()
        await browser.pause(5000)

        browser.back()

        await StatusCodesPage.status301.click()
        await browser.pause(5000)

        browser.back()

        await StatusCodesPage.status404.click()
        await browser.pause(5000)

        browser.back()

        await StatusCodesPage.status500.click()
        await browser.pause(5000)

        browser.back()
    
await browser.pause(20000)
    });
})

