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
var dbConnect = Titanium.Database.install('timetable.rdb','tblTimetable');
//
//	DB MODEL for timetable display
//
api.overviewdb = function() {
var overviewData = [];
//Get Emps from database
var time = dbConnect.execute('SELECT * FROM tblTimetable');  //data to push to array later
while (time.isValidRow())
{
overviewData.push(
{ 
	serial:time.fieldByName('intTimetableID'),
	subject:time.fieldByName('strSubject'),
	day:time.fieldByName('strDay'),
	start: time.fieldByName('strStart'),
	end: time.fieldByName('strEnd'),
	classType: time.fieldByName('strClassType'),
	room: time.fieldByName('strRoom'),
	description: time.fieldByName('strDescription'),
	notes: time.fieldByName('strNotes')
}
);
time.next();
}
time.close();
return overviewData; //return an array of JavaScript objects for scrollviewOne
};
  
//
//	DB MODEL for timetable display by Day
//
api.timetabledb = function(day) {
var timetableData = [];
//Get Subject from database
var sub = dbConnect.execute('SELECT * FROM tblTimetable WHERE strDay = ?',day); 
while (sub.isValidRow())
{
timetableData.push(
{
	serial:sub.fieldByName('intTimetableID'),
	subject:sub.fieldByName('strSubject'),
	day:sub.fieldByName('strDay'),
	start: sub.fieldByName('strStart'),
	end: sub.fieldByName('strEnd'),
	classType: sub.fieldByName('strClassType'),
	room: sub.fieldByName('strRoom'),
	description: sub.fieldByName('strDescription'),
	notes: sub.fieldByName('strNotes')
}
);
sub.next();
}
sub.close();
return timetableData; //return an array of JavaScript objects for scrollviewOne
};  
  
//Create a Subject - db.create(subject)
api.create = function(subject,day,start,end,classType,room,description,notes,building,roomNum) {
dbConnect.execute('INSERT INTO tblTimetable (strSubject,strDay,strStart,strEnd,strClassType,strRoom,strDescription,strNotes,strBuilding,intRoomNum) VALUES(?,?,?,?,?,?,?,?,?,?)',subject,day,start,end,classType,room,description,notes,building,roomNum);
    return dbConnect.lastInsertRowId;
};
 //Create a Subject - db.create(subject)
 api.update = function(subject,day,start,end,classType,room,description,notes,building,roomNum,serial) {
 //UPDATE timetable SET subject ="HTML" WHERE serial = 1,subject,day,start,end,classType,room,description,notes);
dbConnect.execute('UPDATE tblTimetable SET strSubject =?, strDay=?,strStart=?,strEnd=?,strClassType=?,strRoom=?,strDescription=?,strNotes=?, strBuilding = ?, intRoomNum = ? WHERE intTimetableID =?',subject,day,start,end,classType,room,description,notes,building,roomNum,serial);
    return dbConnect.lastInsertRowId; 
};
  
//
//	DB MODEL for buildings display
//
api.buildingsdb = function() {
var buildingsData = [];
//Get buildings
var bldg = dbConnect.execute('SELECT * FROM tblBuilding');  //data to push to array later
while (bldg.isValidRow())
{
buildingsData.push(
{  // array
	serial:bldg.fieldByName('intBuildingID'),
	bldgName:bldg.fieldByName('strBuildingName'),
	bldgBldg:bldg.fieldByName('strBuildingBldg'),
	bldgLat:bldg.fieldByName('dblBuildingLat'),
	bldgLong:bldg.fieldByName('dblBuildingLong')
}
);
bldg.next();
}
bldg.close();
return buildingsData; 
};
  
//
//	DB MODEL for  specific buildings display
//
api.eventBuildings = function(id) {
var buildingsData = [];
//Get buildings
var bldg = dbConnect.execute('SELECT * FROM  tblBuilding WHERE intBuildingID= ?',id);  //data to push to array later
while (bldg.isValidRow()) {
buildingsData.push(
{
serial:bldg.fieldByName('intBuildingID'),
bldgName:bldg.fieldByName('strBuildingName'),
bldgBldg:bldg.fieldByName('strBuildingBldg'),
bldgLat:bldg.fieldByName('dblBuildingLat'),
bldgLong:bldg.fieldByName('dblBuildingLong')
}
);
bldg.next();
}
bldg.close();
return buildingsData; //return an array of JavaScript objects for scrollviewOne
};
  
//
//	DB MODEL for Parking PICKER
//
api.parkingdb = function(zone) {
var parkingData = [];
//Get Parking
var prk = dbConnect.execute("SELECT * FROM tblParking WHERE strParkingZone =?",zone);  
while (prk.isValidRow())
{
parkingData.push({  // array
serial:prk.fieldByName('intParkingID'),
parkingTime:prk.fieldByName('strParkingTime'),
parkingDays:prk.fieldByName('strParkingDay'),
parkingDuration:prk.fieldByName('strParkingDuration'),
parkingLat:prk.fieldByName('strParkingLat'),
parkingLong:prk.fieldByName('strParkingLong'),
parkingzone:prk.fieldByName('strParkingZone')
}
);
prk.next();
}
prk.close();
return parkingData; //return an array of JavaScript objects for scrollviewOne
};
  
 //Delete a timetable item - db.del(todo)
api.del = function(id)
{
dbConnect.execute("DELETE FROM tblTimetable WHERE intTimetableID = ?", id);
return dbConnect.rowsAffected; //return the number of rows affected by the last query
};
  
// GET subject deatil by ID  
api.subjectDetail = function(id){
var overviewData = [];
 //Get subject id = ? from database
var time = dbConnect.execute('SELECT *FROM tblTimetable AS e, tblbuilding AS b WHERE 	e.intTimetableID = ? AND e.strBuilding =b.strBuildingBldg',id);  //data to push to array later
while (time.isValidRow())
{
overviewData.push({  // array
serial:time.fieldByName('intTimetableID'),
subject:time.fieldByName('strSubject'),
day:time.fieldByName('strDay'),
start: time.fieldByName('strStart'),
end: time.fieldByName('strEnd'),
classType: time.fieldByName('strClassType'),
room: time.fieldByName('strRoom'),
description: time.fieldByName('strDescription'),
notes: time.fieldByName('strNotes'),
timeBuilding: time.fieldByName('strBuilding'),
timeRoomNum: time.fieldByName('intRoomNum'),
buildingID:time.fieldByName('intBuildingID'),
bldgName:time.fieldByName('strBuildingName'),
bldgBldg:time.fieldByName('strBuildingBldg'),
bldgLat:time.fieldByName('dblBuildingLat'),
bldgLong:time.fieldByName('dblBuildingLong')
}
);
time.next();
}
time.close();
return overviewData; //return an array of JavaScript objects for scrollviewOne
};
  
api.transport = function() {
var transportData = [];
 //Get * from trans table in database
var trans = dbConnect.execute('SELECT * FROM tblTransport');  //data to push to array later
while (trans.isValidRow())
{
transportData.push({
	serial:trans.fieldByName('intTransportID'),
	transTitle:trans.fieldByName('strTransportTitle'),
	transDesc:trans.fieldByName('strTransportDesc'),
	transImage:trans.fieldByName('strTransportImage'),
	transLink:trans.fieldByName('strTransportLink')
}
);
trans.next();
}
trans.close();
return transportData;
};  
  

api.sas = function() {
var sasData = [];

var sas = dbConnect.execute('SELECT * FROM tblSas '); 
while (sas.isValidRow())
{
sasData.push({
serial:sas.fieldByName('intSasID'),
servicesTitle:sas.fieldByName('strServicesTitle'),
servicesDesc:sas.fieldByName('strServicesDesc'),
servicesLink:sas.fieldByName('strServicesLink')
}
);
sas.next();
}
sas.close();
return sasData;
};   

// GET student Services Details
api.sasDetail = function(id){
var sasData = [];
var sas = dbConnect.execute('SELECT * FROM tblSas WHERE intSasID =?',id);  //data to push to array later
while (sas.isValidRow()) {
sasData.push(
{
serial:sas.fieldByName('intSasID'),
servicesTitle:sas.fieldByName('strServicesTitle'),
servicesDesc:sas.fieldByName('strServicesDesc'),
servicesLink:sas.fieldByName('strServicesLink')
}
);
sas.next();
}
sas.close();
return sasData;
};    


//
//	DB MODEL get rsvp results
//
api.rsvp = function(id) {
var rsvpData = [];
var rsvp = dbConnect.execute('SELECT * FROM tblRsvp WHERE intEventId =?',id);  //data to push to array later
while (rsvp.isValidRow())
{
rsvpData.push({  // array
serial:rsvp.fieldByName('intRsvpID'),
event:rsvp.fieldByName('intEventId'),
rsvp:rsvp.fieldByName('intResponse')
}
);
rsvp.next();
}
rsvp.close();
return rsvpData; //return an array of JavaScript objects for scrollviewOne
};
  
//Insert an RSVP 
api.updateRSVP = function(rsvp,event) {
 dbConnect.execute('UPDATE tblRsvp SET intResponse =? WHERE intEventId =?',rsvp,event);
    return dbConnect.lastInsertRowId;
};
  
 //return our public API
return api;
}());







