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
                            {{ data?.khoaHoc ?? 'Loading...' }}
                        </span>
                    </div>

                    <nuxt-link :to="'/admin/lsm/teacher-training/' + id + '/edit/' + course_id" class="btn-edit">
                        <svg class="me-2" width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.7578 12.9814L13.98 13.8121C13.5674 14.2526 13.0079 14.5 12.4246 14.5C11.8412 14.5 11.2818 14.2526 10.8692 13.8121C10.4561 13.3725 9.8967 13.1257 9.31352 13.1257C8.73034 13.1257 8.17093 13.3725 7.7578 13.8121M0.757812 14.5H2.06024C2.44071 14.5 2.63095 14.5 2.80997 14.458C2.9687 14.4208 3.12043 14.3595 3.25961 14.2762C3.41659 14.1823 3.55111 14.051 3.82015 13.7883L13.5912 4.24962C14.2355 3.62061 14.2355 2.60077 13.5912 1.97176C12.9469 1.34275 11.9022 1.34275 11.2578 1.97176L1.48679 11.5105C1.21776 11.7731 1.08324 11.9044 0.98704 12.0577C0.90175 12.1936 0.838899 12.3417 0.800793 12.4966C0.757812 12.6714 0.757812 12.8571 0.757812 13.2286V14.5Z"
                                stroke="#2D2D2D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Chỉnh sửa
                    </nuxt-link>

                </div>
                <div class="my-2">
                    <title-header>
                        {{ data?.tieu_de ?? 'Loading...' }}
                    </title-header>
                </div>

                <div class="w-100">
                    <img v-if="data?.image" class="img-w" :src="data?.image" alt="">
                    <img v-else class="img-w" src="@/static/images/teacher-training/Rectangle4052.png" alt="">
                </div>

                <div>
                    <table>
                        <tr>
                            <td>
                                <div>
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.6079 0H7.40784C6.30114 0 5.37222 0.662527 5.09335 1.45977C5.00218 1.72043 5.23167 1.95 5.50781 1.95H9.00786C9.33587 1.95 9.60787 2.154 9.60787 2.4C9.60787 2.646 9.33587 2.85 9.00786 2.85H5.50781C5.23167 2.85 5.00781 3.07386 5.00781 3.35V3.85C5.00781 4.12614 5.23167 4.35 5.50781 4.35H7.25584C7.58384 4.35 7.85585 4.554 7.85585 4.8C7.85585 5.046 7.58384 5.25 7.25584 5.25H5.50781C5.23167 5.25 5.00781 5.47386 5.00781 5.75V6.22374C5.00781 6.49842 5.22939 6.72166 5.50406 6.72372L9.00786 6.75C9.34387 6.75 9.60787 6.954 9.60787 7.206C9.59987 7.452 9.33587 7.65 9.00786 7.65C8.99986 7.65 8.99986 7.65 8.99986 7.65L5.51157 7.62379C5.23397 7.6217 5.00781 7.84616 5.00781 8.12377V8.65C5.00781 8.92614 5.23167 9.15 5.50781 9.15H8.12785C8.46386 9.15 8.72786 9.354 8.72786 9.6C8.72786 9.846 8.46386 10.05 8.12785 10.05H5.50781C5.23167 10.05 5.00218 10.2796 5.09335 10.5402C5.37222 11.3375 6.30114 12 7.40784 12H10.6079C11.9279 12 13.0079 11.196 13.0079 10.2V1.8C13.0079 0.804 11.9279 0 10.6079 0Z"
                                            fill="#FC4D32" />
                                        <path
                                            d="M4.00786 2.08235V2.5C4.00786 2.77614 3.784 3 3.50786 3H0.507812C0.23167 3 0.0078125 2.77614 0.0078125 2.5V2.08235C0.0078125 0.938823 0.907993 0 2.01122 0C3.10768 0 4.00786 0.938823 4.00786 2.08235Z"
                                            fill="#FC4D32" />
                                        <path
                                            d="M0.0078125 9.71388C0.0078125 9.96696 0.13641 10.355 0.298848 10.5687L0.847079 11.3336C1.49006 12.2221 2.53238 12.2221 3.1686 11.3336L3.7236 10.5687C3.87927 10.355 4.00786 9.96696 4.00786 9.71388V4.5C4.00786 4.22386 3.784 4 3.50786 4H0.507812C0.23167 4 0.0078125 4.22386 0.0078125 4.5V9.71388Z"
                                            fill="#FC4D32" />
                                    </svg>
                                    <span class="span1">Cấp độ</span>
                                </div>
                            </td>
                            <td>
                                <span class="span2">{{ data?.capDo ?? 'Loading...' }}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.91455 9.13117C10.3871 8.79446 11.0078 9.16177 11.0078 9.77397V10.7611C11.0078 11.733 10.3095 12.7737 9.4702 13.0798L7.2202 13.891C6.82521 14.0363 6.18336 14.0363 5.79543 13.891L3.54543 13.0798C2.69904 12.7737 2.00781 11.733 2.00781 10.7611V9.76631C2.00781 9.16177 2.6285 8.79446 3.09402 9.12351L4.547 10.1489C5.10421 10.5545 5.80954 10.7535 6.51487 10.7535C7.2202 10.7535 7.92552 10.5545 8.48273 10.1489L9.91455 9.13117Z"
                                            fill="#FFB761" />
                                        <path
                                            d="M12.0284 3.13048L7.88967 0.373553C7.14346 -0.124518 5.91359 -0.124518 5.16738 0.373553L1.00794 3.13048C-0.325564 4.00737 -0.325564 5.99263 1.00794 6.87653L2.11344 7.6061L5.16738 9.62645C5.91359 10.1245 7.14346 10.1245 7.88967 9.62645L10.9229 7.6061L11.8695 6.97474V9.12136C11.8695 9.40898 12.1044 9.64749 12.3877 9.64749C12.6709 9.64749 12.9059 9.40898 12.9059 9.12136V5.66994C13.1822 4.76499 12.899 3.71273 12.0284 3.13048Z"
                                            fill="#FFB761" />
                                    </svg>
                                    <span class="span1">Phân loại</span>
                                </div>
                            </td>
                            <td>
                                <span class="span2">{{ data?.type ?? 'Loading...' }}</span>
                            </td>
                        </tr>
                    </table>
                </div>

                <!--  -->
                <div>
                    <div class="mt-5">
                        <title-header>Danh sách bài học</title-header>
                    </div>

                    <div>
                        <div v-for="(item, n) in lesson" v-bind:key="n"
                            class="d-flex justify-content-between align-items-center card-lsm hover-card mt-4  wow animate__animated animate__zoomIn cp"
                            @click="lesson_show(item?.id)">
                            <div class="">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="12.2059" cy="12" rx="12.1029" ry="12" fill="#4EAEEA" />
                                    <path
                                        d="M10.7753 4.99796L6.3596 7.67751C4.94393 8.5366 4.94393 10.4593 6.3596 11.3184L10.7753 13.998C11.5675 14.4821 12.8731 14.4821 13.6653 13.998L18.059 11.3184C19.4674 10.4593 19.4674 8.54342 18.059 7.68433L13.6653 5.00478C12.8731 4.51387 11.5675 4.51387 10.7753 4.99796Z"
                                        stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M7.53321 12.1909L7.52588 15.3886C7.52588 16.2546 8.24472 17.1818 9.12492 17.4546L11.4648 18.1773C11.8682 18.3 12.5357 18.3 12.9465 18.1773L15.2864 17.4546C16.1666 17.1818 16.8854 16.2546 16.8854 15.3886V12.225"
                                        stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M19.1011 13.5001V9.40918" stroke="white" stroke-width="1.3"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class="lesson mt-2"> {{ item?.tieu_de }}</span>
                            </div>
                            <div>
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L5 5L1 1" stroke="#2D2D2D" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <b-modal id="my-modal-show" ref="my-modal-show" hide-footer centered :title="data_lesson?.tieu_de">
                        <template #default="{ hide }">
                            <div>

                                <div class="my-2">
                                    <div>
                                        <div>
                                            <strong>
                                                <span>Danh sách câu hỏi</span>
                                            </strong>
                                        </div>
                                        <div class="my-3 w-100 "
                                            v-for="(item, n) in data_lesson?.cauHoi" v-bind:key="n">
                                            <v-card>
                                                <v-card-text>
                                                    <div class="mt-0">
                                                        <div>
                                                            <strong>
                                                                <b>
                                                                    {{ item?.tieu_de }}
                                                                </b>
                                                            </strong>
                                                        </div>
                                                        <div class="mt-3">
                                                            <p>
                                                                <b>Giới thiệu bài học</b>
                                                            </p>
                                                            <p>
                                                                {{ item?.gioi_thieu }}
                                                            </p>
                                                        </div>
                                                        <div class="mt-3">
                                                            <p>
                                                                <b>Video bài học</b>
                                                            </p>
                                                            <a :href="item?.link" target="_blank">
                                                                {{ item?.link }}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </v-card-text>
                                            </v-card>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <strong>
                                                <span>Bài Test</span>
                                            </strong>
                                        </div>
                                        <!-- <div class="my-3 w-100"
                                            v-for="(item, n) in data_lesson?.baiTest" v-bind:key="n">
                                            <v-card>
                                                <v-card-text>
                                                    <div class="mt-0">
                                                        <a :href="item?.link" target="_blank">
                                                            {{ item?.link }}
                                                        </a>
                                                    </div>
                                                </v-card-text>
                                            </v-card>
                                        </div> -->
                                        <div class="my-3 w-100"
                                            >
                                            <v-card>
                                                <v-card-text>
                                                    <div class="mt-0">
                                                        <a :href="data_lesson?.baiTest?.link" target="_blank">
                                                            {{ data_lesson?.baiTest?.link }}
                                                        </a>
                                                    </div>
                                                </v-card-text>
                                            </v-card>
                                        </div>
                                    </div>

                                </div>
                                <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                    <!-- <button class=" btn-cancel me-1" @click="hide()">Hủy</button> -->
                                    <button class="btn btn-primary w-50 rounded-pill" @click="edit_leson(data_lesson?.id)">Sửa</button>
                                    <button class="btn btn-danger w-50 rounded-pill ms-1" @click="delete_leson(data_lesson?.id)">Xóa</button>
                                </div>
                            </div>

                        </template>
                    </b-modal>

                    <div class="my-7">
                        <nuxt-link class="d-block"
                            :to="'/admin/lsm/teacher-training/' + id + '/detail/' + course_id + '/create'">
                            <button-add>
                                <span class="mdi mdi-plus"></span> Thêm bài học
                            </button-add>
                        </nuxt-link>
                    </div>
                </div>

                <hr />

                <div>
                    <div class="mt-5">
                        <title-header>Danh sách giáo viên được gán</title-header>
                    </div>

                    <div class="card-teacher">
                        <div class="card-item mt-3  wow animate__animated animate__pulse" v-for="(item, n) in teachers"
                            v-bind:key="n">
                            <div class="d-flex">
                                <div class="box-img me-2">
                                    <img :src="item?.anh_nguoi_dung" alt="">
                                </div>
                                <div>
                                    <div class="user-id mb-2">
                                        <span class="blade-id"># {{ item?.id }}</span>
                                    </div>
                                    <div class="user-name">
                                        {{ item?.hoten ?? 'Chưa cập nhật tên' }}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="13" cy="13" r="12.5" fill="#0056B1" fill-opacity="0.15" stroke="#0056B1" />
                                    <path
                                        d="M16.2134 6.27344H9.78671C8.37338 6.27344 7.21338 7.43344 7.21338 8.84677V18.2401C7.21338 19.4401 8.07338 19.9468 9.12671 19.3668L12.38 17.5601C12.7267 17.3668 13.2867 17.3668 13.6267 17.5601L16.88 19.3668C17.9334 19.9534 18.7934 19.4468 18.7934 18.2401V8.84677C18.7867 7.43344 17.6334 6.27344 16.2134 6.27344ZM15.4134 11.0201L12.7467 13.6868C12.6467 13.7868 12.52 13.8334 12.3934 13.8334C12.2667 13.8334 12.14 13.7868 12.04 13.6868L11.04 12.6868C10.8467 12.4934 10.8467 12.1734 11.04 11.9801C11.2334 11.7868 11.5534 11.7868 11.7467 11.9801L12.3934 12.6268L14.7067 10.3134C14.9 10.1201 15.22 10.1201 15.4134 10.3134C15.6067 10.5068 15.6067 10.8268 15.4134 11.0201Z"
                                        fill="#0056B1" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="my-7">
                        <nuxt-link :to="'/admin/lsm/teacher-training/' + id + '/detail/' + course_id + '/teachers'">
                            <button-add>
                                <span class="mdi mdi-plus"></span> Gán giáo viên
                            </button-add>
                        </nuxt-link>
                    </div>
                </div>
                <!--  -->
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
                name: 'Học phần',
                previous: '/admin/lsm/teacher-training/' + (this.id ?? 0)
            },
            panel: [0],
            data: null,
            teachers: null,
            lesson: null,
            data_lesson: null,
        };
    },
    validate({ params }) {
        return /^\d+$/.test(params.id);
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        course_id() {
            return this.$route.params.course_id
        },
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        async delete_leson(id_delete) {
            const formData = new FormData();
            formData.append('bai_hoc_id', id_delete)

            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: `Xoá bài học đã chọn!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Có xoá nó!',
                cancelButtonText: 'Huỷ'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.post('dao-tao/delete-bai-hoc', formData, {
                        'Content-Type': 'multipart/form-data',
                        Authorization: 'Bearer ' + this.token
                    }).then(res => {
                        if (res?.status == 200) {
                            Swal.fire(
                                'Deleted!',
                                res?.data?.message,
                                'success'
                            )
                            this.$refs['my-modal-show'].hide()
                            this.load_data()
                        } else {
                            toastr.error(res?.data?.message);
                        }
                    })

                }
            })
        },
        async edit_leson(id_lesson) {
            this.$router.push(`/admin/lsm/teacher-training/${this.id}/detail/${this.course_id}/edit/${id_lesson}`);
        },
        async lesson_show(id_lesson) {
            await api.get(`dao-tao/chi-tiet-bai-hoc?bai_hoc_id=` + id_lesson, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.data_lesson = res?.data?.data
                console.log(this.data_lesson)
                this.$refs['my-modal-show'].show()
            })
        },
        async load_data() {
            await api.get(`dao-tao/chi-tiet-hoc-phan?hoc_phan_id=` + this.course_id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.data = res?.data?.data
            })

            await api.get(`dao-tao/danh-sach-bai-hoc?page=1&limit=1000&sort=1&tuKhoa=&hoc_phan_id=` + this.course_id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.lesson = res?.data?.data
            })

            await api.get(`dao-tao/danh-sach-giao-vien-da-gan?page=1&limit=100&sort=1&tuKhoa=&hoc_phan_id=` + this.course_id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.teachers = res?.data?.data
            })
        },
    },
    mounted() {
        this.title.previous = '/admin/lsm/teacher-training/' + (this.id ?? 0)
        this.$store.dispatch('title/set_title', this.title);

        this.load_data()
    },
}
</script>

<style lang="scss" scoped>
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