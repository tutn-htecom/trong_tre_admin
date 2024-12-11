<template>
    <div class="content-mp complain-detail">
        <div class="d-flex align-items-center justify-content-between wmt-27">
            <title-header>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#0056B1" fill-opacity="0.2" />
                    <path
                        d="M15.6692 14.1312C16.1782 13.7945 16.8466 14.1618 16.8466 14.774V15.7611C16.8466 16.733 16.0946 17.7737 15.1907 18.0798L12.7676 18.891C12.3423 19.0363 11.651 19.0363 11.2333 18.891L8.81019 18.0798C7.89869 17.7737 7.1543 16.733 7.1543 15.7611V14.7663C7.1543 14.1618 7.82273 13.7945 8.32406 14.1235L9.8888 15.1489C10.4889 15.5545 11.2485 15.7535 12.008 15.7535C12.7676 15.7535 13.5272 15.5545 14.1273 15.1489L15.6692 14.1312Z"
                        fill="#0056B1" />
                    <path
                        d="M17.9452 8.13048L13.4882 5.37355C12.6845 4.87548 11.3601 4.87548 10.5565 5.37355L6.07706 8.13048C4.64098 9.00737 4.64098 10.9926 6.07706 11.8765L7.2676 12.6061L10.5565 14.6264C11.3601 15.1245 12.6845 15.1245 13.4882 14.6264L16.7547 12.6061L17.7741 11.9747V14.1214C17.7741 14.409 18.0271 14.6475 18.3321 14.6475C18.6372 14.6475 18.8902 14.409 18.8902 14.1214V10.6699C19.1878 9.76499 18.8828 8.71273 17.9452 8.13048Z"
                        fill="#0056B1" />
                </svg>

                <span class="ms-1">
                    Thông tin lịch dùng giáo cụ
                </span>
            </title-header>
        </div>

        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="8" lg="6" xl="6">
                <b-card style="min-width: 245px;" class="">
                    <div class="block w-100 teachers teacher-detail">
                        <div class="w-100">
                            <div class="d-flex align-items-center card-body-p-16 mb-4">
                                <div class="d-flex align-items-center ">
                                    <div class="me-2 layout-user-complain">
                                        <img :src="data?.giaoVien?.anh_nguoi_dung" alt="">
                                    </div>
                                    <div>
                                        <h3 class="user-name">
                                            {{ data?.giaoVien?.hoten }}
                                        </h3>
                                        <p class="w-p p-0 m-0">
                                            Giáo viên
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="card-body-p-16 w-100 pt-0 mb-4">

                                <table class="w-100">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="span1" style="min-width: 94px;">
                                                    <span class="me-2">
                                                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="0.5" y="0.5" width="11" height="13" rx="2.5"
                                                                fill="#FC4D32" stroke="#FC4D32" />
                                                            <path d="M9 10H3" stroke="white" />
                                                        </svg>
                                                    </span>
                                                    <span class="p">
                                                        Điện thoại
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="w-100 p-text">
                                                    {{ data?.giaoVien?.dien_thoai }}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="span1" style="min-width: 94px;">
                                                    <span class="me-2">
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M6 0C2.694 0 0 2.694 0 6C0 9.306 2.694 12 6 12C9.306 12 12 9.306 12 6C12 2.694 9.306 0 6 0ZM8.61 8.142C8.526 8.286 8.376 8.364 8.22 8.364C8.142 8.364 8.064 8.346 7.992 8.298L6.132 7.188C5.67 6.912 5.328 6.306 5.328 5.772V3.312C5.328 3.066 5.532 2.862 5.778 2.862C6.024 2.862 6.228 3.066 6.228 3.312V5.772C6.228 5.988 6.408 6.306 6.594 6.414L8.454 7.524C8.67 7.65 8.742 7.926 8.61 8.142Z"
                                                                fill="#FFB761" />
                                                        </svg>

                                                    </span>
                                                    <span class="p">
                                                        Thời gian
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="w-100 p-text">
                                                    {{ data?.ngay_nhan }}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="span1" style="min-width: 94px;">
                                                    <span class="me-2">
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M11.0887 3.85635L8.14509 0.908632C7.52778 0.290456 6.67655 -0.0414065 5.80582 0.00414328L2.55684 0.160314C1.25725 0.218878 0.224075 1.25351 0.159095 2.54842L0.00314402 5.80198C-0.0358437 6.67393 0.289054 7.52636 0.90636 8.14454L3.84994 11.0923C5.05856 12.3026 7.02094 12.3026 8.23606 11.0923L11.0887 8.23564C12.3038 7.03182 12.3038 5.06667 11.0887 3.85635ZM4.37627 6.25097C3.34309 6.25097 2.50486 5.41155 2.50486 4.37692C2.50486 3.34229 3.34309 2.50287 4.37627 2.50287C5.40945 2.50287 6.24768 3.34229 6.24768 4.37692C6.24768 5.41155 5.40945 6.25097 4.37627 6.25097Z"
                                                                fill="#4EAEEA" />
                                                        </svg>

                                                    </span>
                                                    <span class="p">
                                                        Số Seri
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="w-100 p-text">
                                                    {{ data?.codeGiaoCu ?? 'Chưa cập nhật' }}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="span1" style="min-width: 94px;">
                                                    <span class="me-2">
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M6 0C2.694 0 0 2.694 0 6C0 9.306 2.694 12 6 12C9.306 12 12 9.306 12 6C12 2.694 9.306 0 6 0ZM8.61 8.142C8.526 8.286 8.376 8.364 8.22 8.364C8.142 8.364 8.064 8.346 7.992 8.298L6.132 7.188C5.67 6.912 5.328 6.306 5.328 5.772V3.312C5.328 3.066 5.532 2.862 5.778 2.862C6.024 2.862 6.228 3.066 6.228 3.312V5.772C6.228 5.988 6.408 6.306 6.594 6.414L8.454 7.524C8.67 7.65 8.742 7.926 8.61 8.142Z"
                                                                fill="#00C092" />
                                                        </svg>

                                                    </span>
                                                    <span class="p">
                                                        Ngày trả
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="w-100 p-text">
                                                    {{ data?.ngay_tra ?? 'Chưa cập nhật' }}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="span1" style="min-width: 94px;">
                                                    <span class="me-2">
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M8.4 0H3.6C1.2 0 0 1.2 0 3.6V11.4C0 11.73 0.27 12 0.6 12H8.4C10.8 12 12 10.8 12 8.4V3.6C12 1.2 10.8 0 8.4 0ZM5.466 8.796C5.316 8.946 5.04 9.084 4.836 9.114L3.588 9.288C3.54 9.294 3.492 9.3 3.45 9.3C3.24 9.3 3.048 9.228 2.91 9.09C2.742 8.922 2.67 8.676 2.712 8.412L2.886 7.164C2.916 6.96 3.054 6.678 3.204 6.534L5.466 4.272C5.502 4.38 5.55 4.488 5.604 4.608C5.658 4.716 5.712 4.824 5.772 4.926C5.82 5.01 5.874 5.094 5.922 5.154C5.982 5.244 6.042 5.322 6.084 5.364C6.108 5.4 6.132 5.424 6.138 5.436C6.27 5.586 6.408 5.73 6.54 5.838C6.576 5.874 6.6 5.892 6.606 5.898C6.684 5.958 6.756 6.024 6.828 6.066C6.906 6.126 6.99 6.18 7.074 6.228C7.176 6.288 7.284 6.348 7.398 6.402C7.512 6.456 7.62 6.498 7.728 6.534L5.466 8.796ZM8.73 5.538L8.262 6.006C8.232 6.036 8.19 6.054 8.148 6.054C8.136 6.054 8.112 6.054 8.1 6.048C7.068 5.754 6.246 4.932 5.952 3.9C5.934 3.846 5.952 3.786 5.994 3.744L6.468 3.27C7.242 2.496 7.974 2.514 8.73 3.27C9.114 3.654 9.306 4.026 9.3 4.41C9.3 4.788 9.114 5.154 8.73 5.538Z"
                                                                fill="#0056B1" />
                                                        </svg>

                                                    </span>
                                                    <span class="p">
                                                        Ghi chú
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="w-100 p-text">
                                                    {{ data?.ghi_chu ?? 'Chưa cập nhật' }}
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div class="span1" style="min-width: 94px;">
                                                    <span class="me-2">
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M8.4 0H3.6C1.2 0 0 1.2 0 3.6V11.4C0 11.73 0.27 12 0.6 12H8.4C10.8 12 12 10.8 12 8.4V3.6C12 1.2 10.8 0 8.4 0ZM5.466 8.796C5.316 8.946 5.04 9.084 4.836 9.114L3.588 9.288C3.54 9.294 3.492 9.3 3.45 9.3C3.24 9.3 3.048 9.228 2.91 9.09C2.742 8.922 2.67 8.676 2.712 8.412L2.886 7.164C2.916 6.96 3.054 6.678 3.204 6.534L5.466 4.272C5.502 4.38 5.55 4.488 5.604 4.608C5.658 4.716 5.712 4.824 5.772 4.926C5.82 5.01 5.874 5.094 5.922 5.154C5.982 5.244 6.042 5.322 6.084 5.364C6.108 5.4 6.132 5.424 6.138 5.436C6.27 5.586 6.408 5.73 6.54 5.838C6.576 5.874 6.6 5.892 6.606 5.898C6.684 5.958 6.756 6.024 6.828 6.066C6.906 6.126 6.99 6.18 7.074 6.228C7.176 6.288 7.284 6.348 7.398 6.402C7.512 6.456 7.62 6.498 7.728 6.534L5.466 8.796ZM8.73 5.538L8.262 6.006C8.232 6.036 8.19 6.054 8.148 6.054C8.136 6.054 8.112 6.054 8.1 6.048C7.068 5.754 6.246 4.932 5.952 3.9C5.934 3.846 5.952 3.786 5.994 3.744L6.468 3.27C7.242 2.496 7.974 2.514 8.73 3.27C9.114 3.654 9.306 4.026 9.3 4.41C9.3 4.788 9.114 5.154 8.73 5.538Z"
                                                                fill="#0056B1" />
                                                        </svg>

                                                    </span>
                                                    <span class="p">
                                                        Mã đơn hàng:
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="w-100 p-text">
                                                    {{ data?.ma_don_hang ?? 'Chưa cập nhật' }}
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                            <div class="br-top"></div>

                            <div class="d-flex align-items-center justify-content-between card-body-p-16">
                                <a  :href="'tel:+' + data?.giaoVien?.dien_thoai" type="text" class="btn btn-call position-relative">
                                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="19" cy="19" r="19" fill="white" fill-opacity="0.3" />
                                        <path
                                            d="M11.6796 9.84669L12.8192 8.70711C13.2097 8.31658 13.8429 8.31658 14.2334 8.70711L17.2403 11.7139C17.6308 12.1045 17.6308 12.7376 17.2403 13.1282L15.1847 15.1837C14.8544 15.514 14.7725 16.0187 14.9814 16.4365C16.1892 18.8521 18.1479 20.8108 20.5635 22.0186C20.9813 22.2275 21.486 22.1456 21.8163 21.8153L23.8718 19.7597C24.2624 19.3692 24.8955 19.3692 25.2861 19.7597L28.2929 22.7666C28.6834 23.1571 28.6834 23.7903 28.2929 24.1808L27.1533 25.3204C25.042 27.4317 21.6994 27.6693 19.3107 25.8777L17.2602 24.3398C15.5166 23.0322 13.9678 21.4834 12.6602 19.7399L11.1223 17.6893C9.33072 15.3006 9.56827 11.958 11.6796 9.84669Z"
                                            fill="white" />
                                    </svg>
                                    <span>Gọi điện</span>
                                </a>
                                <a  :href="'sms:+' + data?.giaoVien?.dien_thoai + '?body=Xin chào'" type="text" class="btn btn-chat position-relative">
                                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="19" cy="19" r="19" fill="white" fill-opacity="0.3" />
                                        <path opacity="0.4"
                                            d="M29 13.25V18.35C29 19.62 28.58 20.69 27.83 21.43C27.09 22.18 26.02 22.6 24.75 22.6V24.41C24.75 25.09 23.99 25.5 23.43 25.12L22.46 24.48C22.55 24.17 22.59 23.83 22.59 23.47V19.4C22.59 17.36 21.23 16 19.19 16H12.4C12.26 16 12.13 16.01 12 16.02V13.25C12 10.7 13.7 9 16.25 9H24.75C27.3 9 29 10.7 29 13.25Z"
                                            fill="white" />
                                        <path
                                            d="M22.59 19.4V23.47C22.59 23.83 22.55 24.17 22.46 24.48C22.09 25.95 20.87 26.87 19.19 26.87H16.47L13.45 28.88C13 29.19 12.4 28.86 12.4 28.32V26.87C11.38 26.87 10.53 26.53 9.94 25.94C9.34 25.34 9 24.49 9 23.47V19.4C9 17.5 10.18 16.19 12 16.02C12.13 16.01 12.26 16 12.4 16H19.19C21.23 16 22.59 17.36 22.59 19.4Z"
                                            fill="white" />
                                    </svg>

                                    <span>Nhắn tin</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </b-card>

                <b-card v-for="(item, n) in this.data?.giaoCu" v-bind:key="n" style="min-width: 245px;" class=" my-6">
                    <div class="block w-100 teachers teacher-detail">
                        <div class="card-body-p-16">
                            <div class="d-flex">
                                <label for="check1"
                                    class="m-0 p-0 d-block w-100 d-flex justify-content-between align-items-center">
                                    <span>Code: {{ item?.code }}</span>
                                    <span class="fw-cold text-primary">Số lượng: {{ item?.so_luong }}</span>

                                </label>
                            </div>
                        </div>
                    </div>
                </b-card>

                <b-card style="min-width: 245px;" class=" my-6">
                    <div class="block w-100 teachers teacher-detail">
                        <div class="card-body-p-16">
                            <div class="d-flex">
                                <label for="check1"
                                    class="m-0 p-0 d-block w-100 d-flex justify-content-between align-items-center">
                                    <span>Xác nhận hoàn trả giáo cụ</span>
                                    <span class="center">
                                        <input id="check1" @click="send_xacNhanBanGiao" v-model="xacNhanHoanTra"
                                            type="checkbox" class="input-check" />
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </b-card>

                <b-card style="min-width: 245px;" class=" my-6">
                    <div class="block w-100 teachers teacher-detail">
                        <div class="card-body-p-16">
                            <div class="d-flex">
                                <label for="check"
                                    class="m-0 p-0 d-block w-100 d-flex justify-content-between align-items-center">
                                    <span>Xác nhận bàn giao giáo cụ</span>
                                    <span class="center">
                                        <input id="check" v-model="xacNhanBanGiao" type="checkbox" class="input-check" />
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </b-card>

                <div class="mb-5">
                    <div class="title-complain mb-2 d-flex align-items-center">
                        <svg class="me-2" width="12" height="12" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.4 0H3.6C1.2 0 0 1.2 0 3.6V11.4C0 11.73 0.27 12 0.6 12H8.4C10.8 12 12 10.8 12 8.4V3.6C12 1.2 10.8 0 8.4 0ZM5.466 8.796C5.316 8.946 5.04 9.084 4.836 9.114L3.588 9.288C3.54 9.294 3.492 9.3 3.45 9.3C3.24 9.3 3.048 9.228 2.91 9.09C2.742 8.922 2.67 8.676 2.712 8.412L2.886 7.164C2.916 6.96 3.054 6.678 3.204 6.534L5.466 4.272C5.502 4.38 5.55 4.488 5.604 4.608C5.658 4.716 5.712 4.824 5.772 4.926C5.82 5.01 5.874 5.094 5.922 5.154C5.982 5.244 6.042 5.322 6.084 5.364C6.108 5.4 6.132 5.424 6.138 5.436C6.27 5.586 6.408 5.73 6.54 5.838C6.576 5.874 6.6 5.892 6.606 5.898C6.684 5.958 6.756 6.024 6.828 6.066C6.906 6.126 6.99 6.18 7.074 6.228C7.176 6.288 7.284 6.348 7.398 6.402C7.512 6.456 7.62 6.498 7.728 6.534L5.466 8.796ZM8.73 5.538L8.262 6.006C8.232 6.036 8.19 6.054 8.148 6.054C8.136 6.054 8.112 6.054 8.1 6.048C7.068 5.754 6.246 4.932 5.952 3.9C5.934 3.846 5.952 3.786 5.994 3.744L6.468 3.27C7.242 2.496 7.974 2.514 8.73 3.27C9.114 3.654 9.306 4.026 9.3 4.41C9.3 4.788 9.114 5.154 8.73 5.538Z"
                                fill="#4EAEEA" />
                        </svg>
                        Ghi chú
                    </div>

                    <div>
                        <textarea v-model="ghi_chu" class="form-control text-input" placeholder="Nhập ghi chú">

                        </textarea>
                    </div>
                </div>

                <div class="mt-7" @click="send_data()">
                    <button-component>Lưu</button-component>
                </div>
            </v-col>
        </v-row>


    </div>
</template>

<script>
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Lịch sử dùng giáo cụ',
                previous: '/admin/complain'
            },
            data: null,
            xacNhanBanGiao: false,
            xacNhanHoanTra: false,
            ghi_chu: null,
            currentDate: new Date(),
        };
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        id_list() {
            return this.$route.params.id_list
        },
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        async load_data() {
            await api.get('giao-cu/chi-tiet-ban-giao?id=' + this.id_list, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                const user = res?.data?.data
                this.data = user
                this.xacNhanBanGiao = user?.xacNhanBanGiao
                this.xacNhanHoanTra = user?.xacNhanHoanTra
            })
        },
        send_xacNhanBanGiao() {
            const formData = new FormData()
            formData.append('id', this.id_list)
            if(this.ghi_chu) {
                formData.append('ghi_chu', this.ghi_chu)
            } else {
                this.load_data()
                toastr.error("Vui lòng nhập ghi chú");
                return
            }

            api.post('giao-cu/xac-nhan-hoan-tra', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$router.push('/admin/materials/' + this.id + '/histories');
                }
            })
            this.load_data()
        },
        async send_data(event) {
            const day = this.currentDate.getDate().toString().padStart(2, '0');
            const month = (this.currentDate.getMonth() + 1).toString().padStart(2, '0');
            const year = this.currentDate.getFullYear();

            const formData = new FormData()
            formData.append('id', this.id_list)
            formData.append('ngay_tra', `${day}/${month}/${year}`)
            if(this.ghi_chu) {
                // this.load_data()
                formData.append('ghi_chu', this.ghi_chu)
                toastr.error("Vui lòng nhập ghi chú");
                return
            } else {
                this.load_data()
                toastr.error("Vui lòng nhập ghi chú");
                return
            }

            await api.post('giao-cu/giao-vien-hoan-tra', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$router.push('/admin/materials/' + this.id + '/histories');
                }
            })
            this.load_data()
        }
    },
    mounted() {
        this.load_data()
        this.title.previous = '/admin/materials/' + this.id + '/histories'
        this.$store.dispatch('title/set_title', this.title);
    },
    watch: {
        // xacNhanBanGiao() {

        // }
    }
}
</script>

<style lang="scss" scoped>
.text-input {
    border-radius: 10px;
    border: 1px solid #E5E5E5;
    background: #FFF;
}

.title-complain {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.span1 {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    align-items: start;

    p {
        margin-left: 6px;
    }
}


.p-text {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
}

tr {
    td {
        padding-bottom: 10px;
    }
}

.layout-user-complain {
    width: 48px;
    height: 48px;
    overflow: hidden;
    border-radius: 50%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.complain-detail {
    .lauout-user-complain {
        width: 48px;
        height: 48px;
        overflow: hidden;
        border-radius: 50%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .btn-call {
        border-radius: 50px;
        background: #0056b1;
        color: #fff;
        text-align: center;
        font-family: SVN-Gilroy;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        width: 48%;
        padding: 13px 5px;

        svg {
            position: absolute;
            top: 3px;
            left: 5px;
        }
    }

    .btn-chat {
        border-radius: 50px;
        background: #00c092;
        color: #fff;
        text-align: center;
        font-family: SVN-Gilroy;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        width: 48%;
        padding: 13px 5px;

        svg {
            position: absolute;
            top: 3px;
            left: 5px;
        }
    }

    .input-check {
        width: 30px;
        height: 30px;
    }
}</style>