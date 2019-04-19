var sprite = function(target, offset, window) {
	let currentPosition = 0;
	let index = 0;
	let offsetX = offset.x;
	let offsetY = offset.y;
	let intervalId = null;
	let fps;
	let element = target;

	currentPosition -= offsetX
	element.css("background-position-x", currentPosition);
	element.css("background-position-y", offsetY);

	function init(_fps) {
		fps = _fps;
	}

	function animateNext() {
		currentPosition -= window[index];
		element.css("background-position-x", currentPosition)
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
		element.css("background-position-x", currentPosition)
	}

	function setElementLocation(x, y) {
		element.css("left", x);
		element.css("top", y);
	}

	return {
		"animateNext": animateNext,
		"animateBefore": animateBefore,
		"init": init,
		"setElementLocation": setElementLocation
	}
}

var Character = function(_sprite) {
	let speed = [0, 0],
			location = [0, 0];

	let sprite = _sprite;

	function setSpeed(x, y) {
		speed[0] = x;
		speed[1] = y;
	}

	function setLocation(x, y) {
		location[0] = x;
		location[1] = y;
	}

	function getLocation() {
		return location
	}

	function setElementLocation(x, y) {
		sprite.setElementLocation(x, y);
	}

	function move() {
		location[0] += speed[0]
		location[1] += speed[1]
	}

	function init(_fps) {
		fps = _fps;
		sprite.init(_fps);
	}

	return {
		"setSpeed": setSpeed,
		"init": init,
		"animateNext": sprite.animateNext,
		"animateBefore": sprite.animateBefore,
		"setLocation": setLocation,
		"getLocation": getLocation,
		"setElementLocation": setElementLocation,
		"move": move
	}
}
