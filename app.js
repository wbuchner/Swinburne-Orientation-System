// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS
Titanium.include('persistantproperties.js');
// End includes

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#98989c');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();
// Set Global Settings

Ti.App.Properties.setString("backgroundColor", "#98989c");
Ti.App.Properties.setString("barColor", "#dd604e");
Ti.App.Properties.setString("rowSeparator", "#ababab");
Ti.App.Properties.setString("backgroundImage","images/wallpaper.PNG");
//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow(
{  
    //title:'Swinburne Orientation',
   url:'main.js',
   navBarHidden:true,
   barColor:Ti.App.Properties.getString("barColor"),
   backgroundImage:Ti.App.Properties.getString("backgroundImage")
});
var tab1 = Titanium.UI.createTab(
{  
    icon:'images/home.png',
    title:'Home',
    window:win1
});
//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow(
{  
    title:'Tweets',
    navBarHidden:false,
    url:'twitter.js',
    backgroundColor:Ti.App.Properties.getString("backgroundColor"),
    backgroundImage:Ti.App.Properties.getString("backgroundImage"),
    barColor:Ti.App.Properties.getString("barColor")
});
var tab2 = Titanium.UI.createTab({  
    icon:'images/twit.png',
    title:'Tweets',
    window:win2
});
var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
//
// create controls tab and root window
//
var win3 = Titanium.UI.createWindow({  
    title:'Orientation Programs',
    url:'orientation.js',
    navBarHidden:false,
    backgroundColor: Ti.App.Properties.getString("backgroundColor"),
    backgroundImage:Ti.App.Properties.getString("backgroundImage"),
    barColor:Ti.App.Properties.getString("barColor")
});
var tab3 = Titanium.UI.createTab({  
    icon:'images/orientation_Icon.png',
    title:'Orientation',
    window:win3
});


//
// create controls tab and root window
//
var win4 = Titanium.UI.createWindow({  
    title:'Timetable',
    url:'timetable.js',
    navBarHidden:false,
	backgroundImage:Ti.App.Properties.getString("backgroundImage"),
    barColor:'#dd604e'
});
var tab4 = Titanium.UI.createTab({  
    icon:'images/schedule.png',
    title:'Timetable',
    window:win4
});

//
// create controls tab and root window
//
var win5 = Titanium.UI.createWindow({  
    title:'Settings',
    url:'settings.js',
    navBarHidden:false,
    backgroundImage:Ti.App.Properties.getString("backgroundImage"),
    barColor:Ti.App.Properties.getString("barColor")
});
var tab5 = Titanium.UI.createTab({  
    icon:'images/settings.png',
    title:'Settings',
    window:win5
});

//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3); 
tabGroup.addTab(tab4); 
tabGroup.addTab(tab5); 
// open tab group
tabGroup.open();

