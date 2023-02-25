const form = document.querySelector('#form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', addTask);

function addTask(e) {
  e.preventDefault();
  
  if (taskInput.value === '') return;
  
  const task = document.createElement('li');
  task.textContent = taskInput.value;
  taskList.appendChild(task);
  
  taskInput.value = '';
}
