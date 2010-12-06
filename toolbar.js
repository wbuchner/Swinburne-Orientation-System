// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS

// Toolbar

var doneButton = Titanium.UI.createButton({
				title:'Done',
				style:Titanium.UI.iPhone.SystemButtonStyle.DONE
	});

var flexSpace = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

var toolbar1 = Titanium.UI.createToolbar({
	items:[flexSpace,camera, flexSpace,tf,flexSpace, send,flexSpace],
	bottom:0,
	borderTop:true,
	borderBottom:false,
	translucent:true,
	barColor:'#999'
});	
win.add(toolbar1);
