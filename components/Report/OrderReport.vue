<template>
    <b-card style="min-width: 245px;" class="mb-2 hover-card">
        <div class="d-flex justify-content-between align-center">
            <div class="w-100 ">
                <div class="d-flex justify-content-between align-items-center">
                    <label class="chart-title">Tổng quan tình trạng đơn</label>
                    <div class="d-flex">
                        <v-dialog ref="dialog1" v-model="modal1" :return-value.sync="date1" persistent width="290px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="date1" label="" class="month-picker me-3" prepend-icon="mdi-calendar"
                                    readonly v-bind="attrs" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date1" type="date" scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="modal1 = false">
                                    Cancel
                                </v-btn>
                                <v-btn text color="primary" @click="$refs.dialog1.save(date1)">
                                    OK
                                </v-btn>
                            </v-date-picker>
                        </v-dialog>
                        <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="date" label="" class="month-picker" prepend-icon="mdi-calendar"
                                    readonly v-bind="attrs" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date" type="date" scrollable>
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

                <div class="row">
                    <div class="col-6">
                        <div class="card-order">
                            <div class="span-title">Số ca chạy theo dự kiến </div>
                            <div class="mt-2 d-flex justify-content-between align-items-center">
                                <div class="text text-c-danger">{{ data?.du_kien?.tong_buoi }}</div>
                                <div class="text-rate">
                                    <svg width="26" height="18" viewBox="0 0 26 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="9.28687" cy="9" r="9" fill="#FC4D32" fill-opacity="0.1" />
                                        <path
                                            d="M13.2296 6.85537C13.1723 6.71488 13.0577 6.59917 12.9185 6.54132C12.853 6.51653 12.7793 6.5 12.7056 6.5H11.183C10.8637 6.5 10.61 6.7562 10.61 7.07851C10.61 7.40083 10.8637 7.65703 11.183 7.65703H11.3304L9.60306 9.40083L8.76806 8.14463C8.66983 8.00413 8.52248 7.90496 8.35056 7.88843C8.17047 7.8719 8.01493 7.92975 7.89214 8.05372L5.45264 10.5165C5.23161 10.7397 5.23161 11.1033 5.45264 11.3347C5.56724 11.4504 5.70641 11.5 5.85376 11.5C6.00111 11.5 6.14847 11.4421 6.25489 11.3347L8.20321 9.36777L9.03821 10.624C9.13644 10.7645 9.2838 10.8636 9.45571 10.8802C9.6358 10.8967 9.79134 10.8388 9.91414 10.7149L12.1408 8.46694V8.6157C12.1408 8.93802 12.3946 9.19421 12.7138 9.19421C13.0331 9.19421 13.2869 8.93802 13.2869 8.6157V7.07025C13.2705 6.99587 13.2623 6.92149 13.2296 6.85537Z"
                                            fill="#FC4D32" />
                                    </svg>
                                    + {{ data?.du_kien?.phan_tram }}%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card-order">
                            <div class="span-title">Số ca chưa "vào ca" theo dự kiến </div>
                            <div class="mt-2 d-flex justify-content-between align-items-center">
                                <div class="text text-c-warning">{{ data?.chua_vao_ca?.tong_buoi }}</div>
                                <div class="text-rate">
                                    <svg width="27" height="18" viewBox="0 0 27 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="9.75" cy="9" r="9" fill="#FFB761" fill-opacity="0.2" />
                                        <path
                                            d="M13.6927 6.85537C13.6354 6.71488 13.5208 6.59917 13.3816 6.54132C13.3161 6.51653 13.2425 6.5 13.1688 6.5H11.6461C11.3269 6.5 11.0731 6.7562 11.0731 7.07851C11.0731 7.40083 11.3269 7.65703 11.6461 7.65703H11.7935L10.0662 9.40083L9.2312 8.14463C9.13296 8.00413 8.98561 7.90496 8.8137 7.88843C8.6336 7.8719 8.47806 7.92975 8.35527 8.05372L5.91577 10.5165C5.69474 10.7397 5.69474 11.1033 5.91577 11.3347C6.03038 11.4504 6.16954 11.5 6.3169 11.5C6.46425 11.5 6.6116 11.4421 6.71802 11.3347L8.66635 9.36777L9.50134 10.624C9.59958 10.7645 9.74693 10.8636 9.91884 10.8802C10.0989 10.8967 10.2545 10.8388 10.3773 10.7149L12.6039 8.46694V8.6157C12.6039 8.93802 12.8577 9.19421 13.177 9.19421C13.4962 9.19421 13.75 8.93802 13.75 8.6157V7.07025C13.7336 6.99587 13.7254 6.92149 13.6927 6.85537Z"
                                            fill="#FFB761" />
                                    </svg>
                                    + {{ data?.chua_vao_ca?.phan_tram }}%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card-order">
                            <div class="span-title">Số ca đang chạy (đã ấn "vào ca")</div>
                            <div class="mt-2 d-flex justify-content-between align-items-center">
                                <div class="text text-c-primary">{{ data?.dang_day?.tong_buoi }}</div>
                                <div class="text-rate">
                                    <svg width="26" height="18" viewBox="0 0 26 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="9.28687" cy="9" r="9" fill="#0056B1" fill-opacity="0.15" />
                                        <path
                                            d="M13.2296 6.85537C13.1723 6.71488 13.0577 6.59917 12.9185 6.54132C12.853 6.51653 12.7793 6.5 12.7056 6.5H11.183C10.8637 6.5 10.61 6.7562 10.61 7.07851C10.61 7.40083 10.8637 7.65703 11.183 7.65703H11.3304L9.60306 9.40083L8.76806 8.14463C8.66983 8.00413 8.52248 7.90496 8.35056 7.88843C8.17047 7.8719 8.01493 7.92975 7.89214 8.05372L5.45264 10.5165C5.23161 10.7397 5.23161 11.1033 5.45264 11.3347C5.56724 11.4504 5.70641 11.5 5.85376 11.5C6.00111 11.5 6.14847 11.4421 6.25489 11.3347L8.20321 9.36777L9.03821 10.624C9.13644 10.7645 9.2838 10.8636 9.45571 10.8802C9.6358 10.8967 9.79134 10.8388 9.91414 10.7149L12.1408 8.46694V8.6157C12.1408 8.93802 12.3946 9.19421 12.7138 9.19421C13.0331 9.19421 13.2869 8.93802 13.2869 8.6157V7.07025C13.2705 6.99587 13.2623 6.92149 13.2296 6.85537Z"
                                            fill="#0056B1" />
                                    </svg>
                                    + {{ data?.dang_day?.phan_tram }}%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card-order">
                            <div class="span-title">Số ca hoàn thành (đã ấn "hoàn thành")</div>
                            <div class="mt-2 d-flex justify-content-between align-items-center">
                                <div class="text text-c-success">{{ data?.da_hoan_thanh?.tong_buoi }}</div>
                                <div class="text-rate">
                                    <svg width="27" height="18" viewBox="0 0 27 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="9.75" cy="9" r="9" fill="#00C092" fill-opacity="0.2" />
                                        <path
                                            d="M13.6927 6.85537C13.6354 6.71488 13.5208 6.59917 13.3816 6.54132C13.3161 6.51653 13.2425 6.5 13.1688 6.5H11.6461C11.3269 6.5 11.0731 6.7562 11.0731 7.07851C11.0731 7.40083 11.3269 7.65703 11.6461 7.65703H11.7935L10.0662 9.40083L9.2312 8.14463C9.13296 8.00413 8.98561 7.90496 8.8137 7.88843C8.6336 7.8719 8.47806 7.92975 8.35527 8.05372L5.91577 10.5165C5.69474 10.7397 5.69474 11.1033 5.91577 11.3347C6.03038 11.4504 6.16954 11.5 6.3169 11.5C6.46425 11.5 6.6116 11.4421 6.71802 11.3347L8.66635 9.36777L9.50134 10.624C9.59958 10.7645 9.74693 10.8636 9.91884 10.8802C10.0989 10.8967 10.2545 10.8388 10.3773 10.7149L12.6039 8.46694V8.6157C12.6039 8.93802 12.8577 9.19421 13.177 9.19421C13.4962 9.19421 13.75 8.93802 13.75 8.6157V7.07025C13.7336 6.99587 13.7254 6.92149 13.6927 6.85537Z"
                                            fill="#00C092" />
                                    </svg>
                                    + {{ data?.da_hoan_thanh?.phan_tram }}%
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
    name: 'OrderReport',
    data() {
        return {
            title: {
                name: null,
                previous: '/admin/dashboard'
            },
            data: null,
            date: new Date().toISOString(),
            date1: new Date().toISOString(),
            month: 1,
            menu: false,
            modal: false,
            modal1: false,
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
        async load_data() {
            await api.get(`bao-cao/bao-cao-tinh-trang-don?tuNgay=${this.date1}&denNgay=${this.date}`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log("order")
                console.log(res?.data?.data?.du_kien)
                this.data = res?.data?.data
            })
        },
        async updateFilter(filter) {
            this.selectedFilter = await filter ?? '';
            await this.load_data()
        }
    },
    mounted() {
        var currentDate = new Date();
        var year = currentDate.getFullYear();
        var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
        var day = ('0' + currentDate.getDate()).slice(-2);
        var formattedDate = year + '-' + month + '-' + day;
        this.date = formattedDate


        var month = ('0' + (currentDate.getMonth())).slice(-2);
        var year = currentDate.getFullYear();
        var day = ('0' + currentDate.getDate()).slice(-2);

        this.date1 = year + '-' + month + '-' + day;

        this.$store.dispatch('title/set_title', this.title)
        this.month = this.date.split("-")[1] + '/' + this.date.split("-")[0];
        this.load_data()
    },
    watch: {
        date() {
            console.log(this.date)
            const dateArray = this.date.split("-");
            console.log(dateArray)
            this.month = dateArray[2] + '/' + dateArray[1] + '/' + dateArray[0];
            this.load_data();
        },
        date1() {
            console.log(this.date1)
            const dateArray = this.date1.split("-");
            console.log(dateArray)
            this.month = dateArray[2] + '/' + dateArray[1] + '/' + dateArray[0];
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

@media (max-width: 600px) {
    .card-order {
        .text {
            font-size: 13px !important;
        }
        .text-rate {
            font-size: 12px;
        }
    }

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
    width: 118px;
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
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        width: 55px;
    }
}
</style>