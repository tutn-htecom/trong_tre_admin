<template>
    <div class="content-mp">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="6" lg="6" xl="6" style="min-width: 373px;">
                <div class="d-flex align-items-center justify-content-between wmt-27">
                    <div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8.00781" cy="8" r="8" fill="#0056B1" />
                            <path
                                d="M10.5997 6.78514L6.47928 4.16485C5.50162 3.54199 4.43863 4.80059 4.93279 5.99476L5.50873 7.38652C5.66871 7.77312 5.66871 8.22845 5.50873 8.61505L4.93279 10.0068C4.43863 11.201 5.50162 12.4553 6.47928 11.8367L10.5997 9.21643C11.4103 8.70096 11.4103 7.30061 10.5997 6.78514Z"
                                fill="white" />
                        </svg>
                        <span class="span-h">
                            {{ data?.dichVu ?? 'Loading...' }}
                        </span>
                    </div>

                    <!-- <nuxt-link :to="'/admin/lsm/teacher-training/' + id + '/edit/' + id_lesson" class="btn-edit">
                        <svg class="me-2" width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.7578 12.9814L13.98 13.8121C13.5674 14.2526 13.0079 14.5 12.4246 14.5C11.8412 14.5 11.2818 14.2526 10.8692 13.8121C10.4561 13.3725 9.8967 13.1257 9.31352 13.1257C8.73034 13.1257 8.17093 13.3725 7.7578 13.8121M0.757812 14.5H2.06024C2.44071 14.5 2.63095 14.5 2.80997 14.458C2.9687 14.4208 3.12043 14.3595 3.25961 14.2762C3.41659 14.1823 3.55111 14.051 3.82015 13.7883L13.5912 4.24962C14.2355 3.62061 14.2355 2.60077 13.5912 1.97176C12.9469 1.34275 11.9022 1.34275 11.2578 1.97176L1.48679 11.5105C1.21776 11.7731 1.08324 11.9044 0.98704 12.0577C0.90175 12.1936 0.838899 12.3417 0.800793 12.4966C0.757812 12.6714 0.757812 12.8571 0.757812 13.2286V14.5Z"
                                stroke="#2D2D2D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Chỉnh sửa
                    </nuxt-link> -->

                </div>
                <div class="my-2">
                    <!-- <title-header>
                        {{ data?.tieu_de ?? 'Loading...' }}
                    </title-header> -->
                </div>

                <div class="d-flex justify-content-between mb-2">
                    <label>Ẩn hiện chương trình:</label>
                    <b-form-checkbox v-model="bat_chuong_trinh" switch size="lg"></b-form-checkbox>
                </div>
                <div>
                    <b-form-group>
                        <label>Tiêu đề:</label>
                        <b-form-input name="tieu_de" v-model="tieu_de" placeholder="Nhập"></b-form-input>
                    </b-form-group>
                </div>
                <div class="mt-1 mb-2">
                    <b-form-group>
                        <label>Ảnh:</label>
                        <b-form-file name="image" accept="image/*" v-model="file" ref="file-input"
                            id="file-large"></b-form-file>
                    </b-form-group>
                    <div class="w-100 box-img">
                        <img v-if="data?.image" class="img-w" :src="data?.image" alt="">
                        <img v-else class="img-w" src="@/static/images/teacher-training/Rectangle4052.png" alt="">
                    </div>
                </div>

                <div class="mt-7">
                    <form id="form" @submit="send_data">
                        <button-component typeBtn="submit">
                            Lưu
                        </button-component>
                    </form>
                </div>
            </v-col>
        </v-row>

    </div>
</template>

<script>
import ButtonAdd from '~/components/button/ButtonAdd.vue';
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    components: { ButtonAdd },
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Chỉnh sửa',
                previous: '/admin/lsm/teacher-training/' + (this.id ?? 0)
            },
            panel: [0],
            data: null,
            teachers: null,
            lesson: null,
            data_lesson: null,
            goi_hoc: null,
            packages: null,
            nhom_id: 0,
            tieu_de: null,
            file: null,
            bat_chuong_trinh: true,
        };
    },
    validate({ params }) {
        return /^\d+$/.test(params.id);
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        id_lesson() {
            return this.$route.params.id_lesson
        },
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        add_lesson(item) {
            this.nhom_id = item
            this.$refs['my-modal-lesson'].show()
        },
        async send_data(event) {
            event.preventDefault();
            if (!this.tieu_de) {
                toastr.warning("vui lòng nhập đủ thông tin");
                return
            }
            const formData = new FormData()
            formData.append('bat_chuong_trinh', this.bat_chuong_trinh == true ? 1 : 0)
            formData.append('dich_vu_id', this.id)
            formData.append('tieu_de', this.tieu_de)
            formData.append('image', this.file)
            formData.append('id', this.id_lesson)

            await api.post('chuong-trinh-hoc/sua', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.load_data();
                    this.$router.push('/admin/lsm/students/' + this.id + '/detail/' + this.id_lesson);
                }
            })
        },
        async load_data() {
            await api.get(`chuong-trinh-hoc/chi-tiet-chinh-sua?id=` + this.id_lesson, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.data = res?.data?.data
                this.tieu_de = this.data?.tieu_de
                this.file = this.data?.image
                this.bat_chuong_trinh = this.data?.bat_chuong_trinh == 1 ? true : false

                this.title.name = "Chỉnh sửa " + res?.data?.data?.dichVu
                this.title.previous = '/admin/lsm/students/' + this.id + '/detail/' + this.id_lesson
                this.$store.dispatch('title/set_title', this.title);
            })

            await api.get(`chuong-trinh-hoc/danh-sach-goi-hoc?page=1&limit=1000&sort=0&id=` + this.id_lesson, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.packages = res?.data?.data
            })

        },
    },
    mounted() {
        this.load_data()

    },
}
</script>

<style lang="scss" scoped>
.card-body {
    padding: 8px 15px !important;
}

.box-img {
    max-height: 150px;
    overflow: hidden;
    border-radius: 5px;
}

.blade-id {
    color: #FC4D32;
    font-family: SVN-Gilroy;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 3px 11px;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 17px;
    background: #FFEEEB;
}

.card-item {
    border-radius: 10px;
    background: #FFF;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .user-name {
        color: #0056B1;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration-line: underline;
    }

    .box-img {
        width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 50%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

.card-lsm {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 0px 10px 0px rgba(0, 86, 177, 0.15);
    padding: 10px 15px;
}

.lesson {
    color: #2D2D2D;
    text-align: center;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
}

table {
    margin-top: 10px;

    tr {
        td {
            padding-bottom: 7px;
            padding-left: 20px;
        }
    }
}

.span1 {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.span2 {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.img-w {
    max-width: 100%;
}

.span-h {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.btn-edit {
    color: #2D2D2D !important;
    text-align: center;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 46px;
    background: #E5E5E5;
    cursor: pointer;
    display: flex;
    padding: 12px 32px;
    justify-content: center;
    align-items: center;
}
</style>