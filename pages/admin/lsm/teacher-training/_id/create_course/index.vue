<template>
    <div class="content-mp">
        <div class="service-edit">
            <div class="mb-7 d-none d-sm-block ">
                <div class="d-flex justify-content-between align-items-center">
                    <title-header>
                        Chủ đề đào tạo
                    </title-header>
                </div>
            </div>
            <b-row>
                <b-col class="mt-0 pt-0" cols="12" sm="9" md="7">
                    <div class="w-100">

                        <div class="mt-3 d-flex justify-content-between  align-items-center">
                            <strong class="strong-title">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.3263 6.4735C14.0997 6.38016 13.7997 6.3335 13.4263 6.3335H9.90634C8.74634 6.3335 8.33301 6.74683 8.33301 7.92016V13.0802C8.33301 13.4668 8.37967 13.7668 8.47967 14.0002C8.68634 14.4802 9.12634 14.6668 9.90634 14.6668H13.4263C14.5863 14.6668 14.9997 14.2468 14.9997 13.0802V7.92016C14.9997 7.12683 14.813 6.68016 14.3263 6.4735ZM12.333 13.1668H10.9997C10.9863 13.1668 10.9663 13.1668 10.953 13.1602C10.853 13.1535 10.7663 13.1202 10.693 13.0535C10.573 12.9668 10.4997 12.8268 10.4997 12.6668C10.4997 12.3935 10.7263 12.1668 10.9997 12.1668H12.333C12.6063 12.1668 12.833 12.3935 12.833 12.6668C12.833 12.9402 12.6063 13.1668 12.333 13.1668Z"
                                        fill="#FC4D32" />
                                    <path
                                        d="M14.3262 4.12683V4.66683C14.3262 5.0335 14.0262 5.3335 13.6595 5.3335H9.90618C8.19952 5.3335 7.33285 6.20683 7.33285 7.92016V14.0002C7.33285 14.3668 7.03285 14.6668 6.66618 14.6668H5.36618C5.09952 14.6668 4.88618 14.4535 4.88618 14.1935C4.88618 13.9268 5.09952 13.7202 5.36618 13.7202H6.66618V11.1668H4.33285C2.85285 11.0935 1.67285 9.8735 1.67285 8.3735V4.12683C1.67285 2.58683 2.92618 1.3335 4.47285 1.3335H11.5329C13.0729 1.3335 14.3262 2.58683 14.3262 4.12683Z"
                                        fill="#FC4D32" />
                                </svg>
                                <span class="ms-1">Ẩn/Hiện chương trình</span>
                            </strong>
                            <div class="input-grop">
                                <!-- <b-form-checkbox switch checked="checked" size="lg"></b-form-checkbox> -->
                                <v-switch inset color="success" v-model="bat_khoa_hoc"></v-switch>
                            </div>
                        </div>

                        <div class="mt-3 mb-6">
                            <div class="mb-2">
                                <strong class="service-title">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.71954 12.6735L1.70621 12.6868C1.52621 12.2935 1.41288 11.8468 1.36621 11.3535C1.41288 11.8402 1.53954 12.2802 1.71954 12.6735Z"
                                            fill="#00C092" />
                                        <path
                                            d="M5.99975 6.91992C6.87604 6.91992 7.58642 6.20954 7.58642 5.33325C7.58642 4.45696 6.87604 3.74658 5.99975 3.74658C5.12346 3.74658 4.41309 4.45696 4.41309 5.33325C4.41309 6.20954 5.12346 6.91992 5.99975 6.91992Z"
                                            fill="#00C092" />
                                        <path
                                            d="M10.793 1.3335H5.20634C2.77967 1.3335 1.33301 2.78016 1.33301 5.20683V10.7935C1.33301 11.5202 1.45967 12.1535 1.70634 12.6868C2.27967 13.9535 3.50634 14.6668 5.20634 14.6668H10.793C13.2197 14.6668 14.6663 13.2202 14.6663 10.7935V9.26683V5.20683C14.6663 2.78016 13.2197 1.3335 10.793 1.3335ZM13.5797 8.3335C13.0597 7.88683 12.2197 7.88683 11.6997 8.3335L8.92634 10.7135C8.40634 11.1602 7.56634 11.1602 7.04634 10.7135L6.81967 10.5268C6.34634 10.1135 5.59301 10.0735 5.05967 10.4335L2.56634 12.1068C2.41967 11.7335 2.33301 11.3002 2.33301 10.7935V5.20683C2.33301 3.32683 3.32634 2.3335 5.20634 2.3335H10.793C12.673 2.3335 13.6663 3.32683 13.6663 5.20683V8.40683L13.5797 8.3335Z"
                                            fill="#00C092" />
                                    </svg>
                                    <span>Hình ảnh</span>
                                </strong>
                                <i class="img-note">(Tối thiểu không quá 2mb)</i>
                            </div>

                            <div class="input-grop">
                                <div class="box-x d-flex justify-content-between p-2">
                                    <div class="box-img">
                                        <input type="file" hidden @change="handleFileChange" id="img" />
                                        <img v-if="image" :src="image" alt="">
                                        <img v-else src="@/static/images/teacher-training/Rectangle4052.png" alt="">
                                        <input id="images" type="file" class="d-none" />
                                    </div>
                                    <div class="action">
                                        <div @click="delete_img()" class="mb-3 btn-service-delete" v-b-tooltip.hover
                                            title="Xoá ảnh">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="16" cy="16" r="16" fill="#F2F2F2" />
                                                <g clip-path="url(#clip0_207_5736)">
                                                    <path
                                                        d="M16.0639 11.1534C18.1966 11.1534 20.3323 11.1594 22.4651 11.1475C22.7971 11.1475 22.9227 11.1802 22.8779 11.5789C22.6266 13.849 22.3634 16.1222 22.2108 18.4013C22.1241 19.6896 22.0194 20.9719 21.9147 22.2572C21.8549 22.9951 21.7921 23.4801 21.6604 24.2061C21.4899 25.1344 21.1071 26.0002 19.755 25.9883C17.2813 25.9913 14.8076 25.9645 12.3368 26.0002C11.3198 26.0151 10.5152 25.8038 10.2789 24.2061C10.0127 22.412 9.44433 14.1019 9.44433 14.1019L9.21699 11.7157C9.21699 11.7157 9.15418 11.1534 9.70755 11.1534C11.8283 11.1534 13.9461 11.1534 16.0669 11.1534H16.0639ZM16.5784 18.55C16.5784 17.2736 16.5784 15.9972 16.5784 14.7208C16.5784 14.2983 16.363 14.0305 16.028 14.0216C15.6541 14.0127 15.3849 14.3072 15.3849 14.7387C15.3849 17.2766 15.3849 19.8145 15.3879 22.3554C15.3879 22.8047 15.6361 23.1052 15.9981 23.1171C16.3361 23.129 16.5724 22.8107 16.5724 22.3376C16.5724 21.0761 16.5724 19.8115 16.5724 18.55H16.5784ZM19.4649 18.5411C19.4649 17.2498 19.4649 15.9556 19.4649 14.6643C19.4649 14.4977 19.4858 14.331 19.3153 14.212C19.1239 14.0781 18.9444 13.9591 18.6961 14.0692C18.3791 14.209 18.2834 14.453 18.2864 14.7803C18.2953 17.2944 18.2953 19.8115 18.3013 22.3257C18.3013 22.8017 18.5316 23.1082 18.8816 23.1112C19.2316 23.1171 19.4709 22.8017 19.4709 22.3376C19.4709 21.0731 19.4709 19.8086 19.4709 18.5441L19.4649 18.5411ZM13.6918 18.5708C13.6918 17.2528 13.6918 15.9347 13.6918 14.6167C13.6918 14.218 13.5213 14.0305 13.1594 14.0246C12.8453 14.0186 12.5911 14.2686 12.5911 14.6167C12.5881 17.2379 12.5881 19.8621 12.5911 22.4834C12.5911 22.8583 12.8663 23.1409 13.1833 23.1082C13.5513 23.0695 13.7038 22.8702 13.6978 22.4863C13.6799 21.1832 13.6918 19.877 13.6918 18.5738V18.5708Z"
                                                        fill="#979797" />
                                                    <path
                                                        d="M15.9776 10.0553C13.7461 10.0553 11.5147 10.0553 9.28024 10.0553C8.58927 10.0553 8 9.51382 8 8.88008C8 8.29097 8.58628 7.72864 9.25631 7.72269C10.5844 7.71079 11.9125 7.70781 13.2406 7.72864C13.6085 7.73459 13.7222 7.63938 13.7042 7.26152C13.6713 6.59802 14.2786 6.01486 14.9576 6.00891C15.6366 6.00296 16.3156 6.04462 16.9916 5.99999C17.7035 5.95238 18.3436 6.6129 18.2868 7.23771C18.2509 7.63641 18.4124 7.73162 18.7893 7.72566C20.0755 7.70781 21.3617 7.74947 22.645 7.71674C23.5094 7.69591 24.3081 8.35048 23.8833 9.40076C23.7308 9.7816 23.312 10.0494 22.7616 10.0494C20.599 10.0494 18.4393 10.0494 16.2767 10.0494C16.178 10.0494 16.0793 10.0494 15.9806 10.0494L15.9776 10.0553Z"
                                                        fill="#979797" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_207_5736">
                                                        <rect width="16" height="20" fill="white"
                                                            transform="translate(8 6)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <label for="img" class="btn-service-upload d-block" v-b-tooltip.hover
                                            title="Tải ảnh lên">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="16" cy="16" r="16" fill="#F2F2F2" />
                                                <path d="M10 11.3846L16 6M16 6L22 11.3846M16 6L16 13" stroke="#979797"
                                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M15 15V18.9375C15 19.4898 15.4477 19.9375 16 19.9375C16.5523 19.9375 17 19.4898 17 18.9375V15H23C24.1046 15 25 15.8954 25 17V22C25 23.1046 24.1046 24 23 24H9C7.89543 24 7 23.1046 7 22V17C7 15.8954 7.89543 15 9 15H15Z"
                                                    fill="#979797" />
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="support-hr" />

                        <div class="mt-2 mb-2 d-flex justify-content-between align-items-center">
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.3914 7.86638L14.2785 7.7153C14.081 7.48183 13.8481 7.29642 13.58 7.15908C13.2201 6.95994 12.8109 6.85693 12.3875 6.85693H3.60296C3.17961 6.85693 2.77742 6.95994 2.41052 7.15908C2.13534 7.30329 1.88838 7.50243 1.68376 7.74964C1.28157 8.25092 1.09107 8.86895 1.15457 9.48698L1.41564 12.6938C1.50736 13.6621 1.62731 14.8569 3.86403 14.8569H12.1335C14.3702 14.8569 14.4831 13.6621 14.5819 12.687L14.843 9.49384C14.9065 8.91702 14.7513 8.34019 14.3914 7.86638ZM9.68514 11.6569H6.30537C6.03019 11.6569 5.81146 11.4372 5.81146 11.1762C5.81146 10.9153 6.03019 10.6956 6.30537 10.6956H9.68514C9.96032 10.6956 10.1791 10.9153 10.1791 11.1762C10.1791 11.4441 9.96032 11.6569 9.68514 11.6569Z"
                                        fill="#FFB761" />
                                    <path
                                        d="M13.6549 5.93035C13.7035 6.32552 13.2526 6.5873 12.8669 6.48853C12.6306 6.42801 12.3866 6.39776 12.1361 6.39776H3.87141C3.61491 6.39776 3.36116 6.43105 3.1164 6.49547C2.73517 6.59582 2.28613 6.34229 2.28613 5.94807V4.71258C2.28613 1.978 3.00912 1.14307 5.37709 1.14307H6.15978C7.10829 1.14307 7.40677 1.49542 7.79148 2.06991L8.58744 3.2955C8.75326 3.55594 8.75989 3.57125 9.05174 3.57125H10.6304C12.6082 3.57125 13.4365 4.15487 13.6549 5.93035Z"
                                        fill="#FFB761" />
                                </svg>

                                <span class="service-title">Tên chương trình</span>
                            </span>

                        </div>
                        <div>
                            <input type="text" v-model="tieu_de" placeholder="Nhập tên"
                                class="form-control form-benefits" />
                        </div>

                        <hr class="support-hr" />

                        <div class="mt-2 mb-2 d-flex justify-content-between align-items-center">
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.793 1.3335H5.20634C2.77967 1.3335 1.33301 2.78016 1.33301 5.20683V10.7868C1.33301 13.2202 2.77967 14.6668 5.20634 14.6668H10.7863C13.213 14.6668 14.6597 13.2202 14.6597 10.7935V5.20683C14.6663 2.78016 13.2197 1.3335 10.793 1.3335ZM8.88634 11.3335H7.10634C6.83301 11.3335 6.60634 11.1068 6.60634 10.8335C6.60634 10.5602 6.83301 10.3335 7.10634 10.3335H8.88634C9.15967 10.3335 9.38634 10.5602 9.38634 10.8335C9.38634 11.1068 9.16634 11.3335 8.88634 11.3335ZM10.6663 8.50016H5.33301C5.05967 8.50016 4.83301 8.2735 4.83301 8.00016C4.83301 7.72683 5.05967 7.50016 5.33301 7.50016H10.6663C10.9397 7.50016 11.1663 7.72683 11.1663 8.00016C11.1663 8.2735 10.9397 8.50016 10.6663 8.50016ZM11.9997 5.66683H3.99967C3.72634 5.66683 3.49967 5.44016 3.49967 5.16683C3.49967 4.8935 3.72634 4.66683 3.99967 4.66683H11.9997C12.273 4.66683 12.4997 4.8935 12.4997 5.16683C12.4997 5.44016 12.273 5.66683 11.9997 5.66683Z"
                                        fill="#4EAEEA" />
                                </svg>
                                <span class="service-title">Cấp độ</span>
                            </span>

                        </div>
                        <div>
                            <b-form-select v-model="cap_do_id" :options="cap_do" aria-placeholder="Chọn"></b-form-select>
                        </div>

                        <hr class="support-hr" />

                        <div class="mt-2 mb-2 d-flex justify-content-between align-items-center">
                            <span>
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.35528 0C3.52505 0 2.03711 1.491 2.03711 3.325C2.03711 5.124 3.44122 6.58 5.27145 6.643C5.32733 6.636 5.38322 6.636 5.42513 6.643C5.43911 6.643 5.44609 6.643 5.46006 6.643C5.46705 6.643 5.46705 6.643 5.47403 6.643C7.26235 6.58 8.66646 5.124 8.67345 3.325C8.67345 1.491 7.18551 0 5.35528 0Z"
                                        fill="#00C092" />
                                    <path
                                        d="M8.90407 8.50482C6.95508 7.20282 3.77662 7.20282 1.81367 8.50482C0.926493 9.09982 0.4375 9.90482 0.4375 10.7658C0.4375 11.6268 0.926493 12.4248 1.80668 13.0128C2.78467 13.6708 4.07002 13.9998 5.35537 13.9998C6.64073 13.9998 7.92608 13.6708 8.90407 13.0128C9.78426 12.4178 10.2732 11.6198 10.2732 10.7518C10.2663 9.89082 9.78426 9.09282 8.90407 8.50482Z"
                                        fill="#00C092" />
                                    <path
                                        d="M13.0328 3.73787C13.1446 5.09587 12.1806 6.28587 10.8463 6.44687C10.8394 6.44687 10.8394 6.44687 10.8324 6.44687H10.8114C10.7695 6.44687 10.7276 6.44687 10.6927 6.46087C10.015 6.49587 9.39333 6.27887 8.92529 5.87987C9.64481 5.23587 10.057 4.26987 9.97314 3.21987C9.92424 2.65287 9.72864 2.13487 9.43524 1.69387C9.7007 1.56087 10.0081 1.47687 10.3224 1.44887C11.6916 1.32987 12.9141 2.35187 13.0328 3.73787Z"
                                        fill="#00C092" />
                                    <path
                                        d="M14.4298 10.2129C14.3739 10.8919 13.9408 11.4799 13.2143 11.8789C12.5157 12.2639 11.6356 12.4459 10.7624 12.4249C11.2653 11.9699 11.5587 11.4029 11.6146 10.8009C11.6845 9.93289 11.2723 9.09989 10.448 8.43489C9.97996 8.06389 9.43509 7.76989 8.84131 7.55289C10.3851 7.10489 12.3271 7.40589 13.5217 8.37189C14.1643 8.88989 14.4927 9.54089 14.4298 10.2129Z"
                                        fill="#00C092" />
                                </svg>
                                <span class="service-title">Phân loại</span>
                            </span>

                        </div>
                        <div>
                            <b-form-select v-model="type_id" :options="type" aria-placeholder="Chọn"></b-form-select>
                        </div>

                        <hr class="support-hr" />

                        <div class="mt-8" @click="send_data()">
                            <button-component>Lưu thay đổi</button-component>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>

    </div>
</template>

<script>
import SUNEDITOR from 'suneditor'
import plugins from 'suneditor/src/plugins'
import 'suneditor/dist/css/suneditor.min.css'
import ButtonComponent from '~/components/button/ButtonComponent.vue'
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    components: { ButtonComponent },
    layout: 'admin',
    head: {
        title: 'Thêm khóa học',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Home page description'
            }
        ],
    },
    data() {
        return {
            title: {
                name: 'Thêm Chương trình đào tạo',
                previous: '/admin/lsm/teacher-training/' + this.id
            },
            bat_chuong_trinh: false,
            tieu_de: null,
            image: null,
            file: null,
            cap_do: [],
            cap_do_id: 0,
            type: [],
            type_id: 0,
            bat_khoa_hoc: true,
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
        delete_img() {
            this.image = null;
            this.file = null;
        },
        handleFileChange(event) {
            const img = event.target.files[0];
            this.file = img;
            if (img) {
                this.image = URL.createObjectURL(img);
            }
        },
        async load_role() {
            await api.get(`dao-tao/danh-sach-cap-do`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.cap_do = res?.data?.data.map(item => {
                    return {
                        value: item.id,
                        text: item.name
                    };
                })
                this.cap_do_id = this.cap_do[0]?.value
            })

            await api.get(`dao-tao/danh-sach-phan-loai-hoc-phan`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.type = res?.data?.data.map(item => {
                    return {
                        value: item.id,
                        text: item.name
                    };
                })
                this.type_id = this.type[0]?.value
            })
        },
        async send_data(event) {
            if(this.tieu_de == '' || this.tieu_de == null) {
                toastr.error('Vui lòng nhập đủ thông tin');
                return
            }
            const formData = new FormData()
            formData.append('bat_khoa_hoc', this.bat_khoa_hoc == true ? 1 : 0)
            formData.append('tieu_de', this.tieu_de)
            formData.append('cap_do_id', this.cap_do_id)
            formData.append('type_id', this.type_id)
            formData.append('id', this.id)
            formData.append('image', this.file)

            await api.post('dao-tao/tao-moi-hoc-phan', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$router.push('/admin/lsm/teacher-training/' + this.id);
                }
            })
        },
    },
    mounted() {
        this.title.previous = '/admin/lsm/teacher-training/' + this.id
        this.$store.dispatch('title/set_title', this.title);
        this.load_role()

    },
}
</script>

<style lang="scss" scoped>
.service-title {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.support-hr {
    margin: 25px 0px 25px 0px;
}

.img-note {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 12px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
}

.box-x {
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid #E5E5E5;
    background: #FFF;

    .box-img {
        overflow: hidden;
        height: 109px;
        border-radius: 10px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

.input-group-service {
    margin-bottom: 24px;
}

.btn-service-upload {
    cursor: pointer;
}

.btn-service-delete {
    cursor: pointer;
}

.action-benefits {
    position: absolute;
    top: 7px;
    right: 4px;
    cursor: pointer;

    div {
        width: 32px;
    }
}

.form-benefits {
    height: calc(1.6em + 1rem + 2px);
    padding: 0.575rem 0.75rem;
    border-radius: 10px;
    border: 1px solid #E5E5E5;
    background: #FFF;
    color: #0056B1;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>