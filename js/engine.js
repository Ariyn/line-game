var engine = function() {
	let characters = []
	let intervalId = null;
	let fps = -1;

	// location = location in game world
	// offset   = location in web browser
	let windowLocation = [0, 0],
			windowOffset   = [0, 0],
			windowPixelRatio = 30,
			windowSpeed = [0, 0],
			window = null;

	function setWindow(element) {
		window = element;
	}

	function setWindowSpeed(x, y) {
		windowSpeed[0] = x;
		windowSpeed[1] = y;
	}

	function addCharacter(character) {
		characters.push(character);
	}

	function reLocationCharacters() {
		for(let index in characters) {
			let character = characters[index];
			let location = character.getLocation();

			let relativeLocation = [
				(windowLocation[0] - location[0]) * windowPixelRatio,
				(windowLocation[1] - location[1]) * windowPixelRatio
			];
			character.setElementLocation(
				windowOffset[0] - relativeLocation[0],
				windowOffset[1] - relativeLocation[1]
			);
		}
	}

	function moveWindow() {
		windowLocation[0] += windowSpeed[0];
		windowLocation[1] += windowSpeed[1];
	}

	function loop() {
		for(index in characters) {
			let character = characters[index]
			character.animateNext()
			character.move()
		}
		moveWindow()
		reLocationCharacters()
	}

	function run() {
		if(intervalId == null) {
			intervalId = setInterval(loop, 1000/fps);
		}
	}
	function stop() {
		if(intervalId) {
			clearInterval(intervalId);
			intervalId = null;
		}
	}

	function init(_fps) {
		fps = _fps;
		window.css("left", windowOffset[0])
		window.css("top", windowOffset[1])

		for(index in characters) {
			let character = characters[index]
			character.init(_fps)
		}
		reLocationCharacters()
	}

	return {
		"addCharacter": addCharacter,
		"run": run,
		"stop": stop,
		"init": init,
		"setWindow": setWindow,
		"setWindowSpeed": setWindowSpeed
	}
}
