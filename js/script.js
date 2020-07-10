// JAVASCRIPT START

(() => {
	// console.log('JS is working.')

	let theIcons = document.querySelectorAll('.icon');
	//mainImage = document.querySelector(".iconSelection");

	function logID() {

	theIcons.forEach(icon => icon.addEventListener('click', logID));
	}
	
	let emailDrop = document.querySelectorAll('.emailButton'),
	emailButton = document.querySelectorAll('.emailDropdown'),
	imageSelect = document.querySelectorAll('.icoSelect'),
	imageButton = document.querySelectorAll('.collectionButton');


	function dropUp() {
		imageSelect[0].classList.toggle('show');
	}


	function dropDown() {
		emailButton[0].classList.toggle('show');
		emailDrop[0].getElementsByTagName('img').classList.toggle('.animateEmail')
}

	emailDrop.forEach(drop => drop.addEventListener('click', dropDown));

	imageButton.forEach(select => select.addEventListener('click', dropUp));


	console.log(imageSelect);

})();