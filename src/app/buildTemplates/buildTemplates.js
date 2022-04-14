import {header} from '../templates/header.js'
import {content} from '../templates/content.js'
import {nav} from '../templates/nav.js'
import {section} from '../templates/section.js'
import {addTaskBtn} from '../templates/addTaskBtn.js'
import {tasks} from '../templates/tasks.js'
import {task} from '../templates/task.js'

export function buildTemplates() {
    const body = document.querySelector('body');
    const main = content();
    const sectionDiv = section();


    const tasksList = tasks();
    tasksList.appendChild(task());
    tasksList.appendChild(task());

    sectionDiv.appendChild(addTaskBtn())
    sectionDiv.appendChild(tasksList)


    main.appendChild(nav());
    main.appendChild(sectionDiv);
    body.appendChild(header());
    body.appendChild(main);
}
