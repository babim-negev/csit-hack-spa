var button = document.getElementById('aut1')
var button1 = document.getElementById('in1')
var button2 = document.getElementById('person')
var voiti1 = document.getElementById('voiti1')
var voiti2 = document.getElementById('voiti2')

voiti1.addEventListener('click', function () {
	var container = document.querySelector('.container1')
	if (container) {
		container.style.display = 'none'
	}
})

voiti2.addEventListener('click', function () {
	var container = document.querySelector('.container1')
	if (container) {
		container.style.display = 'none'
	}
})

function hideButton() {
	// Get a reference to the button element
	var button = document.getElementById('aut1')
	var button1 = document.getElementById('in1')
	var button2 = document.getElementById('person')

	// Hide the button by setting its display property to "none"
	button.style.display = 'none'
	button1.style.display = 'none'
	button2.style.display = 'block'
}

var button2 = document.getElementById('outButton')
button2.addEventListener('click', function () {
	// Custom JavaScript code to execute when the button is clicked
	// You can perform any desired actions here
	var hz = document.getElementById('coursesContainer')
	var button = document.getElementById('aut1')
	var button1 = document.getElementById('in1')
	var button3 = document.getElementById('person')
	// Hide the button by setting its display property to "none"
	button.style.display = 'block'
	button1.style.display = 'block'
	button3.style.display = 'none'
	hz.style.display = 'none'
	var container = document.querySelector('.container1')
	if (container) {
		container.style.display = 'block'
	}
})

/*-----*/

var mycourses = document.getElementById('myCourses')
mycourses.addEventListener('click', function () {
	// Custom JavaScript code to execute when the button is clicked
	// You can perform any desired actions here
	var hz = document.getElementById('coursesContainer')
	hz.style.display = 'none'
})

function outButton() {
	// Get a reference to the button element
	var button = document.getElementById('aut1')
	var button1 = document.getElementById('in1')
	var button2 = document.getElementById('person')
	// Hide the button by setting its display property to "none"
	button.style.display = 'block'
	button1.style.display = 'block'
	button2.style.display = 'none'
}

document.addEventListener('DOMContentLoaded', function () {
	var dropdownItem = document.querySelector('.dropdown-item')
	dropdownItem.addEventListener('click', function () {
		var container = document.querySelector('.container')
		container.style.display = 'block' // Показать содержимое
	})
})
