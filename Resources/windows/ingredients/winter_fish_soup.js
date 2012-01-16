var win = Titanium.UI.currentWindow;
win.backgroundImage = '../../images/chalkboard.png';
win.backgroundColor = '#000';
win.barColor = '#000';
win.titleImage = '../../images/text_wintersoup.png';
win.barImage = '../../images/text_wintersoup.png';

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

var scrollViewer = Titanium.UI.createScrollView({
	contentWidth:'auto',
	contentHeight:'auto',
	top:0,
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:true
});

var leftImage =  Titanium.UI.createView({
    backgroundImage:'../../images/video.png',
    width: 98,
    height: 85,
    left:10,
    top:30,
});

var recipeName = Titanium.UI.createLabel({
    text:'Winter Fish Soup',
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
    text:'Clear winter fish soup and rye croutons',
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
    text:'Benn Pearson',
    font:{fontFamily: 'Helvetica', fontSize:12, fontWeight:'bold'},
    width: 'auto',
    color: '#fff',
    textAlign: 'left',
    top: 102,
    left: 132,
    width: 137,
    height:'auto'
});

var pattern =  Titanium.UI.createImageView({
    image: '../../images/frame.png',
    width: 115,
    height: 105,
    left: 0,
    top:20,
});

var recipe = Titanium.UI.createLabel({
    text:'Serves four\n500 g Stockmann Delicatessen fish-shrimp mixture\n500 g Vegetables (potato, marrow, turnip, radish, parsnip)\n2 Cloves of garlic\n2 tbsp Olive oil\n1.5 ℓ Fish stock (low salt)\nSaffron\nSalt and pepper\nCroutons\n4 slices of rye bread\n\n\nBrown the sliced vegetables and chopped garlic in a dash of olive oil. Add the fish stock and saffron. Cook the vegetables until they are almost done. Add the mixture of fish and shrimp. Bring the soup to a boil. Pour the soup into separate plates for serving.\n\nToast the slices of rye bread in a toaster. Cut the toasted bread into cubes, and sprinkle them over the fish soup.',
    font:{fontFamily: 'Helvetica', fontSize:12},
    width: 'auto',
    color: '#eee',
    textAlign: 'left',
    top: 300,
    left: 16,
    width: 280,
    height: 'auto'
});


var ingList =  Titanium.UI.createImageView({
    image: '../../images/text_ingredient_list.png',
    width: 320,
    height: 152,
    left: 0,
    top:140,
});

scrollViewer.add(recipeName);
scrollViewer.add(twitterText);
scrollViewer.add(twitterName);
scrollViewer.add(leftImage);
scrollViewer.add(pattern);
scrollViewer.add(recipe);
scrollViewer.add(ingList);
win.add(scrollViewer);

		