//import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'



describe('Verify Different Pages', () => {
    it('should save a video', async () => {
        await browser.startRecordingScreen();
        await $('~BUTTON').click();
        await browser.saveRecordingScreen('./Results/video.mp4');
    });
})


