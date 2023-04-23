// Get the DOM elements for the sun, earth, and moon
var sun = document.getElementById('sun');
var earth = document.getElementById('earth');
var moon = document.getElementById('moon');

// Set up variables for the current rotation and orbit angles
var rotationAngle = 0;
var orbitAngle = 0;

// Set up a variable for the rotation speed
var rotationSpeed = 1;

// Set up an event listener for the mouse wheel to control zoom
window.addEventListener('wheel', function(event) {
	if (event.deltaY < 0) {
		// Zoom in
		earth.style.transform = 'scale(1.1)';
	} else {
		// Zoom out
		earth.style.transform = 'scale(0.9)';
	}
});

// Set up an event listener for the mouse click to display planet information
earth.addEventListener('click', function(event) {
	alert('Earth is the third planet from the sun and is the only known planet to support life.');
});

// Set up a function to update the rotation and orbit angles and apply them to the elements
function update() {
	rotationAngle += rotationSpeed;
	orbitAngle += 0.5;
	earth.style.transform = 'translate(-50%, -50%) rotate(' + rotationAngle + 'deg) translateX(200px) rotate(' + (-orbitAngle) + 'deg)';
	moon.style.transform = 'translate(-50%, -50%) rotate(' + rotationAngle + 'deg) translateX(50px) rotate(' + (-orbitAngle) + 'deg)';
	requestAnimationFrame(update);
}

// Call the update function to start the animation loop
update();
