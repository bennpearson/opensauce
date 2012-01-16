var win = Titanium.UI.currentWindow;
win.backgroundImage = '../../images/chalkboard.png';
win.backgroundColor = '#000';
win.barColor = '#000';
win.titleImage = '../../images/text_wintersoup.png';
win.barImage = '../../images/text_wintersoup.png';


var data = [
{ title: 'Settings', color:'#eee' },
{ title: 'Help', color:'#eee' }
];

var tableView = Titanium.UI.createTableView({
	data:data, 
	style:Titanium.UI.iPhone.TableViewStyle.PLAIN,
    backgroundColor:'transparent',
    font:{fontFamily: 'Helvetica', fontSize:14, fontWeight:'bold'},
    color: '#fff',
});

win.add(tableView);
