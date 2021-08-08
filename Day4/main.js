// Index 1

var vueInstance = new Vue({
	el: '#app',
	data: {
		title: 'Vớ cổ cao',
		url:
			'https://www.lazada.vn/products/tat-nu-co-cao-hoa-tiet-hoa-qua-tn56-i904668309-s2640320104.html?spm=a2o4n.searchlist.list.132.abc08838x1DICA&search=1',
		target: '_blank',
		price: '20000',
		sale: 0.5,
		cart: 0,
		selectedProduct: 1,
		listProductDetail: [
			{
				image: './image/sock_blue.jpeg',
				quantity: 0,
				textColor: 'Màu xanh dương',
			},
			{
				image: './image/sock_green.jpeg',
				quantity: 2,
				textColor: 'Màu xanh lá',
			},
		],
		desc:
			'<li>Thiết kế tinh tế cực kỳ đáng yêu, trẻ trung, năng động và đặc biệt rất thời trang</li> <li>Tất mỏng thoáng, phần chun mảnh không gây hằn, đau khi sử dụng</li><li>Chất liệu 100% cotton giúp khử mùi kháng khuẩn rất tốt</li><li>Chất liệu vải mềm, nhẹ, co giãn 4 chiều, thấm hút mồ hơi cực tốt</li><li>Đặc biệt sản phẩm rất dề phối đồ cho các bạn nữ</li>',
	},
	methods: {
		handleClickColor(index) {
			this.selectedProduct = index;
		},
		classActive(index) {
			return {
				active: this.selectedProduct == index,
			};
		},
		handleAddTocart(e) {
			if (this.cart + 1 > this.getProduct.quantity) {
				alert('Số lượng sản phẩm không đủ');
			} else {
				this.cart = this.cart + 1;
			}
			console.log(e.target);
		},
	},
	computed: {
		formatOrinalPrice() {
			var number = this.price;

			return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
		},
		formatFinalPrice() {
			var number = this.price - this.sale * this.price;
			return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
		},
		getProduct() {
			let index = this.selectedProduct;
			return this.listProductDetail[index];
		},
	},
});

Vue.config.devtools = true;
