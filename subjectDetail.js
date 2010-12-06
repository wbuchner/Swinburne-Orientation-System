// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS

var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;

Titanium.include('timetableModel.js','setTempTimetableProperties.js');

var serial = win.serial;

Ti.API.info("serial = win.serial"+ win.serial);
// End includes

//var sub = win.sub;

var sub = db.subjectDetail(serial);
Ti.API.info("sub.length "+sub.length);
// set the properties of persistant objects to the values from the selected serial from the database to stop errors


Ti.API.info("Serial :-"+serial);
	// Subject
	var subj = Titanium.UI.createLabel({color:'#000',height:'auto',left:40,top:30,text:sub[0].subject,font:{fontSize:26,fontFamily:'Arial'} });
	
	// Line divider
	var line = Titanium.UI.createImageView({height:2, width:260, image:'images/line.png', top:subj.height+60 });
	
	
	// Description
	var desc= Titanium.UI.createLabel({color:'#999',left:40,top:subj.height+70,height:'auto',text:sub[0].description,font:{fontSize:18,fontFamily:'Arial'} });

	//day
	var day= Titanium.UI.createLabel({color:'#dd604e',left:40,top:subj.height+desc.height+90,width:'auto',height:'auto',text:sub[0].day,font:{fontSize:16,fontFamily:'Arial'} });
	
	//Start
	var start= Titanium.UI.createLabel({color:'#dd604e',left:day.left+day.width+10,top:subj.height+desc.height+90,height:'auto',width:'auto',text:sub[0].start,font:{fontSize:18,fontFamily:'Arial'} });
		
	var till = Titanium.UI.createLabel({color:'#dd604e',left:day.left+day.width+start.width+10,top:subj.height+desc.height+91,width:'auto',height:'auto',text:" till ",font:{fontSize:15,fontFamily:'Arial'} });
	
	//End
	var end= Titanium.UI.createLabel({color:'#dd604e',left:day.left+day.width+start.width+till.width+10,top:subj.height+desc.height+89,height:'auto',text:sub[0].end,font:{fontSize:18,fontFamily:'Arial'} });
	
	
	//Class Type
	var classT= Titanium.UI.createLabel({color:'#666',left:40,top:subj.height+desc.height+110,width:'auto',height:'auto',text:sub[0].classType,font:{fontSize:16,fontFamily:'Arial'} });
	
	//Location
	var room= Titanium.UI.createLabel({color:'#666',left:classT.width+40,top:subj.height+desc.height+110,width:'auto',height:'auto',text:sub[0].room,font:{fontSize:16,fontFamily:'Arial'} });
	
	//Notes
	var notes= Titanium.UI.createLabel({height:'auto',width:260, borderRadius:5, borderWidth:0,borderColor: '#999', backgroundColor:'#fff',color:'#666',left:30,top:subj.height+desc.height+170,text:sub[0].notes,font:{fontSize:14,fontFamily:'Arial'} });

	var notesBkg= Titanium.UI.createLabel({height:notes.height+20,width:280,borderRadius:10, borderWidth:0,borderColor: '#999', backgroundColor:'#fff',color:'#666',left:20,top:subj.height+desc.height+160});	
	
	
	var detailBkg = Titanium.UI.createLabel({
		backgroundColor:'#fff',
		width:280,
		height:120,
		borderRadius:10,
		top:20,
		left:20
	});
	
	win.add(detailBkg);
	win.add(subj);
	win.add(desc);
	win.add(day);
	//win.add(startLabel);
	win.add(line);
	win.add(start);
	win.add(till);
	//win.add(endLabel);
	win.add(end);
	win.add(classT);
	win.add(room);
	win.add(notesBkg);
	win.add(notes);
	
	//var line

var edit = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.EDIT
});

if (Ti.Platform.name == 'iPhone OS') {
	win.rightNavButton = edit;
} else {
	edit.top = 5;
	edit.title = "edit";
	edit.width = 200;
	tableview.top = 60;
	win.add(edit);
}


var cancel = Titanium.UI.createButton({
	title:'Cancel',
	style:Titanium.UI.iPhone.SystemButtonStyle.DONE
});

var save = Titanium.UI.createButton({
	title:'Save',
	backgroundColor:'blue',
	style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});

Ti.App.addEventListener('closeWindow', function(data) 
{ 
   win.close();
});


edit.addEventListener('click', function(e)
{
	setTempTimetableProperties();
	var w = Ti.UI.createWindow({title:sub[0].subject,barColor:'#dd604e',backgroundImage:'images/stripes.PNG',url:'editSubject.js'});
			var b = Titanium.UI.createButton({
				title:'Close',
				style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
			});
			w.serial = serial;
			w.setLeftNavButton(b);
			
			b.addEventListener('click',function()
			{
				w.close();
				
			});
			w.open({modal:true});	
});

var roomFinder = Titanium.UI.createButton({
   title: 'Room Finder',
   bottom:80,
   height:35,
   width:280
});

//win.add(roomFinder);
roomFinder.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
});

var buildingFinder = Titanium.UI.createButton({
   title: 'Building Finder',
    bottom:20,
   height:35,
   width:280
});
win.add(buildingFinder);
buildingFinder.addEventListener('click',function(e)
{
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

var w = Ti.UI.createWindow({title:sub[0].room,barColor:Ti.App.Properties.getString("barColor")});

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
	var wb = Ti.UI.createWebView({backgroundColor:'#000',top:0,width:520, height:660,scalesPageToFit:false,touchEnabled:true,url:'http://dev.openstreetmap.de/staticmap/staticmap.php?center='+sub[0].bldgLat+','+sub[0].bldgLong+'&zoom=17&size=520x660&markers='+sub[0].bldgLat+','+sub[0].bldgLong+',red-pushpin'});

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

});