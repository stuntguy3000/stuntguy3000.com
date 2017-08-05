var totalImages = 8;
var currentImage = 1;
var tid = setInterval(randomImage, 10000);

$(document).ready(function() {
    for (i = 1; i <= totalImages; i++) { 
		$("#img" + i).hide();
	}

	$("#img1").show();
});

function slideLeft() {
	clearInterval(tid);
	var nextImage = currentImage - 1;
	if (nextImage < 1) {
		nextImage = totalImages;
	}
	showImage(nextImage)
}

function slideRight() {
	clearInterval(tid);
	var nextImage = currentImage + 1;
	if (nextImage > totalImages) {
		nextImage = 1;
	}
	showImage(nextImage)
}

function showImage(imageID) {
	$("#img" + currentImage).fadeOut('slow');
	$("#img" + imageID).fadeIn('slow');
	
	currentImage = imageID;
}

function randomImage() {
	showImage(getRandomInt(1, totalImages));
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}