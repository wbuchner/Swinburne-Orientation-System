// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS

// This file is for Editing a subject entry. It is called via the Subject Detail page thru a button event 'edit'
function hideButtons(){
win.setRightNavButton();
win.setLeftNavButton();
}
function showButtons(){
win.setRightNavButton(doneButton);
win.setLeftNavButton(cancelButton);
}
var masterWidth= 320;
var masterOpacity = 0.8;
var save = Titanium.UI.createButton({title:'Save',color:'#fff',bottom:60,left:180,height:40,width:70,backgroundImage:'images/BUTT_green_off.png'});
var tanbkg = Titanium.UI.createView({bottom:0,height:200,width:320,backgroundColor:'#e7dfd1'});

// End includes
/* ********************************/
/* BEGIN EDIT CLASS TYPE  */
/* ********************************/

function editClassType(){
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

Ti.App.Properties.setString("tempClass", e.row.title);
	
textClassType.text = selectedClass.text;

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

};/* ******************************************************************   END FUNCTION**********************************************************************************************/

/* ********************************/
/* BEGIN EDIT DAY                 */
/* ********************************/

function editDay(){

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

Ti.App.Properties.setString("tempDay", e.row.title);		
Ti.API.info("********************************");
Ti.API.info("selectedDay.text "+selectedDay.text);
Ti.API.info("********************************");	

// testing and outputting the edited entry to the log
	var tDay1 = Ti.App.Properties.getString("tempDay");
   Ti.API.info("// Edited Temp Day "+tDay1);

textDay.text = selectedDay.text;
setTimeout(function()
{
	win.remove(dayView);
	win.remove(dayBaseview);
	showButtons();
},750);

});
	
};/* ******************************************************************   END FUNCTION   **********************************************************************************************/

/* ********************************/
/* BEGIN EDIT START TIME  */
/* ********************************/

function startTime(){
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
textStart.text = startTimeL.text;

Ti.App.Properties.setList("startTime",textStart.text);
Ti.API.info("start Time.: "+startTimeL.text);
picker.animate(a2);

showButtons();
},3000);

});
}
/* ************************************************   END FUNCTION****************************************************/

/* ********************************/
/* BEGIN EDIT END  TIME      */
/* ********************************/

function endTime(){
hideButtons();

var a1 = Titanium.UI.createAnimation();
	a1.bottom = 0;
	a1.duration = 300;

var a2 = Titanium.UI.createAnimation();
	a2.bottom = -220;
	a2.duration = 300;
	
	
Titanium.include('pickerTimes.js');


var endpicker = Ti.UI.createPicker({
	bottom:-220,
	selectionIndicator:true
});

// 3 columns Time Picker
endpicker.add([column1,column2,column3]);
win.add(endpicker);
endpicker.animate(a1);

var endTimeL = Ti.UI.createLabel({text:'Choose a time',top:6,width:'auto',height:'auto',textAlign:'center',color:'black'});

endpicker.addEventListener('change', function(e)
{
	endTimeL.text = ""+ e.selectedValue[0]+":"+ e.selectedValue[1]+ e.selectedValue[2];

Ti.API.info("picker value "+ e.selectedValue[0]+":"+ e.selectedValue[1]+ e.selectedValue[2]);

setTimeout(function(e)
{
textEnd.text = endTimeL.text;
Ti.App.Properties.setList("endTime",endTimeL.text);

Ti.API.info("end Time.: "+endTimeL.text);
endpicker.animate(a2);

showButtons();
},3000);




});

};/* ******************************************************************   END FUNCTION**********************************************************************************************/

/* ********************************/
/* BEGIN EDIT LOCATION     */
/* ********************************/

function location(){
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
	Ti.API.info("Location Selected Value : "+ locationL.text);

setTimeout(function()
{
textLocation.text = locationL.text;

Ti.App.Properties.setString("locationTemp",locationL.text );
Ti.App.Properties.setString("strBuilding", e.selectedValue[0]);
Ti.App.Properties.setString("intRoomNum",e.selectedValue[1]+ e.selectedValue[2]+ e.selectedValue[3]);
Ti.API.info("new Location : "+locationL.text);

var lTemp= Ti.App.Properties.getString("locationTemp");
Ti.API.info("new Edited Location.: "+ lTemp);

locationPicker.animate(a2);

showButtons();
},3000);


/*
setTimeout(function()
{
win.remove(locationPicker);

},4000);
*/


});

}; /* ******************************************************************   END FUNCTION**********************************************************************************************/

/* **************************/
/* BEGIN EDIT NOTES  */
/* **************************/
function editNotes(){
hideButtons();

var t = Titanium.UI.create2DMatrix();
	t = t.scale(0);
	
	var t1 = Titanium.UI.create2DMatrix();
	t1 = t1.scale(1.0);
	var a = Titanium.UI.createAnimation();
	a.transform = t1;
	a.duration = 200;
	
	
var notesBaseView = Titanium.UI.createView({ width:340,height:480,backgroundImage:'images/alert_bkg.jpg',opacity:masterOpacity,transform:t});
win.add(notesBaseView);

notesBaseView.animate({transform:t1, duration:200});

var notesView = Titanium.UI.createView({borderRadius:10, backgroundColor:'none',width:masterWidth,height:380,transform:t});
win.add(notesView);	
notesView.animate({transform:t1, duration:200});

var temporaryNote = Titanium.UI.createTextArea({
    color:'#888',
    value:subJect[0].notes,
    height:200,
    width:300,
    top:10,
   	returnKeyType:Titanium.UI.RETURNKEY_DONE,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

notesView.add(temporaryNote); 	
temporaryNote.addEventListener('change',function(e)
{
	temporaryNote.value = e.value;
});

temporaryNote.addEventListener('return', function(e)
	{
	textNotes.text = temporaryNote.value;
	Ti.App.Properties.setString("tempNotes",temporaryNote.value);
	Ti.API.info("new NOTES: "+temporaryNote.value);
	win.remove(notesBaseView);
	win.remove(notesView);
	showButtons();
	});
};	
/* ******************************************************************   END FUNCTION**********************************************************************************************/

