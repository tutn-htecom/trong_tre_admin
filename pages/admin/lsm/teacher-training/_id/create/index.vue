<template>
    <div class="content-mp detail-form-review form-edit-train form-detail-train form-create-train">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="6" lg="6" xl="6" style="min-width: 373px;">
                <div class="w-100">
                    <div class="mt-3">
                        <strong class="strong-title">
                            <span>Tên bài học</span>
                        </strong>
                        <div class="input-grop">
                            <input type="text" class="input" placeholder="Nhập tên bài học" />
                        </div>
                    </div>
                    <div class="mt-3">
                        <strong class="strong-title">
                            <span>Thứ tự bài học</span>
                        </strong>
                        <div class="input-grop">
                            <select class="select">
                                <option>Bài 1</option>
                                <option>Bài 2</option>
                            </select>
                            <span class="icon-down mdi mdi-chevron-down"></span>
                        </div>
                    </div>

                    <div class="mt-3">
                        <strong class="strong-title">
                            <span>Giới thiệu bài học</span>
                        </strong>
                        <div class="input-grop">
                            <textarea class="textarea" placeholder="Nhập giới thiệu"></textarea>
                        </div>
                    </div>

                    <div class="mt-3">
                        <strong class="strong-title">
                            <span>Video bài học</span>
                        </strong>
                        <div class="input-grop">
                            <input type="text" class="input" placeholder="Gán đường dẫn" />
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

                        <div class="w-100 mt-4 mb-4">
                            <button class="btn-add-le">
                                <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 1V12M1 6.5H12" stroke="#4EAEEA" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                Thêm bài học
                            </button>
                        </div>
                    </div>

                    <div class="mt-3">
                        <strong class="strong-title">
                            <span>Bài kiểm tra</span>
                            <span class="web-text-red"> *</span>
                        </strong>
                        <div class="input-grop">
                            <input type="text" class="input" placeholder="Gán đường dẫn" />
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

                        <div class="w-100 mt-4 mb-4">
                            <button class="btn-add-le">
                                <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 1V12M1 6.5H12" stroke="#4EAEEA" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                Thêm bài kiểm tra
                            </button>
                        </div>
                    </div>

                    <div class="mt-8 cr-btn">
                        <button class="btn btn-cancel">Hủy</button>
                        <button class="btn btn-save">Lưu</button>
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
                name: 'Thêm bài học',
                previous: '/admin/teacher-training/' + (this.id ?? 0)
            },
            panel: [0],
        };
    },
    validate({ params }) {
        return /^[0-9]{0,2}$/.test(params.id)
    },
    computed: {
        id() {
            return this.$route.params.id
        },
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
    },
    mounted() {
        this.title.previous = '/admin/teacher-training/' + (this.id ?? 0)
        this.$store.dispatch('title/set_title', this.title);
    },
}
</script>