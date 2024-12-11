// export default function formatCurrency(value) {
//     if (!value && value !== 0) return ''; // Tránh xử lý giá trị null hoặc undefined

//     const formatter = new Intl.NumberFormat('vi-VN', {
//       style: 'currency',
//       currency: 'VND',
//       minimumFractionDigits: 0, // Số lẻ tối thiểu
//     });

//     return formatter.format(value);
//   }


import Vue from 'vue'
// Vue.prototype.$formatCurrency(value) = () => {
//     if (!value && value !== 0) return ''; // Tránh xử lý giá trị null hoặc undefined

//     const formatter = new Intl.NumberFormat('vi-VN', {
//       style: 'currency',
//       currency: 'VND',
//       minimumFractionDigits: 0, // Số lẻ tối thiểu
//     });

//     return formatter.format(value);
// }

Vue.mixin({
	methods: {
	    formatCurrency(value) {
            if (!value && value !== 0) return 0; // Tránh xử lý giá trị null hoặc undefined

            const formatter = new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
              minimumFractionDigits: 0, // Số lẻ tối thiểu
            });

            return formatter.format(value);
        }
	}
})