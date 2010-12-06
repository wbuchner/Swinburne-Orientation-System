// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS

var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;

Titanium.include('timetableModel.js');

// End includes
var serial = win.serial;

Ti.API.info("Serial "+ serial);

var button = Titanium.UI.createButton({
	height:40,
	width:280,
	top:300,
	color:'#999',
	title: 'more info on the web'
});
var faq =db.sasDetail(serial);
// faqTitle
var faqTitle= Titanium.UI.createLabel({color:'#444',left:20,top:20,width:280,height:'auto',text:faq[0].servicesTitle,font:{fontSize:22,fontFamily:'Arial',fontWeight:'bold'} });

//Notes
	var faqBkg= Titanium.UI.createLabel({height:220,width:280,borderRadius:5, borderWidth:0,borderColor: '#999', backgroundColor:'#fff',color:'#444',left:20,top:faqTitle.top+faqTitle.height+32});
	var faqDescription= Titanium.UI.createLabel({height:'auto',width:260, borderRadius:5, borderWidth:0,borderColor: '#999', backgroundColor:'#fff',color:'#444',left:30,top:faqTitle.top+faqTitle.height+42,text:faq[0].servicesDesc,font:{fontSize:14,fontFamily:'Arial'} });
	
	// Line divider
	var line = Titanium.UI.createImageView({top:faqTitle.height+27,height:2, width:280, image:'images/line.png' });
	win.add(line);
	
var dynamicHeight = faqDescription.height+20;

if (faq[0].faqLink !==''){
	win.add(button);
	};

faqBkg.height = dynamicHeight;
	win.add(faqTitle);
	win.add(faqBkg);
	win.add(faqDescription);

button.top = faqBkg.top+faqBkg.height+20;
button.addEventListener('click',function(e)
	{
	   var w = Ti.UI.createWindow({title:'more FAQ', barColor:'#dd604e',color:'#dd604e',backgroundColor:'#e7dfd1'});
			var b = Titanium.UI.createButton({
				title:'Close',
				style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
			});
			w.serial = serial;
			w.setLeftNavButton(b);
			
			//url:faq[0].faqLink
			var webview = Titanium.UI.createWebView({url:faq[0].servicesLink});
			w.add(webview);			
			
			b.addEventListener('click',function()
			{
				w.close();
			});
			w.open({modal:true});	
	});