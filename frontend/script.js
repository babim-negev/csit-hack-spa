var button = document.getElementById('aut1')
var button1 = document.getElementById('in1')
var button2 = document.getElementById('person')
var voiti1 = document.getElementById('voiti1')
var voiti2 = document.getElementById('voiti2')
var buttt = document.querySelectorAll('#getCourse')

const rule = 'student';

voiti1.addEventListener('click', function () {
	var container = document.querySelector('.container1')
	if (container) {
		container.style.display = 'none'
	}
	var hz = document.getElementById('coursesContainer')
	if (hz) {
		hz.style.display = 'block'
	}

	var username = document.getElementById('username1').value
	var password = document.getElementById('password1').value

	// Создаем объект для данных, которые мы хотим отправить на сервер
	var data = {
		username: username,
		password: password,
	}

	// Отправляем POST-запрос на сервер
	fetch('http://localhost:8080/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then(response => {
			if (response.ok) {
				// Обрабатываем успешный ответ
				console.log('Успешно вошли в систему')
			} else {
				// Обрабатываем ошибку
				console.error('Ошибка входа:', response.statusText)
			}
		})
		.catch(error => {
			// Обрабатываем ошибку сети или другие ошибки
			console.error('Произошла ошибка:', error)
		})
})

voiti2.addEventListener('click', function () {
	
	var container = document.querySelector('.container1')
	if (container) {
		container.style.display = 'none'
	}

	var selectElement = document.getElementById('mySelect');
	var analyzeButton = document.getElementById('analyzeButton');

	var selectedOption = selectElement.options[selectElement.selectedIndex];
    
    // Access the value and text content of the selected option
    var selectedValue = selectedOption.value;

	if(selectedValue === 'option2')
	{
		role = 'prepod'
		buttt.forEach(function(element) {
			// Do something with each element
			element.style.display = 'none'
		});
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
	var myCoursesContainer = document.getElementById('myCoursesContainer')
	if (myCoursesContainer) {
		myCoursesContainer.style.display = 'none'
	}

	if(role === 'prepod')
	{
		buttt.forEach(function(element) {
			// Do something with each element
			element.style.display = 'block'
		});
	}
})

/*-----*/

var mycourses = document.getElementById('myCourses')
mycourses.addEventListener('click', function () {
	// Custom JavaScript code to execute when the button is clicked
	// You can perform any desired actions here
	var hz = document.getElementById('coursesContainer')
	hz.style.display = 'none'
	var myc = document.getElementById('myCoursesContainer')
	myc.style.display = 'block'
	var container1 = document.querySelector('.container1')
	container1.style.display = 'none'
})

var allcourses = document.getElementById('allCourses')
allcourses.addEventListener('click', function () {
	// Custom JavaScript code to execute when the button is clicked
	// You can perform any desired actions here
	var hz = document.getElementById('coursesContainer')
	hz.style.display = 'block'
	var myc = document.getElementById('myCoursesContainer')
	myc.style.display = 'none'
	var container1 = document.querySelector('.container1')
	container1.style.display = 'none'
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

var addToMyCoursesButtons = document.querySelectorAll('.add-to-my-courses')

// Добавляем обработчик события нажатия на каждую кнопку
addToMyCoursesButtons.forEach(function (button) {
	button.addEventListener('click', function () {
		// Находим родительский элемент курса, который содержит информацию о курсе
		var courseCard = this.closest('.course-card')

		// Создаем копию элемента курса
		var clonedCourse = courseCard.cloneNode(true)

		// Добавляем класс course-card к скопированному элементу курса
		clonedCourse.classList.add('course-card')

		// Находим контейнер "Мои курсы"
		var myCoursesContainer = document.getElementById('myCoursesContainer')

		// Добавляем скопированный курс в контейнер "Мои курсы"
		myCoursesContainer.appendChild(clonedCourse)

		// Устанавливаем атрибут disabled для кнопки
		this.disabled = true

		this.textContent = 'Вы уже записаны'

		var clonedButton = clonedCourse.querySelector('.add-to-my-courses')
		if (clonedButton) {
			clonedButton.remove()
		}

		var clonedPasswordInput = clonedCourse.querySelector('.password-input')
		if (clonedPasswordInput) {
			clonedPasswordInput.remove()
		}

		var leaveCourseButton = document.createElement('button')
		leaveCourseButton.textContent = 'Покинуть курс'
		leaveCourseButton.classList.add('leave-course-button')
		leaveCourseButton.addEventListener('click', function () {
			// Удаляем карточку курса из контейнера "Мои курсы"
			clonedCourse.remove()

			// Восстанавливаем активность кнопки "Записаться на курс"
			button.disabled = false
			button.textContent = 'Записаться на курс'
		})
		clonedCourse.querySelector('.course-links').appendChild(leaveCourseButton)
	})
})

var courseSearchForm = document.getElementById('courseSearchForm')
var courseSearchInput = document.getElementById('courseSearchInput')

// Добавляем обработчик события для формы поиска
courseSearchForm.addEventListener('submit', function (event) {
	// Предотвращаем отправку формы по умолчанию
	event.preventDefault()

	// Получаем введенный пользователем текст из поля ввода
	var searchText = courseSearchInput.value.toLowerCase().trim()

	// Находим все карточки курсов
	var courseCards = document.querySelectorAll('#coursesContainer .course-card')
	var mycourseCards = document.querySelectorAll('#myCoursesContainer .course-card')

	// Проходим по каждой карточке курса
	courseCards.forEach(function (courseCard) {
		// Находим элемент с названием курса в текущей карточке
		var courseTitle = courseCard.querySelector('h4 a')

		// Проверяем, содержит ли название курса введенный текст
		if (courseTitle.textContent.toLowerCase().includes(searchText)) {
			// Если содержит, показываем карточку курса
			courseCard.style.display = 'block'
		} else {
			// Если не содержит, скрываем карточку курса
			courseCard.style.display = 'none'
		}
	})
	mycourseCards.forEach(function (courseCard) {
		// Находим элемент с названием курса в текущей карточке
		var courseTitle = courseCard.querySelector('h4 a')

		// Проверяем, содержит ли название курса введенный текст
		if (courseTitle.textContent.toLowerCase().includes(searchText)) {
			// Если содержит, показываем карточку курса
			courseCard.style.display = 'block'
		} else {
			// Если не содержит, скрываем карточку курса
			courseCard.style.display = 'none'
		}
	})
})

document.addEventListener('DOMContentLoaded', function () {
	// Находим ссылку SkufCourse
	var skufCourseLink = document.querySelector('.navbar-brand')

	// Находим контейнер container1
	var container1 = document.querySelector('.container1')

	// Добавляем обработчик события для ссылки SkufCourse
	skufCourseLink.addEventListener('click', function (event) {
		// Предотвращаем переход по ссылке
		event.preventDefault()
		// Custom JavaScript code to execute when the button is clicked
		// You can perform any desired actions here
		var hz = document.getElementById('coursesContainer')
		hz.style.display = 'none'
		var myc = document.getElementById('myCoursesContainer')
		myc.style.display = 'none'

		// Переключаем отображение контейнера container1
		if (container1.style.display === 'none') {
			container1.style.display = 'block'
		}
	})
})


var username = document.getElementById('username1').value
var password = document.getElementById('password1').value

// Создаем объект для данных, которые мы хотим отправить на сервер
var data = {
	username: username,
	password: password,
}
