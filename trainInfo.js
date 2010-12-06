// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS
// FILENAME: train info

var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;

Titanium.include('timetableModel.js');
// End includes

var trans = db.transport();

var label = Titanium.UI.createLabel({
	color:'#333',
	text:'The campus is approximately a one minute walk from Glenferrie station. Belgrave, Lilydale and Alamein train lines from the city travel to Glenferrie station in 10 minutes. Tram No.16 Kew to St Kilda Beach stops on Glenferrie Road, where shops, food outlets and ATMs are also located. Bus No. 624 Kew-Chadstone – Oakleigh (via Carnegie), travels along Auburn Rd about av10 minute walk to Campus.',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win.add(label);
