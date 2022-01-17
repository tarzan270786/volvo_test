class homePage
{
 getCookieButton() {return $("//button[@title='Accept']")};
 getHeader() {return $("//h2[@class='a ab ac ae af ag ah ai aj ak al am an ao ap aq ar as at au av']")}
 getSubHeading() { return $("//p[@class='a ac ae ai aj an ao as bd be bf bg bh bi bj bk bl bm bn bo bp bq']")}
 getSecondSubHeading(){ return $("//span[@class='bd bh fl']") }
 //change the below functions 
 searchInput()   { return $('#yschsp'); }
 searchButton()  { return $('.mag-glass'); }
 resultsList()   { return $('#results'); }

}

//Export this class 
module.exports= new homePage();