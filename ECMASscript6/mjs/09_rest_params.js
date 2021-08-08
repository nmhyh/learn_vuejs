// function caculate(action, x, y) {
// 	let result = 0;
// 	switch (action) {
// 		case '+':
// 			result = x + y;
// 			break;
// 		case '-':
// 			result = x - y;
// 			break;
// 	}
// 	return result;
// }

// console.log(caculate('-', 8, 3));

function caculate(action, ...values) {
	let result = 0;
	console.log(values);
	switch (action) {
		case '+':
			for (let value of values) result += value;
			break;
		case '-':
			result = values[0] * 2;
			for (let value of values) result -= value;
			break;
	}
	return result;
}
console.log(caculate('-', 8, 3, 3, 1, 2));
