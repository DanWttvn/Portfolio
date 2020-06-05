

/* <---------- Cursor ----------> */
(function() {
	const cursor = document.querySelector("#cursor");
	hoverTargets = document.querySelectorAll(".hover-target");
	

	const setCursor = e => {
		const { clientX: x, clientY: y } = e;
		cursor.style.left = `${x}px`
		cursor.style.top = `${y}px`
	}
	
	const addHover = () => cursor.classList.add("hover")
	const removeHover = () => cursor.classList.remove("hover")
	
	window.addEventListener("mousemove", setCursor)
	hoverTargets.forEach(target => {
		target.addEventListener("mouseover", addHover)
		target.addEventListener("mouseout", removeHover)
	});
	
})();



/* <---------- Typed ----------> */

var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	typeSpeed: 60,
	backSpeed: 60,
	backDelay: 2e3,
	loop: true,
	shuffle: false,
	showCursor: false
});