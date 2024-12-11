import axios from 'axios'
// import { createToast } from 'mosha-vue-toastify'
import toastr from 'toastr';

const domain = process.env.link_api + '/' ?? 'https://trongtre.top/'

const api = {
    async get(url, headers = {}) {
        try {
            const data = await axios.get(domain + url, { headers: headers })                        
            return data
        } catch (error) {
            // console.log(error)
            toastr.error('Đã có lỗi xảy ra');
            if(error?.response?.status == 401) {
                toastr.error(error?.response?.data?.message);
            }
            if(error?.response?.status == 500) {
                toastr.error(error?.response?.data?.message);
            }

            throw error
            // return e
        }
    },

    async post(url, formData = {}, headers = {}) {
        try {            
            const data = await axios.post(domain + url, formData, {
                headers: headers,
            })         
            console.log(111, data);
               
            return data
        } catch (error) {
            // console.log(error)
            if(error?.response?.status == 401) {
                toastr.error(error?.response?.data?.message);
            } else if (error?.response?.status == 500) {
                toastr.error(error?.response?.data?.message);
            } else if (error?.response?.status == 400) {
                toastr.error(error?.response?.data?.message);
            } else {
                toastr.error('Vui lòng nhập đủ thông tin 1');
            }
            // throw error
            // return e
        }
    },

    async put(url, data = {}, headers = {}) {
        try {
            let result = await axios.put(url, data, headers)

            return result
        } catch (e) {
            return e
        }
    },

    async delete(url, data = {}, headers = {}) {        
        try {
            let result = await axios.delete(domain + url, { headers: headers })

            if (result.data.status != 200) {
                createToast(result.data.message, {
                    type: 'danger',
                    transition: 'zoom',
                    showIcon: 'true',
                    hideProgressBar: 'false',
                    position: 'top-center',
                })
                return
            }

            return result
        } catch (e) {
            return e
        }
    },
}

export default api
