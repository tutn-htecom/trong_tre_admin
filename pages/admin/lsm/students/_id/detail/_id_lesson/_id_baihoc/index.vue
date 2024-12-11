<template>
    <div class="content-mp">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="7" lg="7" xl="7" style="min-width: 373px;">
                <div class="d-flex align-items-center justify-content-between wmt-27">
                    <div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8.00781" cy="8" r="8" fill="#0056B1" />
                            <path
                                d="M10.5997 6.78514L6.47928 4.16485C5.50162 3.54199 4.43863 4.80059 4.93279 5.99476L5.50873 7.38652C5.66871 7.77312 5.66871 8.22845 5.50873 8.61505L4.93279 10.0068C4.43863 11.201 5.50162 12.4553 6.47928 11.8367L10.5997 9.21643C11.4103 8.70096 11.4103 7.30061 10.5997 6.78514Z"
                                fill="white" />
                        </svg>
                        <span class="span-h">
                            Gán giáo cụ
                        </span>
                    </div>

                    <div class="btn-edit cp" @click="delete_leson()">
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.95833 1H9.29167M0.625 3.33333H13.625M12.1806 3.33333L11.6741 11.515C11.5981 12.7425 11.5601 13.3563 11.3139 13.8217C11.0972 14.2314 10.7702 14.5608 10.3762 14.7664C9.92864 15 9.35746 15 8.21508 15H6.03492C4.89254 15 4.32136 15 3.8738 14.7664C3.47977 14.5608 3.15284 14.2314 2.9361 13.8217C2.68991 13.3563 2.65192 12.7425 2.57593 11.515L2.06944 3.33333M5.68056 6.83333V10.7222M8.56944 6.83333V10.7222"
                                stroke="#2D2D2D" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Xóa bài học
                    </div>
                </div>

                <hr class="support-hr" />

                <div class="mt-3 mb-6">
                    <div class="mb-2">
                        <strong class="service-title">

                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.22003 12.6735L2.2067 12.6868C2.0267 12.2935 1.91337 11.8468 1.8667 11.3535C1.91337 11.8402 2.04003 12.2802 2.22003 12.6735Z"
                                    fill="#FFB761" />
                                <path
                                    d="M6.5 6.91992C7.37629 6.91992 8.08666 6.20954 8.08666 5.33325C8.08666 4.45696 7.37629 3.74658 6.5 3.74658C5.6237 3.74658 4.91333 4.45696 4.91333 5.33325C4.91333 6.20954 5.6237 6.91992 6.5 6.91992Z"
                                    fill="#FFB761" />
                                <path
                                    d="M11.2934 1.3335H5.70671C3.28004 1.3335 1.83337 2.78016 1.83337 5.20683V10.7935C1.83337 11.5202 1.96004 12.1535 2.20671 12.6868C2.78004 13.9535 4.00671 14.6668 5.70671 14.6668H11.2934C13.72 14.6668 15.1667 13.2202 15.1667 10.7935V9.26683V5.20683C15.1667 2.78016 13.72 1.3335 11.2934 1.3335ZM14.08 8.3335C13.56 7.88683 12.72 7.88683 12.2 8.3335L9.42671 10.7135C8.90671 11.1602 8.06671 11.1602 7.54671 10.7135L7.32004 10.5268C6.84671 10.1135 6.09337 10.0735 5.56004 10.4335L3.06671 12.1068C2.92004 11.7335 2.83337 11.3002 2.83337 10.7935V5.20683C2.83337 3.32683 3.82671 2.3335 5.70671 2.3335H11.2934C13.1734 2.3335 14.1667 3.32683 14.1667 5.20683V8.40683L14.08 8.3335Z"
                                    fill="#FFB761" />
                            </svg>
                            <span>Gán giáo cụ</span>
                        </strong>
                    </div>

                    <div class="input-grop">
                        <div class="box-x d-flex justify-content-between p-2">
                            <div class="box-img d-flex align-items-center">
                                <!-- <div></div> -->
                                <div class="me-2 mt-2" v-for="item in data?.giaoCu" v-bind:key="n">
                                    <img :src="item.image" alt="">
                                </div>
                            </div>
                            <div class="action">
                                <label v-b-modal.my-modal-g class="btn-service-upload d-block" v-b-tooltip.hover
                                    title="Gán giáo cụ">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="16" r="16" fill="#F2F2F2" />
                                        <path
                                            d="M14.3909 16.8054C14.7364 17.2677 15.1772 17.6503 15.6835 17.9272C16.1897 18.204 16.7494 18.3686 17.3248 18.4099C17.9002 18.4511 18.4777 18.368 19.0181 18.1662C19.5586 17.9644 20.0493 17.6486 20.4572 17.2402L22.8708 14.8242C23.6035 14.0647 24.009 13.0476 23.9998 11.9918C23.9907 10.936 23.5676 9.926 22.8218 9.17941C22.0759 8.43282 21.067 8.00933 20.0122 8.00015C18.9575 7.99098 17.9414 8.39685 17.1827 9.13036L15.7989 10.5075M17.6091 15.1946C17.2636 14.7323 16.8228 14.3497 16.3165 14.0728C15.8103 13.796 15.2506 13.6314 14.6752 13.5901C14.0998 13.5489 13.5223 13.632 12.9819 13.8338C12.4414 14.0356 11.9507 14.3514 11.5428 14.7598L9.12922 17.1758C8.39645 17.9353 7.99099 18.9524 8.00015 20.0082C8.00932 21.064 8.43238 22.074 9.17822 22.8206C9.92406 23.5672 10.933 23.9907 11.9877 23.9998C13.0425 24.009 14.0586 23.6031 14.8173 22.8696L16.1931 21.4925"
                                            stroke="#979797" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </label>
                                <div @click="delete_g()" class="mb-3 btn-service-delete" v-b-tooltip.hover
                                    title="Xoá giáo cụ">
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
                            </div>
                        </div>
                    </div>
                </div>

                <b-modal id="my-modal-g" ref="my-modal-g" hide-footer centered title="Gán giáo cụ">
                    <template #default="{ hide }">
                        <form @submit="send_data_g">

                            <div class="my-4 pb-3">
                                <div>
                                    <b-form-group>
                                        <label>Mã giáo cụ:</label>
                                        <!-- <b-form-select v-model="giao_cu_id" :options="giao_cu"
                                            aria-placeholder="Chọn"></b-form-select> -->

                                            <v-autocomplete
                                                v-model="giao_cu_id"
                                                :items="giao_cu"
                                                outlined
                                                dense
                                                chips
                                                small-chips

                                                multiple
                                            ></v-autocomplete>
                                    </b-form-group>
                                </div>

                            </div>
                            <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                <button class=" btn-delete ms-1" type="submit">Xác nhận</button>
                            </div>
                        </form>

                    </template>
                </b-modal>

                <hr class="support-hr" />

                <div class="mt-3">
                    <div class="">
                        <div>
                            <span class="span-h">
                                Danh sách buổi học
                            </span>
                        </div>
                    </div>
                    <div v-for="(item, n) in packages" v-bind:key="n">
                        <div class="mt-6 wow animate__animated animate__zoomIn">
                            <div class="mb-2 d-flex justify-content-between align-items-center">
                                <div>
                                    <span class="me-1">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M14.6667 3.23329V11.16C14.6667 11.8066 14.14 12.4 13.4933 12.48L13.2867 12.5066C12.1933 12.6533 10.6533 13.1066 9.41333 13.6266C8.98 13.8066 8.5 13.48 8.5 13.0066V3.73329C8.5 3.48662 8.64 3.25995 8.86 3.13995C10.08 2.47995 11.9267 1.89329 13.18 1.78662H13.22C14.02 1.78662 14.6667 2.43329 14.6667 3.23329Z"
                                                fill="#FC4D32" />
                                            <path
                                                d="M7.14048 3.13995C5.92048 2.47995 4.07381 1.89329 2.82048 1.78662H2.77381C1.97381 1.78662 1.32715 2.43329 1.32715 3.23329V11.16C1.32715 11.8066 1.85382 12.4 2.50048 12.48L2.70715 12.5066C3.80048 12.6533 5.34048 13.1066 6.58048 13.6266C7.01381 13.8066 7.49381 13.48 7.49381 13.0066V3.73329C7.49381 3.47995 7.36048 3.25995 7.14048 3.13995ZM3.33381 5.15995H4.83382C5.10715 5.15995 5.33382 5.38662 5.33382 5.65995C5.33382 5.93995 5.10715 6.15995 4.83382 6.15995H3.33381C3.06048 6.15995 2.83381 5.93995 2.83381 5.65995C2.83381 5.38662 3.06048 5.15995 3.33381 5.15995ZM5.33382 8.15995H3.33381C3.06048 8.15995 2.83381 7.93995 2.83381 7.65995C2.83381 7.38662 3.06048 7.15995 3.33381 7.15995H5.33382C5.60715 7.15995 5.83382 7.38662 5.83382 7.65995C5.83382 7.93995 5.60715 8.15995 5.33382 8.15995Z"
                                                fill="#FC4D32" />
                                        </svg>
                                    </span>
                                    <b>
                                        Buổi {{ item?.buoi }}
                                    </b>
                                </div>
                                <div>
                                    <span @click="edit_item(item?.id)" class="text-primary cp">Sửa</span>
                                    <span @click="delete_item(item?.id)" class="text-danger cp ms-2">Xoá</span>
                                </div>
                            </div>
                            <Suneditor :app="n" :contents="item?.noi_dung"></Suneditor>
                        </div>
                    </div>
                </div>

                <div class="mt-3">
                    <button-add v-b-modal.my-modal-td>
                        Sửa tiêu đề
                    </button-add>
                </div>

                <div class="mt-3">
                    <button-add v-b-modal.my-modal>
                        <span class="mdi mdi-plus"></span> Thêm buổi học
                    </button-add>
                </div>

                <b-modal size="lg" id="my-modal-td" ref="my-modal-td" hide-footer centered title="Sửa tiêu đề">
                    <template #default="{ hide }">
                        <form id="form">
                            <div class="">
                                <div>
                                    <b-form-group>
                                        <label>Tiều đề:</label>
                                        <b-form-input v-model="tieu_de" name="goi_hoc"
                                            placeholder="Nhập Tiều đề"></b-form-input>
                                    </b-form-group>
                                </div>

                            </div>
                            <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                <button type="button" class=" btn-delete ms-1" @click="send_data_td">Sửa</button>
                            </div>
                        </form>

                    </template>
                </b-modal>


                <b-modal size="lg" id="my-modal" ref="my-modal" hide-footer centered title="Thêm buổi học">
                    <template #default="{ hide }">
                        <form id="form" @submit="send_data">
                            <div class="">
                                <div>
                                    <b-form-group>
                                        <label>Buổi học:</label>
                                        <b-form-input type="number" min="0" name="buoi" v-model="buoi"
                                            placeholder="Nhập tên"></b-form-input>
                                    </b-form-group>
                                </div>
                                <div>
                                    <b-form-group>
                                        <label>Nội dung:</label>
                                        <Suneditor :contents="noi_dung" @valueChanged="handleValueChanged"></Suneditor>
                                    </b-form-group>
                                </div>

                            </div>
                            <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                <button class=" btn-delete ms-1" type="submit">Thêm</button>
                            </div>
                        </form>

                    </template>
                </b-modal>

                <b-modal size="lg" id="my-modal-edit" ref="my-modal-edit" hide-footer centered title="Sửa buổi học">
                    <template #default="{ hide }">
                        <form id="form" @submit="send_data_edit">
                            <div class="">
                                <div>
                                    <b-form-group>
                                        <label>Buổi học:</label>
                                        <b-form-input type="number" min="0" name="buoi" v-model="buoi_edit"
                                            placeholder="Nhập tên"></b-form-input>
                                    </b-form-group>
                                </div>
                                <div>
                                    <b-form-group>
                                        <label>Nội dung:</label>
                                        <Suneditor :contents="noi_dung_edit" @valueChanged="handleValueChangedEdit">
                                        </Suneditor>
                                    </b-form-group>
                                </div>

                            </div>
                            <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                <button class=" btn-delete ms-1" type="submit">Sửa</button>
                            </div>
                        </form>

                    </template>
                </b-modal>



            </v-col>
        </v-row>

    </div>
</template>

<script>
import ButtonAdd from '~/components/button/ButtonAdd.vue';
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';
import Suneditor from '~/components/inputField/Suneditor.vue';

export default {
    components: { ButtonAdd, Suneditor },
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Chi tiết chương trình',
                previous: '/admin/lsm/teacher-training/' + (this.id ?? 0)
            },
            panel: [0],
            data: null,
            teachers: null,
            lesson: null,
            data_lesson: null,
            goi_hoc: null,
            packages: null,
            nhom_id: 0,
            tieu_de: null,
            image: null,
            file: null,
            noi_dung: null,
            buoi: 0,
            giao_cu: null,
            giao_cu_id: [],
            noi_dung_edit: null,
            id_edit: null,
            isUpdating: false,
            tieu_de: null,
            nhom_id: 0,
        };
    },
    validate({ params }) {
        return /^\d+$/.test(params.id);
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        id_lesson() {
            return this.$route.params.id_lesson
        },
        id_baihoc() {
            return this.$route.params.id_baihoc
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
        handleValueChanged(newValue) {
            console.log('Value changed in child component:', newValue);
            this.noi_dung = newValue
        },
        handleValueChangedEdit(newValue) {
            console.log('Value changed in child component:', newValue);
            this.noi_dung_edit = newValue
        },
        async send_data_g(event) {
            event.preventDefault();
            const formData = new FormData()
            formData.append('giao_cu_id', this.giao_cu_id.toString())
            formData.append('bai_hoc_id', this.id_baihoc)

            await api.post('chuong-trinh-hoc/gan-giao-cu', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-g'].hide()
                    this.load_data();
                }
            })
        },
        async send_data_edit(event) {
            event.preventDefault();
            if (!this.noi_dung_edit) {
                toastr.warning("vui lòng nhập đủ thông tin");
                return
            }
            const formData = new FormData()
            formData.append('noi_dung', this.noi_dung_edit)
            formData.append('buoi', this.buoi_edit)
            formData.append('buoi_hoc_id', this.id_edit)

            await api.post('chuong-trinh-hoc/sua-buoi-hoc', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-edit'].hide()
                    this.noi_dung_edit = null
                    this.buoi_edit = 0
                    this.load_data();
                    window.location.reload()
                }
            })
        },
        async send_data(event) {
            event.preventDefault();
            if (!this.noi_dung) {
                toastr.warning("vui lòng nhập đủ thông tin");
                return
            }
            const formData = new FormData()
            formData.append('noi_dung', this.noi_dung)
            formData.append('buoi', this.buoi)
            formData.append('bai_hoc_id', this.id_baihoc)

            await api.post('chuong-trinh-hoc/them-buoi-hoc', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal'].hide()
                    this.noi_dung = null
                    this.buoi = 0
                    this.load_data();
                }
            })
        },
        async send_data_td () {
            // event.preventDefault();
            if (!this.tieu_de) {
                toastr.warning("vui lòng nhập đủ thông tin");
                return
            }
            const formData = new FormData()
            formData.append('tieu_de', this.tieu_de)
            // formData.append('bai_hoc_id', this.id_lesson)
            // formData.append('id', this.id)
            // formData.append('nhom_id', this.id_baihoc )

            formData.append('id', this.id_lesson)
            formData.append('nhom_id', this.nhom_id )
            formData.append('bai_hoc_id', this.id_baihoc)


            await api.post('chuong-trinh-hoc/sua-bai-hoc', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-td'].hide()
                    // this.noi_dung = null
                    // this.buoi = 0
                    // this.load_data();
                    setTimeout(function () {
                        window.location.reload()
                    },1500)
                }
            })
        },
        async delete_g() {
            const formData = new FormData();
            formData.append('bai_hoc_id', this.id_baihoc)

            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: `Xoá giáo cụ đã gán!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Có xoá nó!',
                cancelButtonText: 'Huỷ'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.post('chuong-trinh-hoc/xoa-giao-cu', formData, {
                        'Content-Type': 'multipart/form-data',
                        Authorization: 'Bearer ' + this.token
                    }).then(res => {
                        if (res?.status == 200) {
                            toastr.success(res?.data?.message);
                            this.load_data();
                            // this.$router.push('/admin/lsm/students/' + this.id + '/detail/' + this.id_lesson);
                        } else {
                            toastr.error(res?.data?.message);
                        }
                    })

                }
            })
        },
        async edit_item(id) {
            await api.get('chuong-trinh-hoc/xem-buoi-hoc?buoi_hoc_id=' + id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.$refs['my-modal-edit'].show()
                this.buoi_edit = res?.data?.data?.buoi
                this.id_edit = res?.data?.data?.id
                this.noi_dung_edit = res?.data?.data?.noi_dung
            })
        },
        async delete_item(id) {
            const formData = new FormData();
            formData.append('buoi_hoc_id', id)

            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: `Xoá lựa chọn này!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Có xoá nó!',
                cancelButtonText: 'Huỷ'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.post('chuong-trinh-hoc/xoa-buoi-hoc', formData, {
                        'Content-Type': 'multipart/form-data',
                        Authorization: 'Bearer ' + this.token
                    }).then(res => {
                        if (res?.status == 200) {
                            // toastr.success(res?.data?.message);
                            Swal.fire(
                                'Deleted!',
                                res?.data?.message,
                                'success'
                            )
                            this.load_data()
                            window.location.reload()
                            // this.load_role()
                        } else {
                            toastr.error(res?.data?.message);
                        }
                    })

                }
            })
        },
        async delete_leson() {
            const formData = new FormData();
            formData.append('bai_hoc_id', this.id_baihoc)

            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: `Xoá bài học này!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Có xoá nó!',
                cancelButtonText: 'Huỷ'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.post('chuong-trinh-hoc/xoa-bai-hoc', formData, {
                        'Content-Type': 'multipart/form-data',
                        Authorization: 'Bearer ' + this.token
                    }).then(res => {
                        if (res?.status == 200) {
                            // toastr.success(res?.data?.message);
                            Swal.fire(
                                'Deleted!',
                                res?.data?.message,
                                'success'
                            )
                            // this.load_data()
                            this.$router.push('/admin/lsm/students/' + this.id + '/detail/' + this.id_lesson);
                            // '/admin/lsm/students/' + this.id + '/detail/' + this.id_lesson
                            // window.location.reload()
                            // this.load_role()
                        } else {
                            toastr.error(res?.data?.message);
                        }
                    })

                }
            })
        },
        async load_data() {
            await api.get('giao-cu/danh-sach-giao-cu', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.giao_cu = res?.data?.data.map(item => {
                    return {
                        value: item?.id,
                        text: item?.code ?? (item?.id + ' - Chưa cập nhật')
                    };
                })
                // this.giao_cu_id = this.giao_cu[0].value
            })

            await api.get(`chuong-trinh-hoc/chi-tiet-bai-hoc?bai_hoc_id=` + this.id_baihoc, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.title.name = res?.data?.data?.tieu_de ?? 'bài học'
                this.title.previous = '/admin/lsm/students/' + this.id + '/detail/' + this.id_lesson
                this.data = res?.data?.data

                this.tieu_de = this.data?.tieu_de
                this.nhom_id = this.data?.nhom_id

                res?.data?.data?.giaoCu.map((x) => {
                    this.giao_cu_id.push(x?.id)
                })
                this.$store.dispatch('title/set_title', this.title ?? '');
            })

            await api.get(`chuong-trinh-hoc/danh-sach-buoi-hoc?page=1&limit=1000&sort=0&bai_hoc_id=` + this.id_baihoc, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.packages = res?.data?.data
            })

        },
    },
    mounted() {
        this.load_data()
    },
    watch: {
        isUpdating(val) {
            if (val) {
                setTimeout(() => (this.isUpdating = false), 3000)
            }
        },
    }
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
            width: 50px;
            // height: 100%;
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

.card-body {
    padding: 8px 15px !important;
}

.blade-id {
    color: #FC4D32;
    font-family: SVN-Gilroy;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 3px 11px;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 17px;
    background: #FFEEEB;
}

.card-item {
    border-radius: 10px;
    background: #FFF;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .user-name {
        color: #0056B1;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration-line: underline;
    }

    .box-img {
        width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 50%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

.card-lsm {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 0px 10px 0px rgba(0, 86, 177, 0.15);
    padding: 10px 15px;
}

.lesson {
    color: #2D2D2D;
    text-align: center;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
}

table {
    margin-top: 10px;

    tr {
        td {
            padding-bottom: 7px;
            padding-left: 20px;
        }
    }
}

.span1 {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.span2 {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.img-w {
    max-width: 100%;
}

.span-h {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.btn-edit {
    color: #2D2D2D !important;
    text-align: center;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 46px;
    background: #E5E5E5;
    cursor: pointer;
    display: flex;
    padding: 12px 32px;
    justify-content: center;
    align-items: center;
}</style>