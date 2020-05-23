// JAVASCRIPT START

(() => {
	console.log('JS is working.')

	let theIcons = document.querySelectorAll('.icon');

	function logID() {
		console.log("You have clicked on: " + this.id);
	}

	theIcons.forEach(icon => icon.addEventListener('click', logID));
})();