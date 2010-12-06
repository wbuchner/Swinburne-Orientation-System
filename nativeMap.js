// Code designed by Wayne Buchner
// Owned by Vacation Aps
// ©2010 Vacation Aps & Wayne R Buchner
// Project: Vacation Aps (miCompass) Beta 1.7
var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;
Titanium.include('timetableModel.js');

var flexSpace = Titanium.UI.createButton({systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE});

// End includes

Ti.Geolocation.purpose = "Current Location";  

if (Titanium.Geolocation.locationServicesEnabled==false)
{
	Titanium.UI.createAlertDialog({title:'Alert', message:'Your device has geo turned off - turn it on.'}).show();
}
else
{
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;

//
//  SET DISTANCE FILTER.  THIS DICTATES HOW OFTEN AN EVENT FIRES BASED ON THE DISTANCE THE DEVICE MOVES
//  THIS VALUE IS IN METERS
//
Titanium.Geolocation.distanceFilter = 10;
//
// EVENT LISTENER FOR GEO EVENTS - THIS WILL FIRE REPEATEDLY (BASED ON DISTANCE FILTER)
//
Titanium.Geolocation.addEventListener('location',function(e)
{
	var longitude = e.coords.longitude;
	var latitude = e.coords.latitude;
//Titanium.Geolocation.distanceFilter = 100; //changed after first location event 
	Ti.API.info("latitude "+latitude);
	Ti.API.info("longitude "+ longitude);
// ACTUAL SET PROPERTIES
	Ti.App.Properties.setString("latitude", latitude);
    Ti.App.Properties.setString("longitude", longitude);
});
}
///////////////////////////////////////////////////////////////

var lat = Ti.App.Properties.getString("latitude");
var long = Ti.App.Properties.getString("longitude");

// test parameters 
/*
var lat = -37.82109;
var long = 145.038435;
*/
//
// CREATE ANNOTATIONS
//
var loc = Titanium.Map.createAnnotation({
	latitude:lat,
	longitude:long,
	title:"You Are Here",
	subtitle:'Swinburne University',
	pincolor:Titanium.Map.ANNOTATION_RED,
	animate:true
});


var building = Titanium.Map.createAnnotation({
	title:"building",
	subtitle:'a Swin Building',
	pincolor:Titanium.Map.ANNOTATION_PURPLE,
	animate:true,
	image:'images/red-pushpin.png',
	rightButton: Titanium.UI.iPhone.SystemButton.DISCLOSURE,
	leftButton:'images/red-pushpin.png'
});


//
// CREATE MAP VIEW
//
var mapview = Titanium.Map.createView({
	mapType: Titanium.Map.STANDARD_TYPE,
	region:{latitude:-37.82109, longitude:145.038435, latitudeDelta:0.005, longitudeDelta:0.005},
	animate:true,
	regionFit:true,
	userLocation:true,
	annotations:[]
});

win.add(mapview);

var bb1 = Titanium.UI.createTabbedBar({
    labels:['Building', 'Parking'],
    backgroundColor:'#dd604e',
    top:310,
    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
    height:30,
    width:100
});
win.setRightNavButton(bb1);

bb1.add.addEventListener('click', function(e)
{

if (e.index ==0){
	
	var doneButtonOne = Titanium.UI.createButton({
	title:'Done',
	style:Titanium.UI.iPhone.SystemButtonStyle.DONE
	});
	
	var tool1 = Titanium.UI.createToolbar({
	items:[flexSpace,doneButtonOne],
	bottom:0,
	borderTop:false,
	borderBottom:true,
	translucent:true
	});	
	
	win.add(tool1);
	
	var buildingPicker = Titanium.UI.createPicker({
	bottom:-220,
	selectionIndicator:true
	});
	var data = [];
	var bldg = db.buildingsdb();
	
	for (var i = 0; i< bldg.length; i++){
	
	data[i]=Titanium.UI.createPickerRow(
	{
	title:bldg[i].bldgBldg+" "+bldg[i].bldgName, 
	id:bldg[i].serial,
	bldgName:bldg[i].bldgName,
	bldgCode:bldg[i].bldgBldg,
	bldgLat:bldg[i].bldgLat,
	bldgLong:bldg[i].bldgLong
	});

	};	

buildingPicker.add(data);	
win.add(buildingPicker);
// Create animations

var a1 = Titanium.UI.createAnimation();
	a1.bottom = 0;
	a1.duration = 300;

var a2 = Titanium.UI.createAnimation();
	a2.bottom = -220;
	a2.duration = 300;

var tb1 = Titanium.UI.createAnimation();
	tb1.bottom = 215;
	tb1.duration = 300;
	
var tb2 = Titanium.UI.createAnimation();
	tb2.bottom = -250;
	tb2.duration = 300;
// run animation to aniumate the picker onto the screen
tool1.animate(tb1);
buildingPicker.animate(a1);

buildingPicker.addEventListener('change', function(e)
{
// on change add the building marker to the view
building.latitude = e.row.bldgLat;
building.longitude = e.row.bldgLong;
building.title = e.row.bldgCode+" "+e.row.bldgName;
building.subtitle = 'View on Campus Map';
mapview.annotations=[building];
});

doneButtonOne.addEventListener('click', function()
{
Ti.API.info("Done button pressed");
tool1.animate(tb2);
buildingPicker.animate(a2);
bb1.index = null;

});
////////  Show Selected Building on Campus Map

building.addEventListener('click', function(e)
{
Ti.API.info("click source " +e.clicksource);
if (e.clicksource =='rightButton'){
var actInd = Titanium.UI.createActivityIndicator({
	top:180,
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

var w = Ti.UI.createWindow({title:building.title,barColor:Ti.App.Properties.getString("barColor")});

var scrollView = Titanium.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:660,
    height:660,
    top:0,
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true
});
actInd.show();
w.add(scrollView);
	var wb = Ti.UI.createWebView({backgroundColor:'#000',top:0,width:520, height:660,scalesPageToFit:false,touchEnabled:true,url:'http://dev.openstreetmap.de/staticmap/staticmap.php?center='+building.latitude+','+building.longitude+'&zoom=17&size=520x660&markers='+lat+','+long+',ol-marker|'+building.latitude+','+building.longitude+',red-pushpin'});

scrollView.add(wb);

w.add(actInd);	

wb.addEventListener('load', function()
{
scrollView.scrollTo(100,150);	
actInd.hide();
});
	var b = Titanium.UI.createButton({
	title:'Close',
	style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});

	w.setLeftNavButton(b);
	b.addEventListener('click',function()
	{
	w.close();
	});
	w.open({modal:true});
}
});
/////////////////////////////////////////////////////////////////////////////


} else{

var doneButtonTwo = Titanium.UI.createButton({
	title:'Done',
	style:Titanium.UI.iPhone.SystemButtonStyle.DONE
	});
	
	var tool2 = Titanium.UI.createToolbar({
	items:[flexSpace,doneButtonTwo],
	bottom:0,
	borderTop:false,
	borderBottom:true,
	translucent:true
	});	
	
	win.add(tool2);
	
var parkingPicker = Titanium.UI.createPicker({
	bottom:-220,
	selectionIndicator:true
	});
	
var column1 = Ti.UI.createPickerColumn({opacity:0});	
column1.addRow(Ti.UI.createPickerRow({title:'Choose a parking duration'}));
column1.addRow(Ti.UI.createPickerRow({title:'15 min', id:1}));
column1.addRow(Ti.UI.createPickerRow({title:'1hr', id:2}));
column1.addRow(Ti.UI.createPickerRow({title:'2hr', id:3}));
column1.addRow(Ti.UI.createPickerRow({title:'Permit Zone', id:4}));
column1.addRow(Ti.UI.createPickerRow({title:'Unlimited', id:5}));

parkingPicker.add(column1);	
win.add(parkingPicker);

// Create animations
var c1 = Titanium.UI.createAnimation();
	c1.bottom = 0;
	c1.duration = 300;

var c2 = Titanium.UI.createAnimation();
	c2.bottom = -220;
	c2.duration = 300;

var tb3 = Titanium.UI.createAnimation();
	tb3.bottom = 215;
	tb3.duration = 300;
	
var tb4 = Titanium.UI.createAnimation();
	tb4.bottom = -250;
	tb4.duration = 300;
	

// run animation to aniumate the picker onto the screen
tool2.animate(tb3);
parkingPicker.animate(c1);


parkingPicker.addEventListener('change', function(e)
{
mapview.annotations=[];
Ti.API.info("zone"+e.row.id);

var prk = db.parkingdb(e.row.id);

var parkingPin =[];

for (var j = 0; j< prk.length; j++){

parkingPin[j] = Titanium.Map.createAnnotation({
    latitude:prk[j].parkingLat,
    longitude:prk[j].parkingLong,
    title:prk[j].parkingTime,
    subtitle:prk[j].parkingDuration,
    pincolor:Titanium.Map.ANNOTATION_RED,
    animate:true
  });

mapview.addAnnotation(parkingPin[j]);
}  // End for loop

});

doneButtonTwo.addEventListener('click', function()
{
Ti.API.info("Done button pressed");
tool2.animate(tb4);
parkingPicker.animate(c2);
bb1.index = null;

});



}

});