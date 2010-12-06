// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS
// Filename: settings.js
var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;
Titanium.include('push.js');
win.backgroundImage = "images/stripes.PNG";
win.barColor = Ti.App.Properties.getString("barColor");

// End includes

// info button top right
var infoButton = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.INFO_LIGHT
	});
	
win.setRightNavButton(infoButton);

var studentID = Ti.App.Properties.getString("STUDENT_NUMBER");
if (studentID== null || studentID== ''){
var studentNumber = Titanium.UI.createTextField({
    color:'#336699',
    value:'Enter Your Student ID',
    height:35,
    width:300,
    top:30,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

studentNumber.addEventListener('focus', function()
{
studentNumber.value='';
});
studentNumber.addEventListener('return', function(e)
{
if (e.value == isNaN || e.value.length <7  || e.value.length >7){
	var alertTooLong = Titanium.UI.createAlertDialog({
	    title: 'Error',
	    message: 'Your student ID is 7 numbers only',
	    buttonNames: ['Enter Again']
	});
	alertTooLong.show();
}else{
Ti.App.Properties.setString("STUDENT_NUMBER",e.value);
Ti.API.info("textfield value "+e.value);
win.remove(studentNumber);
var stid = Titanium.UI.createLabel({
    color:'#000',
    text:'Student Id',
    height:'auto',
    width:'auto',
    top:32,
    left:20
});
var studentId = Titanium.UI.createLabel({
    color:'#000',
    text:e.value,
    height:'auto',
    width:'auto',
    top:34,
    font:{fontSize:18,fontFamily:'Arial',fontWeight:'bold'},
    left:stid.width+30
});


var idLabel= Titanium.UI.createLabel({
	backgroundColor:'#fff',
	height:40,
	width:300,
	top:25,
	left:10,
	borderRadius:10,
	borderColor:'#999',
	borderWidth:1
});
win.add(idLabel);
win.add(studentId);
win.add(stid);
}
 push();
});
win.add(studentNumber);	
}else{
var stid = Titanium.UI.createLabel({
    color:'#000',
    text:'Student Id',
    height:'auto',
    width:'auto',
    top:32,
    left:20
});

var studentNumber = Titanium.UI.createLabel({
    color:'#000',
    text:studentID,
    height:'auto',
    width:300,
    top:34,
    font:{fontSize:18,fontFamily:'Arial',fontWeight:'bold'},
    left:stid.width+30
});

var idLabel= Titanium.UI.createLabel({
	backgroundColor:'#fff',
	height:40,
	width:300,
	top:25,
	left:10,
	borderRadius:10,
	borderColor:'#999',
	borderWidth:1
});

win.add(idLabel);
win.add(stid);
win.add(studentNumber);



}

//setNotification.value = Ti.App.Properties.getString("setNotification");
//Ti.API.info("// prop uniTafe "+setNotification.value);

var labelOne = Titanium.UI.createLabel({
	backgroundColor:'#fff',
	height:40,
	width:300,
	top:87,
	left:10,
	borderRadius:10,
	borderColor:'#999',
	borderWidth:1
});

win.add(labelOne);

setNotLabel = Titanium.UI.createLabel({
	color:'#000',
	top:97,
	left:20,
	textAlign:'left',
	text:'Receive Push Notifications',
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	width:190,
	height:'auto'
});
win.add(setNotLabel);



var pushOnOffSwitch = Titanium.UI.createSwitch({
    value:Ti.App.Properties.getString("pushOnOff"),
    top:93,
    right:20
});

var pushTest = Ti.App.Properties.getString("pushOnOff");

if (pushTest == null){
	pushOnOffSwitch.value = true;

}

win.add(pushOnOffSwitch);
pushOnOffSwitch.addEventListener('change',function(e)
{
Titanium.API.info('Basic Switch value = ' + e.value );

Ti.App.Properties.setString("pushOnOff", e.value);
});



var labelTwo= Titanium.UI.createLabel({
	backgroundColor:'#fff',
	height:50,
	width:300,
	top:150,
	left:10,
	borderRadius:10,
	borderColor:'#999',
	borderWidth:1
});

win.add(labelTwo);

tagLabel = Titanium.UI.createLabel({
	color:'#000',
	top:165,
	left:20,
	textAlign:'left',
	text:'I goto Uni or Tafe?',
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	width:'auto',
	height:'auto'
});
win.add(tagLabel);

var tag = Titanium.UI.createTabbedBar({
    labels:['Uni', 'Tafe'],
    top:160,
    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
    height:30,
    right:20,
    width:100
});
win.add(tag);
tag.addEventListener('click',function(e)
{
if (e.index == 0){
	var  pTag = "University";
	Ti.API.info("pTag" + pTag);
	Ti.App.Properties.setString("pushTag", pTag);
	Ti.App.Properties.setString("tag", e.index);
}else{
	pTag = "Tafe";
	Ti.API.info("pTag" + pTag);
	Ti.App.Properties.setString("pushTag", pTag);
	Ti.App.Properties.setString("tag", e.index);
}
});
var tagTest = Ti.App.Properties.getString("pushTag");

if (tagTest == null){
	tag.index = null;
}else{
	tag.index = Ti.App.Properties.getString("tag");
	Ti.API.info("tag " + Ti.App.Properties.getString("tag"));
}



