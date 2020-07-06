import Project from './project';
import toDo from './todo';
import datepicker from '../node_modules/js-datepicker';
//import pikaday from '../node_modules/pikaday';


function render(project) {
    //alert(project);
    let y = document.querySelector('.project-header');
    y.innerHTML = project.name;
    let p = document.querySelector('.project');
    p.innerHTML = '';
    let arr = project.getList();
    for (let j = 0; j < arr.length; j++) {
        let u = document.createElement('li');


        //alert(arr[j].getName());
        u.innerHTML = arr[j].getName();
        p.appendChild(u);
        u.addEventListener('click', () => {
            alert(u.innerHTML == project.name)
            if (u.innerHTML == project.name) {
                u.classList.add('defaulproject');
                u.style.background = 'grey';
            }

            render(arr[j]);
        })
    }
    let div = document.querySelector('.todo');
    div.innerHTML = '';
    //alert(project.name);
    console.table(project.list);
    for (let i = 0; i < project.list.length; i++) {
        //row.setAttribute('id', c);
        let row = document.createElement('ul');
        let top = document.createElement('div');
        let c = document.createElement("INPUT");
        c.setAttribute('type', 'radio');
        c.setAttribute('id', i);
        c.classList.add('complete');
        c.addEventListener('click', () => {
            project.list.splice(i, 1);
            //localStorage.getItem()
            div.removeChild(row);
        });
        top.appendChild(c);
        let count = 0;
        let data = document.createElement('div');
        let td1 = document.createElement('ul');
        td1.innerHTML = project.list[i].title;
        td1.classList.add('title');
        let td2 = document.createElement('ul');

        td2.innerHTML = "Due date: " + project.list[i].dueDate;
        let color = document.createElement('div');
        color.classList.add(project.list[i].priority);

        data.appendChild(td1);
        data.appendChild(td2);

        top.appendChild(data);


        let bottom = document.createElement('div');
        let desc = document.createElement('ul');
        desc.innerHTML = project.list[i].description;
        bottom.appendChild(desc);
        bottom.style.display = 'none';
        bottom.classList.add('bottom')
        row.addEventListener('click', () => {
            if (bottom.style.display == 'none') {
                bottom.style.display = 'block';
            } else {
                bottom.style.display = 'none';
            }
        });

        row.classList.add("class" + project.list[i].priority);


        top.classList.add('top');
        bottom.classList.add('bottom');
        row.appendChild(top);
        row.appendChild(bottom);
        top.appendChild(color);
        div.appendChild(row);
    };



};
let m = document.querySelector('.modal');

function record(p) {
    let name = document.querySelector('#title').value;
    let description = document.querySelector('#description').value;
    let date = document.querySelector('#datepicker').value;
    //alert(date);
    //document.querySelector('#date').value;
    let priority = document.querySelector('#priority').value;
    if (name.length == 0 || description.length == 0 || date.length == 0) {
        alert('Please fill in all');
    } else {
        let task = new toDo(name, description, date, priority, p);
        task.addtoDo(task);
        document.forms['task-form'].reset();
        name = '';
        description = '';
        date = '';
        priority = '';
        m.style.display = "none";
    };
    //       form.classList.add('hidden');


}

export { render, record };