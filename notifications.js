// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS
// Filename: notifications.js
// this file acceses the push table from the database and displays it in a tableview

var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;


win.addEventListener('open', function()
{
// resets the app badge to null when the list is viewed
Titanium.UI.iPhone.appBadge = null;
});

win.backgroundColor = Ti.App.Properties.getString("backgroundColor");
Titanium.include('pushModel.js');

// End includes

var tableview = Ti.UI.createTableView({
	backgroundColor: '#fff',
	deleteButtonTitle:'Delete',
	separatorStyle:Ti.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE,
	separatorColor:Ti.App.Properties.getString("rowSeparator"),
	top:30,
	height:320,
	width:300,
	borderRadius:10,
	//borderColor:Ti.App.Properties.getString("rowSeparator"),
	//borderWidth:2,
	rowHeight:60
});


function setData()
{
	var msg = db.pushdb(); // the database call
	
	var data = [];
	for (var j=0;j<msg.length;j++)	
	{

	Ti.API.info("msg length"+msg.length );
	//create a row
	var row = Ti.UI.createTableViewRow({height:100,serial:msg[j].serial});

	var msgTitle= Titanium.UI.createLabel({color:'#000',width:'280',text:msg[j].message,font:{fontSize:16,fontFamily:'Helvetica Neue'},left:20,textAlign:'left'});
	
	var msgTime= Titanium.UI.createLabel({color:'#000',width:'auto',text:msg[j].time,font:{fontSize:13,fontFamily:'Helvetica Neue'},textAlign:'right', right:20,top:60});
	
	var rec = Titanium.UI.createLabel({color:'#000',width:'auto',text:"Received",font:{fontSize:13,fontFamily:'Helvetica Neue'},right:msgTime.width+20,textAlign:'right', top:60});
	
	row.add(msgTitle);
	
	row.add(msgTime);
	row.add(rec);
	data.push(row);
	}
	tableview.setData(data);
}

win.addEventListener('focus', function()
{
	tableview.setData([]);
	setTimeout(function()
	{
		setData();
	},0);
});


setData();
win.add(tableview);
