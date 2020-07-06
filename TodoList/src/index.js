import { render, record } from './domHTML';
import toDo from './todo';
import Project from './project';

function setup() {
    let b = document.querySelector('.button');
    let a = document.createElement('button');

    a.innerHTML = 'New Project';
    a.addEventListener('click', () => {
        let name = prompt("Name of project: ");
        let arr = [];
        let v = new Project(name, arr);
        v.addProject(v);
        defaultProject = v;

        render(v);
    });

    let defaultProject;
    let defaultarray = [];

    let m = document.querySelector('.modal');
    let d = document.querySelector('.task');
    let button = document.createElement('div');
    let icon = document.createElement('i');
    icon.classList.add('material-icons');

    button.classList.add('newTask');
    icon.innerHTML = "add";
    button.appendChild(icon);
    button.addEventListener('click', () => {

        m.style.display = 'block';
    });
    d.appendChild(button);
    let ad = document.querySelector('.add');
    ad.addEventListener('click', function() {
        alert(defaultProject.name);
        record(defaultProject);
    });
    let cancel = document.querySelector('.cancel');
    cancel.addEventListener('click', () => {
        m.style.display = "none";
    });

    b.appendChild(a);
    const p = new Project("Default", defaultarray);
    p.addProject(p);
    defaultProject = p;
    let k = new toDo("Title", "description", 22, 'high', p);
    k.addtoDo(k);
    //let g = new toDo("tidtle", "description", 22, 'high', p);
    //let r = g.addtoDo(g, defaultProject);
    //alert('DICK');


    render(defaultProject);

};

setup();