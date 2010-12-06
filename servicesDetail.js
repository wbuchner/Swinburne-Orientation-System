// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS

var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;

Titanium.include('sasModel.js');

// End includes
var serial = win.serial;
var button = Titanium.UI.createButton({
	height:40,
	width:280,
	title: 'More Info'
});
var sas =db.detaildb(serial);

Ti.API.info("Serial "+ serial);
// sasTitle
var sasTitle= Titanium.UI.createLabel({color:'#444',left:25,top:20,width:280,height:'auto',text:sas[0].servicesTitle,font:{fontSize:18,fontFamily:'Arial'} });


//Notes
	var sasBkg= Titanium.UI.createLabel({height:220,width:280,borderRadius:5, borderWidth:0,borderColor: '#999', backgroundColor:'#fff',color:'#444',left:20,top:85});
	var sasDescription= Titanium.UI.createLabel({height:'auto',width:260, borderRadius:5, borderWidth:0,borderColor: '#999', backgroundColor:'#fff',color:'#444',left:30,top:95,text:sas[0].servicesDesc,font:{fontSize:14,fontFamily:'Arial'} });
	
	// Line divider
	var line = Titanium.UI.createImageView({top:sasTitle.height+22,height:2, width:280, image:'images/line.png' });
	win.add(line);
	
var dynamicHeight = sasDescription.height+20;

if (sas[0].sasLink !==''){
	win.add(button);
	};

sasBkg.height = dynamicHeight;
	win.add(sasTitle);
	win.add(sasBkg);
	win.add(sasDescription);

button.top = sasBkg.top+sasBkg.height+20;
	
	button.addEventListener('click',function(e)
	{
	   var w = Ti.UI.createWindow({title:'more sas', barColor:'#dd604e',color:'#dd604e',backgroundColor:'#e7dfd1'});
			var b = Titanium.UI.createButton({
				title:'Close',
				style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
			});
			w.serial = serial;
			w.setLeftNavButton(b);
			
			//url:sas[0].sasLink
			var webview = Titanium.UI.createWebView({url:sas[0].servicesLink});
			w.add(webview);			
			
			b.addEventListener('click',function()
			{
				w.close();
			});
			w.open({modal:true});	
	});	