<template>
    <div class="content-mp training-results training-results-detail detail-review-leson app-training-edit student-detail">

        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="6" md="4" lg="4" xl="3">
                <div class="d-flex align-items-center justify-content-between w-100">
                    <h1 class="w-title d-inline w-h1">
                        <span>
                            Bảo mẫu Pro 0 - 3 tháng
                        </span>
                    </h1>

                    <div class="d-inline-block">
                        <div>
                            <button class="btn btn-delete-form" v-b-modal.my-modal>
                                <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="15" height="16"
                                    viewBox="0 0 15 16" fill="none">
                                    <path
                                        d="M4.95833 1H9.29167M0.625 3.33333H13.625M12.1806 3.33333L11.6741 11.515C11.5981 12.7425 11.5601 13.3563 11.3139 13.8217C11.0972 14.2314 10.7702 14.5608 10.3762 14.7664C9.92864 15 9.35746 15 8.21508 15H6.03492C4.89254 15 4.32136 15 3.8738 14.7664C3.47977 14.5608 3.15284 14.2314 2.9361 13.8217C2.68991 13.3563 2.65192 12.7425 2.57593 11.515L2.06944 3.33333M5.68056 6.83333V10.7222M8.56944 6.83333V10.7222"
                                        stroke="#2D2D2D" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class="pt-1">Xóa chương trình</span>
                            </button>
                        </div>
                    </div>

                    <b-modal id="my-modal" hide-footer centered title="Thông báo">
                        <!-- <template #modal-header="{ close }">
                            <h5>Thông báo</h5>
                        </template> -->
                        <template #default="{ hide }">
                            <div class="text-center">
                                <strong class="title-modal">
                                    Bạn muốn xóa chương trình này?
                                </strong>
                            </div>
                            <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                <button class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                <button class=" btn-delete ms-1">Xóa</button>
                            </div>
                        </template>
                    </b-modal>
                </div>

                <div class="my-4">
                    <div class="box-img">
                        <img src="@/static/images/students/Rectangle4052.png" alt="">
                    </div>
                </div>

                <div class="w-100 mt-4 mb-6">
                    <nuxt-link to="/admin/students/edit/2" class="btn-edit-training">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path
                                    d="M15.5 12.9814L14.7221 13.8121C14.3096 14.2526 13.7501 14.5 13.1668 14.5C12.5834 14.5 12.024 14.2526 11.6114 13.8121C11.1983 13.3725 10.6389 13.1257 10.0557 13.1257C9.47253 13.1257 8.91312 13.3725 8.49999 13.8121M1.5 14.5H2.80242C3.1829 14.5 3.37314 14.5 3.55216 14.458C3.71089 14.4208 3.86262 14.3595 4.0018 14.2762C4.15878 14.1823 4.2933 14.051 4.56234 13.7883L14.3334 4.24962C14.9777 3.62061 14.9777 2.60077 14.3334 1.97176C13.689 1.34275 12.6444 1.34275 12 1.97176L2.22898 11.5105C1.95994 11.7731 1.82543 11.9044 1.72923 12.0577C1.64394 12.1936 1.58109 12.3417 1.54298 12.4966C1.5 12.6714 1.5 12.8571 1.5 13.2286V14.5Z"
                                    stroke="#2D2D2D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        <span class="ms-1">Chỉnh sửa</span>
                    </nuxt-link>
                </div>
            </v-col>

            <v-col class="mt-0 pt-0" xs="12" sm="6" md="4" lg="4" xl="3">
                <div class="" style="min-width: 245px;">
                    <h4 class=" mt-3 mb-3">
                        Danh sách gói học
                    </h4>
                    <div>
                        <div class="d-flex justify-content-between align-items-center w-100 flex-wrap">
                            <div class="mb-3" v-for="(i, n) in 6" v-bind:key="n">
                                <nuxt-link to="/admin/students/31/detail" class="item">
                                    <svg width="56" height="51" viewBox="0 0 56 51" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M23.4496 5.37648L9.40289 13.7277C4.89956 16.4052 4.89956 22.3977 9.40289 25.0752L23.4496 33.4265C25.9696 34.9352 30.1229 34.9352 32.6429 33.4265L46.6196 25.0752C51.0996 22.3977 51.0996 16.4265 46.6196 13.749L32.6429 5.39773C30.1229 3.86773 25.9696 3.86773 23.4496 5.37648Z"
                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M13.1366 27.7949L13.1133 37.7612C13.1133 40.4599 15.3999 43.3499 18.1999 44.1999L25.6433 46.4524C26.9266 46.8349 29.0499 46.8349 30.3566 46.4524L37.8 44.1999C40.6 43.3499 42.8866 40.4599 42.8866 37.7612V27.9012"
                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M49.9336 31.875V19.125" stroke="white" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </nuxt-link>
                                <div class="text-center">
                                    <b>Gói {{ n + 1 }}</b>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-100">
                        <button v-b-modal.modal class="btn-add-le w-100 d-block">
                            <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13"
                                fill="none">
                                <path d="M6.5 1V12M1 6.5H12" stroke="#4EAEEA" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            Thêm gói học
                        </button>
                    </div>

                    <b-modal id="modal" hide-footer centered title="Thêm gói học">
                        <!-- <template #modal-header="{ close }">
                            <h5>Thông báo</h5>
                        </template> -->
                        <template #default="{ hide }">
                            <div class="text-center">
                                <input class="input-add" type="text" placeholder="Nhập tên gói học" />
                            </div>
                            <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                <button class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                <button class=" btn-delete ms-1">Tạo</button>
                            </div>
                        </template>
                    </b-modal>
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
                name: 'Chương trình học',
                previous: '/admin/students'
            },
        };
    },
    validate({ params }) {
        return /^[0-9]{0,2}$/.test(params.id)
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        results_id() {
            return this.$route.params.results_id
        }
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