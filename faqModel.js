// Code designed by Wayne Buchner
// Owned by Wayne Buchner
// ©2010 Vacation Aps & Wayne R Buchner
// Project: iPad CRUD

var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;
// End includes

var db = (function() {

 //create an object which will be our public API
  var api = {};
  
  
// Open and get database from Ativities Table: itinerary

var dbConnect = Titanium.Database.install('timetable.rdb','tblFaq');
//
//	DB MODEL for timetable display
//
 api.faqdb = function() {
   
    var faqData = [];

     //Get Emps from database
    var faq = dbConnect.execute('SELECT * FROM tblFaq');  //data to push to array later
    
    while (faq.isValidRow()) {
  	 faqData.push({  // array
      	serial:faq.fieldByName('intFaqID'),
        faqTitle:faq.fieldByName('strFaqTitle'),
        faqDesc:faq.fieldByName('strFaqDesc'),
        faqLink:faq.fieldByName('strFaqLink')
      });
    	
    	faq.next();
    }
  
   faq.close();

    return faqData; //return an array of JavaScript objects for scrollviewOne
  };
  
  /////////////////////////
  
  api.detaildb = function(serial) {
   
    var faqData = [];

     //Get Emps from database
    var faq = dbConnect.execute('SELECT * FROM tblFaq WHERE intFaqID =?',serial);  //data to push to array later
    
    while (faq.isValidRow()) {
  	 faqData.push({  // array
      		serial:faq.fieldByName('intFaqID'),
        faqTitle:faq.fieldByName('strFaqTitle'),
        faqDesc:faq.fieldByName('strFaqDesc'),
        faqLink:faq.fieldByName('strFaqLink')
      });
    	
    	faq.next();
    }
  
   faq.close();

    return faqData; //return an array of JavaScript objects for scrollviewOne
  };
  
  //return our public API
  return api;
}());







