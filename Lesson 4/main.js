const pi = 3.14;
let array = [true, 'one', 6, false, 'five', 10, 'four', 8, false, 'eleven'];



console.log('--------------1-------------');
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleArea(a, b) {
    return a*b;
}
console.log(rectangleArea(4,8));

console.log('--------------2-------------');
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleArea(r) {
    return pi*r**2;
}
console.log(circleArea(10));

console.log('--------------3-------------');
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderArea(h, r) {
    return Math.floor(h*pi*r**2);
}
console.log(cylinderArea(10, 4));

console.log('--------------4-------------');
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
function printArrayItem(arr) {
    for (let item of arr) {
        console.log(item);
    }
}
printArrayItem(array);

console.log('--------------5-------------');
// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
document.write('<h3>--------------5-------------</h3>')
function paragraphCreate(someText) {
    return document.write(`
        <p>${someText}</p>
    `)
}
paragraphCreate('Hi, whats up)')

console.log('--------------6-------------');
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
document.write('<h3>--------------6-------------</h3>')
function ulListCreate(text) {
            document.write(`
                <ul>
                    <li>${text}</li>
                    <li>${text}</li>
                    <li>${text}</li>
                </ul>
            `);
}
ulListCreate('This text for li');

console.log('--------------7-------------');
// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
document.write('<h3>--------------7-------------</h3>')
function ulListCreateWithSomeLi(text, liNumbers) {
    document.write('<ul>');
    for (let i = 1; i<= liNumbers; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
ulListCreateWithSomeLi('This text for li with some numbers li', 5);

console.log('--------------8-------------');
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
document.write('<h3>--------------8-------------</h3>')
function arrayDocumentList(arr) {
    document.write('<ul>');
        for (let item of arr) {
            document.write(`<li>${item}</li>`);
        }
    document.write('</ul>');
}
arrayDocumentList(array);

console.log('--------------9-------------');
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

document.write('<h3>--------------9-------------</h3>')
function usersDocumentIter(arr) {
    document.write('<div>');
        for (let user of arr) {
            document.write(`<div>${user.id}. ${user.name} - age: ${user.age}</div>`);
        }
    document.write('</div>');
}
usersDocumentIter(users);

console.log('--------------10-------------');
//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
let arrayNumbers = [3, 16, 15, -13, 2, 15, -19, 14, 11, 4];
function smallestNumber(arr) {
    let smallestNumber = arr[0];
    for (let number of arr) {
        if (number < smallestNumber) {
            smallestNumber = number;
        }
    }
    return smallestNumber;
}

console.log(smallestNumber(arrayNumbers))

console.log('--------------11-------------');
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let task11Array = [1,2,10];
function sumNumbers(arr) {
    let sumNumbers = 0;
    for (let number of arr) {
        sumNumbers += number;
    }
    return sumNumbers;
}
console.log(sumNumbers(task11Array));

console.log('--------------12-------------');
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let arrayTask12 = [11,22,33,44];

function swap(arr, firstIndex, secondIndex) {
    // 1 Спосіб
    let firstItem = arr[firstIndex];
    let secondItem = arr[secondIndex];
    arr[secondIndex] = firstItem;
    arr[firstIndex] = secondItem;
    return arr;

    // 2 спосіб
    // let copyArr = arr.slice();
    // copyArr[firstIndex] = arr[secondIndex];
    // copyArr[secondIndex] = arr[firstIndex];
    // return copyArr;
}
console.log(swap(arrayTask12, 0, 1));

console.log('--------------13-------------');
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
let currencyValues = [{currency:'USD',value:25},{currency:'EUR',value:42}];
let sumUAH = 10000;
let exchangeCurrency = 'USD';

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let exchangeValue = 0;
    for (let currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            exchangeValue = sumUAH /currencyValue.value;
        } else {
            console.log('wrong currency');
        }
    }
    return exchangeValue;
}
console.log(exchange(sumUAH, currencyValues, exchangeCurrency));