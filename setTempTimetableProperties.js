// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS

/* This File  sets temporary values to the list of persistant properties to avoid errors in saving empty values*/

// End includes
function setTempTimetableProperties(){
// write tempSubject Value to the Properties list
var tempSubject = {subject:sub[0].subject};
Ti.App.Properties.setString("tempSubject", tempSubject.subject);

// write tempClass Value to the Properties list
var tempClass = {ClassType:sub[0].classType};
Ti.App.Properties.setString("tempClass", tempClass.ClassType);

// write Description Value to the Properties list
var tempDescription = {description:sub[0].description};
Ti.App.Properties.setString("tempDescription", tempDescription.description);

// write day Value to the Properties list
var tempDay = {day:sub[0].day};
Ti.App.Properties.setString("tempDay", tempDay.day);

// write Start Value to the Properties list
var startTime = {startTime:sub[0].start};
Ti.App.Properties.setString("startTime", startTime.startTime);

// write End Value to the Properties list
var endTime = {endTime:sub[0].end};
Ti.App.Properties.setString("endTime", endTime.endTime);

// write Location/Room Value to the Properties list
var locationTemp = {locationTemp:sub[0].room};
Ti.App.Properties.setString("locationTemp", locationTemp.locationTemp);

// write Notes Value to the Properties list
var tempNotes = {notes:sub[0].notes};
Ti.App.Properties.setString("tempNotes", tempNotes.notes);

// write Notes Value to the Properties list
var strBuilding = {notes:sub[0].timeBuilding};
Ti.App.Properties.setString("strBuilding", sub[0].timeBuilding);

// write Notes Value to the Properties list
var intRoomNum = {notes:sub[0].timeRoomNum};
Ti.App.Properties.setString("intRoomNum", sub[0].timeRoomNum);
}
