<template>
    <div class="content-mp">

        <div class="admins-group-btn mb-5">
            <div class="btn btn-filter" :class="{ active: selectedFilter === '' }" @click="updateFilter('')">
                Tất cả
            </div>
            <div class="btn btn-filter" v-for="(item, index) in roles" :key="index"
                :class="{ active: selectedFilter === item?.id }" @click="updateFilter(item?.id)">
                {{ item?.name }}
            </div>
        </div>

        <div class="">
            <v-row>
                <v-col class="mt-0 pt-0" v-for="(item, index) in data" :key="index" xs="12" sm="6" md="4" lg="4" xl="3">
                    <b-card style="min-width: 245px;" class="wow animate__animated animate__flipInY position-relative">
                        <nuxt-link class="block w-100 teachers" :to="'/admin/users/teachers/' + item?.id">
                            <div class="d-flex align-center">
                                <div class="me-2 layout-user">
                                    <img :src="item?.anh_nguoi_dung" :alt="item?.hoten">
                                </div>
                                <div>
                                    <div class="d-flex align-items-center">
                                        <span class="blade-id me-2"># {{ item?.id }}</span>
                                        <span class="blade-rate">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10"
                                                viewBox="0 0 11 10" fill="none">
                                                <path
                                                    d="M4.46066 1.32835C4.85351 0.710079 5.75587 0.710078 6.14872 1.32835L7.01485 2.69149C7.16144 2.92219 7.39607 3.08284 7.66418 3.13605L9.203 3.44151C9.98137 3.59602 10.2783 4.55212 9.72438 5.12038L8.7729 6.09651C8.56414 6.31067 8.4622 6.60703 8.49504 6.9043L8.6476 8.28556C8.73067 9.03764 7.98069 9.60595 7.2791 9.32255L5.67923 8.67629C5.43897 8.57924 5.17041 8.57924 4.93015 8.67629L3.33027 9.32255C2.62869 9.60595 1.8787 9.03764 1.96178 8.28556L2.11434 6.9043C2.14717 6.60703 2.04523 6.31067 1.83647 6.09651L0.884995 5.12038C0.331079 4.55212 0.628003 3.59602 1.40638 3.44151L2.9452 3.13605C3.2133 3.08284 3.44794 2.92219 3.59452 2.69149L4.46066 1.32835Z"
                                                    fill="#FFB761" />
                                            </svg>
                                            <span class="span-text">{{ item?.danh_gia }}</span>
                                        </span>
                                    </div>
                                    <h3 class="name">
                                        {{ item?.hoten ?? 'Chưa cập nhật tên' }}
                                    </h3>
                                    <p class="w-p p-0 m-0 position">
                                        {{ item?.trinh_do ? item?.trinh_do : 'chưa cập nhật trình độ' }}
                                    </p>
                                </div>
                            </div>

                        </nuxt-link>
                        <div class="lock" v-if="item?.khoa_tai_khoan == 1">
                            <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H34V27C34 31.4183 30.4183 35 26 35H8C3.58172 35 0 31.4183 0 27V0Z"
                                    fill="#FC4D32" />
                                <path opacity="0.4"
                                    d="M17.0001 22.3498C17.9003 22.3498 18.6301 21.6201 18.6301 20.7198C18.6301 19.8196 17.9003 19.0898 17.0001 19.0898C16.0999 19.0898 15.3701 19.8196 15.3701 20.7198C15.3701 21.6201 16.0999 22.3498 17.0001 22.3498Z"
                                    fill="white" />
                                <path
                                    d="M21.65 14.4404H12.35C8.25 14.4404 7 15.6904 7 19.7904V21.6504C7 25.7504 8.25 27.0004 12.35 27.0004H21.65C25.75 27.0004 27 25.7504 27 21.6504V19.7904C27 15.6904 25.75 14.4404 21.65 14.4404ZM17 23.7404C15.33 23.7404 13.98 22.3804 13.98 20.7204C13.98 19.0604 15.33 17.7004 17 17.7004C18.67 17.7004 20.02 19.0604 20.02 20.7204C20.02 22.3804 18.67 23.7404 17 23.7404Z"
                                    fill="white" />
                                <path opacity="0.4"
                                    d="M12.1202 14.45V13.28C12.1202 10.35 12.9502 8.4 17.0002 8.4C21.0502 8.4 21.8802 10.35 21.8802 13.28V14.45C22.3902 14.46 22.8502 14.48 23.2802 14.54V13.28C23.2802 10.58 22.6302 7 17.0002 7C11.3702 7 10.7202 10.58 10.7202 13.28V14.53C11.1402 14.48 11.6102 14.45 12.1202 14.45Z"
                                    fill="white" />
                            </svg>
                        </div>
                    </b-card>
                </v-col>

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
    layout: 'admin_teachers',
    data() {
        return {
            title: {
                name: 'Danh sách người dùng ',
                previous: '/admin/dashboard'
            },
            data: null,
            roles: null,
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
            return this.$store.getters[`teachers/keyword`]
        },
    },
    methods: {
        async load_role() {
            await api.get('giao-vien/get-trinh-do', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.roles = res?.data?.data
            })
        },
        async load_data() {
            await api.get(`giao-vien/danh-sach?tuKhoa=${this.tuKhoa}&trinh_do=${this.selectedFilter}&page=${this.current_page}&limit=15&sort=1`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.data = res?.data?.data?.users
                this.per_page = res?.data?.per_page ?? 0
                this.current_page = res?.data?.current_page ?? 0
                this.total = res?.data?.total
            })
        },
        async delete_item(user_id, name) {
            const formData = new FormData();
            formData.append('id', user_id)

            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: `Xoá người dùng ${name}!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Có xoá nó!',
                cancelButtonText: 'Huỷ'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.post('admin-api/xoa-tai-khoan', formData, {
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
                            this.load_role()
                        } else {
                            toastr.error(res?.data?.message);
                        }
                    })

                }
            })

        },
        async updateFilter(filter) {
            this.selectedFilter = await filter ?? '';
            await this.load_data()
        }
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
        this.load_role()
        this.load_data()
    },
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
.lock {
    position: absolute;
    top: 0;
    right: 21px;
}


.admins-group-btn {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .btn {
        display: flex;
        height: 34px;
        padding: 12px 25px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        margin-bottom: 10px;
    }

    .btn-admins-primary {
        border-radius: 46px;
        background: #0056B1;
        color: #FFF;
    }

    .btn-roles-primary {
        border-radius: 46px;
        background: rgba(0, 86, 177, 0.15);
        color: #0056B1;
        margin-left: 20px;
    }

    .btn-filter {
        border-radius: 46px;
        background: #E5E5E5;
        margin-right: 10px;
    }

    .active {
        border-radius: 46px;
        background: #FC4D32;
        color: #FFF;
    }

    @media (max-width: 600px) {
        .btn {
            padding: 10px 17px;
        }

        .btn-roles-primary {
            margin-left: 8px;
        }

        .btn-filter {
            margin-right: 8px;
        }
    }
}
</style>