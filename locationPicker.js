// Code designed by Wayne Buchner
// Author: Wayne Buchner 
// Student id: 6643140
// Project: Swinburne Orientation iSOS
// Filename: location room data
/* This file allows the user to select a location will be saved along with the info */

var column1 = Ti.UI.createPickerColumn({opacity:0});
column1.addRow(Ti.UI.createPickerRow({title:'1A',rm:'1A'}));
column1.addRow(Ti.UI.createPickerRow({title:'10G',rm:'10G'}));
column1.addRow(Ti.UI.createPickerRow({title:'24G',rm:'24G'}));
column1.addRow(Ti.UI.createPickerRow({title:'32P',rm:'32P'}));
column1.addRow(Ti.UI.createPickerRow({title:'B1',rm:'B1'}));
column1.addRow(Ti.UI.createPickerRow({title:'60Wm',rm:'60Wm'}));
column1.addRow(Ti.UI.createPickerRow({title:'420B',rm:'420B'}));
column1.addRow(Ti.UI.createPickerRow({title:'SC',rm:'SC'}));
column1.addRow(Ti.UI.createPickerRow({title:'459B',rm:'459B'}));
column1.addRow(Ti.UI.createPickerRow({title:'463B',rm:'463B'}));
column1.addRow(Ti.UI.createPickerRow({title:'477B',rm:'477B'}));
column1.addRow(Ti.UI.createPickerRow({title:'AD',rm:'AD'}));
column1.addRow(Ti.UI.createPickerRow({title:'AS',rm:'AS'}));
column1.addRow(Ti.UI.createPickerRow({title:'AR',rm:'AR'}));
column1.addRow(Ti.UI.createPickerRow({title:'AGSE',rm:'AGSE'}));
column1.addRow(Ti.UI.createPickerRow({title:'BS',rm:'BS'}));
column1.addRow(Ti.UI.createPickerRow({title:'BA',rm:'BA'}));
column1.addRow(Ti.UI.createPickerRow({title:'CH',rm:'CH'}));
column1.addRow(Ti.UI.createPickerRow({title:'420B',rm:'420B'}));
column1.addRow(Ti.UI.createPickerRow({title:'EN',rm:'EN'}));
column1.addRow(Ti.UI.createPickerRow({title:'EW',rm:'EW'}));
column1.addRow(Ti.UI.createPickerRow({title:'IR',rm:'IR'}));
column1.addRow(Ti.UI.createPickerRow({title:'IS',rm:'IS'}));
column1.addRow(Ti.UI.createPickerRow({title:'LB',rm:'LB'}));
column1.addRow(Ti.UI.createPickerRow({title:'19W',rm:'19W'}));
column1.addRow(Ti.UI.createPickerRow({title:'SA',rm:'SA'}));
column1.addRow(Ti.UI.createPickerRow({title:'SR',rm:'SR'}));
column1.addRow(Ti.UI.createPickerRow({title:'SH',rm:'SH'}));
column1.addRow(Ti.UI.createPickerRow({title:'44Wm',rm:'44Wm'}));
column1.addRow(Ti.UI.createPickerRow({title:'SPS',rm:'SPS'}));
column1.addRow(Ti.UI.createPickerRow({title:'SPW',rm:'SPW'}));
column1.addRow(Ti.UI.createPickerRow({title:'TA',rm:'TA'}));
column1.addRow(Ti.UI.createPickerRow({title:'TB',rm:'TB'}));
column1.addRow(Ti.UI.createPickerRow({title:'TC',rm:'TC'}));
column1.addRow(Ti.UI.createPickerRow({title:'TD',rm:'TD'}));
column1.addRow(Ti.UI.createPickerRow({title:'UN',rm:'UN'}));

var column4 = Ti.UI.createPickerColumn({opacity:0});
column4.addRow(Ti.UI.createPickerRow({title:'0',rm:'0'}));
column4.addRow(Ti.UI.createPickerRow({title:'1',rm:'1'}));
column4.addRow(Ti.UI.createPickerRow({title:'2',rm:'2'}));
column4.addRow(Ti.UI.createPickerRow({title:'3',rm:'3'}));
column4.addRow(Ti.UI.createPickerRow({title:'4',rm:'4'}));
column4.addRow(Ti.UI.createPickerRow({title:'5',rm:'5'}));
column4.addRow(Ti.UI.createPickerRow({title:'6',rm:'6'}));
column4.addRow(Ti.UI.createPickerRow({title:'7',rm:'7'}));
column4.addRow(Ti.UI.createPickerRow({title:'8',rm:'8'}));
column4.addRow(Ti.UI.createPickerRow({title:'9',rm:'9'}));

var column5 = Ti.UI.createPickerColumn({opacity:0});
column5.addRow(Ti.UI.createPickerRow({title:'0',rm:'0'}));
column5.addRow(Ti.UI.createPickerRow({title:'1',rm:'1'}));
column5.addRow(Ti.UI.createPickerRow({title:'2',rm:'2'}));
column5.addRow(Ti.UI.createPickerRow({title:'3',rm:'3'}));
column5.addRow(Ti.UI.createPickerRow({title:'4',rm:'4'}));
column5.addRow(Ti.UI.createPickerRow({title:'5',rm:'5'}));
column5.addRow(Ti.UI.createPickerRow({title:'6',rm:'6'}));
column5.addRow(Ti.UI.createPickerRow({title:'7',rm:'7'}));
column5.addRow(Ti.UI.createPickerRow({title:'8',rm:'8'}));
column5.addRow(Ti.UI.createPickerRow({title:'9',rm:'9'}));

var column6 = Ti.UI.createPickerColumn({opacity:0});
column6.addRow(Ti.UI.createPickerRow({title:'0',rm:'0'}));
column6.addRow(Ti.UI.createPickerRow({title:'1',rm:'1'}));
column6.addRow(Ti.UI.createPickerRow({title:'2',rm:'2'}));
column6.addRow(Ti.UI.createPickerRow({title:'3',rm:'3'}));
column6.addRow(Ti.UI.createPickerRow({title:'4',rm:'4'}));
column6.addRow(Ti.UI.createPickerRow({title:'5',rm:'5'}));
column6.addRow(Ti.UI.createPickerRow({title:'6',rm:'6'}));
column6.addRow(Ti.UI.createPickerRow({title:'7',rm:'7'}));
column6.addRow(Ti.UI.createPickerRow({title:'8',rm:'8'}));
column6.addRow(Ti.UI.createPickerRow({title:'9',rm:'9'}));
