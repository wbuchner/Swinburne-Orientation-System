// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS

// This file is a default done button
// End includes

var doneButton = Titanium.UI.createButton({
	title:'Done',
	style:Titanium.UI.iPhone.SystemButtonStyle.DONE
});
	
Titanium.UI.currentWindow.setRightNavButton(doneButton);

var cancelButton = Titanium.UI.createButton({
	title:'Cancel',
	style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
});
	
cancelButton.addEventListener('click',function()
{
	Titanium.UI.currentWindow.close();
});