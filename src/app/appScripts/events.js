import { controller } from './controller.js'
import { openModalProject, closeModalProject, openModalTask, closeModalTask } from './modalEvents'

function setRemoveProject(id) {
    if (id) {
        document.querySelector('li[data-id="' + id + '"] .remove').addEventListener('click', controller.removeProject)
    } else {
        let removeProjectBtn = document.querySelectorAll('#projects-menu .remove');
        removeProjectBtn.forEach(btn => btn.addEventListener('click', controller.removeProject))
    }
}

function setLoadProject(id) {
    if (id) {
        document.querySelector('li[data-id="' + id + '"]').addEventListener('click', controller.loadProject)
    } else {
        let loadProjectBtn = document.querySelectorAll('#projects-menu li');
        loadProjectBtn.forEach(btn => btn.addEventListener('click', controller.loadProject))
    }
}

function setOpenModalProject() {
    const addProjectBtn = document.querySelector('.add-project');
    addProjectBtn.addEventListener('click', openModalProject);
}

function setCloseModalProject() {
    const modalProjectTimes = document.getElementById('closeModalProject');
    modalProjectTimes.addEventListener('click', closeModalProject);
}

function setAddProjectBtn() {
    const addProjectModalBtn = document.getElementById('addProject');
    addProjectModalBtn.addEventListener('click', controller.createProject);
}

function checkLocalStorage() {
    if (localStorage.length > 0) {
        controller.addAllProjects()
    }
}

function setOpenTaskModal() {
    const openTaskModalBtn = document.getElementById('openTaskModal');
    openTaskModalBtn.addEventListener('click', openModalTask);
}

function setCloseTaskModal() {
    const closeTaskModalBtn = document.getElementById('closeModalTask');
    closeTaskModalBtn.addEventListener('click', closeModalTask);
}

function setEventsOnInit() {
    setOpenModalProject()
    setCloseModalProject()
    setOpenTaskModal()
    setCloseTaskModal()
    setAddProjectBtn()
    checkLocalStorage()
}

export {setRemoveProject, setLoadProject, setEventsOnInit}