/*
var httpClient = Ti.Network.createHTTPClient({
	onload:  function(e){
		var result = JSON.parse(this.responseText);

		for (var i =0; i < result.response.photos.length ;i++){
			var label = Ti.UI.createLabel({
				text: result.response.photos[i].id,
				width: Ti.UI.SIZE,
				height: Ti.UI.SIZE,
				top: 0,
				color: 'black',
			});

			var image = Ti.UI.createImageView({
				image: result.response.photos[i].urls.original,
				width: '300px',
				height: '300px'
			});
			
			$.index.add(image);
			$.index.add(label);
		}
		alert(JSON.stringify(result));
		Ti.API.info(JSON.stringify(result));
	},
	onerror: function(e){
		alert('Error'+ e.error);
	},
	timeout: 5000,
});

httpClient.open('GET', 'https://api.cloud.appcelerator.com/v1/photos/query.json?key=39CfszDc4IxFppvqRyykQDgVPyuPhed2&pretty_json=true&count=true');
httpClient.send();

*/

var buton = Ti.UI.createButton({
	title: 'main',
	bottom: 10,
	width: '85%',
	height: '10%',
	color: 'black'
});

buton.addEventListener('click', function(e){
	var main = Alloy.createController('main').getView();
	main.open();
	var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'emptyfile.txt');
	f.write('The file is no longer empty!');

});
$.index.add(buton);

var buton2 = Ti.UI.createButton({
	title: 'spotify',
	bottom: 10,
	right: 10,

});
$index.add(buton2);

buton2.addEventListener('click', function(e){
	var spotify = Alloy.createController('spotify').getView();
	spotify.open();
});

$.index.open();
