// Index 1
// var vueInstance = new Vue({
// 	el: '#app',
// 	data: {
// 		firstName: 'Nguyen',
// 		about: '',
// 		textClass: 'active',
// 		isActive: false,
// 		isError: false,

// 		activeColor: 'blue',
// 		fontSize: 20,
// 		bg:
// 			'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm21-stone-por-094.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=b13c3184d1e391d0e240d6620b75fbe0',
// 		google: 'google.com.vn/?hl=vi',
// 	},
// 	methods: {
// 		changeActive() {
// 			this.isActive = !this.isActive;
// 		},
// 		changeError() {
// 			this.isError = !this.isError;
// 		},
// 	},
// 	computed: {
// 		objClass() {
// 			return {
// 				active: this.isActive,
// 				error: this.isError,
// 			};
// 		},
// 		background() {
// 			return 'url(' + this.bg + ')';
// 		},
// 		objectStyle() {
// 			return {
// 				backgroundImage: 'url(' + this.bg + ')',
// 				margin: '10px',
// 				paddingLeft: '20px',
// 			};
// 		},
// 	},
// });

// Index 2
// var vueInstance = new Vue({
// 	el: '#app',
// 	data: {
// 		tabSelected: 'login',
// 	},
// 	methods: {
// 		changeTabs(tab) {
// 			this.tabSelected = tab;
// 		},
// 	},
// });

// Index 3
// var vueInstance = new Vue({
// 	el: '#app',
// 	data: {
// 		score: {
// 			math: 9.0,
// 			english: 7.5,
// 		},
// 		listBooks: [
// 			{
// 				name: '101 con đường tỷ đô',
// 				author: 'Nguyễn Văn Giàu',
// 				year: 2020,
// 				genre: 'Xạo ke',
// 				bestseller: false,
// 			},
// 			{
// 				name: 'Truyện Kiều',
// 				author: 'Nguyễn Du',
// 				year: 1953,
// 				genre: 'Thơ',
// 				bestseller: true,
// 			},
// 			{
// 				name: 'Tắt Đèn',
// 				author: 'Ngô Tất Tố',
// 				year: 1934,
// 				genre: 'Truyện',
// 				bestseller: false,
// 			},
// 			{
// 				name: 'Lão Hạt',
// 				author: 'Nam Cao',
// 				year: 1945,
// 				genre: 'Truyện',
// 				bestseller: false,
// 			},
// 			{
// 				name: '101 con đường tỷ đô',
// 				author: 'Nguyễn Văn Giàu',
// 				year: 2020,
// 				genre: 'Xạo ke',
// 				bestseller: false,
// 			},
// 			{
// 				name: 'Truyện Kiều',
// 				author: 'Nguyễn Du',
// 				year: 1953,
// 				genre: 'Thơ',
// 				bestseller: true,
// 			},
// 			{
// 				name: 'Tắt Đèn',
// 				author: 'Ngô Tất Tố',
// 				year: 1934,
// 				genre: 'Truyện',
// 				bestseller: false,
// 			},
// 			{
// 				name: 'Lão Hạt',
// 				author: 'Nam Cao',
// 				year: 1945,
// 				genre: 'Truyện',
// 				bestseller: false,
// 			},
// 			{
// 				name: '101 con đường tỷ đô',
// 				author: 'Nguyễn Văn Giàu',
// 				year: 2020,
// 				genre: 'Xạo ke',
// 				bestseller: false,
// 			},
// 			{
// 				name: 'Truyện Kiều',
// 				author: 'Nguyễn Du',
// 				year: 1953,
// 				genre: 'Thơ',
// 				bestseller: true,
// 			},
// 			{
// 				name: 'Tắt Đèn',
// 				author: 'Ngô Tất Tố',
// 				year: 1934,
// 				genre: 'Truyện',
// 				bestseller: false,
// 			},
// 			{
// 				name: 'Lão Hạt',
// 				author: 'Nam Cao',
// 				year: 1945,
// 				genre: 'Truyện',
// 				bestseller: false,
// 			},
// 		],
// 	},
// 	methods: {
// 		changeTabs(tab) {
// 			this.tabSelected = tab;
// 		},
// 	},
// });

// Index 4
// var vueInstance = new Vue({
// 	el: '#app',
// 	data: {
// 		arrayUser: [
// 			{ email: 'test1@gmail.com', isActive: false },
// 			{ email: 'test2@gmail.com', isActive: true },
// 			{ email: 'test3@gmail.com', isActive: false },
// 			{ email: 'test4@gmail.com', isActive: true },
// 			{ email: 'test5@gmail.com', isActive: false },
// 			{ email: 'test6@gmail.com', isActive: true },
// 		],
// 	},
// 	methods: {},
// 	computed: {
// 		userActive() {
// 			return this.arrayUser.filter(function (u) {
// 				return u.isActive;
// 			});
// 		},
// 	},
// });

// Index 5
var vueInstance = new Vue({
	el: '#app',
	data: {
		objScore: {
			math: 7.9,
		},
		arrNumber: [1, 2, 3, 4, 5, 6],
	},
});

Vue.config.devtools = true;
