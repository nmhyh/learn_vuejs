// ==================== Phan 1 ====================
function func01(name, age) {
	return `func01 My name is ${name}, ${age} years old`;
}

var func02 = function (name, age) {
	return `func02 My name is ${name}, ${age} years old`;
};

var func03 = (name, age) => {
	return `func03 My name is ${name}, ${age} years old`;
};

var func04 = (name, age) => `func04 My name is ${name}, ${age} years old`;

// var func05 = name => {
// 	return `func05 My name is ${name}`;
// };

var func06 = () => {
	return `func06 My name is ...`;
};

// console.log(func06());

// ==================== Phan 2 ====================
let courses = ['Android', 'Java', 'php', 'Angular'];

console.log(
	courses.map((course) => {
		return course.toUpperCase();
	}),
);

let scores = [9, 2, 5, 4, 1, 3, 8];
scores.sort((x, y) => x - y);

console.log('Mang tang dan: ' + scores);

let scores2 = [9, 2, 8, 6, 7, 5, 4, 2, 3];
scores2.sort((x, y) => y - x);
console.log('Mang giam dan: ' + scores2);
