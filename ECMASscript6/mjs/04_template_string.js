let el = document.querySelector('#mContent');
el.style.color = 'blue';

/*
let name = 'TypeScript 123';
let price = 25;
// el.innerHTML =
// 	'<div>Cource name: <b>' +
// 	name +
// 	'</b>, price: <b style="color: red;">' +
// 	price +
// 	' USD</b></div>';

el.innerHTML = `<div>Cource name: <b>${name}</b>, price: <b style="color: red;">${price} USD</b></div>`;

*/

let todo = {
	id: 69,
	name: 'play football',
	status: false,
};

el.innerHTML = `<div id="todo-id-${todo.id}">
                  <i class="${todo.status == true ? 'hidden' : ''} glyphicon glyphicon-ok"></i>
                  <span class="name">${todo.name}</span>
                </div>`;
