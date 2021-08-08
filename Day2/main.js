Vue.config.devtools = true;

// Index 1
// var vueInstance = new Vue({
// 	el: '#app',
// 	data: {
// 		counter: 0,
// 		clientX: 0,
// 		clientY: 0,
// 	},
// 	methods: {
// 		// Cach 1
// 		handleClick(e, number) {
// 			console.log('click', e.target);
// 			this.counter += number;
// 		},
// 		handleMouseMove(e) {
// 			console.log(e);
// 			this.clientX = e.clientX;
// 			this.clientY = e.clientY;
// 		},
// 	},
// });

//Index 2
// var vueInstance = new Vue({
// 	el: '#app',
// 	data: {
// 		counter: 0,
// 		clientX: 0,
// 		clientY: 0,
// 	},
// 	methods: {
// 		// Cach 1
// 		handleClick(e, number) {
// 			console.log('click', e.target);
// 			this.counter += number;
// 		},
// 		handleMouseMove(e) {
// 			console.log(e);
// 			this.clientX = e.clientX;
// 			this.clientY = e.clientY;
// 		},
// 		handleSubmitForm(e) {
// 			console.log(e);
// 			// e.preventDefault();
// 		},
// 		handleMouseMouseChild(e) {
// 			// e.stopPropagation();
// 			console.log('handleMouseMouseChild', e.target);
// 		},
// 	},
// });

// Index 3
// var vueInstance = new Vue({
// 	el: '#app',
// 	data: {
// 		message: 'Hello world',
// 		a: 0,
// 		b: 0,
// 		number: 20,
// 	},
// 	methods: {
// 		reversedMessageMethod: function () {
// 			// `this` trỏ tới đối tượng vm
// 			return this.message.split(' ').reverse().join(' ');
// 		},
// 		// addA() {
// 		// 	console.log('addA run');
// 		// 	return this.a + this.number;
// 		// },
// 		// addB() {
// 		// 	console.log('addB run');
// 		// 	return this.b + this.number;
// 		// },
// 	},
// 	computed: {
// 		// một computed getter
// 		// reversedMessageComputed: function () {
// 		// 	// `this` trỏ tới đối tượng vm
// 		// 	return this.message.split(' ').reverse().join(' ');
// 		// },
// 		addA() {
// 			console.log('addA run');
// 			return this.a + this.number;
// 		},
// 		addB() {
// 			console.log('addB run');
// 			return this.b + this.number;
// 		},
// 	},
// });

// Index 4
// var vueInstance = new Vue({
// 	el: '#app',
// 	data: {
// 		firstName: 'Nguyen',
// 		about: '',
// 	},
// 	methods: {
// 		// handleKeyUp(e) {
// 		// 	console.log(e.target.value);
// 		// 	this.firstName = e.target.value;
// 		// },
// 	},
// });

// Index 5
var vueInstance = new Vue({
	el: '#app',
	data: {
		firstName: 'Nguyen',
		about: '',
		textClass: 'active',
		isActive: false,
		isError: false,
	},
	methods: {
		changeActive() {
			this.isActive = !this.isActive;
		},
		changeError() {
			this.isError = !this.isError;
		},
	},
	computed: {
		objClass() {
			return {
				active: this.isActive,
				error: this.isError,
			};
		},
	},
});
