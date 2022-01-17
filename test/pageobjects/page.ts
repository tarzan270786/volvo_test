/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open(path: string): Promise<string> {
        browser.url(path)
        //Handle the alerts if its there 
      const isOpen = browser.isAlertOpen();
      if (isOpen) {
        console.log("===========>" + isOpen);
        browser.setCookies({name: 'rl_user_id', value: 'Karthiq (a) PK'})
        browser.pause(160000)
        const cookies = browser.getCookies()
        console.log("Ravi debug ====>" + cookies)
        homepage.getCookieButton().click()
        console.log(cookies);
       }
       return browser.url(path)
    }//end of open macro 
    }
}
