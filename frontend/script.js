var button = document.getElementById('aut1')
var button1 = document.getElementById('in1')
var button2 = document.getElementById('person')




function hideButton() {
	// Get a reference to the button element
	var button = document.getElementById('aut1')
	var button1 = document.getElementById('in1')
	var button2 = document.getElementById('person')

	// Hide the button by setting its display property to "none"
	button.style.display = 'none'
	button1.style.display = 'none'
	button2.style.display = 'block'

	var hz = document.getElementById('courses')
	var button12 = document.getElementById('courses1')
	var button121 = document.getElementById('conter')
	button12.style.display = 'block'
	hz.style.display = 'block'
	button121.style.display = 'block'
}

var button2 = document.getElementById('outButton')
button2.addEventListener('click', function () {
		// Get a reference to the button element
		var button = document.getElementById('aut1')
		var button1 = document.getElementById('in1')
		var button2 = document.getElementById('person')
		// Hide the button by setting its display property to "none"
		button.style.display = 'block'
		button1.style.display = 'block'
		button2.style.display = 'none'
	
		var hz = document.getElementById('courses')
		var button12 = document.getElementById('courses1')
		var button121 = document.getElementById('conter')
		button12.style.display = 'none'
		hz.style.display = 'none'
		button121.style.display = 'none'
})




//-----------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
	// список все курсы
	const taskList = document.getElementById('taskList')

	// кнопка создать!!! курс! а не добавить
	const addTaskBtn = document.getElementById('addTaskBtn')

	// Получаем список добавленных курсов
	const completedTaskList = document.getElementById('completedTaskList')

	// Функция для перемещения задачи в список добавленных курсов
	function moveTaskToCompletedList(li) {
		//li.querySelector('.task-checkbox').disabled = true // Делаем чекбокс недоступным для изменений
		completedTaskList.appendChild(li) // Перемещаем задачу в список выполненных задач
		saveCompletedTasksToLocalStorage()
	}
	//

	// Функция для добавления задачи в список
	function addTask(subjectText, teacherText, groupText, passwordText) {
		const li = document.createElement('li')
		li.innerHTML = `
	            <span class="subject-text">${subjectText}</span>

	            <span class="teacher-text">${teacherText}</span>

                <span class="group-text">${groupText}</span>

                <span class="password-text">${passwordText}</span>

	            <input type="checkbox" class="task-checkbox">

	            <button class="edit-btn">Редактировать</button>

	            <button class="delete-btn">Удалить</button>
	        `
		taskList.appendChild(li)
		saveTasksToLocalStorage() // Сохраняем задачи в локальном хранилище после создания нового курса
	}

	// Функция для добавления задачи в список
	function addCompletedTask(subjectText, teacherText, groupText, passwordText) {
		const li = document.createElement('li')
				li.innerHTML = `
				<span class="subject-text">${subjectText}</span>

				<span class="teacher-text">${teacherText}</span>

				<span class="group-text">${groupText}</span>

				<span class="password-text">${passwordText}</span>

				<input type="checkbox" class="task-checkbox">

				<button class="edit-btn">Редактировать</button>

				<button class="delete-btn">Удалить</button>
	        `
		addCompletedTask.appendChild(li)
		saveCompletedTasksToLocalStorage() // Сохраняем задачи в локальном хранилище после создания нового курса
	}

	// Функция для сохранения задач в локальном хранилище
	function saveTasksToLocalStorage() {
		const tasks = []
		const taskElements = taskList.querySelectorAll('li')
		
		taskElements.forEach(function (taskElement) {

			const subjectText = taskElement.querySelector('.subject-text').textContent
			const teacherText = taskElement.querySelector('.teacher-text').textContent
			const groupText = taskElement.querySelector('.group-text').textContent
			const passwordText = taskElement.querySelector('.password-text').textContent

			const task = {
				subject: subjectText,
				teacher: teacherText,
				group: groupText,
				password: passwordText,
			}

			tasks.push(task)
		})
		localStorage.setItem('tasks', JSON.stringify(tasks))

		// // те, что выполнены - также добавим в локальное хранилище
		// const completed_tasks = []
		// const completed_taskElements = completedTaskList.querySelectorAll('li')
		// completed_taskElements.forEach(function (taskElement) {
		// 	const taskText = taskElement.querySelector('.task-text').textContent
		// 	const categoryText =
		// 		taskElement.querySelector('.category-text').textContent
		// 	const dateTimeText =
		// 		taskElement.querySelector('.date-time-text').textContent
		// 	const task = {
		// 		text: taskText,
		// 		category: categoryText,
		// 		dateTime: dateTimeText,
		// 	}
		// 	completed_tasks.push(task)
		// })
		// localStorage.setItem('completed_tasks', JSON.stringify(completed_tasks))
	}

	// Функция для сохранения состояния выполненных задач в локальном хранилище
	function saveCompletedTasksToLocalStorage() {
		const completedTasksList = document.getElementById('completedTasks')
		const completedTasks = completedTasksList.innerHTML // Получаем HTML содержимое списка выполненных задач
		localStorage.setItem('completedTasks', completedTasks) // Сохраняем в локальное хранилище
	}

	// Функция для загрузки задач из локального хранилища
	function loadTasksFromLocalStorage() {
		const tasks = JSON.parse(localStorage.getItem('tasks')) || []
		tasks.forEach(function (task) {
			addTask(task.subject, task.teacher, task.group, task.password)
		})

		const completed_tasks = JSON.parse(localStorage.getItem('completed_tasks')) || []

		completed_tasks.forEach(function (task) {
			addCompletedTask(task.subject, task.teacher, task.group, task.password)
		})
	}

	// Загружаем задачи из локального хранилища при загрузке страницы
	loadTasksFromLocalStorage()

	// Функция для загрузки сохраненных выполненных задач из локального хранилища
	function loadCompletedTasks() {
		const completedTasksList = document.getElementById('completedTasks')
		const completedTasks = localStorage.getItem('completedTasks') // Получаем HTML содержимое из локального хранилища
		if (completedTasks) {
			completedTasksList.innerHTML = completedTasks // Восстанавливаем сохраненные выполненные задачи
		}
	}

	loadCompletedTasks()

	// Обработчик клика по кнопке "Добавить задачу"
	addTaskBtn.addEventListener('click', function () {

		const subjectInput = document.getElementById('subjectInput')
		const subjectText = subjectInput.value.trim()

		const teacherInput = document.getElementById('teacherInput')
		const teacherText = teacherInput.value.trim()

		const groupInput = document.getElementById('groupInput')
		const groupText = groupInput.value.trim()

		const passwordInput = document.getElementById('passwordInput')
		const passwordText = passwordInput.value.trim()

		//добавь остальные !== '' если  - обязательное
		if (subjectText !== '' && teacherText !== '') {
			addTask(subjectText, teacherText, groupText, passwordText)
			
			subjectInput.value = ''
			teacherInput.value =''
			groupInput.value = ''
			passwordInput.value =''
		}
	})

	// Обработчик клика по кнопке "Редактировать"
	taskList.addEventListener('click', function (e) {
		if (e.target && e.target.classList.contains('edit-btn')) {
			const taskTextElement = e.target.parentNode.querySelector('.task-text')
			const categoryTextElement = e.target.parentNode.querySelector('.category-text')
			const dateTimeTextElement = e.target.parentNode.querySelector('.date-time-text')
			const newTaskText = prompt('Введите новый текст задачи:', taskTextElement.textContent)
			const newCategoryText = prompt('Введите новую категорию:', categoryTextElement.textContent)
			const newDateTimeText = prompt('Введите новую дату и время:', dateTimeTextElement.textContent)
			if (newTaskText !== null && newCategoryText !== null && newDateTimeText !== null) {
				taskTextElement.textContent = newTaskText
				categoryTextElement.textContent = newCategoryText
				dateTimeTextElement.textContent = newDateTimeText
				saveTasksToLocalStorage() // Сохраняем задачи в локальном хранилище после редактирования
			}
		}
	})

	// Обработчик клика по кнопке "Удалить"
	taskList.addEventListener('click', function (e) {
		if (e.target && e.target.classList.contains('delete-btn')) {
			const li = e.target.parentNode
			li.remove()
			saveTasksToLocalStorage() // Сохраняем задачи в локальном хранилище после удаления
		}
	})

	// Обработчик изменения состояния чекбокса
	taskList.addEventListener('change', function (e) {
		if (e.target && e.target.classList.contains('task-checkbox')) {
			const li = e.target.parentNode
			if (e.target.checked) {
				moveTaskToCompletedList(li) // Перемещаем задачу в список выполненных задач
			}
		}
	})

	//Обработчик изменения состояния чекбокса в списке выполненных задач
	completedTaskList.addEventListener('change', function (e) {
		if (e.target && e.target.classList.contains('task-checkbox')) {
			const li = e.target.parentNode
			if (!e.target.checked) {
				//li.querySelector('.task-checkbox').disabled = false // Делаем чекбокс доступным для изменений
				taskList.appendChild(li) // Перемещаем задачу обратно в основной список
			}
		}
	})
})

//-------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function () {
// 	const taskList = document.getElementById('taskList')
// 	const completedTaskList = document.getElementById('completedTaskList') // Получаем список выполненных задач

// 	// Функция для добавления задачи в список
// 	function addTask(taskText, categoryText, dateTimeText) {
// 		const li = document.createElement('li')
// 		li.innerHTML = `
//             <span class="task-text">${taskText}</span>
//             <span class="category-text">${categoryText}</span>
//             <span class="date-time-text">${dateTimeText}</span>
//             <input type="checkbox" class="task-checkbox">
//             <button class="edit-btn">Редактировать</button>
//             <button class="delete-btn">Удалить</button>
//         `
// 		taskList.appendChild(li)
// 	}

// 	// Функция для перемещения задачи в список выполненных задач
// 	function moveTaskToCompletedList(li) {
// 		li.querySelector('.task-checkbox').disabled = true // Делаем чекбокс недоступным для изменений
// 		completedTaskList.appendChild(li) // Перемещаем задачу в список выполненных задач
// 	}

// 	// Обработчик клика по кнопке "Добавить задачу"
// 	document
// 		.getElementById('addTaskBtn')
// 		.addEventListener('click', function () {
// 			const taskInput = document.getElementById('taskInput')
// 			const taskText = taskInput.value.trim()
// 			const categoryInput = document.getElementById('categoryInput')
// 			const categoryText = categoryInput.value.trim()
// 			const dateTimeInput = document.getElementById('dateTimeInput')
// 			const dateTimeText = dateTimeInput.value
// 			if (taskText !== '' && categoryText !== '' && dateTimeText !== '') {
// 				addTask(taskText, categoryText, dateTimeText)
// 				taskInput.value = ''
// 				categoryInput.value = ''
// 				dateTimeInput.value = ''
// 			}
// 		})

// 	// Обработчик клика по кнопке "Редактировать"
// 	taskList.addEventListener('click', function (e) {
// 		if (e.target && e.target.classList.contains('edit-btn')) {
// 			const taskTextElement =
// 				e.target.parentNode.querySelector('.task-text')
// 			const categoryTextElement =
// 				e.target.parentNode.querySelector('.category-text')
// 			const dateTimeTextElement =
// 				e.target.parentNode.querySelector('.date-time-text')
// 			const newTaskText = prompt(
// 				'Введите новый текст задачи:',
// 				taskTextElement.textContent
// 			)
// 			const newCategoryText = prompt(
// 				'Введите новую категорию:',
// 				categoryTextElement.textContent
// 			)
// 			const newDateTimeText = prompt(
// 				'Введите новую дату и время:',
// 				dateTimeTextElement.textContent
// 			)
// 			if (
// 				newTaskText !== null &&
// 				newCategoryText !== null &&
// 				newDateTimeText !== null
// 			) {
// 				taskTextElement.textContent = newTaskText
// 				categoryTextElement.textContent = newCategoryText
// 				dateTimeTextElement.textContent = newDateTimeText
// 			}
// 		}
// 	})

// 	// Обработчик клика по кнопке "Удалить"
// 	taskList.addEventListener('click', function (e) {
// 		if (e.target && e.target.classList.contains('delete-btn')) {
// 			const li = e.target.parentNode
// 			li.remove()
// 		}
// 	})

// 	// Обработчик изменения состояния чекбокса
// 	taskList.addEventListener('change', function (e) {
// 		if (e.target && e.target.classList.contains('task-checkbox')) {
// 			const li = e.target.parentNode
// 			if (e.target.checked) {
// 				moveTaskToCompletedList(li) // Перемещаем задачу в список выполненных задач
// 			}
// 		}
// 	})

// 	// Обработчик изменения состояния чекбокса в списке выполненных задач
// 	completedTaskList.addEventListener('change', function (e) {
// 		if (e.target && e.target.classList.contains('task-checkbox')) {
// 			const li = e.target.parentNode
// 			if (!e.target.checked) {
// 				li.querySelector('.task-checkbox').disabled = false // Делаем чекбокс доступным для изменений
// 				taskList.appendChild(li) // Перемещаем задачу обратно в основной список
// 			}
// 		}
// 	})
// })

// -------------------------------------------------------------------------
// Выбор категории (матрица эйзенхауэра)

// document.addEventListener('DOMContentLoaded', function () {
// 	const importantUrgentTasksList = document.getElementById(
// 		'importantUrgentTasks'
// 	)
// 	const importantNotUrgentTasksList = document.getElementById(
// 		'importantNotUrgentTasks'
// 	)
// 	const notImportantUrgentTasksList = document.getElementById(
// 		'notImportantUrgentTasks'
// 	)
// 	const notImportantNotUrgentTasksList = document.getElementById(
// 		'notImportantNotUrgentTasks'
// 	)

// 	// Функция для добавления задачи в соответствующий список
// 	function addTaskToList(taskText, categoryText, dateTimeText, list) {
// 		const li = document.createElement('li')
// 		li.innerHTML = `
//             <span class="task-text">${taskText}</span>
//             <span class="category-text">${categoryText}</span>
//             <span class="date-time-text">${dateTimeText}</span>
//         `
// 		list.appendChild(li)
// 	}

// 	// Обработчик клика по кнопке "Добавить задачу"
// 	document
// 		.getElementById('addTaskBtn')
// 		.addEventListener('click', function () {
// 			const taskInput = document.getElementById('taskInput')
// 			const taskText = taskInput.value.trim()
// 			const categoryInput = document.getElementById('categoryInput')
// 			const categoryText = categoryInput.value.trim()
// 			const dateTimeInput = document.getElementById('dateTimeInput')
// 			const dateTimeText = dateTimeInput.value
// 			if (taskText !== '' && categoryText !== '' && dateTimeText !== '') {
// 				// В зависимости от выбранной категории задачи добавляем её в соответствующий список
// 				if (categoryText.toLowerCase() === 'do') {
// 					addTaskToList(
// 						taskText,
// 						categoryText,
// 						dateTimeText,
// 						importantUrgentTasksList
// 					)
// 				} else if (categoryText.toLowerCase() === 'decide') {
// 					addTaskToList(
// 						taskText,
// 						categoryText,
// 						dateTimeText,
// 						importantNotUrgentTasksList
// 					)
// 				} else if (categoryText.toLowerCase() === 'delegate') {
// 					addTaskToList(
// 						taskText,
// 						categoryText,
// 						dateTimeText,
// 						notImportantUrgentTasksList
// 					)
// 				} else if (categoryText.toLowerCase() === 'delete') {
// 					addTaskToList(
// 						taskText,
// 						categoryText,
// 						dateTimeText,
// 						notImportantNotUrgentTasksList
// 					)
// 				} else {
// 					alert('Некорректная категория задачи!')
// 				}
// 				taskInput.value = ''
// 				categoryInput.value = ''
// 				dateTimeInput.value = ''
// 			}
// 		})
// })
