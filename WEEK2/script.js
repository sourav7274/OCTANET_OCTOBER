const taskInput = document.getElementById('task');
const addButton = document.getElementById('add');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span class="task">${taskText}</span>
        <span class="delete">X</span>
    `;
    todoList.appendChild(listItem);

    taskInput.value = '';

    listItem.querySelector('.delete').addEventListener('click', function() {
        todoList.removeChild(listItem);
    });
});

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addButton.click();
    }
});
