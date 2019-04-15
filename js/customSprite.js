var sprite = function(target, offset, window) {
	let currentPosition = 0;
	let index = 0;
	let offsetX = offset.x;
	let offsetY = offset.y;

	currentPosition -= offsetX
	target.css("background-position-x", currentPosition);
	target.css("background-position-y", offsetY);

	function animateNext() {
		currentPosition -= window[index];
		target.css("background-position-x", currentPosition)
		if(window.length <= index + 1) {
			currentPosition = -offsetX
			index = 0
		} else {
			index += 1
		}
	}

	function animateBefore() {
		if(index <= 0)
			return false;
		currentPosition += window[--index];
		target.css("background-position-x", currentPosition)
	}

	return {
		"animateNext": animateNext,
		"animateBefore": animateBefore
	}
}
