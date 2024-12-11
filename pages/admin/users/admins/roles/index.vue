<template>
    <div class="content-mp">
        <div class="roles">
            <div class="roles-group-btn mb-2 flex-bet">
                <nuxt-link to="/admin/users/admins" class="btn btn-roles-primary">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.25 9.16667C4.97408 9.16667 2.95013 10.2721 1.66157 11.9876C1.38424 12.3569 1.24557 12.5415 1.25011 12.791C1.25361 12.9837 1.37394 13.2269 1.52471 13.3459C1.71986 13.5 1.9903 13.5 2.53116 13.5H11.9688C12.5097 13.5 12.7801 13.5 12.9753 13.3459C13.1261 13.2269 13.2464 12.9837 13.2499 12.791C13.2544 12.5415 13.1158 12.3569 12.8384 11.9876C11.5499 10.2721 9.52592 9.16667 7.25 9.16667Z"
                            stroke="#0056B1" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M7.25 7C9.03428 7 10.4807 5.54493 10.4807 3.75C10.4807 1.95507 9.03428 0.5 7.25 0.5C5.46572 0.5 4.01928 1.95507 4.01928 3.75C4.01928 5.54493 5.46572 7 7.25 7Z"
                            stroke="#0056B1" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Quản lý tài khoản
                </nuxt-link>

                <nuxt-link to="/admin/users/admins/roles" class="btn btn-admins-primary">
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.7957 3.9735L11.7961 3.9729C12.2524 3.19695 11.9758 2.21054 11.188 1.77311L10.1541 1.19822C9.44214 0.789529 8.53438 1.03545 8.11406 1.7219L8.11403 1.72188L8.11095 1.72706L8.04498 1.83778L8.04498 1.83777L8.04387 1.83964C7.83067 2.20102 7.61398 2.27983 7.49025 2.27983C7.36582 2.27983 7.14729 2.20019 6.93103 1.83777C6.93099 1.8377 6.93094 1.83763 6.9309 1.83756L6.86588 1.72843C6.45572 1.03093 5.54203 0.791766 4.83396 1.19821L3.80002 1.77311C3.79997 1.77314 3.79991 1.77316 3.79986 1.77319C3.79982 1.77321 3.79979 1.77324 3.79975 1.77326C3.01097 2.2114 2.73632 3.20398 3.19195 3.97872L3.19193 3.97873L3.19426 3.98261C3.41084 4.34337 3.36467 4.5513 3.3131 4.63804C3.25786 4.73095 3.08187 4.88011 2.63943 4.88011C1.75499 4.88011 1 5.58411 1 6.48723V7.51277C1 8.40669 1.74553 9.11989 2.63943 9.11989C3.0818 9.11989 3.25752 9.26898 3.31283 9.36223C3.36486 9.44997 3.41093 9.65999 3.19354 10.0244L3.19353 10.0244L3.19195 10.0271C2.73566 10.803 3.01211 11.7892 3.79975 12.2267C3.79984 12.2268 3.79993 12.2268 3.80002 12.2269L4.83396 12.8018C5.54589 13.2105 6.45363 12.9645 6.87394 12.2781L6.87397 12.2781L6.87706 12.2729L6.94303 12.1622L6.94413 12.1604C7.15734 11.799 7.37403 11.7202 7.49775 11.7202C7.62219 11.7202 7.84071 11.7998 8.05698 12.1622C8.05702 12.1623 8.05706 12.1624 8.0571 12.1624L8.12294 12.2729L8.12291 12.273L8.12606 12.2781C8.54637 12.9645 9.45411 13.2105 10.166 12.8018L11.2 12.2269C11.2001 12.2268 11.2002 12.2268 11.2003 12.2267C11.9873 11.7896 12.2656 10.7966 11.8068 10.025L11.8065 10.0244C11.5891 9.65999 11.6351 9.44997 11.6872 9.36223C11.7425 9.26898 11.9182 9.11989 12.3606 9.11989C13.245 9.11989 14 8.41589 14 7.51277V6.48723H14L14 6.48228C13.9912 5.59327 13.2496 4.88011 12.3546 4.88011C11.9125 4.88011 11.7361 4.73118 11.68 4.63698C11.627 4.54799 11.581 4.33742 11.7957 3.9735ZM7.497 8.39376C6.68602 8.39376 6.04798 7.75342 6.04798 7C6.04798 6.24658 6.68602 5.60624 7.497 5.60624C8.30798 5.60624 8.94603 6.24658 8.94603 7C8.94603 7.75342 8.30798 8.39376 7.497 8.39376Z"
                            stroke="white" />
                    </svg>
                    Quản lý phân quyền
                </nuxt-link>
            </div>

            <div class="mb-5 pt-2">
                <div class="d-flex justify-content-between align-items-center">
                    <title-header>
                        Phân quyền sử dụng theo loại tài khoản
                    </title-header>
                </div>
            </div>

            <v-row class="mt-5">

                <v-col class="mt-0 pt-0" xs="12" sm="12" md="12" lg="8" xl="8">
                    <table class="table table-hover table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th>
                                    <span>Phân quyền</span>
                                </th>

                                <th v-for="(item, n) in data?.vai_tro" v-bind:key="n">
                                    <span class="admin center " style="color: #00C092;">{{ item?.name }}</span>
                                </th>

                                <!-- <th>
                                    <span class="leader center " style="color: #00C092;">Leader KD</span>
                                </th>

                                <th>
                                    <span class="leaderdt center " style="color: #0056B1;">Leader ĐT</span>
                                </th> -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, n) in data?.chuc_nang" v-bind:key="n" class="">
                                <td>
                                    <div>
                                        <div class="role-title mb-2">{{ item?.name }}</div>
                                        <div class="role-span">{{ item?.ghi_chu }}</div>
                                    </div>
                                </td>
                                <td v-for="(i, n) in data?.vai_tro" v-bind:key="n">
                                    <b-form-checkbox @change="set_quyen(i?.id, item?.id)" :checked="isChecked(i?.id, item?.id)" v-if="i?.id" size="lg"></b-form-checkbox>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </v-col>
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
                name: 'Danh sách Quản trị viên',
                previous: '/admin/users/admins'
            },
            data: null,
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            selected: 'A',
            options: [
                { item: 'A', name: 'Option A' },
                { item: 'B', name: 'Option B' },
                { item: 'D', name: 'Option C', notEnabled: true },
                { item: { d: 1 }, name: 'Option D' }
            ],
            phanQuyen: [],
        };
    },
    computed: {
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        isChecked(vai_tro_id, chuc_nang_id) {
            // console.log('vai_tro_id', vai_tro_id)
            // console.log('chuc_nang_id', chuc_nang_id)
            for(var i=0; i < this.phanQuyen.length; i++) {
                // console.log(this.phanQuyen[i])
                if(this.phanQuyen[i].vai_tro_id == vai_tro_id && this.phanQuyen[i].chuc_nang_id == chuc_nang_id) {
                    // console.log('hello')
                    return true;
                }
            }
            return false;
        },
        async set_quyen(vai_tro_id, chuc_nang_id) {
            console.log(vai_tro_id, chuc_nang_id)
            const formData = new FormData()

            let check = 1;
            formData.append('vai_tro_id', vai_tro_id)
            formData.append('chuc_nang_id', chuc_nang_id)

            for(var i=0; i < this.phanQuyen.length; i++) {
                if(this.phanQuyen[i].vai_tro_id == vai_tro_id && this.phanQuyen[i].chuc_nang_id == chuc_nang_id) {
                    check = 0;
                }
            }

            formData.append('checked', check ?? 0)

            await api.post('admin-api/sua-phan-quyen', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.load_data();
                }
            })

            // this.load_data();
        },
        async load_data() {
            await api.get(`admin-api/phan-quyen`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.data = res?.data?.data
                this.phanQuyen = res?.data?.data?.phanQuyen
            })
        },
    },
    mounted() {
        this.load_data();
        this.$store.dispatch('title/set_title', this.title);
    },
    components: {}
}
</script>

<style lang="scss" scoped>
.role-title {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.role-span {
    color: rgba(45, 45, 45, 0.80);
    font-family: SVN-Gilroy;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.checkbox-group {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.roles {
    .card-body {
        padding: 1rem;
    }

    .card-roles {
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

    .roles-group-btn {
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
            margin-left: 20px;
        }

        .btn-roles-primary {
            border-radius: 46px;
            background: rgba(0, 86, 177, 0.15);
            color: #0056B1;
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

    }
}

@media (max-width: 600px) {
    .roles-group-btn {
        .btn {
            padding: 10px 17px !important;
        }

        .btn-roles-primary {
            margin-right: 8px !important;
        }

        .btn-filter {
            margin-right: 8px;
        }
    }

    table {
        span {
            font-family: SVN-Gilroy;
            font-size: 14px !important;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
    }
}
</style>