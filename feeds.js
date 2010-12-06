// Code designed by Wayne Buchner
// Owned by Vacation Aps
// ©2010 Vacation Aps & Wayne R Buchner
// Project: Vacation Aps (miCompass) Beta 1.7

// FILENAME  FEEDS.JS

var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;
win.backgroundImage=Ti.App.Properties.getString("backgroundImage");

// End includes

var data = [];
data[0] = Ti.UI.createTableViewRow({hasChild:true,title:'Latest News',link:'latest-media',rightImage:'images/red_arrow.png'});
data[1] = Ti.UI.createTableViewRow({hasChild:true,title:'Alumni',link:'alumni',rightImage:'images/red_arrow.png'});
data[2] = Ti.UI.createTableViewRow({hasChild:true,title:'Business',link:'business',rightImage:'images/red_arrow.png'});
data[3] = Ti.UI.createTableViewRow({hasChild:true,title:'Design and Film and TV',link:'design-and-film-and-tv',rightImage:'images/red_arrow.png'});
data[4] = Ti.UI.createTableViewRow({hasChild:true,title:'Education',link:'education',rightImage:'images/red_arrow.png'});
data[5] = Ti.UI.createTableViewRow({hasChild:true,title:'Engineering and Aviation',link:'engineering-and-aviation',rightImage:'images/red_arrow.png'});
data[6] = Ti.UI.createTableViewRow({hasChild:true,title:'Health', link:'health',rightImage:'images/red_arrow.png'});
data[7] = Ti.UI.createTableViewRow({hasChild:true,title:'Information Technology',link:'information-technology',rightImage:'images/red_arrow.png'});
data[8] = Ti.UI.createTableViewRow({hasChild:true,title:'International',link:'international',rightImage:'images/red_arrow.png'});
data[9] = Ti.UI.createTableViewRow({hasChild:true,title:'Media',link:'media',rightImage:'images/red_arrow.png'});
data[10] = Ti.UI.createTableViewRow({hasChild:true,title:'Politics',link:'politics',rightImage:'images/red_arrow.png'});
data[11] = Ti.UI.createTableViewRow({hasChild:true,title:'Research',link:'research',rightImage:'images/red_arrow.png'});
data[12] = Ti.UI.createTableViewRow({hasChild:true,title:'Science', link:'science',rightImage:'images/red_arrow.png'});
data[13] = Ti.UI.createTableViewRow({hasChild:true,title:'Social Affairs',link:'social-affairs',rightImage:'images/red_arrow.png'});
data[14] = Ti.UI.createTableViewRow({hasChild:true,title:'Students',link:'students',rightImage:'images/red_arrow.png'});
data[15] = Ti.UI.createTableViewRow({hasChild:true,title:'Sustainability',link:'sustainability',rightImage:'images/red_arrow.png'});
data[16] = Ti.UI.createTableViewRow({hasChild:true,title:'Vice-Chancellor',link:'vice-chancellor',rightImage:'images/red_arrow.png'});


// create table view
var tableview = Titanium.UI.createTableView({
	data:data,
	backgroundColor: 'transparent',
	separatorStyle:Ti.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE,
	top:30,
	height:320,
	rowBackgroundColor:'white',
	width:300,
	borderRadius:10
	//borderColor:Ti.App.Properties.getString("rowSeparator"),
	//borderWidth:2
});

// create table view event listener
tableview.addEventListener('click', function(e)
{

	if (e.row.link == 'latest-media'){
	var win2 = Titanium.UI.createWindow({
	backButtonTitle:'Back',
	title:e.row.title,
	backgroundColor:Ti.App.Properties.getString("backgroundColor"),
	barColor:'#dd604e',
	
    url:'latestNews.js'
   });
	}else{
	win2 = Titanium.UI.createWindow({
	backButtonTitle:'Back',
	title:e.row.title,
	backgroundColor:Ti.App.Properties.getString("backgroundColor"),
	barColor:'#dd604e',
    url:'swinrss.js'
      });	
	}



	// row custom property
	
	win2.link = e.row.link;
   
tab.open(win2,{animated:true});	
	
});
// add table view to the window
Titanium.UI.currentWindow.add(tableview);