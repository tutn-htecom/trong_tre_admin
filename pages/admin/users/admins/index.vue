<template>
    <div class="content-mp">
        <div class="admins">
            <div class="admins-group-btn mb-2 flex-bet">
                <nuxt-link to="/admin/users/admins" class="btn btn-admins-primary">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.25 9.16667C4.97408 9.16667 2.95013 10.2721 1.66157 11.9876C1.38424 12.3569 1.24557 12.5415 1.25011 12.791C1.25361 12.9837 1.37394 13.2269 1.52471 13.3459C1.71986 13.5 1.9903 13.5 2.53116 13.5H11.9688C12.5097 13.5 12.7801 13.5 12.9753 13.3459C13.1261 13.2269 13.2464 12.9837 13.2499 12.791C13.2544 12.5415 13.1158 12.3569 12.8384 11.9876C11.5499 10.2721 9.52592 9.16667 7.25 9.16667Z"
                            stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M7.25 7C9.03428 7 10.4807 5.54493 10.4807 3.75C10.4807 1.95507 9.03428 0.5 7.25 0.5C5.46572 0.5 4.01928 1.95507 4.01928 3.75C4.01928 5.54493 5.46572 7 7.25 7Z"
                            stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Quản lý tài khoản
                </nuxt-link>

                <nuxt-link to="/admin/users/admins/roles" class="btn btn-roles-primary">
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.7957 3.9735L11.7961 3.9729C12.2524 3.19695 11.9758 2.21054 11.188 1.77311L10.1541 1.19822C9.44214 0.789529 8.53438 1.03545 8.11406 1.7219L8.11403 1.72188L8.11095 1.72706L8.04498 1.83778L8.04498 1.83777L8.04387 1.83964C7.83067 2.20102 7.61398 2.27983 7.49025 2.27983C7.36582 2.27983 7.14729 2.20019 6.93103 1.83777C6.93099 1.8377 6.93094 1.83763 6.9309 1.83756L6.86588 1.72843C6.45572 1.03093 5.54203 0.791766 4.83396 1.19821L3.80002 1.77311C3.79997 1.77314 3.79991 1.77316 3.79986 1.77319C3.79982 1.77321 3.79979 1.77324 3.79975 1.77326C3.01097 2.2114 2.73632 3.20398 3.19195 3.97872L3.19193 3.97873L3.19426 3.98261C3.41084 4.34337 3.36467 4.5513 3.3131 4.63804C3.25786 4.73095 3.08187 4.88011 2.63943 4.88011C1.75499 4.88011 1 5.58411 1 6.48723V7.51277C1 8.40669 1.74553 9.11989 2.63943 9.11989C3.0818 9.11989 3.25752 9.26898 3.31283 9.36223C3.36486 9.44997 3.41093 9.65999 3.19354 10.0244L3.19353 10.0244L3.19195 10.0271C2.73566 10.803 3.01211 11.7892 3.79975 12.2267C3.79984 12.2268 3.79993 12.2268 3.80002 12.2269L4.83396 12.8018C5.54589 13.2105 6.45363 12.9645 6.87394 12.2781L6.87397 12.2781L6.87706 12.2729L6.94303 12.1622L6.94413 12.1604C7.15734 11.799 7.37403 11.7202 7.49775 11.7202C7.62219 11.7202 7.84071 11.7998 8.05698 12.1622C8.05702 12.1623 8.05706 12.1624 8.0571 12.1624L8.12294 12.2729L8.12291 12.273L8.12606 12.2781C8.54637 12.9645 9.45411 13.2105 10.166 12.8018L11.2 12.2269C11.2001 12.2268 11.2002 12.2268 11.2003 12.2267C11.9873 11.7896 12.2656 10.7966 11.8068 10.025L11.8065 10.0244C11.5891 9.65999 11.6351 9.44997 11.6872 9.36223C11.7425 9.26898 11.9182 9.11989 12.3606 9.11989C13.245 9.11989 14 8.41589 14 7.51277V6.48723H14L14 6.48228C13.9912 5.59327 13.2496 4.88011 12.3546 4.88011C11.9125 4.88011 11.7361 4.73118 11.68 4.63698C11.627 4.54799 11.581 4.33742 11.7957 3.9735ZM7.497 8.39376C6.68602 8.39376 6.04798 7.75342 6.04798 7C6.04798 6.24658 6.68602 5.60624 7.497 5.60624C8.30798 5.60624 8.94603 6.24658 8.94603 7C8.94603 7.75342 8.30798 8.39376 7.497 8.39376Z"
                            stroke="#0056B1" />
                    </svg>
                    Quản lý phân quyền
                </nuxt-link>
            </div>

            <div class="mb-4">
                <div class="d-flex justify-content-between align-items-center">
                    <title-header>
                        Danh sách Quản trị viên
                    </title-header>
                    <nuxt-link to="/admin/users/admins/create">
                        <button-add :addClass="'btn-header'">
                            <span class="mdi mdi-plus"></span> Thêm mới
                        </button-add>
                    </nuxt-link>
                </div>
            </div>

            <div class="admins-group-btn mb-5">
                <div class="btn btn-filter" :class="{ active: selectedFilter === '' }" @click="updateFilter('')">
                    Tất cả
                </div>
                <div class="btn btn-filter" v-for="(item, index) in roles" :key="index"
                    :class="{ active: selectedFilter === item?.id }" @click="updateFilter(item?.id)">
                    {{ item?.name }}
                </div>
            </div>

            <v-row>

                <template v-if="data">
                    <v-col class="mt-0 pt-0" v-for="(item, index) in data" :key="index" xs="12" sm="6" md="4" lg="4" xl="3">
                        <b-card style="min-width: 245px;" class="hover-card wow animate__animated animate__flipInY">
                            <div class="block w-100 card-admins">
                                <div class="d-flex align-center">
                                    <div class="me-2 layout-user">
                                        <img :src="item?.anh_nguoi_dung" :alt="item?.hoten">
                                    </div>
                                    <div>
                                        <div class="d-flex align-items-center">
                                            <span class="blade-id me-2">{{ item?.vai_tro_name }}</span>
                                        </div>
                                        <h3 class="name">
                                            {{ item?.hoten }}
                                        </h3>
                                        <p class="w-p p-0 m-0 position">
                                            <span class="text-field">
                                                <svg width="12" height="11" viewBox="0 0 12 11" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.8546 3.88011C9.76912 3.88011 9.32534 3.13426 9.86507 2.21943C10.1769 1.68918 9.991 1.01325 9.44528 0.710248L8.4078 0.13338C7.93403 -0.140487 7.32234 0.0226676 7.04048 0.482997L6.97451 0.593709C6.43478 1.50854 5.54723 1.50854 5.0015 0.593709L4.93553 0.482997C4.66567 0.0226676 4.05397 -0.140487 3.58021 0.13338L2.54273 0.710248C1.997 1.01325 1.81109 1.695 2.12294 2.22525C2.66867 3.13426 2.22489 3.88011 1.13943 3.88011C0.515742 3.88011 0 4.3754 0 4.98723V6.01277C0 6.61877 0.509745 7.11989 1.13943 7.11989C2.22489 7.11989 2.66867 7.86574 2.12294 8.78057C1.81109 9.31082 1.997 9.98675 2.54273 10.2898L3.58021 10.8666C4.05397 11.1405 4.66567 10.9773 4.94753 10.517L5.01349 10.4063C5.55322 9.49146 6.44078 9.49146 6.98651 10.4063L7.05247 10.517C7.33433 10.9773 7.94603 11.1405 8.41979 10.8666L9.45727 10.2898C10.003 9.98675 10.1889 9.305 9.87706 8.78057C9.33133 7.86574 9.77511 7.11989 10.8606 7.11989C11.4843 7.11989 12 6.6246 12 6.01277V4.98723C11.994 4.38123 11.4843 3.88011 10.8546 3.88011ZM5.997 7.39376C4.92354 7.39376 4.04798 6.54302 4.04798 5.5C4.04798 4.45698 4.92354 3.60624 5.997 3.60624C7.07046 3.60624 7.94603 4.45698 7.94603 5.5C7.94603 6.54302 7.07046 7.39376 5.997 7.39376Z"
                                                        fill="#FC4D32" />
                                                </svg>
                                                {{ item?.quyen_han }}
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div class="action">
                                    <nuxt-link :to="'/admin/users/admins/' + item?.id" class="action-btn"
                                        v-b-tooltip.hover.right="'Sửa'" title="Sửa">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15" cy="15" r="15" fill="#F2F2F2" />
                                            <path
                                                d="M21.75 22.5H8.25C7.9425 22.5 7.6875 22.245 7.6875 21.9375C7.6875 21.63 7.9425 21.375 8.25 21.375H21.75C22.0575 21.375 22.3125 21.63 22.3125 21.9375C22.3125 22.245 22.0575 22.5 21.75 22.5Z"
                                                fill="#979797" />
                                            <path
                                                d="M20.2649 8.61024C18.8099 7.15524 17.3849 7.11774 15.8924 8.61024L14.9849 9.51774C14.9099 9.59274 14.8799 9.71274 14.9099 9.81774C15.4799 11.8052 17.0699 13.3952 19.0574 13.9652C19.0874 13.9727 19.1174 13.9802 19.1474 13.9802C19.2299 13.9802 19.3049 13.9502 19.3649 13.8902L20.2649 12.9827C21.0074 12.2477 21.3674 11.5352 21.3674 10.8152C21.3749 10.0727 21.0149 9.35274 20.2649 8.61024Z"
                                                fill="#979797" />
                                            <path
                                                d="M17.7075 14.6471C17.49 14.5421 17.28 14.4371 17.0775 14.3171C16.9125 14.2196 16.755 14.1146 16.5975 14.0021C16.47 13.9196 16.32 13.7996 16.1775 13.6796C16.1625 13.6721 16.11 13.6271 16.05 13.5671C15.8025 13.3571 15.525 13.0871 15.2775 12.7871C15.255 12.7721 15.2175 12.7196 15.165 12.6521C15.09 12.5621 14.9625 12.4121 14.85 12.2396C14.76 12.1271 14.655 11.9621 14.5575 11.7971C14.4375 11.5946 14.3325 11.3921 14.2275 11.1821C14.0898 10.8871 13.7026 10.7995 13.4724 11.0297L9.255 15.2471C9.1575 15.3446 9.06749 15.5321 9.04499 15.6596L8.63999 18.5321C8.56499 19.0421 8.7075 19.5221 9.0225 19.8446C9.2925 20.1071 9.66749 20.2496 10.0725 20.2496C10.1625 20.2496 10.2525 20.2421 10.3425 20.2271L13.2225 19.8221C13.3575 19.7996 13.545 19.7096 13.635 19.6121L17.8594 15.3877C18.085 15.1621 18.0002 14.774 17.7075 14.6471Z"
                                                fill="#979797" />
                                        </svg>
                                    </nuxt-link>
                                    <div class="action-btn mt-2" @click="delete_item(item?.id, item?.hoten)"
                                        v-b-tooltip.hover.right="'Xoá'" title="Xoá">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15" cy="15" r="15" fill="#F2F2F2" />
                                            <g clip-path="url(#clip0_698_11175)">
                                                <path
                                                    d="M15.0604 10.4558C17.0598 10.4558 19.0621 10.4614 21.0615 10.4502C21.3728 10.4502 21.4906 10.4809 21.4485 10.8547C21.2129 12.9829 20.9662 15.114 20.8231 17.2506C20.7418 18.4584 20.6437 19.6606 20.5455 20.8656C20.4894 21.5574 20.4305 22.012 20.3072 22.6926C20.1473 23.5629 19.7884 24.3746 18.5208 24.3635C16.2017 24.3663 13.8826 24.3411 11.5663 24.3746C10.6128 24.3886 9.85847 24.1905 9.63693 22.6926C9.38735 21.0107 8.85454 13.22 8.85454 13.22L8.64142 10.983C8.64142 10.983 8.58253 10.4558 9.10132 10.4558C11.0895 10.4558 13.075 10.4558 15.0632 10.4558H15.0604ZM15.5427 17.3901C15.5427 16.1935 15.5427 14.9968 15.5427 13.8002C15.5427 13.4041 15.3408 13.1531 15.0267 13.1447C14.6762 13.1363 14.4238 13.4125 14.4238 13.8169C14.4238 16.1963 14.4238 18.5756 14.4266 20.9577C14.4266 21.3789 14.6594 21.6606 14.9987 21.6717C15.3156 21.6829 15.5371 21.3844 15.5371 20.9409C15.5371 19.7583 15.5371 18.5728 15.5371 17.3901H15.5427ZM18.2488 17.3817C18.2488 16.1711 18.2488 14.9578 18.2488 13.7472C18.2488 13.591 18.2685 13.4348 18.1086 13.3232C17.9291 13.1977 17.7609 13.0861 17.5281 13.1893C17.2309 13.3204 17.1411 13.5492 17.1439 13.856C17.1524 16.213 17.1524 18.5728 17.158 20.9298C17.158 21.3761 17.3739 21.6634 17.702 21.6662C18.0301 21.6717 18.2544 21.3761 18.2544 20.9409C18.2544 19.7555 18.2544 18.57 18.2544 17.3845L18.2488 17.3817ZM12.8366 17.4096C12.8366 16.1739 12.8366 14.9383 12.8366 13.7026C12.8366 13.3288 12.6768 13.1531 12.3374 13.1475C12.043 13.1419 11.8046 13.3762 11.8046 13.7026C11.8018 16.16 11.8018 18.6202 11.8046 21.0776C11.8046 21.4291 12.0626 21.6941 12.3599 21.6634C12.7048 21.6271 12.8478 21.4402 12.8422 21.0804C12.8254 19.8587 12.8366 18.6341 12.8366 17.4124V17.4096Z"
                                                    fill="#979797" />
                                                <path
                                                    d="M14.979 9.42623C12.887 9.42623 10.795 9.42623 8.70022 9.42623C8.05244 9.42623 7.5 8.91857 7.5 8.32444C7.5 7.77215 8.04964 7.24496 8.67779 7.23938C9.92288 7.22822 11.168 7.22543 12.4131 7.24496C12.758 7.25054 12.8646 7.16128 12.8477 6.80703C12.8169 6.18501 13.3861 5.63829 14.0227 5.63272C14.6593 5.62714 15.2958 5.66619 15.9296 5.62435C16.597 5.57972 17.1971 6.19895 17.1439 6.78472C17.1102 7.15849 17.2616 7.24775 17.615 7.24217C18.8208 7.22543 20.0266 7.26448 21.2297 7.2338C22.0401 7.21428 22.7888 7.82793 22.3906 8.81257C22.2476 9.16961 21.855 9.42065 21.339 9.42065C19.3116 9.42065 17.2869 9.42065 15.2594 9.42065C15.1669 9.42065 15.0743 9.42065 14.9818 9.42065L14.979 9.42623Z"
                                                    fill="#979797" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_698_11175">
                                                    <rect width="15" height="18.75" fill="white"
                                                        transform="translate(7.5 5.625)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </b-card>
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
    layout: 'admin_admin',
    data() {
        return {
            title: {
                name: 'Danh sách Quản trị viên',
                previous: '/admin/dashboard'
            },
            data: null,
            roles: null,
            selectedFilter: '',
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            selected: 'A',
            options: [
                { item: 'A', name: 'Option A' },
                { item: 'B', name: 'Option B' },
                { item: 'D', name: 'Option C', notEnabled: true },
                { item: { d: 1 }, name: 'Option D' }
            ],
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
            return this.$store.getters[`admin/keyword`]
        },
    },
    methods: {
        async load_role() {
            await api.get('admin-api/danh-sach-quyen', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.roles = res?.data?.data
            })
        },
        async load_data() {
            await api.get(`admin-api/danh-sach-user?tuKhoa=${this.tuKhoa}&page=${this.current_page}&limit=15&sort=1&vai_tro_id=` + this.selectedFilter, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.data = res?.data?.data
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
        this.load_role();
        this.load_data();
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
.admins {
    .card-body {
        padding: 1rem;
    }

    .card-admins {
        cursor: pointer;
        display: flex;
        justify-content: space-between;

        .action-btn {
            cursor: pointer;
            margin-bottom: 10px;
        }

        color: #2d2d2d;

        .layout-user {
            position: relative;
            overflow: hidden;
            width: 68px !important;
            height: 68px !important;
            border-radius: 50%;
        }

        .name {
            color: #2d2d2d !important;
            font-family: SVN-Gilroy;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin-top: 10px;
        }

        .position {
            color: #7d7d7d !important;
            font-family: SVN-Gilroy;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

        .blade-id {
            display: flex;
            padding: 2px 12px;
            justify-content: center;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
            border-radius: 17px;
            background: #ffeeeb;
            color: #fc4d32;
            font-family: SVN-Gilroy;
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }

        .blade-rate {
            border-radius: 22px;
            border: 1px solid #ffb761;
            background: #fff;
            display: flex;
            padding: 2px 10px;
            justify-content: center;
            align-items: center;
            gap: 2px;
            flex-shrink: 0;

            .span-text {
                color: #2d2d2d;
                font-family: SVN-Gilroy;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        }

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
}

@media (max-width: 600px) {
    .nav-bar .v-navigation-drawer {
        width: 100% !important;
    }
    .img-avatar {
        width: auto !important;
    }
    .student {
        .w-title {
            max-width: 140px !important;
        }
    }
    .student-detail {
        .w-title {
            max-width: 138px !important;
        }
        .btn-delete-form {
            min-width: 185px;
        }
    }
}

</style>