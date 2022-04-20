import { projectsBtn } from "../templates/projectsBtn";
import { Project } from './project.js'
import { closeModalProject, closeModalTask } from './modalEvents'
import { setRemoveProject, setLoadProject } from "./events.js";
import { task } from "../templates/task.js";

// localStorage.clear()

export const controller = (() => {
    let projectId = 1;
    const setProjectId = num => {
        projectId = num;
    }
    const createProject = () => {
        const projectName = document.querySelector('#modalProject input').value;
        const newProject = Project(projectName, projectId);
        localStorage.setItem(projectId, JSON.stringify(newProject));
        projectId++;
        addProject(newProject);
        closeModalProject();
    }
    const addProject = project => {
        const projectsMenuVal = document.getElementById('projects-menu');
        loadProject(project)
        projectsMenuVal.prepend(projectsBtn(project, true));
        setRemoveProject(project.id)
        setLoadProject(project.id)   
    }
    const addAllProjects = () => {
        const projectsMenuVal = document.getElementById('projects-menu');
        let arr = [];

        for (const [key] of Object.entries(localStorage)) {
            arr.push(JSON.parse(localStorage.getItem(key)))
        }
        arr.sort(function(a,b){
            var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
            if (nameA < nameB) //sort string ascending
            return -1;
            if (nameA > nameB)
            return 1;
            return 0; //default return value (no sorting)    
        })
        arr.forEach( (item, index) => {
            if (index === 0) {
                loadProject(item)
                projectsMenuVal.appendChild(projectsBtn(item, true))
            } else {
                projectsMenuVal.appendChild(projectsBtn(item))
            }
        })
        setRemoveProject()
        setLoadProject()
        setProjectId(localStorage.length + 1)
    }
    const removeProject = function(event) {
        event.stopPropagation()
        let li = this.closest('li');
        localStorage.removeItem(li.getAttribute('data-id'))
        li.remove()
    }
    const checkActiveProject = function(val) {
        if (val === undefined) {
            if (document.querySelector('#projects-menu .active') == undefined) {

            } else {
                document.querySelector('#projects-menu .active').classList.remove('active');
            }
            return 'empty'
        } else if (val.classList.contains('active')) {
            return
        } else {
            document.querySelector('#projects-menu .active').classList.remove('active');
            val.classList.add('active')
        }
    }
    const loadProject = function(project) {
        const heading = document.getElementById('heading');
        const tasks = document.getElementById('tasks');
        const btn = document.getElementById('openTaskModal');
        btn.classList.add('active')
        tasks.replaceChildren()
        if ( checkActiveProject(this) === 'empty' ) {
            heading.textContent = project.name;
            if (project.taskList.length > 0) {
                listAllTasks(project.taskList);
            }
        } else {
            const id = this.getAttribute('data-id');
            let currentProject = null;
            for (const [key] of Object.entries(localStorage)) {
                if (key === id) {
                    currentProject = JSON.parse(localStorage.getItem(key))
                }
            }
            heading.textContent = currentProject.name;
            if (currentProject.taskList.length > 0) {
                listAllTasks(currentProject.taskList);
            }
        }        
    }
    const addTask = function() {
        let id = document.querySelector('#projects-menu .active').getAttribute('data-id');
        let currentProject = null;
        const textVal = document.getElementById('taskTitle').value;
        const textDescription = document.getElementById('taskDescription').value;
        const textDate = document.getElementById('taskDate').value;

        for (const [key] of Object.entries(localStorage)) {
            if (key === id) {
                currentProject = JSON.parse(localStorage.getItem(key))
                console.log(currentProject)
            }
        }
        createTask(currentProject, textVal, textDescription, textDate);
        closeModalTask()
    }
    const createTask = (project, title, description, date) => {
        
        let task = {
            'title': title,
            'description': description,
            'date': date
        }

        project.taskList.push(task)
        localStorage.setItem(project.id, JSON.stringify(project));
        listOneTask(task)
        
    }
    const listOneTask = newTask => {
        let tasks = document.getElementById('tasks');
        tasks.appendChild(task(newTask))
    }
    const listAllTasks = arr => {
        arr.forEach(item => tasks.appendChild(task(item)))
    }

    return {createProject, loadProject, addAllProjects, removeProject, addTask}
})();
