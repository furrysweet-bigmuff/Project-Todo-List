export const Project = (projectName, projectId) => {
    const name = projectName;
    const id = projectId;
    const taskList = [];
    
    const createTask = (title, description, date) => {
        const task = Task(title, description, date);
        taskList.push(task);
    }

    const Task = (title, description, date) => {
        const titleVal = title;
        const descriptionVal = description;
        const dateVal = date;
        return {titleVal, descriptionVal, dateVal}
    }

    return {name, projectId}
}