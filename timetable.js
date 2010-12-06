// Code designed by Wayne Buchner
// Owned by Vacation Aps
// ©2010 Vacation Aps & Wayne R Buchner
// Project: Vacation Aps (miCompass) Beta 1.7
Titanium.include('timetableModel.js');

var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;
win.barColor = '#dd604e';
// End includes

var data = [];

function setData(){
Titanium.include('timetableSections.js');

var tableview = Ti.UI.createTableView({
	separatorColor:Ti.App.Properties.getString("rowSeparator"),
	backgroundColor: '#fff',
	deleteButtonTitle:'Delete',
	top:30,
	height:320,
	width:300,
	borderRadius:10,
	data:data
	});

win.add(tableview);

var edit = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.EDIT
});

var cancel = Titanium.UI.createButton({
	title:'Cancel',
	style:Titanium.UI.iPhone.SystemButtonStyle.DONE
});

edit.addEventListener('click', function(e)
{
	win.setLeftNavButton(cancel);
	tableview.editing = true;
});


cancel.addEventListener('click', function()
{
	win.setLeftNavButton(edit);
	tableview.editing = false;
});

tableview.addEventListener('delete', function(e)
{
	db.del(e.row.del);
	win.setLeftNavButton(edit);
	tableview.editing = false;
});

/*
win.addEventListener('focus', function()
{
	tableview.setData([]);
	setTimeout(function()
	{
		setData();
	},500);
});
*/

if (Ti.Platform.name == 'iPhone OS') {
	win.leftNavButton = edit;
} else {
	edit.top = 5;
	edit.title = "edit";
	edit.width = 200;
	tableview.top = 60;
	win.add(edit);
}

//setData();

var add = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.ADD
});

win.rightNavButton = add;

// Add subject event listener to open a new window to enter a new subject
add.addEventListener('click', function()
{
	var w = Ti.UI.createWindow({title:'Add Subject',backgroundImage:'images/stripes.PNG',barColor:'#dd604e', url:'newSubject.js'});
			
		   var b = Titanium.UI.createButton({
				title:'Close',
				style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
			});
			w.setLeftNavButton(b);
		
		b.addEventListener('click',function()
			{
				w.close();
			});
	tab.open(w,{animated:true});		
});			

// Tableview row event listener
tableview.addEventListener('click', function(e)
{
	
	var editWindow = Ti.UI.createWindow({title:e.row.subjectTitle,barColor:'#dd604e', backgroundImage:'images/stripes.PNG',url:'subjectDetail.js'});
	
	editWindow.serial = e.row.del;
	editWindow.sub = db.subjectDetail(e.row.del);
	tab.open(editWindow,{animated:true});
});

}
win.addEventListener('focus', function()
{
setTimeout(function()
{
	data =[];
	setData();

},500);

});
//setData();


