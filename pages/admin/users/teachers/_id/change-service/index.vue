<template>
    <div class="content-mp">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="6" md="6" lg="6" xl="4">
                <div class="w-100 teacher-detail-info-service-nav mt-3">
                    <div class="w-100">
                        <div>
                            <b-card v-for="(item, n) in dich_vu" :key="n" class="teacher-nav">
                                <label :for="'check-' + item?.id" class="block w-100 teachers cs m-0 p-0">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex">
                                            <span class="me-2 box-imgs">
                                                <img :src="item?.image" />
                                            </span>
                                            <span>{{ item?.ten_dich_vu }}</span>
                                        </div>
                                        <div>
                                            <div class="web-icon center">
                                                <input type="checkbox" :id="'check-' + item?.id" class="input-check"
                                                    :checked="isDichVuChecked(item?.id)" @change="toggleDichVu(item?.id)" />
                                            </div>
                                        </div>
                                    </div>
                                </label>
                            </b-card>
                        </div>
                    </div>
                </div>

                <div class="mt-8" @click="send_data()">
                    <button-component>Lưu thay đổi</button-component>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import ButtonComponent from '~/components/button/ButtonComponent.vue';
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';


export default {
    components: { ButtonComponent },
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Thay đổi dịch vụ',
                previous: '/admin/users/teachers/' + this.id,
            },
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
            showPassword: false,
            dich_vu: [],
            data: null,
            dich_vu_id: '',
            selectedDichVu: [],
        };
    },
    validate({ params }) {
        return /^\d+$/.test(params.id);
    },
    computed: {
        id() {
            return this.$route.params.id;
        },
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key;
        },
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        async load_data() {
            await api.get('giao-vien/chi-tiet?id=' + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token,
            }).then((res) => {
                this.data = res?.data?.data?.user;
                this.selectedDichVu = this.data?.dich_vu
                console.log(this.selectedDichVu)
            });

            await api.get('dich-vu/danh-sach?page=1&limit=100&sort=1&tuKhoa=', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token,
            }).then((res) => {
                this.dich_vu = res?.data?.data;
            });
        },
        isDichVuChecked(dichVuId) {
            return this.selectedDichVu.includes(dichVuId);
        },
        toggleDichVu(dichVuId) {
            const index = this.selectedDichVu.indexOf(dichVuId);
            if (index !== -1) {
                this.selectedDichVu.splice(index, 1);
            } else {
                this.selectedDichVu.push(dichVuId);
            }
        },
        async send_data(event) {
            const formData = new FormData()
            formData.append('dich_vu', this.selectedDichVu.join(','))
            formData.append('id', this.id)

            await api.post('giao-vien/cap-nhat-dich-vu', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$router.push('/admin/users/teachers/' + this.id);
                }
            })
        },
    },
    mounted() {
        this.load_data();
        this.title.previous = '/admin/users/teachers/' + this.id;
        this.$store.dispatch('title/set_title', this.title);
    },
};
</script>

<style lang="scss" scoped>
.box-imgs {
    width: 30px;
    height: 30px;
    overflow: hidden;
    display: block;
    border-radius: 50%;

    img {
        width: 100%;
    }
}
</style>
