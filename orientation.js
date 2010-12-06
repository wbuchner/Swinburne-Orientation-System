// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS
// Filename: Orientation Programs

var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;
win.orientationModes = [
	Titanium.UI.PORTRAIT,
	Titanium.UI.UPSIDE_PORTRAIT,
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT
]; 




// End includes

var data = [];

data[0] = Ti.UI.createTableViewRow({hasChild:true,title:'Life and Social Sciences',header:'',file:'Lss_pg',length:2});
data[1] = Ti.UI.createTableViewRow({hasChild:true,title:'Engineering and Industrial Sciences',file:'Eng_pg',length:2});
data[2] = Ti.UI.createTableViewRow({hasChild:true,title:'Information and Communication Technologies',file:'ICT_pg',length:2});
data[3] = Ti.UI.createTableViewRow({hasChild:true,title:'Business and Enterprise',file:'Bus_pg',length:2});

// create table view
var tableview = Titanium.UI.createTableView({
	data:data,
	top:60,
	scrollable: true,
	backgroundColor: 'transparent',
	separatorColor:Ti.App.Properties.getString("rowSeparator"),
	separatorStyle:Ti.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE,
	rowBackgroundColor:'#fff',
	style: Titanium.UI.iPhone.TableViewStyle.GROUPED
});

win.add(tableview);

Ti.Gesture.addEventListener('orientationchange',function(e)
{
var currentOrientation = Titanium.Gesture.orientation;
Ti.API.info("currentOrientation "+currentOrientation);
if (currentOrientation == 3 || currentOrientation == 4){
tableview.top = 10;
}else{
tableview.top = 60;
}

});

tableview.addEventListener('click', function(e)
{

var w = Ti.UI.createWindow({title:'Page 1',backgroundColor:'#fff',barColor:Ti.App.Properties.getString("barColor")});
w.orientationModes = [
	Titanium.UI.PORTRAIT,
	Titanium.UI.UPSIDE_PORTRAIT,
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT
]; 
var scrollView = Titanium.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:'auto',
    top:0,
    left:0,
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true,
    maxZoomScale:5,
    minZoomScale:0.1
});


var view = Titanium.UI.createView({
   borderRadius:10,
   backgroundColor:'red',
    width:'auto',
    height:'auto'
});

scrollView.add(view);

var view1 = Ti.UI.createImageView({
    backgroundColor:'#fff',
    image:'images/orientation/'+e.row.file+'1.jpg',
    width:'auto',
    height:'auto',
    top:0
});

view.add(view1);

var view2 = Ti.UI.createImageView({
    backgroundColor:'#fff',
    image:'images/orientation/'+e.row.file+'2.jpg',
    width:'auto',
    height:'auto',
    top:0
});

w.add(scrollView);

// Close Button
var closeButton = Titanium.UI.createButton({title:'Close', style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN });
var nextButton = Titanium.UI.createButton({title:'Next', style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN });
var backButton = Titanium.UI.createButton({title:'back', style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN });
// set Left Nav Button to Close Button	
w.setLeftNavButton(closeButton);
w.setRightNavButton(nextButton);
// Close Button  Event listern

nextButton.addEventListener('click', function()
{
view.animate({view:view2,transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT, duration:650});
w.setRightNavButton(backButton);
w.title ="Page 2";
});
backButton.addEventListener('click', function()
{
view.animate({view:view1,transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT, duration:650});
w.setRightNavButton(nextButton);
});

closeButton.addEventListener('click',function()
{
w.close();
});

w.open({modal:true});
});