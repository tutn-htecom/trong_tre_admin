import Vue from 'vue'
import Vue2Editor from 'vue2-editor'
// import 'mosha-vue-toastify/dist/style.css';

Vue.use(Vue2Editor)

import toastr from 'toastr'
toastr.options = {
    closeButton: true,
    debug: true,
    newestOnTop: true,
    progressBar: true,
    positionClass: 'toast-top-right',
    preventDuplicates: false,
    showDuration: '300',
    hideDuration: '1000',
    timeOut: '5000',
    extendedTimeOut: '5000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
}

