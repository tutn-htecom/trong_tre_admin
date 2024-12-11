<template>
    <b-card style="min-width: 245px;" class="mb-2 hover-card">
        <div class="d-flex justify-content-between align-center">
            <div class="w-100 ">
                <div class="d-flex justify-content-between align-items-center">
                    <label class="chart-title">Tổng quan tình trạng hoạt động của User</label>
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

                <div class="d-flex align-item mb-2">
                    <div class="me-3">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#0056B1" />
                        </svg>
                        <span>Đang hoạt động</span>
                    </div>
                    <div>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#FC4D32" />
                        </svg>
                        <span>Dừng hoạt động</span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6">
                        <div class="card-order">
                            <div class="span-title">SL User Phụ huynh</div>
                            <div class="mt-3">
                                <div class="text">{{ sum_t(data?.phuHuynh?.dang_hoat_dong, data?.phuHuynh?.tong) }} %</div>
                                <div class="text-center">
                                    <svg width="126" height="32" viewBox="0 0 126 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"  v-b-tooltip.hover :title="data?.phuHuynh?.dung_hoat_dong">
                                        <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd"
                                            d="M1.10571 21.6641C1.10571 21.6641 5.97398 20.9348 11.5089 22.6869C22.0361 26.0192 22.6366 19.9169 26.5402 16.9745C30.1115 14.2826 33.0692 15.925 37.0456 19.2171C39.9784 21.6451 44.2526 25.7208 48.6789 25.0647C52.7251 24.4649 55.5935 19.6847 61.2019 18.469C65.6469 17.5055 69.2592 20.1525 74.3776 19.2171C81.3212 17.9481 84.4228 10.4777 89.3854 10.4777C95.5103 10.4777 99.8226 4.15942 105.395 4.15942C110.934 4.15942 111.686 7.87471 117.745 10.4777C122.377 12.4677 124.606 10.4777 124.606 10.4777V31.8018H1.10571V21.6641Z"
                                            fill="url(#paint0_linear_40_2260)" />
                                        <path
                                            d="M1.10571 18.3521C1.10571 18.3521 5.97398 17.6333 11.5089 19.36C22.0361 22.6441 22.6366 16.6301 26.5402 13.7303C30.1115 11.0773 33.0692 12.696 37.0456 15.9404C39.9784 18.3333 44.2526 22.3501 48.6789 21.7034C52.7251 21.1123 55.5935 16.4013 61.2019 15.2032C65.6469 14.2536 69.2592 16.8623 74.3776 15.9404C81.3212 14.6899 84.4228 7.32754 89.3854 7.32754C95.5103 7.32754 99.8226 1.08569 105.395 1.08569C110.934 1.08569 111.228 4.76225 117.287 7.32754C121.919 9.28872 124.606 7.32754 124.606 7.32754"
                                            stroke="#FC4D32" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <defs>
                                            <linearGradient id="paint0_linear_40_2260" x1="23.4254" y1="18.1853"
                                                x2="23.4254" y2="31.8018" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FC4D32" />
                                                <stop offset="1" stop-color="white" stop-opacity="0.01" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <svg width="126" height="32" viewBox="0 0 126 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" v-b-tooltip.hover :title="data?.phuHuynh?.dang_hoat_dong">
                                        <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd"
                                            d="M1 21.5784C1 21.5784 5.86827 20.8491 11.4032 22.6012C21.9303 25.9335 22.5309 19.8312 26.4344 16.8888C30.0058 14.1969 32.9635 15.8393 36.9399 19.1314C39.8727 21.5594 44.1469 25.6351 48.5732 24.979C52.6194 24.3792 55.4877 19.599 61.0961 18.3833C65.5411 17.4198 69.1535 20.0668 74.2719 19.1314C81.2155 17.8624 84.3171 10.392 89.2797 10.392C95.4046 10.392 99.7169 4.07373 105.289 4.07373C110.828 4.07373 111.58 7.78902 117.639 10.392C122.271 12.382 124.5 10.392 124.5 10.392V31.7161H1V21.5784Z"
                                            fill="url(#paint0_linear_40_2276)" />
                                        <path
                                            d="M1 18.2664C1 18.2664 5.86827 17.5476 11.4032 19.2743C21.9303 22.5584 22.5309 16.5444 26.4344 13.6447C30.0058 10.9917 32.9635 12.6103 36.9399 15.8548C39.8727 18.2476 44.1469 22.2644 48.5732 21.6177C52.6194 21.0266 55.4877 16.3156 61.0961 15.1175C65.5411 14.1679 69.1535 16.7766 74.2719 15.8548C81.2155 14.6042 84.3171 7.24185 89.2797 7.24185C95.4046 7.24185 99.7169 1 105.289 1C110.828 1 111.122 4.67655 117.182 7.24185C121.814 9.20303 124.5 7.24185 124.5 7.24185"
                                            stroke="#0056B1" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <defs>
                                            <linearGradient id="paint0_linear_40_2276" x1="23.3197" y1="18.0996"
                                                x2="23.3197" y2="31.7161" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#0056B1" />
                                                <stop offset="1" stop-color="white" stop-opacity="0.01" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-6">
                        <div class="card-order">
                            <div class="span-title">SL User Giáo viên</div>
                            <div class="mt-3">
                                <div class="text">{{ sum_t(data?.giaoVien?.dang_hoat_dong, data?.giaoVien?.tong) }} %</div>
                                <div class="text-center">
                                    <svg width="126" height="32" viewBox="0 0 126 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" v-b-tooltip.hover :title="data?.giaoVien?.dung_hoat_dong">
                                        <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd"
                                            d="M1.10571 21.6641C1.10571 21.6641 5.97398 20.9348 11.5089 22.6869C22.0361 26.0192 22.6366 19.9169 26.5402 16.9745C30.1115 14.2826 33.0692 15.925 37.0456 19.2171C39.9784 21.6451 44.2526 25.7208 48.6789 25.0647C52.7251 24.4649 55.5935 19.6847 61.2019 18.469C65.6469 17.5055 69.2592 20.1525 74.3776 19.2171C81.3212 17.9481 84.4228 10.4777 89.3854 10.4777C95.5103 10.4777 99.8226 4.15942 105.395 4.15942C110.934 4.15942 111.686 7.87471 117.745 10.4777C122.377 12.4677 124.606 10.4777 124.606 10.4777V31.8018H1.10571V21.6641Z"
                                            fill="url(#paint0_linear_40_2260)" />
                                        <path
                                            d="M1.10571 18.3521C1.10571 18.3521 5.97398 17.6333 11.5089 19.36C22.0361 22.6441 22.6366 16.6301 26.5402 13.7303C30.1115 11.0773 33.0692 12.696 37.0456 15.9404C39.9784 18.3333 44.2526 22.3501 48.6789 21.7034C52.7251 21.1123 55.5935 16.4013 61.2019 15.2032C65.6469 14.2536 69.2592 16.8623 74.3776 15.9404C81.3212 14.6899 84.4228 7.32754 89.3854 7.32754C95.5103 7.32754 99.8226 1.08569 105.395 1.08569C110.934 1.08569 111.228 4.76225 117.287 7.32754C121.919 9.28872 124.606 7.32754 124.606 7.32754"
                                            stroke="#FC4D32" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <defs>
                                            <linearGradient id="paint0_linear_40_2260" x1="23.4254" y1="18.1853"
                                                x2="23.4254" y2="31.8018" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FC4D32" />
                                                <stop offset="1" stop-color="white" stop-opacity="0.01" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <svg width="126" height="32" viewBox="0 0 126 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" v-b-tooltip.hover :title="data?.giaoVien?.dang_hoat_dong">
                                        <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd"
                                            d="M1 21.5784C1 21.5784 5.86827 20.8491 11.4032 22.6012C21.9303 25.9335 22.5309 19.8312 26.4344 16.8888C30.0058 14.1969 32.9635 15.8393 36.9399 19.1314C39.8727 21.5594 44.1469 25.6351 48.5732 24.979C52.6194 24.3792 55.4877 19.599 61.0961 18.3833C65.5411 17.4198 69.1535 20.0668 74.2719 19.1314C81.2155 17.8624 84.3171 10.392 89.2797 10.392C95.4046 10.392 99.7169 4.07373 105.289 4.07373C110.828 4.07373 111.58 7.78902 117.639 10.392C122.271 12.382 124.5 10.392 124.5 10.392V31.7161H1V21.5784Z"
                                            fill="url(#paint0_linear_40_2276)" />
                                        <path
                                            d="M1 18.2664C1 18.2664 5.86827 17.5476 11.4032 19.2743C21.9303 22.5584 22.5309 16.5444 26.4344 13.6447C30.0058 10.9917 32.9635 12.6103 36.9399 15.8548C39.8727 18.2476 44.1469 22.2644 48.5732 21.6177C52.6194 21.0266 55.4877 16.3156 61.0961 15.1175C65.5411 14.1679 69.1535 16.7766 74.2719 15.8548C81.2155 14.6042 84.3171 7.24185 89.2797 7.24185C95.4046 7.24185 99.7169 1 105.289 1C110.828 1 111.122 4.67655 117.182 7.24185C121.814 9.20303 124.5 7.24185 124.5 7.24185"
                                            stroke="#0056B1" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <defs>
                                            <linearGradient id="paint0_linear_40_2276" x1="23.3197" y1="18.0996"
                                                x2="23.3197" y2="31.7161" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#0056B1" />
                                                <stop offset="1" stop-color="white" stop-opacity="0.01" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </b-card>
</template>

<script>
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    name: 'UserReport',
    data() {
        return {
            title: {
                name: null,
                previous: '/admin/dashboard'
            },
            data: null,
            date: new Date().toISOString().substr(0, 7),
            month: 1,
            menu: false,
            modal: false,
            month: 1,
            selected: 0,
            options: [
                { value: 0, text: 'Tất cả' },
                { value: 1, text: 'Giáo viên' },
            ]
        }
    },
    computed: {
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        sum_t (x, y) {
            if (y == 0) {
                return 0
            } else {
                return (x * 100) / y
            }
        },
        async load_data() {
            await api.get('bao-cao/tong-quan-user?thang=' + (this.month ?? ''), {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.data = res?.data?.data
            })
        },
        async updateFilter(filter) {
            this.selectedFilter = await filter ?? '';
            await this.load_data()
        }
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title)
        this.month = this.date.split("-")[1] + '/' + this.date.split("-")[0];
        this.load_data()
    },
    watch: {
        date() {
            console.log(this.date)
            const dateArray = this.date.split("-");
            this.month = dateArray[1] + '/' + dateArray[0];
            this.load_data();
        }
    }
}
</script>

<style lang="scss" scoped>
.text-c-danger {
    color: #FA4D32;
}

.text-c-primary {
    color: #0056B1;
}

.text-c-warning {
    color: #FFB761;
}

.text-c-success {
    color: #00C092;
}

.card-order {
    border-radius: 10px;
    border: 1px solid #F2F2F2;
    background: #FFF;
    box-shadow: 0px 2px 48px 0px rgba(0, 0, 0, 0.06);
    padding: 10px;

    .span-title {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
    }

    .text {
        font-family: SVN-Gilroy;
        font-size: 26px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .text-rate {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
}

.table-salary {
    tr {
        td {
            .blade-id {
                display: initial;
            }

            .user-name {
                color: #0056B1;
                font-family: SVN-Gilroy;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                text-decoration-line: underline;
            }

            .box-img {
                width: 35px;
                height: 35px;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .salary {
                color: #0056B1;
                font-family: SVN-Gilroy;
                font-size: 14px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
                display: flex;
                height: 100%;
                align-items: center;
            }

            .span {
                color: #2D2D2D;
                font-family: SVN-Gilroy;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
        }
    }

    margin-top: 10px;
    border-radius: 10px !important;
    border: 1px solid var(--Stroke-Color, #EFF0F6);
    background: #FFF;
    box-shadow: 0px 2px 48px 0px rgba(0, 0, 0, 0.06);
    overflow: hidden;
}

.text-admin {
    .text-span {
        color: rgba(45, 45, 45, 0.80);
        font-family: SVN-Gilroy;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .text {
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .text-c-primary {
        color: #0056B1 !important;
    }

    .text-c-warning {
        color: #FFB761 !important;
    }

    .text-c-danger {
        color: #FC4D32 !important;
    }

    .text-c-success {
        color: #00C092 !important;
    }
}

.c-primary {
    background: #0056B1 !important;
}

.c-danger {
    background: #FC4D32 !important;
}

.c-warning {
    background: #FFB761 !important;
}

.c-success {
    background: #00C092 !important;
}


.order-service-title {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.month-picker {
    width: 94px;
}

.chart-title {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.watch-more {
    color: #0056B1;
    text-align: right;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    transition: 0.3s;

    &:hover {
        color: #01458d;
    }
}

.h3-title {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.dashboard-alanysis {
    .alanysis-title {
        color: rgba(45, 45, 45, 0.80);
        font-family: SVN-Gilroy;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .rate {
        position: absolute;
        display: block;
        top: 50%;
        left: 52%;
        transform: translate(-50%, -50%);
        color: #2D2D2D;
        text-align: center;
        font-family: SVN-Gilroy;
        font-size: 19px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        width: 55px;
    }
}

@media (max-width: 600px) {
    .text-center {
        overflow: hidden;
    }

}
</style>