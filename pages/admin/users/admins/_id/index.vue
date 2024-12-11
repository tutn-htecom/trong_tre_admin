<template>
    <div class="content-mp">
        <div class="edit-admin">

            <v-row class="">

                <v-col v-if="data" class="mt-0 pt-0" xs="12" sm="12" md="12" lg="7" xl="7">
                    <div class="card-role mb-4">
                        <div class="card-role-body">
                            <div class="me-4 layout-user">
                                <img :src="data?.anh_nguoi_dung" :alt="data?.vai_tro_name">
                            </div>

                            <div>
                                <div class="blade-role mb-2">{{ data?.vai_tro_name }}</div>
                                <div class="user-name mb-2">{{ data?.hoten }}</div>
                                <div class="user-role mb-2">
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.8546 3.88011C9.76912 3.88011 9.32534 3.13426 9.86507 2.21943C10.1769 1.68918 9.991 1.01325 9.44528 0.710248L8.4078 0.13338C7.93403 -0.140487 7.32234 0.0226676 7.04048 0.482997L6.97451 0.593709C6.43478 1.50854 5.54723 1.50854 5.0015 0.593709L4.93553 0.482997C4.66567 0.0226676 4.05397 -0.140487 3.58021 0.13338L2.54273 0.710248C1.997 1.01325 1.81109 1.695 2.12294 2.22525C2.66867 3.13426 2.22489 3.88011 1.13943 3.88011C0.515742 3.88011 0 4.3754 0 4.98723V6.01277C0 6.61877 0.509745 7.11989 1.13943 7.11989C2.22489 7.11989 2.66867 7.86574 2.12294 8.78057C1.81109 9.31082 1.997 9.98675 2.54273 10.2898L3.58021 10.8666C4.05397 11.1405 4.66567 10.9773 4.94753 10.517L5.01349 10.4063C5.55322 9.49146 6.44078 9.49146 6.98651 10.4063L7.05247 10.517C7.33433 10.9773 7.94603 11.1405 8.41979 10.8666L9.45727 10.2898C10.003 9.98675 10.1889 9.305 9.87706 8.78057C9.33133 7.86574 9.77511 7.11989 10.8606 7.11989C11.4843 7.11989 12 6.6246 12 6.01277V4.98723C11.994 4.38123 11.4843 3.88011 10.8546 3.88011ZM5.997 7.39376C4.92354 7.39376 4.04798 6.54302 4.04798 5.5C4.04798 4.45698 4.92354 3.60624 5.997 3.60624C7.07046 3.60624 7.94603 4.45698 7.94603 5.5C7.94603 6.54302 7.07046 7.39376 5.997 7.39376Z"
                                            fill="#FC4D32" />
                                    </svg>
                                    {{ data?.quyen_han }}
                                </div>
                                <div class="user-phone mb-2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="10" fill="#0056B1" fill-opacity="0.1" />
                                        <path
                                            d="M13.9703 11.5492L15.4486 13.0275C15.7531 13.3321 15.7531 13.8258 15.4486 14.1304C13.802 15.777 11.1952 15.9622 9.33236 14.5651L9.22376 14.4836C7.81856 13.4297 6.57029 12.1814 5.51639 10.7762L5.43494 10.6676C4.03778 8.80476 4.22304 6.19801 5.86961 4.55145C6.17416 4.24689 6.66794 4.24689 6.9725 4.55145L8.45079 6.02974C8.84131 6.42026 8.84131 7.05342 8.45079 7.44395L7.4477 8.44704C7.2432 8.65154 7.1925 8.96395 7.32184 9.22262C8.06951 10.718 9.28203 11.9305 10.7774 12.6782C11.036 12.8075 11.3485 12.7568 11.553 12.5523L12.5561 11.5492C12.9466 11.1587 13.5797 11.1587 13.9703 11.5492Z"
                                            fill="#0056B1" />
                                    </svg>
                                    {{ data?.dien_thoai }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mb-5">
                        <div class="d-flex justify-content-between align-items-center">
                            <title-header>
                                Thông tin tài khoản
                            </title-header>
                        </div>
                    </div>

                    <form id="form" enctype="multipart/form-data" @submit.prevent="send_data">
                        <div class="roles-group-input">
                            <div class="roles-label">
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.8539 12.7895C14.3253 12.696 14.604 12.2006 14.3535 11.7905C13.8642 10.9896 13.1135 10.2855 12.1617 9.745C10.896 9.02629 9.3453 8.63672 7.75 8.63672C6.1547 8.63672 4.60398 9.02628 3.33835 9.745C2.38646 10.2855 1.63584 10.9896 1.14653 11.7905C0.896038 12.2006 1.17473 12.696 1.64605 12.7895C5.67612 13.5886 9.82388 13.5886 13.8539 12.7895Z"
                                        fill="#FC4D32" />
                                    <path
                                        d="M11.7758 3.8309C11.7758 5.94662 9.97325 7.66174 7.74971 7.66174C5.52617 7.66174 3.72363 5.94662 3.72363 3.8309C3.72363 1.71519 5.52617 6.77534e-05 7.74971 6.77534e-05C9.97325 6.77534e-05 11.7758 1.71519 11.7758 3.8309Z"
                                        fill="#FC4D32" />
                                </svg>
                                Tên tài khoản
                            </div>
                            <div>
                                <input hidden name="id" :value="data?.id" type="text" class="form-control roles-input"
                                    placeholder="Nhập tên tài khoản" />
                                <input name="hoten" v-model="hoten" type="text" class="form-control roles-input"
                                    placeholder="Nhập tên tài khoản" />
                            </div>
                        </div>

                        <div class="roles-group-input">
                            <div class="roles-label">
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.8539 12.7895C14.3253 12.696 14.604 12.2006 14.3535 11.7905C13.8642 10.9896 13.1135 10.2855 12.1617 9.745C10.896 9.02629 9.3453 8.63672 7.75 8.63672C6.1547 8.63672 4.60398 9.02628 3.33835 9.745C2.38646 10.2855 1.63584 10.9896 1.14653 11.7905C0.896038 12.2006 1.17473 12.696 1.64605 12.7895C5.67612 13.5886 9.82388 13.5886 13.8539 12.7895Z"
                                        fill="#FC4D32" />
                                    <path
                                        d="M11.7758 3.8309C11.7758 5.94662 9.97325 7.66174 7.74971 7.66174C5.52617 7.66174 3.72363 5.94662 3.72363 3.8309C3.72363 1.71519 5.52617 6.77534e-05 7.74971 6.77534e-05C9.97325 6.77534e-05 11.7758 1.71519 11.7758 3.8309Z"
                                        fill="#FC4D32" />
                                </svg>
                                Email
                            </div>
                            <div>
                                <input name="email" :value="data?.email" type="text" class="form-control roles-input"
                                    placeholder="Nhập email" />
                            </div>
                        </div>

                        <div class="roles-group-input">
                            <div class="roles-label">
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0527 8.07553L13.6991 9.72192C14.0271 10.0499 14.0271 10.5817 13.6991 10.9097C11.9259 12.6829 9.11861 12.8824 7.11243 11.3778L6.99548 11.29C5.48219 10.1551 4.1379 8.81078 3.00293 7.29749L2.91521 7.18054C1.41058 5.17436 1.61009 2.36709 3.38331 0.593866C3.7113 0.265883 4.24306 0.265883 4.57105 0.593867L6.21744 2.24026C6.60797 2.63079 6.60797 3.26395 6.21744 3.65447L5.0828 4.78912C4.86257 5.00935 4.80797 5.34579 4.94726 5.62436C5.75244 7.23474 7.05823 8.54052 8.6686 9.34571C8.94718 9.485 9.28362 9.4304 9.50385 9.21017L10.6385 8.07553C11.029 7.685 11.6622 7.685 12.0527 8.07553Z"
                                        fill="#FFB761" />
                                </svg>

                                Số điện thoại
                            </div>
                            <div>
                                <input name="dien_thoai" v-model="dien_thoai" type="text" class="form-control roles-input"
                                    placeholder="Nhập số điện thoại" />
                            </div>
                        </div>

                        <div class="roles-group-input">
                            <div class="roles-label">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.942 2.81289C11.9687 0.846224 8.76871 0.846224 6.80871 2.81289C5.42871 4.17956 5.01538 6.14622 5.54871 7.87956L2.41538 11.0129C2.19538 11.2396 2.04205 11.6862 2.08871 12.0062L2.28871 13.4596C2.36205 13.9396 2.80871 14.3929 3.28871 14.4596L4.74205 14.6596C5.06205 14.7062 5.50871 14.5596 5.73538 14.3262L6.28205 13.7796C6.41538 13.6529 6.41538 13.4396 6.28205 13.3062L4.98871 12.0129C4.79538 11.8196 4.79538 11.4996 4.98871 11.3062C5.18205 11.1129 5.50205 11.1129 5.69538 11.3062L6.99538 12.6062C7.12205 12.7329 7.33538 12.7329 7.46205 12.6062L8.87538 11.1996C10.602 11.7396 12.5687 11.3196 13.942 9.95289C15.9087 7.98622 15.9087 4.77956 13.942 2.81289ZM10.4154 7.99956C9.49538 7.99956 8.74871 7.25289 8.74871 6.33289C8.74871 5.41289 9.49538 4.66622 10.4154 4.66622C11.3354 4.66622 12.082 5.41289 12.082 6.33289C12.082 7.25289 11.3354 7.99956 10.4154 7.99956Z"
                                        fill="#4EAEEA" />
                                </svg>
                                Tạo mật khẩu
                            </div>
                            <div>
                                <input name="password" v-model="password" type="password" class="form-control roles-input"
                                    placeholder="Nhập mật khẩu" />
                            </div>
                        </div>

                        <div class="roles-group-input">
                            <div class="roles-label">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.6637 5.02679C11.3973 5.02679 10.8796 4.15664 11.5092 3.08933C11.8731 2.4707 11.6562 1.68212 11.0195 1.32862L9.8091 0.65561C9.25637 0.336099 8.54273 0.526446 8.21389 1.0635L8.13693 1.19266C7.50725 2.25996 6.47176 2.25996 5.83508 1.19266L5.75812 1.0635C5.44328 0.526446 4.72964 0.336099 4.17691 0.65561L2.96652 1.32862C2.32983 1.68212 2.11294 2.4775 2.47676 3.09613C3.11344 4.15664 2.5957 5.02679 1.32934 5.02679C0.601699 5.02679 0 5.60463 0 6.31843V7.5149C0 8.2219 0.594703 8.80654 1.32934 8.80654C2.5957 8.80654 3.11344 9.6767 2.47676 10.744C2.11294 11.3626 2.32983 12.1512 2.96652 12.5047L4.17691 13.1777C4.72964 13.4972 5.44328 13.3069 5.77211 12.7698L5.84908 12.6407C6.47876 11.5734 7.51424 11.5734 8.15092 12.6407L8.22789 12.7698C8.55672 13.3069 9.27037 13.4972 9.82309 13.1777L11.0335 12.5047C11.6702 12.1512 11.8871 11.3558 11.5232 10.744C10.8866 9.6767 11.4043 8.80654 12.6707 8.80654C13.3983 8.80654 14 8.2287 14 7.5149V6.31843C13.993 5.61143 13.3983 5.02679 12.6637 5.02679ZM6.9965 9.12605C5.74413 9.12605 4.72264 8.13353 4.72264 6.91667C4.72264 5.69981 5.74413 4.70728 6.9965 4.70728C8.24888 4.70728 9.27036 5.69981 9.27036 6.91667C9.27036 8.13353 8.24888 9.12605 6.9965 9.12605Z"
                                        fill="#00C092" />
                                </svg>
                                Phân quyền
                            </div>
                            <div v-if="roles">
                                <b-form-select name="vai_tro_id" v-model="selected" :options="roles"></b-form-select>
                            </div>
                            <p class="note-role">* Quản trị viên Admin có quyền cao nhất, có thể sử dụng tất cả các chức
                                năng
                                quản lý của hệ thống quản trị App Trông trẻ Pro.</p>
                        </div>


                        <div class="pt-5">
                            <template>
                                <button-component type-btn="submit">
                                    Lưu thay đổi
                                </button-component>
                            </template>
                        </div>
                        <div class="pt-5">
                            <div @click="delete_item(data?.id, data?.hoten)">
                                <button-component addClass="silver">
                                    <svg class="me-2" width="16" height="18" viewBox="0 0 16 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.66667 1H10.3333M1 3.66667H15M13.4444 3.66667L12.899 13.0171C12.8172 14.42 12.7762 15.1215 12.5111 15.6533C12.2777 16.1216 11.9256 16.498 11.5013 16.7331C11.0193 17 10.4042 17 9.17394 17H6.82607C5.59582 17 4.98069 17 4.49871 16.7331C4.07437 16.498 3.72229 16.1216 3.48888 15.6533C3.22375 15.1215 3.18284 14.42 3.101 13.0171L2.55556 3.66667M6.44444 7.66667V12.1111M9.55556 7.66667V12.1111"
                                            stroke="#2D2D2D" stroke-width="1.3" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    Xóa tài khoản
                                </button-component>
                            </div>
                        </div>
                    </form>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import ButtonComponent from '~/components/button/ButtonComponent.vue';
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Sửa thông tin Quản trị viên',
                previous: '/admin/users/admins'
            },
            file: null,
            data: null,
            hoten: null,
            email: null,
            password: null,
            roles: [],
            selected: 0,
            options: [
                { value: 0, text: 'Cấp quyền quản trị' },
                { value: 1, text: 'Option B' },
                { value: 2, text: 'Option C' },
                { value: 3, text: 'Option D' }
            ],
            clearFiles() {
                this.$refs['file-input'].reset()
            }
        };
    },
    validate({ params }) {
        return /^\d+$/.test(params.id);
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        async load_role() {
            await api.get('admin-api/danh-sach-quyen', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.roles = res?.data?.data.map(item => {
                    return {
                        value: item.id,
                        text: item.name
                    };
                })
            })
        },
        async load_data() {
            await api.get('admin-api/chi-tiet-user?id=' + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                const user = res?.data?.data.user
                this.data = user
                this.hoten = user?.hoten
                this.dien_thoai = user?.dien_thoai
                this.email = user?.email
                this.selected = user?.vai_tro
            })
        },
        async send_data(event) {
            event.preventDefault();
            console.log(123)
            const formData = new FormData(document.getElementById('form'))
            await api.post('admin-api/cap-nhat-quan-tri-vien', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.load_data()
                    this.load_role()
                }
            })
        },
        async delete_item(user_id, name) {
            const formData = new FormData();
            formData.append('id', user_id)

            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: `Xoá người dùng ${name}!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Có xoá nó!',
                cancelButtonText: 'Huỷ'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.post('admin-api/xoa-tai-khoan', formData, {
                        'Content-Type': 'multipart/form-data',
                        Authorization: 'Bearer ' + this.token
                    }).then(res => {
                        if (res?.status == 200) {
                            // toastr.success(res?.data?.message);
                            Swal.fire(
                                'Deleted!',
                                res?.data?.message,
                                'success'
                            )
                            this.$router.push('/admin/users/admins');
                        } else {
                            toastr.error(res?.data?.message);
                        }
                    })

                }
            })

        },
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
        this.load_data()
        this.load_role()
    },
    components: { ButtonComponent }
}
</script>

<style lang="scss" scoped>
.user-name {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.user-role {
    color: #7D7D7D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.user-phone {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.blade-role {
    border-radius: 17px;
    background: #FFEEEB;
    color: #FC4D32;
    font-family: SVN-Gilroy;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 5px;
    text-align: center;
}

.layout-user {
    position: relative;
    overflow: hidden;
    width: 110px;
    height: 110px;
    border-radius: 50%;
}

.card-role {
    border-radius: 10px;
    background: #FFF;
    padding: 20px;

    .card-role-body {
        display: flex;
        width: 100%;
    }
}

.roles-group-input {
    margin-bottom: 27px;

    .note-role {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 12px;
        font-style: italic;
        font-weight: 400;
        line-height: 16px;
        margin-top: 7px;
    }

    .roles-label {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 8px;
    }
}
</style>