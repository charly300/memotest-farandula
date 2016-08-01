document.addEventListener("DOMContentLoaded", function() {
	var flipper = document.querySelectorAll(".flip-container");
	for(var i = 0, length = flipper.length; i < length; i++) {
		flipper[i].addEventListener('click', function(event) {
			this.classList.toggle("rotate");
		})
	}
});