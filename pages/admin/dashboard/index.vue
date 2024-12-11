<template>
    <div class="content-mp">
        <div class="d-flex justify-content-between align-items-center">
            <title-header>Tổng quan</title-header>

            <div class="d-inline-block">
                <div class="me-5">
                    <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="date" label="" class="month-picker" prepend-icon="mdi-calendar" readonly
                                v-bind="attrs" v-on="on"></v-text-field>
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
        </div>

        <div class="">
            <div class="swiper w-100 dashboard-alanysis m0-mobile" id="sw1">
                <div class="swiper-wrapper">
                    <div class="mb-2 swiper-slide">
                        <nuxt-link to="/admin/dashboard/sales_report">
                            <b-card style="min-width: 245px;"
                                class="mb-2 hover-card wow animate__animated animate__bounceIn">
                                <div class="d-flex justify-content-between align-center">
                                    <div>
                                        <div class="alanysis-title mb-1">Tổng doanh thu</div>
                                        <h3 class="wh3-text">{{ formatCurrency(data?.tongDoanhThu?.tong) }}</h3>
                                        <div>
                                            <span class="">
                                                <svg width="26" height="18" viewBox="0 0 26 18" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="9.23999" cy="9" r="9" fill="#0056B1" fill-opacity="0.15" />
                                                    <path
                                                        d="M13.1827 6.85537C13.1254 6.71488 13.0108 6.59917 12.8716 6.54132C12.8062 6.51653 12.7325 6.5 12.6588 6.5H11.1362C10.8169 6.5 10.5631 6.7562 10.5631 7.07851C10.5631 7.40083 10.8169 7.65703 11.1362 7.65703H11.2835L9.55621 9.40083L8.72122 8.14463C8.62298 8.00413 8.47563 7.90496 8.30372 7.88843C8.12362 7.8719 7.96808 7.92975 7.84529 8.05372L5.40579 10.5165C5.18476 10.7397 5.18476 11.1033 5.40579 11.3347C5.5204 11.4504 5.65957 11.5 5.80692 11.5C5.95427 11.5 6.10162 11.4421 6.20804 11.3347L8.15637 9.36777L8.99136 10.624C9.0896 10.7645 9.23695 10.8636 9.40886 10.8802C9.58896 10.8967 9.7445 10.8388 9.86729 10.7149L12.0939 8.46694V8.6157C12.0939 8.93802 12.3477 9.19421 12.667 9.19421C12.9862 9.19421 13.24 8.93802 13.24 8.6157V7.07025C13.2236 6.99587 13.2155 6.92149 13.1827 6.85537Z"
                                                        fill="#0056B1" />
                                                </svg>
                                            </span>
                                            <span>+{{ data?.tongDoanhThu?.tang_truong }}%</span>
                                        </div>
                                    </div>
                                    <div class="position-relative">
                                        <svg class="svg" width="87" height="86" viewBox="0 0 87 86" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="43.098" cy="42.9998" r="39.9998" stroke="#EDF1FB"
                                                stroke-width="6" />
                                            <path
                                                d="M54.4454 4.64392C60.9128 6.5573 66.7914 10.0749 71.5346 14.8698C76.2778 19.6646 79.7315 25.5809 81.5747 32.0687C83.418 38.5564 83.5908 45.4049 82.0772 51.9773C80.5635 58.5498 77.4126 64.6328 72.9173 69.6607C68.422 74.6887 62.7284 78.4984 56.3657 80.7356C50.0031 82.9727 43.178 83.5647 36.5252 82.4565C29.8724 81.3483 23.6078 78.5759 18.3139 74.3971C13.02 70.2182 8.86874 64.7686 6.24603 58.5549"
                                                stroke="#0056B1" stroke-width="6" stroke-linecap="round" />
                                        </svg>
                                        <span class="rate">+{{ data?.tongDoanhThu?.thuc_te }} %</span>
                                    </div>
                                </div>
                            </b-card>
                        </nuxt-link>
                    </div>

                    <div class="mb-2 swiper-slide">
                        <nuxt-link to="/admin/dashboard/sales_report">
                        <b-card style="min-width: 245px;" class="mb-2 hover-card wow animate__animated animate__bounceIn">
                            <div class="d-flex justify-content-between align-center">
                                <div>
                                    <div class="alanysis-title mb-1">Lợi nhuận thực tế</div>
                                    <h3 class="wh3-text">{{ formatCurrency(data?.loiNhuan?.tong) }}</h3>
                                    <div>
                                        <span class="">
                                            <svg width="26" height="18" viewBox="0 0 26 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="9.23999" cy="9" r="9" fill="#FC4D32" fill-opacity="0.1" />
                                                <path
                                                    d="M13.1827 6.85537C13.1254 6.71488 13.0108 6.59917 12.8716 6.54132C12.8062 6.51653 12.7325 6.5 12.6588 6.5H11.1362C10.8169 6.5 10.5631 6.7562 10.5631 7.07851C10.5631 7.40083 10.8169 7.65703 11.1362 7.65703H11.2835L9.55621 9.40083L8.72122 8.14463C8.62298 8.00413 8.47563 7.90496 8.30372 7.88843C8.12362 7.8719 7.96808 7.92975 7.84529 8.05372L5.40579 10.5165C5.18476 10.7397 5.18476 11.1033 5.40579 11.3347C5.5204 11.4504 5.65957 11.5 5.80692 11.5C5.95427 11.5 6.10162 11.4421 6.20804 11.3347L8.15637 9.36777L8.99136 10.624C9.0896 10.7645 9.23695 10.8636 9.40886 10.8802C9.58896 10.8967 9.7445 10.8388 9.86729 10.7149L12.0939 8.46694V8.6157C12.0939 8.93802 12.3477 9.19421 12.667 9.19421C12.9862 9.19421 13.24 8.93802 13.24 8.6157V7.07025C13.2236 6.99587 13.2155 6.92149 13.1827 6.85537Z"
                                                    fill="#FC4D32" />
                                            </svg>
                                        </span>
                                        <span>+{{ data?.loiNhuan?.tang_truong }}%</span>
                                    </div>
                                </div>
                                <div class="position-relative">
                                    <svg width="87" height="86" viewBox="0 0 87 86" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="43.098" cy="42.9998" r="39.9998" stroke="#EDF1FB" stroke-width="6" />
                                        <path
                                            d="M54.4454 4.64392C60.9128 6.5573 66.7914 10.0749 71.5346 14.8698C76.2777 19.6646 79.7315 25.5809 81.5747 32.0687C83.4179 38.5564 83.5908 45.4049 82.0771 51.9773C80.5635 58.5498 77.4126 64.6328 72.9173 69.6607C68.422 74.6887 62.7283 78.4984 56.3657 80.7356C50.0031 82.9727 43.178 83.5647 36.5252 82.4565C29.8724 81.3483 23.6078 78.5759 18.3139 74.3971C13.02 70.2182 8.86873 64.7686 6.24602 58.5549"
                                            stroke="#FC4D32" stroke-width="6" stroke-linecap="round" />
                                    </svg>
                                    <span class="rate">+{{ data?.loiNhuan?.thuc_te }} %</span>
                                </div>
                            </div>
                        </b-card>
                    </nuxt-link>
                    </div>

                    <div class="mb-2 swiper-slide">
                        <nuxt-link to="/admin/orders">
                        <b-card style="min-width: 245px;" class="mb-2 hover-card wow animate__animated animate__bounceIn">
                            <div class="d-flex justify-content-between align-center">
                                <div>
                                    <div class="alanysis-title mb-1">Số đơn</div>
                                    <h3 class="wh3-text">{{ data?.soDon?.tong }}</h3>
                                    <div>
                                        <span class="">
                                            <svg width="26" height="18" viewBox="0 0 26 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="9.23999" cy="9" r="9" fill="#FFB761" fill-opacity="0.2" />
                                                <path
                                                    d="M13.1827 6.85537C13.1254 6.71488 13.0108 6.59917 12.8716 6.54132C12.8062 6.51653 12.7325 6.5 12.6588 6.5H11.1362C10.8169 6.5 10.5631 6.7562 10.5631 7.07851C10.5631 7.40083 10.8169 7.65703 11.1362 7.65703H11.2835L9.55621 9.40083L8.72122 8.14463C8.62298 8.00413 8.47563 7.90496 8.30372 7.88843C8.12362 7.8719 7.96808 7.92975 7.84529 8.05372L5.40579 10.5165C5.18476 10.7397 5.18476 11.1033 5.40579 11.3347C5.5204 11.4504 5.65957 11.5 5.80692 11.5C5.95427 11.5 6.10162 11.4421 6.20804 11.3347L8.15637 9.36777L8.99136 10.624C9.0896 10.7645 9.23695 10.8636 9.40886 10.8802C9.58896 10.8967 9.7445 10.8388 9.86729 10.7149L12.0939 8.46694V8.6157C12.0939 8.93802 12.3477 9.19421 12.667 9.19421C12.9862 9.19421 13.24 8.93802 13.24 8.6157V7.07025C13.2236 6.99587 13.2155 6.92149 13.1827 6.85537Z"
                                                    fill="#FFB761" />
                                            </svg>
                                        </span>
                                        <span>+{{ data?.soDon?.tang_truong }}%</span>
                                    </div>
                                </div>
                                <div class="position-relative">
                                    <svg width="87" height="86" viewBox="0 0 87 86" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="43.098" cy="42.9998" r="39.9998" stroke="#EDF1FB" stroke-width="6" />
                                        <path
                                            d="M54.4454 4.64392C60.9128 6.5573 66.7914 10.0749 71.5346 14.8698C76.2778 19.6646 79.7315 25.5809 81.5747 32.0687C83.418 38.5564 83.5908 45.4049 82.0772 51.9773C80.5635 58.5498 77.4126 64.6328 72.9173 69.6607C68.422 74.6887 62.7284 78.4984 56.3657 80.7356C50.0031 82.9727 43.178 83.5647 36.5252 82.4565C29.8724 81.3483 23.6078 78.5759 18.3139 74.3971C13.02 70.2182 8.86874 64.7686 6.24603 58.5549"
                                            stroke="#FFB761" stroke-width="6" stroke-linecap="round" />
                                    </svg>
                                    <span class="rate">+{{ data?.soDon?.thuc_te }} %</span>
                                </div>
                            </div>
                        </b-card>
                        </nuxt-link>
                    </div>

                    <div class="mb-2 swiper-slide">
                        <nuxt-link to="/admin/users/parent">
                        <b-card style="min-width: 245px;" class="mb-2 hover-card wow animate__animated animate__bounceIn">
                            <div class="d-flex justify-content-between align-center">
                                <div>
                                    <div class="alanysis-title mb-1">Số khách hàng</div>
                                    <h3 class="wh3-text">{{ data?.soKhachHang?.tong }}</h3>
                                    <div>
                                        <span class="">
                                            <svg width="26" height="18" viewBox="0 0 26 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="9.23999" cy="9" r="9" fill="#4EAEEA" fill-opacity="0.1" />
                                                <path
                                                    d="M13.1827 6.85537C13.1254 6.71488 13.0108 6.59917 12.8716 6.54132C12.8061 6.51653 12.7324 6.5 12.6588 6.5H11.1361C10.8169 6.5 10.5631 6.7562 10.5631 7.07851C10.5631 7.40083 10.8169 7.65703 11.1361 7.65703H11.2835L9.55618 9.40083L8.72119 8.14463C8.62295 8.00413 8.4756 7.90496 8.30369 7.88843C8.12359 7.8719 7.96805 7.92975 7.84526 8.05372L5.40576 10.5165C5.18473 10.7397 5.18473 11.1033 5.40576 11.3347C5.52037 11.4504 5.65954 11.5 5.80689 11.5C5.95424 11.5 6.10159 11.4421 6.20801 11.3347L8.15634 9.36777L8.99133 10.624C9.08957 10.7645 9.23692 10.8636 9.40883 10.8802C9.58893 10.8967 9.74447 10.8388 9.86726 10.7149L12.0939 8.46694V8.6157C12.0939 8.93802 12.3477 9.19421 12.667 9.19421C12.9862 9.19421 13.24 8.93802 13.24 8.6157V7.07025C13.2236 6.99587 13.2154 6.92149 13.1827 6.85537Z"
                                                    fill="#4EAEEA" />
                                            </svg>
                                        </span>
                                        <span>+{{ data?.soKhachHang?.tang_truong }}%</span>
                                    </div>
                                </div>
                                <div class="position-relative">
                                    <svg width="87" height="86" viewBox="0 0 87 86" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="43.098" cy="42.9998" r="39.9998" stroke="#EDF1FB" stroke-width="6" />
                                        <path
                                            d="M54.4454 4.64392C60.9128 6.5573 66.7914 10.0749 71.5346 14.8698C76.2778 19.6646 79.7315 25.5809 81.5747 32.0687C83.418 38.5564 83.5908 45.4049 82.0772 51.9773C80.5635 58.5498 77.4126 64.6328 72.9173 69.6607C68.422 74.6887 62.7284 78.4984 56.3657 80.7356C50.0031 82.9727 43.178 83.5647 36.5252 82.4565C29.8724 81.3483 23.6078 78.5759 18.3139 74.3971C13.02 70.2182 8.86874 64.7686 6.24603 58.5549"
                                            stroke="#4EAEEA" stroke-width="6" stroke-linecap="round" />
                                    </svg>
                                    <span class="rate">+{{ data?.soKhachHang?.thuc_te }} %</span>
                                </div>
                            </div>
                        </b-card>
                    </nuxt-link>
                    </div>
                </div>
            </div>
        </div>

        <!--  -->

        <div class="">
            <div class="row w-100 m0-mobile">
                <div class="col-12 col-md-12 col-lg-6 mb-2 wow animate__animated animate__zoomIn">
                    <div class="d-flex justify-content-between align-center mb-3">
                        <div class="h3-title">Báo cáo doanh thu</div>
                        <nuxt-link class="watch-more" to="/admin/dashboard/sales_report">Xem thêm</nuxt-link>
                    </div>
                    <sales-report></sales-report>
                </div>

                <div class="col-12 col-md-12 col-lg-6 mb-2 wow animate__animated animate__zoomIn">
                    <div class="d-flex justify-content-between align-center mb-3">
                        <div class="h3-title">Báo cáo khách hàng</div>
                        <nuxt-link class="watch-more" to="/admin/dashboard/customer_reports">Xem thêm</nuxt-link>
                        <!-- <nuxt-link class="watch-more" to="/">Xem thêm</nuxt-link> -->
                    </div>

                    <customer-report></customer-report>
                </div>

                <div class="col-12 col-md-12 col-lg-6 mb-2 mt-5 wow animate__animated animate__zoomIn">
                    <div class="d-flex justify-content-between align-center mb-3">
                        <div class="h3-title">Báo cáo chi lương</div>
                        <nuxt-link class="watch-more" to="/admin/dashboard/salary">Xem thêm</nuxt-link>
                    </div>
                    <SalaryReport></SalaryReport>
                </div>

                <div class="col-12 col-md-12 col-lg-6 mb-2 mt-5 wow animate__animated animate__zoomIn">
                    <div class="d-flex justify-content-between align-center mb-3">
                        <div class="h3-title">Báo cáo tình trạng đơn dịch vụ</div>
                        <nuxt-link class="watch-more" to="/admin/orders">Xem thêm</nuxt-link>
                    </div>
                    <OrderReport></OrderReport>
                </div>

                <div class="col-12 col-md-12 col-lg-6 mb-2 mt-5 wow animate__animated animate__zoomIn">
                    <div class="d-flex justify-content-between align-center mb-3">
                        <div class="h3-title">Báo cáo tăng trưởng User</div>
                        <nuxt-link class="watch-more" to="/admin/dashboard/user_report">Xem thêm</nuxt-link>
                    </div>

                    <user-report></user-report>
                </div>

                <div class="col-12 col-md-12 col-lg-6 mb-2 mt-5 wow animate__animated animate__zoomIn">
                    <div class="d-flex justify-content-between align-center mb-3">
                        <div class="h3-title">Báo cáo giáo cụ</div>
                        <nuxt-link class="watch-more" to="/admin/materials">Xem thêm</nuxt-link>
                    </div>

                    <CardMaterials></CardMaterials>
                </div>

                <div class="col-12 col-md-12 col-lg-6 mb-2 mt-5 wow animate__animated animate__zoomIn">
                    <div class="d-flex justify-content-between align-center mb-3">
                        <div class="h3-title">Báo cáo đào tạo</div>
                        <nuxt-link class="watch-more" to="/admin/lsm/result-training">Xem thêm</nuxt-link>
                    </div>
                    <div>
                        <card-result-training></card-result-training>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonAdd from '~/components/button/ButtonAdd.vue'
import BarChart from '~/components/Chart/BarChart.vue'
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';
import SalesReport from '~/components/Report/SalesReport.vue';
import CustomerReport from '~/components/Report/CustomerReport.vue'
import SalaryReport from '~/components/Report/SalaryReport.vue'
import UserReport from '~/components/Report/UserReport.vue'
import OrderReport from '~/components/Report/OrderReport.vue'
import { Swiper, SwiperSlide } from 'swiper';
import 'swiper/swiper.css';
import { Pagination } from 'swiper/modules';

export default {
    layout: 'admin',
    components: {
        BarChart, ButtonAdd, SalesReport, CustomerReport, SalaryReport, UserReport, OrderReport, Swiper,
        SwiperSlide,
    },
    data() {
        return {
            title: {
                name: null,
                previous: '/admin/dashboard'
            },
            data: null,
            date: new Date().toISOString().substr(0, 7),
            menu: false,
            modal: false,
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
            await api.get('bao-cao/tong-quan?thang=' + (this.month ?? ''), {
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
        this.month = this.date.split("-")[1] + '/' + this.date.split("-")[0];

        this.$store.dispatch('title/set_title', this.title)
        this.load_data()

        const swiper = new Swiper('#sw1', {
            modules: [Pagination],
            // slidesPerView: 4,
            spaceBetween: 25,
            freeMode: true,
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 25,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                },
            },
        });
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