var win = Titanium.UI.currentWindow;
win.backgroundImage= 'images/android/back.jpg';
win.height= 410;
win.width= 320;
win.top= 0;
win.backgroundColor= '#000';

var imagegal = Ti.UI.createScrollView({
	top: 0,
	contentHeight:'auto',
	contentWidth:'auto',
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:true
});

var viewerholder = Ti.UI.createImageView({
	backgroundImage:'images/riots.png',
	backgroundColor:'#000',
	height:'330',
	width:'509',
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:true
});

imagegal.add(viewerholder);
win.add(imagegal);

