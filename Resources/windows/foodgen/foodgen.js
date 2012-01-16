var win = Titanium.UI.currentWindow;
win.backgroundImage = '../../images/chalkboard.png';
win.backgroundColor = '#000';
win.barColor = '#000';
win.titleImage = '../../images/header_foodgen.png';
win.barImage = '../../images/header_foodgen.png';


var plus =  Titanium.UI.createImageView({
    image: '../../images/plus.png',
    width: 29,
    height: 31,
    top:130,
    zIndex:2,
});

var iv1 = Ti.UI.createImageView({image:'../../images/0.png',height:100, width:222});
var iv2 = Ti.UI.createImageView({image:'../../images/1.png',height:100, width:49});
var iv3 = Ti.UI.createImageView({image:'../../images/2.png',height:100, width:51});
var iv4 = Ti.UI.createImageView({image:'../../images/3.png',height:100, width:46});
var iv5 = Ti.UI.createImageView({image:'../../images/4.png',height:100, width:59});
var iv6 = Ti.UI.createImageView({image:'../../images/5.png',height:100, width:47});
var iv7 = Ti.UI.createImageView({image:'../../images/6.png',height:100, width:90});
var iv8 = Ti.UI.createImageView({image:'../../images/7.png',height:100, width:60});
var iv9 = Ti.UI.createImageView({image:'../../images/8.png',height:100, width:107});


var scrollView = Titanium.UI.createScrollableView({
	views:[iv7,iv1,iv9],
	showPagingControl:false,
	clipViews:false,
	top:30,
	height:100,
	width:222,
	currentPage:1
});
var scrollView2 = Titanium.UI.createScrollableView({
	views:[iv3,iv2,iv4,iv5,iv6,iv8],
	showPagingControl:false,
	clipViews:false,
	top:170,
	height:100,
	width:170,
	currentPage:1
});

var button =  Titanium.UI.createImageView({
    image: '../../images/feedme.png',
    width: 160,
    height: 42,
    left: 80,
    top: 300,
    zIndex:1,
});
// create table view event listener
button.addEventListener('click', function(e)
{
    var win = Titanium.UI.createWindow({
        url:'../ingredients/cod_and_potato.js',
    });
    Titanium.UI.currentTab.open(win,{animated:true});

});

win.add(button);
win.add(plus);
win.add(scrollView);
win.add(scrollView2);

