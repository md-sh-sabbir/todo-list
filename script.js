window.onload = () => {
    const form = document.querySelector('#new-task-form')
    const input = document.querySelector('#new-task-input')
    const list_el = document.querySelector('#tasks')

    // Load tasks form localStorage
    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || []
        tasks.forEach(task => addTaskToList(task))
    }

    // Save tasks to localStorage
    const saveTasks = () => {
        const tasks = []
        document.querySelectorAll('.task .text').forEach(taskInput => {
            tasks.push(taskInput.value)
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    // Add a task to the task list
    const addTaskToList = (task) => {
        const task_el = document.createElement('div')
        task_el.classList.add('task')

        const task_content_el = document.createElement('div')
        task_content_el.classList.add('content')

        task_el.appendChild(task_content_el)

        const task_input_el = document.createElement('input')
        task_input_el.classList.add('text')
        task_input_el.type = 'text'
        task_input_el.value = task
        task_input_el.setAttribute('readonly', 'readonly')

        task_content_el.appendChild(task_input_el)

        const task_actions_el = document.createElement('div')
        task_actions_el.classList.add('actions')

        const task_edit_el = document.createElement('button')
        task_edit_el.classList.add('edit')
        task_edit_el.innerText = 'Edit'

        const task_delete_el = document.createElement('button')
        task_delete_el.classList.add('delete')
        task_delete_el.innerText = 'Delete'

        task_actions_el.appendChild(task_edit_el)
        task_actions_el.appendChild(task_delete_el)

        task_el.appendChild(task_actions_el)

        list_el.appendChild(task_el)

        // Edit task functionality
        task_edit_el.onclick = () => {
            if(task_edit_el.innerText.toLowerCase() == 'edit'){
                task_edit_el.innerText = 'Save'
                task_input_el.removeAttribute('readonly')
                task_input_el.focus()
            } else {
                task_edit_el.innerText = 'Edit'
                task_input_el.setAttribute('readonly', 'readonly')
                saveTasks()
            }
        }

        task_delete_el.onclick = () => {
            list_el.removeChild(task_el)
            saveTasks()
        }
    }

    // Add task form submit Handler
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const task = input.value.trim()
        if(task) {
            addTaskToList(task)
            saveTasks()
            input.value = ''
        }
    })

    // Load tasks on window load
    loadTasks()

}


    // IF YOU DON'T WANT TO SAVE THE PREVIOUS TASKS OR YOU DON'T STORE TASKS ON TO LOCAL STORAGE

    // Then paste this below code into this window.onload function and replace this code with the previous one

    // form.addEventListener('submit', (e) => {
    //     e.preventDefault()

    //     const task = input.value 

    //     const task_el = document.createElement('div')
    //     task_el.classList.add('task')

    //     const task_content_el = document.createElement('div')
    //     task_content_el.classList.add('content')

    //     task_el.appendChild(task_content_el)

    //     const task_input_el = document.createElement('input')
    //     task_input_el.classList.add('text')
    //     task_input_el.type = 'text'
    //     task_input_el.value = task
    //     task_input_el.setAttribute('readonly', 'readonly')

    //     task_content_el.appendChild(task_input_el)

    //     const task_actions_el = document.createElement('div')
    //     task_actions_el.classList.add('actions')

    //     const task_edit_el = document.createElement('button')
    //     task_edit_el.classList.add('edit')
    //     task_edit_el.innerText = 'Edit'

    //     const task_delete_el = document.createElement('button')
    //     task_delete_el.classList.add('delete')
    //     task_delete_el.innerText = 'Delete'

    //     task_actions_el.appendChild(task_edit_el)
    //     task_actions_el.appendChild(task_delete_el)

    //     task_el.appendChild(task_actions_el)

    //     list_el.appendChild(task_el)

    //     input.value = ''

    //     task_edit_el.onclick = (e) => {
    //         if(task_edit_el.innerText.toLowerCase() == 'edit'){
    //             task_edit_el.innerText = 'Save'
    //             task_input_el.removeAttribute('readonly')
    //             task_input_el.focus()
    //         } else {
    //             task_edit_el.innerText = 'Edit'
    //             task_input_el.setAttribute('readonly')
    //         }
    //     }

    //     task_delete_el.onclick = (e) => {
    //         list_el.removeChild(task_el)
    //     }
    // })