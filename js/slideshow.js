var totalImages = 3;
var currentImage = 1;

$(document).ready(function() {
    for (i = 1; i <= totalImages; i++) { 
		$("#img" + i).hide();
	}

	$("#img1").show();
});

function slideLeft() {
	var nextImage = currentImage - 1;
	if (nextImage < 1) {
		nextImage = totalImages;
	}
	showImage(nextImage)
}

function slideRight() {
	var nextImage = currentImage + 1;
	if (nextImage > totalImages) {
		nextImage = 1;
	}
	showImage(nextImage)
}

function showImage(imageID) {
	$("#img" + imageID).fadeIn();
	$("#img" + currentImage).fadeOut();
	currentImage = imageID;
}