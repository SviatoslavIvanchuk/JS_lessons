// #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
document.write(`<h2>1 Task</h2>`);
let divCount = 10;
for (let i = 1; i <= divCount; i++) {
    document.write(`<div>За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині</div>`)
}


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write(`<h2>2 Task</h2>`);
let divCountWithIndex = 10;
for (let i = 1; i <= divCountWithIndex; i++) {
    document.write(`<div>${i} За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині</div>`)
}


// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//     #OeT7t3uUMFi
document.write(`<h2>3 Task</h2>`);
let h1Count = 20;
let indexTask3 = 1;
while (indexTask3 <= h1Count) {
    document.write(`<h1> За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.</h1>`);
    indexTask3++
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write(`<h2>4 Task</h2>`);
let h1CountWithIndex = 20;
let indexTask4 = 1;
while (indexTask4 <= h1CountWithIndex) {
    document.write(`<h1>${indexTask4} За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.</h1>`);
    indexTask4++
}


//     #vLSZKMlO
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:   let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
document.write(`<h2>5 Task</h2>`);
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<li>${listOfItems[i]}</li>`);
}
document.write(`</ul>`);


// -----------------------------------------------
//     #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
//      <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
document.write(`<h2>6 Task</h2>`);
document.write(`<div class="products-list">`);
for (let i = 0; i < products.length; i++) {
    document.write(`<div class="product-card">`);
    document.write(`<h3>${products[i].title}. Price - ${products[i].price}</h3>`);
    document.write(`<img src="${products[i].image}" alt="${products[i].title}-img" class="product-image">`)
    document.write(`</div>`);
}
document.write(`</div>`);


// --------------------
// #4WrHwFTEop0
// є масив
// за допомоги циклу вивести:
// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
document.write(`<h2>7 Task</h2>`);
document.write(`<div class="task-seven">
                    <div class="trueStatus">
                        <h2>True Status</h2>
                        <ul id="trueStatus"></ul>
                    </div>
                    <div class="falseStatus">
                        <h2>False Status</h2>
                        <ul id="falseStatus"></ul>
                    </div>
                    <div class="olderThen30">
                        <h2>Older then 30 years</h2>
                        <ul id="olderThen30"></ul>
                    </div>
                </div>`);

let trueStatusList = '';
let falseStatusList = '';
let olderThen30List = '';

for (let user of users) {

    if (user.status) {
        trueStatusList += `<li>${user.name} - age: ${user.age} - status: ${user.status} </li>`;
    } else {
        falseStatusList += `<li>${user.name} - age: ${user.age} - status: ${user.status} </li>`;
    }

    if (user.age>30) {
        olderThen30List += `<li>${user.name} - age: ${user.age} - status: ${user.status} </li>`
    }
}

document.getElementById('trueStatus').innerHTML = trueStatusList;
document.getElementById('falseStatus').innerHTML = falseStatusList;
document.getElementById('olderThen30').innerHTML = olderThen30List;