<template>
    <div class="content-mp">
        <div class="service-edit-lesson-content">

            <b-row>
                <b-col class="mt-5 pt-" cols="12" sm="9" md="7">
                    <div class="mb-7 ">
                        <div class="d-flex align-items-center">
                            <span @click="updateFilter(item?.value)" v-for="(item, index) in chonCa" :key="index">
                                <button-filter :active="selectedFilter == item?.value ? 'active' : ''">
                                    {{ item?.text }}
                                </button-filter>
                            </span>
                        </div>
                    </div>
                    <div v-for="(item, n) in data" v-bind:key="n">
                        <div class="">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <span class="me-1">
                                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.5 0C3.194 0 0.5 2.694 0.5 6C0.5 9.306 3.194 12 6.5 12C9.806 12 12.5 9.306 12.5 6C12.5 2.694 9.806 0 6.5 0ZM9.11 8.142C9.026 8.286 8.876 8.364 8.72 8.364C8.642 8.364 8.564 8.346 8.492 8.298L6.632 7.188C6.17 6.912 5.828 6.306 5.828 5.772V3.312C5.828 3.066 6.032 2.862 6.278 2.862C6.524 2.862 6.728 3.066 6.728 3.312V5.772C6.728 5.988 6.908 6.306 7.094 6.414L8.954 7.524C9.17 7.65 9.242 7.926 9.11 8.142Z"
                                                fill="#FC4D32" />
                                        </svg>
                                    </span>
                                    <span class="span-title">Thời lượng: </span>
                                    <b class="span-title">{{ item?.khung_gio }}</b>
                                </div>
                                <div>
                                    <span @click="edit_item(item?.id, item?.khung_gio)" class="cp text-primary mdi mdi-tag-edit"></span>
                                    <span @click="delete_item(item?.id, item?.khung_gio)" class="cp text-danger mdi mdi-trash-can-outline"></span>
                                </div>
                            </div>
                            <div class="mt-2 wow animate__animated animate__zoomIn">
                                <v-card>
                                    <v-card-text>
                                        <div class="max-height" v-html="item?.noi_dung">
                                        </div>
                                    </v-card-text>
                                </v-card>
                                <!-- <Suneditor :app="n" :contents="item?.noi_dung"></Suneditor> -->
                            </div>
                        </div>
                        <hr class="support-hr" />
                    </div>
                    <div v-if="data == null || data?.length == 0">
                        <b-alert class="wow animate__animated animate__bounce" show dismissible variant="primary">Danh sách
                            trống</b-alert>
                    </div>
                </b-col>
                <b-col class="mt-0 pt-0" cols="12" sm="9" md="7">
                    <div class="">
                        <button-add v-b-modal.my-modal>
                            <span class="mdi mdi-plus"></span> Thêm nội dung
                        </button-add>

                        <b-modal size="lg" id="my-modal" ref="my-modal" hide-footer centered title="Thêm nội dung buổi học">
                            <template #default="{ hide }">
                                <div class="w-100">
                                    <div class="mb-3">
                                        <b-form-select v-model="selected" :options="chonCa"></b-form-select>
                                    </div>
                                    <div class="mb-3">
                                        <b-form-select v-model="khung_gio" :options="khung_gios"></b-form-select>
                                    </div>

                                    <div class="mb-3">
                                        <Suneditor :contents="noi_dung" @valueChanged="handleValueChanged"></Suneditor>
                                    </div>

                                </div>
                                <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                    <button class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                    <button class=" btn-delete ms-1" @click="send_data()">Xác nhận tạo</button>
                                </div>
                            </template>
                        </b-modal>

                        <b-modal size="lg" id="my-modal-edit" ref="my-modal-edit" hide-footer centered title="Sửa">
                            <template #default="{ hide }">
                                <div class="w-100">
                                    <div class="mb-3">
                                        <b-form-select v-model="selected" :options="chonCa"></b-form-select>
                                    </div>
                                    <div class="mb-3">
                                        <b-form-select v-model="khung_gio_edit" :options="khung_gios"></b-form-select>
                                    </div>

                                    <div class="mb-3">
                                        <Suneditor :contents="noi_dung" @valueChanged="handleValueChanged"></Suneditor>
                                    </div>

                                </div>
                                <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                    <button class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                    <button class=" btn-delete ms-1" @click="send_data_edit()">Xác nhận sửa</button>
                                </div>
                            </template>
                        </b-modal>
                    </div>
                    <div class="my-5">
                        <!-- <button-component>Lưu thay đổi</button-component> -->
                    </div>
                </b-col>
            </b-row>
        </div>

    </div>
</template>

<script>
import ButtonComponent from '~/components/button/ButtonComponent.vue';
import Suneditor from '../../../../../components/inputField/Suneditor'
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';


export default {
    components: { Suneditor, ButtonComponent },
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Thời lượng ca và nội dung buổi học',
                previous: '/admin/service/' + this.id + '/edit'
            },
            data: null,
            chonCa: null,
            noi_dung: 'Nhập nội dung',
            selectedFilter: '',
            khung_gio: 1,
            khung_gio_edit: 1,
            khung_gios: [],
            selected1: 1,
            selected: 1,
            edit_id: null,
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
        async load_role() {
            await api.get('dich-vu/danh-sach-khung-gio?type=10&page=1&limit=20&sort=1&dich_vu_id=' + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {

                this.chonCa = res?.data?.data?.chonCa.map(item => {
                    return {
                        value: item.id,
                        text: item.name
                    };
                })
                this.selectedFilter = this.chonCa[0].value
                this.selected = this.chonCa[0].value

            })
        },
        async load_data() {
            await api.get(`dich-vu/danh-sach-khung-gio?type=${this.selectedFilter ?? ''}&page=1&limit=100&sort=1&dich_vu_id=` + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                const user = res?.data?.data.khungGio
                this.data = user

            })
        },
        async send_data(event) {
            const formData = new FormData()
            formData.append('dich_vu_id', this.id)
            formData.append('type', this.selected)
            formData.append('khung_gio', this.khung_gio)
            formData.append('noi_dung', this.noi_dung)

            await api.post('dich-vu/them-khung-gio', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    // this.load_data()
                    this.$refs['my-modal'].hide()

                    this.selectedFilter = this.selected
                    // this.selected = this.selected
                    // this.load_role()
                }
            })
        },
        edit_item (id, link) {
            this.edit_id = id

            api.get(`dich-vu/chi-tiet-khung-gio-v2?id=` + id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                const user = res?.data?.data
                this.selected = user?.type
                this.noi_dung = user?.noi_dung

                // setTimeout(() => {
                    this.khung_gio_edit = user?.khung_gio
                    this.$refs['my-modal-edit'].show()
                // }, 1000);
            })
        },
        async send_data_edit(event) {
            const formData = new FormData()
            formData.append('id', this.edit_id)
            formData.append('type', this.selected)
            formData.append('khung_gio', this.khung_gio_edit)
            formData.append('noi_dung', this.noi_dung)

            await api.post('dich-vu/cap-nhat-khung-gio-v2', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-edit'].hide()
                    this.load_data()
                }
            })
        },
        async delete_item(user_id, name) {
            const formData = new FormData();
            formData.append('id', user_id)

            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: `Xoá khung giờ ${name}!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Có xoá nó!',
                cancelButtonText: 'Huỷ'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.post('dich-vu/xoa-khung-gio', formData, {
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
                            // this.load_type()
                            this.load_data()
                        } else {
                            toastr.error(res?.data?.message);
                        }
                    })

                }
            })
        },
        handleValueChanged(newValue) {
            // Xử lý khi giá trị thay đổi trong thành phần con
            console.log('Value changed in child component:', newValue);
            this.noi_dung = newValue
        },
        async updateFilter(filter) {
            this.selectedFilter = await filter ?? '';
            // await this.load_data()
        }
    },
    mounted() {
        this.load_role()
        this.load_data()
        this.title.name = 'Thời lượng ca và nội dung buổi học'
        this.title.previous = '/admin/service/' + this.id + '/edit'
        this.$store.dispatch('title/set_title', this.title);
    },
    watch: {
        selectedFilter() {
            this.load_data()
        },
        async selected() {
            console.log(this.selected)
            await api.get('dich-vu/get-khung-thoi-gian?type=' + this.selected, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {

                this.khung_gios = res?.data?.data?.map(item => {
                    return {
                        value: item.id,
                        text: item.name
                    };
                })
                this.khung_gio = this.khung_gios[0].value

            })
        }
    }
}
</script>

<style lang="scss" scoped>
.max-height {
    max-height: 500px;
    overflow-y: auto;

    div {
        width: 100%;
    }
}

.span-title {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

b.span-title {
    font-weight: 600;
}
</style>