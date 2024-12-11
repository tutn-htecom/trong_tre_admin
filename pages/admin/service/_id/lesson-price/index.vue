<template>
    <div class="content-mp">
        <div class="service-edit-lesson-price">

            <b-row>
                <b-col class="mt-0 pt-0" cols="12" sm="10" md="8">
                    <div class="mb-7 ">
                        <div class="d-flex align-items-center">
                            <span @click="updateFilter(item?.value)" v-for="(item, index) in trinhDo" :key="index">
                                <button-filter :active="selectedFilter === item?.value ? 'active' : ''">
                                    {{ item?.text }}
                                </button-filter>
                            </span>
                        </div>
                    </div>
                    <div v-for="(item, n) in todos" v-bind:key="n" class="">
                        <div class="d-flex align-items-end justify-content-between wow animate__animated animate__zoomIn">
                            <div class="flex-1">
                                <div class="mb-1">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.52 1.3335H5.48004C2.96004 1.3335 2.33337 2.00683 2.33337 4.6935V12.2002C2.33337 13.9735 3.30671 14.3935 4.48671 13.1268L4.49337 13.1202C5.04004 12.5402 5.87337 12.5868 6.34671 13.2202L7.02004 14.1202C7.56004 14.8335 8.43337 14.8335 8.97337 14.1202L9.64671 13.2202C10.1267 12.5802 10.96 12.5335 11.5067 13.1202C12.6934 14.3868 13.66 13.9668 13.66 12.1935V4.6935C13.6667 2.00683 13.04 1.3335 10.52 1.3335ZM9.89337 6.66016L9.56004 7.00016H9.55337L7.53337 9.02016C7.44671 9.10683 7.26671 9.20016 7.14004 9.2135L6.24004 9.34683C5.91337 9.3935 5.68671 9.16016 5.73337 8.84016L5.86004 7.9335C5.88004 7.80683 5.96671 7.6335 6.05337 7.54016L8.08004 5.52016L8.41337 5.18016C8.63337 4.96016 8.88004 4.80016 9.14671 4.80016C9.37337 4.80016 9.62004 4.90683 9.89337 5.18016C10.4934 5.78016 10.3 6.2535 9.89337 6.66016Z"
                                            fill="#0056B1" />
                                    </svg>
                                    <span class="span-title">
                                        {{ item?.so_buoi }} buổi ( {{ item?.khungGio?.type }} . {{ item?.khungGio?.khung_gio
                                        }} )
                                    </span>
                                </div>
                                <div class="position-relative">
                                    <input disabled :value="formatCurrency(item?.tong_tien)" type="text" placeholder="350,000"
                                        class="form-control input-service" />
                                    <span class="end">đ</span>
                                </div>
                            </div>
                            <div class="mx-2 flex-1">
                                <div class="mb-1 ">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.3533 7.24643L13.34 6.23309C13.1667 6.05976 13.0267 5.71976 13.0267 5.47976V4.03976C13.0267 3.45309 12.5467 2.97309 11.96 2.97309H10.5267C10.2867 2.97309 9.94667 2.83309 9.77334 2.65976L8.76 1.64643C8.34667 1.23309 7.66667 1.23309 7.25334 1.64643L6.22667 2.65976C6.06 2.83309 5.72 2.97309 5.47334 2.97309H4.04C3.45334 2.97309 2.97334 3.45309 2.97334 4.03976V5.47309C2.97334 5.71309 2.83334 6.05309 2.66 6.22643L1.64667 7.23976C1.23334 7.65309 1.23334 8.33309 1.64667 8.74643L2.66 9.75976C2.83334 9.93309 2.97334 10.2731 2.97334 10.5131V11.9464C2.97334 12.5331 3.45334 13.0131 4.04 13.0131H5.47334C5.71334 13.0131 6.05334 13.1531 6.22667 13.3264L7.24 14.3398C7.65334 14.7531 8.33334 14.7531 8.74667 14.3398L9.76 13.3264C9.93334 13.1531 10.2733 13.0131 10.5133 13.0131H11.9467C12.5333 13.0131 13.0133 12.5331 13.0133 11.9464V10.5131C13.0133 10.2731 13.1533 9.93309 13.3267 9.75976L14.34 8.74643C14.7733 8.33976 14.7733 7.65976 14.3533 7.24643ZM5.33334 5.99976C5.33334 5.63309 5.63334 5.33309 6 5.33309C6.36667 5.33309 6.66667 5.63309 6.66667 5.99976C6.66667 6.36643 6.37334 6.66643 6 6.66643C5.63334 6.66643 5.33334 6.36643 5.33334 5.99976ZM6.35334 10.3531C6.25334 10.4531 6.12667 10.4998 6 10.4998C5.87334 10.4998 5.74667 10.4531 5.64667 10.3531C5.45334 10.1598 5.45334 9.83976 5.64667 9.64643L9.64667 5.64643C9.84 5.45309 10.16 5.45309 10.3533 5.64643C10.5467 5.83976 10.5467 6.15976 10.3533 6.35309L6.35334 10.3531ZM10 10.6664C9.62667 10.6664 9.32667 10.3664 9.32667 9.99976C9.32667 9.63309 9.62667 9.33309 9.99334 9.33309C10.36 9.33309 10.66 9.63309 10.66 9.99976C10.66 10.3664 10.3667 10.6664 10 10.6664Z"
                                            fill="#EB1B24" />
                                    </svg>
                                    <span class="span-title">
                                        Khuyến mãi
                                    </span>
                                </div>
                                <div class="position-relative">
                                    <input disabled :value="item?.khuyen_mai" type="text" placeholder="15"
                                        class="form-control input-service" />
                                    <span class="end">%</span>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center align-items-center ">
                                <div class="btn-delete cp text-primary me-2" v-b-tooltip.hover title="Sửa"
                                    @click="edit_item(item?.id)">
                                    Sửa
                                </div>
                                <div class="btn-delete cp text-danger" v-b-tooltip.hover title="Xoá"
                                    @click="delete_item(item?.id, item?.tong_tien)">
                                    Xoá
                                </div>
                            </div>
                        </div>
                        <div class="w-100">
                            <div class="mb-1 mt-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.52 1.3335H5.48004C2.96004 1.3335 2.33337 2.00683 2.33337 4.6935V12.2002C2.33337 13.9735 3.30671 14.3935 4.48671 13.1268L4.49337 13.1202C5.04004 12.5402 5.87337 12.5868 6.34671 13.2202L7.02004 14.1202C7.56004 14.8335 8.43337 14.8335 8.97337 14.1202L9.64671 13.2202C10.1267 12.5802 10.96 12.5335 11.5067 13.1202C12.6934 14.3868 13.66 13.9668 13.66 12.1935V4.6935C13.6667 2.00683 13.04 1.3335 10.52 1.3335ZM9.89337 6.66016L9.56004 7.00016H9.55337L7.53337 9.02016C7.44671 9.10683 7.26671 9.20016 7.14004 9.2135L6.24004 9.34683C5.91337 9.3935 5.68671 9.16016 5.73337 8.84016L5.86004 7.9335C5.88004 7.80683 5.96671 7.6335 6.05337 7.54016L8.08004 5.52016L8.41337 5.18016C8.63337 4.96016 8.88004 4.80016 9.14671 4.80016C9.37337 4.80016 9.62004 4.90683 9.89337 5.18016C10.4934 5.78016 10.3 6.2535 9.89337 6.66016Z"
                                        fill="#0056B1" />
                                </svg>
                                <span class="span-title">
                                    Tổng
                                </span>
                            </div>
                            <div class="position-relative">
                                <input disabled
                                    :value="formatCurrency(total_money(item?.so_buoi, item?.tong_tien, item?.khuyen_mai))"
                                    type="text" placeholder="15" class="form-control input-service" />
                                <span class="end">đ</span>
                            </div>
                        </div>
                        <hr class="support-hr" />
                    </div>
                    <div v-if="todos == null || todos?.length == 0">
                        <b-alert class="wow animate__animated animate__bounce" show dismissible variant="primary">Danh sách
                            trống</b-alert>
                    </div>

                </b-col>

                <b-modal size="lg" id="my-modal-edit" ref="my-modal-edit" hide-footer centered title="Sửa giá buổi học">
                    <template #default="{ hide }">
                        <form id="form" @submit="send_data_edit">
                            <div class="">
                                <div class="mb-3">
                                    <b-form-select v-model="trinhDo_id" :options="trinhDo"></b-form-select>
                                </div>
                                <div class="mb-3">
                                    <b-form-select v-model="ca_id" :options="ca"></b-form-select>
                                </div>
                                <div class="mb-3">
                                    <b-form-select v-model="khung_gio_id" :options="khung_gio"></b-form-select>
                                </div>
                                <div class="mb-3">
                                    <b-form-input v-model="so_buoi_edit" min="0" max="100000"
                                        placeholder="Nhập số buổi"></b-form-input>
                                </div>
                                <div class="mb-3">
                                    <b-form-input v-model="tong_tien_edit" placeholder="Nhập giá tiền"></b-form-input>
                                </div>
                                <div class="mb-3">
                                    <b-form-input v-model="khuyen_mai_edit" min="0" max="100"
                                        placeholder="Nhập khuyến mãi %"></b-form-input>
                                </div>
                            </div>
                            <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                <button class=" btn-delete ms-1" type="submit">Sửa</button>
                            </div>
                        </form>

                    </template>
                </b-modal>

                <b-col class="mt-0 pt-0" cols="12" sm="9" md="7">
                    <div class="">
                        <button-add v-b-modal.my-modal>
                            <span class="mdi mdi-plus"></span> Thêm giá buổi học
                        </button-add>

                        <b-modal id="my-modal" ref="my-modal" hide-footer centered title="Thêm giá buổi học">
                            <!-- <template #modal-header="{ close }">
                            <h5>Thông báo</h5>
                        </template> -->
                            <template #default="{ hide }">
                                <div class="w-100">
                                    <div class="mb-3">
                                        <b-form-select v-model="trinhDo_id" :options="trinhDo"></b-form-select>
                                    </div>
                                    <div class="mb-3">
                                        <b-form-select v-model="ca_id" :options="ca"></b-form-select>
                                    </div>
                                    <div class="mb-3">
                                        <b-form-select v-model="khung_gio_id" :options="khung_gio"></b-form-select>
                                    </div>
                                    <div class="mb-3">
                                        <b-form-input v-model="so_buoi" min="0" max="100000"
                                            placeholder="Nhập số buổi"></b-form-input>
                                    </div>
                                    <div class="mb-3">
                                        <b-form-input v-model="tong_tien" placeholder="Nhập giá tiền"></b-form-input>
                                    </div>
                                    <div class="mb-3">
                                        <b-form-input v-model="khuyen_mai" min="0" max="100"
                                            placeholder="Nhập khuyến mãi %"></b-form-input>
                                    </div>
                                </div>
                                <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                    <button class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                    <button class=" btn-delete ms-1" @click="add_price()">Tạo</button>
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
import ButtonAdd from '~/components/button/ButtonAdd.vue';
import ButtonComponent from '~/components/button/ButtonComponent.vue';
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    components: { ButtonAdd, ButtonComponent },
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Học phí và khuyến mãi',
                previous: '/admin/service/' + this.id + '/edit'
            },
            selectedFilter: '',
            todos: [],
            data: null,
            trinhDo_id: 1,
            trinhDo: [],
            khung_gio_id: 0,
            khung_gio: [],
            ca_id: 0,
            ca: [],
            giaBuoiHoc: [],
            so_buoi: null,
            tong_tien: null,
            khuyen_mai: null,
            id_edit: 0,
            so_buoi_edit: null,
            tong_tien_edit: null,
            khuyen_mai_edit: null,
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
        async send_data_edit(event) {
            event.preventDefault();
            if (!this.tong_tien_edit) {
                toastr.warning("vui lòng nhập đủ thông tin");
                return
            }
            const formData = new FormData()
            formData.append('id', this.id_edit)
            formData.append('dich_vu_id', this.id_edit)
            formData.append('trinh_do', this.trinhDo_id)
            formData.append('so_buoi', this.so_buoi_edit)
            formData.append('tong_tien', this.tong_tien_edit)
            formData.append('khuyen_mai', this.khuyen_mai_edit)
            formData.append('khung_gio_id', this.khung_gio_id)

            await api.post('dich-vu/cap-nhat-gia-buoi-hoc-v2', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-edit'].hide()
                    this.load_data();
                    window.location.reload()
                }
            })
        },
        total_money(a, b, c) {
            a= parseInt(a)
            b= parseInt(b)
            c= parseInt(c)
            if (c == 0) {
                return a * b
            } else {
                return (a * b) - (c / 100) * (a * b)
            }
        },
        edit_item(id) {
            this.id_edit = id
            api.get('dich-vu/chi-tiet-gia-buoi-hoc?goi_hoc_phi_id=' + id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.$refs['my-modal-edit'].show()
                this.ca_id = res?.data?.data?.khungGio?.ca?.id
                this.so_buoi_edit = res?.data?.data?.so_buoi
                this.tong_tien_edit = res?.data?.data?.tong_tien
                this.khuyen_mai_edit = res?.data?.data?.khuyen_mai

                // setTimeout(function() {
                this.khung_gio_id = res?.data?.data?.khungGio?.id
                console.log(this.khung_gio_id)
                // },1500)
                this.trinhDo_id = res?.data?.data?.trinh_do
            })
        },
        edit_item(id) {
            this.id_edit = id
            api.get('dich-vu/chi-tiet-gia-buoi-hoc?goi_hoc_phi_id=' + id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.$refs['my-modal-edit'].show()
                this.ca_id = res?.data?.data?.khungGio?.ca?.id
                this.so_buoi_edit = res?.data?.data?.so_buoi
                this.tong_tien_edit = res?.data?.data?.tong_tien
                this.khuyen_mai_edit = res?.data?.data?.khuyen_mai

                // setTimeout(function() {
                this.khung_gio_id = res?.data?.data?.khungGio?.id
                console.log(this.khung_gio_id)
                // },1500)
                this.trinhDo_id = res?.data?.data?.trinh_do
            })
        },
        async load_role() {
            await api.get('dich-vu/get-do-tuoi', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.do_tuoi = res?.data?.data.map(item => {
                    return {
                        value: item.id,
                        text: item.name
                    };
                })
                this.do_tuoi_id = this.do_tuoi[0].value
            })

            await api.get('dich-vu/get-ca', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.ca = res?.data?.data.map(item => {
                    return {
                        value: item.id,
                        text: item.name
                    };
                })
                this.ca_id = this.ca[0].value
            })
        },
        async load_data() {
            await api.get(`dich-vu/danh-sach-gia-buoi-hoc?trinh_do=${this.selectedFilter}&page=1&limit=1000&sort=0&dich_vu_id=` + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                const user = res?.data?.data.dichVu
                this.data = user

                this.trinhDo = res?.data?.data?.trinhDo.map(item => {
                    return {
                        value: item.id,
                        text: item.name
                    };
                })

                this.trinhDo_id = this.trinhDo[0].value
                if (this.selectedFilter == null || this.selectedFilter == '') {
                    this.selectedFilter = this.trinhDo[0].value
                }

                this.todos = res?.data?.data?.giaBuoiHoc

            })
        },
        async add_price(event) {
            // event.preventDefault();
            const formData = new FormData()
            formData.append('dich_vu_id', this.id)
            formData.append('trinh_do', this.trinhDo_id)
            formData.append('so_buoi', this.so_buoi)
            formData.append('tong_tien', this.tong_tien)
            formData.append('khuyen_mai', this.khuyen_mai)
            formData.append('khung_gio_id', this.khung_gio_id)

            await api.post('dich-vu/them-gia-buoi-hoc', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    this.load_data()
                    toastr.success(res?.data?.message);
                    this.so_buoi = '';
                    this.tong_tien = '';
                    this.khuyen_mai = '';
                    this.$refs['my-modal'].hide()
                    setTimeout(function () {
                        window.location.reload()
                    }, 1000)
                    // this.$router.push('/admin/service/' + this.id + '/edit');
                }
            })
        },
        async delete_item(id, name) {
            const formData = new FormData();
            formData.append('id', id)

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
                    await api.post('dich-vu/xoa-gia-buoi-hoc', formData, {
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
                            // this.load_role()
                        } else {
                            toastr.error(res?.data?.message);
                        }
                    })

                }
            })

        },
        async updateFilter(filter) {
            this.selectedFilter = await filter ?? '';
            console.log(this.selectedFilter)
            // await this.load_data()
        }
    },
    mounted() {
        this.load_role()
        this.load_data()
        this.title.previous = '/admin/service/' + this.id + '/edit'
        this.$store.dispatch('title/set_title', this.title);
    },
    watch: {
        selectedFilter() {
            this.load_data()
        },
        ca_id() {
            api.get(`dich-vu/danh-sach-khung-gio-full?dich_vu_id=${this.id}&type=` + this.ca_id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.khung_gio = res?.data?.data?.khungGio?.map(item => {
                    return {
                        value: item?.id,
                        text: item?.khung_gio
                    };
                })
                if (this.id_edit == 0) {
                    this.khung_gio_id = this.khung_gio[0].value
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.support-hr {
    margin: 25px 0px 25px 0px;
}

.end {
    position: absolute;
    color: rgba(45, 45, 45, 0.60);
    text-align: right;
    font-family: SVN-Gilroy;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    top: 10px;
    right: 12px;
}

.input-service {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 10px;
    border: 1px solid #E5E5E5;
    background: #FFF;
    padding: 13px 9px;
}

.flex-1 {
    flex: 1;
}

.span-title {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
</style>