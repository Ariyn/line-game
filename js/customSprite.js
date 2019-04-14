var currentPosition = 0;
var index = 0;
let offsetX = 22
let offsetY = 0;
var size = [65, 65, 64, 63, 62, 61, 61, 61, 61, 61, 61, 61, 61, 62, 64, 65];

function initSprite() {
	currentPosition = -offsetX
	$(".frame").css("background-position-x", currentPosition);
	$(".frame").css("background-position-y", offsetY);
}
function animateScript() {
	console.log(currentPosition, index, size[index])
	currentPosition -= size[index];
	if(index + 1)
	$(".frame").css("background-position", currentPosition)
}

function animateNext() {
	console.log(currentPosition, index-1, size[index-1])
	currentPosition -= size[index];
	$(".frame").css("background-position-x", currentPosition)
	if(size.length <= index + 1) {
		currentPosition = -offsetX
		index = 0
	} else {
		index += 1
	}
}

function animateBefore() {
	if(index <= 0)
		return false;
	console.log(currentPosition, index-1, size[index-1])
	currentPosition += size[--index];
	$(".frame").css("background-position", currentPosition)
}
