<template>
    <div class="content-mp videos">

        <div class="mb-11">
            <div class="d-flex align-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#FC4D32" />
                    <path
                        d="M13.2401 8.48143L8.08958 5.20606C6.8675 4.42749 5.53876 6.00074 6.15647 7.49345L6.87639 9.23315C7.07636 9.7164 7.07636 10.2856 6.87639 10.7688L6.15647 12.5085C5.53876 14.0012 6.8675 15.5691 8.08958 14.7959L13.2401 11.5205C14.2533 10.8762 14.2533 9.12576 13.2401 8.48143Z"
                        fill="white" />
                </svg>
                <strong class="text-view-p ms-2">
                    Bảo mẫu Pro
                </strong>
            </div>

            <div v-for="i in 2" v-bind:key="i" class="">
                <div class="d-flex justify-content-between align-items-center w-100 mt-5">
                    <div class="d-flex">
                        <span class="number">{{ i }}</span>
                        <b class="text-v">Hướng dẫn - Giới thiệu</b>
                    </div>
                    <div>
                        <nuxt-link to="/admin/videos/12/create" class="btn-add-video">
                            <span class="mdi mdi-plus"></span>
                            <span>Thêm video</span>
                        </nuxt-link>
                    </div>
                </div>
                <!--  -->
                <div class="row w-100 overflow-x-auto flex-xs-nowrap m0-mobile box-card overflow-y-hidden mt-3 mb-7">
                    <div class="col-lg-4 xl-2 max-box" v-for="n in 5" :key="n">
                        <nuxt-link class="d-block " to="/admin/videos/12/edit">
                            <div class="card-videos">
                                <div class="box-img">
                                    <img src="@/static/images/videos/Rectangle4034.png" />
                                    <svg class="play" width="64" height="45" viewBox="0 0 64 45" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M62.603 7.026C62.2348 5.6686 61.5179 4.43116 60.5233 3.43665C59.5288 2.44214 58.2914 1.72518 56.934 1.357C51.964 3.57628e-07 31.96 0 31.96 0C31.96 0 11.955 0.0400003 6.984 1.397C5.6266 1.76518 4.38916 2.48214 3.39465 3.47665C2.40014 4.47116 1.68318 5.7086 1.315 7.066C0 12.037 0 22.43 0 22.43C0 22.43 0 32.823 1.356 37.834C1.72418 39.1914 2.44114 40.4288 3.43565 41.4233C4.43016 42.4179 5.6676 43.1348 7.025 43.503C11.995 44.86 32 44.86 32 44.86C32 44.86 52.005 44.86 56.976 43.504C58.3334 43.1358 59.5708 42.4189 60.5653 41.4243C61.5599 40.4298 62.2768 39.1924 62.645 37.835C64 32.864 64 22.43 64 22.43C64 22.43 63.96 12.037 62.603 7.026Z"
                                            fill="#2D2D2D" fill-opacity="0.4" />
                                        <path d="M24.0012 34L44 22.5L24 11L24.0012 34Z" fill="white" />
                                    </svg>
                                </div>
                                <div>
                                    <strong class="card-videos-title">
                                        Lorem ipsum dolor sit amet
                                    </strong>
                                    <p class="card-des">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...
                                    </p>
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Quản lý video',
                previous: '/admin/dashboard'
            },
        };
    },
    computed: {},
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
    },
    components: {}
}
</script>