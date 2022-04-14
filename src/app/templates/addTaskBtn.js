export function addTaskBtn() {
    const btn = document.createElement('div');
    const i = document.createElement('i');
    btn.classList.add('add-task');
    i.classList.add('fas', 'fa-plus');
    btn.appendChild(i);
    btn.append('Add Task');
    return btn
}