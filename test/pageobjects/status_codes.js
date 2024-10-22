import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class StatusCodesPage extends Page {
    /**
     * define selectors using getter methods
     */
get listStatusCodes(){
    return $("//a[normalize-space()='here']");
}

get statusListTitle(){
    return $("//h1[contains(text(),'Hypertext Transfer Protocol (HTTP) Status Code Reg')]")
}

get status200(){
    return $("//a[normalize-space()='200']");
}

get status301(){
    return $("//a[normalize-space()='301']");
}

get status404(){
    return $("//a[normalize-space()='404']");
}

get status500(){
    return $("//a[normalize-space()='500']");
}

    open () {
        return super.open('status_codes');
    }
}

export default new StatusCodesPage();
