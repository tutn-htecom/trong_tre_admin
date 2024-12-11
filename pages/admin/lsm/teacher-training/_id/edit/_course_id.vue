<template>
    <div class="content-mp detail-form-review form-edit-train">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="6" lg="6" xl="6" style="min-width: 373px;">
                <div>
                    <title-header>Chủ đề đào tạo</title-header>
                </div>

                <div class="w-100">
                    <div class="mt-3 d-flex justify-content-between  align-items-center">
                        <strong class="strong-title">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <div class="mt-3">
                        <strong class="strong-title">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.3919 7.86638L14.279 7.7153C14.0814 7.48183 13.8486 7.29642 13.5805 7.15908C13.2206 6.95994 12.8114 6.85693 12.388 6.85693H3.60345C3.1801 6.85693 2.77791 6.95994 2.41101 7.15908C2.13583 7.30329 1.88887 7.50243 1.68425 7.74964C1.28206 8.25092 1.09155 8.86895 1.15506 9.48698L1.41613 12.6938C1.50785 13.6621 1.6278 14.8569 3.86452 14.8569H12.134C14.3707 14.8569 14.4836 13.6621 14.5824 12.687L14.8435 9.49384C14.907 8.91702 14.7518 8.34019 14.3919 7.86638ZM9.68563 11.6569H6.30586C6.03068 11.6569 5.81194 11.4372 5.81194 11.1762C5.81194 10.9153 6.03068 10.6956 6.30586 10.6956H9.68563C9.96081 10.6956 10.1795 10.9153 10.1795 11.1762C10.1795 11.4441 9.96081 11.6569 9.68563 11.6569Z"
                                    fill="#FFB761" />
                                <path
                                    d="M13.6544 5.93035C13.703 6.32552 13.2521 6.5873 12.8664 6.48853C12.6301 6.42801 12.3861 6.39776 12.1356 6.39776H3.87092C3.61442 6.39776 3.36067 6.43105 3.11591 6.49547C2.73468 6.59582 2.28564 6.34229 2.28564 5.94807V4.71258C2.28564 1.978 3.00864 1.14307 5.3766 1.14307H6.15929C7.1078 1.14307 7.40628 1.49542 7.79099 2.06991L8.58695 3.2955C8.75277 3.55594 8.7594 3.57125 9.05125 3.57125H10.6299C12.6077 3.57125 13.436 4.15487 13.6544 5.93035Z"
                                    fill="#FFB761" />
                            </svg>
                            <span class="ms-1">Tên chương trình </span>
                        </strong>
                        <div class="input-grop">
                            <b-form-input v-model="tieu_de" placeholder="Bảo mẫu cơ bản 0 - 6 tuổi"></b-form-input>
                        </div>
                    </div>
                    <div class="mt-3">
                        <strong class="strong-title">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.7935 1.3335H5.20683C2.78016 1.3335 1.3335 2.78016 1.3335 5.20683V10.7868C1.3335 13.2202 2.78016 14.6668 5.20683 14.6668H10.7868C13.2135 14.6668 14.6602 13.2202 14.6602 10.7935V5.20683C14.6668 2.78016 13.2202 1.3335 10.7935 1.3335ZM8.88683 11.3335H7.10683C6.8335 11.3335 6.60683 11.1068 6.60683 10.8335C6.60683 10.5602 6.8335 10.3335 7.10683 10.3335H8.88683C9.16016 10.3335 9.38683 10.5602 9.38683 10.8335C9.38683 11.1068 9.16683 11.3335 8.88683 11.3335ZM10.6668 8.50016H5.3335C5.06016 8.50016 4.8335 8.2735 4.8335 8.00016C4.8335 7.72683 5.06016 7.50016 5.3335 7.50016H10.6668C10.9402 7.50016 11.1668 7.72683 11.1668 8.00016C11.1668 8.2735 10.9402 8.50016 10.6668 8.50016ZM12.0002 5.66683H4.00016C3.72683 5.66683 3.50016 5.44016 3.50016 5.16683C3.50016 4.8935 3.72683 4.66683 4.00016 4.66683H12.0002C12.2735 4.66683 12.5002 4.8935 12.5002 5.16683C12.5002 5.44016 12.2735 5.66683 12.0002 5.66683Z"
                                    fill="#4EAEEA" />
                            </svg>
                            <span class="ms-1">Cấp độ</span>
                        </strong>
                        <div class="input-grop">
                            <b-form-select v-model="cap_do_id" :options="cap_do"></b-form-select>
                        </div>
                    </div>

                    <div class="mt-3">
                        <strong class="strong-title">
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <span class="ms-1">Phân loại</span>
                        </strong>
                        <div class="input-grop">
                            <b-form-select v-model="type_id" :options="type"></b-form-select>
                        </div>
                    </div>
                    <div class="mt-3 mb-5">
                        <div>
                            <strong class="strong-title">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.72003 12.6735L1.7067 12.6868C1.5267 12.2935 1.41337 11.8468 1.3667 11.3535C1.41337 11.8402 1.54003 12.2802 1.72003 12.6735Z"
                                        fill="#0056B1" />
                                    <path
                                        d="M6.00024 6.91992C6.87653 6.91992 7.58691 6.20954 7.58691 5.33325C7.58691 4.45696 6.87653 3.74658 6.00024 3.74658C5.12395 3.74658 4.41357 4.45696 4.41357 5.33325C4.41357 6.20954 5.12395 6.91992 6.00024 6.91992Z"
                                        fill="#0056B1" />
                                    <path
                                        d="M10.7935 1.3335H5.20683C2.78016 1.3335 1.3335 2.78016 1.3335 5.20683V10.7935C1.3335 11.5202 1.46016 12.1535 1.70683 12.6868C2.28016 13.9535 3.50683 14.6668 5.20683 14.6668H10.7935C13.2202 14.6668 14.6668 13.2202 14.6668 10.7935V9.26683V5.20683C14.6668 2.78016 13.2202 1.3335 10.7935 1.3335ZM13.5802 8.3335C13.0602 7.88683 12.2202 7.88683 11.7002 8.3335L8.92683 10.7135C8.40683 11.1602 7.56683 11.1602 7.04683 10.7135L6.82016 10.5268C6.34683 10.1135 5.5935 10.0735 5.06016 10.4335L2.56683 12.1068C2.42016 11.7335 2.3335 11.3002 2.3335 10.7935V5.20683C2.3335 3.32683 3.32683 2.3335 5.20683 2.3335H10.7935C12.6735 2.3335 13.6668 3.32683 13.6668 5.20683V8.40683L13.5802 8.3335Z"
                                        fill="#0056B1" />
                                </svg>
                                <span class="ms-1">Hình ảnh</span>
                            </strong>
                            <span class="note">(Tối thiểu không quá 2mb)</span>
                        </div>

                        <div class="input-grop">
                            <div class="box-x d-flex justify-content-between align-items-center p-2">
                                <div class="box-img">
                                    <input type="file" hidden @change="handleFileChange" id="img" />
                                    <img v-if="image" :src="image" alt="">
                                </div>
                                <div class="action">
                                    <div class="mb-2 cp"  @click="delete_img()">
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
                                                    <rect width="16" height="20" fill="white" transform="translate(8 6)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <label for="img">
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

                    <div class="my-7" @click="send_data()">
                        <button-component>
                            Lưu thay đổi
                        </button-component>
                    </div>
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
                name: 'Chương trình đào tạo',
                previous: '/admin/teacher-training/' + (this.id ?? 0)
            },
            data: [],
            cap_do: [],
            cap_do_id: 0,
            type: [],
            type_id: 0,
            selected1: 0,
            tieu_de: null,
            bat_khoa_hoc: true,
            image: null,
            file: null,
        };
    },
    validate({ params }) {
        return /^\d+$/.test(params.id);
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        course_id() {
            return this.$route.params.course_id
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
        async load_data() {
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
            })

            await api.get(`dao-tao/chi-tiet-hoc-phan?hoc_phan_id=` + this.course_id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.teachers = res?.data?.data
                this.cap_do_id = res?.data?.data?.cap_do_id
                this.type_id = res?.data?.data?.type_id
                this.tieu_de = res?.data?.data?.tieu_de
                this.image = res?.data?.data?.image
                this.bat_khoa_hoc = res?.data?.data?.bat_khoa_hoc == 1 ? true : false
            })


        },
        isChecked(id) {
            console.log(this.teacher, id, this.teacher.includes(id))
            return this.teacher.includes(id);
        },
        async send_data() {
            const formData = new FormData()
            formData.append('hoc_phan_id', this.course_id)
            formData.append('tieu_de', this.tieu_de)
            formData.append('bat_khoa_hoc', this.bat_khoa_hoc == true ? 1 : 0)
            formData.append('type_id', this.type_id)
            formData.append('cap_do_id', this.cap_do_id)
            formData.append('image', this.file)

            await api.post('dao-tao/sua-hoc-phan', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    // this.load_data();
                    this.$router.push('/admin/lsm/teacher-training/' + this.id + '/detail/' + this.course_id)
                }
            })
        }
    },
    mounted() {
        this.title.previous = '/admin/lsm/teacher-training/' + this.id + '/detail/' + this.course_id
        this.$store.dispatch('title/set_title', this.title);
        this.load_data()
    },
}
</script>

<style lang="scss" scoped>
.input-grop {
    margin: 7px 0px 15px 0px;
}
</style>