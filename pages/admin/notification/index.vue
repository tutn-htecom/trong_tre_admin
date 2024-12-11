<template>
    <div class="content-mp">
        <div class="notification">
            <v-row class="">
                <v-col class="w-100" xs="12" sm="12" md="7" lg="7" xl="7">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <title-header>Thông báo đã gửi</title-header>
                        <nuxt-link to="/admin/notification/create">
                            <button-add addClass="btn-header">
                                <span class="mdi mdi-plus"></span> Tạo thông báo
                            </button-add>
                        </nuxt-link>
                    </div>
                    <div class="d-flex flex-wrap">
                        <!-- <button class="btn btn-type active">Tất cả</button> -->
                        <div class="btn btn-type" :class="{ active: selectedFilter === '' }" @click="updateFilter('')">
                            Tất cả
                        </div>
                        <div class="btn btn-type" v-for="(item, index) in types" :key="index"
                            :class="{ active: selectedFilter === item?.id }" @click="updateFilter(item?.id)">
                            {{ item?.name }}
                        </div>
                    </div>
                </v-col>

                <template v-for="(item, index) in data">
                    <v-col class="w-100" v-bind:key="index" xs="12" sm="12" md="7" lg="7" xl="7">
                        <div style="min-width: 245px;" class="d-flex w-100">
                            <div class="time">{{ item?.date }}</div>
                            <div class="br-bt"></div>
                        </div>

                        <div v-for="(i, n) in item?.data" v-bind:key="n" style="min-width: 245px;"
                            class="mt-3 card-notification hover-card wow animate__animated animate__zoomIn">
                            <div class="me-3">
                                <div class="box-img-no">
                                    <img :src="i?.image" />
                                </div>
                            </div>
                            <div class="w-100">
                                <div class="notification-title">{{ i?.tieu_de }} !</div>
                                <div class="time mt-2">{{ i?.created }}</div>
                                <hr class="my-1" />
                                <div>
                                    <span class="span1">Nội dung:</span>
                                    <span class="ms-1 span2" v-html="i?.noi_dung"></span>
                                </div>
                                <div>
                                    <span class="span1">Bởi:</span>
                                    <span class="ms-1 span2">{{ i?.user?.hoten }}</span>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </template>

                <div class="d-flex justify-content-center mt-4 w-100">
                    <b-pagination v-model="current_page" :total-rows="total" :per-page="per_page" first-text="First"
                        prev-text="Prev" next-text="Next" last-text="Last"></b-pagination>

                </div>
            </v-row>
        </div>
    </div>
</template>

<script>
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    layout: 'admin_notification',
    data() {
        return {
            title: {
                name: 'Quản lý thông báo',
                previous: '/admin/dashboard'
            },
            data: null,
            types: null,
            selectedFilter: '',
            per_page: 0,
            current_page: 1,
            total: 0,
            tuKhoa: '',
        };
    },
    computed: {
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        },
        keyword() {
            return this.$store.getters[`notification/keyword`]
        },
    },
    methods: {
        async load_type() {
            await api.get('thong-bao/get-type', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.types = res?.data?.data
            })
        },
        async load_data() {
            await api.get(`thong-bao/danh-sach?type=${this.selectedFilter}&limit=10&sort=1&tuKhoa=${this.tuKhoa}&page=${this.current_page}`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.data = res?.data?.data
                this.per_page = res?.data?.per_page ?? 0
                this.current_page = res?.data?.current_page ?? 0
                this.total = res?.data?.total
            })
        },
        async updateFilter(filter) {
            this.selectedFilter = await filter ?? '';
            await this.load_data()
        }
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
        this.load_type()
        this.load_data()
    },
    components: {},
    watch: {
        current_page() {
            this.load_data()
        },
        keyword() {
            this.tuKhoa = this.keyword
        },
        tuKhoa() {
            clearTimeout(this.timeOut);

            this.timeOut = setTimeout(() => {
                this.load_data()

            }, this.timer);
        },
    }
}
</script>

<style lang="scss" scoped>
.box-img-no {
    width: 48px;
    height: 48px;
    overflow: hidden;
    border-radius: 50%;

    img {
        width: 100%;
    }
}
.notification {
    .card-notification {
        border-radius: 10px;
        background: #FFF;
        width: 100%;
        padding: 15px;
        display: flex;

        .notification-title {
            color: #2D2D2D;
            font-family: SVN-Gilroy;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }

        .span1 {
            color: rgba(45, 45, 45, 0.80);
            font-family: SVN-Gilroy;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
        }

        .span2 {
            color: rgba(45, 45, 45, 0.80);
            font-family: SVN-Gilroy;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px;
        }
    }

    .time {
        color: #7D7D7D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        flex: 1;
        min-width: fit-content;
    }

    .br-bt {
        width: 100%;
        border-bottom: 1px solid #E5E5E5;
    }

    .btn-type {
        border-radius: 46px;
        background: #E5E5E5;
        display: flex;
        padding: 10px 28px;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        color: #2D2D2D;
        text-align: center;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        margin-right: 10px;
        margin-bottom: 10px;
        line-height: normal;
        transition: 0.3s;

        &:hover {
            background: #FC4D32;
            color: white;
        }
    }

    .active {
        background: #FC4D32;
        color: white;
    }

    @media (max-width: 600px) {
        .btn-type {
            padding: 8px 25px;
            margin-right: 7px;
            margin-bottom: 7px;
        }
    }
}
</style>