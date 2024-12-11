<template>
    <b-card style="min-width: 245px;" class="mb-2 hover-card h-100">
        <div class="d-flex justify-content-between align-center">
            <div class="w-100 ">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <label class="chart-title">Tổng quan đơn hàng</label>
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

                <div class="w-100 mb-4" v-for="(item, index) in data" v-bind:key="index">
                    <div class="order-service-title mb-2">
                        {{ item?.ten_dich_vu }}
                    </div>
                    <b-progress class="mb-1" max="100" show-value>
                        <b-progress-bar
                            :value="(parseInt(item?.dang_khao_sat) * 100) / (parseInt(item?.dang_day) + parseInt(item?.chua_co_gv) + parseInt(item?.da_huy) + parseInt(item?.hoan_thanh) + parseInt(item?.dang_khao_sat))"
                            class="" variant="info"></b-progress-bar>

                        <b-progress-bar
                            :value="(parseInt(item?.dang_day) * 100) / (parseInt(item?.dang_day) + parseInt(item?.chua_co_gv) + parseInt(item?.da_huy) + parseInt(item?.hoan_thanh) + parseInt(item?.dang_khao_sat))"
                            class="c-primary" variant="success"></b-progress-bar>

                        <b-progress-bar
                            :value="(parseInt(item?.chua_co_gv) * 100) / (parseInt(item?.dang_day) + parseInt(item?.chua_co_gv) + parseInt(item?.da_huy) + parseInt(item?.hoan_thanh) + parseInt(item?.dang_khao_sat))"
                            class="c-warning" variant="warning"></b-progress-bar>

                        <b-progress-bar
                            :value="(parseInt(item?.da_huy) * 100) / (parseInt(item?.dang_day) + parseInt(item?.chua_co_gv) + parseInt(item?.da_huy) + parseInt(item?.hoan_thanh) + parseInt(item?.dang_khao_sat))"
                            class="c-danger" variant="danger"></b-progress-bar>

                        <b-progress-bar
                            :value="(parseInt(item?.hoan_thanh) * 100) / (parseInt(item?.dang_day) + parseInt(item?.chua_co_gv) + parseInt(item?.da_huy) + parseInt(item?.hoan_thanh) + parseInt(item?.dang_khao_sat))"
                            class="c-success" variant="info"></b-progress-bar>


                    </b-progress>
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <div class="text-admin">
                            <span class="text text-info">{{ item?.dang_khao_sat }}</span>
                            <span class="text-span">Đang khảo sát</span>
                        </div>
                        <div class="text-admin">
                            <span class="text text-c-primary">{{ item?.dang_day }}</span>
                            <span class="text-span">Đang dạy</span>
                        </div>
                        <div class="text-admin">
                            <span class="text text-c-warning">{{ item?.chua_co_gv }}</span>
                            <span class="text-span">Chưa có GV</span>
                        </div>
                        <div class="text-admin">
                            <span class="text text-c-danger">{{ item?.da_huy }}</span>
                            <span class="text-span">Hủy</span>
                        </div>
                        <div class="text-admin">
                            <span class="text text-c-success">{{ item?.hoan_thanh }}</span>
                            <span class="text-span">Hoàn thành</span>
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
    name: 'CustomerReport',
    data() {
        return {
            title: {
                name: null,
                previous: '/admin/dashboard'
            },
            data: null,
            // date: new Date().toISOString().substr(0, 7),
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
            await api.get('bao-cao/tong-quan-khach-hang?thang=' + (this.month ?? '') + `&tuNgay=${this.date1}&denNgay=${this.date}`, {
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
        this.month = this.date.split("-")[2] + '/' + this.date.split("-")[1] + '/' + this.date.split("-")[0];
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
</style>