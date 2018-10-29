// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var btn =  Ti.UI.createButton({
	title: 'main',
	bottom: '10%',
	width: '85%',
	height: '10%',
	color: 'black'
});

var imageView = Titanium.UI.createImageView({
    height: 200,
    width: 200,
    top: 20,
    left: 10,
    backgroundColor: '#999'
});

btn.addEventListener('click', function(e){
    Titanium.Media.openPhotoGallery({

        success: function (event) {
            var cropRect = event.cropRect;
            var image = event.media;//blob object
    
            // set image view
            Ti.API.debug('Our type was: ' + event.mediaType);
            if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                var image = event.media;
                imageView.image = image;// this works
                //var imgStr = Ti.Utils.base64encode(image);// doesn't work because 'image' has to be a string!, but how?
                var imgStr = Ti.Utils.base64encode(image).toString();
                alert(imgStr);
            }
            else {
    
            }
    
            Titanium.API.info('PHOTO GALLERY SUCCESS cropRect.x ' + cropRect.x + ' cropRect.y ' + cropRect.y + ' cropRect.height ' + cropRect.height + ' cropRect.width ' + cropRect.width);
    
        },
        allowEditing: true,
        //popoverView: popoverView,
        //arrowDirection: arrowDirection,
        mediaTypes: [Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO]
    });
});

$.viewInfo.add(imageView);
$.viewInfo.add(btn);
