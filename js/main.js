
// window.onload = function() {
// 	// $('#preloader').fadeOut(400);
// }


(function() {
	
/* <---------- Cursor ----------> */
	const cursor = document.querySelector("#cursor");
	hoverTargets = document.querySelectorAll(".hover-target");
	

	const setCursor = e => {
		const { clientX: x, clientY: y } = e;
		cursor.style.left = `${x}px`
		cursor.style.top = `${y}px`
	}
	
	const addHover = () => cursor.classList.add("hover")
	const removeHover = () => cursor.classList.remove("hover")
	
	document.addEventListener("mousemove", setCursor)
	hoverTargets.forEach(target => {
		target.addEventListener("mouseover", addHover)
		target.addEventListener("mouseout", removeHover)
	});


/* <---------- Navbar ----------> */
const scrollNavbar = new SmoothScroll('.navbar a[href*="#"]', {
	speed: 300 // a menos mas
});

/* Change Active on Scroll */ 
const sectionsArray = document.querySelectorAll("body > section");

/* Get position of each sections */ 
let sectionsPos = {};

getSectionsPos();
document.addEventListener('resize', getSectionsPos);
function getSectionsPos() {
	sectionsArray.forEach(section => {
		sectionsPos[section.id] = section.offsetTop; // distancia respecto al parent posicionado (body)
	})
}

window.addEventListener('scroll', function() {
	let scrollPos = document.documentElement.scrollTop  || document.body.scrollTop;
	
	for(id in sectionsPos) {	
		const offset = 500
		if(sectionsPos[id] - offset <= scrollPos) {
			document.querySelector(".navbar .active").classList.remove("active")
			document.querySelector(`.navbar a[href*=${id}]`).classList.add("active")
		}
	}
})


/* <---------- Scroll Reveal ----------> */	
window.sr = ScrollReveal();
sr.reveal(".showcase-bottom", {
	duration: 2000,
	origin: "bottom",
	distance: "10px"
});
sr.reveal(".info-right", {
	// delay: 2000, // desde que llego con el scroll
	// viewFactor: 0.2 // cuando vemos el 2% del elemento, hace el efecto
});

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


/* <---------- Projects Showcase ----------> */
let sliderIndex = 0;
const projectsWrapper = document.querySelector(".projects-wrapper")
const numProjects = document.querySelectorAll(".project").length

const controlPrev = document.querySelector(".control-prev");
const controlNext = document.querySelector(".control-next");

controlPrev.addEventListener("click", () => switchEvent("prev"))
controlNext.addEventListener("click", () => switchEvent("next"))

const currentWrapper = document.querySelector(".timeline .indicator .current-wrapper")
const totalProjects = document.querySelector(".timeline .indicator .out-of")

// Create indicator
totalProjects.innerText = `/ 0${numProjects}`
for (let i = 0; i < numProjects; i++) {
	const text = document.createElement("p")
	text.innerText = `0${i+1}`
	currentWrapper.appendChild(text)
}

// Switch Event
function switchEvent(dir) {
	
	if(dir === "next" && sliderIndex === numProjects - 1) { sliderIndex = 0 } 
	else if (dir === "prev" && sliderIndex === 0) { sliderIndex = 0 } 
	else if (dir === "next") { sliderIndex++ } 
	else { sliderIndex-- }

	projectsWrapper.style.transform = "translateX(" + -sliderIndex + "00%)";
	currentWrapper.style.transform = "translateY(" + -sliderIndex/numProjects * 100 + "%)";
}

})();
