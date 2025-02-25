// =========================
//
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
//
//
//
//     створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.

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

let wrap = document.querySelector('.wrap');

let courses = document.createElement('div');
    courses.classList.add('courses');

for (let course of coursesArray) {
    const courseBloc = document.createElement('div');
        courseBloc.classList.add('course');

    const title = document.createElement('h4');
        title.textContent = course.title;

    const duration = document.createElement('div');
        duration.classList.add('duration');
    const monthDuration = document.createElement('span');
        monthDuration.textContent = `Month duration: ${course.monthDuration}`;
    const hourDuration = document.createElement('span');
        hourDuration.textContent = `Hour duration: ${course.hourDuration}`;

    duration.append(monthDuration, hourDuration);

    const modulesList = document.createElement('ul');
    for (let module of course.modules) {
        const li = document.createElement('li')
            li.textContent = module;
        modulesList.appendChild(li);
    }

    courseBloc.append(title, duration, modulesList);

    courses.appendChild(courseBloc);
}

wrap.appendChild(courses);
