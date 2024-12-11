<template>
    <div class="content-mp">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="8" lg="8" xl="8">
                <div>
                    <b-row class="search mb-3">
                        <b-col cols="12" md="6">
                            <b-form-input v-model.lazy="tuKhoa" placeholder="Tìm kiếm lịch sử"></b-form-input>
                        </b-col>
                    </b-row>
                </div>
                <div>
                    <table class="table table-bordered table-hover table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Số tiền</th>
                                <th>Tiêu đề</th>
                                <th>Loại</th>
                                <th>Ví</th>
                                <th>Mội dung</th>
                                <th>Ghi chú</th>
                                <th>Tạo lúc</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, i) in data" v-bind:key="i">
                                <td>
                                    {{ item?.id }}
                                </td>
                                <td>
                                    {{ formatCurrency(item?.so_tien) }}
                                </td>
                                <td>
                                    {{ item?.tieu_de }}
                                </td>
                                <td>
                                    {{ item?.type }}
                                </td>
                                <td>
                                    {{ formatCurrency(item?.vi_dien_tu) }}
                                </td>
                                <td>
                                    {{ item?.noi_dung }}
                                </td>
                                <td>
                                    {{ item?.ghi_chu }}
                                </td>
                                <td>
                                    {{ item?.created }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
                name: 'Nạp/ Trừ tiền',
                previous: '/admin/users/teachers/' + (this.id ?? 0)
            },
            tuKhoa: '',
            timeOut: null,
            timer: 700,
            tru_tien_id: null,
            tru_tien: null,
            nap_tien_id: null,
            nap_tien: null,
            so_tien: null,
            ghi_chu: null,
            data: null,
            per_page: 0,
            current_page: 1,
            total: 0,
        };
    },
    validate({ params }) {
        return /^\d+$/.test(params.id);
    },
    computed: {
        id() {
            console.log(this.$route.params.id)
            return this.$route.params.id
        },
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key;
        },
    },
    methods: {
        async load_role() {
            await api.get(`giao-vien/lich-su-tai-chinh?page=${this.current_page}&limit=10000&tuKhoa=${this.tuKhoa}&sort=1&id=` + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.data = res?.data?.data?.giaoDich
            })
        },
        async nap(event) {
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('so_tien', this.so_tien)
            formData.append('ghi_chu', this.ghi_chu)
            formData.append('type_id', this.nap_tien_id)

            await api.post('giao-vien/nap-tien', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-nap'].hide()
                    this.$router.push('/admin/users/teachers/' + this.id ?? 0);
                }
            })
        },
        async tru(event) {
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('so_tien', this.so_tien)
            formData.append('ghi_chu', this.ghi_chu)
            formData.append('type_id', this.nap_tien_id)

            await api.post('giao-vien/rut-tien', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-tru'].hide()
                    this.$router.push('/admin/users/teachers/' + this.id ?? 0);
                }
            })
        }
    },
    mounted() {
        this.title.previous = '/admin/users/teachers/' + (this.id ?? 0) + '/recharge'
        this.$store.dispatch('title/set_title', this.title);
        this.load_role()
    },
    watch: {
        tuKhoa() {
            clearTimeout(this.timeOut);

            this.timeOut = setTimeout(() => {
                // this.$emit("click");
                this.current_page = 1
                this.load_role()

            }, this.timer);
        },
    }
}
</script>
