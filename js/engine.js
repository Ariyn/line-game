var engine = function() {
	let characters = []
	let intervalId = null;
	let fps = -1;

	function addCharacter(character) {
		characters.push(character);
	}

	function loop() {
		for(index in characters) {
			let character = characters[index]
			character.animateNext()
		}
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
		for(index in characters) {
			let character = characters[index]
			character.init(_fps)
		}
	}

	return {
		"addCharacter": addCharacter,
		"run": run,
		"stop": stop,
		"init": init
	}
}
