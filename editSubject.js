// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS

var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;
Titanium.include('timetableModel.js','doneButton.js','editFunctionsNEW.js');
// End includes

// Change the done button default title
doneButton.title ='Save';

var serial = win.serial;

Ti.API.info("Edit Subject Serial : "+serial);

var subJect = db.subjectDetail(serial);

// text subject entry field
var textSubject = Titanium.UI.createTextField({color:'#336699',top:10,left:10,width:300,height:40,borderRadius:5,backgroundColor:'#fff',	hintText:subJect[0].subject,appearance:Titanium.UI.KEYBOARD_APPEARANCE_ALERT, keyboardType:Titanium.UI.KEYBOARD_DEFAULT,returnKeyType:Titanium.UI.RETURNKEY_DONE });

var subject = Titanium.UI.createLabel({color:'#999',font:{fontSize:20,fontFamily:'Helvetica Neue'},textAlign:'center',width:'auto'});

textSubject.addEventListener('focus', function()
{
hideButtons();
});
	
textSubject.addEventListener('blur', function(e)
{
subject.text = e.value;

Ti.App.Properties.setString("tempSubject",subject.text); 

showButtons();
});
	
// description entry field
var textDescription = Titanium.UI.createTextField({color:'#336699',top:60,left:10,width:300,height:40,hintText:subJect[0].description,appearance:Titanium.UI.KEYBOARD_APPEARANCE_ALERT, keyboardType:Titanium.UI.KEYBOARD_DEFAULT,returnKeyType:Titanium.UI.RETURNKEY_DONE,borderRadius:5,backgroundColor:'#fff'});
	
var description = Titanium.UI.createLabel({color:'#999',font:{fontSize:20,fontFamily:'Helvetica Neue'},textAlign:'center',width:'auto'});

textDescription.addEventListener('focus', function()
{
hideButtons();
});
	
textDescription.addEventListener('blur', function(e)
{
description.text = e.value;
	
Ti.App.Properties.setString("tempDescription",description.text);	
showButtons();
});
	
// ClassType entry field
var textClassType = Titanium.UI.createLabel({color:'#AFAFAF',top:110,left:10,width:210,height:40,text:subJect[0].classType,borderRadius:5,backgroundColor:'#fff'});
var textClassTypeEditButton = Titanium.UI.createButton({title:'Edit',color:'#fff',top:110,left:240,height:40,width:70,backgroundImage:'images/BUTT_selected_off.png'});
win.add(textClassTypeEditButton);


textClassTypeEditButton.addEventListener('click', function()
{ 
editClassType();  
});


// Day entry field
var textDay = Titanium.UI.createLabel({color:'#AFAFAF',top:160,left:10,width:210,height:40,text:subJect[0].day,borderRadius:5,backgroundColor:'#fff'});
	
var textDayEditButton = Titanium.UI.createButton({title:'Edit',color:'#fff',top:160,left:240,height:40,width:70,backgroundImage:'images/BUTT_selected_off.png'});
	win.add(textDay);	
	win.add(textDayEditButton);
	
textDayEditButton.addEventListener('click', function(e)
{
editDay();
});
	
// Start Time entry field
var textStart = Titanium.UI.createLabel({color:'#AFAFAF',top:210,left:10,width:210,height:40,text:subJect[0].start,borderRadius:5,backgroundColor:'#fff'});
	
var textStartEditButton = Titanium.UI.createButton({title:'Edit',color:'#fff',top:210,left:240,height:40,width:70,backgroundImage:'images/BUTT_selected_off.png'});
	win.add(textStart);	
	win.add(textStartEditButton);
	
textStartEditButton.addEventListener('click', function(e)
{
startTime();
});


 /*  ************************ */	
/*   End Time entry field    */
 /*  ************************ */
var textEnd = Titanium.UI.createLabel({color:'#AFAFAF',top:260,left:10,width:210,height:40,text:subJect[0].end,borderRadius:5,backgroundColor:'#fff'});
	
var textEndEditButton = Titanium.UI.createButton({title:'Edit',color:'#fff',top:260,left:240,height:40,width:70,backgroundImage:'images/BUTT_selected_off.png'});
	win.add(textEnd);	
	win.add(textEndEditButton);
	
textEndEditButton.addEventListener('click', function(e)
{
endTime();
});
// Location entry field
var textLocation = Titanium.UI.createLabel({color:'#AFAFAF',top:310,left:10,width:210,height:40,text:subJect[0].room,borderRadius:5,backgroundColor:'#fff',editable: false});
	
var textLocationEditButton = Titanium.UI.createButton({title:'Edit',color:'#fff',top:310,left:240,height:40,width:70,backgroundImage:'images/BUTT_selected_off.png'});
	win.add(textLocation);	
	win.add(textLocationEditButton);
	
textLocationEditButton.addEventListener('click', function(e)
{
location();
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 /*  ************************ */
/*      Notes entry field      */
 /*  ************************ */
var textNotes = Titanium.UI.createLabel({color:'#AFAFAF',top:360,left:10,width:210,height:40,text:subJect[0].notes,font:{fontSize:'auto',fontFamily:'Arial'},borderRadius:5,backgroundColor:'#fff',editable: false});
	
var textNotesEditButton = Titanium.UI.createButton({title:'Edit',color:'#fff',top:360,left:240,height:40,width:70,backgroundImage:'images/BUTT_selected_off.png'});
	win.add(textNotes);	
	win.add(textNotesEditButton);

textNotesEditButton.addEventListener('click', function()
{
editNotes();
});
			
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////						
textClassType.addEventListener('focus', function()
	{
	var w = Ti.UI.createWindow({title:sub[0].subject,barColor:'#dd604e',backgroundColor:'#e7dfd1'});

	w.setLeftNavButton(cancelButton);
	
		w.open({modal:true});	
	});	
	
	win.add(textSubject);
	win.add(textDescription);
	win.add(textClassType);
	
doneButton.addEventListener('click', function()
{
Ti.API.info("tempSubject "+Ti.App.Properties.getString("tempSubject"));
Ti.API.info("tempDay "+Ti.App.Properties.getString("tempDay"));
Ti.API.info("startTime "+Ti.App.Properties.getString("startTime"));
Ti.API.info("endTime "+Ti.App.Properties.getString("endTime"));
Ti.API.info("tempClass "+Ti.App.Properties.getString("tempClass"));
Ti.API.info("locationTemp "+Ti.App.Properties.getString("locationTemp"));
Ti.API.info("tempDescription "+Ti.App.Properties.getString("tempDescription"));
Ti.API.info("tempNotes "+Ti.App.Properties.getString("tempNotes"));
Ti.API.info("serial "+serial);
Ti.API.info("strBuilding "+Ti.App.Properties.getString("strBuilding"));
Ti.API.info("intRoomNum "+Ti.App.Properties.getString("intRoomNum"));

// UPDATE function from timetableModel.js
// INSERT STATEMENT 

var insert = db.update(Ti.App.Properties.getString("tempSubject"),Ti.App.Properties.getString("tempDay"),Ti.App.Properties.getString("startTime"),Ti.App.Properties.getString("endTime"),Ti.App.Properties.getString("tempClass"),Ti.App.Properties.getString("locationTemp"),Ti.App.Properties.getString("tempDescription"),Ti.App.Properties.getString("tempNotes"),Ti.App.Properties.getString("strBuilding"),Ti.App.Properties.getString("intRoomNum"),serial);
	
	win.close();
  	
  	
  	Ti.App.fireEvent('closeWindow', {name:'bar'});

 });   
