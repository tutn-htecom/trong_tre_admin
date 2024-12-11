<template>
    <div class="content-mp material">
        <v-row class="">
            <v-col class="w-100" xs="12" sm="12" md="12" lg="9" xl="9">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <title-header>Báo cáo giáo cụ</title-header>

                    <div class="btn btn-excel" @click="export_excel()">
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.24833 7.02229C8.24833 9.30585 8.24794 11.5898 8.25023 13.8733C8.25023 13.9793 8.24566 14.0185 8.11422 13.9918C7.88259 13.9446 7.65058 13.8973 7.41742 13.857C7.01968 13.788 6.6269 13.6943 6.22726 13.6352C6.02191 13.6048 5.82038 13.5476 5.61542 13.5118C5.17806 13.4356 4.7426 13.3457 4.30715 13.2604C4.02752 13.2055 3.74598 13.1586 3.46672 13.0984C3.02403 13.0036 2.57486 12.9381 2.13255 12.8428C1.95692 12.8051 1.77977 12.7746 1.60414 12.7373C1.31308 12.6756 1.01858 12.631 0.725996 12.5765C0.561415 12.546 0.398359 12.5087 0.233397 12.4794C0.175489 12.4691 0.158726 12.4397 0.16025 12.3868C0.162155 12.3129 0.161393 12.2386 0.161393 12.1647C0.161393 8.70429 0.161393 5.2439 0.162155 1.78314C0.162155 1.53093 0.171298 1.51341 0.418931 1.49398C0.611323 1.47912 0.79419 1.42159 0.982773 1.39035C1.36451 1.32673 1.7432 1.24482 2.12303 1.17167C2.48267 1.10272 2.84345 1.03909 3.20233 0.965947C3.63321 0.877942 4.06561 0.797556 4.49916 0.724409C4.63174 0.701932 4.76089 0.665358 4.89423 0.643643C5.22339 0.589544 5.5476 0.506111 5.87562 0.443632C6.27183 0.368199 6.66957 0.30229 7.06693 0.231429C7.1995 0.207809 7.33208 0.177712 7.46238 0.148758C7.65782 0.104946 7.85821 0.086659 8.0506 0.02837C8.23232 -0.0268712 8.24871 -0.0123942 8.24871 0.170854C8.24871 2.45441 8.24871 4.73835 8.24871 7.02191L8.24833 7.02229ZM4.20734 7.6048C4.22067 7.62499 4.23705 7.63832 4.23781 7.65204C4.24848 7.86729 4.36544 8.04444 4.46221 8.22312C4.70298 8.66771 4.93461 9.11612 5.16625 9.56529C5.22796 9.68491 5.29387 9.7512 5.45045 9.74358C5.80781 9.72606 6.16707 9.73863 6.52518 9.73825C6.68519 9.73825 6.70348 9.70968 6.61928 9.571C6.38079 9.17708 6.13849 8.78543 5.8981 8.39303C5.6318 7.95834 5.36626 7.52365 5.0992 7.08934C5.05957 7.02496 5.05043 6.96781 5.09272 6.89771C5.32549 6.51521 5.5537 6.13005 5.78571 5.74679C6.05353 5.30448 6.32365 4.86331 6.59185 4.421C6.66424 4.30175 6.65243 4.28309 6.50499 4.28232C6.15487 4.2808 5.80438 4.28842 5.45464 4.27813C5.32778 4.27432 5.28092 4.33337 5.23025 4.43281C5.08129 4.72387 4.91518 5.00656 4.76622 5.29762C4.64888 5.52773 4.50259 5.74298 4.41078 5.98604C4.36315 6.11176 4.31782 6.23863 4.26639 6.3792C4.21343 6.23863 4.17457 6.11824 4.12314 6.00356C4.00085 5.73041 3.87513 5.45877 3.74598 5.18828C3.6134 4.91017 3.47129 4.63663 3.34291 4.357C3.31129 4.28804 3.27243 4.28042 3.21147 4.2808C3.00955 4.28232 2.80764 4.2808 2.6061 4.2808C2.39199 4.2808 2.17751 4.27851 1.9634 4.28156C1.85711 4.28309 1.84149 4.31509 1.89292 4.40805C1.92644 4.46862 1.96264 4.52767 1.99692 4.58748C2.21141 4.9616 2.42323 5.33762 2.64077 5.71021C2.88612 6.13043 3.13642 6.5476 3.38481 6.9659C3.405 7.00019 3.40805 7.02762 3.38253 7.06648C3.12537 7.45774 2.86936 7.84938 2.61715 8.24369C2.31999 8.7081 2.02626 9.17517 1.73215 9.64186C1.71767 9.66472 1.68834 9.6872 1.70319 9.71806C1.71881 9.75044 1.75463 9.73673 1.78091 9.73673C2.20532 9.73787 2.62934 9.73635 3.05375 9.73901C3.11699 9.73939 3.15204 9.71311 3.17909 9.66206C3.38138 9.28032 3.58787 8.90087 3.78522 8.51647C3.89722 8.29817 4.02904 8.09016 4.11781 7.85891C4.14905 7.77738 4.15324 7.6848 4.20734 7.60442V7.6048Z"
                                fill="white" />
                            <path
                                d="M14.1623 7.007C14.1623 8.63224 14.1566 10.2571 14.1668 11.8823C14.1691 12.2282 13.9276 12.4058 13.6449 12.4046C12.0677 12.3993 10.4904 12.4008 8.91321 12.4046C8.79816 12.4046 8.76806 12.373 8.76959 12.2603C8.77682 11.8077 8.77797 11.3551 8.77225 10.9028C8.77073 10.7939 8.80806 10.7748 8.90559 10.776C9.35857 10.7805 9.81155 10.7756 10.2645 10.7802C10.3617 10.7813 10.4013 10.7604 10.3982 10.6533C10.391 10.3862 10.3902 10.1184 10.3982 9.85135C10.4021 9.7283 10.3506 9.69439 10.2394 9.69477C9.79479 9.69668 9.34981 9.69096 8.90521 9.69592C8.80197 9.69706 8.77149 9.66849 8.77378 9.56524C8.77949 9.29399 8.77949 9.02197 8.76997 8.75072C8.76616 8.64176 8.80578 8.62462 8.90293 8.62576C9.3559 8.63071 9.80888 8.625 10.2619 8.62995C10.3632 8.63109 10.3979 8.60062 10.396 8.4989C10.391 8.23564 10.391 7.97239 10.3975 7.70914C10.4005 7.58951 10.351 7.55103 10.2371 7.55141C9.7925 7.55294 9.34752 7.54608 8.90293 7.54989C8.80044 7.55065 8.76806 7.5236 8.77073 7.41922C8.77797 7.13958 8.77721 6.85957 8.77073 6.57993C8.76844 6.48431 8.7993 6.46564 8.89074 6.4664C9.34371 6.47021 9.79669 6.46297 10.2497 6.46488C10.356 6.46526 10.4021 6.44088 10.3979 6.32087C10.3883 6.05381 10.3922 5.78598 10.3967 5.51892C10.3982 5.4191 10.3651 5.38329 10.2619 5.38405C9.80469 5.38748 9.34752 5.38139 8.89074 5.38405C8.79778 5.38482 8.76997 5.35586 8.77149 5.26443C8.77606 4.9806 8.77721 4.69678 8.77073 4.41295C8.76882 4.32266 8.79968 4.30437 8.88273 4.30514C9.3479 4.30856 9.81345 4.30247 10.2786 4.30933C10.3975 4.31123 10.4257 4.26932 10.423 4.16075C10.4173 3.91007 10.4215 3.659 10.4215 3.40794C10.4215 3.25974 10.3918 3.22431 10.242 3.22355C9.79745 3.22088 9.35248 3.21784 8.90788 3.22393C8.79625 3.22546 8.77035 3.19231 8.77187 3.08564C8.7772 2.63723 8.77606 2.18883 8.77187 1.74042C8.77111 1.64937 8.78521 1.61279 8.89035 1.61279C10.4923 1.6166 12.0943 1.6147 13.6963 1.61546C13.9638 1.61546 14.1547 1.79185 14.1566 2.05739C14.1623 2.83077 14.1604 3.60414 14.1607 4.37752C14.1611 5.25376 14.1607 6.13 14.1607 7.00662H14.1615L14.1623 7.007ZM12.0181 10.7767V10.7775C12.3351 10.7775 12.6525 10.7745 12.9694 10.7794C13.0624 10.7809 13.099 10.7607 13.0963 10.6583C13.0887 10.3828 13.0872 10.107 13.0967 9.83154C13.1005 9.71725 13.0594 9.69363 12.9573 9.69439C12.3355 9.69744 11.7138 9.69782 11.092 9.69401C10.9724 9.69325 10.9228 9.73249 10.9259 9.85516C10.932 10.1264 10.9328 10.3981 10.9282 10.6693C10.9267 10.7596 10.9602 10.779 11.0429 10.7783C11.3682 10.7745 11.6936 10.7767 12.0185 10.7767H12.0181ZM12.03 5.38672V5.38558C11.7176 5.38558 11.4048 5.39091 11.0924 5.38291C10.9689 5.37986 10.9244 5.42177 10.9267 5.54178C10.9316 5.80046 10.9339 6.05952 10.9274 6.3182C10.9244 6.43554 10.9754 6.46526 11.081 6.46488C11.7141 6.46183 12.3477 6.46145 12.9813 6.46297C13.0643 6.46297 13.0971 6.44049 13.0952 6.35211C13.0902 6.06447 13.091 5.77684 13.0952 5.4892C13.0963 5.41072 13.0769 5.38329 12.9927 5.38443C12.6719 5.38977 12.3511 5.38634 12.0303 5.38634L12.03 5.38672ZM12.022 8.62767C12.3347 8.62767 12.6475 8.62386 12.9599 8.62995C13.0582 8.63186 13.0982 8.6109 13.0955 8.50309C13.0887 8.22383 13.0894 7.9442 13.0955 7.66456C13.0974 7.57732 13.0693 7.55218 12.9854 7.55256C12.3477 7.55484 11.7099 7.55522 11.0722 7.55256C10.972 7.55218 10.9282 7.5918 10.9286 7.6878C10.9297 7.96325 10.9331 8.23831 10.9316 8.51375C10.9312 8.60671 10.9712 8.63033 11.0589 8.62919C11.3796 8.625 11.7008 8.62767 12.0216 8.62767H12.022ZM12.0117 4.30628C12.337 4.30628 12.6624 4.30399 12.9877 4.3078C13.0654 4.30856 13.0967 4.29142 13.0952 4.20646C13.0902 3.92264 13.0906 3.63881 13.0952 3.35499C13.0963 3.27079 13.0731 3.23993 12.9854 3.24031C12.3431 3.24298 11.7008 3.2426 11.0585 3.23917C10.9674 3.23879 10.9301 3.27422 10.9305 3.36032C10.9316 3.63996 10.9347 3.91959 10.932 4.19922C10.9312 4.28685 10.9655 4.30856 11.0486 4.30742C11.3697 4.30323 11.6909 4.30552 12.0121 4.3059L12.0117 4.30628Z"
                                fill="white" />
                        </svg>
                        Tải file Excel
                    </div>
                </div>

                <card-materials></card-materials>

                <div class="d-flex justify-content-between align-items-center mb-4 mt-6 mb-5">
                    <title-header>Danh sách giáo cụ</title-header>

                    <div>
                        <nuxt-link class="me-2" to="/admin/materials/create_bg">
                            <button-add addClass="btn-header">
                                <span class="icon-plus mdi mdi-plus"></span> Tạo bàn giao
                            </button-add>
                        </nuxt-link>
                        <nuxt-link to="/admin/materials/create">
                            <button-add addClass="btn-header">
                                <span class="icon-plus mdi mdi-plus"></span> Thêm mới
                            </button-add>
                        </nuxt-link>
                    </div>


                </div>

                <div class="mb-11">
                    <v-row>
                        <v-col v-for="(item, index) in data" :key="index" cols="6" xs="6" sm="6" md="4" lg="3" xl="3">
                            <div class="card-material hover-card">
                                <div class="card-material-header">
                                    <strong>
                                        Gói giáo cụ
                                    </strong>
                                    <span class="blade-card">{{ item?.code }}</span>
                                </div>
                                <div class="card-material-body">
                                    <div class="svg-card">
                                        <svg width="168" height="226" viewBox="0 0 168 226" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M167 211C167 219.284 160.284 226 152 226H15C6.71573 226 0 219.284 0 211V0L5.85588 13.9798C8.19149 19.5556 13.6459 23.1845 19.6911 23.1845H152C160.284 23.1845 167 29.9002 167 38.1845V211Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <div class="main-card">
                                        <div class="img-box-card-main">
                                            <img :src="item?.image" />
                                        </div>

                                        <div>
                                            <div>
                                                <div class="d-flex align-items-center">
                                                    <span>
                                                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M9.64339 3.20109L5.81728 5.65521C5.66324 5.75426 5.46945 5.75426 5.31044 5.65521L1.48433 3.20109C1.21104 3.02501 1.14147 2.61232 1.35017 2.3537C1.49427 2.17212 1.65824 2.02355 1.83216 1.919L4.52534 0.268248C5.10174 -0.0894159 6.03591 -0.0894159 6.61231 0.268248L9.3055 1.919C9.47941 2.02355 9.64339 2.17762 9.78749 2.3537C9.98625 2.61232 9.91668 3.02501 9.64339 3.20109Z"
                                                                fill="#FC4D32" />
                                                            <path
                                                                d="M5.28044 6.67868V10.4314C5.28044 10.8496 4.89783 11.1247 4.55994 10.9431C3.53633 10.3874 1.8121 9.3474 1.8121 9.3474C1.20588 8.96773 0.708984 8.01029 0.708984 7.22343V4.38413C0.708984 3.94944 1.12141 3.67431 1.4593 3.88891L5.03199 6.18346C5.18106 6.288 5.28044 6.47509 5.28044 6.67868Z"
                                                                fill="#FC4D32" />
                                                            <path
                                                                d="M5.84668 6.67868V10.4314C5.84668 10.8496 6.22929 11.1247 6.56718 10.9431C7.59079 10.3874 9.31502 9.3474 9.31502 9.3474C9.92124 8.96773 10.4181 8.01029 10.4181 7.22343V4.38413C10.4181 3.94944 10.0057 3.67431 9.66782 3.88891L6.09513 6.18346C5.94606 6.288 5.84668 6.47509 5.84668 6.67868Z"
                                                                fill="#FC4D32" />
                                                        </svg>
                                                        <span class="span-info">Tổng <span class="span2">{{
                                                            item?.so_luong_tong }} bộ</span></span>
                                                    </span>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <span>
                                                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M10.4183 1.35V2.25C10.4183 3.0735 10.0154 3.519 9.20462 3.5865C9.12695 3.5955 9.04442 3.6 8.96189 3.6H2.16538C2.08285 3.6 2.00032 3.5955 1.92265 3.5865C1.11192 3.519 0.708984 3.0735 0.708984 2.25V1.35C0.708984 0.45 1.19445 0 2.16538 0H8.96189C9.93282 0 10.4183 0.45 10.4183 1.35Z"
                                                                fill="#FC4D32" />
                                                            <path
                                                                d="M2.40832 4.1626C2.14131 4.1626 1.92285 4.3651 1.92285 4.6126V7.6501C1.92285 8.5501 2.16558 9.0001 3.37925 9.0001H7.74843C8.9621 9.0001 9.20483 8.5501 9.20483 7.6501V4.6126C9.20483 4.3651 8.98637 4.1626 8.71936 4.1626H2.40832ZM6.44739 6.1876H4.68029C4.48125 6.1876 4.31619 6.0346 4.31619 5.8501C4.31619 5.6656 4.48125 5.5126 4.68029 5.5126H6.44739C6.64643 5.5126 6.81149 5.6656 6.81149 5.8501C6.81149 6.0346 6.64643 6.1876 6.44739 6.1876Z"
                                                                fill="#FC4D32" />
                                                        </svg>
                                                        <span class="span-info">Tồn kho <span class="span2">{{
                                                            item?.so_luong_ton }}
                                                                bộ</span></span>
                                                    </span>
                                                </div>
                                            </div>
                                            <nuxt-link :to="'/admin/materials/detail/' + item?.id" class="read-more mt-2">
                                                <span>Xem thêm</span>
                                                <span class="mdi mdi-chevron-right"></span>
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
        </v-row>


    </div>
</template>

<script>
import CardItem from '../../../components/card/CardItem.vue';
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Quản lý giáo cụ',
                previous: '/admin/dashboard'
            },
            data: null,
        };
    },
    computed: {
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        async load_data() {
            await api.get('giao-cu/danh-sach?page=1&limit=8&sort=1&tuKhoa=', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.data = res?.data?.data
            })
        },
        async export_excel() {
            Swal.fire({
                title: "Đang xử lý yêu cầu!",
                html: "Vui lòng chờ...",
                timerProgressBar: true,
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log("I was closed by the timer");
                }
            });

            await api.get('giao-cu/export-excel-danh-sach-giao-cu', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                Swal.close()
                toastr.success('Tải xuống thành công');
                window.open(res?.data?.data);
            })
        }
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
        this.load_data()
    },
    components: { CardItem }
}
</script>

<style lang="scss" scoped>
.material {
    .span-info {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        // line-height: 20px;
    }

    .span2 {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        // line-height: 20px;
    }

    .btn-excel {
        border-radius: 46px;
        background: #00C092;
        display: flex;
        padding: 12px 32px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
        color: #FFF;
        text-align: center;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        transition: 0.3s;

        &:hover {
            background: transparent;
            border: 1px solid #00C092;
            color: #00C092;
            fill: #00C092;
        }
    }

    .card-material {
        min-width: 160px;
        // max-width: 167px;
        min-height: 240px;
        overflow: hidden;
        border-radius: 15px;
        background: #fc4d32;
        border: 1px solid white;
    }

    .card-material-header {
        padding: 9px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        strong {
            color: #fff;
            font-family: SVN-Gilroy;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
    }

    .card-material-body {
        position: relative;

        .svg-card {
            position: absolute;
            top: -24px;
            width: 100%;
            left: 0;
            height: 100%;
        }
    }

    .blade-card {
        border-radius: 51px;
        background: rgba(255, 255, 255, 0.85);
        display: inline-flex;
        padding: 5px 12px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: #fc4d32;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .main-card {
        position: relative;
        padding: 9px;
        background: white;
        border-radius: 15px;
    }

    .img-box-card-main {
        border-radius: 8px;
        border: 1px solid #E5E5E5;
        width: 100%;
        min-width: 147px;
        height: 99px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            // object-fit: cover;
            // border: 1px solid #e5e5e5;
        }
    }

    .read-more {
        border-radius: 51px;
        background: #fc4d32;
        display: inline-flex;
        height: 27px;
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        position: relative;

        span {
            color: #fff;
            text-align: center;
            font-family: SVN-Gilroy;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
        }

        .mdi-chevron-right {
            position: absolute;
            right: 4px;
            font-size: 20px;
        }
    }

    .span2 {}
}
</style>