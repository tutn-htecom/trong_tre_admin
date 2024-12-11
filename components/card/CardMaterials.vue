<template>
    <b-card style="min-width: 245px;" class="mb-2 wow animate__animated animate__zoomIn hover-card">
        <div class="d-flex justify-content-between align-center">
            <div class="w-100 ">
                <div class="d-flex justify-content-between align-items-center">
                    <label class="chart-title">Tổng quan tình trạng giáo cụ</label>
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
                            <div class="span-title">Đang cho mượn</div>
                            <div class="mt-3">
                                <div class="d-flex align-items-center">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.91 18H19.1C21 18 22 17 22 15.1V3H4V15.1C4.01 17 5.01 18 6.91 18Z"
                                            stroke="#2D2D2D" stroke-width="1.5" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.01001 23L13.01 21V18" stroke="#2D2D2D" stroke-width="1.5"
                                            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17.01 23L13.01 21" stroke="#2D2D2D" stroke-width="1.5"
                                            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M8.51001 12L11.66 9.37C11.91 9.16 12.24 9.22 12.41 9.5L13.61 11.5C13.78 11.78 14.11 11.83 14.36 11.63L17.51 9"
                                            stroke="#2D2D2D" stroke-width="1.5" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="text text-c-primary ms-2">{{ data?.dang_muon }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card-materials">
                            <div class="span-title">Số tồn kho</div>
                            <div class="mt-3">
                                <div class="d-flex align-items-center">
                                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19.5 6V14.2C19.5 15.8802 19.5 16.7202 19.173 17.362C18.8854 17.9265 18.4265 18.3854 17.862 18.673C17.2202 19 16.3802 19 14.7 19H7.3C5.61984 19 4.77976 19 4.13803 18.673C3.57354 18.3854 3.1146 17.9265 2.82698 17.362C2.5 16.7202 2.5 15.8802 2.5 14.2V6M2.6 1H19.4C19.9601 1 20.2401 1 20.454 1.10899C20.6422 1.20487 20.7951 1.35785 20.891 1.54601C21 1.75992 21 2.03995 21 2.6V4.4C21 4.96005 21 5.24008 20.891 5.45399C20.7951 5.64215 20.6422 5.79513 20.454 5.89101C20.2401 6 19.9601 6 19.4 6H2.6C2.03995 6 1.75992 6 1.54601 5.89101C1.35785 5.79513 1.20487 5.64215 1.10899 5.45399C1 5.24008 1 4.96005 1 4.4V2.6C1 2.03995 1 1.75992 1.10899 1.54601C1.20487 1.35785 1.35785 1.20487 1.54601 1.10899C1.75992 1 2.03995 1 2.6 1ZM8.6 9.5H13.4C13.9601 9.5 14.2401 9.5 14.454 9.60899C14.6422 9.70487 14.7951 9.85785 14.891 10.046C15 10.2599 15 10.5399 15 11.1V11.9C15 12.4601 15 12.7401 14.891 12.954C14.7951 13.1422 14.6422 13.2951 14.454 13.391C14.2401 13.5 13.9601 13.5 13.4 13.5H8.6C8.03995 13.5 7.75992 13.5 7.54601 13.391C7.35785 13.2951 7.20487 13.1422 7.10899 12.954C7 12.7401 7 12.4601 7 11.9V11.1C7 10.5399 7 10.2599 7.10899 10.046C7.20487 9.85785 7.35785 9.70487 7.54601 9.60899C7.75992 9.5 8.03995 9.5 8.6 9.5Z"
                                            stroke="#2D2D2D" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>

                                    <div class="text text-c-success ms-2">{{ data?.so_luong_ton }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card-materials">
                            <div class="span-title">Đã hoàn trả</div>
                            <div class="mt-3">
                                <div class="d-flex align-items-center">
                                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.5 9H4.88197C5.56717 9 6.19357 9.38713 6.5 10C6.80643 10.6129 7.43283 11 8.11803 11H13.882C14.5672 11 15.1936 10.6129 15.5 10C15.8064 9.38713 16.4328 9 17.118 9H20.5M7.96656 1H14.0334C15.1103 1 15.6487 1 16.1241 1.16396C16.5445 1.30896 16.9274 1.5456 17.2451 1.85675C17.6043 2.2086 17.8451 2.6902 18.3267 3.65337L20.4932 7.9865C20.6822 8.36449 20.7767 8.55348 20.8434 8.75155C20.9026 8.92745 20.9453 9.10847 20.971 9.29226C21 9.49923 21 9.71053 21 10.1331V12.2C21 13.8802 21 14.7202 20.673 15.362C20.3854 15.9265 19.9265 16.3854 19.362 16.673C18.7202 17 17.8802 17 16.2 17H5.8C4.11984 17 3.27976 17 2.63803 16.673C2.07354 16.3854 1.6146 15.9265 1.32698 15.362C1 14.7202 1 13.8802 1 12.2V10.1331C1 9.71053 1 9.49923 1.02897 9.29226C1.05471 9.10847 1.09744 8.92745 1.15662 8.75155C1.22326 8.55348 1.31776 8.36448 1.50675 7.9865L3.67331 3.65337C4.1549 2.69019 4.3957 2.2086 4.75495 1.85675C5.07263 1.5456 5.45551 1.30896 5.87589 1.16396C6.35125 1 6.88969 1 7.96656 1Z"
                                            stroke="#2D2D2D" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>

                                    <div class="text text-c-warning ms-2">{{ data?.da_tra }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card-materials">
                            <div class="span-title">Số lượng hỏng</div>
                            <div class="mt-3">
                                <div class="d-flex align-items-center">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 7L13 13M13 7L7 13M5.8 19H14.2C15.8802 19 16.7202 19 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C19 16.7202 19 15.8802 19 14.2V5.8C19 4.11984 19 3.27976 18.673 2.63803C18.3854 2.07354 17.9265 1.6146 17.362 1.32698C16.7202 1 15.8802 1 14.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19Z"
                                            stroke="#2D2D2D" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    <div class="text text-c-danger ms-2">{{ data?.so_luong_hong }}</div>
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
            data: null,
            date: new Date().toISOString().substr(0, 7),
            month: 1,
            menu: false,
            modal: false,
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
            await api.get('giao-cu/bao-cao?thang=' + (this.month ?? ''), {
                // await api.get('bao-cao/tong-quan-khach-hang?thang=', {
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
</style>