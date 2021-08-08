function showInfo(name = 'ES6', price = 20) {
	return `Course name: <b>${name}</b>, price: <b>${price}</b>`;
}
var dom = document.querySelector('#mContent');
dom.style.color = 'blue';
dom.innerHTML = showInfo();
