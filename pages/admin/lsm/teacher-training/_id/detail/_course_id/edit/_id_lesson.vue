<template>
    <div class="content-mp detail-form-review form-edit-train form-detail-train form-create-train">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="7" lg="6" xl="5" style="min-width: 373px;">
                <div class="w-100">
                    <div class="mt-3">
                        <strong class="strong-title">
                            <span class="me-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.3914 7.86638L14.2785 7.7153C14.081 7.48183 13.8481 7.29642 13.58 7.15908C13.2201 6.95994 12.8109 6.85693 12.3875 6.85693H3.60296C3.17961 6.85693 2.77742 6.95994 2.41052 7.15908C2.13534 7.30329 1.88838 7.50243 1.68376 7.74964C1.28157 8.25092 1.09107 8.86895 1.15457 9.48698L1.41564 12.6938C1.50736 13.6621 1.62731 14.8569 3.86403 14.8569H12.1335C14.3702 14.8569 14.4831 13.6621 14.5819 12.687L14.843 9.49384C14.9065 8.91702 14.7513 8.34019 14.3914 7.86638ZM9.68514 11.6569H6.30537C6.03019 11.6569 5.81146 11.4372 5.81146 11.1762C5.81146 10.9153 6.03019 10.6956 6.30537 10.6956H9.68514C9.96032 10.6956 10.1791 10.9153 10.1791 11.1762C10.1791 11.4441 9.96032 11.6569 9.68514 11.6569Z"
                                        fill="#FC4D32" />
                                    <path
                                        d="M13.6549 5.93035C13.7035 6.32552 13.2526 6.5873 12.8669 6.48853C12.6306 6.42801 12.3866 6.39776 12.1361 6.39776H3.87141C3.61491 6.39776 3.36116 6.43105 3.1164 6.49547C2.73517 6.59582 2.28613 6.34229 2.28613 5.94807V4.71258C2.28613 1.978 3.00912 1.14307 5.37709 1.14307H6.15978C7.10829 1.14307 7.40677 1.49542 7.79148 2.06991L8.58744 3.2955C8.75326 3.55594 8.75989 3.57125 9.05174 3.57125H10.6304C12.6082 3.57125 13.4365 4.15487 13.6549 5.93035Z"
                                        fill="#FC4D32" />
                                </svg>
                            </span>
                            <span>Tên bài học</span>
                        </strong>
                        <div class="input-grop">
                            <input v-model="tieu_de" type="text" class="input" placeholder="Bài 1: Giới thiệu" />
                        </div>
                    </div>

                    <div class="mt-3">
                        <strong class="strong-title">
                            <span class="me-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.3914 7.86638L14.2785 7.7153C14.081 7.48183 13.8481 7.29642 13.58 7.15908C13.2201 6.95994 12.8109 6.85693 12.3875 6.85693H3.60296C3.17961 6.85693 2.77742 6.95994 2.41052 7.15908C2.13534 7.30329 1.88838 7.50243 1.68376 7.74964C1.28157 8.25092 1.09107 8.86895 1.15457 9.48698L1.41564 12.6938C1.50736 13.6621 1.62731 14.8569 3.86403 14.8569H12.1335C14.3702 14.8569 14.4831 13.6621 14.5819 12.687L14.843 9.49384C14.9065 8.91702 14.7513 8.34019 14.3914 7.86638ZM9.68514 11.6569H6.30537C6.03019 11.6569 5.81146 11.4372 5.81146 11.1762C5.81146 10.9153 6.03019 10.6956 6.30537 10.6956H9.68514C9.96032 10.6956 10.1791 10.9153 10.1791 11.1762C10.1791 11.4441 9.96032 11.6569 9.68514 11.6569Z"
                                        fill="#FC4D32" />
                                    <path
                                        d="M13.6549 5.93035C13.7035 6.32552 13.2526 6.5873 12.8669 6.48853C12.6306 6.42801 12.3866 6.39776 12.1361 6.39776H3.87141C3.61491 6.39776 3.36116 6.43105 3.1164 6.49547C2.73517 6.59582 2.28613 6.34229 2.28613 5.94807V4.71258C2.28613 1.978 3.00912 1.14307 5.37709 1.14307H6.15978C7.10829 1.14307 7.40677 1.49542 7.79148 2.06991L8.58744 3.2955C8.75326 3.55594 8.75989 3.57125 9.05174 3.57125H10.6304C12.6082 3.57125 13.4365 4.15487 13.6549 5.93035Z"
                                        fill="#FC4D32" />
                                </svg>
                            </span>
                            <span>Thứ tự bài học</span>
                        </strong>
                        <div class="input-grop">
                            <input v-model="thu_tu" type="number" min="1" class="input" placeholder="1" />
                        </div>
                    </div>

                    <div class="mt-3">
                        <strong class="strong-title">
                            <span class="me-2">
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13 1.58169V10.2482C13 10.9552 12.4449 11.604 11.7632 11.6914L11.5454 11.7206C10.393 11.8809 8.76973 12.3766 7.4627 12.9451C7.00595 13.1419 6.5 12.7848 6.5 12.2672V2.12836C6.5 1.85867 6.64757 1.61085 6.87946 1.47965C8.16541 0.758047 10.1119 0.116623 11.433 0H11.4751C12.3184 0 13 0.707025 13 1.58169Z"
                                        fill="#00C092" />
                                    <path
                                        d="M6.12757 1.47965C4.84162 0.758047 2.89514 0.116623 1.57405 0H1.52486C0.681621 0 0 0.707025 0 1.58169V10.2482C0 10.9552 0.555135 11.604 1.23676 11.6914L1.45459 11.7206C2.60703 11.8809 4.23027 12.3766 5.5373 12.9451C5.99405 13.1419 6.5 12.7848 6.5 12.2672V2.12836C6.5 1.85138 6.35946 1.61085 6.12757 1.47965ZM2.11514 3.68819H3.69622C3.98432 3.68819 4.22324 3.93601 4.22324 4.23486C4.22324 4.541 3.98432 4.78153 3.69622 4.78153H2.11514C1.82703 4.78153 1.58811 4.541 1.58811 4.23486C1.58811 3.93601 1.82703 3.68819 2.11514 3.68819ZM4.22324 6.9682H2.11514C1.82703 6.9682 1.58811 6.72767 1.58811 6.42154C1.58811 6.12269 1.82703 5.87487 2.11514 5.87487H4.22324C4.51135 5.87487 4.75027 6.12269 4.75027 6.42154C4.75027 6.72767 4.51135 6.9682 4.22324 6.9682Z"
                                        fill="#00C092" />
                                </svg>
                            </span>
                            <span>Bài kiểm tra</span>
                        </strong>

                        <div class="input-grop">
                            <input v-model="test" type="text" class="input" placeholder="link..." />
                        </div>
                    </div>

                    <div class="mt-3">
                        <strong class="strong-title">
                            <span class="me-2">
                                <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.91455 9.13117C10.3871 8.79446 11.0078 9.16177 11.0078 9.77397V10.7611C11.0078 11.733 10.3095 12.7737 9.4702 13.0798L7.2202 13.891C6.82521 14.0363 6.18336 14.0363 5.79543 13.891L3.54543 13.0798C2.69904 12.7737 2.00781 11.733 2.00781 10.7611V9.76631C2.00781 9.16177 2.6285 8.79446 3.09402 9.12351L4.547 10.1489C5.10421 10.5545 5.80954 10.7535 6.51487 10.7535C7.2202 10.7535 7.92552 10.5545 8.48273 10.1489L9.91455 9.13117Z"
                                        fill="#FFB761" />
                                    <path
                                        d="M12.0284 3.13048L7.88967 0.373553C7.14346 -0.124518 5.91359 -0.124518 5.16738 0.373553L1.00794 3.13048C-0.325564 4.00737 -0.325564 5.99263 1.00794 6.87653L2.11344 7.6061L5.16738 9.62645C5.91359 10.1245 7.14346 10.1245 7.88967 9.62645L10.9229 7.6061L11.8695 6.97474V9.12136C11.8695 9.40898 12.1044 9.64749 12.3877 9.64749C12.6709 9.64749 12.9059 9.40898 12.9059 9.12136V5.66994C13.1822 4.76499 12.899 3.71273 12.0284 3.13048Z"
                                        fill="#FFB761" />
                                </svg>
                            </span>
                            <span>Câu hỏi</span>
                        </strong>

                        <div>
                            <div class="my-3 w-100 wow animate__animated animate__zoomIn" v-for="(item, n) in cauHoi" v-bind:key="n">
                                <v-card>
                                    <v-card-text>
                                        <div>
                                            <strong class="d-flex justify-content-between align-items-center">
                                                <b>
                                                    {{ item?.cauHoi_tieu_de }}
                                                </b>

                                                <span>
                                                    <span @click="edit_leson(item?.id)" class="cp text-primary me-2 mdi mdi-square-edit-outline">sửa</span>
                                                    <span @click="delete_leson(item?.id)" class="cp text-danger mdi mdi-trash-can">xoá</span>
                                                </span>

                                            </strong>
                                        </div>
                                        <div class="mt-3">
                                            <p>
                                                <b>Giới thiệu bài học</b>
                                            </p>
                                            <p>
                                                {{ item?.cauHoi_gioi_thieu }}
                                            </p>
                                        </div>
                                        <div class="mt-3">
                                            <p>
                                                <b>Video bài học</b>
                                            </p>
                                            <a :href="item?.cauHoi_link" target="_blank">
                                                {{ item?.cauHoi_link }}
                                            </a>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </div>
                        </div>

                        <div class="w-100 mt-4 mb-4">
                            <button class="btn-add-le" v-b-modal.my-modal>
                                <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 1V12M1 6.5H12" stroke="#4EAEEA" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                Thêm bài học
                            </button>
                        </div>

                        <b-modal id="my-modal" ref="my-modal" hide-footer centered title="Thêm câu hỏi">
                            <template #default="{ hide }">
                                <div>

                                    <div class="my-2">
                                        <div>
                                            <b-form-group>
                                                <label>Tiêu đề:</label>
                                                <b-form-input name="link" v-model="cauHoi_tieu_de"
                                                    placeholder="Nhập tên tiêu đề"></b-form-input>
                                            </b-form-group>
                                        </div>
                                        <div>
                                            <b-form-group>
                                                <label>Đường dẫn:</label>
                                                <b-form-input name="link" v-model="cauHoi_link"
                                                    placeholder="Nhập đường dẫn Video bài học"></b-form-input>
                                            </b-form-group>
                                        </div>
                                        <div>
                                            <b-form-group>
                                                <label>Giới thiệu bài học:</label>
                                                <b-form-textarea id="textarea" v-model="cauHoi_gioi_thieu"
                                                    placeholder="Giới thiệu bài học..." rows="3"
                                                    max-rows="6"></b-form-textarea>
                                            </b-form-group>
                                        </div>

                                    </div>
                                    <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                        <button class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                        <button class=" btn-delete ms-1" @click="add_benefit()">Thêm</button>
                                    </div>
                                </div>

                            </template>
                        </b-modal>

                        <b-modal id="my-modal-edit" ref="my-modal-edit" hide-footer centered title="Sửa câu hỏi">
                            <template #default="{ hide }">
                                <div>

                                    <div class="my-2">
                                        <div>
                                            <b-form-group>
                                                <label>Tiêu đề:</label>
                                                <b-form-input name="link" v-model="cauHoi_tieu_de_edit"
                                                    placeholder="Nhập tên tiêu đề"></b-form-input>
                                            </b-form-group>
                                        </div>
                                        <div>
                                            <b-form-group>
                                                <label>Đường dẫn:</label>
                                                <b-form-input name="link" v-model="cauHoi_link_edit"
                                                    placeholder="Nhập đường dẫn Video bài học"></b-form-input>
                                            </b-form-group>
                                        </div>
                                        <div>
                                            <b-form-group>
                                                <label>Giới thiệu bài học:</label>
                                                <b-form-textarea id="textarea" v-model="cauHoi_gioi_thieu_edit"
                                                    placeholder="Giới thiệu bài học..." rows="3"
                                                    max-rows="6"></b-form-textarea>
                                            </b-form-group>
                                        </div>

                                    </div>
                                    <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                        <button class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                        <button class=" btn-delete ms-1" @click="edit_benefit()">Sửa</button>
                                    </div>
                                </div>

                            </template>
                        </b-modal>
                    </div>

                    <!-- <div class="mt-3">
                        <strong class="strong-title">
                            <span class="me-2">
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13 1.58169V10.2482C13 10.9552 12.4449 11.604 11.7632 11.6914L11.5454 11.7206C10.393 11.8809 8.76973 12.3766 7.4627 12.9451C7.00595 13.1419 6.5 12.7848 6.5 12.2672V2.12836C6.5 1.85867 6.64757 1.61085 6.87946 1.47965C8.16541 0.758047 10.1119 0.116623 11.433 0H11.4751C12.3184 0 13 0.707025 13 1.58169Z"
                                        fill="#00C092" />
                                    <path
                                        d="M6.12757 1.47965C4.84162 0.758047 2.89514 0.116623 1.57405 0H1.52486C0.681621 0 0 0.707025 0 1.58169V10.2482C0 10.9552 0.555135 11.604 1.23676 11.6914L1.45459 11.7206C2.60703 11.8809 4.23027 12.3766 5.5373 12.9451C5.99405 13.1419 6.5 12.7848 6.5 12.2672V2.12836C6.5 1.85138 6.35946 1.61085 6.12757 1.47965ZM2.11514 3.68819H3.69622C3.98432 3.68819 4.22324 3.93601 4.22324 4.23486C4.22324 4.541 3.98432 4.78153 3.69622 4.78153H2.11514C1.82703 4.78153 1.58811 4.541 1.58811 4.23486C1.58811 3.93601 1.82703 3.68819 2.11514 3.68819ZM4.22324 6.9682H2.11514C1.82703 6.9682 1.58811 6.72767 1.58811 6.42154C1.58811 6.12269 1.82703 5.87487 2.11514 5.87487H4.22324C4.51135 5.87487 4.75027 6.12269 4.75027 6.42154C4.75027 6.72767 4.51135 6.9682 4.22324 6.9682Z"
                                        fill="#00C092" />
                                </svg>
                            </span>
                            <span>Bài test</span>
                        </strong>

                        <div>
                            <div class="my-3 w-100 wow animate__animated animate__zoomIn" v-for="(item, n) in baiTest" v-bind:key="n">
                                <v-card>
                                    <v-card-text>
                                        <div class="mt-0">
                                            <p class="m-0">
                                                <b>Bài Test {{ n + 1 }}</b>
                                            </p>
                                            <a :href="item?.baiTest_link" target="_blank">
                                                {{ item?.baiTest_link }}
                                            </a>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </div>
                        </div>

                        <div class="w-100 mt-4 mb-4">
                            <button class="btn-add-le" v-b-modal.my-modal-test>
                                <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 1V12M1 6.5H12" stroke="#4EAEEA" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                Thêm bài kiểm tra
                            </button>

                            <b-modal id="my-modal-test" ref="my-modal-test" hide-footer centered title="Thêm bài Test">
                            <template #default="{ hide }">
                                <div>

                                    <div class="my-2">
                                        <div>
                                            <b-form-group>
                                                <label>Đường dẫn:</label>
                                                <b-form-input name="link" v-model="baiTest_link"
                                                    placeholder="Nhập đường dẫn bài test"></b-form-input>
                                            </b-form-group>
                                        </div>
                                    </div>
                                    <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                        <button class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                        <button class=" btn-delete ms-1" @click="add_test()">Thêm</button>
                                    </div>
                                </div>

                            </template>
                        </b-modal>
                        </div>
                    </div> -->

                    <div class="mt-8 cr-btn">
                        <button class="btn btn-cancel" @click="back()">Hủy</button>
                        <button class="btn btn-save" @click="send_data()">Lưu</button>
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
                name: 'Sửa bài học',
                previous: '/admin/teacher-training/' + (this.id ?? 0)
            },
            panel: [0],
            tieu_de: null,
            cauHoi: [],
            cauHoi_tieu_de: null,
            cauHoi_gioi_thieu: null,
            cauHoi_link: null,
            cauHoi_tieu_de_edit: null,
            cauHoi_link_edit: null,
            cauHoi_gioi_thieu_edit: null,
            id_edit: null,
            baiTest: [],
            baiTest_link: null,
            thu_tu: 1,
            test: '',
            kiem_tra_id: 0,
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
        id_lesson() {
            return this.$route.params.id_lesson
        },
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        async edit_leson(id) {
            this.id_edit = await id
            const data = this.cauHoi.filter( x => x?.id == id)
            console.log(data)
            console.log(data[0])
            this.cauHoi_tieu_de_edit = data[0]?.cauHoi_tieu_de
            this.cauHoi_link_edit = data[0]?.cauHoi_link
            this.cauHoi_gioi_thieu_edit = data[0]?.cauHoi_gioi_thieu
            this.$refs['my-modal-edit'].show()
        },
        async edit_benefit() {
            const formData = new FormData()
            formData.append('tieu_de', this.cauHoi_tieu_de_edit)
            formData.append('cau_hoi_id', this.id_edit)
            formData.append('link',  this.cauHoi_link_edit)
            formData.append('gioi_thieu',  this.cauHoi_gioi_thieu_edit)

            await api.post('dao-tao/sua-cau-hoi-bai-hoc', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.load_data()
                    // this.$router.push('/admin/lsm/teacher-training/' + this.id + '/detail/' + this.course_id)
                }
            })

            this.cauHoi_tieu_de_edit = ''
            this.cauHoi_link_edit = ''
            this.cauHoi_gioi_thieu_edit = ''
            this.id_edit = null
            this.$refs['my-modal-edit'].hide()
        },
        async add_benefit() {
            // if (this.cauHoi_tieu_de == '' || this.cauHoi_gioi_thieu == '' || this.cauHoi_link == '') {
            //     toastr.error('Bạn cần nhập đầy đủ thông tin');
            //     return
            // }
            const newId = this.cauHoi.length + 1;
            // this.cauHoi.push({ id: newId, cauHoi_tieu_de: this.cauHoi_tieu_de, cauHoi_gioi_thieu: this.cauHoi_gioi_thieu, cauHoi_link: this.cauHoi_link });
            const formData = new FormData()
            formData.append('tieu_de', this.cauHoi_tieu_de)
            formData.append('bai_hoc_id', this.id_lesson)
            formData.append('link',  this.cauHoi_link)
            formData.append('gioi_thieu',  this.cauHoi_gioi_thieu)

            await api.post('dao-tao/them-cau-hoi-bai-hoc', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.load_data()
                    // this.$router.push('/admin/lsm/teacher-training/' + this.id + '/detail/' + this.course_id)
                }
            })

            this.cauHoi_tieu_de = ''
            this.cauHoi_gioi_thieu = ''
            this.cauHoi_link = ''
            this.$refs['my-modal'].hide()
        },
        add_test() {
            // if (this.baiTest_link == '') {
            //     toastr.error('Bạn cần nhập đầy đủ thông tin');
            //     return
            // }
            const newId = this.baiTest.length + 1;
            this.baiTest.push({ id: newId, baiTest_link: this.baiTest_link });
            this.baiTest_link = ''
            this.$refs['my-modal-test'].hide()
        },
        async load_data() {
            await api.get(`dao-tao/chi-tiet-bai-hoc?bai_hoc_id=` + this.id_lesson, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.data = res?.data?.data
                this.tieu_de = res?.data?.data?.tieu_de
                this.thu_tu = res?.data?.data?.thu_tu
                this.kiem_tra_id = res?.data?.data?.baiTest?.id
                this.test = res?.data?.data?.baiTest?.link
                this.cauHoi = []
                res?.data?.data?.cauHoi?.map(x => {
                    this.cauHoi.push({ id: x?.id, cauHoi_tieu_de: x?.tieu_de, cauHoi_gioi_thieu: x?.gioi_thieu, cauHoi_link: x?.link });
                })

            })
        },
        async send_data() {
            if(this.tieu_de == null || this.tieu_de == '') {
                toastr.error('Vui lòng nhập đủ thông tin');
                return
            }
            const formData = new FormData()
            formData.append('tieu_de', this.tieu_de)
            formData.append('bai_hoc_id', this.id_lesson)
            formData.append('thu_tu', this.thu_tu)

            this.cauHoi.forEach((value, key) => {
                formData.append(`cauHoi[${key}][tieu_de]`, value.cauHoi_tieu_de)
                formData.append(`cauHoi[${key}][gioi_thieu]`, value.cauHoi_gioi_thieu)
                formData.append(`cauHoi[${key}][link]`, value.cauHoi_link)
            });

            this.baiTest.forEach((value, key) => {
                formData.append(`baiTest[${key}]`, value.baiTest_link)
            });

            formData.forEach((value, key) => {
                console.log(`${key}: ${value}`);
            });

            await api.post('dao-tao/sua-bai-hoc', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);

                    const formData1 = new FormData()
                    formData1.append('link', this.test)
                    formData1.append('kiem_tra_id', this.kiem_tra_id)

                    api.post('dao-tao/sua-kiem-tra-bai-hoc', formData1, {
                        'Content-Type': 'multipart/form-data',
                        Authorization: 'Bearer ' + this.token
                    }).then(res => {
                        if (res?.status == 200) {
                            // toastr.success(res?.data?.message);
                            // this.$router.push('/admin/lsm/teacher-training/' + this.id + '/detail/' + this.course_id)
                        }
                    })
                    this.$router.push('/admin/lsm/teacher-training/' + this.id + '/detail/' + this.course_id)
                }
            })
        },
        async delete_leson(id_delete) {
            const formData = new FormData();
            formData.append('cau_hoi_id', id_delete)

            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: `Xoá câu hỏi đã chọn!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Có xoá nó!',
                cancelButtonText: 'Huỷ'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.post('dao-tao/delete-cau-hoi-bai-hoc', formData, {
                        'Content-Type': 'multipart/form-data',
                        Authorization: 'Bearer ' + this.token
                    }).then(res => {
                        if (res?.status == 200) {
                            Swal.fire(
                                'Deleted!',
                                res?.data?.message,
                                'success'
                            )
                            // this.$refs['my-modal-show'].hide()
                            this.load_data()
                        } else {
                            toastr.error(res?.data?.message);
                        }
                    })

                }
            })
        },
        back() {
            this.$router.push('/admin/lsm/teacher-training/' + this.id + '/detail/' + this.course_id)
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
.strong-title {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    margin-top: 15px;
}
</style>