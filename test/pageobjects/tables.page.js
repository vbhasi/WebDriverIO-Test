import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TablesPage extends Page {
    /**
     * define selectors using getter methods
     */

    get DataTablesPageTitle(){
        return $('h3')
    }

    get DataTablesTitle(){
        return $("//h4[normalize-space()='Example 1']")
    }

    open () {
        return super.open('tables');
    }
}

export default new TablesPage();
