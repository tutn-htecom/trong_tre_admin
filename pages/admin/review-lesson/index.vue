<template>
    <div class="content-mp review-lesson">
        <!-- <div class="d-flex align-items-center wmt-27 ">
            <nuxt-link class="btn btn-form-review me-3" to="/admin/review-lesson/form-review">
                Quản lý form đánh giá
            </nuxt-link>
            <nuxt-link class="btn btn-add-form-review" to="/admin/review-lesson/form-review/create">
                <span class="icon-plus mdi mdi-plus"></span> Tạo form đánh giá
            </nuxt-link>
        </div> -->

        <div class="d-flex justify-content-between align-items-center wmt-27 ">
            <title-header>Đánh giá của giáo viên</title-header>

            <div class="d-inline-block">
                <div>
                    <select class="w-form-selected ">
                        <option>Tất cả</option>
                        <option>Cũ nhất</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="">
            <v-row>
                <v-col v-for="(item, n) in data" :key="n" xs="12" sm="6" md="4" lg="4" xl="3">
                    <div class="w-card w-bg-success hover-card wow animate__animated animate__zoomIn"
                        style="min-width: 353px">
                        <div class="w-card-title w-bg-success d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center">
                                <div class="me-2">
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="34" height="34" rx="7" fill="#00C092" />
                                        <path opacity="0.4"
                                            d="M21.8198 7H12.1798C10.0498 7 8.31982 8.74 8.31982 10.86V24.95C8.31982 26.75 9.60982 27.51 11.1898 26.64L16.0698 23.93C16.5898 23.64 17.4298 23.64 17.9398 23.93L22.8198 26.64C24.3998 27.52 25.6898 26.76 25.6898 24.95V10.86C25.6798 8.74 23.9498 7 21.8198 7Z"
                                            fill="white" />
                                        <path
                                            d="M19.5 16.3999H14.5C14.09 16.3999 13.75 16.0599 13.75 15.6499C13.75 15.2399 14.09 14.8999 14.5 14.8999H19.5C19.91 14.8999 20.25 15.2399 20.25 15.6499C20.25 16.0599 19.91 16.3999 19.5 16.3999Z"
                                            fill="white" />
                                    </svg>
                                </div>

                                <div>
                                    <div class="w-text-p-card">
                                        Mã đơn: <span>{{ item?.ma_don_hang }}</span>
                                    </div>
                                    <div class="w-text-p-card">
                                        {{ item?.created }}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <span class="w-blade-card-success">
                                    {{ item?.trang_thai?.name }}
                                </span>
                            </div>
                        </div>
                        <div class="w-card-body">
                            <svg class="w-card-body-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353 285"
                                fill="none">
                                <path
                                    d="M353 270C353 278.284 346.284 285 338 285H15C6.71573 285 0 278.284 0 270V0L6.45939 18.2012C8.58322 24.1857 14.2454 28.1845 20.5956 28.1845H338C346.284 28.1845 353 34.9002 353 43.1845V270Z"
                                    fill="white" />
                            </svg>
                            <div class="hh-20"></div>
                            <div class="w-card-body-main">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2 layout-user">
                                            <img :src="item?.giaoVien?.anh_nguoi_dung" alt="">
                                        </div>
                                        <div>
                                            <h3 class="user-name">
                                                {{ item?.giaoVien?.hoten }}
                                            </h3>
                                            <p class="w-p p-0 m-0">
                                                {{ item?.giaoVien?.trinh_do }}
                                            </p>
                                        </div>
                                    </div>

                                    <div class="d-flex">
                                        <div class="me-2">

                                            <a class="" :href="'tel:+' + data?.giaoVien?.dien_thoai">
                                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="19" cy="19" r="19" fill="#F2F2F2" />
                                                <path
                                                    d="M11.6796 9.84669L12.8192 8.70711C13.2097 8.31658 13.8429 8.31658 14.2334 8.70711L17.2403 11.7139C17.6308 12.1045 17.6308 12.7376 17.2403 13.1282L15.1847 15.1837C14.8544 15.514 14.7725 16.0187 14.9814 16.4365C16.1892 18.8521 18.1479 20.8108 20.5635 22.0186C20.9813 22.2275 21.486 22.1456 21.8163 21.8153L23.8718 19.7597C24.2624 19.3692 24.8955 19.3692 25.2861 19.7597L28.2929 22.7666C28.6834 23.1571 28.6834 23.7903 28.2929 24.1808L27.1533 25.3204C25.042 27.4317 21.6994 27.6693 19.3107 25.8777L17.2602 24.3398C15.5166 23.0322 13.9678 21.4834 12.6602 19.7399L11.1223 17.6893C9.33072 15.3006 9.56827 11.958 11.6796 9.84669Z"
                                                    fill="#979797" />
                                            </svg>
                                        </a>
                                        </div>
                                        <div>
                                            <a class="" :href="'sms:+' + data?.phuHuynh?.dien_thoai + '?body=Xin chào'">
                                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="19" cy="19" r="19" fill="#F2F2F2" />
                                                <path opacity="0.4"
                                                    d="M29 13.25V18.35C29 19.62 28.58 20.69 27.83 21.43C27.09 22.18 26.02 22.6 24.75 22.6V24.41C24.75 25.09 23.99 25.5 23.43 25.12L22.46 24.48C22.55 24.17 22.59 23.83 22.59 23.47V19.4C22.59 17.36 21.23 16 19.19 16H12.4C12.26 16 12.13 16.01 12 16.02V13.25C12 10.7 13.7 9 16.25 9H24.75C27.3 9 29 10.7 29 13.25Z"
                                                    fill="#979797" />
                                                <path
                                                    d="M22.59 19.4V23.47C22.59 23.83 22.55 24.17 22.46 24.48C22.09 25.95 20.87 26.87 19.19 26.87H16.47L13.45 28.88C13 29.19 12.4 28.86 12.4 28.32V26.87C11.38 26.87 10.53 26.53 9.94 25.94C9.34 25.34 9 24.49 9 23.47V19.4C9 17.5 10.18 16.19 12 16.02C12.13 16.01 12.26 16 12.4 16H19.19C21.23 16 22.59 17.36 22.59 19.4Z"
                                                    fill="#979797" />
                                            </svg>
                                        </a>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="mt-3">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div class="align-top" style="width: 82px">
                                                            <span class="me-1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="13"
                                                                    height="14" viewBox="0 0 13 14" fill="none">
                                                                    <path
                                                                        d="M9.90674 9.13117C10.3793 8.79446 11 9.16177 11 9.77397V10.7611C11 11.733 10.3017 12.7737 9.46238 13.0798L7.21238 13.891C6.8174 14.0363 6.17555 14.0363 5.78762 13.891L3.53762 13.0798C2.69122 12.7737 2 11.733 2 10.7611V9.76631C2 9.16177 2.62069 8.79446 3.08621 9.12351L4.53919 10.1489C5.0964 10.5545 5.80172 10.7535 6.50705 10.7535C7.21238 10.7535 7.91771 10.5545 8.47492 10.1489L9.90674 9.13117Z"
                                                                        fill="#4EAEEA" />
                                                                    <path
                                                                        d="M12.0206 3.13048L7.88185 0.373553C7.13564 -0.124518 5.90578 -0.124518 5.15957 0.373553L1.00013 3.13048C-0.333377 4.00737 -0.333377 5.99263 1.00013 6.87653L2.10563 7.6061L5.15957 9.62645C5.90578 10.1245 7.13564 10.1245 7.88185 9.62645L10.9151 7.6061L11.8616 6.97474V9.12136C11.8616 9.40898 12.0966 9.64749 12.3799 9.64749C12.6631 9.64749 12.8981 9.40898 12.8981 9.12136V5.66994C13.1744 4.76499 12.8911 3.71273 12.0206 3.13048Z"
                                                                        fill="#4EAEEA" />
                                                                </svg>
                                                            </span>
                                                            <span class="w-p-service">
                                                                Buổi
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span class="w-p-service-i">
                                                            {{ item?.buoi }}/{{ item?.tong_buoi }}
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="align-top">
                                                            <span class="me-1">
                                                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M11.5927 6.55827L11.4939 6.42627C11.3211 6.22227 11.1173 6.06027 10.8827 5.94027C10.5679 5.76627 10.2098 5.67627 9.83934 5.67627H2.15284C1.7824 5.67627 1.43049 5.76627 1.10945 5.94027C0.868664 6.06627 0.652578 6.24027 0.473535 6.45627C0.121622 6.89427 -0.0450732 7.43427 0.010492 7.97427L0.238926 10.7763C0.319187 11.6223 0.424143 12.6663 2.38127 12.6663H9.61708C11.5742 12.6663 11.673 11.6223 11.7594 10.7703L11.9879 7.98027C12.0434 7.47627 11.9076 6.97227 11.5927 6.55827ZM7.47474 9.87027H4.51744C4.27666 9.87027 4.08527 9.67827 4.08527 9.45027C4.08527 9.22227 4.27666 9.03027 4.51744 9.03027H7.47474C7.71552 9.03027 7.90691 9.22227 7.90691 9.45027C7.90691 9.68427 7.71552 9.87027 7.47474 9.87027Z"
                                                                        fill="#FC4D32" />
                                                                    <path
                                                                        d="M11.2391 4.29233C11.3062 4.66856 10.889 4.93054 10.5151 4.85134C10.2985 4.80545 10.075 4.78251 9.84549 4.78251H2.15281C1.91679 4.78251 1.68327 4.80799 1.45786 4.85733C1.08905 4.93805 0.677246 4.68636 0.677246 4.30882V3.46251C0.677246 1.3205 1.3502 0.666504 3.55428 0.666504H4.2828C5.16567 0.666504 5.4435 0.942504 5.80159 1.3925L6.54245 2.35251C6.6968 2.55651 6.70297 2.56851 6.97463 2.56851H8.44402C10.229 2.56851 11.0081 2.99832 11.2391 4.29233Z"
                                                                        fill="#FC4D32" />
                                                                </svg>

                                                            </span>
                                                            <span class="w-p-service">
                                                                Dịch vụ
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span class="w-p-service-i">
                                                            {{ item?.dichVu }}
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="d-flex align-start h-100">
                                                        <div class="align-top">
                                                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M9.17969 1.62905V0.528914C9.17969 0.239774 8.95206 0 8.67756 0C8.40306 0 8.17543 0.239774 8.17543 0.528914V1.58674H3.82365V0.528914C3.82365 0.239774 3.59602 0 3.32152 0C3.04703 0 2.8194 0.239774 2.8194 0.528914V1.62905C1.01173 1.80536 0.134682 2.94076 0.000781097 4.62623C-0.012609 4.83075 0.148072 5 0.335533 5H11.6635C11.8577 5 12.0184 4.8237 11.9983 4.62623C11.8644 2.94076 10.9873 1.80536 9.17969 1.62905Z"
                                                                    fill="#FFB761" />
                                                                <path
                                                                    d="M11.3333 6H0.666667C0.3 6 0 6.29605 0 6.65789V10.7105C0 12.6842 1 14 3.33333 14H8.66667C11 14 12 12.6842 12 10.7105V6.65789C12 6.29605 11.7 6 11.3333 6ZM4.14 11.5066C4.10667 11.5329 4.07333 11.5658 4.04 11.5855C4 11.6118 3.96 11.6316 3.92 11.6447C3.88 11.6645 3.84 11.6776 3.8 11.6842C3.75333 11.6908 3.71333 11.6974 3.66667 11.6974C3.58 11.6974 3.49333 11.6776 3.41333 11.6447C3.32667 11.6118 3.26 11.5658 3.19333 11.5066C3.07333 11.3816 3 11.2105 3 11.0395C3 10.8684 3.07333 10.6974 3.19333 10.5724C3.26 10.5132 3.32667 10.4671 3.41333 10.4342C3.53333 10.3816 3.66667 10.3684 3.8 10.3947C3.84 10.4013 3.88 10.4145 3.92 10.4342C3.96 10.4474 4 10.4671 4.04 10.4934C4.07333 10.5197 4.10667 10.5461 4.14 10.5724C4.26 10.6974 4.33333 10.8684 4.33333 11.0395C4.33333 11.2105 4.26 11.3816 4.14 11.5066ZM4.14 9.20395C4.01333 9.32237 3.84 9.39474 3.66667 9.39474C3.49333 9.39474 3.32 9.32237 3.19333 9.20395C3.07333 9.07895 3 8.90789 3 8.73684C3 8.56579 3.07333 8.39474 3.19333 8.26974C3.38 8.08553 3.67333 8.02632 3.92 8.13158C4.00667 8.16447 4.08 8.21053 4.14 8.26974C4.26 8.39474 4.33333 8.56579 4.33333 8.73684C4.33333 8.90789 4.26 9.07895 4.14 9.20395ZM6.47333 11.5066C6.34667 11.625 6.17333 11.6974 6 11.6974C5.82667 11.6974 5.65333 11.625 5.52667 11.5066C5.40667 11.3816 5.33333 11.2105 5.33333 11.0395C5.33333 10.8684 5.40667 10.6974 5.52667 10.5724C5.77333 10.3289 6.22667 10.3289 6.47333 10.5724C6.59333 10.6974 6.66667 10.8684 6.66667 11.0395C6.66667 11.2105 6.59333 11.3816 6.47333 11.5066ZM6.47333 9.20395C6.44 9.23026 6.40667 9.25658 6.37333 9.28289C6.33333 9.30921 6.29333 9.32895 6.25333 9.34211C6.21333 9.36184 6.17333 9.375 6.13333 9.38158C6.08667 9.38816 6.04667 9.39474 6 9.39474C5.82667 9.39474 5.65333 9.32237 5.52667 9.20395C5.40667 9.07895 5.33333 8.90789 5.33333 8.73684C5.33333 8.56579 5.40667 8.39474 5.52667 8.26974C5.58667 8.21053 5.66 8.16447 5.74667 8.13158C5.99333 8.02632 6.28667 8.08553 6.47333 8.26974C6.59333 8.39474 6.66667 8.56579 6.66667 8.73684C6.66667 8.90789 6.59333 9.07895 6.47333 9.20395ZM8.80667 11.5066C8.68 11.625 8.50667 11.6974 8.33333 11.6974C8.16 11.6974 7.98667 11.625 7.86 11.5066C7.74 11.3816 7.66667 11.2105 7.66667 11.0395C7.66667 10.8684 7.74 10.6974 7.86 10.5724C8.10667 10.3289 8.56 10.3289 8.80667 10.5724C8.92667 10.6974 9 10.8684 9 11.0395C9 11.2105 8.92667 11.3816 8.80667 11.5066ZM8.80667 9.20395C8.77333 9.23026 8.74 9.25658 8.70667 9.28289C8.66667 9.30921 8.62667 9.32895 8.58667 9.34211C8.54667 9.36184 8.50667 9.375 8.46667 9.38158C8.42 9.38816 8.37333 9.39474 8.33333 9.39474C8.16 9.39474 7.98667 9.32237 7.86 9.20395C7.74 9.07895 7.66667 8.90789 7.66667 8.73684C7.66667 8.56579 7.74 8.39474 7.86 8.26974C7.92667 8.21053 7.99333 8.16447 8.08 8.13158C8.2 8.07895 8.33333 8.06579 8.46667 8.09211C8.50667 8.09868 8.54667 8.11184 8.58667 8.13158C8.62667 8.14474 8.66667 8.16447 8.70667 8.19079C8.74 8.21711 8.77333 8.24342 8.80667 8.26974C8.92667 8.39474 9 8.56579 9 8.73684C9 8.90789 8.92667 9.07895 8.80667 9.20395Z"
                                                                    fill="#FFB761" />
                                                            </svg>

                                                            <span class="w-p-service">
                                                                Lịch dạy
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span class="w-p-service-i">
                                                            {{ item?.chonCa }}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!--  -->
                                </div>
                            </div>
                            <div class="w-w-10"></div>
                            <div class="">
                                <div class="w-card-footer">
                                    <nuxt-link class="btn btn-view position-relative" :to="'/admin/review-lesson/' + item?.id">
                                        Xem đánh giá

                                        <span class="icon-right mdi mdi-chevron-right"></span>

                                    </nuxt-link>
                                </div>
                                <!--  -->
                            </div>

                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>

        <div class="mt-3">
            <v-row>
                <!-- <v-col v-for="(item, n) in data" :key="n" xs="12" sm="6" md="4" lg="4" xl="3">

                    <card-service-order :data="item" :status="item?.trang_thai"></card-service-order>
                </v-col> -->

                <v-col v-if="data == null || data?.length == 0">
                    <b-alert class="wow animate__animated animate__bounce" show dismissible variant="primary">Danh sách
                        trống</b-alert>
                </v-col>
                <div class="w-100" v-else>
                    <div class="d-flex justify-content-center mt-4 w-100">
                        <b-pagination v-model="current_page" :total-rows="total" :per-page="per_page" first-text="First"
                            prev-text="Prev" next-text="Next" last-text="Last"></b-pagination>

                    </div>
                </div>
            </v-row>
        </div>
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
                name: 'Đánh giá buổi học',
                previous: '/admin/dashboard'
            },
            data: null,
            tuKhoa: "",
            per_page: 0,
            current_page: 1,
            total: 0,
        };
    },
    computed: {
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        },
        keyword() {
            console.log(this.$store.getters[`order/keyword`])
            return this.$store.getters[`order/keyword`]
        },
    },
    methods: {
        async load_data() {
            await api.get(`danh-gia-buoi-hoc/danh-sach?page=${this.current_page}&limit=9&tuKhoa=${this.tuKhoa}&sort=1`, {
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
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
        this.load_data()
    },
    components: {
        CardItem
    },
    watch: {
        tuKhoa() {
            clearTimeout(this.timeOut);

            this.timeOut = setTimeout(() => {
                // this.$emit("click");
                this.current_page = 1
                this.load_data()

            }, this.timer);
        },
        current_page() {
            this.load_data()
        },
        keyword() {
            this.current_page = 1
            this.tuKhoa = this.keyword
        }
    }
}
</script>

<style lang="scss" scoped>
.review-lesson {
    .btn-form-review {
        border-radius: 46px;
        background: #0056b1;
        display: flex;
        width: 173px;
        height: 38px;
        padding: 13px 5px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
        color: #fff;
        text-align: center;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .btn-add-form-review {
        border-radius: 46px;
        border: 1px solid #4eaeea;
        background: #e8f3ff;
        display: flex;
        width: 173px;
        height: 38px;
        padding: 13px 5px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
        color: #4eaeea;
        text-align: center;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .icon-plus {
        color: #4eaeea;
    }

    .w-blade-card-success {
        display: flex;
        padding: 8px 24px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
        color: #009874;
        text-align: center;
        font-family: SVN-Gilroy;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        border-radius: 46px;
        background: rgba(0, 192, 146, 0.2);
    }

    .btn-view {
        border-radius: 51px;
        background: #00c092;
        display: inline-flex;
        padding: 12px 10px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        color: #fff;
        width: 100%;
        font-family: SVN-Gilroy;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;

        .icon-right {
            position: absolute;
            right: 3px;
            font-size: 29px;
            top: 6px;
        }
    }

    .w-card-body-svg {
        top: -22px;
        min-width: 235px;
        max-width: 300px;
        height: 219px;
        position: relative;
    }
}
</style>