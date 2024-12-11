<template>
    <div class="content-mp history-course">
        <div class="d-flex align-items-center justify-content-between mb-5">
            <div class="mb-2">
                <TitleHeader>Danh sách đơn dịch vụ</TitleHeader>
            </div>

            <div>
                <b-form-select id="example-locales" v-model="arrange" :options="arranges" class="mb-2"></b-form-select>
            </div>
        </div>

        <v-row>
            <v-col v-for="(item, index) in data" :key="index" xs="12" sm="6" md="4" lg="4" xl="3">
                <card-service :data="item" :status="item?.trang_thai"></card-service>
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
                name: 'Lịch sử đăng ký dịch vụ',
                previous: '/admin/users/parent/' + this.id ?? 0
            },
            data: null,
            value: '',
            arrange: 0,
            arranges: [
                { value: '0', text: 'Mới nhất' },
                { value: '1', text: 'Cũ nhất' },
            ],
            status: [
                'doing',
                'done',
            ]
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
        generateRandomNumber() {
            const result = this.status[Math.floor(Math.random() * 2)]
            console.log(result)
            return result;
        },
        async load_data() {
            await api.get(`phu-huynh/danh-sach-don?tuKhoa=&page=1&limit=100&sort=${this.arrange}&phu_huynh_id=` + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                const user = res?.data?.data
                this.data = user
                // this.hoten = user?.hoten
                // this.dien_thoai = user?.dien_thoai
                // this.selected = user?.vai_tro
            })
        },
    },
    mounted() {
        this.title.previous = '/admin/users/parent/' + (this.id ?? 0)
        this.$store.dispatch('title/set_title', this.title);
        this.load_data();
    },
    watch: {
        arrange() {
            this.load_data();
        }
    }
}
</script>

<style lang="scss" scoped>
.hover-card {
    transition: 0.2s;
}

.hover-card:hover {
    box-shadow: 0 0 25px -5px #9e9c9e;
}
</style>