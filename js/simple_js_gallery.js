//Javascript Image Changer
function simple_js_gallery(element, array){

	var selectedElement = document.getElementById(element);

	var currentImage = selectedElement.getElementsByTagName("img")[0];

	var imageIndex= 0;

	function changeImage(param){
		imageIndex += param;
		var max = imageArray.length;
		if (imageIndex >= max){
			imageIndex = 0;
		}else if(imageIndex < 0){
			imageIndex = max -1;
		}
		currentImage.setAttribute("src", imageArray[imageIndex]);
	}

	var controlLeft = document.getElementById("left");
	var controlRight = document.getElementById("right");


	controlLeft.onclick = function() { changeImage(-1); };
	controlRight.onclick = function() { changeImage(1); };
};