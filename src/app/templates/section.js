import {addTaskBtn} from "./addTaskBtn";
import {tasks} from './tasks.js'

export function section(titleText) {
    const section = document.createElement('section');
    const heading = document.createElement('h1');
    if (titleText) {
        heading.textContent = titleText;
    } else {
        heading.textContent = 'My Project';
    }
    
    section.appendChild(heading);
    section.appendChild(addTaskBtn())

    // const tasksList = tasks();
    // tasksList.appendChild(task());
    // tasksList.appendChild(task());

    section.appendChild(tasks())

    return section
}