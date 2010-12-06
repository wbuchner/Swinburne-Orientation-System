var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;

win.title = "Events";
var link = win.link;
// create table view data object
var data = [];

// Open http connection to GET Feed
var xhr = Ti.Network.createHTTPClient();
xhr.open("GET","http://cit3.ldl.swin.edu.au/~isos/events.xml");
xhr.onload = function()
{
	try
	{
		var doc = this.responseXML.documentElement;
		var items = doc.getElementsByTagName("event");
		
		Ti.API.info("Items length: "+items.length);
		
		var x = 0;
		
		for (var c=0;c<items.length;c++)
		{
			var item = items.item(c);
				
				var id = item.getElementsByTagName("events_id").item(0).text;
				
				// Alternating background color
				var bgcolor = (c % 2) == 0 ? '#fff' : '#eee';
				var row = Ti.UI.createTableViewRow({height:80,backgroundColor:bgcolor,serial:id});
				
				row.eventTitle = item.getElementsByTagName("events_Title").item(0).text;
				row.desc = item.getElementsByTagName("events_Desc").item(0).text;
				row.link = item.getElementsByTagName("events_Link").item(0).text;
				row.date = item.getElementsByTagName("events_Date").item(0).text;
				row.time = item.getElementsByTagName("events_Time").item(0).text;
				row.campus = item.getElementsByTagName("events_Campus").item(0).text;
				row.type = item.getElementsByTagName("events_Type").item(0).text;
				row.building = item.getElementsByTagName("buildings_buildings_id").item(0).text;
				
				var label = Ti.UI.createLabel({text:row.eventTitle,left:20,top:5,bottom:5,right:5	});

				row.newId = item.getElementsByTagName("events_id").item(0).text;
				row.newTitle = item.getElementsByTagName("events_Title").item(0).text;
				
				row.add(label);
				data[x++] = row;
		}
		var tableview = Titanium.UI.createTableView({data:data});
		win.add(tableview);
		
		tableview.addEventListener('click',function(e)
		{
			var a = e.row.newTitle;
			Ti.API.info("A: "+a);
			var w = Ti.UI.createWindow({title:a, barColor:Ti.App.Properties.getString("barColor"), backgroundImage:'images/stripes.PNG',url:'events.js'});
			 		
			w.event_id = e.row.serial;
			w.eventTitle = e.row.newTitle;
			w.eventDesc = e.row.desc;
			w.eventLink = e.row.link;
			w.eventDate = e.row.date;
			w.eventTime = e.row.time;
			w.eventCampus = e.row.campus;
			w.eventType = e.row.type;
			w.eventBuilding = e.row.building;
			
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




