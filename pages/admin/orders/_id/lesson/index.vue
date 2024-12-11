<template>
    <div class="content-mp">

        <v-row>
            <v-col xs="12" sm="12" md="12" lg="7" xl="7">
                <div class="card">
                    <div class="card-header text-light d-flex justify-content-between align-items-center">
                        <span class="mdi mdi-chevron-left fs-5" @click="prev()"></span>
                        <strong>Buổi {{ data?.buoi ?? 1 }} / {{ data?.tong_buoi }}</strong>
                        <span class="mdi mdi-chevron-right fs-5" @click="next()"></span>
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <div>
                                <span class="mdi mdi-calendar-alert-outline"></span>
                                <span>
                                    {{ data?.ngay_day }}
                                </span>
                            </div>
                            <div>
                                <span class="mdi mdi-clock-time-eight-outline"></span>
                                <span>
                                    {{ data?.ca_day }}
                                </span>
                            </div>
                        </div>
                        <v-divider></v-divider>
                        <div class="mt-2">
                            <div>
                                <div>
                                    <div class="mb-3" v-for="item in data?.ke_hoach_day?.goiHoc" v-bind:key="item?.id">
                                        <h5 class="text-primary fw-bold mt-5">
                                            {{ item?.tieu_de ?? 'Chưa cập nhật tiêu đề buổi học ...' }}
                                        </h5>
                                        <v-expansion-panels>
                                            <v-expansion-panel v-for="i in item?.buoiHoc" v-bind:key="i?.id">
                                                <v-expansion-panel-header>
                                                    Nội dung hoạt động buổi {{ i?.buoi ?? 1 }}
                                                </v-expansion-panel-header>
                                                <v-expansion-panel-content>
                                                    <p v-html="i?.noi_dung"></p>
                                                </v-expansion-panel-content>
                                            </v-expansion-panel>
                                        </v-expansion-panels>
                                    </div>
                                    <!-- <p class="text-secondary">{{ data?.ke_hoach_day ?? 'Chưa cập nhật nội dung ...' }}</p> -->
                                </div>
                            </div>
                        </div>
                        <v-divider></v-divider>
                        <div class="mt-2">
                            <div>
                                <div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <strong class="text-dark">
                                            Nhận xét buổi học
                                        </strong>
                                        <a class="btn-detail" :href="'/admin/review-lesson/' + data?.id" target="_blank">
                                            Xem chi tiết <span class="mdi mdi-arrow-right-thin ms-2"></span>
                                        </a>
                                    </div>
                                    <p class="text-secondary">
                                        {{ data?.nhan_xet_buoi_hoc ?? 'Chưa cập nhật' }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <v-divider></v-divider>
                        <div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center">
                                    <div class="me-2 layout-user">
                                        <img :src="giaoVien?.anh_nguoi_dung" alt="">
                                    </div>
                                    <div>
                                        <h3 class="user-name">
                                            {{ giaoVien?.hoten }}
                                        </h3>
                                        <p class="w-p p-0 m-0">
                                            {{ giaoVien?.dien_thoai }}
                                        </p>
                                    </div>
                                </div>

                                <div class="d-flex">
                                    <div class="me-2">
                                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="19" cy="19" r="19" fill="#0056B1" fill-opacity="0.1" />
                                            <path
                                                d="M11.6796 9.84669L12.8192 8.70711C13.2097 8.31658 13.8429 8.31658 14.2334 8.70711L17.2403 11.7139C17.6308 12.1045 17.6308 12.7376 17.2403 13.1282L15.1847 15.1837C14.8544 15.514 14.7725 16.0187 14.9814 16.4365C16.1892 18.8521 18.1479 20.8108 20.5635 22.0186C20.9813 22.2275 21.486 22.1456 21.8163 21.8153L23.8718 19.7597C24.2624 19.3692 24.8955 19.3692 25.2861 19.7597L28.2929 22.7666C28.6834 23.1571 28.6834 23.7903 28.2929 24.1808L27.1533 25.3204C25.042 27.4317 21.6994 27.6693 19.3107 25.8777L17.2602 24.3398C15.5166 23.0322 13.9678 21.4834 12.6602 19.7399L11.1223 17.6893C9.33072 15.3006 9.56827 11.958 11.6796 9.84669Z"
                                                fill="#0056B1" />
                                        </svg>
                                    </div>
                                    <div>
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
                                    </div>
                                </div>
                            </div>
                        </div>

                        <v-divider></v-divider>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>Tình trạng</div>
                            <div>{{ data?.trang_thai?.name }}</div>
                        </div>

                        <v-divider></v-divider>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <v-btn rounded color="primary" dark v-b-modal.my-modal-doi-gio>
                                    Đổi giờ
                                </v-btn>
                                <v-btn rounded color="warning" dark v-b-modal.my-modal-doi-ngay>
                                    Đổi ngày
                                </v-btn>
                            </div>
                            <v-btn v-if="data?.trang_thai?.name != 'Đã hoàn thành' && data?.trang_thai?.name != 'Đã hủy'" rounded color="red" dark @click="delete_item()">
                                Huỷ buổi
                            </v-btn>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>

        <b-modal id="my-modal-doi-ngay" ref="my-modal-doi-ngay" hide-footer centered title="Thay đổi ngày dạy">
            <template #default="{ hide }">
                <form>

                    <div class="">
                        <!-- <v-card class=""> -->
                            <!-- <v-card-text> -->
                                <div>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.92188 0C4.51387 0 0.921875 3.592 0.921875 8C0.921875 12.408 4.51387 16 8.92188 16C13.3299 16 16.9219 12.408 16.9219 8C16.9219 3.592 13.3299 0 8.92188 0ZM12.4019 10.856C12.2899 11.048 12.0899 11.152 11.8819 11.152C11.7779 11.152 11.6739 11.128 11.5779 11.064L9.09788 9.584C8.48188 9.216 8.02588 8.408 8.02588 7.696V4.416C8.02588 4.088 8.29788 3.816 8.62587 3.816C8.95388 3.816 9.22587 4.088 9.22587 4.416V7.696C9.22587 7.984 9.46587 8.408 9.71387 8.552L12.1939 10.032C12.4819 10.2 12.5779 10.568 12.4019 10.856Z"
                                            fill="#00C092" />
                                    </svg>
                                    <span>Chọn Ngày</span>
                                </div>
                                <div class="mb-3">
                                    <div>
                                        <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field v-model="date" label=""
                                                    prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                                            </template>
                                            <v-date-picker v-model="date" scrollable>
                                                <v-spacer></v-spacer>
                                                <v-btn text color="primary" @click="modal = false">
                                                    Cancel
                                                </v-btn>
                                                <v-btn text color="primary" @click="$refs.dialog.save(date)">
                                                    OK
                                                </v-btn>
                                            </v-date-picker>
                                        </v-dialog>
                                    </div>
                                </div>


                                <!-- <div v-html="content">

                        </div> -->
                            <!-- </v-card-text> -->
                        <!-- </v-card> -->

                    </div>
                    <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                        <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                        <button type="button" class=" btn-delete ms-1" @click="send_doi_ngay()">Xác nhận</button>
                    </div>
                </form>

            </template>
        </b-modal>

        <b-modal id="my-modal-doi-gio" ref="my-modal-doi-gio" hide-footer centered title="Thay đổi giờ dạy">
            <template #default="{ hide }">
                <form>

                    <div class="">
                        <v-card class="">
                            <v-card-text>
                                <div>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.92188 0C4.51387 0 0.921875 3.592 0.921875 8C0.921875 12.408 4.51387 16 8.92188 16C13.3299 16 16.9219 12.408 16.9219 8C16.9219 3.592 13.3299 0 8.92188 0ZM12.4019 10.856C12.2899 11.048 12.0899 11.152 11.8819 11.152C11.7779 11.152 11.6739 11.128 11.5779 11.064L9.09788 9.584C8.48188 9.216 8.02588 8.408 8.02588 7.696V4.416C8.02588 4.088 8.29788 3.816 8.62587 3.816C8.95388 3.816 9.22587 4.088 9.22587 4.416V7.696C9.22587 7.984 9.46587 8.408 9.71387 8.552L12.1939 10.032C12.4819 10.2 12.5779 10.568 12.4019 10.856Z"
                                            fill="#00C092" />
                                    </svg>
                                    <span>Chọn ca</span>
                                </div>
                                <div class="mt-2 d-in">
                                    <b-form-group class="" v-slot="{ ariaDescribedby }">
                                        <b-form-radio v-for="(item, i) in chon_ca" v-bind:key="i" v-model="chon_ca_id"
                                            :aria-describedby="ariaDescribedby" name="chon_ca" :value="item?.id">{{
                                                item?.name }}</b-form-radio>
                                    </b-form-group>
                                </div>
                                <div class="mb-3">
                                    <b-form-select v-model="khung_gio" :options="khung_gios"></b-form-select>
                                </div>


                                <!-- <div v-html="content">

                        </div> -->
                            </v-card-text>
                        </v-card>

                    </div>
                    <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                        <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                        <button type="button" class=" btn-delete ms-1" @click="send_doi_gio()">Xác nhận</button>
                    </div>
                </form>

            </template>
        </b-modal>

    </div>
</template>

<script>
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';
import { Swiper, SwiperSlide } from 'swiper';
import 'swiper/swiper.css';
import { Pagination } from 'swiper/modules';

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Tiến độ khóa học',
                previous: '/admin/orders'
            },
            part: 1,
            data: null,
            giaoVien: null,
            list: null,
            file: null,
            image: null,
            kds: null,
            kds_id: null,
            teachers: null,
            teacher_id: null,
            li_do_huy: null,
            phu_phi_li_do: null,
            phu_phi_tien: null,
            xac_nhan_thanh_toan: false,
            buoi: 1,
            chon_ca: [],
            chon_ca_id: 0,
            khung_gio: 1,
            khung_gios: [],
            don_dich_vu_id: null,
            id_buoi: null,
            date: null,
        };
    },
    components: {
        Swiper,
        SwiperSlide,
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
        },
    },
    methods: {
        async load_data() {
            await api.get(`don-dich-vu/chi-tiet?id=` + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.don_dich_vu_id = res?.data?.data?.dich_vu_id
            })

            await api.get(`don-dich-vu/tien-do-khoa-hoc?id=${this.id}&buoi=${this.buoi}`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log("123",res)
                this.data = res?.data?.tienDo
                this.buoi = res?.data?.tienDo?.buoi
                this.giaoVien = res?.data?.giaoVien

                this.chon_ca_id = res?.data?.tienDo?.ca_id ?? 0
                this.khung_gio = res?.data?.tienDo?.khung_gio_id ?? 0
                this.id_buoi = res?.data?.tienDo?.id
            })

            await api.get(`dich-vu/get-ca`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.chon_ca = res?.data?.data
            })


        },
        async prev() {
            this.buoi = this.buoi - 1
            if (this.buoi <= 0) {
                this.buoi = this.buoi + 1
                toastr.error('Số buổi không hợp lệ');
                return;
            }

            await api.get(`don-dich-vu/tien-do-khoa-hoc?id=${this.id}&buoi=${this.buoi}`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.data = res?.data?.tienDo
                this.buoi = res?.data?.tienDo?.buoi
                this.giaoVien = res?.data?.giaoVien

                this.id_buoi = res?.data?.tienDo?.id
            })
        },
        async next() {
            this.buoi = this.buoi + 1
            if (this.buoi > this.data?.tong_buoi) {
                this.buoi = this.buoi - 1
                toastr.error('Số buổi không hợp lệ');
                return;
            }

            await api.get(`don-dich-vu/tien-do-khoa-hoc?id=${this.id}&buoi=${this.buoi}`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.data = res?.data?.tienDo
                this.buoi = res?.data?.tienDo?.buoi
                this.giaoVien = res?.data?.giaoVien

                this.id_buoi = res?.data?.tienDo?.id
            })
        },
        async send_data(event) {
            event.preventDefault();
            const formData = new FormData(document.getElementById('form'))
            await api.post('dao-tao/tao-moi', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal'].hide()
                    this.clearFiles();
                    this.name = null
                    this.load_data();
                }
            })
        },
        async send_doi_gio() {
            const formData = new FormData()
            formData.append('ca_day_id', this.id_buoi)
            formData.append('khung_gio_id', this.khung_gio)

            await api.post('don-dich-vu/doi-gio-day', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);

                    // setTimeout(function() {
                    //     window.location.reload()
                    // },1000)
                    this.load_data()
                }
            })
        },
        async send_doi_ngay() {
            const formData = new FormData()
            formData.append('ca_day_id', this.id_buoi)
            const date = new Date(this.date);
            // const formattedDate = date.toLocaleDateString('en-GB');
            const day = date.getDate(); // Get day (without leading zero)
            const month = date.getMonth() + 1; // Get month (0-based index, so add 1)
            const year = date.getFullYear(); // Get full year

            const formattedDate = `${day}/${month}/${year}`;
            // console.lo
            formData.append('ngay_day', formattedDate)

            await api.post('don-dich-vu/doi-ngay-day', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);

                    this.load_data()
                }
            })
        },
        async delete_item() {
            const formData = new FormData();
            formData.append('ca_day_id', this.id_buoi)

            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: `Huỷ buổi!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Có huỷ nó!',
                cancelButtonText: 'Huỷ'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.post('don-dich-vu/huy-ca', formData, {
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
                        } else {
                            // toastr.error(res?.data?.message);
                        }
                    })

                }
            })
        },
    },
    mounted() {
        const buoi = this.$route.query.d ?? 1;
        if(buoi && buoi !=1) {
            this.buoi = parseInt(buoi)
            // this.buoi = parseInt(buoi) + 1
        } else {
            this.buoi = buoi
        }
        // console.log(d); // Output: "6"
        this.title.previous = '/admin/orders/' + this.id
        this.$store.dispatch('title/set_title', this.title);
        this.load_data()

        const swiper = new Swiper('#sw1', {
            modules: [Pagination],
            slidesPerView: 2,
            spaceBetween: 25,
            freeMode: true,
        });
    },
    watch: {
        async chon_ca_id() {
            console.log(this.selected)
            await api.get(`dich-vu/danh-sach-khung-gio-full?dich_vu_id=${this.don_dich_vu_id}&type=` + this.chon_ca_id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {

                this.khung_gios = res?.data?.data?.khungGio?.map(item => {
                    return {
                        value: item?.id,
                        text: item?.khung_gio,
                        content: item?.noi_dung ?? ''
                    };
                })
                // this.khung_gio = this.khung_gios[0]?.value ?? 0
            })
        },
    }
}
</script>

<style lang="scss" scoped>
.card-header {
    border-radius: 0px 0px 20px 20px;
    background: #0056B1;
}

.mdi {
    font-weight: 700;
}

.btn-detail {
    border-radius: 33px;
    background: #0056B1;
    padding: 2px 13px;
    color: #FFF;
    font-size: 13px;
    display: flex;
    align-items: center;

    .mdi {
        font-size: 20px;
        color: #FFF !important;
    }
}

.fs-5 {
    font-size: 25px;
    cursor: pointer;
}

table {
    margin: 0 !important;
    padding: 0 !important;
}

button:hover {
    span {
        color: white;
    }
}

button {
    transition: 0.3s;

    span {
        transition: 0.3s;
    }
}

.btn {
    padding: 0.575rem 0.75rem !important;
}

.card-teacher {
    border-radius: 10px;
    background: #FFF;
    border: 1px solid #c9c8c8;
    padding: 10px;
    margin-bottom: 10px;
}

.card-teacher.active {
    border-radius: 10px;
    border: 1px solid #4EAEEA;

    background: #E7F6FF;
}
</style>