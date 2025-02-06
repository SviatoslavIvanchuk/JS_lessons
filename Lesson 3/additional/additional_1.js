console.log('--------------------Additional 1------------------');
console.log('--------------------Part 1------------------');

// #WpkK0ZH1
// --створити масив з:
// - з 5 числових значень
// - з 5 стрічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// #4aDbSgh
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let numberArray = [4, 8, 15, 16, 23];
let stringArray = ['four', 'eight', 'fifteen', 'sixteen', 'twentythree'];
let mixArray = [true, 'five', 6, false, 'eleven'];
console.log(numberArray);
console.log(stringArray);
console.log(mixArray);

console.log('---------1--------');
// #qLQLJSeN7i
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let arrayTask2 = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
let i = 0;
while (i<arrayTask2.length) {
    console.log(arrayTask2[i]);
    i++;
}

console.log('---------2--------');
// 2. перебрати його циклом for
for (let i=0; i<arrayTask2.length; i++) {
    console.log(arrayTask2[i]);
}

console.log('---------3--------');
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let indexWhileTask3 = 1;
while (indexWhileTask3<arrayTask2.length) {
    console.log(arrayTask2[indexWhileTask3]);
    indexWhileTask3+=2;
}

console.log('---------4--------');
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i=1; i<arrayTask2.length; i+=2) {
    console.log(arrayTask2[i]);
}

console.log('--------5---------');
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let indexWhileTask5 = 0;
while (indexWhileTask5<arrayTask2.length) {
    if (arrayTask2[indexWhileTask5] % 2 === 0) {
        console.log(arrayTask2[indexWhileTask5]);
    }
    indexWhileTask5++;
}

console.log('--------6---------');
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i<arrayTask2.length; i++) {
    if (arrayTask2[i] % 2 === 0) {
        console.log(arrayTask2[i]);
    }
}

console.log('---------7--------');
// 7. замінити кожне число кратне 3 на слово "okten"
let oktenArray = arrayTask2.slice();
for (let i = 0; i < oktenArray.length; i++) {
    if (oktenArray[i] % 3 === 0) {
        oktenArray[i] = 'okten';
    }
    console.log(oktenArray[i])
}

console.log('---------8--------');
// 8. вивести масив в зворотньому порядку.
for ( let i = arrayTask2.length-1; i>=0; i--) {
    console.log(arrayTask2[i]);
}

console.log('--------9.1---------');
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1. перебрати його циклом while
let iTask9 = arrayTask2.length-1;
while (iTask9>=0) {
    console.log(arrayTask2[iTask9]);
    iTask9--;
}

console.log('--------9.2---------');
// 2. перебрати його циклом for
for (let i= arrayTask2.length-1; i>=0; i--) {
    console.log(arrayTask2[i]);
}

console.log('--------9.3---------');
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let arrayLastIndex = arrayTask2.length-1;
if (arrayLastIndex % 2 === 0) {
    while (arrayLastIndex-1 >= 0) {
        console.log(arrayTask2[arrayLastIndex]);
        arrayLastIndex-=2;
    }
} else {
    while (arrayLastIndex >= 0) {
        console.log(arrayTask2[arrayLastIndex]);
        arrayLastIndex-=2;
    }
}


console.log('---------9.4--------');
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
let arrayLastIndex9_4 = arrayTask2.length-1;
if (arrayLastIndex9_4 % 2 === 0) {
    for (let i = arrayLastIndex9_4-1; i>=0; i-=2) {
        console.log(arrayTask2[i]);
    }
} else {
    for (let i = arrayLastIndex9_4; i>=0; i-=2) {
        console.log(arrayTask2[i]);
    }
}

console.log('---------9.5--------');
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let arrayLastIndex9_5 = arrayTask2.length-1;
while (arrayLastIndex9_5>=0) {
    if (arrayTask2[arrayLastIndex9_5] % 2 === 0) {
        console.log(arrayTask2[arrayLastIndex9_5]);
    }
    arrayLastIndex9_5--;
}

console.log('---------9.6--------');
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = arrayTask2.length-1; i>=0; i--) {
    if (arrayTask2[i] % 2 === 0) {
        console.log(arrayTask2[i]);
    }
}

console.log('---------9.7--------');
// // 7. замінити кожне число кратне 3 на слово "okten"
let oktenArray9_7 = arrayTask2.slice();
for (let i = oktenArray9_7.length-1; i>=0; i--) {
    if (oktenArray9_7[i] % 3 === 0) {
        oktenArray9_7[i] = 'okten';
    }
    console.log(oktenArray9_7[i])
}



console.log('--------------------Part 2------------------');
// #yHAwJOyiC
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrayNumbers = [3, 1, 5, 7, 8, 10, 11, 6, 2, 15];
for (let number of arrayNumbers) {
    console.log(number);
}

console.log('-----------------');
//     #GamKju89ob
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arrayStrings = ['three', 'five', 'eleven', 'eight', 'nine', 'ten', 'four', 'two', 'one', 'zero'];
for (let string of arrayStrings) {
    console.log(string);
}

console.log('-----------------');
//     #Bm76xmg
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrayMixType = [true, 'one', 6, false, 'five', 10, 'four', 8, false, 'eleven'];
for (let value of arrayMixType) {
    console.log(value)
}

console.log('-----------------');
//     #u3vmD0YJXh
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// -  (буду брати масив із попереднього завдання)
for (let value of arrayMixType) {
    if (typeof value === 'boolean') {
        console.log(value);
    }
}

console.log('-----------------');
// #9stMq2ou
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let value of arrayMixType) {
    if (typeof value === 'number') {
        console.log(value);
    }
}

console.log('-----------------');
// #mK4pmM4
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let value of arrayMixType) {
    if (typeof value === 'string') {
        console.log(value);
    }
}

console.log('-----------------');
// #0pm3EyTKy9
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
for (let i = 0; i<arrayMixType.length; i++) {
    console.log(arrayMixType[i]);
}

console.log('-----------------');
//     #mDMWMW5a
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i<=10; i++) {
    console.log(i)
    document.write(`
        <div>${i} Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write</div>
    `)
}
document.write(`<hr>`)
console.log('-----------------');
// #4sXhaa5YMM
// - Створити цикл for на 20 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i<=20; i++) {
    console.log(i);
    document.write(`
    <div>${i} Створити цикл for на 20 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write</div>
    `)
}
document.write(`<hr>`)
console.log('-----------------');
// #s24slNyz7
// - Створити цикл for на 20 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i<=20; i+=2) {
    console.log(i);
    document.write(`
    <div>${i} Створити цикл for на 20 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write</div>
    `)
}

document.write(`<hr>`)
console.log('-----------------');
// #zananT5FR1
// - Створити цикл for на 20 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 2; i<=20; i+=2) {
    console.log(i);
    document.write(`
    <div>${i} Створити цикл for на 20 ітерацій. Вивести тільки парні кроки. через console.log + document.write</div>
    `)
}

document.write(`<hr>`)
console.log('-----------------');
// #Tfrwls7FM
// - Створити цикл for на 20 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 1; i<=20; i+=2) {
    console.log(i);
    document.write(`
    <div>${i} Створити цикл for на 20 ітерацій. Вивести тільки парні кроки. через console.log + document.write</div>
    `)
}

document.write(`<hr>`)
console.log('-----------------');


// #reLkOkTB29Q
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        title: 'Дебагінг: коли проблема зникає, щойно приходить тімлід',
        pageCount: 4,
        genre: ['самодопомога', 'Трилер', 'Жахи', 'Фентезі'],
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
    },
    {
        title: 'Git push — а потім let’s pray',
        pageCount: 12,
        genre: ['філософія', 'Пригодницька'],
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
    },
    {
        title: 'Топ-1000 багів, які я створив і навіть не підозрював',
        pageCount: 999,
        genre: ['гумор', 'Пригодницька', 'Роман', 'Фентезі'],
        authors: [
            {
                name: 'bot22',
                age: 24
            }

        ]
    }
];
// - знайти наібльшу книжку.
let biggestBook = books[0].title;
let maxPageCountBook = books[0].pageCount;
for (let book of books) {
    if (book.pageCount > maxPageCountBook) {
        maxPageCountBook = book.pageCount;
        biggestBook = book.title;
    }
}
console.log(biggestBook);

console.log('-----------------');
// - знайти книжку/ки з найбільшою кількістю жанрів
let moreGenresBook = [];
let maxCountGenres = books[0].genre.length;
for (let book of books) {
    if (book.genre.length > maxCountGenres) {
        maxCountGenres = book.genre.length;
        moreGenresBook = [book.title];
    } else if (book.genre.length === maxCountGenres) {
        moreGenresBook.push(book.title);
    }
}
console.log(moreGenresBook);

console.log('-----------------');
// - знайти книжку/ки з найдовшою назвою
let longsTitleBook = [];
let countTitleLetter = books[0].title.length;
for (let book of books) {
    if (book.title.length > countTitleLetter) {
        countTitleLetter = book.title.length;
        longsTitleBook = [book.title];
    } else if (book.title.length === countTitleLetter) {
        longsTitleBook.push(book.title);
    }
}
console.log(longsTitleBook);

console.log('-----------------');
// - знайти книжку/ки які писали 2 автори
let whatBooksHaveTwoAuthors = [];
for (let book of books) {
    if (book.authors.length === 2) {
        whatBooksHaveTwoAuthors.push(book.title);
    }
}
console.log(whatBooksHaveTwoAuthors);
console.log('-----------------');
// - знайти книжку/ки які писав 1 автор
let whatBooksHaveOneAuthor = [];
for (let book of books) {
    if (book.authors.length === 1) {
        whatBooksHaveOneAuthor.push(book.title);
    }
}
console.log(whatBooksHaveOneAuthor);
console.log('-----------------');