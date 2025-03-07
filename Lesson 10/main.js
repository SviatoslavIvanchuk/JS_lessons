document.write('<h3>----------TASK 1----------</h3>');
// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let button = document.createElement('button');
button.innerText = 'Magic button';
let div = document.createElement('div');
div.id = 'text';
div.classList.add('task1');

document.body.append(button, div);

button.addEventListener('click', function () {
    div.style.display === 'none' ? div.style.display = 'block' : div.style.display = 'none';
})

document.write('<h3>----------TASK 2----------</h3>');
// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let input = document.createElement('input');
input.type = 'number';
let checkAgeButton = document.createElement('button');
checkAgeButton.innerText = 'Перевірка віку';

document.body.append(input, checkAgeButton);
checkAgeButton.addEventListener('click', function () {
    if (input.value < 18) {
        alert('Ваш вік менший за 18');
    }
})

document.write('<h3>----------TASK 3----------</h3>');
// #ymAmN2xJ
// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = 'name';
let surnameInput = document.createElement('input');
surnameInput.type = 'text';
surnameInput.placeholder = 'surname'
let ageInput = document.createElement('input');
ageInput.type = 'number';
ageInput.placeholder = 'age';

let createUserButton = document.createElement('button');
createUserButton.innerText = 'додати користувача';

let userBloc = document.createElement('div');

document.body.append(nameInput, surnameInput, ageInput, createUserButton, userBloc);

let users = [];
createUserButton.addEventListener('click', function () {

    let user = {name: nameInput.value, surname: surnameInput.value, age: ageInput.value};
    users.push(user);

    userBloc.append(JSON.stringify(user));
})

document.write('<h3>----------TASK 4----------</h3>');
// #2VaLt4vDczH
// є сторінка, на якій є блок, в якому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let pageCount = localStorage.getItem('pageCounter') || 0;
pageCount++;
let counterBloc = document.createElement('div');
counterBloc.style.fontSize = '22px';
counterBloc.innerText = `${pageCount}`;
localStorage.setItem('pageCounter', pageCount);
document.body.append(counterBloc);

document.write('<h3>----------TASK 5----------</h3>');
// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
let listTimeVisitSite = JSON.parse(localStorage.getItem('sessionsList')) || [];
let timeSiteVisit = new Date().toLocaleString();
listTimeVisitSite.push(timeSiteVisit);
localStorage.setItem('sessionsList', JSON.stringify(listTimeVisitSite));

document.write('<h3>----------TASK 6----------</h3>');
// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
let kgInput = document.createElement('input');
input.type = 'number';
let resultKgToPounds = document.createElement('h4');
document.body.append(kgInput, resultKgToPounds);

kgInput.addEventListener('input', function () {
    let kg = parseFloat(kgInput.value) || 0;
    let pounds = (kg * 2.20462).toFixed(2);
    resultKgToPounds.textContent = `${pounds}`;
})

document.write('<h3>----------TASK 7----------</h3>');
// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName, objectToAdd) {
    let arrFromLocalStorage = JSON.parse(localStorage.getItem(arrayName));
    if (arrFromLocalStorage) {
        arrFromLocalStorage.push(objectToAdd);
        localStorage.setItem(arrayName, JSON.stringify(arrFromLocalStorage));
    }
}
addToLocalStorage('sessionsList', {time: 'newTime'});
console.log(listTimeVisitSite);

document.write('<h3>----------TASK 8----------</h3>');
//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
let rows = document.createElement('input');
    rows.type = 'number';
    rows.placeholder = 'rows';
let columns = document.createElement('input');
    columns.type = 'number';
    columns.placeholder = 'columns';
let content = document.createElement('input');
    content.placeholder = 'введіть тест';
let createTableButton = document.createElement('button');
    createTableButton.innerText = 'Створити таблицю';
let container = document.createElement('div');

document.body.append(rows, columns, content, createTableButton, container);

createTableButton.addEventListener('click', function () {
    let table = document.createElement('div');
    for (let i = 0; i < parseInt(rows.value); i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < parseInt(columns.value); j++) {
            let cell = document.createElement("td");
            cell.innerText = `${content.value}`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    container.textContent = '';
    container.appendChild(table);
})

document.write('<h3>----------TASK 9----------</h3>');
//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
const priceStep = 10;
const cooldown = 10 * 1000;

let savedPrice = parseInt(localStorage.getItem('savedPrice')) || 100;
let lastUpdateTime = parseInt(localStorage.getItem('lastUpdateTime')) || 0;
let currentTime = Date.now();

if (currentTime - lastUpdateTime >= cooldown) {
    savedPrice += priceStep;
    localStorage.setItem('savedPrice', savedPrice);
    localStorage.setItem('lastUpdateTime', currentTime);
}

document.write(`<h4>${savedPrice}</h4>`);
