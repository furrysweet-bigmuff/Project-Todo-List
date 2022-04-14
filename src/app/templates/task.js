export function task() {
    const task = document.createElement('li');
    const leftDiv = document.createElement('div');
    const rightDiv = document.createElement('div');
    const circleDiv = document.createElement('div');
    const textDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const descriptionDiv = document.createElement('div');
    const dateDiv = document.createElement('div');
    const editDiv = document.createElement('div');

    const iCircle = document.createElement('i');
    const iTimes = document.createElement('i');
    const iEdit = document.createElement('i');

    leftDiv.classList.add('left');
    textDiv.classList.add('text');
    rightDiv.classList.add('right');
    circleDiv.classList.add('circle');
    titleDiv.classList.add('title');
    descriptionDiv.classList.add('description');
    task.classList.add('task');
    dateDiv.classList.add('date');
    editDiv.classList.add('edit');

    iCircle.classList.add('far', 'fa-circle');
    iTimes.classList.add('fas', 'fa-times');
    iEdit.classList.add('fas', 'fa-edit');

    titleDiv.textContent = 'Task title';
    descriptionDiv.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, illum. Quis, in eos. Voluptatibus veritatis inventore ipsa, non eveniet voluptatem!';
    dateDiv.textContent = '14.02.2022';

    textDiv.appendChild(titleDiv);
    textDiv.appendChild(descriptionDiv);
    circleDiv.appendChild(iCircle);
    editDiv.appendChild(iTimes);
    editDiv.appendChild(iEdit);
    leftDiv.appendChild(circleDiv);
    leftDiv.appendChild(textDiv);
    rightDiv.appendChild(dateDiv);
    rightDiv.appendChild(editDiv);
    task.appendChild(leftDiv);
    task.appendChild(rightDiv);

    return task
}
