const homePageTest = require("./homepageLoginTest")
const asset = require("assert");
const homePage = require('../../pages/homePage')

describe("Test for Volvo login page ",function() {
    it("verify the home page  ",function(){
      // base URL 
      homePageTest.open(); //havigate to login page 
      assert.equal(homePage.getMessage(),"");
  
    });
   }
   
   
   );