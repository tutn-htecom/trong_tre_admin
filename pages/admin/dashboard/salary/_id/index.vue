<template>
    <div class="content-mp">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="8" lg="8" xl="8">
                <div class="d-flex justify-content-between align-items-center mb-5">
                    <title-header>Tổng lương theo tháng</title-header>

                    <div class="d-inline-block">
                        <div>
                            <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="date" label="" class="month-picker" prepend-icon="mdi-calendar"
                                        readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker v-model="date" type="month" scrollable>
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
                </div>

                <div>
                    <v-card>
                        <v-card-text>
                            <div>
                                <div>
                                    <div class="d-flex align-items-center">
                                        <div class="box-img me-3">
                                            <img :src="data?.anh_nguoi_dung" />
                                        </div>
                                        <div>
                                            <div class="blade blade-id"># {{ data?.id }}</div>
                                            <div class="user-name">
                                                <nuxt-link class="" :to="'/admin/users/teachers/' + data?.id ">
                                                {{ data?.hoten ?? 'Chưa cập nhật tên' }}
                                                </nuxt-link>
                                            </div>
                                            <div class="">
                                                <span class="text-muted">
                                                    {{ data?.dien_thoai ?? 'Chưa cập' }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <table class="table table-light">
                                        <tr>
                                            <td>
                                                <span>Tổng lương</span>
                                            </td>
                                            <td>
                                                <span>{{ formatCurrency(data?.tongLuong) }}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>Phụ cấp</span>
                                            </td>
                                            <td>
                                                <span>{{ formatCurrency(data?.phuCap) }}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>Ăn trưa</span>
                                            </td>
                                            <td>
                                                <span>{{ formatCurrency(data?.anTrua) }}</span>
                                            </td>
                                        </tr>
                                        <!-- <tr>
                                            <td>
                                                <span>Gửi xe</span>
                                            </td>
                                            <td>
                                                <span>{{ formatCurrency(data?.dien_thoai) }}</span>
                                            </td>
                                        </tr> -->
                                    </table>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </div>

                <div class="w-100 mt-5" @click="change_page()">
                    <button-add>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.60841 16.4166C6.29175 15.6833 7.33342 15.7416 7.93342 16.5416L8.77508 17.6666C9.45008 18.5583 10.5417 18.5583 11.2167 17.6666L12.0584 16.5416C12.6584 15.7416 13.7001 15.6833 14.3834 16.4166C15.8667 18 17.0751 17.475 17.0751 15.2583V5.86663C17.0834 2.50829 16.3001 1.66663 13.1501 1.66663H6.85008C3.70008 1.66663 2.91675 2.50829 2.91675 5.86663V15.25C2.91675 17.475 4.13341 17.9916 5.60841 16.4166Z"
                                stroke="#4EAEEA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.66675 5.83337H13.3334" stroke="#4EAEEA" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M7.5 9.16663H12.5" stroke="#4EAEEA" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        Tạo phiếu lương
                    </button-add>
                </div>

                <div class="mt-6">
                    <title-header>Báo cáo lương theo ngày</title-header>
                </div>

                <div class="mt-4">
                    <v-card class="mt-3" v-for="(item, n) in data?.luong" v-bind:key="n">
                        <div class="card-header">
                            <div class="d-flex">
                                <div class="me-5">
                                    <b class="me-1">Mã đơn:</b>
                                    <span>
                                        <!-- {{ item?.ma_don_hang }} -->
                                        <nuxt-link :to="'/admin/orders/' + item?.id">
                                        <span>{{ item?.ma_don_hang ?? 'Chưa cập nhật' }}</span>
                                    </nuxt-link>
                                    </span>
                                </div>
                                <div>
                                    <b class="me-1">Ngày:</b>
                                    <span class="text-primary">{{ item?.created }}</span>
                                </div>
                            </div>
                        </div>
                        <v-card-text>
                            <div>
                                <table class="table table-borderless">
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span class="me-2">
                                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="5" cy="5" r="5" fill="yellow" />
                                                    </svg>
                                                </span>
                                                <b>Buổi</b>
                                            </td>
                                            <td>{{ item?.buoi }}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span class="me-2">
                                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="5" cy="5" r="5" fill="#00C092" />
                                                    </svg>
                                                </span>
                                                <b>Lương</b>
                                            </td>
                                            <td>{{ formatCurrency(item?.tong_tien) }}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span class="me-2">
                                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="5" cy="5" r="5" fill="#FC4D32" />
                                                    </svg>

                                                </span>
                                                <b>Phụ cấp/ngày</b>
                                            </td>
                                            <td>{{ formatCurrency(item?.phuCap) }}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span class="me-2">
                                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="5" cy="5" r="5" fill="#4EAEEA" />
                                                    </svg>

                                                </span>
                                                <b>Tổng lương theo ngày</b>
                                            </td>
                                            <td><b class="text-primary">
                                                    {{ formatCurrency(item?.thanh_tien) }}
                                                </b></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </v-card-text>
                    </v-card>
                </div>




            </v-col>
        </v-row>

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
                name: 'Chi tiết lương nhân sự',
                previous: '/admin/dashboard/salary'
            },
            data: null,
            date: new Date().toISOString().substr(0, 7),
            // date: this.thang_id +'/'+ (new Date()).getFullYear(),
            month: 1,
            menu: false,
            modal: false,
            select_date: '',
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
        change_page() {
            this.$router.push('/admin/dashboard/salary/' + this.id + '/create/' + this.date + '?t=' + (this.$route.query.t ?? 1));
        },
        async load_data() {
            var url = `chi-luong/chi-tiet?thang=${this.select_date}&page=1&limit=&sort=&tuKhoa=&id=` + this.id;
            console.log(url)
            await api.get(url, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                const user = res?.data?.data
                this.data = user
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
                }
            })
        },
    },
    mounted() {
        this.title.previous = '/admin/dashboard/salary?t=' + (this.$route.query.t ? parseInt(this.$route.query.t) : new Date().getMonth() + 1)
        this.$store.dispatch('title/set_title', this.title);
        let chuoi = this.date;
        let ketqua = chuoi.split('-');
        // this.select_date = ketqua[1] + "/" + ketqua[0]
        // this.$route.query.t
        // console.log(this.$route.query.t)
        // console.log(new Date().getFullYear())
        // this.date =  (new Date()).getFullYear()  +'/'+ (this.$route.query.t ?? 1)
        this.date = (new Date()).getFullYear() + "-" + (this.$route.query.t ?? 1)
        // console.log((new Date()).getFullYear()  +'/'+ (this.$route.query.t ?? 1))

        this.select_date =  (this.$route.query.t ?? 1) +'/'+ (new Date()).getFullYear()
        this.load_data()
    },
    watch: {
        date () {
            console.log(this.date)
            let chuoi = this.date;
            let ketqua = chuoi.split('-');
            // this.select_date = ketqua[1] + "/" + ketqua[0]
        },
        select_date() {
            this.load_data()
        }
    }
}
</script>


<style lang="scss" scoped>
.blade-id {
    display: initial;
}

.box-img {
    width: 55px;
    height: 55px;
    overflow: hidden;
    border-radius: 50%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>