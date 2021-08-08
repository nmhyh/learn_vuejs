/* ================= CASE 1 =================*/
/*let arr = [133, 'ES', false];

// let id = arr[0];
// let name = arr[1];
// let free = arr[2];

let [id, name, free] = arr;

console.log(id + ' - ' + name + ' - ' + free);
*/

/* ================= CASE 2 =================*/
let objCourse = {
	id: 456,
	name: 'ES6',
	free: false,
};

let { name, id, free, createdBy = 'Admin' } = objCourse;
console.log(id + ' - ' + name + ' - ' + free + ' - ' + createdBy);
