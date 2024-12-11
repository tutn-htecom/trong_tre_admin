<template>
    <div class="content-mp">
        <v-row>
            <v-col cols="12" md="7">
                <b-form-input v-model.lazy="tuKhoa" placeholder="Tìm giáo viên"></b-form-input>
            </v-col>

            <v-col class="mt-0 pt-0" xs="12" sm="12" md="7" lg="7" xl="7" style="min-width: 373px;">
                <div>
                    <div class="card-teacher cp">
                        <div class="card-item mt-3" v-for="(item, n) in teachers" v-bind:key="n"
                            @click="add_teacher(item?.id)">
                            <div class="d-flex">
                                <div class="box-img me-2">
                                    <img :src="item?.anh_nguoi_dung" alt="">
                                </div>
                                <div>
                                    <div class="user-id mb-2">
                                        <span class="blade-id"># {{ item?.id }}</span>
                                    </div>
                                    <div :class="isChecked(item?.id) == true ? ' user-name' : ' text-secondary text-dark'">
                                        {{ item?.hoten ?? 'Chưa cập nhật tên' }}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <svg v-if="isChecked(item?.id)" width="26" height="26" viewBox="0 0 26 26" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="13" cy="13" r="12.5" fill="#0056B1" fill-opacity="0.15" stroke="#0056B1" />
                                    <path
                                        d="M16.2134 6.27344H9.78671C8.37338 6.27344 7.21338 7.43344 7.21338 8.84677V18.2401C7.21338 19.4401 8.07338 19.9468 9.12671 19.3668L12.38 17.5601C12.7267 17.3668 13.2867 17.3668 13.6267 17.5601L16.88 19.3668C17.9334 19.9534 18.7934 19.4468 18.7934 18.2401V8.84677C18.7867 7.43344 17.6334 6.27344 16.2134 6.27344ZM15.4134 11.0201L12.7467 13.6868C12.6467 13.7868 12.52 13.8334 12.3934 13.8334C12.2667 13.8334 12.14 13.7868 12.04 13.6868L11.04 12.6868C10.8467 12.4934 10.8467 12.1734 11.04 11.9801C11.2334 11.7868 11.5534 11.7868 11.7467 11.9801L12.3934 12.6268L14.7067 10.3134C14.9 10.1201 15.22 10.1201 15.4134 10.3134C15.6067 10.5068 15.6067 10.8268 15.4134 11.0201Z"
                                        fill="#0056B1" />
                                </svg>
                                <svg v-else width="26" height="26" viewBox="0 0 26 26" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="13" cy="13" r="12.5" fill="#F2F2F2" stroke="#979797" />
                                    <path
                                        d="M16.2129 6.3335H9.78622C8.36622 6.3335 7.21289 7.4935 7.21289 8.90683V18.3002C7.21289 19.5002 8.07289 20.0068 9.12622 19.4268L12.3796 17.6202C12.7262 17.4268 13.2862 17.4268 13.6262 17.6202L16.8796 19.4268C17.9329 20.0135 18.7929 19.5068 18.7929 18.3002V8.90683C18.7862 7.4935 17.6329 6.3335 16.2129 6.3335ZM14.6662 12.6002H13.4996V13.8068C13.4996 14.0802 13.2729 14.3068 12.9996 14.3068C12.7262 14.3068 12.4996 14.0802 12.4996 13.8068V12.6002H11.3329C11.0596 12.6002 10.8329 12.3735 10.8329 12.1002C10.8329 11.8268 11.0596 11.6002 11.3329 11.6002H12.4996V10.4735C12.4996 10.2002 12.7262 9.9735 12.9996 9.9735C13.2729 9.9735 13.4996 10.2002 13.4996 10.4735V11.6002H14.6662C14.9396 11.6002 15.1662 11.8268 15.1662 12.1002C15.1662 12.3735 14.9396 12.6002 14.6662 12.6002Z"
                                        fill="#979797" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="card-teacher cp">
                        <div class="card-item mt-3" v-for="(item, n) in data" v-bind:key="n" @click="add_teacher(item?.id)">
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
                                <svg v-if="isChecked(item?.id)" width="26" height="26" viewBox="0 0 26 26" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="13" cy="13" r="12.5" fill="#0056B1" fill-opacity="0.15" stroke="#0056B1" />
                                    <path
                                        d="M16.2134 6.27344H9.78671C8.37338 6.27344 7.21338 7.43344 7.21338 8.84677V18.2401C7.21338 19.4401 8.07338 19.9468 9.12671 19.3668L12.38 17.5601C12.7267 17.3668 13.2867 17.3668 13.6267 17.5601L16.88 19.3668C17.9334 19.9534 18.7934 19.4468 18.7934 18.2401V8.84677C18.7867 7.43344 17.6334 6.27344 16.2134 6.27344ZM15.4134 11.0201L12.7467 13.6868C12.6467 13.7868 12.52 13.8334 12.3934 13.8334C12.2667 13.8334 12.14 13.7868 12.04 13.6868L11.04 12.6868C10.8467 12.4934 10.8467 12.1734 11.04 11.9801C11.2334 11.7868 11.5534 11.7868 11.7467 11.9801L12.3934 12.6268L14.7067 10.3134C14.9 10.1201 15.22 10.1201 15.4134 10.3134C15.6067 10.5068 15.6067 10.8268 15.4134 11.0201Z"
                                        fill="#0056B1" />
                                </svg>
                                <svg v-else width="26" height="26" viewBox="0 0 26 26" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="13" cy="13" r="12.5" fill="#F2F2F2" stroke="#979797" />
                                    <path
                                        d="M16.2129 6.3335H9.78622C8.36622 6.3335 7.21289 7.4935 7.21289 8.90683V18.3002C7.21289 19.5002 8.07289 20.0068 9.12622 19.4268L12.3796 17.6202C12.7262 17.4268 13.2862 17.4268 13.6262 17.6202L16.8796 19.4268C17.9329 20.0135 18.7929 19.5068 18.7929 18.3002V8.90683C18.7862 7.4935 17.6329 6.3335 16.2129 6.3335ZM14.6662 12.6002H13.4996V13.8068C13.4996 14.0802 13.2729 14.3068 12.9996 14.3068C12.7262 14.3068 12.4996 14.0802 12.4996 13.8068V12.6002H11.3329C11.0596 12.6002 10.8329 12.3735 10.8329 12.1002C10.8329 11.8268 11.0596 11.6002 11.3329 11.6002H12.4996V10.4735C12.4996 10.2002 12.7262 9.9735 12.9996 9.9735C13.2729 9.9735 13.4996 10.2002 13.4996 10.4735V11.6002H14.6662C14.9396 11.6002 15.1662 11.8268 15.1662 12.1002C15.1662 12.3735 14.9396 12.6002 14.6662 12.6002Z"
                                        fill="#979797" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="my-7">
                        <!-- <button-add>
                            <span class="mdi mdi-plus"></span> Gán giáo viên
                        </button-add> -->
                    </div>
                </div>
                <!--  -->
            </v-col>
        </v-row>

    </div>
</template>

<script>
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';
import ButtonAdd from '~/components/button/ButtonAdd.vue';

export default {
    components: { ButtonAdd },
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Gán giáo viên',
                previous: '/admin/lsm/teacher-training/' + (this.id ?? 0)
            },
            panel: [0],
            data: [],
            teachers: [],
            teacher: [],
            tuKhoa: '',
            timeOut: null,
            timer: 700,
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
        async load_data() {
            await api.get(`dao-tao/danh-sach-giao-vien-da-gan?page=1&limit=1000&sort=1&tuKhoa=${this.tuKhoa}&hoc_phan_id=` + this.course_id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.teachers = res?.data?.data
                this.teacher = res?.data?.data.map(item => {
                    return item?.id;
                })
                console.log(this.teacher)
            })

            await api.get(`dao-tao/danh-sach-giao-vien?page=1&limit=1000&sort=1&tuKhoa=${this.tuKhoa}&hoc_phan_id=` + this.course_id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.data = res?.data?.data
            })
        },
        isChecked(id) {
            console.log(this.teacher, id, this.teacher.includes(id))
            return this.teacher.includes(id);
        },
        async add_teacher(id_teacher) {
            const formData = new FormData()
            formData.append('giao_vien_id', id_teacher)
            formData.append('hoc_phan_id', this.course_id)

            await api.post('dao-tao/gan-giao-vien', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.load_data();
                }
            })
        }
    },
    mounted() {
        this.title.previous = '/admin/lsm/teacher-training/' + this.id + '/detail/' + this.course_id
        this.$store.dispatch('title/set_title', this.title);
        this.load_data()
    },
    watch: {
        tuKhoa() {
            clearTimeout(this.timeOut);

            this.timeOut = setTimeout(() => {
                // this.$emit("click");
                this.load_data()

            }, this.timer);
        },
    }
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