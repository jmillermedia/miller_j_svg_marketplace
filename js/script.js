// JAVASCRIPT START

(() => {
	console.log('JS is working.')

	let theIcons = document.querySelectorAll('.icon');
	//mainImage = document.querySelector(".iconSelection");

	function logID() {
		console.log("You have clicked on: " + this.id);
	}

	//function switchImage() {
		
	//	let currentImage = this.dataset.character + ".svg";
		
	//	mainImage.data = "images/" + currentImage;
	//}

	theIcons.forEach(icon => icon.addEventListener('click', logID));
	//theIcons.forEach(button => button.addEventListener('click', switchImage));

	// I wasn't able to get the selected portion working. I tried swapping out the object's data using the commented out code. I was able to interact with the object data in line 17, but ultimately I couldn't get line 15 working. JavaScript output on the object was 'data="images/undefined.svg""

})();