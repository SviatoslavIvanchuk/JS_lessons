console.log('-----------------------Part 1---------------------------');
// 1. Створити пустий масив та :
let arrayEmpty = [];

console.log('------------a-----------');
//     a. заповнити його 50 парними числами за допомоги циклу.
for (let i = 1; i<=50; i++ ) {
    let number = 2*i;
    let indexPlace = arrayEmpty.length;
    arrayEmpty[indexPlace] = number;
}
console.log(arrayEmpty);

console.log('------------b-----------');
//     b. заповнити його 50 непарними числами за допомоги циклу.
arrayEmpty = [];
for (let i = 0; i<50; i++) {
    let number = 2*i+1;
    let indexPlace = arrayEmpty.length;
    arrayEmpty[indexPlace] = number;
}
console.log(arrayEmpty);

console.log('------------c-----------');
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
arrayEmpty = [];
for (let i = 0; i<20; i++) {
    let number = Math.floor(Math.random()*20);
    let indexPlace = arrayEmpty.length;
    arrayEmpty[indexPlace] = number;
}
console.log(arrayEmpty);

console.log('------------d-----------');
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
arrayEmpty = [];
for (let i = 0; i<20; i++) {
    let number = Math.floor(Math.random()*(732-8)) + 8;
    let indexPlace = arrayEmpty.length;
    arrayEmpty[indexPlace] = number;
}
console.log(arrayEmpty);

console.log('------------2-----------');
// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 3; i<arrayEmpty.length; i += 3) {
    console.log(arrayEmpty[i]);
}

console.log('------------3-----------');
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 3; i<arrayEmpty.length; i += 3 ) {
    if (arrayEmpty[i] % 2 === 0) {
        console.log(arrayEmpty[i]);
    }
}

console.log('------------4-----------');
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newArray = [];
for (let i = 3; i<arrayEmpty.length; i += 3 ) {
    if (arrayEmpty[i] % 2 === 0) {
        newArray.push(arrayEmpty[i]);
    }
}
console.log(newArray);

console.log('------------5-----------');
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let arrayTask5 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for (let i = 0; i<arrayTask5.length; i++) {
    if ((arrayTask5[i+1]) % 2 === 0) {
        console.log(arrayTask5[i]);
    }
}

console.log('------------6-----------');
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let arrayTask6 = [100,250,50,168,120,345,188];
let sum = 0;
for (let price of arrayTask6) {
    sum += price;
}
console.log(sum);

console.log('------------7-----------');
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let randomArrayNumbers = [];
let timesFiveArray = [];
for (let i = 1; i<=10; i++) {
    let number = Math.floor(Math.random()*100);
    randomArrayNumbers.push(number);
    let numberTimesFive = number*5;
    timesFiveArray.push(numberTimesFive);
}
console.log(randomArrayNumbers);
console.log(timesFiveArray);

console.log('------------8-----------');
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let arrayTask8 = [true, 'one', 6, false, 'five', 10, 'four', 8, false, 'eleven'];
let numberArrayTask8 = [];
for (let value of arrayTask8) {
    if (typeof value === 'number') {
        numberArrayTask8.push(value);
    }
}
console.log(numberArrayTask8);


console.log('-----------------------Part 2---------------------------');
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

for (let user of usersWithId) {
    for (let userAddress of citiesWithId) {
        if (user.id === userAddress.user_id) {
            user.address = { user_id: userAddress.user_id, country: userAddress.country, city: userAddress.city};
        }
    }
}
console.log(usersWithId);

console.log('-----------------------Part 3---------------------------');
console.log('------------1-----------');
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let array10Numbers = [3, 16, 15, 13, 2, 15, 19, 14, 11, 4];
for (let number of array10Numbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}

console.log('------------2-----------');
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let emptyNumberArray = [];
for (let number of array10Numbers) {
    let emptyArrayIndex = emptyNumberArray.length;
    emptyNumberArray[emptyArrayIndex] = number;
}
console.log(emptyNumberArray);

console.log('------------3-----------');
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let makeWord = [ 'a', 'b', 'c'];

let wordTask3 = '';
for (let i = 0; i < makeWord.length; i++) {
    wordTask3 += makeWord[i];
}
console.log(wordTask3);

console.log('------------4-----------');
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let wordTask4 = '';
let i = 0;
while (i<makeWord.length) {
    wordTask4 += makeWord[i];
    i++;
}
console.log(wordTask4);

console.log('------------5-----------');
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let wordTask5 = '';
for (let letter of makeWord) {
    wordTask5 += letter;
}
console.log(wordTask5);