// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS
// This file gets the date thru the Javascript Date function and returns it for use

var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;

// End includes

function getDate(){
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var month = currentTime.getMonth() + 1;
var day = currentTime.getDate();
var year = currentTime.getFullYear();
 
return month+"/"+day+"/"+year+" -  "+hours +":"+minutes;
 
};