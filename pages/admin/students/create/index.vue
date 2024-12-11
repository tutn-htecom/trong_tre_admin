<template>
    <div class="content-mp detail-form-review form-edit-train form-detail-train form-create-train">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="6" lg="6" xl="6" style="min-width: 373px;">
                <div class="w-100">
                    <h4>Chủ đề đào tạo</h4>
                    <div class="mt-3">
                        <strong class="strong-title">
                            <span>Tên chương trình</span>
                        </strong>
                        <div class="input-grop">
                            <input type="text" class="input" placeholder="Nhập tên chương trình" />
                        </div>
                    </div>

                    <div class="mt-3">
                        <strong class="strong-title">
                            <span>Dịch vụ</span>
                        </strong>
                        <div class="input-grop">
                            <select class="select">
                                <option>Bảo mẫu Pro</option>
                                <option>Bảo mẫu Vip</option>
                            </select>
                            <span class="icon-down mdi mdi-chevron-down"></span>
                        </div>
                    </div>

                    <div class="mt-3 mb-6">
                        <div>
                            <strong class="strong-title">
                                <span>Hình ảnh</span>
                            </strong>
                            <span class="note">(Tối thiểu không quá 2mb)</span>
                        </div>

                        <div class="input-grop">
                            <label class="box-img-file" for="img-file">
                                <div class="img-file">
                                    <span>Tải ảnh lên</span>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.55556 8.11111C3.72891 8.11111 3.31559 8.11111 2.97648 8.20198C2.05624 8.44855 1.33744 9.16735 1.09086 10.0876C1 10.4267 1 10.84 1 11.6667V12.7333C1 14.2268 1 14.9735 1.29065 15.544C1.54631 16.0457 1.95426 16.4537 2.45603 16.7094C3.02646 17 3.77319 17 5.26667 17H12.7333C14.2268 17 14.9735 17 15.544 16.7094C16.0457 16.4537 16.4537 16.0457 16.7094 15.544C17 14.9735 17 14.2268 17 12.7333V11.6667C17 10.84 17 10.4267 16.9091 10.0876C16.6626 9.16735 15.9438 8.44855 15.0235 8.20198C14.6844 8.11111 14.2711 8.11111 13.4444 8.11111M12.5556 4.55556L9 1M9 1L5.44444 4.55556M9 1V11.6667"
                                            stroke="#979797" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <input id="img-file" type="file" class="d-none" />
                            </label>
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
                name: 'Thêm chương trình học',
                previous: '/admin/students/' + this.id ?? 0
            },
            panel: [0],
        };
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
        this.title.previous = '/admin/students/' + this.id ?? 0
        this.$store.dispatch('title/set_title', this.title);
    },
}
</script>