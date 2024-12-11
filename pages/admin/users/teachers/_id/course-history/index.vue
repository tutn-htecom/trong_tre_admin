<template>
    <div class="content-mp history-course">
        <div class="d-flex align-items-center justify-content-end mb-5">
            <div class="d-inline-block">
                <div class="d-flex">

                    <label class="select me-2">
                        <b-form-select id="example-locales" v-model="arrange" :options="arranges"
                            class="mb-2"></b-form-select>
                    </label>

                    <label class="select">
                        <b-input-group class="mb-3">
                            <b-form-input id="example-input" v-model="value" type="text" placeholder="YYYY-MM-DD"
                                autocomplete="off"></b-form-input>
                            <b-input-group-append>
                                <b-form-datepicker v-model="value" button-only right locale="en-US"
                                    aria-controls="example-input" @context="onContext"></b-form-datepicker>
                            </b-input-group-append>
                        </b-input-group>
                    </label>

                </div>
            </div>
        </div>

        <v-row>
            <v-col v-for="(item, n) in data" :key="n" xs="12" sm="6" md="4" lg="4" xl="3">
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
                name: 'Lịch sử khóa học',
                previous: '/admin/users/teachers/' + (this.id ?? 0)
            },
            value: '',
            arrange: 1,
            arranges: [
                { value: '0', text: 'Mới nhất' },
                { value: '1', text: 'Cũ nhất' },
            ],
            status: [
                'doing',
                'done',
            ],
            user: [],
            data: [],
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
            return storedUser.auth_key
        }
    },
    methods: {
        async load_data() {
            api.get(`giao-vien/lich-su-don-day?giao_vien_id=${this.id}&page=1&limit=&sort=1`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.data = res?.data?.data ?? []
            })
        },
        generateRandomNumber() {
            const result = this.status[Math.floor(Math.random() * 2)]
            console.log(result)
            return result;
        }
    },
    mounted() {
        this.load_data()
        this.title.previous = '/admin/users/teachers/' + (this.id ?? 0)
        this.$store.dispatch('title/set_title', this.title);
    },
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