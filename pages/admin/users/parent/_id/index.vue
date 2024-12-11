<template>
    <div class="content-mp">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="6" md="4" lg="4" xl="3">
                <b-card style="min-width: 245px;" class="">
                    <div class="block w-100 teachers teacher-detail">
                        <div class="d-flex align-center">
                            <div class="me-2 layout-user1">
                                <img :src="data?.anh_nguoi_dung" alt="">
                            </div>
                            <div class="d-flex justify-content-between w-100">
                                <div>
                                    <div class="d-flex align-items-center">
                                        <span class="blade-id me-2"># {{ data?.id }}</span>
                                    </div>
                                    <h3 class="name">
                                        {{ data?.hoten ?? 'Chưa cập nhật' }}
                                    </h3>
                                    <p class="w-p p-0 m-0 position">
                                        {{ data?.vai_tro_name ?? 'Chưa cập nhật' }}
                                    </p>
                                    <div class="d-flex align-items-center blade-infor">
                                        <span class="me-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 20 20" fill="none">
                                                <circle cx="10" cy="10" r="10" fill="#0056B1" fill-opacity="0.1" />
                                                <path
                                                    d="M13.9703 11.5492L15.4486 13.0275C15.7531 13.3321 15.7531 13.8258 15.4486 14.1304C13.802 15.777 11.1952 15.9622 9.33236 14.5651L9.22376 14.4836C7.81856 13.4297 6.57029 12.1814 5.51639 10.7762L5.43494 10.6676C4.03778 8.80476 4.22304 6.19801 5.86961 4.55145C6.17416 4.24689 6.66794 4.24689 6.9725 4.55145L8.45079 6.02974C8.84131 6.42026 8.84131 7.05342 8.45079 7.44395L7.4477 8.44704C7.2432 8.65154 7.1925 8.96395 7.32184 9.22262C8.06951 10.718 9.28203 11.9305 10.7774 12.6782C11.036 12.8075 11.3485 12.7568 11.553 12.5523L12.5561 11.5492C12.9466 11.1587 13.5797 11.1587 13.9703 11.5492Z"
                                                    fill="#0056B1" />
                                            </svg>
                                            <span>{{ data?.dien_thoai ?? 'Chưa cập nhật' }}</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="d-flex flex-column">
                                    <span class="mt-2">
                                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="19" cy="19" r="19" fill="#0056B1" fill-opacity="0.1" />
                                            <path
                                                d="M11.6796 9.84669L12.8192 8.70711C13.2097 8.31658 13.8429 8.31658 14.2334 8.70711L17.2403 11.7139C17.6308 12.1045 17.6308 12.7376 17.2403 13.1282L15.1847 15.1837C14.8544 15.514 14.7725 16.0187 14.9814 16.4365C16.1892 18.8521 18.1479 20.8108 20.5635 22.0186C20.9813 22.2275 21.486 22.1456 21.8163 21.8153L23.8718 19.7597C24.2624 19.3692 24.8955 19.3692 25.2861 19.7597L28.2929 22.7666C28.6834 23.1571 28.6834 23.7903 28.2929 24.1808L27.1533 25.3204C25.042 27.4317 21.6994 27.6693 19.3107 25.8777L17.2602 24.3398C15.5166 23.0322 13.9678 21.4834 12.6602 19.7399L11.1223 17.6893C9.33072 15.3006 9.56827 11.958 11.6796 9.84669Z"
                                                fill="#0056B1" />
                                        </svg>
                                    </span>
                                    <span class="mt-2">
                                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="19" cy="19" r="19" fill="#0056B1" fill-opacity="0.1" />
                                            <path opacity="0.4"
                                                d="M29 13.25V18.35C29 19.62 28.58 20.69 27.83 21.43C27.09 22.18 26.02 22.6 24.75 22.6V24.41C24.75 25.09 23.99 25.5 23.43 25.12L22.46 24.48C22.55 24.17 22.59 23.83 22.59 23.47V19.4C22.59 17.36 21.23 16 19.19 16H12.4C12.26 16 12.13 16.01 12 16.02V13.25C12 10.7 13.7 9 16.25 9H24.75C27.3 9 29 10.7 29 13.25Z"
                                                fill="#0056B1" />
                                            <path
                                                d="M22.59 19.4V23.47C22.59 23.83 22.55 24.17 22.46 24.48C22.09 25.95 20.87 26.87 19.19 26.87H16.47L13.45 28.88C13 29.19 12.4 28.86 12.4 28.32V26.87C11.38 26.87 10.53 26.53 9.94 25.94C9.34 25.34 9 24.49 9 23.47V19.4C9 17.5 10.18 16.19 12 16.02C12.13 16.01 12.26 16 12.4 16H19.19C21.23 16 22.59 17.36 22.59 19.4Z"
                                                fill="#0056B1" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-card>
            </v-col>

            <v-col class="mt-0 pt-0" xs="12" sm="6" md="5" lg="5" xl="5">
                <div class="w-100 teacher-detail-info" style="min-width: 300px;">
                    <h3>Thông tin cá nhân</h3>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="align-top td-first">
                                            <span class="w-text-p">
                                                Họ và tên
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="w-text-p-1">
                                            {{ data?.hoten ?? 'Chưa cập nhật' }}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="align-top td-first">
                                            <span class="w-text-p">
                                                Email
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="w-text-p-1">
                                            {{ data?.email ?? 'Chưa cập nhật' }}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="align-top td-first">
                                            <span class="w-text-p">
                                                Số điện thoại
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="w-text-p-1">
                                            {{ data?.dien_thoai ?? 'Chưa cập nhật' }}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="align-top td-first">
                                            <span class="w-text-p">
                                                Địa chỉ
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="w-text-p-1">
                                            {{ data?.dia_chi ?? 'Chưa cập nhật' }}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </v-col>
        </v-row>

        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="8" lg="8" xl="8">
                <div class="w-100 teacher-detail-info" style="min-width: 300px;">
                    <h3 class="mt-3 mb-6">Thông tin thêm</h3>

                    <div>
                        <div class="input-group-parent">
                            <div class="parent-label mb-2">Họ và tên con</div>
                            <div class="position-relative">
                                <input type="text" :value="data?.ho_ten_con ?? 'Chưa cập nhật'"
                                    class="form-control parent-detail-input" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="input-group-parent">
                            <div class="parent-label mb-2">Ngày sinh</div>
                            <div class="position-relative">
                                <input type="text" :value="data?.ngay_sinh_cua_con ?? 'Chưa cập nhật'"
                                    class="form-control parent-detail-input" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="input-group-parent">
                            <div class="parent-label mb-2">CMND/CCCD</div>
                            <div class="position-relative">
                                <input :type="showPassword ? 'text' : 'password'"
                                    :value="data?.cmnd_cccd ?? 'Chưa cập nhật'" class="form-control parent-detail-input" />
                                <span @click="togglePasswordVisibility" class="password">
                                    <i
                                        :class="showPassword ? 'mdi mdi-eye-outline show' : 'mdi mdi-eye-off-outline show'"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="input-group-parent">
                            <div class="parent-label mb-2">Ghi chú</div>
                            <div class="position-relative">
                                <textarea class="form-control parent-detail-input"
                                    style="height: 100px;">{{ data?.ghi_chu ?? 'Chưa cập nhật' }}</textarea>
                            </div>
                        </div>
                    </div>
                </div>

            </v-col>
        </v-row>

        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="8" lg="8" xl="8">
                <div class="w-100 teacher-detail-info-nav" style="min-width: 300px;">
                    <h3>Tùy chỉnh</h3>
                    <div class="w-100">
                        <div>

                            <b-card style="min-width: 245px;" class="teacher-nav">
                                <nuxt-link class="block w-100 teachers "
                                    :to="'/admin/users/parent/' + data?.id + '/history_service'">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="">
                                            <span class="me-2">
                                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="15" cy="15.5" r="15" fill="#FC4D32" fill-opacity="0.1" />
                                                    <path
                                                        d="M22.5258 12.1686L15.4675 16.257C15.1833 16.422 14.8258 16.422 14.5325 16.257L7.47418 12.1686C6.97001 11.8753 6.84168 11.1878 7.22668 10.757C7.49251 10.4545 7.79501 10.207 8.11585 10.0328L13.0842 7.28281C14.1475 6.68698 15.8708 6.68698 16.9342 7.28281L21.9025 10.0328C22.2233 10.207 22.5258 10.4636 22.7917 10.757C23.1583 11.1878 23.03 11.8753 22.5258 12.1686Z"
                                                        fill="#FC4D32" />
                                                    <path
                                                        d="M14.4775 17.962V24.2136C14.4775 24.9103 13.7717 25.3686 13.1483 25.0661C11.26 24.1403 8.07916 22.4078 8.07916 22.4078C6.96083 21.7753 6.04416 20.1803 6.04416 18.8695V14.1395C6.04416 13.4153 6.80499 12.957 7.42833 13.3145L14.0192 17.137C14.2942 17.3111 14.4775 17.6228 14.4775 17.962Z"
                                                        fill="#FC4D32" />
                                                    <path
                                                        d="M15.5225 17.962V24.2136C15.5225 24.9103 16.2283 25.3686 16.8517 25.0661C18.74 24.1403 21.9208 22.4078 21.9208 22.4078C23.0392 21.7753 23.9558 20.1803 23.9558 18.8695V14.1395C23.9558 13.4153 23.195 12.957 22.5717 13.3145L15.9808 17.137C15.7058 17.3111 15.5225 17.6228 15.5225 17.962Z"
                                                        fill="#FC4D32" />
                                                </svg>
                                            </span>
                                            <span>
                                                Lịch sử đăng ký dịch vụ
                                            </span>
                                        </div>
                                        <div>
                                            <div class="web-icon">
                                                <span class="mdi mdi-chevron-right"></span>
                                            </div>
                                        </div>
                                    </div>
                                </nuxt-link>
                            </b-card>

                            <b-card style="min-width: 245px;" class="teacher-nav">
                                <nuxt-link class="block w-100 teachers "
                                    :to="'/admin/users/parent/' + data?.id + '/complain'">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="">
                                            <span class="me-2">
                                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="15" cy="15.5" r="15" fill="#FFB761" fill-opacity="0.2" />
                                                    <path
                                                        d="M19.4791 18.3919C20.1698 17.9349 21.0769 18.4334 21.0769 19.2642V20.604C21.0769 21.9229 20.0564 23.3353 18.8296 23.7507L15.5412 24.8516C14.9639 25.0489 14.0258 25.0489 13.4588 24.8516L10.1704 23.7507C8.93331 23.3353 7.92307 21.9229 7.92307 20.604V19.2539C7.92307 18.4334 8.83023 17.9349 9.5106 18.3815L11.6342 19.7731C12.4486 20.3236 13.4794 20.5936 14.5103 20.5936C15.5412 20.5936 16.572 20.3236 17.3864 19.7731L19.4791 18.3919Z"
                                                        fill="#FFB761" />
                                                    <path
                                                        d="M22.5685 10.2485L16.5196 6.50696C15.429 5.83101 13.6315 5.83101 12.5409 6.50696L6.46173 10.2485C4.51276 11.4386 4.51276 14.1329 6.46173 15.3324L8.07746 16.3226L12.5409 19.0645C13.6315 19.7404 15.429 19.7404 16.5196 19.0645L20.9528 16.3226L22.3363 15.4657V18.379C22.3363 18.7693 22.6796 19.093 23.0936 19.093C23.5077 19.093 23.851 18.7693 23.851 18.379V13.6949C24.2549 12.4668 23.8409 11.0387 22.5685 10.2485Z"
                                                        fill="#FFB761" />
                                                </svg>
                                            </span>
                                            <span>
                                                Quản lý khiếu nại
                                            </span>
                                        </div>
                                        <div>
                                            <div class="web-icon">
                                                <span class="mdi mdi-chevron-right"></span>
                                            </div>
                                        </div>
                                    </div>
                                </nuxt-link>
                            </b-card>


                            <b-card style="min-width: 245px;" class="teacher-nav cp">
                                <div class="block w-100 teachers " v-b-modal.my-modal-password>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="">
                                            <span class="me-2">
                                                <svg width="21" height="14" viewBox="0 0 21 14" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M1.46324 7.6113C1.3363 7.42646 1.27283 7.33404 1.2373 7.1915C1.21061 7.08443 1.21061 6.91557 1.2373 6.8085C1.27283 6.66596 1.3363 6.57354 1.46324 6.3887C2.51225 4.86129 5.6347 1 10.3931 1C15.1516 1 18.274 4.86129 19.323 6.3887C19.4499 6.57354 19.5134 6.66596 19.549 6.8085C19.5756 6.91557 19.5756 7.08443 19.549 7.1915C19.5134 7.33404 19.4499 7.42646 19.323 7.6113C18.274 9.13871 15.1516 13 10.3931 13C5.6347 13 2.51225 9.13871 1.46324 7.6113Z"
                                                        stroke="#979797" stroke-width="1.3" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M10.3931 9.57143C11.9375 9.57143 13.1895 8.42016 13.1895 7C13.1895 5.57984 11.9375 4.42857 10.3931 4.42857C8.84875 4.42857 7.59679 5.57984 7.59679 7C7.59679 8.42016 8.84875 9.57143 10.3931 9.57143Z"
                                                        stroke="#979797" stroke-width="1.3" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>

                                            </span>
                                            <span>
                                                Đổi mật khẩu
                                            </span>
                                        </div>
                                        <div>
                                            <div class="web-icon">
                                                <span class="mdi mdi-chevron-right"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </b-card>

                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>


        <b-modal id="my-modal-password" ref="my-modal-password" hide-footer centered title="Đổi mật khẩu">
            <template #default="{ hide }">
                <div>

                    <div class="">
                        <div>
                            <b-form-group>
                                <label>Mật khẩu mới:</label>
                                <b-form-input name="link" type="password" v-model="password"
                                    placeholder="Nhập mẩu khẩu mới"></b-form-input>
                            </b-form-group>
                        </div>
                        <div>
                            <b-form-group>
                                <label>Nhập lại mật khẩu:</label>
                                <b-form-input name="link" type="password" v-model="password_comfirm"
                                    placeholder="Nhập mẩu khẩu mới"></b-form-input>
                            </b-form-group>
                        </div>

                    </div>
                    <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                        <button class=" btn-cancel me-1" @click="hide()">Hủy</button>
                        <button class=" btn-delete ms-1" @click="edit_password()">Xác nhận đổi</button>
                    </div>
                </div>

            </template>
        </b-modal>

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
                name: 'Chi tiết phụ huynh',
                previous: '/admin/users/parent'
            },
            data: null,
            showPassword: false,
            password: null,
            password_comfirm: null,
        };
    },
    validate({ params }) {
        return /^\d+$/.test(params.id);
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        async load_data() {
            await api.get('phu-huynh/chi-tiet?id=' + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                const user = res?.data?.data
                this.data = user
                // this.hoten = user?.hoten
                // this.dien_thoai = user?.dien_thoai
                // this.selected = user?.vai_tro
            })
        },
        async send_data(event) {
            event.preventDefault();
            console.log(123)
            const formData = new FormData(document.getElementById('form'))
            await api.post('admin-api/cap-nhat-quan-tri-vien', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.load_data()
                    this.load_role()
                }
            })
        },
        async edit_password() {
            const formData = new FormData();
            formData.append('password', this.password)
            formData.append('phu_huynh_id', this.id)
            formData.append('password_comfirm', this.password_comfirm)

            if (this.password == null || this.password == '') {
                toastr.error('Nhập mật khẩu để tiếp tục');
                return
            }
            api.post('phu-huynh/reset-password', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$router.push('/admin/users/parent');
                } else {
                    // toastr.error(res?.data?.message);
                }
            })
        }
    },
    mounted() {
        // this.title.previous =
        this.$store.dispatch('title/set_title', this.title);
        this.load_data()
    },
}
</script>


<style lang="scss" scoped>
.password {
    position: absolute;
    top: 7px;
    right: 12px;
    font-size: 23px;
    cursor: pointer;
}

.layout-user1 {
    min-width: 80px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.input-group-parent {
    margin-bottom: 20px;

    .parent-label {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .parent-detail-input {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border-radius: 10px !important;
        border: 1px solid #E5E5E5 !important;
        background: #FFF !important;
        height: 48px;
    }
}

table {
    width: 100%;
}

tr {
    display: flex;
    align-items: self-start;
    padding-bottom: 8px;
}

.card-certificate {
    border-radius: 5px;
    border: 1px solid #E5E5E5;
    background: #FFF;
    padding: 10px;
    overflow: hidden;
    width: 236px;

    .card-certificate-body {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .box-certificate {
            height: 83px;

            img {
                // width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}

.td-first {
    width: 100px;

    span {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}
</style>