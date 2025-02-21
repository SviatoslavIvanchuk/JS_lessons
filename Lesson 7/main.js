console.log('-------------1-------------');
// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
}

let users = [];

for (let i = 1; i <= 10; i++) {
    users.push(new User(
        i,
        `username${i}`,
        `surname${i}`,
        `user${i}@mail.com`,
        `000000000${i}`
    ))
}
console.log(users);

console.log('-------------2-------------');
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let evenIdUsers = users.filter(user => user.id % 2 === 0);
console.log(evenIdUsers);

console.log('-------------3-------------');
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let growthIdUsers = users.sort((user1, user2) => user1.id - user2.id);
console.log(growthIdUsers)

console.log('-------------4-------------');
// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clientList = [];

for (let i = 1; i <= 10; i++) {
    let orderCounter = Math.floor(Math.random() * 5) + 1;
    let orders = [];

    for (let l = 1; l <= orderCounter; l++) {
        orders.push(`order-${l}`);
    }

    clientList.push(new Client(
        i,
        `client${i}`,
        `surnameClient${i}`,
        `client${i}@mail.com`,
        `00000000-${i}`,
        orders
    ))
}
console.log(clientList);

console.log('-------------5-------------');
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedClientByOrderNumber = clientList.sort((client1, client2) => client1.order.length - client2.order.length);
console.log(sortedClientByOrderNumber);

console.log('-------------6-------------');
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, maker, year, maxSpeed, capacity) {
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.capacity = capacity;
}

Car.prototype.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
}

Car.prototype.info = function () {
    for (const key in this) {
        typeof this[key] != "function" ? console.log(`${key} - ${this[key]}`) : 'not found data';
    }
}

Car.prototype.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed += newSpeed;
}

Car.prototype.changeYear = function (newValue) {
    this.year = newValue;
}

Car.prototype.addDriver = function (driver) {
    this.driver = driver;
}

let car = new Car('Subaru', 'Japan', 2016, 220, 2.5);
car.drive();
car.info();
car.addDriver({name: "Lucky", age: 30, experience: "10 year" })
console.log(car);

console.log('-------------7-------------');
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class CarClass {
    constructor(model, maker, year, maxSpeed, engineVolume) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.driver = null;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    }

    info() {
        for (const key in this) {
            typeof this[key] != "function" ? console.log(`${key} - ${this[key]}`) : 'not found data';
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

// Приклад використання
const myCar = new CarClass("AUDI", "Germany", 2020, 250, 2.0);
myCar.drive();
myCar.info();
myCar.increaseMaxSpeed(20);
myCar.changeYear(2022);
myCar.addDriver({ name: "Іван", age: 30, experience: "10 років" });
myCar.info();

console.log('-------------8-------------');
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor (name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let girlsList = [];

class Prince {
    constructor (name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
    }
}
let prince = new Prince('Roni', 24, 32);
console.log(prince);

for (let i = 1; i <= 10; i++) {
    let randomAge = Math.floor(Math.random()*(22-18)+18);
    let randomFootSize = Math.floor(Math.random()*(42-34)+34);

    girlsList.push(new Cinderella(
        `${i}-girl`,
        `${randomAge}`,
        `${randomFootSize}`
    ))
}
let cinderella = girlsList[Math.floor(Math.random()*10+1)];
cinderella.footSize = '32';
console.log(girlsList);

for (let girl of girlsList) {
    if (girl.footSize === prince.shoeSize) {
        console.log(`Туфелька підійшла ${girl.name}. Принц знайшов свою попелюшку`);
    }
}

console.log('-------------9-------------');
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

console.log(numbers.myForEach((number, index) => console.log(`${index} - ${number}`) ));

Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

console.log(numbers.myFilter(num => num % 3 === 0 ));
