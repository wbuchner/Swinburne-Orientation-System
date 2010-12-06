// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS
// Filename: metjrny.js
// This file opens the met Journey web based application that was written by Met Link
var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;

win.backgroundColor='#fff';
// End includes

var image = Titanium.UI.createWebView({
	url:'metlinkJourney.html',
	width:280,
	top:20
	});
win.add(image);