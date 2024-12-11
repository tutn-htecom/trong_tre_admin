<template>
    <div class="content-mp">
        <div class="add-admin">

            <div class="mb-5">
                <div class="d-flex justify-content-between align-items-center">
                    <title-header>
                        Thông tin tài khoản
                    </title-header>
                </div>
            </div>

            <v-row class="mt-5">

                <v-col class="mt-0 pt-0" xs="12" sm="12" md="12" lg="7" xl="7">
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
                                <input name="hoten" v-model="hoten" type="text" class="form-control roles-input"
                                    placeholder="Nhập tên tài khoản" />
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
                            <div>
                                <b-form-select name="vai_tro_id" v-model="selected" :options="roles"
                                    aria-placeholder="Chọn quyền"></b-form-select>
                            </div>
                            <p class="note-role">* Quản trị viên Admin có quyền cao nhất, có thể sử dụng tất cả các chức
                                năng
                                quản lý của hệ thống quản trị App Trông trẻ Pro.</p>
                        </div>

                        <div class="roles-group-input">
                            <div class="roles-label">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.47003 12.6735L2.4567 12.6868C2.2767 12.2935 2.16337 11.8468 2.1167 11.3535C2.16337 11.8402 2.29003 12.2802 2.47003 12.6735Z"
                                        fill="#0056B1" />
                                    <path
                                        d="M6.75 6.9204C7.62629 6.9204 8.33666 6.21003 8.33666 5.33374C8.33666 4.45745 7.62629 3.74707 6.75 3.74707C5.8737 3.74707 5.16333 4.45745 5.16333 5.33374C5.16333 6.21003 5.8737 6.9204 6.75 6.9204Z"
                                        fill="#0056B1" />
                                    <path
                                        d="M11.5433 1.33301H5.95659C3.52992 1.33301 2.08325 2.77967 2.08325 5.20634V10.793C2.08325 11.5197 2.20992 12.153 2.45659 12.6863C3.02992 13.953 4.25659 14.6663 5.95659 14.6663H11.5433C13.9699 14.6663 15.4166 13.2197 15.4166 10.793V9.26634V5.20634C15.4166 2.77967 13.9699 1.33301 11.5433 1.33301ZM14.3299 8.33301C13.8099 7.88634 12.9699 7.88634 12.4499 8.33301L9.67659 10.713C9.15659 11.1597 8.31659 11.1597 7.79659 10.713L7.56992 10.5263C7.09659 10.113 6.34325 10.073 5.80992 10.433L3.31659 12.1063C3.16992 11.733 3.08325 11.2997 3.08325 10.793V5.20634C3.08325 3.32634 4.07659 2.33301 5.95659 2.33301H11.5433C13.4233 2.33301 14.4166 3.32634 14.4166 5.20634V8.40634L14.3299 8.33301Z"
                                        fill="#0056B1" />
                                </svg>
                                Ảnh đại diện <i>(Tối thiểu không quá 2mb)</i>
                            </div>
                            <div>
                                <b-form-file name="anh_nguoi_dung" v-model="file" ref="file-input"
                                    class="mb-2"></b-form-file>
                            </div>
                        </div>

                        <div class="pt-5">
                            <button-component typeBtn="submit">
                                Lưu
                            </button-component>
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
                name: 'Thông tin Quản trị viên',
                previous: '/admin/users/admins'
            },
            roles: null,
            selected: 1,
            file: null,
            data: null,
            hoten: null,
            password: null,
            dien_thoai: null,
            clearFiles() {
                this.$refs['file-input'].reset()
            }
        };
    },
    computed: {
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
        async send_data(event) {
            event.preventDefault();
            console.log(123)
            const formData = new FormData(document.getElementById('form'))
            await api.post('admin-api/them-quan-tri-vien', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$router.push('/admin/users/admins');
                }
            })
        }
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
        this.load_role();
    },
    components: { ButtonComponent }
}
</script>

<style lang="scss" scoped>
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
}</style>