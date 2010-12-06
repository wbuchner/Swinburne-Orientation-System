// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS

var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;
Titanium.include('timetableModel.js');
// End includes
var bldg = db.buildingsdb();

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
	//Ti.API.info("bldgLat ");
	//Ti.API.info("bldgLong ");
});
win.add(picker);