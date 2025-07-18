console.log('Lista de Tareas');

// Lista de Tareas


    const tarea = document.getElementById('taskInput');
    const agregar = document.getElementById('agregar');
    const listaTareas = document.getElementById('taskList');

    console.log('hola');

    agregar.addEventListener('click', () => {

        let nuevaTarea = tarea.value;

        if (nuevaTarea === '') {
            alert('Escriba una tarea');
            return;
        }

        let li = document.createElement('li');

        li.textContent = nuevaTarea;

        listaTareas.appendChild(li);

        tarea.value = '';
    });


