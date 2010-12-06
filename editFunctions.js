// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS
// FILENAME: Timetable Edit functions


function editSubject(){
win.setRightNavButton(cancel);
	
	win.remove(subj);
	
	var textSubject = Titanium.UI.createTextField({
	color:'#336699',
	top:10,
	left:10,
	width:300,
	height:40,
	hintText:sub[0].subject,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});


	win.add(textSubject);

	textSubject.addEventListener('focus', function()
	{
		win.setRightNavButton(save);

	
	});

}


function cancell(){


}