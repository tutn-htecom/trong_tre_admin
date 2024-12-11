<template>
    <div class="content-mp">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="6" lg="5" xl="4">
                <div class="w-100 teacher-changer-password">
                    <div class="card-vip">
                        <div class="card-vip-title">
                            <span class="span-1">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="10" fill="#FFB761" fill-opacity="0.25" />
                                    <path
                                        d="M10.5249 12.8143H10.9799C11.4349 12.8143 11.8129 12.4083 11.8129 11.9183C11.8129 11.3093 11.5959 11.1903 11.2389 11.0643L10.5319 10.8193V12.8143H10.5249Z"
                                        fill="#FFA02F" />
                                    <path
                                        d="M9.979 3.00001C6.11503 3.01401 2.98605 6.157 3.00005 10.021C3.01405 13.885 6.15703 17.014 10.021 17C13.885 16.986 17.014 13.843 17 9.97898C16.986 6.115 13.843 2.99301 9.979 3.00001ZM11.582 10.07C12.128 10.259 12.863 10.665 12.863 11.918C12.863 12.996 12.016 13.864 10.98 13.864H10.525V14.27C10.525 14.557 10.287 14.795 10 14.795C9.713 14.795 9.475 14.557 9.475 14.27V13.864H9.22301C8.07501 13.864 7.14402 12.898 7.14402 11.708C7.14402 11.421 7.38202 11.183 7.66902 11.183C7.95601 11.183 8.19401 11.421 8.19401 11.708C8.19401 12.317 8.65601 12.814 9.22301 12.814H9.475V10.448L8.41801 10.07C7.87201 9.88098 7.13702 9.47498 7.13702 8.22199C7.13702 7.14399 7.98401 6.276 9.02001 6.276H9.475V5.87C9.475 5.583 9.713 5.345 10 5.345C10.287 5.345 10.525 5.583 10.525 5.87V6.276H10.777C11.925 6.276 12.856 7.24199 12.856 8.43199C12.856 8.71899 12.618 8.95699 12.331 8.95699C12.044 8.95699 11.806 8.71899 11.806 8.43199C11.806 7.82299 11.344 7.32599 10.777 7.32599H10.525V9.69198L11.582 10.07Z"
                                        fill="#FFA02F" />
                                    <path
                                        d="M8.19397 8.22917C8.19397 8.83817 8.41097 8.95717 8.76797 9.08316L9.47496 9.32816V7.32617H9.01996C8.56497 7.32617 8.19397 7.73217 8.19397 8.22917Z"
                                        fill="#FFA02F" />
                                </svg>
                                <span class="mt-1">Số tiền đang có</span>
                            </span>
                            <strong class="span-2">
                                {{ formatCurrency(data?.vi_dien_tu) }}
                            </strong>
                        </div>

                        <div class="card-vip-content">
                            <div class="d-flex align-items-center">
                                <div class="me-2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="10" fill="#00C092" fill-opacity="0.25" />
                                        <path
                                            d="M15.8333 13.0833V14.8333H4.16663V13.0833C4.16663 12.7625 4.42913 12.5 4.74996 12.5H15.25C15.5708 12.5 15.8333 12.7625 15.8333 13.0833Z"
                                            fill="#00C092" stroke="#00C092" stroke-width="1.5" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.08329 8.41699H5.91663V12.5003H7.08329V8.41699Z" fill="#00C092" />
                                        <path d="M9.41667 8.41699H8.25V12.5003H9.41667V8.41699Z" fill="#00C092" />
                                        <path d="M11.75 8.41699H10.5834V12.5003H11.75V8.41699Z" fill="#00C092" />
                                        <path d="M14.0833 8.41699H12.9166V12.5003H14.0833V8.41699Z" fill="#00C092" />
                                        <path
                                            d="M16.4167 15.2705H3.58337C3.34421 15.2705 3.14587 15.0722 3.14587 14.833C3.14587 14.5938 3.34421 14.3955 3.58337 14.3955H16.4167C16.6559 14.3955 16.8542 14.5938 16.8542 14.833C16.8542 15.0722 16.6559 15.2705 16.4167 15.2705Z"
                                            fill="#00C092" />
                                        <path
                                            d="M15.4658 5.35375L10.2158 3.25375C10.0991 3.20708 9.90079 3.20708 9.78413 3.25375L4.53413 5.35375C4.32996 5.43542 4.16663 5.67458 4.16663 5.89625V7.83292C4.16663 8.15375 4.42913 8.41625 4.74996 8.41625H15.25C15.5708 8.41625 15.8333 8.15375 15.8333 7.83292V5.89625C15.8333 5.67458 15.67 5.43542 15.4658 5.35375ZM9.99996 6.95792C9.51579 6.95792 9.12496 6.56708 9.12496 6.08292C9.12496 5.59875 9.51579 5.20792 9.99996 5.20792C10.4841 5.20792 10.875 5.59875 10.875 6.08292C10.875 6.56708 10.4841 6.95792 9.99996 6.95792Z"
                                            fill="#00C092" />
                                    </svg>
                                </div>

                                <div>
                                    <div class="mb-2">Thông tin ngân hàng</div>
                                    <div>{{ data?.hoten }}
                                    </div>
                                    <div>{{ data?.so_tai_khoan }} • {{ data?.ten_ngan_hang ?? 'Chưa cập nhật ngân hàng'
                                        }}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <svg width="21" height="14" viewBox="0 0 21 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.24596 7.6113C1.11902 7.42646 1.05555 7.33404 1.02002 7.1915C0.993328 7.08443 0.993328 6.91557 1.02002 6.8085C1.05555 6.66596 1.11902 6.57354 1.24596 6.3887C2.29496 4.86129 5.41741 1 10.1758 1C14.9343 1 18.0567 4.86129 19.1057 6.3887C19.2327 6.57354 19.2961 6.66596 19.3317 6.8085C19.3584 6.91557 19.3584 7.08443 19.3317 7.1915C19.2961 7.33404 19.2327 7.42646 19.1057 7.6113C18.0567 9.13871 14.9343 13 10.1758 13C5.41741 13 2.29496 9.13871 1.24596 7.6113Z"
                                        stroke="white" stroke-width="1.3" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10.1758 9.57143C11.7202 9.57143 12.9722 8.42016 12.9722 7C12.9722 5.57984 11.7202 4.42857 10.1758 4.42857C8.63147 4.42857 7.37951 5.57984 7.37951 7C7.37951 8.42016 8.63147 9.57143 10.1758 9.57143Z"
                                        stroke="white" stroke-width="1.3" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div class="wave">
                            <svg width="226" height="140" viewBox="0 0 226 140" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M121.856 201.785C116.121 201.297 108.492 197.922 100.64 195.235C80.6529 188.407 59.6128 190.717 38.2137 195.18C19.7896 199.023 1.32676 200.404 -16.0111 196.21C-38.5092 190.771 -52.9117 174.999 -56.3035 150.2C-59.7548 125.034 -48.0927 104.047 -28.1202 87.9207C-5.59456 69.7323 18.8901 70.6735 39.752 89.3602C43.5863 92.7919 47.4679 96.1624 51.2291 99.6741C66.2453 113.67 84.836 114.927 105.177 109.814C117.691 106.664 130.119 102.693 142.818 102.676C173.48 102.622 189.778 124.326 186.706 157.138C186.062 164.05 184.746 170.942 181.869 177.516C174.948 193.314 162.745 200.066 148.137 202.589C140.087 203.973 132.337 203.309 121.866 201.786L121.856 201.785Z"
                                    fill="white" fill-opacity="0.15" />
                                <path
                                    d="M115.987 212.895C110.403 212.476 102.976 209.198 95.3307 206.61C75.8718 200.032 55.3813 202.586 34.5398 207.292C16.5958 211.345 -1.38432 212.941 -18.2653 208.96C-40.1704 203.799 -54.1854 188.229 -57.472 163.522C-60.8163 138.449 -49.4459 117.368 -29.9859 101.04C-8.0383 82.6237 15.8043 83.2739 36.1075 101.675C39.8391 105.054 43.6168 108.372 47.2771 111.832C61.8909 125.621 79.9937 126.656 99.8056 121.314C111.994 118.023 124.099 113.913 136.465 113.746C166.324 113.331 182.18 134.796 179.167 167.576C178.535 174.482 177.25 181.375 174.444 187.968C167.693 203.815 155.806 210.698 141.578 213.387C133.739 214.864 126.192 214.293 115.996 212.897L115.987 212.895Z"
                                    fill="white" fill-opacity="0.1" />
                            </svg>

                        </div>
                    </div>

                    <div class="input">
                        <p class="rechange-p pb-2 m-0">
                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.93457 0H3.43457C1.48457 0 0.18457 0.970588 0.18457 3.23529V7.76471C0.18457 10.0294 1.48457 11 3.43457 11H9.93457C11.8846 11 13.1846 10.0294 13.1846 7.76471V3.23529C13.1846 0.970588 11.8846 0 9.93457 0ZM2.94707 7.11765C2.94707 7.38294 2.72607 7.60294 2.45957 7.60294C2.19307 7.60294 1.97207 7.38294 1.97207 7.11765V3.88235C1.97207 3.61706 2.19307 3.39706 2.45957 3.39706C2.72607 3.39706 2.94707 3.61706 2.94707 3.88235V7.11765ZM6.68457 7.44118C5.60557 7.44118 4.73457 6.57412 4.73457 5.5C4.73457 4.42588 5.60557 3.55882 6.68457 3.55882C7.76357 3.55882 8.63457 4.42588 8.63457 5.5C8.63457 6.57412 7.76357 7.44118 6.68457 7.44118ZM11.3971 7.11765C11.3971 7.38294 11.1761 7.60294 10.9096 7.60294C10.6431 7.60294 10.4221 7.38294 10.4221 7.11765V3.88235C10.4221 3.61706 10.6431 3.39706 10.9096 3.39706C11.1761 3.39706 11.3971 3.61706 11.3971 3.88235V7.11765Z"
                                    fill="#FC4D32" />
                            </svg>
                            Số tiền cần nạp (Đơn vị đồng)
                        </p>
                        <input v-model="so_tien" type="number" class="form-control input-text"
                            placeholder="Nhập số tiền" />
                    </div>

                    <div class="input">
                        <p class="rechange-p pb-2 m-0">
                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.93457 0H3.43457C1.48457 0 0.18457 0.970588 0.18457 3.23529V7.76471C0.18457 10.0294 1.48457 11 3.43457 11H9.93457C11.8846 11 13.1846 10.0294 13.1846 7.76471V3.23529C13.1846 0.970588 11.8846 0 9.93457 0ZM2.94707 7.11765C2.94707 7.38294 2.72607 7.60294 2.45957 7.60294C2.19307 7.60294 1.97207 7.38294 1.97207 7.11765V3.88235C1.97207 3.61706 2.19307 3.39706 2.45957 3.39706C2.72607 3.39706 2.94707 3.61706 2.94707 3.88235V7.11765ZM6.68457 7.44118C5.60557 7.44118 4.73457 6.57412 4.73457 5.5C4.73457 4.42588 5.60557 3.55882 6.68457 3.55882C7.76357 3.55882 8.63457 4.42588 8.63457 5.5C8.63457 6.57412 7.76357 7.44118 6.68457 7.44118ZM11.3971 7.11765C11.3971 7.38294 11.1761 7.60294 10.9096 7.60294C10.6431 7.60294 10.4221 7.38294 10.4221 7.11765V3.88235C10.4221 3.61706 10.6431 3.39706 10.9096 3.39706C11.1761 3.39706 11.3971 3.61706 11.3971 3.88235V7.11765Z"
                                    fill="#FC4D32" />
                            </svg>
                            Ngày tháng
                        </p>
                        <input v-model="ngay_nhap" type="date" class="form-control input-text"
                            placeholder="Nhập" />
                    </div>

                    <div class="input">
                        <p class="rechange-p pb-2 m-0">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.4 0H3.6C1.2 0 0 1.2 0 3.6V11.4C0 11.73 0.27 12 0.6 12H8.4C10.8 12 12 10.8 12 8.4V3.6C12 1.2 10.8 0 8.4 0ZM5.466 8.796C5.316 8.946 5.04 9.084 4.836 9.114L3.588 9.288C3.54 9.294 3.492 9.3 3.45 9.3C3.24 9.3 3.048 9.228 2.91 9.09C2.742 8.922 2.67 8.676 2.712 8.412L2.886 7.164C2.916 6.96 3.054 6.678 3.204 6.534L5.466 4.272C5.502 4.38 5.55 4.488 5.604 4.608C5.658 4.716 5.712 4.824 5.772 4.926C5.82 5.01 5.874 5.094 5.922 5.154C5.982 5.244 6.042 5.322 6.084 5.364C6.108 5.4 6.132 5.424 6.138 5.436C6.27 5.586 6.408 5.73 6.54 5.838C6.576 5.874 6.6 5.892 6.606 5.898C6.684 5.958 6.756 6.024 6.828 6.066C6.906 6.126 6.99 6.18 7.074 6.228C7.176 6.288 7.284 6.348 7.398 6.402C7.512 6.456 7.62 6.498 7.728 6.534L5.466 8.796ZM8.73 5.538L8.262 6.006C8.232 6.036 8.19 6.054 8.148 6.054C8.136 6.054 8.112 6.054 8.1 6.048C7.068 5.754 6.246 4.932 5.952 3.9C5.934 3.846 5.952 3.786 5.994 3.744L6.468 3.27C7.242 2.496 7.974 2.514 8.73 3.27C9.114 3.654 9.306 4.026 9.3 4.41C9.3 4.788 9.114 5.154 8.73 5.538Z"
                                    fill="#FFB761" />
                            </svg>
                            Số tiền cần nạp (Đơn vị đồng)
                        </p>
                        <textarea v-model="ghi_chu" class="form-control textarea" placeholder="Nhập ghi chú"></textarea>
                    </div>

                    <div class="d-flex w-100">
                        <button class="btn btn-min" v-b-modal.my-modal-tru>Trừ tiền</button>
                        <b-modal id="my-modal-tru" ref="my-modal-tru" hide-footer centered title="Trừ tiền">
                            <template #default="{ hide }">
                                <form id="form">

                                    <div class="">
                                        <div>
                                            <b-form-group>
                                                <label>Loại trừ tiền:</label>
                                                <b-form-select v-model="tru_tien_id" :options="tru_tien"
                                                    aria-placeholder="Chọn"></b-form-select>
                                            </b-form-group>
                                        </div>

                                    </div>
                                    <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                        <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                        <button class=" btn-delete ms-1" type="button" @click="tru()">Xác nhận</button>
                                    </div>
                                </form>

                            </template>
                        </b-modal>

                        <button class="btn btn-plus" v-b-modal.my-modal-nap>Nạp tiền</button>
                        <b-modal id="my-modal-nap" ref="my-modal-nap" hide-footer centered title="Nạp tiền">
                            <template #default="{ hide }">
                                <form id="form">

                                    <div class="">
                                        <div>
                                            <b-form-group>
                                                <label>Loại nạp:</label>
                                                <b-form-select v-model="nap_tien_id" :options="nap_tien"
                                                    aria-placeholder="Chọn"></b-form-select>
                                            </b-form-group>
                                        </div>

                                    </div>
                                    <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                        <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                        <button class=" btn-delete ms-1" type="button" @click="nap()">Xác nhận</button>
                                    </div>
                                </form>

                            </template>
                        </b-modal>


                    </div>
                    <div class="w-100">
                        <nuxt-link :to="'/admin/users/teachers/'+this.id+'/recharge/history'"
                            class="w-100 btn btn-primary rounded-pill text-light mt-3">Lịch sử giao
                            dịch</nuxt-link>
                    </div>
                </div>

            </v-col>
        </v-row>
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Nạp/ Trừ tiền',
                previous: '/admin/users/teachers/' + this.id ?? 0
            },
            tru_tien_id: null,
            tru_tien: null,
            nap_tien_id: null,
            nap_tien: null,
            so_tien: null,
            ghi_chu: null,
            data: null,
            ngay_nhap: null,
        };
    },
    validate({ params }) {
        return /^\d+$/.test(params.id);
    },
    computed: {
        id() {
            console.log(this.$route.params.id)
            return this.$route.params.id
        },
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key;
        },
    },
    methods: {
        async load_role() {
            await api.get('giao-vien/get-vi?giao_vien_id=' + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.data = res?.data?.data
            })

            await api.get('giao-vien/loai-giao-dich-tru-tien', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.tru_tien = res?.data?.data.map(item => {
                    return {
                        value: item.id,
                        text: item.name
                    };
                })
                this.tru_tien_id = this.tru_tien[0].value
            })

            await api.get('giao-vien/loai-giao-dich-nap-tien', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.nap_tien = res?.data?.data.map(item => {
                    return {
                        value: item.id,
                        text: item.name
                    };
                })
                this.nap_tien_id = this.nap_tien[0].value
            })
        },
        async nap(event) {
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('so_tien', this.so_tien)
            formData.append('ghi_chu', this.ghi_chu)
            formData.append('type_id', this.nap_tien_id)
            formData.append('ngay_nhap', this.ngay_nhap)

            await api.post('giao-vien/nap-tien', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-nap'].hide()
                    // this.$router.push('/admin/users/teachers/' + this.id ?? 0);
                }
            })
        },
        async tru(event) {
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('so_tien', this.so_tien)
            formData.append('ghi_chu', this.ghi_chu)
            formData.append('type_id', this.tru_tien_id)
            formData.append('ngay_nhap', this.ngay_nhap)

            await api.post('giao-vien/rut-tien', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-tru'].hide()
                    // this.$router.push('/admin/users/teachers/' + this.id ?? 0);
                }
            })
        }
    },
    mounted() {
        this.title.previous = '/admin/users/teachers/' + this.id ?? 0
        this.$store.dispatch('title/set_title', this.title);
        this.load_role()
    },
}
</script>

<style lang="scss" scoped>
.web-b {
    color: #2d2d2d;
    font-family: SVN-Gilroy;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    span {
        color: #0056b1;
        font-family: SVN-Gilroy;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
}

.input-text {
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    background: #fff;
    color: rgba(45, 45, 45, 0.6);
    font-family: SVN-Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 16px 18px;
    width: 100%;
}

.textarea {
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    background: #fff;
    width: 100%;
    height: 94px;
    padding: 16px 18px;
    flex-shrink: 0;
}

.btn-min {
    border-radius: 50px;
    background: #fc4d32;
    display: flex;
    // width: 173px;
    height: 48px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1;
    flex-shrink: 0;
    color: #fff;
    text-align: center;
    font-family: SVN-Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    margin-right: 5px;
}

.btn-plus {
    flex: 1;
    border-radius: 50px;
    background: #00c092;
    display: flex;
    // width: 173px;
    height: 48px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    color: #fff;
    text-align: center;
    font-family: SVN-Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    margin-left: 5px;
}

.card-vip-content {
    position: relative;
    z-index: 10;
    width: 100%;
    padding: 15px 15px 10px 15px;
    display: flex;
    justify-content: space-between;

    div {
        color: white;
        color: #FFF;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
}

.card-vip {
    border-radius: 15px;
    background: linear-gradient(180deg, #0056B1 -6.3%, #4EAEEA 230.71%);
    height: 137px;
    margin: 20px 0;
    position: relative;

    .wave {
        position: absolute;
        bottom: -12px;
        left: -23px;
        transform: rotate(8deg);
    }

    .card-vip-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 15px 15px 10px 15px;
        border-bottom: 1px dotted #a7a4a4;

        .span-1 {
            color: #FFF;
            font-family: SVN-Gilroy;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }

        .span-2 {
            color: #FFB761;
            text-align: right;
            font-family: SVN-Gilroy;
            font-size: 19px;
            font-style: normal;
            font-weight: 900;
            line-height: normal;
        }
    }
}

.rechange-p {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
</style>