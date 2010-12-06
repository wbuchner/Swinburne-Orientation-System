var data = [];
	

// ==================================================================
// Section One - Monday	

var monday = db.timetabledb("Monday");
	
if (monday.length >= 1)	{
	
// Header label 1
var header1 = Ti.UI.createView({
	backgroundColor:'#777',
	textAlign:'left',
	height:20
});

var headerLabel1 = Ti.UI.createLabel({
	font:{fontFamily:'Arial',fontSize:15,fontWeight:'bold'},
	text:'Monday',
	color:'#fff',
	left:10,
	width:'auto',
	height:'auto'
});
	
header1.add(headerLabel1);	
var section1 = Ti.UI.createTableViewSection();

section1.headerView = header1;

data[0] = section1;
	
	for (var j=0;j<monday.length;j++)	
	{
	//create a row
	
	var row = Ti.UI.createTableViewRow({hasChild:true,height:60,del:monday[j].serial,subjectTitle:monday[j].subject});

	row.rightImage = 'images/red_arrow.png';
	var subjectM = Titanium.UI.createLabel({color:'#000',text:monday[j].subject,font:{fontSize:20,fontFamily:'Arial'},left:20,top:-25,textAlign:'left'});
	var descriptionM = Titanium.UI.createLabel({color:'#999',text:monday[j].description,font:{fontSize:14,fontFamily:'Arial'},left:20,top:20,textAlign:'left'});
	var timeBkgM = Titanium.UI.createLabel({backgroundColor:'#0fe90b',width:35,height:60,left:-10,borderRadius:10});
	
	
	row.add(subjectM);
	row.add(descriptionM);
	section1.add(row);
	}
}


// ==================================================================
// Section Two - Tuesday	

var tuesday = db.timetabledb("Tuesday");
	
Ti.API.info("Tuesday length "+tuesday.length);
if (tuesday.length >= 1)	{
	
// Header label 2
var header2 = Ti.UI.createView({
	backgroundColor:'#777',
	textAlign:'left',
	height:20
});

var headerLabel2 = Ti.UI.createLabel({
	font:{fontFamily:'Arial',fontSize:15,fontWeight:'bold'},
	text:'Tuesday',
	color:'#fff',
	left:10,
	width:'auto',
	height:'auto'
});
	
header2.add(headerLabel2);	
var section2 = Ti.UI.createTableViewSection();

section2.headerView = header2;

data[1] = section2;
	
	for (var a=0;a<tuesday.length;a++)	
	{
	//create a row
	
	var rowT = Ti.UI.createTableViewRow({hasChild:true,height:60,del:tuesday[a].serial,subjectTitle:tuesday[a].subject});

	rowT.rightImage = 'images/red_arrow.png';
	var subjectT = Titanium.UI.createLabel({color:'#000',text:tuesday[a].subject,font:{fontSize:20,fontFamily:'Arial'},left:20,top:-25,textAlign:'left'});
	var descriptionT = Titanium.UI.createLabel({color:'#999',text:tuesday[a].description,font:{fontSize:14,fontFamily:'Arial'},left:20,top:20,textAlign:'left'});

	rowT.add(subjectT);
	rowT.add(descriptionT);
	section2.add(rowT);
	}
}



// ==================================================================
// Section Three - Wednesday	

var wednesday = db.timetabledb("Wednesday");
	
	Ti.API.info("wednesday length "+wednesday.length);
if (wednesday.length >= 1)	{
	
// Header label 3
var header3 = Ti.UI.createView({
	backgroundColor:'#777',
	textAlign:'left',
	height:20
});

var headerLabel3 = Ti.UI.createLabel({
	font:{fontFamily:'Arial',fontSize:15,fontWeight:'bold'},
	text:'Wednesday',
	color:'#fff',
	left:10,
	width:'auto',
	height:'auto'
});
	
header3.add(headerLabel3);	
var section3 = Ti.UI.createTableViewSection();

section3.headerView = header3;

data[2] = section3;
	
	for (var b=0;b<wednesday.length;b++)	
	{
	//create a row
	
	var rowW = Ti.UI.createTableViewRow({hasChild:true,height:60,del:wednesday[b].serial,subjectTitle:wednesday[b].subject});

	rowW.rightImage = 'images/red_arrow.png';
	var subjectW = Titanium.UI.createLabel({color:'#000',text:wednesday[b].subject,font:{fontSize:20,fontFamily:'Arial'},left:20,top:-25,textAlign:'left'});
	var descriptionW = Titanium.UI.createLabel({color:'#999',text:wednesday[b].description,font:{fontSize:14,fontFamily:'Arial'},left:20,top:20,textAlign:'left'});

	rowW.add(subjectW);
	rowW.add(descriptionW);
	section3.add(rowW);
	
	}
	
}

// ==================================================================
// Section Four - Thursday	

var thursday = db.timetabledb("Thursday");
	
	Ti.API.info("thursday length "+thursday.length);
if (thursday.length >= 1)	{
	
// Header label 4
var header4 = Ti.UI.createView({
	backgroundColor:'#777',
	textAlign:'left',
	height:20
});

var headerLabel4 = Ti.UI.createLabel({
	font:{fontFamily:'Arial',fontSize:15,fontWeight:'bold'},
	text:'Thursday',
	color:'#fff',
	left:10,
	width:'auto',
	height:'auto'
});
	
header4.add(headerLabel4);	
var section4 = Ti.UI.createTableViewSection();

section4.headerView = header4;

data[3] = section4;
	
	for (var c=0;c<thursday.length;c++)	
	{
	//create a row
	
	var rowTh = Ti.UI.createTableViewRow({hasChild:true,height:60,del:thursday[c].serial,subjectTitle:thursday[c].subject});

	rowTh.rightImage = 'images/red_arrow.png';
	var subjectTh = Titanium.UI.createLabel({color:'#000',text:thursday[c].subject,font:{fontSize:20,fontFamily:'Arial'},left:20,top:-25,textAlign:'left'});
	var descriptionTh = Titanium.UI.createLabel({color:'#999',text:thursday[c].description,font:{fontSize:14,fontFamily:'Arial'},left:20,top:20,textAlign:'left'});

	rowTh.add(subjectTh);
	rowTh.add(descriptionTh);
	section4.add(rowTh);
	}
	
	
}


// ==================================================================
// Section Five - friday

var friday = db.timetabledb("Friday");
	
	Ti.API.info("friday length "+friday.length);
if (friday.length >= 1)	{
	
// Header label 5
var header5 = Ti.UI.createView({
	backgroundColor:'#777',
	textAlign:'left',
	height:20
});

var headerLabel5 = Ti.UI.createLabel({
	font:{fontFamily:'Arial',fontSize:15,fontWeight:'bold'},
	text:'Friday',
	color:'#fff',
	left:10,
	width:'auto',
	height:'auto'
});
	
header5.add(headerLabel5);	
var section5 = Ti.UI.createTableViewSection();

section5.headerView = header5;

data[4] = section5;
	
	for (var d=0;d<friday.length;d++)	
	{
	//create a row
	
	var rowF = Ti.UI.createTableViewRow({hasChild:true,height:60,del:friday[d].serial,subjectTitle:friday[d].subject});

	rowF.rightImage = 'images/red_arrow.png';
	var subjectF = Titanium.UI.createLabel({color:'#000',text:friday[d].subject,font:{fontSize:20,fontFamily:'Arial'},left:20,top:-25,textAlign:'left'});
	var descriptionF = Titanium.UI.createLabel({color:'#999',text:friday[d].description,font:{fontSize:14,fontFamily:'Arial'},left:20,top:20,textAlign:'left'});

	rowF.add(subjectF);
	rowF.add(descriptionF);
	section5.add(rowF);
	}
}

// ==================================================================
// Section Six - Saturday

var saturday = db.timetabledb("Saturday");
	
	Ti.API.info("saturday length "+saturday.length);
if (saturday.length >= 1)	{
	
// Header label 6
var header6 = Ti.UI.createView({
	backgroundColor:'#777',
	textAlign:'left',
	height:20
});

var headerLabel6 = Ti.UI.createLabel({
	font:{fontFamily:'Arial',fontSize:15,fontWeight:'bold'},
	text:'Saturday',
	color:'#fff',
	left:10,
	width:'auto',
	height:'auto'
});
	
header6.add(headerLabel6);	
var section6 = Ti.UI.createTableViewSection();

section6.headerView = header6;

data[5] = section6;
	
	for (var e=0; e<saturday.length ; e++)	
	{
	//create a row
	
	var rowSa = Ti.UI.createTableViewRow({hasChild:true,height:60,del:saturday[e].serial,subjectTitle:saturday[e].subject});

	rowSa.rightImage = 'images/red_arrow.png';
	var subjectSa = Titanium.UI.createLabel({color:'#000',text:saturday[e].subject,font:{fontSize:20,fontFamily:'Arial'},left:20,top:-25,textAlign:'left'});
	var descriptionSa = Titanium.UI.createLabel({color:'#999',text:saturday[e].description,font:{fontSize:14,fontFamily:'Arial'},left:20,top:20,textAlign:'left'});

	rowSa.add(subjectSa);
	rowSa.add(descriptionSa);
	section6.add(rowSa);
	}
}

// ==================================================================
// Section Seven - Sunday

var sunday = db.timetabledb("Sunday");
	
	Ti.API.info("sunday length "+sunday.length);
if (sunday.length >= 1)	{
	
// Header label 7
var header7 = Ti.UI.createView({
	backgroundColor:'#777',
	textAlign:'left',
	height:20
});

var headerLabel7 = Ti.UI.createLabel({
	font:{fontFamily:'Arial',fontSize:15,fontWeight:'bold'},
	text:'Sunday',
	color:'#fff',
	left:10,
	width:'auto',
	height:'auto'
});
	
header7.add(headerLabel7);	
var section7 = Ti.UI.createTableViewSection();

section7.headerView = header7;

data[6] = section7;
	
	for (var f=0; f<sunday.length ; f++)	
	{
	//create a row
	
	var rowSu = Ti.UI.createTableViewRow({hasChild:true,height:60,del:sunday[f].serial,subjectTitle:sunday[f].subject});

	rowSu.rightImage = 'images/red_arrow.png';
	var subjectSu = Titanium.UI.createLabel({color:'#000',text:sunday[f].subject,font:{fontSize:20,fontFamily:'Arial'},left:20,top:-25,textAlign:'left'});
	var descriptionSu = Titanium.UI.createLabel({color:'#999',text:sunday[f].description,font:{fontSize:14,fontFamily:'Arial'},left:20,top:20,textAlign:'left'});

	rowSu.add(subjectSu);
	rowSu.add(descriptionSu);
	section7.add(rowSu);
	}
}


