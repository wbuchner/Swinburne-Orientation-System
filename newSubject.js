// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS


var mainWin = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;
var rowHeight = 'auto';
Titanium.include('doneButton.js','timetableModel.js','newSubjectEntry.js');

win.barColor = '#dd604e';
mainWin.backgroundColor = '#e7dfd1';
// End includes

// menu for the Subject tableview
var menuOne = [];

menuOne[0] = Ti.UI.createTableViewRow({rightImage:'images/blue_add.png',title:'Subject',property:'tempSubject',height: rowHeight,header:''});

menuOne[1] = Ti.UI.createTableViewRow({rightImage:'images/blue_add.png',title:'Description',property:'tempDescription',height: rowHeight});

menuOne[2] = Ti.UI.createTableViewRow({rightImage:'images/blue_add.png',title:'Class Type',property:"tempClass",height: rowHeight});

menuOne[3] = Ti.UI.createTableViewRow({rightImage:'images/blue_add.png',title:'Day',property:"tempDay",height: rowHeight,header:''});

menuOne[4] = Ti.UI.createTableViewRow({rightImage:'images/blue_add.png',title:'Start Time',property:"startTime",height: rowHeight});

menuOne[5] = Ti.UI.createTableViewRow({rightImage:'images/blue_add.png',title:'End Time',property:"endTime",height: rowHeight});

menuOne[6] = Ti.UI.createTableViewRow({rightImage:'images/blue_add.png',title:'Location',property:"locationTemp",url:'subject/location.js',height: rowHeight,header:''});

menuOne[7] = Ti.UI.createTableViewRow({rightImage:'images/blue_add.png',title:'Notes',property:"tempNotes",height: rowHeight});



var subjectTableview = Titanium.UI.createTableView({
	data:menuOne,
	scrollable: true,
	backgroundColor:'transparent',
	rowBackgroundColor:'white',
	style: Titanium.UI.iPhone.TableViewStyle.GROUPED
});
mainWin.add(subjectTableview);

subjectTableview.addEventListener('click', function(e)
{
switch(e.index)
{
case 0:
  subject(e.row.title,e.row.property);
  break;
case 1:
  description(e.row.title,e.row.property);
  break;
case 2:
  classType(e.row.title,e.row.property);
  break;
case 3:
  day(e.row.title,e.row.property);
  break;
case 4:
  startTime(e.row.title,e.row.property);
  break;
case 5:
 endTime(e.row.title,e.row.property);
  break;
case 6:
  location(e.row.title,e.row.property);
  break;
case 7:
 notes(e.row.title,e.row.property);
  break;
}

});

doneButton.addEventListener('click', function()
    {
// Execute overviewdb function from timetableModel.js
// INSERT STATEMENT KEEP 

var insert = db.create(Ti.App.Properties.getString("tempSubject"),Ti.App.Properties.getString("tempDay"),Ti.App.Properties.getString("startTime"), Ti.App.Properties.getString("endTime"),Ti.App.Properties.getString("tempClass"),Ti.App.Properties.getString("locationTemp"),Ti.App.Properties.getString("tempDescription"),Ti.App.Properties.getString("tempNotes"),Ti.App.Properties.getString("strBuilding"),Ti.App.Properties.getString("intRoomNum"));

Ti.API.info("tempSubject "+Ti.App.Properties.getString("tempSubject"));
Ti.API.info("tempDay "+Ti.App.Properties.getString("tempDay"));
Ti.API.info("startTime "+Ti.App.Properties.getString("startTime"));
Ti.API.info("endTime "+Ti.App.Properties.getString("endTime"));
Ti.API.info("tempClass "+Ti.App.Properties.getString("tempClass"));
Ti.API.info("locationTemp "+Ti.App.Properties.getString("locationTemp"));
Ti.API.info("tempDescription "+Ti.App.Properties.getString("tempDescription"));
Ti.API.info("tempNotes "+Ti.App.Properties.getString("tempNotes"));
Ti.API.info("strBuilding "+Ti.App.Properties.getString("strBuilding"));
Ti.API.info("intRoomNum "+Ti.App.Properties.getString("intRoomNum"));	
  	win.close();
 });   
    
