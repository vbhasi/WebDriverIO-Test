//import { expect } from '@wdio/globals'
import TablesPage from '../pageobjects/tables.page.js'



describe('Data Tables', () => {
    it('Link Check', async () => {
        await TablesPage.open()
        await expect(TablesPage.DataTablesPageTitle).toHaveText('Data Tables')
        await browser.pause(1000)
        await TablesPage.DataTablesTitle.waitForExist()
        await browser.pause(1000)
})
})


