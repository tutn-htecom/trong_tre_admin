<template>
    <div class="content-mp detail-form-review form-edit-train form-detail-train form-create-train videos-form">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="6" lg="6" xl="6" style="min-width: 373px;">
                <div class="w-100">
                    <div class="d-flex justify-content-between align-items-center w-100">
                        <div class="d-flex align-items-center">
                            <div class="me-3">
                                <span class="me-1">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6 0C2.694 0 0 2.694 0 6C0 9.306 2.694 12 6 12C9.306 12 12 9.306 12 6C12 2.694 9.306 0 6 0ZM8.61 8.142C8.526 8.286 8.376 8.364 8.22 8.364C8.142 8.364 8.064 8.346 7.992 8.298L6.132 7.188C5.67 6.912 5.328 6.306 5.328 5.772V3.312C5.328 3.066 5.532 2.862 5.778 2.862C6.024 2.862 6.228 3.066 6.228 3.312V5.772C6.228 5.988 6.408 6.306 6.594 6.414L8.454 7.524C8.67 7.65 8.742 7.926 8.61 8.142Z"
                                            fill="#0056B1" />
                                    </svg>
                                </span>
                                <span class="time">
                                    08/08/2023
                                </span>
                            </div>
                            <div>
                                <span class="me-1">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.232 10.9623C11.6359 10.8822 11.8748 10.4576 11.6601 10.1061C11.2407 9.41955 10.5973 8.81612 9.78142 8.35279C8.69659 7.73675 7.3674 7.40283 6 7.40283C4.6326 7.40283 3.30341 7.73675 2.21858 8.35279C1.40268 8.81611 0.759293 9.41955 0.339881 10.1061C0.125175 10.4576 0.364056 10.8822 0.768045 10.9623C4.22238 11.6473 7.77762 11.6473 11.232 10.9623Z"
                                            fill="#FC4D32" />
                                        <path
                                            d="M9.45067 3.28363C9.45067 5.0971 7.90564 6.56721 5.99975 6.56721C4.09386 6.56721 2.54883 5.0971 2.54883 3.28363C2.54883 1.47016 4.09386 5.80744e-05 5.99975 5.80744e-05C7.90564 5.80744e-05 9.45067 1.47016 9.45067 3.28363Z"
                                            fill="#FC4D32" />
                                    </svg>
                                </span>
                                <span class="user">
                                    admin
                                </span>
                            </div>
                        </div>

                        <div>
                            <button class="btn-delete-video">
                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.45833 1H9.79167M1.125 3.33333H14.125M12.6806 3.33333L12.1741 11.515C12.0981 12.7425 12.0601 13.3563 11.8139 13.8217C11.5972 14.2314 11.2702 14.5608 10.8762 14.7664C10.4286 15 9.85746 15 8.71508 15H6.53492C5.39254 15 4.82136 15 4.3738 14.7664C3.97977 14.5608 3.65284 14.2314 3.4361 13.8217C3.18991 13.3563 3.15192 12.7425 3.07593 11.515L2.56944 3.33333M6.18056 6.83333V10.7222M9.06944 6.83333V10.7222"
                                        stroke="#2D2D2D" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class="pt-1">Xóa Video</span>
                            </button>
                        </div>
                    </div>

                    <div class="card-show-video">
                        <img src="@/static/images/videos/Rectangle4034.png" alt="">
                        <span class="play">
                            <svg width="64" height="45" viewBox="0 0 64 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M62.603 7.026C62.2348 5.6686 61.5179 4.43116 60.5233 3.43665C59.5288 2.44214 58.2914 1.72518 56.934 1.357C51.964 3.57628e-07 31.96 0 31.96 0C31.96 0 11.955 0.0400003 6.984 1.397C5.6266 1.76518 4.38916 2.48214 3.39465 3.47665C2.40014 4.47116 1.68318 5.7086 1.315 7.066C0 12.037 0 22.43 0 22.43C0 22.43 0 32.823 1.356 37.834C1.72418 39.1914 2.44114 40.4288 3.43565 41.4233C4.43016 42.4179 5.6676 43.1348 7.025 43.503C11.995 44.86 32 44.86 32 44.86C32 44.86 52.005 44.86 56.976 43.504C58.3334 43.1358 59.5708 42.4189 60.5653 41.4243C61.5599 40.4298 62.2768 39.1924 62.645 37.835C64 32.864 64 22.43 64 22.43C64 22.43 63.96 12.037 62.603 7.026Z"
                                    fill="#2D2D2D" fill-opacity="0.4" />
                                <path d="M24.0012 34L44 22.5L24 11L24.0012 34Z" fill="white" />
                            </svg>
                        </span>
                    </div>


                    <div class="mt-3">
                        <strong class="strong-title">
                            <span>Tên video</span>
                        </strong>
                        <div class="input-grop">
                            <input type="text" class="input" placeholder="Nhập tên video"
                                value="Lorem ipsum dolor sit amet" />
                        </div>
                    </div>

                    <div class="mt-3">
                        <strong class="strong-title">
                            <span>Thuộc dịch vụ</span>
                        </strong>
                        <div class="input-grop">
                            <select class="select">
                                <option>Bảo mẫu Pro</option>
                                <option>Bảo mẫu Vip</option>
                            </select>
                            <span class="icon-down mdi mdi-chevron-down"></span>
                        </div>
                    </div>

                    <div class="mt-3">
                        <strong class="strong-title">
                            <span>Chủ đề</span>
                        </strong>
                        <div class="input-grop">
                            <select class="select">
                                <option>Hướng dẫn - Giới thiệu</option>
                                <option>Hướng dẫn - Giới thiệu 2</option>
                            </select>
                            <span class="icon-down mdi mdi-chevron-down"></span>
                        </div>
                    </div>

                    <div class="mt-3">
                        <strong class="strong-title">
                            <span>Mô tả video</span>
                        </strong>
                        <div class="input-grop">
                            <textarea class="textarea" placeholder="Mô tả">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                            </textarea>
                        </div>
                    </div>

                    <div class="mt-3">
                        <strong class="strong-title">
                            <span>Gắn đường dẫn video hoặc tải lên</span>
                        </strong>
                        <div class="input-grop">
                            <input type="text" class="input" placeholder="Link"
                                value="https://www.youtube.com/watch?v=n..." />
                            <span class="copy">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.61204 14.5083L8.38796 15.7324C6.69786 17.4225 3.95767 17.4225 2.26757 15.7324C0.577475 14.0423 0.577476 11.3021 2.26757 9.61204L3.49165 8.38796M14.5083 9.61204L15.7324 8.38796C17.4225 6.69786 17.4225 3.95767 15.7324 2.26757C14.0423 0.577475 11.3021 0.577476 9.61204 2.26757L8.38796 3.49165M5.97056 12.0294L12.0294 5.97054"
                                        stroke="#979797" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div class="mt-6">
                        <button class="btn btn-upload-video">
                            <span>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.55556 8.11111C3.72891 8.11111 3.31559 8.11111 2.97648 8.20198C2.05624 8.44855 1.33744 9.16735 1.09086 10.0876C1 10.4267 1 10.84 1 11.6667V12.7333C1 14.2268 1 14.9735 1.29065 15.544C1.54631 16.0457 1.95426 16.4537 2.45603 16.7094C3.02646 17 3.77319 17 5.26667 17H12.7333C14.2268 17 14.9735 17 15.544 16.7094C16.0457 16.4537 16.4537 16.0457 16.7094 15.544C17 14.9735 17 14.2268 17 12.7333V11.6667C17 10.84 17 10.4267 16.9091 10.0876C16.6626 9.16735 15.9438 8.44855 15.0235 8.20198C14.6844 8.11111 14.2711 8.11111 13.4444 8.11111M12.5556 4.55556L9 1M9 1L5.44444 4.55556M9 1V11.6667"
                                        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            <span class="pt-1 ms-2">
                                Tải video lên
                            </span>
                        </button>
                    </div>

                    <div class="mt-6">
                        <button class="btn btn-save-pass">Lưu thay đổi</button>
                    </div>
                </div>
            </v-col>
        </v-row>

    </div>
</template>

<script>
export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Thêm video',
                previous: '/admin/videos'
            },
            panel: [0],
        };
    },
    computed: {
        validate({ params }) {
            const idRegex = /^[0-9]{0,2}$/;
            return (
                idRegex.test(params.id)
            );
        },
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
    },
}
</script>