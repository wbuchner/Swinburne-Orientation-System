// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS
// FILE: buildingFinder.js

var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;
Titanium.include('timetableModel.js');
// End includes
var currentLat = Titanium.UI.createLabel({
	text:'Current Location not fired',
	font:{fontSize:11},
	color:'#444',
	top:130,
	left:10,
	height:15,
	width:300
});

var currentLong = Titanium.UI.createLabel({
	text:'Current Location not fired',
	font:{fontSize:11},
	color:'#444',
	top:130,
	left:10,
	height:15,
	width:300
});
  
Ti.Geolocation.purpose = "Current Location";  
//  SET ACCURACY - THE FOLLOWING VALUES ARE SUPPORTED
 Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
 Titanium.Geolocation.getCurrentPosition(function(e)
	{
		if (e.error)
		{
			currentLocation.text = 'error: ' + JSON.stringify(e.error);
			alert('error ' + JSON.stringify(e.error));
			return;
		}

		var longitude = e.coords.longitude;
		var latitude = e.coords.latitude;
		var altitude = e.coords.altitude;
		var heading = e.coords.heading;
		var accuracy = e.coords.accuracy;
		var speed = e.coords.speed;
		var timestamp = e.coords.timestamp;
		var altitudeAccuracy = e.coords.altitudeAccuracy;
		currentLong.text = longitude;
		currentLat.text = latitude;
	});

var bldg = db.buildingsdb();

var buildingsView = Titanium.Map.createAnnotation({
    latitude:-37.82152,
    longitude:145.03756,
    title:"TC Tafe Building C",
    subtitle:'Johns St',
    pincolor:Titanium.Map.ANNOTATION_RED,
    pinImage:'pinImages/TC.png',
    animate:true,
    leftButton: 'images/mapButtons/TC.png',
    rightButton: Titanium.UI.iPhone.SystemButton.DISCLOSURE,
    myid:1 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
});
 
var mapview = Titanium.Map.createView({
	height:250,
	top:0,
    mapType: Titanium.Map.STANDARD_TYPE,
    region: {latitude:-37.82152, longitude:145.03756, 
          			latitudeDelta:0.08, longitudeDelta:0.08},
    animate:true,
    regionFit:true,
    userLocation:true,
    zoom:13,
    annotations:[buildingsView]
});
 
win.add(mapview);

var picker = Titanium.UI.createPicker({
	top:200
});
var data = [];

for (var i = 0; i< bldg.length; i++){
	
	data[i]=Titanium.UI.createPickerRow(
	{
	title:bldg[i].bldgName, 
	id:bldg[i].serial,
	bldgName:bldg[i].bldgName,
	bldgCode:bldg[i].bldgBldg
	
	});
}

picker.add(data);

picker.add.addEventListener('change', function(e)
{
buildingsView.title = ""+e.row.bldgName;
buildingsView.subtitle=""+e.row.bldgCode;
buildingsView.leftButton = "images/mapButtons/"+e.row.bldgCode+".png";
	Ti.API.info("id "+e.row.id);
});
win.add(picker);