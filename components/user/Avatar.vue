<template>
    <v-menu open-on-hover transition="slide-y-transition" bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on, attrs }">
            <div color="primary" dark v-bind="attrs" v-on="on">
                <v-avatar size="44" color="primary">
                    <!-- <span class="white--text text-h5">{{ getInitials(data?.hoten) }}</span> -->
                    <img :src="data?.anh_nguoi_dung" :alt="data?.hoten" />
                </v-avatar>
            </div>
        </template>
        <v-card>
            <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                    <!-- <v-avatar color="brown">
                        <img :src="data?.anh_nguoi_dung" :alt="data?.hoten" />
                    </v-avatar> -->
                    <h5>{{ data?.hoten }}</h5>
                    <p class="text-caption mt-1">
                        {{ data?.vai_tro_name }} - {{ data?.quyen_han }}
                    </p>
                    <template>
                        <div>
                            <v-divider class="my-3"></v-divider>
                            <v-btn depressed rounded text>
                                <NuxtLink class="d-block w-100 v-btn__content text-dark" to="/admin/dashboard">
                                    Trang chủ
                                </NuxtLink>
                            </v-btn>
                        </div>
                        <div>
                            <v-divider class="my-3"></v-divider>
                            <v-btn depressed rounded text>
                                <NuxtLink class="d-block w-100 v-btn__content text-dark" to="/admin/my/notification">
                                    Thông báo của tôi
                                </NuxtLink>
                            </v-btn>
                        </div>
                    </template>

                    <v-divider class="my-3"></v-divider>
                    <v-btn depressed rounded text @click="logout">
                        Đăng xuất
                    </v-btn>
                </div>
            </v-list-item-content>
        </v-card>
    </v-menu>
</template>

<script>
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    data() {
        return {
            data: null,
        };
    },
    computed: {
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        },
        user() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser
        }
    },
    methods: {
        getInitials(fullName) {
            if (fullName == '' || fullName == null) {
                return ''
            }
            const words = fullName.split(" ");
            if (words.length >= 2) {
                const abbreviation = words[0].charAt(0).toUpperCase() + words[words.length - 1].charAt(0).toUpperCase();
                return abbreviation;
            }
            return fullName.charAt(0).toUpperCase();
        },
        async load_data() {
            await api.get(`admin-api/chi-tiet-user?id=${this.user.id}`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.data = res?.data?.data?.user
            })
        },
        async logout() {
            console.log('log 1')
            try {
                const data = await api.get('admin-api/logout', {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.token
                })

                await localStorage.removeItem('user');
                await localStorage.removeItem('timeLogin');
                toastr.success('Đăng xuất tài khoản thành công')
                await this.$router.push('/login');
            } catch (error) {
                if (error?.response?.status != 200) {
                    toastr.error(error?.response?.data?.message)
                }
            }
        }
    },
    mounted() {
        this.load_data()
    }
}
</script>

<style></style>