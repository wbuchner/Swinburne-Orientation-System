// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS
// FILENAME: transportTable.js
var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;

win.barColor=Ti.App.Properties.getString("barColor");
win.backgroundColor=Ti.App.Properties.getString("backgroundColor");

// End includes

var scrollViewDesc = Titanium.UI.createScrollView({
	contentWidth:300,
	contentHeight:'auto',
	top:20,
	width:300,
	height:130,
	backgroundColor:'#fff',
	borderRadius:10,
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:false
});

var descLabel = Titanium.UI.createLabel({
	color:'#000',
	top:10,
	opacity:1.0,
	text:"The campus is approximately a one minute walk from Glenferrie station. Belgrave, Lilydale and Alamein train lines from the city travel to Glenferrie station approx every 10 minutes.\n\nTram No.16 Kew to St Kilda Beach stops on Glenferrie Road, where shops, food outlets and ATMs are also located.\n\nBus No. 624 Kew-Chadstone – Oakleigh (via Carnegie), travels along Auburn Rd about av10 minute walk to Campus.",
	font:{fontSize:16,fontFamily:'Arial'},
	textAlign:'left',
	width:280,
	height:'auto'
	});

win.add(scrollViewDesc);

scrollViewDesc.add(descLabel);	

// insert a link to the journey planner
var journeyButton = Titanium.UI.createButton({
   title: 'Journey Planner',
   color:'#fff',
   backgroundImage:'images/greyButton.png',
   top:165,
   height:46,
   width:280
});
win.add(journeyButton);

// create table view event listener
journeyButton.addEventListener('click', function(e)
{
	var w = Ti.UI.createWindow({title:'Journey Planner',url:'metjrny.js',barColor:Ti.App.Properties.getString("barColor")});
		
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
});
// END JOURNEY PLANNER


var appsLabel = Titanium.UI.createLabel({
	color:'#333',
	text:'Some Apps to help get you around',
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	top:90,
	width:'auto'
});

win.add(appsLabel);
var cabsApp = Titanium.UI.createImageView({image:'images/13Cabs-logo.png',bottom:5,left:20,width:75,height:75});
var tramsApp = Titanium.UI.createImageView({image:'images/tram-traker-logo.png',bottom:5,left:20,width:75,height:75});
var trainsApp = Titanium.UI.createImageView({image:'images/metlink-logo.png',bottom:5,left:20,width:75,height:75});

var melbglanceApp = Titanium.UI.createImageView({image:'images/melglance-logo.png',bottom:5,left:20,width:75,height:75});
var lonelyPApp = Titanium.UI.createImageView({image:'images/lonelyP-logo.png',bottom:5,left:20,width:75,height:75});
var findApp = Titanium.UI.createImageView({image:'images/find-logo.png',bottom:5,left:20,width:75,height:75});

var view1 = Ti.UI.createView({});
view1.add(cabsApp);

var view2 = Ti.UI.createView({});
view2.add(melbglanceApp);
var view3 = Ti.UI.createView({});
view3.add(tramsApp);
var view4 = Ti.UI.createView({});
view4.add(trainsApp);
var view5 = Ti.UI.createView({});
view5.add(lonelyPApp);
var view6 = Ti.UI.createView({});
view6.add(findApp);
var scrollView = Titanium.UI.createScrollableView({
	views:[view1,view2,view3,view4,view5,view6],
	showPagingControl:true,
	height:100,
	backgroundColor:'#fff',
	pagingControlHeight:10,
	currentPage:0,
	bottom:20,
	borderRadius:10,
	width:300,
	pagingControlColor:'#777'
});

win.add(scrollView);
cabsApp.addEventListener('click', function(){ Ti.Platform.openURL('http://itunes.apple.com/au/app/13cabs/id358640110?mt=8');});// opens in iTunes 
tramsApp.addEventListener('click', function(){ Ti.Platform.openURL('http://itunes.apple.com/au/app/tramtracker/id317312510?mt=8');});
trainsApp.addEventListener('click', function(){ Ti.Platform.openURL('http://itunes.apple.com/au/app/metlink-melbourne/id318696180?mt=8');});
melbglanceApp.addEventListener('click', function(){ Ti.Platform.openURL('http://itunes.apple.com/au/app/melbourne-at-glance-city-guide/id336173376?mt=8');});
lonelyPApp.addEventListener('click', function(){ Ti.Platform.openURL('http://itunes.apple.com/au/app/lonely-planet-melbourne-city/id317159358?mt=8');});
findApp.addEventListener('click', function(){ Ti.Platform.openURL('http://itunes.apple.com/au/app/find-melbourne-melbourne-arts/id315993843?mt=8');});


