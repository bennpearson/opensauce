var win = Titanium.UI.currentWindow;
win.backgroundImage = '../../images/chalkboard.png';
win.backgroundColor = '#000';
win.barColor = '#000';
win.titleImage = '../../images/text_ingredients.png';
win.barImage = '../../images/text_headbg.png';
   
    // create Window 2
var win1 = Titanium.UI.currentWindow;

var headerView = Ti.UI.createView({
    top: 0,
    height:0
});

var label = Ti.UI.createLabel({ 
   height: 100,
   width: 297,
   top: 25,
   backgroundImage: '../../images/ing_cod_potato.png'
});
var label2 = Ti.UI.createLabel({ 
   height: 100,
   width: 272,
   top: 175,
   backgroundImage: '../../images/ing_veg.png'
});
var label3 = Ti.UI.createLabel({ 
   height: 100,
   width: 184,
   top: 325,
   backgroundImage: '../../images/ing_gammon_pineapple.png'
});
var label4 = Ti.UI.createLabel({ 
   height: 100,
   width: 194,
   top: 475,
   backgroundImage: '../../images/ing_veg2.png'
});


var TheTable = Titanium.UI.createTableView({
    headerView:headerView,
    top: 0,
    backgroundColor:'transparent',
    style:Titanium.UI.iPhone.TableViewStyle.PLAIN
});

var CustomData = [
{ leftImage:'../../images/sample_dish.png', ingredientType:"Cod and Potato", twitterName:'1800', urlink:'cod_and_potato.js' },
{ leftImage:'../../images/sample_dish.png', ingredientType:"Winter Veg", twitterName:'1610', urlink:'cod_and_potato.js' },
{ leftImage:'../../images/sample_dish.png', ingredientType:"Gammon & Pineapple", twitterName:'1772', urlink:'cod_and_potato.js' },
{ leftImage:'../../images/sample_dish.png', ingredientType:"VegVeg", twitterName:'1772', urlink:'cod_and_potato.js' }
];

var data=[];

for (var i = CustomData.length - 1; i >= 0; i--){
    
    var row = Titanium.UI.createTableViewRow({
        selectedBackgroundColor: '#000',
        top:0,
        width:380,
        height:150
    });      

    var pattern =  Titanium.UI.createImageView({
        image: 'images/pattern-iphone.png',
        width: 140,
        height: 120,
        right: 51
    });
	row.add(pattern);
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
				title:'Cod and Potato',
			});
			Titanium.UI.currentTab.open(win1,{animated:true});
		}
	});
	//endEvent      
};
   
TheTable.setData(data);
headerView.add(label);
headerView.add(label2);
headerView.add(label3);
headerView.add(label4);
win1.add(TheTable);