// Code designed by Wayne Buchner
// Owned by Vacation Aps
// ©2010 Vacation Aps & Wayne R Buchner
// Project: Vacation Aps (miCompass) Beta 1.7

/* 
This is the main landing page for the application
It's main display is a tableview with hardcoded links 
*/
var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;

// get tab group object
var tabGroup = win.tabGroup;

Titanium.include('pushModel.js','getDate.js','push.js');

win.barColor = '#dd604e';
win.navBarHidden=true;
// End includes
win.addEventListener('focus', function()
{
// check for 3G-Edge-Network connection
if (!Titanium.Network.online) {
  var a = Titanium.UI.createAlertDialog({ 
    title:'Network Connection Required',
    message: 'You require an internet connection.  Check your network connection and try again.'
  });
	a.show();
}else{

// NOW A Nested if statement to TEST the  persistent property settings to receive push notifications yes/no (True/False)
// if test is true, send registration

var pushAuthorize = Ti.App.Properties.getString("pushOnOff");
if (pushAuthorize == true){
push();
} 

}	
});


// Swin logo
var swinLogo = Titanium.UI.createImageView({top:0,height:'auto',width:'auto',image:'images/swinburne.jpg'});
win.add(swinLogo);

var data = [];

data[0] = Ti.UI.createTableViewRow({hasChild:true,title:'Events',link:'events_rss.js',header:'',leftImage:'images/leftRowImages/events.png'});
data[1] = Ti.UI.createTableViewRow({hasChild:true,title:'Latest News',link:'feeds.js',leftImage:'images/leftRowImages/news.png'});
data[2] = Ti.UI.createTableViewRow({hasChild:true,title:'Hawthorn Campus',link:'nativeMap.js',leftImage:'images/leftRowImages/map.png'});
data[3] = Ti.UI.createTableViewRow({hasChild:true,title:'Transport & Parking',link:'transportTable.js',leftImage:'images/leftRowImages/parking.png'});
data[4] = Ti.UI.createTableViewRow({hasChild:true,title:'Student Services',link:'services.js',leftImage:'images/leftRowImages/services.png'});
data[5] = Ti.UI.createTableViewRow({hasChild:true,title:'FAQs', link:'faq.js',leftImage:'images/leftRowImages/faq.png'});
data[6] = Ti.UI.createTableViewRow({hasChild:true,title:'Notifications', link:'notifications.js',leftImage:'images/leftRowImages/notifications.png'});

// create table view
var tableview = Titanium.UI.createTableView({
	data:data,
	top:60,
	scrollable: false,
	backgroundColor: 'transparent',
	separatorColor:Ti.App.Properties.getString("rowSeparator"),
	separatorStyle:Ti.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE,
	rowBackgroundColor:'#fff',
	style: Titanium.UI.iPhone.TableViewStyle.GROUPED
});


// create table view event listener
tableview.addEventListener('click', function(e)
{
	// event data
	var aurl = e.row.link;

	
	var win2 = Titanium.UI.createWindow({
	backgroundImage:Ti.App.Properties.getString("backgroundImage"),
	barColor:'#dd604e',
	navBarHidden:false,
	title:e.row.title,
	backButtonTitle:'Back',
    url:aurl
   });
   
tab.open(win2,{animated:true});	
	
});
// add table view to the window
Titanium.UI.currentWindow.add(tableview);


var studentNumber = Ti.App.Properties.getString("STUDENT_NUMBER");

if (studentNumber == null || studentNumber == ''){
var setDetailsAlert = Titanium.UI.createAlertDialog({
	title: 'Welcome',
	message: 'Welcome to the Swinburne Orientation App. Looks like this is the first time, so welcome. It\'s time to set some settings. Click OK and enter some info!',
	buttonNames: ['Settings','Cancel']
});
	setDetailsAlert.show();
setDetailsAlert.addEventListener('click', function(e)
{
if (e.index == 0){
tabGroup.setActiveTab(4);
}
});
}

