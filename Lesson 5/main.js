// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
//
const PI = 3.14;
let array = [true, 'one', 6, false, 'five', 10, 'four', 8, false, 'eleven'];

console.log('----------1----------');
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangleArea = (a, b) => a * b;
console.log(rectangleArea(4, 5));

console.log('----------2----------');
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleArea = (r) => PI * r ** 2;
console.log(circleArea(10));

console.log('----------3----------');
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderArea = (r, h) => PI * r ** 2 * h;
console.log(cylinderArea(10, 4));

console.log('----------4----------');
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
let arrayIter = (arr) => {
    for (let item of arr) {
        console.log(item);
    }
}
arrayIter(array);

console.log('----------5----------');
// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
document.write('----------5----------');
let createParagraph = (text) => document.write(`<p>${text}</p>`);
createParagraph('hi) whats up');

console.log('----------6----------');
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write('----------6----------');
let unorderedListCreate = (text) => {
    document.write('<ul>');
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write('</ul>');
}
unorderedListCreate('створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий');

console.log('----------7----------');
// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write('----------7----------');
let unorderedListWithLiNumber = (text, number) => {
    document.write('<ul>');
    for (let i = 1; i <= number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
unorderedListWithLiNumber('Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом', 5);

console.log('----------8----------');
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write('----------8----------');
let arrayUnorderedList = (arr) => {
    document.write('<ul>');
    for (let item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}
arrayUnorderedList(array);

console.log('----------9----------');
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
document.write('----------9----------');
let users = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let arrayIterDocumentWrite = (arr) => {
    for (let user of arr) {
        document.write(`<p>${user.id}. ${user.name}. age: ${user.age}. status: ${user.status} </p>`);
    }
}
arrayIterDocumentWrite(users);

console.log('----------10----------');
//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
let arrayNumbers = [3, 16, 15, -13, 2, 15, -19, 14, -50, 4];

let smallestNumberOfArray = (arr) => {
    let smallestNumber = 0;
    for (let number of arr) {
        if (number < smallestNumber) {
            smallestNumber = number;
        }
    }
    return smallestNumber
}
console.log(smallestNumberOfArray(arrayNumbers));

console.log('----------11----------');
// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sumArrayNumbers = (arr) => {
    let sum = 0;
    for (let number of arr) {
        sum += number;
    }
    return sum;
}
console.log(sumArrayNumbers(arrayNumbers));

console.log('----------12----------');
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swapIndexItemsInArray = (arr, index1, index2) => {
    let firstItem = arr[index1];
    let secondItem = arr[index2];
    arr[index2] = firstItem;
    arr[index1] = secondItem;
    return arr
}
console.log(swapIndexItemsInArray(arrayNumbers, 4, 6));

console.log('----------12----------');
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let currencyValues = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];
let sumUAH = 10000;
let exchangeCurrency = 'USD';

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let exchangeValue = 0;
    for (let currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            exchangeValue = sumUAH / currencyValue.value;
        }
    }
    return exchangeValue;
}
console.log(exchange(sumUAH, currencyValues, exchangeCurrency));