<template>
    <div class="content-mp review-lesson web-form-reivew teacher-training">
        <div class="d-flex align-items-center wmt-27 ">
            <nuxt-link class="btn btn-form-review me-3" to="/admin/teacher-training/training-result">
                Quản lý kết quả đào tạo
            </nuxt-link>
            <nuxt-link class="btn btn-add-form-review" to="/admin/teacher-training/create">
                <span class="icon-plus mdi mdi-plus"></span> Thêm chương trình
            </nuxt-link>
        </div>

        <div class="d-flex justify-content-between align-items-center wmt-27 ">
            <h1 class="w-title d-inline w-h1">
                Chương trình đào tạo
            </h1>

            <div class="d-inline-block">
                <!-- <div>
                    <select class="w-form-selected ">
                        <option>Tất cả</option>
                        <option>Cũ nhất</option>
                    </select>
                </div> -->
            </div>
        </div>

        <div class="mb-11">
            <div class="d-flex align-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#0056B1" />
                    <path
                        d="M13.2401 8.48143L8.08958 5.20606C6.8675 4.42749 5.53876 6.00074 6.15647 7.49345L6.87639 9.23315C7.07636 9.7164 7.07636 10.2856 6.87639 10.7688L6.15647 12.5085C5.53876 14.0012 6.8675 15.5691 8.08958 14.7959L13.2401 11.5205C14.2533 10.8762 14.2533 9.12576 13.2401 8.48143Z"
                        fill="white" />
                </svg>
                <strong class="text-view-p ms-2">
                    Cơ bản
                </strong>
            </div>
            <div class="row w-100 overflow-x-auto dashboard-alanysis flex-xs-nowrap m0-mobile overflow-y-hidden mt-2">
                <div class="col-lg-3 xl-2 max-box" v-for="n in 5" :key="n">
                    <nuxt-link class="d-block " to="/admin/teacher-training/12">
                        <div class="card-body-bg img-box">
                            <img src="@/static/images/teacher-training/Rectangle40.png" alt="">
                            <div class="box-edit">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="15" cy="15" r="15" fill="white" fill-opacity="0.8" />
                                    <path
                                        d="M21.75 22.5H8.25C7.9425 22.5 7.6875 22.245 7.6875 21.9375C7.6875 21.63 7.9425 21.375 8.25 21.375H21.75C22.0575 21.375 22.3125 21.63 22.3125 21.9375C22.3125 22.245 22.0575 22.5 21.75 22.5Z"
                                        fill="#979797" />
                                    <path
                                        d="M20.2649 8.61024C18.8099 7.15524 17.3849 7.11774 15.8924 8.61024L14.9849 9.51774C14.9099 9.59274 14.8799 9.71274 14.9099 9.81774C15.4799 11.8052 17.0699 13.3952 19.0574 13.9652C19.0874 13.9727 19.1174 13.9802 19.1474 13.9802C19.2299 13.9802 19.3049 13.9502 19.3649 13.8902L20.2649 12.9827C21.0074 12.2477 21.3674 11.5352 21.3674 10.8152C21.3749 10.0727 21.0149 9.35274 20.2649 8.61024Z"
                                        fill="#979797" />
                                    <path
                                        d="M17.7073 14.6476C17.4898 14.5426 17.2798 14.4376 17.0773 14.3176C16.9123 14.2201 16.7548 14.1151 16.5973 14.0026C16.4698 13.9201 16.3198 13.8001 16.1773 13.6801C16.1623 13.6726 16.1098 13.6276 16.0498 13.5676C15.8023 13.3576 15.5248 13.0876 15.2773 12.7876C15.2548 12.7726 15.2173 12.7201 15.1648 12.6526C15.0898 12.5626 14.9623 12.4126 14.8498 12.2401C14.7598 12.1276 14.6548 11.9626 14.5573 11.7976C14.4373 11.5951 14.3323 11.3926 14.2273 11.1826C14.0896 10.8876 13.7024 10.8 13.4722 11.0302L9.25475 15.2476C9.15725 15.3451 9.06725 15.5326 9.04475 15.6601L8.63975 18.5326C8.56475 19.0426 8.70725 19.5226 9.02225 19.8451C9.29225 20.1076 9.66725 20.2501 10.0723 20.2501C10.1623 20.2501 10.2523 20.2426 10.3423 20.2276L13.2223 19.8226C13.3573 19.8001 13.5448 19.7101 13.6348 19.6126L17.8592 15.3882C18.0847 15.1626 18 14.7744 17.7073 14.6476Z"
                                        fill="#979797" />
                                </svg>
                            </div>
                        </div>
                        <div class="footer-box">
                            <svg width="187" height="91" viewBox="0 0 187 91" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_593_4465" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                    width="187" height="91">
                                    <path
                                        d="M187 76C187 84.2843 180.284 91 172 91H15C6.71573 91 0 84.2843 0 76V0L5.95919 15.0535C8.22399 20.7746 13.753 24.5324 19.9061 24.5324H172C180.284 24.5324 187 31.2481 187 39.5324V76Z"
                                        fill="url(#paint0_linear_593_4465)" />
                                </mask>
                                <g mask="url(#mask0_593_4465)">
                                    <path
                                        d="M187 76C187 84.2843 180.284 91 172 91H15C6.71573 91 0 84.2843 0 76V0L5.95919 15.0535C8.22399 20.7746 13.753 24.5324 19.9061 24.5324H172C180.284 24.5324 187 31.2481 187 39.5324V76Z"
                                        fill="url(#paint1_linear_593_4465)" />
                                    <path
                                        d="M120.126 97.4654C116.464 91.7571 116.888 84.0344 122.114 78.836C124.946 76.022 128.495 74.4548 132.445 73.7465C135.837 73.1388 139.285 73.449 142.685 72.9848C149.629 72.0313 155.317 68.9773 159.565 63.2795C162.912 58.7927 167.125 55.3697 172.501 53.5193C181.642 50.372 189.828 52.8542 197.334 58.088C211.843 68.211 217.538 82.6672 217.358 99.8994C217.269 108.232 216.092 116.281 211.461 123.451C205.738 132.317 196.612 135.997 187.227 133.314C183.851 132.352 181.016 130.39 178.443 128.137C168.207 119.193 156.102 114.233 143.057 111.144C137.724 109.881 132.338 108.703 127.666 105.5C124.915 103.615 122.685 101.31 120.13 97.4628L120.126 97.4654Z"
                                        fill="white" fill-opacity="0.1" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_593_4465" x1="234" y1="8.46512" x2="1.23236"
                                        y2="78.1328" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4EAEEA" />
                                        <stop offset="1" stop-color="#0056B1" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_593_4465" x1="234" y1="8.46512" x2="1.23236"
                                        y2="78.1328" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4EAEEA" />
                                        <stop offset="1" stop-color="#0056B1" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <strong class="title-box">Bảo mẫu cơ bản 0 - 6 tháng</strong>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>

        <div class="mb-11">
            <div class="d-flex align-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#0056B1" />
                    <path
                        d="M13.2401 8.48143L8.08958 5.20606C6.8675 4.42749 5.53876 6.00074 6.15647 7.49345L6.87639 9.23315C7.07636 9.7164 7.07636 10.2856 6.87639 10.7688L6.15647 12.5085C5.53876 14.0012 6.8675 15.5691 8.08958 14.7959L13.2401 11.5205C14.2533 10.8762 14.2533 9.12576 13.2401 8.48143Z"
                        fill="white" />
                </svg>
                <strong class="text-view-p ms-2">
                    Cơ bản
                </strong>
            </div>
            <div class="row w-100 overflow-x-auto dashboard-alanysis flex-xs-nowrap m0-mobile overflow-y-hidden mt-2">
                <div class="col-lg-3 xl-2 max-box" v-for="n in 5" :key="n">
                    <nuxt-link class="d-block " to="/admin/teacher-training/12">
                        <div class="card-body-bg img-box">
                            <img src="@/static/images/teacher-training/Rectangle44.png" alt="">
                            <div class="box-edit">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="15" cy="15" r="15" fill="white" fill-opacity="0.8" />
                                    <path
                                        d="M21.75 22.5H8.25C7.9425 22.5 7.6875 22.245 7.6875 21.9375C7.6875 21.63 7.9425 21.375 8.25 21.375H21.75C22.0575 21.375 22.3125 21.63 22.3125 21.9375C22.3125 22.245 22.0575 22.5 21.75 22.5Z"
                                        fill="#979797" />
                                    <path
                                        d="M20.2649 8.61024C18.8099 7.15524 17.3849 7.11774 15.8924 8.61024L14.9849 9.51774C14.9099 9.59274 14.8799 9.71274 14.9099 9.81774C15.4799 11.8052 17.0699 13.3952 19.0574 13.9652C19.0874 13.9727 19.1174 13.9802 19.1474 13.9802C19.2299 13.9802 19.3049 13.9502 19.3649 13.8902L20.2649 12.9827C21.0074 12.2477 21.3674 11.5352 21.3674 10.8152C21.3749 10.0727 21.0149 9.35274 20.2649 8.61024Z"
                                        fill="#979797" />
                                    <path
                                        d="M17.7073 14.6476C17.4898 14.5426 17.2798 14.4376 17.0773 14.3176C16.9123 14.2201 16.7548 14.1151 16.5973 14.0026C16.4698 13.9201 16.3198 13.8001 16.1773 13.6801C16.1623 13.6726 16.1098 13.6276 16.0498 13.5676C15.8023 13.3576 15.5248 13.0876 15.2773 12.7876C15.2548 12.7726 15.2173 12.7201 15.1648 12.6526C15.0898 12.5626 14.9623 12.4126 14.8498 12.2401C14.7598 12.1276 14.6548 11.9626 14.5573 11.7976C14.4373 11.5951 14.3323 11.3926 14.2273 11.1826C14.0896 10.8876 13.7024 10.8 13.4722 11.0302L9.25475 15.2476C9.15725 15.3451 9.06725 15.5326 9.04475 15.6601L8.63975 18.5326C8.56475 19.0426 8.70725 19.5226 9.02225 19.8451C9.29225 20.1076 9.66725 20.2501 10.0723 20.2501C10.1623 20.2501 10.2523 20.2426 10.3423 20.2276L13.2223 19.8226C13.3573 19.8001 13.5448 19.7101 13.6348 19.6126L17.8592 15.3882C18.0847 15.1626 18 14.7744 17.7073 14.6476Z"
                                        fill="#979797" />
                                </svg>
                            </div>
                        </div>
                        <div class="footer-box">
                            <svg width="187" height="91" viewBox="0 0 187 91" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_188_4957" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                    width="187" height="91">
                                    <path
                                        d="M187 76C187 84.2843 180.284 91 172 91H15C6.71573 91 0 84.2843 0 76V0L5.95919 15.0535C8.22399 20.7746 13.753 24.5324 19.9061 24.5324H172C180.284 24.5324 187 31.2481 187 39.5324V76Z"
                                        fill="url(#paint0_linear_188_4957)" />
                                </mask>
                                <g mask="url(#mask0_188_4957)">
                                    <path
                                        d="M187 76C187 84.2843 180.284 91 172 91H15C6.71573 91 0 84.2843 0 76V0L5.95919 15.0535C8.22399 20.7746 13.753 24.5324 19.9061 24.5324H172C180.284 24.5324 187 31.2481 187 39.5324V76Z"
                                        fill="url(#paint1_linear_188_4957)" />
                                    <path
                                        d="M120.126 97.4654C116.464 91.7571 116.888 84.0344 122.114 78.836C124.946 76.022 128.495 74.4548 132.445 73.7465C135.837 73.1388 139.285 73.449 142.685 72.9848C149.629 72.0313 155.317 68.9773 159.565 63.2795C162.912 58.7927 167.125 55.3697 172.501 53.5193C181.642 50.372 189.828 52.8542 197.334 58.088C211.843 68.211 217.538 82.6672 217.358 99.8994C217.269 108.232 216.092 116.281 211.461 123.451C205.738 132.317 196.612 135.997 187.227 133.314C183.851 132.352 181.016 130.39 178.443 128.137C168.207 119.193 156.102 114.233 143.057 111.144C137.724 109.881 132.338 108.703 127.666 105.5C124.915 103.615 122.685 101.31 120.13 97.4628L120.126 97.4654Z"
                                        fill="white" fill-opacity="0.1" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_188_4957" x1="234" y1="8.46512" x2="1.23236"
                                        y2="78.1328" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4EAEEA" />
                                        <stop offset="1" stop-color="#0056B1" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_188_4957" x1="234" y1="8.46512" x2="1.23236"
                                        y2="78.1328" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF999E" />
                                        <stop offset="1" stop-color="#EB1B24" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <strong class="title-box">Làm quen giáo dục sớm 0 - 3 tuổi</strong>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardItem from '../../../components/card/CardItem.vue';

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Đào tạo giáo viên',
                previous: '/admin/dashboard'
            },
        };
    },
    computed: {},
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
    },
    components: { CardItem }
}
</script>