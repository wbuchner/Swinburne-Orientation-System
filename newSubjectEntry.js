// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS
// Filename: alert.js

var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;

function hideButtons(){
win.setRightNavButton();
//win.setLeftNavButton();
}
function showButtons(){
win.setRightNavButton(doneButton);
//win.setLeftNavButton(cancelButton);
}

var masterOpacity = 0.8;
var masterWidth= 320;
// End includes


/////////////////////////////////////////////////////////////////////////////////////////
//  Function SUBJECT
/////////////////////////////////////////////////////////////////////////////////////////

function subject(headerTitle,property){

hideButtons();

// create first transform to go beyond normal size
	var subAn= Titanium.UI.create2DMatrix();
	subAn = subAn.scale(1.0);
	
	var subAn1 = Titanium.UI.create2DMatrix();
	subAn1 = subAn1.scale(1.0);
	var subAnt = Titanium.UI.create2DMatrix();
	subAnt = subAnt.scale(0.0);
	
	var subAnt1 = Titanium.UI.create2DMatrix();
	subAnt1 = subAnt1.scale(1.0);
	var subAna = Titanium.UI.createAnimation();
	subAna.transform = subAnt1;
	subAna.duration = 200;

var background = 	Titanium.UI.createView({ width:320,height:460,backgroundImage:'images/alert_bkg.jpg',opacity:0.7,transform:subAn});


var alertView = Titanium.UI.createView({ width:320,height:165,backgroundImage:'images/alert.png',transform:subAnt});

background.animate({transform:subAnt1, duration:200});
alertView.animate({transform:subAnt1, duration:200});

var cancelButton = Titanium.UI.createButton({
   backgroundImage:'images/cancel.png',
   backgroundColor:'transparent',
   width:122,
   height:41,
   bottom:25,
   left:30,
   opacity:1.0
});

var saveButton = Titanium.UI.createButton({
   backgroundImage:'images/save.png',
   backgroundColor:'transparent',
   width:121,
   height:40,
   bottom:25,
   left:170,
   opacity:1.0
});

var textfield = Titanium.UI.createTextField({
    color:'#000',
    value:'Focus to see keyboard w/ toolbar',
    height:30,
    width:260,
    top:50,
    left:30,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var alertHeader = Titanium.UI.createLabel({
	color:'#fff',
	top:15,
	text:headerTitle,
	font:{fontSize:25,fontFamily:'Arial',fontWeight:'Bold'},
	shadowColor:'black',
	shadowOffset:{x:0,y:1},
	textAlign:'center',
	height:'auto',
	width:'auto'
});

var tempEntry = Titanium.UI.createLabel({});


Ti.API.info("textfield"+textfield.top);
textfield.addEventListener('focus', function(e)
{
alertView.top=30;
textfield.value='';
});
textfield.addEventListener('change', function(e)
{
tempEntry.text=e.value;
Ti.API.info("-- tempEntry  "+tempEntry.text);
});

textfield.addEventListener('blur', function(e)
{
alertView.top=100;

});
win.add(background);
win.add(alertView);
alertView.add(alertHeader);
alertView.add(cancelButton);
alertView.add(saveButton);
alertView.add(textfield);

cancelButton.addEventListener('click', function(e)
{
win.remove(background);
win.remove(alertView);
showButtons();
});

saveButton.addEventListener('click', function()
{
Ti.App.Properties.setString(property, tempEntry.text);

var test = Ti.App.Properties.getString(property);
  	Ti.API.info("// Test Property  "+property+" "+test);
win.remove(background);
win.remove(alertView);
showButtons();
});

}

/////////////////////////////////////////////////////////////////////////////////////////
//  Function DESCRIPTION
/////////////////////////////////////////////////////////////////////////////////////////

function description(headerTitle,property){

hideButtons();

// create first transform to go beyond normal size
	var Desca = Titanium.UI.create2DMatrix();
	Desca = Desca.scale(0);
	
	var Desca1 = Titanium.UI.create2DMatrix();
	Desca1 = Desca1.scale(1.0);
	var Descb = Titanium.UI.createAnimation();
	Descb.transform = Desca1;
	Descb.duration = 200;

var background = 	Titanium.UI.createView({ width:320,height:460,backgroundImage:'images/alert_bkg.jpg',opacity:0.7,transform:Desca});


var alertView = Titanium.UI.createView({ width:320,height:165,backgroundImage:'images/alert.png',transform:Desca});

background.animate({transform:Desca1, duration:200});
alertView.animate({transform:Desca1, duration:200});

var cancelButton = Titanium.UI.createButton({
   backgroundImage:'images/cancel.png',
   backgroundColor:'transparent',
   width:122,
   height:41,
   bottom:25,
   left:30,
   opacity:1.0
});

var saveButton = Titanium.UI.createButton({
   backgroundImage:'images/save.png',
   backgroundColor:'transparent',
   width:121,
   height:40,
   bottom:25,
   left:170,
   opacity:1.0
});

var textfield = Titanium.UI.createTextField({
    color:'#000',
    value:'Focus to see keyboard w/ toolbar',
    height:30,
    width:260,
    top:50,
    left:30,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var alertHeader = Titanium.UI.createLabel({
	color:'#fff',
	top:15,
	text:headerTitle,
	font:{fontSize:25,fontFamily:'Arial',fontWeight:'Bold'},
	shadowColor:'black',
	shadowOffset:{x:0,y:1},
	textAlign:'center',
	height:'auto',
	width:'auto'
});

var tempEntry = Titanium.UI.createLabel({});


Ti.API.info("textfield"+textfield.top);
textfield.addEventListener('focus', function(e)
{
alertView.top=30;
textfield.value='';
});
textfield.addEventListener('change', function(e)
{
tempEntry.text=e.value;
Ti.API.info("-- tempEntry  "+tempEntry.text);
});

textfield.addEventListener('blur', function(e)
{
alertView.top=100;

});
win.add(background);
win.add(alertView);
alertView.add(alertHeader);
alertView.add(cancelButton);
alertView.add(saveButton);
alertView.add(textfield);

cancelButton.addEventListener('click', function(e)
{
win.remove(background);
win.remove(alertView);
showButtons();
});

saveButton.addEventListener('click', function()
{
Ti.App.Properties.setString(property, tempEntry.text);

var test = Ti.App.Properties.getString(property);
  	Ti.API.info("// Test Property  "+property+" "+test);
win.remove(background);
win.remove(alertView);
showButtons();
});

}

/////////////////////////////////////////////////////////////////////////////////////////
//  Function CLASS TYPE
/////////////////////////////////////////////////////////////////////////////////////////

function classType(headerTitle,property){
hideButtons();

// create first transform to go beyond normal size
	var t = Titanium.UI.create2DMatrix();
	t = t.scale(0);
	
	var t1 = Titanium.UI.create2DMatrix();
	t1 = t1.scale(1.0);
	var a = Titanium.UI.createAnimation();
	a.transform = t1;
	a.duration = 200;
	
var baseview = Titanium.UI.createView({ width:320,height:480,backgroundImage:'images/alert_bkg.jpg',opacity:masterOpacity,transform:t});
win.add(baseview);
baseview.animate({transform:t1, duration:200});
var view = Titanium.UI.createView({borderRadius:10, width:masterWidth,height:380,transform:t});
win.add(view);
view.animate({transform:t1, duration:200});
var classes = [];

classes[0] = Ti.UI.createTableViewRow({title:'Class',color:'#fff',hasCheck:false,backgroundImage: 'images/images/tv_top.png',selectedBackgroundImage:'images/images/selected_top.png',header:'',selectedColor:'#fff'});
classes[1] = Ti.UI.createTableViewRow({title:'Lab',color:'#fff',hasCheck:false,backgroundImage: 'images/images/tv_middle.png',selectedBackgroundImage:'images/images/selected_middle.png'});
classes[2] = Ti.UI.createTableViewRow({title:'Lecture',color:'#fff',hasCheck:false,backgroundImage: 'images/images/tv_middle.png',selectedBackgroundImage:'images/images/selected_middle.png'});
classes[3] = Ti.UI.createTableViewRow({title:'Seminar',color:'#fff',hasCheck:false,backgroundImage: 'images/images/tv_middle.png',selectedBackgroundImage:'images/images/selected_middle.png'});
classes[4] = Ti.UI.createTableViewRow({title:'Tutorial',color:'#fff',hasCheck:false,backgroundImage: 'images/images/tv_middle.png',selectedBackgroundImage:'images/images/selected_middle.png'});
classes[5] = Ti.UI.createTableViewRow({title:'Practical',color:'#fff',hasCheck:false,backgroundImage: 'images/images/tv_middle.png',selectedBackgroundImage:'images/images/selected_middle.png'});
classes[6] = Ti.UI.createTableViewRow({title:'Study-Private',color:'#fff',hasCheck:false,backgroundImage: 'images/images/tv_middle.png',selectedBackgroundImage:'images/images/selected_middle.png'});
classes[7] = Ti.UI.createTableViewRow({title:'Study-Group',color:'#fff',hasCheck:false ,backgroundImage: 'images/images/tv_bottom.png',selectedBackgroundImage:'images/images/selected_bottom.png'});


var classTableview = Titanium.UI.createTableView({
	data:classes,
	width:250,
	backgroundColor:'transparent',
	rowBackgroundColor:'transparent',
	style: Titanium.UI.iPhone.TableViewStyle.GROUPED
});

var selectedClass =  Titanium.UI.createLabel({
});

view.add(classTableview);

var hidden = 'false';

classTableview.addEventListener('click', function(e)
{
	if (e.row.hasCheck == false){
		e.row.hasCheck = true;
		e.row.selectedBackgroundColor='#fff';
		e.row.selectedColor = '#fff';
	}else{
		e.row.hasCheck = false;
	}

selectedClass.text = e.row.title;

Ti.API.info("selectedClass.text "+e.row.title);

Ti.App.Properties.setString(property, e.row.title);


// testing and outputting the edited entry to the log
	var tClass = Ti.App.Properties.getString("tempClass");
   	Ti.API.info("// Edited Temp Subject "+ tClass);
   	
  
   	
setTimeout(function()
{
	win.remove(view);
	win.remove(baseview);
	showButtons();
},750);
	
});

}

/////////////////////////////////////////////////////////////////////////////////////////
//  Function DAY
/////////////////////////////////////////////////////////////////////////////////////////

function day(headerTitle,property){
hideButtons();

var t = Titanium.UI.create2DMatrix();
	t = t.scale(0);
	
	var t1 = Titanium.UI.create2DMatrix();
	t1 = t1.scale(1.0);
	var a = Titanium.UI.createAnimation();
	a.transform = t1;
	a.duration = 200;
	
var dayBaseview = Titanium.UI.createView({ width:320,height:480,backgroundImage:'images/alert_bkg.jpg',opacity:masterOpacity,transform:t});
win.add(dayBaseview);
dayBaseview.animate({transform:t1, duration:200});
var dayView = Titanium.UI.createView({borderRadius:10, width:masterWidth,height:380,transform:t});
win.add(dayView);
dayView.animate({transform:t1, duration:200});	
var days = [];

days[0] = Ti.UI.createTableViewRow({title:'Monday',color:'#fff',hasCheck:false,header:'',backgroundImage: 'images/images/tv_top.png',selectedBackgroundImage:'images/images/selected_top.png'});
days[1] = Ti.UI.createTableViewRow({title:'Tuesday',color:'#fff',hasCheck:false,backgroundImage: 'images/images/tv_middle.png',selectedBackgroundImage:'images/images/selected_middle.png'});
days[2] = Ti.UI.createTableViewRow({title:'Wednesday',color:'#fff',hasCheck:false,backgroundImage: 'images/images/tv_middle.png',selectedBackgroundImage:'images/images/selected_middle.png'});
days[3] = Ti.UI.createTableViewRow({title:'Thursday',color:'#fff',hasCheck:false,backgroundImage: 'images/images/tv_middle.png',selectedBackgroundImage:'images/images/selected_middle.png'});
days[4] = Ti.UI.createTableViewRow({title:'Friday',color:'#fff',hasCheck:false,backgroundImage: 'images/images/tv_middle.png',selectedBackgroundImage:'images/images/selected_middle.png'});
days[5] = Ti.UI.createTableViewRow({title:'Saturday',color:'#fff',hasCheck:false,backgroundImage: 'images/images/tv_middle.png',selectedBackgroundImage:'images/images/selected_middle.png'});
days[6] = Ti.UI.createTableViewRow({title:'Sunday',color:'#fff',hasCheck:false, backgroundImage: 'images/images/tv_bottom.png',selectedBackgroundImage:'images/images/selected_bottom.png'});


var daysTableview = Titanium.UI.createTableView({
	data:days,
	width:250,
	top:30,
	backgroundColor:'transparent',
	rowBackgroundColor:'transparent',
	style: Titanium.UI.iPhone.TableViewStyle.GROUPED
});

var selectedDay =  Titanium.UI.createLabel({
});

dayView.add(daysTableview);

var hidden = 'false';

daysTableview.addEventListener('click', function(e)
{
	if (e.row.hasCheck == false){
		e.row.hasCheck = true;
	}else{
		e.row.hasCheck = false;
	}

selectedDay.text = e.row.title;

Ti.App.Properties.setString(property, e.row.title);		
Ti.API.info("********************************");
Ti.API.info("selectedDay.text "+selectedDay.text);
Ti.API.info("********************************");	

// testing and outputting the edited entry to the log
	var tDay1 = Ti.App.Properties.getString("tempDay");
   Ti.API.info("// Edited Temp Day "+tDay1);

setTimeout(function()
{
	win.remove(dayView);
	win.remove(dayBaseview);
	showButtons();
},750);

});
}

/////////////////////////////////////////////////////////////////////////////////////////
//  Function START TIME
/////////////////////////////////////////////////////////////////////////////////////////

function startTime(headerTitle,property){
hideButtons();

var a1 = Titanium.UI.createAnimation();
	a1.bottom = 0;
	a1.duration = 300;

var a2 = Titanium.UI.createAnimation();
	a2.bottom = -220;
	a2.duration = 300;
	
	
Titanium.include('pickerTimes.js');


var picker = Ti.UI.createPicker({
	bottom:-220,
	selectionIndicator:true
});

// 3 columns Time Picker
picker.add([column1,column2,column3]);
win.add(picker);
picker.animate(a1);

var startTimeL = Ti.UI.createLabel({text:'Choose a time',top:6,width:'auto',height:'auto',textAlign:'center',color:'black'});

picker.addEventListener('change', function(e)
{
	startTimeL.text = ""+ e.selectedValue[0]+":"+ e.selectedValue[1]+ e.selectedValue[2];


setTimeout(function()
{

Ti.App.Properties.setString(property,startTimeL.text);

var testTimeStart = Ti.App.Properties.getString(property);
Ti.API.info("// testTimeStart: "+testTimeStart);
picker.animate(a2);

showButtons();
},3000);

});
}

/////////////////////////////////////////////////////////////////////////////////////////
//  Function END TIME
/////////////////////////////////////////////////////////////////////////////////////////

function endTime(headerTitle,property){
hideButtons();

var a1 = Titanium.UI.createAnimation();
	a1.bottom = 0;
	a1.duration = 300;

var a2 = Titanium.UI.createAnimation();
	a2.bottom = -220;
	a2.duration = 300;
	
	
Titanium.include('pickerTimes.js');


var picker = Ti.UI.createPicker({
	bottom:-220,
	selectionIndicator:true
});

// 3 columns Time Picker
picker.add([column1,column2,column3]);
win.add(picker);
picker.animate(a1);

var endTimeL = Ti.UI.createLabel({text:'Choose a time',top:6,width:'auto',height:'auto',textAlign:'center',color:'black'});

picker.addEventListener('change', function(e)
{
	endTimeL.text = ""+ e.selectedValue[0]+":"+ e.selectedValue[1]+ e.selectedValue[2];


setTimeout(function()
{

Ti.App.Properties.setString(property,endTimeL.text);

var endTimeStart = Ti.App.Properties.getString(property);
Ti.API.info("// endTimeStart: "+endTimeStart);
picker.animate(a2);

showButtons();
},3000);

});
}

/////////////////////////////////////////////////////////////////////////////////////////
//  Function LOCATION
/////////////////////////////////////////////////////////////////////////////////////////

function location(headerTitle,property){
hideButtons();

var a1 = Titanium.UI.createAnimation();
	a1.bottom = 0;
	a1.duration = 300;

var a2 = Titanium.UI.createAnimation();
	a2.bottom = -220;
	a2.duration = 300;
	
Titanium.include('locationPicker.js');

var locationPicker = Ti.UI.createPicker({bottom:-220,selectionIndicator:true});


// 2 columns as an array
locationPicker.add([column1,column4,column5,column6]);

// turn on the selection indicator (off by default)
locationPicker.selectionIndicator = true;

win.add(locationPicker);
locationPicker.animate(a1);


var locationL = Titanium.UI.createLabel({
});

locationPicker.addEventListener('change',function(e)
{
	locationL.text = ""+ e.selectedValue[0]+"-"+ e.selectedValue[1]+ e.selectedValue[2]+ e.selectedValue[3];
	locationL.building =""+ e.selectedValue[0];
	locationL.roomNum = ""+ e.selectedValue[1]+ e.selectedValue[2]+ e.selectedValue[3];
	Ti.API.info("Location Selected Value : "+ locationL.text);

setTimeout(function()
{
Ti.App.Properties.setString("locationTemp",locationL.text );
Ti.App.Properties.setString("strBuilding", locationL.building);
Ti.App.Properties.setString("intRoomNum",locationL.roomNum);
Ti.API.info("new Location : "+locationL.text);

var lTemp= Ti.App.Properties.getString("locationTemp");
Ti.API.info("// New Edited Location.: "+ lTemp);
Ti.API.info("strBuilding"+Ti.App.Properties.getString("strBuilding"));
Ti.API.info("strBuilding"+Ti.App.Properties.getString("intRoomNum"));


locationPicker.animate(a2);

showButtons();
},3000);
});
}

/////////////////////////////////////////////////////////////////////////////////////////
//  Function NOTES
/////////////////////////////////////////////////////////////////////////////////////////

function notes(headerTitle,property){

hideButtons();

// create first transform to go beyond normal size
	var t = Titanium.UI.create2DMatrix();
	t = t.scale(0);
	
	var t1 = Titanium.UI.create2DMatrix();
	t1 = t1.scale(1.0);
	var a = Titanium.UI.createAnimation();
	a.transform = t1;
	a.duration = 200;

var background = 	Titanium.UI.createView({ width:320,height:460,backgroundImage:'images/alert_bkg.jpg',opacity:0.7,transform:t});


var alertView = Titanium.UI.createView({ width:320,height:165,backgroundImage:'images/alert.png',transform:t});

background.animate({transform:t1, duration:200});
alertView.animate({transform:t1, duration:200});

var cancelButton = Titanium.UI.createButton({
   backgroundImage:'images/cancel.png',
   backgroundColor:'transparent',
   width:122,
   height:41,
   bottom:25,
   left:30,
   opacity:1.0
});

var saveButton = Titanium.UI.createButton({
   backgroundImage:'images/save.png',
   backgroundColor:'transparent',
   width:121,
   height:40,
   bottom:25,
   left:170,
   opacity:1.0
});

var textfield = Titanium.UI.createTextArea({
    color:'#000',
    value:'Focus to see keyboard w/ toolbar',
    height:45,
    width:260,
    top:50,
    left:30,
    borderWidth:2,
    borderColor:'#bbb',
    borderRadius:5
    //borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var alertHeader = Titanium.UI.createLabel({
	color:'#fff',
	top:15,
	text:headerTitle,
	font:{fontSize:25,fontFamily:'Arial',fontWeight:'Bold'},
	shadowColor:'black',
	shadowOffset:{x:0,y:1},
	textAlign:'center',
	height:'auto',
	width:'auto'
});

var tempEntry = Titanium.UI.createLabel({});


Ti.API.info("textfield"+textfield.top);
textfield.addEventListener('focus', function(e)
{
alertView.top=30;
textfield.value='';
});
textfield.addEventListener('change', function(e)
{
tempEntry.text=e.value;
Ti.API.info("-- tempEntry  "+tempEntry.text);
});

textfield.addEventListener('blur', function(e)
{
alertView.top=100;

});
win.add(background);
win.add(alertView);
alertView.add(alertHeader);
alertView.add(cancelButton);
alertView.add(saveButton);
alertView.add(textfield);

cancelButton.addEventListener('click', function(e)
{
win.remove(background);
win.remove(alertView);
showButtons();
});

saveButton.addEventListener('click', function()
{
Ti.App.Properties.setString(property, tempEntry.text);

var test = Ti.App.Properties.getString(property);
  	Ti.API.info("// Test Property  "+property+" "+test);
win.remove(background);
win.remove(alertView);
showButtons();
});


}