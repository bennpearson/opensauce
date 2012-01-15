var win = Titanium.UI.currentWindow;
win.backgroundImage = '../../images/chalkboard.png';
win.backgroundColor = '#000';
win.barColor = '#000';
win.titleImage = '../../images/text_recipes.png';
win.barImage = '../../images/text_recipes.png';

var backbutton = Titanium.UI.createButton({
	title:'', 
	backgroundImage:'../../images/header_back.png',
	width:19,
	height:50,
	left:120,
	zIndex:1,
});
backbutton.addEventListener('click', function() {
	win.close();
});
win.leftNavButton = backbutton;
colored = true;
		
    // create Window 2
var win1 = Titanium.UI.currentWindow;

var headerView = Ti.UI.createView({
    top: 0,
    height:120
});

var label = Ti.UI.createLabel({ 
   height: 100,
   width: 297,
   top: 25,
   backgroundImage: '../../images/ing_cod_potato.png'
});

var TheTable = Titanium.UI.createTableView({
    headerView:headerView,
    top: 0,
    backgroundColor:'transparent',
    style:Titanium.UI.iPhone.TableViewStyle.PLAIN
});



var CustomData = [
{ leftImage:'../../images/video4.png', recipeName:"FISH PIE", twitterName:'Richard Grey', twitterText:'I like fish pie it is one of me favourites', urlink:'winter_fish_soup.js' },
{ leftImage:'../../images/video3.png', recipeName:"FISH CURRY", twitterName:'Paul Fry', twitterText:'If you want a fishy on your little dishy then sing for your fishy my littly lad', urlink:'winter_fish_soup.js' },
{ leftImage:'../../images/video2.png', recipeName:"FISH CASSEROLE", twitterName:'Ed Millington', twitterText:'Like a fish pie but in a different dish', urlink:'winter_fish_soup.js' },
{ leftImage:'../../images/video1.png', recipeName:"FISH & CHIPS", twitterName:'Robbert Gapper', twitterText:'Traditional fish and chips cooked at home', urlink:'winter_fish_soup.js' },
{ leftImage:'../../images/video.png', recipeName:"WINTER FISH SOUP", twitterName:'Benn Pearson', twitterText:'Clear winter fish soup and rye croutons', urlink:'winter_fish_soup.js' }
];

var data=[];

for (var i = CustomData.length - 1; i >= 0; i--){
    
    var row = Titanium.UI.createTableViewRow({
        selectedBackgroundColor: '#000',
        top:0,
        width:380,
        height:150
    });      
    var leftImage =  Titanium.UI.createView({
        backgroundImage:CustomData[i].leftImage,
        width: 98,
        height: 85,
        left:10,
    });
    var recipeName = Titanium.UI.createLabel({
        text:CustomData[i].recipeName,
        font:{fontFamily: 'Helvetica', fontSize:14, fontWeight:'bold'},
        width: 'auto',
        color: '#fff',
        textAlign: 'left',
        top: 22,
        left: 132,
        width: 137,
        height: 'auto'
    });
    var twitterText = Titanium.UI.createLabel({
        text:CustomData[i].twitterText,
        font:{fontFamily: 'Helvetica', fontSize:12},
        width: 'auto',
        color: '#eee',
        textAlign: 'left',
        top: 50,
        left: 132,
        width: 137,
        height: 'auto'
    });
    var twitterName =  Titanium.UI.createLabel({
        text:CustomData[i].twitterName,
        font:{fontFamily: 'Helvetica', fontSize:12, fontWeight:'bold'},
        width: 'auto',
        color: '#fff',
        textAlign: 'left',
        bottom: 22,
        left: 132,
        width: 137,
        height:'auto'
    });
    var pattern =  Titanium.UI.createImageView({
        image: '../../images/frame.png',
        width: 115,
        height: 105,
        left: 0
    });
    var btn =  Titanium.UI.createImageView({
        image: '../../images/header_next.png',
        width: 19,
        height: 50,
        right: 7
    });
    row.add(leftImage);
	row.add(recipeName);
	row.add(twitterText);
	row.add(twitterName);
	row.add(pattern);
	row.add(btn);
	row.className = 'building_row';
	//row.selectionStyle = Ti.UI.iPhone.TableViewCellSelectionStyle.NONE;
	
	row.urlink = CustomData[i].urlink;
	
    data.push(row);
    
    // create table view event listener
	row.addEventListener('click', function(e)
	{
		if (e.rowData.urlink)
		{
			Titanium.API.info("You clicked the button");
			var win1 = Titanium.UI.createWindow({
				url:e.rowData.urlink,
				title:'Fish and Chips',
			});
			Titanium.UI.currentTab.open(win1,{animated:true});
		}
	});
	//endEvent      
};
   
TheTable.setData(data);
headerView.add(label);
win1.add(TheTable);