// Масиви та об'єкти
// #67kfznmiMl
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = ['starwars', 6, false, 'C3PO', 23, 'venator', 'stardestroyer', 'R2D2', true, 'lightsaber'];
array.forEach(value => console.log(value))


// #LARqoUj5I
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let firstBook = {
    title: 'Програмування для чайників (і тих, хто знову забув закрити тег)',
    pageCount: 32,
    genre: 'самодопомога'
};
let secondBook = {
    title: 'Код, який працює. Але як?!',
    pageCount: 1,
    genre: ' філософія'
};
let thirdBook = {
    title: 'Як вижити після понеділка і не втратити сенс життя',
    pageCount: 26,
    genre: 'гумор'
};


//     #sA3Gg1sCp
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//  Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let fourthBook = {
    title: 'Дебагінг: коли проблема зникає, щойно приходить тімлід',
    pageCount: 4,
    genre: 'самодопомога',
    authors: [
        {
            name: 'bot1',
            age: 19
        },
        {
            name: 'bot2',
            age: 24
        }

    ]
};
let fifthBook = {
    title: 'Git push — а потім let’s pray',
    pageCount: 24,
    genre: ' філософія',
    authors: [
        {
            name: 'bot31',
            age: 22
        },
        {
            name: 'bot41',
            age: 28
        }

    ]
};
let sixthBook = {
    title: 'Топ-1000 багів, які я створив і навіть не підозрював',
    pageCount: 999,
    genre: 'гумор',
    authors: [
        {
            name: 'bot22',
            age: 24
        },
        {
            name: 'bot11',
            age: 26
        }

    ]
};


//     #jCHFnEbdmFd
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
//  Вивести в консоль пароль кожного користувача

let userArray = [
    {name: 'richard', username: 'king', password: 'password'},
    {name: 'bot', username: 'bot', password: '123'},
    {name: 'asus', username: 'apple', password: 'qwerty'},
    {name: 'bender', username: 'bear', password: '54321'},
    {name: 'Han', username: 'Solo', password: 'PaSsWoRd'},
    {name: 'Richy', username: 'ford', password: 'easy'},
    {name: 'Merlin', username: 'magic', password: 'LOL'},
    {name: 'Luke', username: 'blue', password: 'imYourFather'},
    {name: 'Anakin', username: 'Vader', password: 'dartVaderCool'},
    {name: 'Happy', username: 'Agent', password: 'passwordHere'}
]
userArray.forEach(value => console.log(value['password']));


// #coYydZuaeEB
//- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
//  Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
//  Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let weeklyTemperature = [
    {day: 'Понеділок', morning: 0, afternoon: 5, evening: 2},
    {day: 'Вівторок', morning: 2, afternoon: 2, evening: 4},
    {day: 'Середа', morning: -2, afternoon: 3, evening: 2},
    {day: 'Четвер', morning: -1, afternoon: 1, evening: 1},
    {day: 'П’ятниця', morning: 0, afternoon: 0, evening: 0},
    {day: 'Субота', morning: 3, afternoon: 4, evening: 2},
    {day: 'Неділя', morning: 2, afternoon: 1, evening: 3}
]


// Логічні розгалуження:
//
//#bAUsaq6LI
//- Є змінна х, якій ви надаєте довільне числове значення.
//  Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//  Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = -3;
let checkX = x !== 0 ? 'Вірно' : 'Невірно';
console.log(checkX)


// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
//   до якої четверті години попадає число
//   (в першу, другу, третю или четверту частину години).
let minuteTime = 50;
if (minuteTime > 0 && minuteTime <= 15) {
    console.log('I чверть');
} else if (minuteTime > 15 && minuteTime <= 30) {
    console.log('II чверть');
} else if (minuteTime > 30 && minuteTime <= 45) {
    console.log('III чверть');
} else if (minuteTime > 45 && minuteTime <= 59) {
    console.log('IV чверть')
} else {
    console.log('WTF O_o')
}


// #UMoNq4biWGe
//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
//   місяця потрапляє це число (у першу, другу чи третю).
let day = 12;
if (day > 0 && day <= 10) {
    console.log('I декада');
} else if (day > 10 && day <= 20) {
    console.log('II декада')
} else if (day > 20 && day <= 31) {
    console.log('III декада')
} else {
    console.log('WTF o_O')
}

// #KzrtqyQ
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
//      відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayNumber = 4;

switch (dayNumber) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Week has 7 days!!!')
}


// #uwsz1RnTQJ1
//- Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох .
//  Також потрібно врахувати коли введені рівні числа.
let aNumber = 21;
let bNumber = 21;

if (aNumber > bNumber) {
    console.log(aNumber)
} else if (aNumber < bNumber) {
    console.log(bNumber)
} else if (aNumber === bNumber) {
    console.log(aNumber + '=' + bNumber)
}


// #iBvqtjEm
//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//  Напишіть код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//  (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let xTwoTask = null;

xTwoTask = xTwoTask ? xTwoTask : xTwoTask = 'default';
console.log(xTwoTask)


// #awLXL6TBzg
//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//  За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за
//  5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.forEach(value => value.monthDuration > 5 ? console.log('Супер') : console.log('Не Супер'));