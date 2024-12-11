<template>
    <div class="content-mp">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="6" md="6" lg="5" xl="4">
                <div class="w-100 teacher-detail-info-service-nav mt-3">
                    <!-- <h3>Tùy chỉnh</h3> -->
                    <div class="w-100">
                        <div>
                            <b-card v-for="(item,n) in data" v-bind:key="n" class="teacher-nav">
                                <label class="block w-100 teachers cs m-0 p-0" :for="'check-' + item?.id">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="">
                                            <span class="me-2 layout-img">
                                                <img width="30" src="@/static/images/icons/l2.png" alt="">
                                            </span>
                                            <span>
                                                {{ item?.name }}
                                            </span>
                                        </div>
                                        <div>
                                            <div class="web-icon center">
                                                <input type="checkbox" :checked="isDichVuChecked(item?.id)" @change="send_data(item?.id)" :id="'check-' + item?.id" class="input-check">
                                            </div>
                                        </div>
                                    </div>
                                </label>
                            </b-card>

                        </div>
                    </div>
                </div>

                <!-- <div class="mt-8">
                    <button-component>Lưu thay đổi</button-component>
                </div> -->

            </v-col>
        </v-row>
    </div>
</template>

<script>
import ButtonComponent from '~/components/button/ButtonComponent.vue';
// import { defineComponent } from '@vue/composition-api'
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
  components: { ButtonComponent },
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Thay đổi trình độ',
                previous: '/admin/users/teachers/' + this.id
            },
            data: null,
            user: null,
            selected: [0],
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
                this.user = res?.data?.data?.user;
                this.selected[0] = res?.data?.data?.user?.trinh_do
            });

            await api.get('giao-vien/get-trinh-do', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token,
            }).then((res) => {
                this.data = res?.data?.data;
            });
        },
        isDichVuChecked(dichVuId) {
            return this.selected.includes(dichVuId);
        },
        async send_data(id_trinh_do) {
            const formData = new FormData()
            formData.append('trinh_do', id_trinh_do)
            formData.append('id', this.id)

            await api.post('giao-vien/cap-nhat-trinh-do', formData, {
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
        this.title.previous = '/admin/users/teachers/' + this.id
        this.load_data()
        this.$store.dispatch('title/set_title', this.title);
    },
}
</script>
