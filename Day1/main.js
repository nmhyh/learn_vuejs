Vue.config.devtools = true;

// Index 1
// var vueInstance = new Vue({
// 	el: '#app',
// 	data: {
// 		title: 'Dien thoai sam sung',
// 	},
// 	methods: {
// 		say(text) {
// 			return 'Hello' + text;
// 		},
// 	},
// });
// // He thong phan ung. Reactivity
// console.log(vueInstance);

// setTimeout(() => {
// 	vueInstance.title = 'Dien thoai Oppo';
// }, 3000);

// Index 2
var vueInstance = new Vue({
	el: '#app',
	data: {
		title: 'Vớ cổ cao',
		url:
			'https://www.lazada.vn/products/set-10-doi-tat-meo-co-ngan-han-quoc-i705752696-s1761132336.html?spm=a2o4n.searchlist.list.10.f6808838b5Y6U7&search=1',
		target: '_blank',
		price: '12000',
	},
	methods: {
		formatPrice() {
			var number = this.price;

			return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
		},
	},
});
