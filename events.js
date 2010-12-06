// Code designed by Wayne Buchner
// Owned by Vacation Aps
// ©2010 Vacation Aps & Wayne R Buchner
// Project: Vacation Aps (miCompass) Beta 1.7

// FILENAME  EVENTS.JS
Titanium.include('timetableModel.js');
var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;

var eventTitle = win.eventTitle;
var event_id = win.event_id;

var flexSpace = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

var	desc=win.eventDesc;
var	eventLink=win.eventLink;
var	date=win.eventDate;
var	time=win.eventTime;
var	campus	=win.eventCampus;
var	type=win.eventType;
var	building=win.eventBuilding;

var eventBldg = db.eventBuildings(building);
var locationText = eventBldg[0].bldgBldg +" " + eventBldg[0].bldgName;
var bldgLat = eventBldg[0].bldgLat;
var bldgLong = eventBldg[0].bldgLong;

var rsvpBubble = Titanium.UI.createImageView(
{
image:'images/rsvp.png',
height:'auto',
width:'auto',
top:170,
right:20});
win.add(rsvpBubble);

 //////////  NEW  RSVP response Icon
var rsvp = db.rsvp(event_id);
 
var icona = rsvp[0].rsvp;

if (icona ==1){
	rsvpBubble.image = 'images/responseOne.png';
}else if (icona ==2){
	rsvpBubble.image = 'images/responseTwo.png';
}else if (icona ==3){
	rsvpBubble.image = 'images/responseThree.png';
}else {
	rsvpBubble.image = 'images/rsvp.png';
}


//Ti.API.info("event_id " +event_id+"  rsvpResponse"+rsvpR[0].rsvp);
///////////     
// End includes

var scrollViewDesc = Titanium.UI.createScrollView({contentWidth:300,contentHeight:'auto',top:10,width:300,height:140,backgroundColor:'#fff',borderRadius:10,showVerticalScrollIndicator:true,showHorizontalScrollIndicator:false});

var eventDesc = Titanium.UI.createLabel({color:'#000',top:10,opacity:1.0,text:desc,font:{fontSize:16,fontFamily:'Arial'},textAlign:'left',width:280,height:'auto'});

win.add(scrollViewDesc);
scrollViewDesc.add(eventDesc);	


// Event Date Label and Value
var eventDateLabel =  Titanium.UI.createImageView({image:'images/calendar.png', height:40,width:40,left:10,top:150});

var eventDate = Titanium.UI.createLabel({color:'#336699',text:date,font:{fontSize:14,fontFamily:'Helvetica Neue',fontWeight:'bold'},height:'auto',textAlign:'center',width:'auto',top:scrollViewDesc.height+20,left:50});

win.add(eventDateLabel);
win.add(eventDate);

// Event Time Label and Value
var eventTimeLabel = Titanium.UI.createImageView({image:'images/clock.png', height:40,width:40,left:140, top:150});

var eventTime = Titanium.UI.createLabel({color:'#336699',text:time,font:{fontSize:14,fontFamily:'Helvetica Neue',fontWeight:'bold'},textAlign:'center',height:'auto',width:'auto',top:160,left:180});
win.add(eventTimeLabel);
win.add(eventTime);

// Event Location Label and Value
/*
var eventLocationLabel = Titanium.UI.createLabel({color:'#fff',text:"Campus",font:{fontSize:14,fontFamily:'Helvetica Neue'},height:'auto',textAlign:'center',width:'auto',top:scrollViewDesc.height+20+eventTime.height,left:10});
*/
var eventLocation = Titanium.UI.createLabel({color:'#336699',text:campus,font:{fontSize:13,fontFamily:'Helvetica Neue',fontWeight:'bold'},height:'auto',textAlign:'center',width:'auto',top:scrollViewDesc.height+32+eventTime.height,left:50});
//win.add(eventLocationLabel);
win.add(eventLocation);

// Event Building Label and Value
var eventBuildingLabel = Titanium.UI.createImageView({image:'images/map_badge.png', height:40,width:40,left:10,top:190});
var eventBuilding = Titanium.UI.createLabel({color:'#336699',text:locationText,font:{fontSize:13,fontFamily:'Helvetica Neue',fontWeight:'bold'},height:'auto',textAlign:'center',width:'auto',top:scrollViewDesc.height+28+eventTime.height+eventLocation.height,left:50});
win.add(eventBuildingLabel);
win.add(eventBuilding);



// RSVP button
var rsvpButton = Titanium.UI.createButton({title: 'RSVP',width:280,color:'#666',bottom:20,height:40});
win.add(rsvpButton);

var mapButton = Titanium.UI.createButton({title: 'View On Campus Map',color:'#666',width:280,bottom:80,height:40});
win.add(mapButton);

var linkButton = Titanium.UI.createButton({title: 'View On the Web',color:'#666',width:280,bottom:140,height:40});
win.add(linkButton);
var eventID = Titanium.UI.createLabel({color:'#999',top:30,text: event_id,font:{fontSize:20,fontFamily:'Helvetica Neue'},textAlign:'center',width:'auto'});
//win.add(eventID);


// RSVP response via HTTP POST
var rsvp_Response;
var events_Event_id;

var rsvpDialog = Titanium.UI.createOptionDialog({
       title: 'RSVP to '+eventTitle,
       options: ['Yes','No','Maybe','Cancel'],
       cancel:3
   });
rsvpButton.addEventListener('click',function(e)
{
  rsvpDialog.show();
});

rsvpDialog.addEventListener('click', function(e)
{
switch(e.index)
   {
   case 0:
     rsvp_Response = 1;
     events_Event_id = eventID.text;
	 var updateOne = db.updateRSVP(rsvp_Response,events_Event_id);
     break;
   case 1:
     rsvp_Response = 2;
     events_Event_id = eventID.text;
	var updateTwo = db.updateRSVP(rsvp_Response,events_Event_id);
     break;
   case 2:
     rsvp_Response = 3;
     events_Event_id =  eventID.text;
	var updateThree = db.updateRSVP(rsvp_Response,events_Event_id);
     break;
   default:
      rsvp_Response = null;
   }
 
var rsvpR = db.rsvp(event_id);
 
var icon = rsvpR[0].rsvp;

if (icon ==1){
	rsvpBubble.image = 'images/responseOne.png';
}else if (icon ==2){
	rsvpBubble.image = 'images/responseTwo.png';
}else if (icon ==3){
	rsvpBubble.image = 'images/responseThree.png';
}else {
	rsvpBubble.image = 'images/rsvp.png';
}

    
//
// // RSVP response via HTTP POST to php script on cit3 server authored by wBuchner
//
var xhr2 = Titanium.Network.createHTTPClient();
xhr2.onload = function()
{
	Ti.API.info('in utf-8 onload for POST');
	
};
xhr2.onerror = function()
{
	Ti.API.info('in utf-8 error for POST');
};

xhr2.open("POST","http://cit3.ldl.swin.edu.au/~isos/rsvpInsert.php");

xhr2.send({"rsvp_Response":rsvp_Response, "events_Event_id":events_Event_id});


});

////////////////// LINK WINDOW  /////////////////////

linkButton.addEventListener('click', function()
{
// Create animations
var c1 = Titanium.UI.createAnimation();
	c1.bottom = 0;
	c1.duration = 300;

var c2 = Titanium.UI.createAnimation();
	c2.bottom = -460;
	c2.duration = 300;
	
var winE = Ti.UI.createWindow({title:eventTitle,width:320,height:420,bottom:-460,barColor:Ti.App.Properties.getString("barColor"),	backgroundColor:'#fff'});
win.add(winE);

winE.animate(c1);	

// Close Button
var closeButton = Titanium.UI.createButton({title:'Close the Web',style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN});
	
// create and add toolbar
	var toolbar1 = Titanium.UI.createToolbar({
	items:[closeButton, flexSpace,flexSpace],
	top:0,
	translucent:false,
	borderBottom:true,
	backgroundColor:Ti.App.Properties.getString("barColor")
});		
winE.add(toolbar1);	
	
var web = Ti.UI.createWebView({top:40,width:320, height:460,touchEnabled:true,url:eventLink});
winE.add(web);
	
	
	// Close Button  Event listern
closeButton.addEventListener('click',function()
{
winE.animate(c2);
});

});
mapButton.addEventListener('click', function()
{
// Create animations
var d1 = Titanium.UI.createAnimation();
	d1.bottom = 0;
	d1.duration = 300;

var d2 = Titanium.UI.createAnimation();
	d2.bottom = -460;
	d2.duration = 300;

var actInd = Titanium.UI.createActivityIndicator({
	top:100,
	left:60,
	height:50,
	width:10,
	style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
});
	actInd.style = Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN;
	actInd.font = {fontFamily:'Helvetica Neue', fontSize:15,fontWeight:'bold'};
	actInd.color = 'white';
	actInd.message = 'Loading...';
	actInd.width = 210;

actInd.show();		

var mapWin = Ti.UI.createWindow({title:eventTitle,width:320,height:420,bottom:-460,barColor:Ti.App.Properties.getString("barColor"),	backgroundColor:'#fff'});
win.add(mapWin);

var scrollView = Titanium.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:660,
    height:660,
    top:0,
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true
});

mapWin.add(scrollView);
var mapView = Ti.UI.createWebView({backgroundColor:'#000',top:0,width:520, height:660,scalesPageToFit:false,touchEnabled:true,url:'http://dev.openstreetmap.de/staticmap/staticmap.php?center='+bldgLat+','+bldgLong+'&zoom=17&size=520x660&markers='+bldgLat+','+bldgLong+',ylw-pushpin'});

scrollView.add(mapView);

// DEPRECATED mapWin.add(mapView);
mapWin.animate(d1);	
mapView.addEventListener('load', function()
{
scrollView.scrollTo(100,120);	
actInd.hide();
});

// Close Button
var closeButton2 = Titanium.UI.createButton({title:'Close Map',style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN});
	
// create and add toolbar
	var toolbar2 = Titanium.UI.createToolbar({
	items:[closeButton2, flexSpace,flexSpace],
	top:0,
	translucent:false,
	borderBottom:true,
	backgroundColor:Ti.App.Properties.getString("barColor")
});		
mapWin.add(toolbar2);	

	
	
	// Close Button  Event listern
	closeButton2.addEventListener('click',function()
	{
	mapWin.animate(d2);
	});	
});	