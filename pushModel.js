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

var dbConnect = Titanium.Database.install('timetable.rdb','tblNotification');
//
//	DB MODEL for timetable display
//

 api.pushdb = function() {
   
    var pushData = [];

     //Get Emps from database
    var push = dbConnect.execute('SELECT * FROM tblNotification ORDER BY strTime DESC');  //data to push to array later
    
    while (push.isValidRow()) {
   pushData.push({  // array
      	serial:push.fieldByName('intNotificationID'),
      	message:push.fieldByName('strMessage'),
      	time:push.fieldByName('strTime')
      });
    	
    	push.next();
    }
  
   push.close();

    return pushData; //return an array of JavaScript objects for scrollviewOne
  };

  
  
  //Create a Subject - db.create(subject)
  api.insertPush = function(message,time) {
   
    dbConnect.execute('INSERT INTO tblNotification (strMessage,strTime) VALUES(?,?)',message,time);
    return dbConnect.lastInsertRowId; //return the primary key for the last insert
  };
  
  //return our public API
  return api;
}());







