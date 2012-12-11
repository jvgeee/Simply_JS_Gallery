//Javascript Image Changer

var currentImage = document.getElementById("currentImage");

var imageArray = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];

var imageIndex= 0;

function changeImage(param){
	imageIndex += param;
	var max = imageArray.length;
	console.log(max);
	if (imageIndex >= max){
		imageIndex = 0;
	}else if(imageIndex < 0){
		imageIndex = max -1;
	}
	console.log(imageIndex);
	currentImage.setAttribute("src", imageArray[imageIndex]);
}

var controlLeft = document.getElementById("left");
var controlRight = document.getElementById("right");


controlLeft.onclick = function() { changeImage(-1); };
controlRight.onclick = function() { changeImage(1); };
