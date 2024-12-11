<template>
    <div class="content-mp">
        <div class="notification">
            <!-- <div class="d-flex flex-wrap">
                <button class="btn btn-type active">Tất cả</button>
                <button class="btn btn-type">Đơn hàng</button>
                <button class="btn btn-type">Kết quả đào tạo</button>
                <button class="btn btn-type">Khác</button>
            </div>

            <v-row class="mt-3">
                <v-col class="w-100" xs="12" sm="12" md="7" lg="7" xl="7">
                    <div style="min-width: 245px;" class="d-flex w-100">
                        <div class="time">Hôm nay</div>
                        <div class="br-bt"></div>
                    </div>
                </v-col>

                <v-col class="" v-for="n in 3" :key="n" xs="12" sm="12" md="7" lg="7" xl="7">
                    <div style="min-width: 245px;"
                        class="card-notification hover-card wow animate__animated animate__zoomIn">
                        <div class="me-3">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="#FFB761" fill-opacity="0.2" />
                                <path opacity="0.4"
                                    d="M29.6233 12.3334H18.3766C15.8916 12.3334 13.8733 14.3634 13.8733 16.8367V33.275C13.8733 35.375 15.3783 36.2617 17.2216 35.2467L22.915 32.085C23.5216 31.7467 24.5016 31.7467 25.0966 32.085L30.79 35.2467C32.6333 36.2734 34.1383 35.3867 34.1383 33.275V16.8367C34.1266 14.3634 32.1083 12.3334 29.6233 12.3334Z"
                                    fill="#FFA02F" />
                                <path
                                    d="M26.9166 23.3H21.0833C20.6049 23.3 20.2083 22.9034 20.2083 22.425C20.2083 21.9467 20.6049 21.55 21.0833 21.55H26.9166C27.3949 21.55 27.7916 21.9467 27.7916 22.425C27.7916 22.9034 27.3949 23.3 26.9166 23.3Z"
                                    fill="#FFA02F" />
                            </svg>
                        </div>
                        <div class="w-100">
                            <div class="notification-title">Đơn hàng mới!</div>
                            <div class="time mt-2">10 phút trước • 11/08/2023</div>
                            <hr class="my-1" />
                            <div>
                                <span class="span1">Dịch vụ:</span>
                                <span class="ms-1 span2">Chương trình giáo dục sớm</span>
                            </div>
                            <div>
                                <span class="span1">Bởi:</span>
                                <span class="ms-1 span2">Nguyễn Thị Anh • Phụ huynh</span>
                            </div>
                        </div>
                    </div>
                </v-col>

                <v-col class="" v-for="n in 4" :key="n" xs="12" sm="12" md="7" lg="7" xl="7">
                    <div style="min-width: 245px;"
                        class="card-notification hover-card wow animate__animated animate__zoomIn">
                        <div class="me-3">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="#FC4D32" fill-opacity="0.1" />
                                <path
                                    d="M24.0817 20.4417C24.035 20.4417 23.965 20.4417 23.9067 20.4417C22.6817 20.3951 21.7134 19.4034 21.7134 18.1667C21.7134 16.9067 22.7284 15.8917 23.9884 15.8917C25.2484 15.8917 26.2634 16.9184 26.2634 18.1667C26.275 19.4034 25.3067 20.4067 24.0817 20.4417Z"
                                    fill="#FC4D32" />
                                <path
                                    d="M20.7917 23.9534C19.24 24.9917 19.24 26.6834 20.7917 27.7217C22.5533 28.9 25.4467 28.9 27.2083 27.7217C28.76 26.6834 28.76 24.9917 27.2083 23.9534C25.4467 22.7867 22.565 22.7867 20.7917 23.9534Z"
                                    fill="#FC4D32" />
                                <path opacity="0.4"
                                    d="M31 12.3334H17C15.0633 12.3334 13.5 13.885 13.5 15.7984V28.5267C13.5 30.44 15.0633 31.9917 17 31.9917H17.8867C18.82 31.9917 19.7067 32.3534 20.36 33.0067L22.355 34.9784C23.265 35.8767 24.7467 35.8767 25.6567 34.9784L27.6517 33.0067C28.305 32.3534 29.2033 31.9917 30.125 31.9917H31C32.9367 31.9917 34.5 30.44 34.5 28.5267V15.7984C34.5 13.885 32.9367 12.3334 31 12.3334ZM24 15.8917C25.26 15.8917 26.275 16.9184 26.275 18.1667C26.275 19.4034 25.295 20.395 24.0817 20.4417C24.035 20.4417 23.965 20.4417 23.9067 20.4417C22.6817 20.395 21.7133 19.4034 21.7133 18.1667C21.725 16.9184 22.74 15.8917 24 15.8917ZM27.2083 27.7217C25.4467 28.9 22.5533 28.9 20.7917 27.7217C19.24 26.695 19.24 24.9917 20.7917 23.9534C22.565 22.775 25.4583 22.775 27.2083 23.9534C28.76 24.9917 28.76 26.6834 27.2083 27.7217Z"
                                    fill="#FC4D32" />
                            </svg>
                        </div>
                        <div class="w-100">
                            <div class="notification-title">Phụ huynh gửi phản hồi!</div>
                            <div class="time mt-2">10 phút trước • 11/08/2023</div>
                            <hr class="my-1" />
                            <div>
                                <span class="span1">Thông tin:</span>
                                <span class="ms-1 span2">ôi cần tư vấn về dịch vụ....</span>
                            </div>
                            <div>
                                <span class="span1">Bởi:</span>
                                <span class="ms-1 span2">Nguyễn Thị Anh • Phụ huynh</span>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row> -->

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

                <!-- <div class="d-flex justify-content-center mt-4 w-100">
                    <b-pagination v-model="current_page" :total-rows="total" :per-page="per_page" first-text="First"
                        prev-text="Prev" next-text="Next" last-text="Last"></b-pagination>

                </div> -->
            </v-row>
        </div>
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
                name: 'Thông báo của tôi',
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
        // keyword() {
        //     return this.$store.getters[`notification/keyword`]
        // },
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
            await api.get(`thong-bao/thong-bao-user?type=${this.selectedFilter}&page=1&limit=1000&sort=1&tuKhoa`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.data = res?.data?.data?.thong_bao
                // this.per_page = res?.data?.per_page ?? 0
                // this.current_page = res?.data?.current_page ?? 0
                // this.total = res?.data?.total
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
    components: {}
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