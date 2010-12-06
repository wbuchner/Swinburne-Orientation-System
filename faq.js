	// Code designed by Wayne Buchner
// Owned by Vacation Aps
// ©2010 Vacation Aps & Wayne R Buchner
// Project: Vacation Aps (miCompass) Beta 1.7

// FILENAME  FAQ.JS

Titanium.include('faqModel.js');

var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;
win.barColor = '#dd604e';
win.backgroundColor=Ti.App.Properties.getString("backgroundColor");
// End includes


var tableview = Ti.UI.createTableView({
	backgroundColor: '#fff',
	separatorColor:Ti.App.Properties.getString("rowSeparator"),
	deleteButtonTitle:'Delete',
	separatorStyle:Ti.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE,
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
	var faq = db.faqdb();
	
	
	
	var data = [];
	for (var j=0;j<faq.length;j++)	
	{

	//create a row
	var row = Ti.UI.createTableViewRow({hasChild:true,height:100,serial:faq[j].serial});

	row.rightImage = 'images/red_arrow.png';
	
	var faqTitle= Titanium.UI.createLabel({color:'#000',width:'220',text:faq[j].faqTitle,font:{fontSize:16,fontFamily:'Arial'},left:20,textAlign:'left'});
	row.add(faqTitle);
		
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
tableview.addEventListener('click', function(e)
{
	
	var faqWindow = Ti.UI.createWindow({title:'Frequently Asked Q\'s',barColor:'#dd604e', backgroundImage:Ti.App.Properties.getString("backgroundImage"),url:'faqDetail.js'});
	
	faqWindow.serial = e.row.serial;
	
	tab.open(faqWindow,{animated:true});
});