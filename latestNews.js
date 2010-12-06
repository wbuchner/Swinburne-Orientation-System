// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS

// This file uses an HTTP Connection to get the RSS feed from the public website.
// Parse the feed and display in TableView

var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;

// End includes
var data = [];

var xhr = Ti.Network.createHTTPClient();
xhr.open("GET","feed://www.swinburne.edu.au/chancellery/mediacentre/media-centre/feeds/latest");
xhr.onload = function()
{
	try
	{
		var doc = this.responseXML.documentElement;
		var items = doc.getElementsByTagName("item");
		
		var x = 0;
		var doctitle = doc.evaluate("//channel/title/text()").item(0).nodeValue;
		for (var c=0;c<items.length;c++)
		{
			var item = items.item(c);
			
			var thumbnails = item.getElementsByTagName("description");
			
			if (thumbnails && thumbnails.length > 0)
			{
				// commented out until I can parse the image 
				//var media = item.getElementsByTagName("description").item(0).text;
				
				var title = item.getElementsByTagName("title").item(0).text;
				var datePublished = item.getElementsByTagName("pubDate").item(0).text;
				
				var thumb = item.getElementsByTagName("description").item(0).text;
				var LIndex = thumb.lastIndexOf(".jpg");
				var imageName = thumb.slice(91,LIndex);
				
					var bgcolor = (c % 2) == 0 ? '#fff' : '#eee';
				
				var row = Ti.UI.createTableViewRow({height:80,backgroundColor:bgcolor});
				
				var label = Ti.UI.createLabel({
					text:title,
					left:72,
					top:5,
					bottom:5,
					right:5				
				});
				
				var dte = datePublished.slice(0,10);
				var dateLabel= Ti.UI.createLabel({
					text:'Published '+dte,
					left:200,
					top:60,
					right:5,
					font:{fontFamily:'Trebuchet MS',fontSize:10,fontWeight:'bold'}			
				});

				row.add(label);
				row.add(dateLabel);
				var img;
				img = Ti.UI.createImageView({
						image:"http://www.swinburne.edu.au/chancellery/mediacentre//images/content/"+ imageName +".jpg",
						left:5,
						height:60,
						width:60
					});
					
				
				row.add(img);
				data[x++] = row;
				row.url = item.getElementsByTagName("link").item(0).text;
			}
		}
		var tableview = Titanium.UI.createTableView({data:data});
		win.add(tableview);
		tableview.addEventListener('click',function(e)
		{
			var w = Ti.UI.createWindow({title:doctitle, barColor:'#dd604e'});
			var wb = Ti.UI.createWebView({url:e.row.url});
			w.add(wb);
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
	}
	catch(E)
	{
		alert(E);
	}
};
xhr.send();




