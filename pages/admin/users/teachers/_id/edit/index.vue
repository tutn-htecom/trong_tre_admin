<template>
    <div class="content-mp">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="6" lg="6" xl="6">
                <div class="edit-teacher">
                    <div class="box-img">
                        <img v-if="image" :src="image" alt="" />
                        <img v-else :src="data?.anh_nguoi_dung" alt="" />
                        <input type="file" hidden @change="handleFileChange" id="img11" />
                    </div>
                    <div class="my-5">
                        <b class="teacher-name">
                            {{ data?.hoten ?? 'Chưa cập nhật tên' }}
                        </b>
                    </div>

                    <div class="d-flex w-100 justify-content-between">
                        <label @click="delete_img()" class="flex-1">
                            <button-web addClass="flex-1">
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.16667 1.5H8.83333M1.5 3.66667H12.5M11.2778 3.66667L10.8492 11.2639C10.7849 12.4038 10.7528 12.9737 10.5445 13.4058C10.3611 13.7863 10.0844 14.0921 9.75102 14.2831C9.37231 14.5 8.889 14.5 7.92238 14.5H6.07762C5.111 14.5 4.62769 14.5 4.24898 14.2831C3.91557 14.0921 3.63894 13.7863 3.45555 13.4058C3.24723 12.9737 3.21508 12.4038 3.15079 11.2639L2.72222 3.66667M5.77778 6.91667V10.5278M8.22222 6.91667V10.5278"
                                        stroke="#2D2D2D" stroke-width="1.3" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <span class="ms-2 text-btn">Xóa ảnh</span>
                            </button-web>
                        </label>

                        <label class="flex-1" for="img11">
                            <button-web addClass="active">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.94444 6.38889C3.37613 6.38889 3.09197 6.38889 2.85883 6.45136C2.22616 6.62088 1.73199 7.11505 1.56247 7.74772C1.5 7.98086 1.5 8.26502 1.5 8.83333V9.56667C1.5 10.5934 1.5 11.1068 1.69982 11.499C1.87559 11.8439 2.15605 12.1244 2.50102 12.3002C2.89319 12.5 3.40657 12.5 4.43333 12.5H9.56667C10.5934 12.5 11.1068 12.5 11.499 12.3002C11.8439 12.1244 12.1244 11.8439 12.3002 11.499C12.5 11.1068 12.5 10.5934 12.5 9.56667V8.83333C12.5 8.26502 12.5 7.98086 12.4375 7.74772C12.268 7.11505 11.7738 6.62088 11.1412 6.45136C10.908 6.38889 10.6239 6.38889 10.0556 6.38889M9.44444 3.94444L7 1.5M7 1.5L4.55556 3.94444M7 1.5V8.83333"
                                        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class="ms-2 text-btn">Tải ảnh lên</span>
                            </button-web>
                        </label>
                    </div>
                </div>

                <div class="input-teacher-group mt-5 mb-4">
                    <div class="mb-2">
                        <span class="input-text">CMND/CCCD</span> <span class="text-danger">*</span>
                    </div>
                    <div>
                        <input v-model="cmnd_cccd" class="form-control input-teacher" type="text" placeholder="nhập nội dung" />
                    </div>
                </div>

                <div class="input-teacher-group mt-5 mb-4">
                    <div class="mb-2">
                        <span class="input-text">Họ và tên</span> <span class="text-danger">*</span>
                    </div>
                    <div>
                        <input v-model="hoten" class="form-control input-teacher" type="text" placeholder="nhập họ tên" />
                    </div>
                </div>

                <div class="input-teacher-group mt-5 mb-4">
                    <div class="mb-2">
                        <span class="input-text">Ngày sinh</span> <span class="text-danger">*</span>
                    </div>
                    <div>
                        <input v-model="ngay_sinh" class="form-control input-teacher" type="date" placeholder="vd: 20/11/2024" />
                    </div>
                </div>

                <div class="input-teacher-group mt-5 mb-4">
                    <div class="mb-2">
                        <span class="input-text">Email</span> <span class="text-danger">*</span>
                    </div>
                    <div>
                        <input v-model="email" class="form-control input-teacher" type="text"  />
                    </div>
                </div>

                <div class="input-teacher-group mt-5 mb-4">
                    <div class="mb-2">
                        <span class="input-text">Trình độ</span>
                    </div>
                    <div>
                        <input v-model="trinh_do" class="form-control input-teacher" type="text"  />
                    </div>
                </div>

                <div class="input-teacher-group mt-5 mb-4">
                    <div class="mb-2">
                        <span class="input-text">Chuyên ngành</span>
                    </div>
                    <div>
                        <input v-model="chuyen_nganh" class="form-control input-teacher" type="text"  />
                    </div>
                </div>

                <div class="input-teacher-group mt-5 mb-4">
                    <div class="mb-2">
                        <span class="input-text">Trường đào tạo</span>
                    </div>
                    <div>
                        <input v-model="truong_dao_tao" class="form-control input-teacher" type="text"  />
                    </div>
                </div>

                <div class="input-teacher-group">
                    <div class="mb-2">
                        <span class="input-text">Chứng chỉ/ Chứng nhận</span>
                    </div>
                    <div>
                        <b-form-file multiple v-model="files"></b-form-file>
                    </div>
                </div>

                <!-- <div class="input-teacher-group mt-5 mb-4">
                    <div class="mb-2">
                        <span class="input-text">Mật khẩu mới</span>
                    </div>
                    <div>
                        <input v-model="password" class="form-control input-teacher" type="password" placeholder="nhập nội dung" />
                    </div>
                </div>

                <div class="input-teacher-group mt-5 mb-4">
                    <div class="mb-2">
                        <span class="input-text">Xác nhận mật khẩu</span>
                    </div>
                    <div>
                        <input v-model="password_confirm" class="form-control input-teacher" type="password" placeholder="nhập nội dung" />
                    </div>
                </div> -->

                <div class="mt-8" @click="send_data">
                    <button-component>Lưu thay đổi</button-component>
                </div>
            </v-col>

        </v-row>
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Chỉnh sửa thông tin',
                previous: '/admin/users/teachers/' + this.id
            },
            chungNhan: '',
            data: null,
            file: null,
            files: null,
            name: null,
            image: null,
            cmnd_cccd: '',
            password_confirm: null,
            password: null,
            hoten: '',
            ngay_sinh: '',
            email: '',
            trinh_do: '',
            chuyen_nganh: '',
            truong_dao_tao: '',
        };
    },
    validate({ params }) {
        return /^\d+$/.test(params.id);
    },
    computed: {
        id() {
            console.log(this.$route.params.id)
            return this.$route.params.id
        },
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key;
        },
    },
    methods: {
        async delete_img() {
            this.image = null;
            this.file = null;
        },
        async handleFileChange(event) {
            const img = event.target.files[0];
            this.file = img;
            if (img) {
                this.image = URL.createObjectURL(img);
            }
        },
        async load_data() {
            await api.get('giao-vien/chi-tiet?id=' + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                const user = res?.data?.data.user
                this.chungNhan = res?.data?.data.chungNhan
                this.cmnd_cccd = res?.data?.data.user?.cmnd_cccd
                this.hoten = res?.data?.data.user?.hoten
                this.ngay_sinh = res?.data?.data.user?.ngay_sinh

                let dateArray = this.ngay_sinh.split("/");
                let year = dateArray[2];
                let month = dateArray[1];
                let day = dateArray[0];
                // let currentDate = new Date();
                // let day = currentDate.getDate();
                // this.ngay_sinh = `${day}-${month}-${year}`;
                this.ngay_sinh = `${year}-${month}-${day}`;
                console.log(this.ngay_sinh)

                this.email = res?.data?.data.user?.email
                this.image = res?.data?.data.user?.anh_nguoi_dung
                this.chuyen_nganh = res?.data?.data.bangCap?.chuyen_nganh
                this.trinh_do = res?.data?.data.bangCap?.trinh_do
                this.truong_dao_tao = res?.data?.data.bangCap?.truong_dao_tao
                this.data = user
                // this.hoten = user?.hoten
                // this.dien_thoai = user?.dien_thoai
                // this.selected = user?.vai_tro
            })
        },
        async send_data(event) {
            // event.preventDefault();
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('anh_nguoi_dung', this.file)
            formData.append('cmnd_cccd', this.cmnd_cccd)
            //if( this.files) {
                formData.append('chung_chi', this.files)
            //}
            //if( this.password) {
                formData.append('password', this.password)
            //}
            //if(this.password_confirm) {
                formData.append('password_confirm', this.password_confirm)
            //}
            //if(this.hoten) {
                formData.append('hoten', this.hoten)
            //}
            //if(this.ngay_sinh) {
                formData.append('ngay_sinh', this.ngay_sinh)
            //}
            //if(this.email) {
                formData.append('email', this.email)
            //}
            //if(this.trinh_do) {
                formData.append('bang_cap[trinh_do]', this.trinh_do)
            //}
            //if(this.chuyen_nganh) {
                formData.append('bang_cap[chuyen_nganh]', this.chuyen_nganh)
            //}
            //if(this.truong_dao_tao) {
                formData.append('bang_cap[truong_dao_tao]', this.truong_dao_tao)
            //}

            await api.post('giao-vien/sua', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    // this.$router.push('admin/users/teachers/' + this.id);
                }
            })
        },
    },
    mounted() {
        this.title.previous = '/admin/users/teachers/' + this.id

        this.$store.dispatch('title/set_title', this.title);
        this.load_data()
    },
}
</script>


<style lang="scss" scoped>
.input-teacher-group {
    .input-teacher {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border-radius: 10px;
        border: 1px solid #E5E5E5;
        background: #FFF;
    }

    .input-text {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
}

.text-btn {
    text-align: center;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.teacher-name {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.edit-teacher {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    .box-img {
        width: 108px;
        height: 108px;
        overflow: hidden;
        border-radius: 50%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

.card-certificate {
    border-radius: 5px;
    border: 1px solid #E5E5E5;
    background: #FFF;
    padding: 10px;
    overflow: hidden;
    width: 100%;

    .card-certificate-body {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .box-certificate {
            height: 100px;

            img {
                // width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}

.td-first {
    width: 100px;

    span {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}
</style>