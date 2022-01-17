import Page from '../pageobjects/page';
import homePage from '../../pages/homePage'
class homePageTest extends Page  {
  /**
   * define or overwrite page methods
   */
  open () {
      super.open('https://www.volvocars.com/intl/v/car-safety/a-million-more')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
      browser.pause(1000);
  }

  waitForLandingPageToLoad () {
    if(!this.accountMessage.isDisplayed()){
      this.accountMessage.waitForDisplayed(5000);
    }
  }
  getMessage (){
    return this.accountMessage.getText();
  }
  /**
  * define elements
  */
  enterText (item) {
    this.searchInput.clearValue();
    this.searchInput.setValue(item);
    browser.pause(1000);
  }

  search () {
    this.searchButton.click();
  }
  isSearched () {
    this.resultsList.waitForDisplayed(1000);
    return this.resultsList.isDisplayed();
  }

  let text = homepage.getHeader().getText();
  console.log(text)

  let text2=homepage.getSecondSubHeading().getText();
  console.log(text2)
}

export default new homePageTest();