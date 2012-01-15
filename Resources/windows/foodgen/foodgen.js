//
// SETUP WINDOW STYLES
//
Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK;
var win = Ti.UI.currentWindow;

var cover = Titanium.UI.createView({
	backgroundImage:'../images/scrollable_view/bg.png',
	zIndex:5
});
win.add(cover);
win.addEventListener('open',function(E){
cover.animate({opacity:0,duration:2000});
});


var t = Ti.UI.create2DMatrix().scale(0.75);
var view1 = Ti.UI.createView({
	width:150,
	height:150,
	top:0,
	//borderWidth: 5,
	//borderColor:'#000',
	backgroundImage:'../../images/0.png',
});


var t2 = Ti.UI.create2DMatrix().scale(0.75);
var view2 = Ti.UI.createView({
	width:150,
	height:150,
	top:0,
	backgroundImage:'../../images/0.png',
	zIndex:1
});

var t3 = Ti.UI.create2DMatrix().scale(0.75);
var view3 = Ti.UI.createView({
	width:150,
	height:150,
	top:0,
	//borderWidth: 5,
	//borderColor:'#000',
	backgroundImage:'../../images/1.png',
});


var t4 = Ti.UI.create2DMatrix().scale(0.75);
var view4 = Ti.UI.createView({
	width:150,
	height:150,
	top:0,
	backgroundImage:'../../images/1.png',
	zIndex:1
});

var image1 = view1.toImage();
var image2 = view2.toImage();
var image3 = view3.toImage();
var image4 = view4.toImage();

var iv1 = Ti.UI.createImageView({image:image1,height:220, width:220});
var iv2 = Ti.UI.createImageView({image:image2,height:220, width:220});
var iv3 = Ti.UI.createImageView({image:image3,height:220, width:220});
var iv4 = Ti.UI.createImageView({image:image4,height:220, width:220});


var scrollView = Titanium.UI.createScrollableView({
	views:[iv1,iv2],
	showPagingControl:true,
	clipViews:false,
	top:0,
	left:50,
	right:50,
	height:200
});
var scrollView2 = Titanium.UI.createScrollableView({
	views:[iv3,iv4],
	showPagingControl:true,
	clipViews:false,
	bottom:0,
	left:50,
	right:50,
	height:200
});
win.add(scrollView);
win.add(scrollView2);

