<template>
    <div class="content-mp">
        <div class="material">
            <v-row>
                <v-col class="w-100" xs="12" sm="12" md="6" lg="6" xl="6">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <title-header>Gói giáo cụ {{ data?.code }}</title-header>

                        <nuxt-link :to="'/admin/materials/edit/' + this.id" class="btn btn-edit">
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.125 11.5982L13.4027 12.365C13.0196 12.7716 12.5001 13 11.9584 13C11.4168 13 10.8973 12.7716 10.5142 12.365C10.1306 11.9593 9.61111 11.7314 9.06958 11.7314C8.52806 11.7314 8.00861 11.9593 7.62499 12.365M1.125 13H2.33439C2.68769 13 2.86434 13 3.03058 12.9613C3.17796 12.9269 3.31886 12.8703 3.4481 12.7934C3.59387 12.7067 3.71878 12.5855 3.9686 12.3431L13.0417 3.53811C13.64 2.95748 13.64 2.0161 13.0417 1.43547C12.4434 0.854843 11.4733 0.854843 10.875 1.43547L1.80191 10.2404C1.55209 10.4829 1.42718 10.6041 1.33785 10.7456C1.25866 10.871 1.20029 11.0077 1.16491 11.1507C1.125 11.3121 1.125 11.4835 1.125 11.8264V13Z"
                                    stroke="#2D2D2D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Chỉnh sửa
                        </nuxt-link>
                    </div>

                    <div>
                        <div class="position-relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="290" height="37" viewBox="0 0 290 37"
                                fill="none">
                                <path
                                    d="M0 10C0 4.47715 4.47715 0 10 0H272.344C276.862 0 280.819 3.02939 281.998 7.39091L290 37H0V10Z"
                                    fill="#FC4D32" />
                            </svg>
                            <div class="note">
                                <span class="span1">
                                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.9344 3.20109L5.10829 5.65521C4.95426 5.75426 4.76046 5.75426 4.60146 5.65521L0.775346 3.20109C0.502052 3.02501 0.432487 2.61232 0.641184 2.3537C0.785284 2.17212 0.94926 2.02355 1.12317 1.919L3.81636 0.268248C4.39276 -0.0894159 5.32693 -0.0894159 5.90333 0.268248L8.59652 1.919C8.77043 2.02355 8.93441 2.17762 9.07851 2.3537C9.27726 2.61232 9.2077 3.02501 8.9344 3.20109Z"
                                            fill="white" />
                                        <path
                                            d="M4.57146 6.67868V10.4314C4.57146 10.8496 4.18885 11.1247 3.85096 10.9431C2.82735 10.3874 1.10311 9.3474 1.10311 9.3474C0.496897 8.96773 0 8.01029 0 7.22343V4.38413C0 3.94944 0.412425 3.67431 0.750315 3.88891L4.32301 6.18346C4.47208 6.288 4.57146 6.47509 4.57146 6.67868Z"
                                            fill="white" />
                                        <path
                                            d="M5.1377 6.67868V10.4314C5.1377 10.8496 5.52031 11.1247 5.8582 10.9431C6.88181 10.3874 8.60604 9.3474 8.60604 9.3474C9.21226 8.96773 9.70915 8.01029 9.70915 7.22343V4.38413C9.70915 3.94944 9.29673 3.67431 8.95884 3.88891L5.38614 6.18346C5.23707 6.288 5.1377 6.47509 5.1377 6.67868Z"
                                            fill="white" />
                                    </svg>
                                    Tổng: <span class="span2 ms-1">{{ data?.so_luong_tong }} bộ</span>
                                </span>
                                <span class="span1 ms-3">
                                    <svg width="10" height="9" viewBox="0 0 10 9" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.7093 1.35V2.25C9.7093 3.0735 9.30637 3.519 8.49564 3.5865C8.41796 3.5955 8.33544 3.6 8.25291 3.6H1.4564C1.37387 3.6 1.29134 3.5955 1.21366 3.5865C0.402936 3.519 0 3.0735 0 2.25V1.35C0 0.45 0.485465 0 1.4564 0H8.25291C9.22384 0 9.7093 0.45 9.7093 1.35Z"
                                            fill="white" />
                                        <path
                                            d="M1.69933 4.1626C1.43233 4.1626 1.21387 4.3651 1.21387 4.6126V7.6501C1.21387 8.5501 1.4566 9.0001 2.67026 9.0001H7.03945C8.25311 9.0001 8.49584 8.5501 8.49584 7.6501V4.6126C8.49584 4.3651 8.27738 4.1626 8.01038 4.1626H1.69933ZM5.7384 6.1876H3.97131C3.77227 6.1876 3.60721 6.0346 3.60721 5.8501C3.60721 5.6656 3.77227 5.5126 3.97131 5.5126H5.7384C5.93744 5.5126 6.1025 5.6656 6.1025 5.8501C6.1025 6.0346 5.93744 6.1876 5.7384 6.1876Z"
                                            fill="white" />
                                    </svg>
                                    Tồn kho: <span class="span2 ms-1">{{ data?.so_luong_ton }} bộ</span>
                                </span>
                            </div>
                        </div>
                        <div class="box-img">
                            <img :src="data?.image" />
                        </div>
                    </div>

                    <!-- <div class="mt-5">
                        <table class="table">
                            <tr>
                                <td>
                                    <span class="fw-bold">Giáo viên:</span>
                                </td>
                                <td>{{ data_bangiao?.giaoVien?.hoten }}</td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="fw-bold">Điện thoại:</span>
                                </td>
                                <td>{{ data_bangiao?.giaoVien?.dien_thoai }}</td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="fw-bold">id:</span>
                                </td>
                                <td>{{ data_bangiao?.giaoVien?.id }}</td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="fw-bold">Số lượng bàn giao:</span>
                                </td>
                                <td>{{ data_bangiao?.so_luong }}</td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="fw-bold">Trạng thái:</span>
                                </td>
                                <td>{{ data_bangiao?.xacNhanBanGiao == true ? "Đã bàn giao" : "Chưa bàn giao" }}</td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="fw-bold">Xác nhận hoàn trả:</span>
                                </td>
                                <td>{{ data_bangiao?.xacNhanHoanTra == true ? "Đã trả" : "Chưa trả" }}</td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="fw-bold">Ngày nhận:</span>
                                </td>
                                <td>{{ data_bangiao?.ngay_nhan}}</td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="fw-bold">Ngày trả:</span>
                                </td>
                                <td>{{ data_bangiao?.ngay_tra }}</td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="fw-bold">Ghi chú:</span>
                                </td>
                                <td>{{ data_bangiao?.ghi_chu }}</td>
                            </tr>
                        </table>
                    </div> -->

                    <div class="mt-7">
                        <nuxt-link :to="'/admin/materials/' + this.id + '/histories'">
                            <button-component addClass="red">
                                <svg class="me-2" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9" cy="9" r="9" fill="white" fill-opacity="0.3" />
                                    <path
                                        d="M9 3.2998C5.694 3.2998 3 5.8591 3 8.9998C3 12.1405 5.694 14.6998 9 14.6998C12.306 14.6998 15 12.1405 15 8.9998C15 5.8591 12.306 3.2998 9 3.2998ZM11.61 11.0347C11.526 11.1715 11.376 11.2456 11.22 11.2456C11.142 11.2456 11.064 11.2285 10.992 11.1829L9.132 10.1284C8.67 9.8662 8.328 9.2905 8.328 8.7832V6.4462C8.328 6.2125 8.532 6.0187 8.778 6.0187C9.024 6.0187 9.228 6.2125 9.228 6.4462V8.7832C9.228 8.9884 9.408 9.2905 9.594 9.3931L11.454 10.4476C11.67 10.5673 11.742 10.8295 11.61 11.0347Z"
                                        fill="white" />
                                </svg>

                                Lịch sử bàn giao
                            </button-component>
                        </nuxt-link>
                    </div>

                    <div class="mt-7">
                        <!-- <nuxt-link :to="'/admin/materials/' + this.id + '/create'">
                            <button-component addClass="primary">
                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.5 9C11.5711 9 13.25 7.32107 13.25 5.25C13.25 3.17893 11.5711 1.5 9.5 1.5C7.42893 1.5 5.75 3.17893 5.75 5.25C5.75 7.32107 7.42893 9 9.5 9Z"
                                        fill="white" />
                                    <path opacity="0.4"
                                        d="M9.50014 10.875C5.74264 10.875 2.68262 13.395 2.68262 16.5C2.68262 16.71 2.84762 16.875 3.05762 16.875H15.9427C16.1527 16.875 16.3177 16.71 16.3177 16.5C16.3177 13.395 13.2576 10.875 9.50014 10.875Z"
                                        fill="white" />
                                    <path
                                        d="M16.5723 11.055C15.8973 10.38 15.3648 10.5975 14.9073 11.055L12.2523 13.71C12.1473 13.815 12.0498 14.01 12.0273 14.1525L11.8848 15.165C11.8323 15.5325 12.0873 15.7875 12.4548 15.735L13.4673 15.5925C13.6098 15.57 13.8123 15.4725 13.9098 15.3675L16.5648 12.7125C17.0298 12.2625 17.2473 11.73 16.5723 11.055Z"
                                        fill="white" />
                                </svg>
                                Tạo bàn giao
                            </button-component>
                        </nuxt-link> -->
                        <div  @click="delete_giaocu()">
                            <button-component addClass="primary">
                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.5 9C11.5711 9 13.25 7.32107 13.25 5.25C13.25 3.17893 11.5711 1.5 9.5 1.5C7.42893 1.5 5.75 3.17893 5.75 5.25C5.75 7.32107 7.42893 9 9.5 9Z"
                                        fill="white" />
                                    <path opacity="0.4"
                                        d="M9.50014 10.875C5.74264 10.875 2.68262 13.395 2.68262 16.5C2.68262 16.71 2.84762 16.875 3.05762 16.875H15.9427C16.1527 16.875 16.3177 16.71 16.3177 16.5C16.3177 13.395 13.2576 10.875 9.50014 10.875Z"
                                        fill="white" />
                                    <path
                                        d="M16.5723 11.055C15.8973 10.38 15.3648 10.5975 14.9073 11.055L12.2523 13.71C12.1473 13.815 12.0498 14.01 12.0273 14.1525L11.8848 15.165C11.8323 15.5325 12.0873 15.7875 12.4548 15.735L13.4673 15.5925C13.6098 15.57 13.8123 15.4725 13.9098 15.3675L16.5648 12.7125C17.0298 12.2625 17.2473 11.73 16.5723 11.055Z"
                                        fill="white" />
                                </svg>
                                Xoá giáo cụ
                            </button-component>
                        </div>
                    </div>

                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import ButtonComponent from '~/components/button/ButtonComponent.vue';
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Chi tiết gói giáo cụ',
                previous: '/admin/materials'
            },
            data: null,
            data_bangiao: null,
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
        async delete_giaocu() {
            const formData = new FormData();
            formData.append('id', this.id)

            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: `Xoá giáo cụ đã chọn!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Chắc chắn!',
                cancelButtonText: 'Huỷ'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.post('giao-cu/xoa-giao-cu', formData, {
                        'Content-Type': 'multipart/form-data',
                        Authorization: 'Bearer ' + this.token
                    }).then(res => {
                        if (res?.status == 200) {
                            toastr.success(res?.data?.message);
                            this.$router.push('/admin/materials');
                        } else {
                            toastr.error(res?.data?.message);
                        }
                    })

                }
            })

        },
        async load_data() {
            await api.get('giao-cu/chi-tiet?id=' + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                const user = res?.data?.data
                this.data = user
            })

            // await api.get('giao-cu/chi-tiet-ban-giao?id=' + this.id, {
            //     'Content-Type': 'multipart/form-data',
            //     Authorization: 'Bearer ' + this.token
            // }).then(res => {
            //     const user = res?.data?.data
            //     this.data_bangiao = user
            // })
        },
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
        this.load_data()
    },
    components: { ButtonComponent }
}
</script>

<style lang="scss" scoped>
.note {
    position: absolute;
    z-index: 1;
    top: 6px;
    left: 16px;
}

.box-img {
    min-width: 353px;
    height: 225px;
    width: 100%;
    border-radius: 0px 10px 10px 10px;
    border: 1px solid #E5E5E5;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.span1 {
    color: #FFF;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

.span2 {
    color: #FFF;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
}

.btn-edit {
    border-radius: 46px;
    background: #E5E5E5;
    display: flex;
    padding: 12px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    color: #2D2D2D;
    text-align: center;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    transition: 0.3s;

    &:hover {
        background: transparent;
        border: 1px solid #E5E5E5
    }
}</style>