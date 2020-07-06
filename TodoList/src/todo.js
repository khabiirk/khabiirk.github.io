import { render, createAddTask } from './domHTML';
import Project from './project';

class toDo {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;

    };
    addtoDo(o) {
        if (!this.project.list.includes(o)) {

            this.project.list.push(o);
            //ocalStorage.setItem('task', JSON.stringify(this.project.list));
            render(this.project);
        };



    };

    removeToDo(o) {
        for (let i = 0; i < list.length; i++) {
            if (list[i] === o) {
                list.splice(list[i], 1);
                break;
            }
        }
    };


};


export default toDo;