import { projectsBtn } from "../templates/projectsBtn";
import { Project } from './project.js'
import { closeModalProject, modalEvents } from './modalEvents'
import { setRemoveProject, setLoadProject } from "./events.js";

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
        loadProject()
        projectsMenuVal.prepend(projectsBtn(project, true));
        setRemoveProject(project.projectId)
        setLoadProject(project.projectId)
        
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
                return
            } else {
                document.querySelector('#projects-menu .active').classList.remove('active');
            }
            return
        } else if (val.classList.contains('active')) {
            return
        } else {
            document.querySelector('#projects-menu .active').classList.remove('active');
            val.classList.add('active')
        }
    }
    const loadProject = function() {
        checkActiveProject(this)
        
        
    }

    return {createProject, loadProject, addAllProjects, removeProject}
})();

