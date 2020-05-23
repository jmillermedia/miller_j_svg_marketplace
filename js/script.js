// JAVASCRIPT START

(() => {
	console.log('JS is working.')

	let theIcons = document.querySelectorAll('.icon');
	mainImage = document.querySelector(".iconSelection");

	function logID() {
		console.log("You have clicked on: " + this.id);
	}

	function switchImage() {
		// console.log('clicked a button')

		let currentImage = this.dataset.character + ".svg";
		
		mainImage.data = "images/" + currentImage;
	}

	theIcons.forEach(icon => icon.addEventListener('click', logID));
	theIcons.forEach(button => button.addEventListener('click', switchImage));

})();