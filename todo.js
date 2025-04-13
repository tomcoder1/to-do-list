let todoList = JSON.parse(localStorage.getItem('todolist')) || [];
function handleEnter(event) {
    if (event.key === 'Enter')
        process();
}

function process() {
    const name = document.querySelector('.add-work').value;
    const date = document.querySelector('.add-due-date').value;
    if (name === '')
        return;
    todoList.push({ name, date });
    localStorage.setItem('todolist', JSON.stringify(todoList));
    renderList();
}

function renderList() {
    const container = document.querySelector('.task-list');
    container.innerHTML = '';

    for (let i = 0; i < todoList.length; i++){
        const taskHTML = `
            <div>${todoList[i].name}</div>
            <div>${todoList[i].date}</div>
            <div class="div-delete-button">
                <button onclick="deleteItem(${i})">Delete</button>
            </div>
        `;
        container.innerHTML += taskHTML; 
    }
}

function deleteItem(index) {
    todoList.splice(index, 1);
    localStorage.setItem('todolist', JSON.stringify(todoList));
    renderList();
}

renderList();