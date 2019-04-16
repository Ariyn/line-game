var sprite = function(target, offset, window) {
	let currentPosition = 0;
	let index = 0;
	let offsetX = offset.x;
	let offsetY = offset.y;
	let intervalId = null;
	let fps;

	currentPosition -= offsetX
	target.css("background-position-x", currentPosition);
	target.css("background-position-y", offsetY);

	function init(_fps) {
		fps = _fps;
	}

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
		"animateBefore": animateBefore,
		"init": init
	}
}

var character = function(_sprite) {
	let x = 0,
		  y = 0;

	let sprite = _sprite;

	function setSpeed(_x, _y) {
		x = _x;
		y = _y;
	}

	function init(_fps) {
		fps = _fps;
		sprite.init(_fps);
	}

	return {
		"setSpeed": setSpeed,
		"init": init,
		"animateNext": sprite.animateNext,
		"animateBefore": sprite.animateBefore
	}
}
