// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS

var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;

// End includes

// opentouchmap solution. Passes variables into the url to create a static image that is
// larger than the screen size to give the impression of a movable map where it is in fact just a static image.
  
  var map = Titanium.UI.createWebView({top:0,width:320, height:460,scalesPageToFit:false,touchEnabled:true,url:'http://dev.openstreetmap.de/staticmap/staticmap.php?center=-37.821447336459,145.03872751419&zoom=17&size=520x660&markers=-37.821167661543,145.03779410534,ol-marker|-37.820693059254,145.0390922945,ylw-pushpin'});
 

  win.add(map);