// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS

Titanium.include('timetableModel.js');

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
	rowHeight:60
	});
	
function setData()
{
	var faq = db.sas();
	var data = [];
	for (var j=0;j<faq.length;j++)	
	{

	//create a row
	var row = Ti.UI.createTableViewRow({hasChild:true,height:100,serial:faq[j].serial});

	row.rightImage = 'images/red_arrow.png';
	
	var faqTitle= Titanium.UI.createLabel({color:'#000',width:'220',text:faq[j].servicesTitle,font:{fontSize:16,fontFamily:'Helvetica Neue'},left:20,textAlign:'left'});
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
	Ti.API.info("row serial "+ e.row.serial);
	var faqWindow = Ti.UI.createWindow({title:'Student Services',barColor:'#dd604e', backgroundImage:Ti.App.Properties.getString("backgroundImage"),url:'sasDetail.js'});
	
	faqWindow.serial = e.row.serial;
	
	tab.open(faqWindow,{animated:true});
});