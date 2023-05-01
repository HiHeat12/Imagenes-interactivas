function showText(text) {
	document.getElementById("text").innerHTML = text;
}

function showDescription(description) {
	document.getElementById("description").innerHTML = description;
}

function enlargeImage(src) {
	var enlargedImage = document.createElement("div");
	enlargedImage.setAttribute("class", "enlarged-image");

	var image = document.createElement("img");
	image.setAttribute("src", src);

	var closeButton = document.createElement("span");
	closeButton.setAttribute("class", "close-button");
	closeButton.innerHTML = "&times;";
	closeButton.onclick = function() {
		document.body.removeChild(enlargedImage);
	}

	enlargedImage.appendChild(image);
	enlargedImage.appendChild(closeButton);

	document.body.appendChild(enlargedImage);
}