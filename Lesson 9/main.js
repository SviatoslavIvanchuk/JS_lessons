document.write('<h2>Task 1</h2>');
// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let bloc = document.createElement('div');
bloc.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, tempora.'
let blocClasses = ['wrap', 'collapse', 'alpha', 'beta'];
for (let classString of blocClasses) {
    bloc.classList.add(classString);
}
bloc.style.background = 'grey';
bloc.style.color = 'pink';
bloc.style.fontSize = '21px';

document.body.appendChild(bloc);
let cloneBloc = bloc.cloneNode(true);
document.body.appendChild(cloneBloc);


document.write('<h2>Task 2</h2>');
// #OPLI89c9G
// - Є масив:
let array = ['Main', 'Products', 'About us', 'Contacts'];
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let ulBloc = document.createElement('ul');
for (let elements of array) {
    let li = document.createElement('li');
    li.innerHTML = elements;
    ulBloc.appendChild(li);
}
document.body.appendChild(ulBloc);


document.write('<h2>Task 3</h2>');
// #jeBqHV525U5
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (let course of coursesAndDurationArray) {
    let courseBloc = document.createElement('div');
    courseBloc.innerHTML = `<h4>${course.title}. Month duration: ${course.monthDuration}.</h4>`;
    document.body.appendChild(courseBloc);
}


document.write('<h2>Task 4</h2>');
//     #Kx1xgoKy8
//     - Є масив з попереднього завдання.
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (let course of coursesAndDurationArray) {
    let courseBloc = document.createElement('div');
    courseBloc.classList.add('item');

    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerHTML = `${course.title}`;

    let p = document.createElement('p');
    p.classList.add('description');
    p.innerHTML = `Month duration: ${course.monthDuration}`

    courseBloc.appendChild(h1);
    courseBloc.appendChild(p);

    document.body.appendChild(courseBloc);
}
