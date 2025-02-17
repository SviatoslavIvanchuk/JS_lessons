console.log('----------1----------');
// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);

console.log('----------2----------');
// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());

console.log('----------3----------');
// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());

console.log('----------4----------');
// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log(' dirty string   '.trim());

console.log('----------5----------');
//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';
let stringToArray = (str) => str.split(' ');
console.log(stringToArray(str));

console.log('----------6----------');
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrayNumbers = [10,8,-7,55,987,-1011,0,1050,0];
let numbersToStringArray = (array) => array.map(number => number.toString());
console.log(numbersToStringArray(arrayNumbers));

console.log('----------7----------');
// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
let sortNums = (array, direction) =>
    direction === 'ascending' ? array.sort((a, b) => a-b) :
        direction === 'descending' ? array.sort((a, b) => b - a) :
            'wrong direction';

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

console.log('----------8----------');
// #yo06d74c1C
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================
console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration-b.monthDuration));
console.log(coursesAndDurationArray.filter(course => course.monthDuration > 5));
console.log(coursesAndDurationArray.map((course, index) => { return {id: index + 1, ...course} }));


console.log('----------9----------');
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

let cardsValue = ['6', '7', '8', '9','10', 'ace','jack','queen','king'];
let cardsSuits = [
    {suitCard: 'spade', color: 'black'},
    {suitCard: 'clubs', color: 'black'},
    {suitCard: 'diamond', color: 'red'},
    {suitCard: 'heart', color: 'red'}

]
let cardsDeck = [];

cardsSuits.forEach(cardSuit => {
    cardsValue.forEach(cardValue => {
        cardsDeck.push({suitCard: cardSuit.suitCard, color: cardSuit.color, value: cardValue})
    })
})
// - знайти піковий туз
console.log(
    cardsDeck.find(card => card.value === 'ace' && card.suitCard === 'spade')
);
// - всі шістки
let allSixes = [];
cardsDeck.forEach(card => { card.value === '6'? allSixes.push(card) : 'card not found' });
console.log(allSixes);

// - всі червоні карти
let allRedCards = [];
cardsDeck.forEach(card => { card.color === 'red'? allRedCards.push(card) : 'card not found' });
console.log(allRedCards);

// - всі буби
let allDiamondCards = [];
cardsDeck.forEach(card => { card.suitCard === 'diamond'? allDiamondCards.push(card) : 'card not found' });
console.log(allDiamondCards);

// - всі трефи від 9 та більше
let clubsCardNineAndMore = [];
cardsDeck.forEach(card => { card.suitCard === 'clubs' && card.value >= '9'? clubsCardNineAndMore.push(card) : 'card not found' });
console.log(clubsCardNineAndMore);

console.log('----------10----------');
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
let newObject =  {
    spade:[],
    diamond:[],
    heart:[],
    clubs:[]
}

cardsDeck.forEach(card => {
    newObject[card.suitCard]? newObject[card.suitCard].push(card) : 'card not found';
})
console.log(newObject);

console.log('----------11----------');
// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
let searchCourseByModule = (moduleName) => {
    coursesArray.forEach(course => course.modules.some(value => value === moduleName)? console.log(course): 'not found');
}
searchCourseByModule('sass');
searchCourseByModule('docker');

