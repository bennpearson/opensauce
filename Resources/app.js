Titanium.UI.iPhone.setStatusBarStyle(Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK);

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({     
	url:'/windows/ingredients/ingredients.js',
    title:'INGREDIENTS',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Ingredients',
    window:win1
});



//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({    
	url:'/windows/foodgen/foodgen.js', 
    title:'FoodGen',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'FoodGen',
    window:win2
});



//
// create controls tab and root window
//
var win3 = Titanium.UI.createWindow({   
	url:'/windows/favourites/favourites.js', 
    title:'Favourites',
    backgroundColor:'#fff'
});
var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Favourites',
    window:win3
});



//
// create controls tab and root window
//
var win4 = Titanium.UI.createWindow({     
	url:'/windows/more/more.js', 
    title:'More',
    backgroundColor:'#fff'
});
var tab4 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'More',
    window:win4
});




//
//  add tabs
//

tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);
tabGroup.addTab(tab3); 
tabGroup.addTab(tab4);  


// open tab group
tabGroup.open();
