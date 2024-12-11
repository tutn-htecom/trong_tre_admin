<template>
    <b-card style="min-width: 245px;" class="mb-2 hover-card">
        <div class="d-flex justify-content-between align-center">
            <div class="w-100 ">
                <div class="d-flex justify-content-between align-items-center">
                    <label class="chart-title">Tổng quan kết quả đào tạo</label>
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

                <div class="row">
                    <div class="col-6">
                        <div class="card-materials">
                            <div class="span-title">Số giáo viên đang đào tạo</div>
                            <div class="mt-3">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="text text-c-danger ms-2">{{ data?.dangHoc ?? 0 }}</div>
                                    <div>
                                        <svg width="26" height="18" viewBox="0 0 26 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="9.28711" cy="9" r="9" fill="#FC4D32" fill-opacity="0.1" />
                                            <path
                                                d="M13.2298 6.85537C13.1725 6.71488 13.0579 6.59917 12.9187 6.54132C12.8532 6.51653 12.7796 6.5 12.7059 6.5H11.1832C10.864 6.5 10.6102 6.7562 10.6102 7.07851C10.6102 7.40083 10.864 7.65703 11.1832 7.65703H11.3306L9.6033 9.40083L8.76831 8.14463C8.67007 8.00413 8.52272 7.90496 8.35081 7.88843C8.17071 7.8719 8.01517 7.92975 7.89238 8.05372L5.45288 10.5165C5.23185 10.7397 5.23185 11.1033 5.45288 11.3347C5.56749 11.4504 5.70665 11.5 5.85401 11.5C6.00136 11.5 6.14871 11.4421 6.25513 11.3347L8.20346 9.36777L9.03845 10.624C9.13669 10.7645 9.28404 10.8636 9.45595 10.8802C9.63605 10.8967 9.79159 10.8388 9.91438 10.7149L12.141 8.46694V8.6157C12.141 8.93802 12.3948 9.19421 12.7141 9.19421C13.0333 9.19421 13.2871 8.93802 13.2871 8.6157V7.07025C13.2707 6.99587 13.2626 6.92149 13.2298 6.85537Z"
                                                fill="#FC4D32" />
                                        </svg>
                                        + 14%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-6">
                        <div class="card-materials">
                            <div class="span-title">Số giáo viên nhận thành tích ĐẠT</div>
                            <div class="mt-3">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="text text-c-warning ms-2">{{ data?.dat ?? 0 }}</div>
                                    <div>
                                        <svg width="27" height="18" viewBox="0 0 27 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="9.75" cy="9" r="9" fill="#FFB761" fill-opacity="0.2" />
                                            <path
                                                d="M13.6927 6.85537C13.6354 6.71488 13.5208 6.59917 13.3816 6.54132C13.3161 6.51653 13.2425 6.5 13.1688 6.5H11.6461C11.3269 6.5 11.0731 6.7562 11.0731 7.07851C11.0731 7.40083 11.3269 7.65703 11.6461 7.65703H11.7935L10.0662 9.40083L9.2312 8.14463C9.13296 8.00413 8.98561 7.90496 8.8137 7.88843C8.6336 7.8719 8.47806 7.92975 8.35527 8.05372L5.91577 10.5165C5.69474 10.7397 5.69474 11.1033 5.91577 11.3347C6.03038 11.4504 6.16954 11.5 6.3169 11.5C6.46425 11.5 6.6116 11.4421 6.71802 11.3347L8.66635 9.36777L9.50134 10.624C9.59958 10.7645 9.74693 10.8636 9.91884 10.8802C10.0989 10.8967 10.2545 10.8388 10.3773 10.7149L12.6039 8.46694V8.6157C12.6039 8.93802 12.8577 9.19421 13.177 9.19421C13.4962 9.19421 13.75 8.93802 13.75 8.6157V7.07025C13.7336 6.99587 13.7254 6.92149 13.6927 6.85537Z"
                                                fill="#FFB761" />
                                        </svg>
                                        + 43%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-6">
                        <div class="card-materials">
                            <div class="span-title">Số giáo viên phải thi lại</div>
                            <div class="mt-3">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="text text-c-primary ms-2">{{ data?.hocLai ?? 0 }}</div>
                                    <div>
                                        <svg width="26" height="18" viewBox="0 0 26 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="9.28711" cy="9" r="9" fill="#0056B1" fill-opacity="0.15" />
                                            <path
                                                d="M13.2298 6.85537C13.1725 6.71488 13.0579 6.59917 12.9187 6.54132C12.8532 6.51653 12.7796 6.5 12.7059 6.5H11.1832C10.864 6.5 10.6102 6.7562 10.6102 7.07851C10.6102 7.40083 10.864 7.65703 11.1832 7.65703H11.3306L9.6033 9.40083L8.76831 8.14463C8.67007 8.00413 8.52272 7.90496 8.35081 7.88843C8.17071 7.8719 8.01517 7.92975 7.89238 8.05372L5.45288 10.5165C5.23185 10.7397 5.23185 11.1033 5.45288 11.3347C5.56749 11.4504 5.70665 11.5 5.85401 11.5C6.00136 11.5 6.14871 11.4421 6.25513 11.3347L8.20346 9.36777L9.03845 10.624C9.13669 10.7645 9.28404 10.8636 9.45595 10.8802C9.63605 10.8967 9.79159 10.8388 9.91438 10.7149L12.141 8.46694V8.6157C12.141 8.93802 12.3948 9.19421 12.7141 9.19421C13.0333 9.19421 13.2871 8.93802 13.2871 8.6157V7.07025C13.2707 6.99587 13.2626 6.92149 13.2298 6.85537Z"
                                                fill="#0056B1" />
                                        </svg>
                                        + 24%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-6">
                        <div class="card-materials">
                            <div class="span-title">Số giáo viên hoàn thành đào tạo</div>
                            <div class="mt-3">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="text text-c-success ms-2">{{ data?.hoanThanh ?? 0 }}</div>
                                    <div>
                                        <svg width="27" height="18" viewBox="0 0 27 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="9.75" cy="9" r="9" fill="#00C092" fill-opacity="0.2" />
                                            <path
                                                d="M13.6927 6.85537C13.6354 6.71488 13.5208 6.59917 13.3816 6.54132C13.3161 6.51653 13.2425 6.5 13.1688 6.5H11.6461C11.3269 6.5 11.0731 6.7562 11.0731 7.07851C11.0731 7.40083 11.3269 7.65703 11.6461 7.65703H11.7935L10.0662 9.40083L9.2312 8.14463C9.13296 8.00413 8.98561 7.90496 8.8137 7.88843C8.6336 7.8719 8.47806 7.92975 8.35527 8.05372L5.91577 10.5165C5.69474 10.7397 5.69474 11.1033 5.91577 11.3347C6.03038 11.4504 6.16954 11.5 6.3169 11.5C6.46425 11.5 6.6116 11.4421 6.71802 11.3347L8.66635 9.36777L9.50134 10.624C9.59958 10.7645 9.74693 10.8636 9.91884 10.8802C10.0989 10.8967 10.2545 10.8388 10.3773 10.7149L12.6039 8.46694V8.6157C12.6039 8.93802 12.8577 9.19421 13.177 9.19421C13.4962 9.19421 13.75 8.93802 13.75 8.6157V7.07025C13.7336 6.99587 13.7254 6.92149 13.6927 6.85537Z"
                                                fill="#00C092" />
                                        </svg>
                                        + 14%
                                    </div>
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
    data() {
        return {
            date: new Date().toISOString().substr(0, 7),
            menu: false,
            modal: false,
            month: 1,
            data: null,
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
            await api.get('dao-tao/bao-cao-ket-qua-dao-tao?thang=' + this.month, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.data = res?.data?.data
            })
        },

    },
    mounted() {
        this.month = this.date.split("-")[1] + '/' + this.date.split("-")[0];
        this.load_data()
    },
    watch: {
        date() {
            console.log(this.date)
            const dateArray = this.date.split("-");
            console.log(dateArray)
            this.month = dateArray[1] + '/' + dateArray[0];
            this.load_data();
        }
    }
}
</script>

<style lang="scss" scoped>
.card-materials {
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

.text-span {
    color: rgba(45, 45, 45, 0.80);
    font-family: SVN-Gilroy;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
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

@media (max-width: 600px) {
    .card-materials {
        .text {
            font-size: 13px !important;
        }
        .text-rate  {
            font-size: 12px !important;
        }
    }
}

</style>