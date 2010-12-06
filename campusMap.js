// Code designed by Wayne Buchner
// @author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS
// Filename: Campus Map
/*
*   This file uses the phones built in GPS, parsing the Lat & Long variables into
*   an x and y co-ordinate, alowing the map pin to be accurately placed on a custom map.
*/

var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;

var pinLeft;
var pinTop;



// End includes

var scrollView = Titanium.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:'auto',
    top:0,
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true,
    maxZoomScale:1,
    minZoomScale:0.05
});
var view = Ti.UI.createWebView({
    backgroundColor:'#fff',
    borderRadius:10,
    width:360,
    height:640,
    url:'images/buildings/hawthornCampus.svg'
    });
scrollView.add(view);
Titanium.UI.currentWindow.add(scrollView);

/*
win.addEventListener('focus', function()
{
*/
var xhr = Ti.Network.createHTTPClient();
xhr.open("GET","http://cit3.ldl.swin.edu.au/~isos/hawthornCampus.svg");
xhr.onload = function()
{
	try
	{
	var svgMap = this.responseXML.documentElement;
	
	var items = svgMap.getElementsByTagName("g");
	Ti.API.info("Items length: "+items.length);
	
	for (var c=0;c<items.length;c++)
		{
		var item = items.item(c);
		
		var title = Titanium.UI.createLabel();
		
		title.text =item.getElementsByName("path").item(0).text;
		
		Ti.API.info("title::"+title.text);
		

		
		
		
		}
	

	}
	catch(E)
	{
		alert(E);
	}
};

xhr.send();
//});