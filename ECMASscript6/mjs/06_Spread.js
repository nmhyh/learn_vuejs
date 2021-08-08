let courseWeb = ['PHP', 'Zend', 'WordPress'];
let courseMobile = ['Android', 'IOS'];

// let course = ['HTML', 'JQuery', courseWeb, 'Win Phone', courseMobile];
let course = ['HTML', 'JQuery', ...courseWeb, 'Win Phone', ...courseMobile];
// 'HTML', 'JQuery' -> 'php', 'Zend', 'WordPress' -> , 'Win Phone' -> 'Android', 'IOS'
console.log(course);
