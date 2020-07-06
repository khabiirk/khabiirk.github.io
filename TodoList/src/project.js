import render from './domHTML';
let projectList = [];

class Project {
    constructor(name, list) {
        this.name = name;
        this.list = list;
    }

    addProject(o) {
        //alert(projectList);
        projectList.push(o);
        //localStorage.setItem('project', JSON.stringify(projectList));

    }

    deleteProject(o) {
        for (let i = 0; i < projectList.length; i++) {
            if (projectList[i] === o) {
                projectList.splice(i, 1);
                break;
            }
        }
    }
    getName() {
        return this.name;
    }
    getList() {
        //const p = JSON.parse(localStorage.getItem('project'));
        return projectList;
    }
};

export default Project;