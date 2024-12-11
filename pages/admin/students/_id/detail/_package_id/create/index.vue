<template>
    <div class="content-mp detail-form-review form-edit-train form-detail-train form-create-train">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="6" lg="6" xl="6" style="min-width: 373px;">
                <div class="w-100">
                    <div class="mt-3">
                        <strong class="strong-title">
                            <span>Thứ tự buổi học</span>
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
                            <span>Nội dung hoạt động buổi học</span>
                        </strong>
                        <div class="input-grop">
                            <textarea class="textarea" placeholder="Nhập nội dung"></textarea>
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
                name: 'Thêm buổi học',
                previous: '/admin/students/' + (this.id ?? 0) + '/detail/' + (this.package_id ?? 0)
            },
            panel: [0],
        };
    },
    computed: {
        validate({ params }) {
            const idRegex = /^[0-9]{0,2}$/;
            return (
                idRegex.test(params.id) &&
                idRegex.test(params.package_id)
            );
        },
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
    },
    mounted() {
        this.title.previous = '/admin/students/' + (this.id ?? 0) + '/detail/' + (this.package_id ?? 0)
        this.$store.dispatch('title/set_title', this.title);
    },
}
</script>