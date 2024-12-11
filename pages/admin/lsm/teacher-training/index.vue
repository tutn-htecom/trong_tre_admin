<template>
    <div class="content-mp">

        <div class="service">

            <div class="w-100">

                <b-row>
                    <b-col cols="12" sm="7">
                        <div class="mb-7 ">
                            <div class="d-flex align-items-center">
                                <nuxt-link to="/admin/lsm/teacher-training">
                                    <button-filter active="active">Quản lý chương trình</button-filter>
                                </nuxt-link>
                                <nuxt-link to="/admin/lsm/result-training">
                                    <button-filter>Quản lý kết quả đào tạo</button-filter>
                                </nuxt-link>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div class="span-title mb-2">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.72003 12.6735L1.7067 12.6868C1.5267 12.2935 1.41337 11.8468 1.3667 11.3535C1.41337 11.8402 1.54003 12.2802 1.72003 12.6735Z"
                                            fill="#FC4D32" />
                                        <path
                                            d="M6.00024 6.91992C6.87653 6.91992 7.58691 6.20954 7.58691 5.33325C7.58691 4.45696 6.87653 3.74658 6.00024 3.74658C5.12395 3.74658 4.41357 4.45696 4.41357 5.33325C4.41357 6.20954 5.12395 6.91992 6.00024 6.91992Z"
                                            fill="#FC4D32" />
                                        <path
                                            d="M10.7935 1.3335H5.20683C2.78016 1.3335 1.3335 2.78016 1.3335 5.20683V10.7935C1.3335 11.5202 1.46016 12.1535 1.70683 12.6868C2.28016 13.9535 3.50683 14.6668 5.20683 14.6668H10.7935C13.2202 14.6668 14.6668 13.2202 14.6668 10.7935V9.26683V5.20683C14.6668 2.78016 13.2202 1.3335 10.7935 1.3335ZM13.5802 8.3335C13.0602 7.88683 12.2202 7.88683 11.7002 8.3335L8.92683 10.7135C8.40683 11.1602 7.56683 11.1602 7.04683 10.7135L6.82016 10.5268C6.34683 10.1135 5.5935 10.0735 5.06016 10.4335L2.56683 12.1068C2.42016 11.7335 2.3335 11.3002 2.3335 10.7935V5.20683C2.3335 3.32683 3.32683 2.3335 5.20683 2.3335H10.7935C12.6735 2.3335 13.6668 3.32683 13.6668 5.20683V8.40683L13.5802 8.3335Z"
                                            fill="#FC4D32" />
                                    </svg>
                                    <span class="span1">
                                        Ảnh đại diện <i>(Tối thiểu không quá 2mb)</i>
                                    </span>
                                </div>
                                <div class="card-img">
                                    <div class="box-img">
                                        <img :src="image" />
                                        <input type="file" hidden @change="handleFileChange" id="img" />
                                    </div>
                                    <div>
                                        <div class="cp mb-2" @click="delete_img()" v-b-tooltip.hover title="Xoá ảnh">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="16" cy="16" r="16" fill="#F2F2F2" />
                                                <g clip-path="url(#clip0_683_12860)">
                                                    <path
                                                        d="M16.0644 11.1534C18.1971 11.1534 20.3328 11.1594 22.4656 11.1475C22.7976 11.1475 22.9232 11.1802 22.8784 11.5789C22.6271 13.849 22.3639 16.1222 22.2113 18.4013C22.1246 19.6896 22.0199 20.9719 21.9152 22.2572C21.8554 22.9951 21.7925 23.4801 21.6609 24.2061C21.4904 25.1344 21.1076 26.0002 19.7555 25.9883C17.2818 25.9913 14.8081 25.9645 12.3373 26.0002C11.3203 26.0151 10.5157 25.8038 10.2794 24.2061C10.0131 22.412 9.44481 14.1019 9.44481 14.1019L9.21748 11.7157C9.21748 11.7157 9.15467 11.1534 9.70804 11.1534C11.8288 11.1534 13.9466 11.1534 16.0674 11.1534H16.0644ZM16.5789 18.55C16.5789 17.2736 16.5789 15.9972 16.5789 14.7208C16.5789 14.2983 16.3635 14.0305 16.0285 14.0216C15.6546 14.0127 15.3854 14.3072 15.3854 14.7387C15.3854 17.2766 15.3854 19.8145 15.3884 22.3554C15.3884 22.8047 15.6366 23.1052 15.9986 23.1171C16.3366 23.129 16.5729 22.8107 16.5729 22.3376C16.5729 21.0761 16.5729 19.8115 16.5729 18.55H16.5789ZM19.4654 18.5411C19.4654 17.2498 19.4654 15.9556 19.4654 14.6643C19.4654 14.4977 19.4863 14.331 19.3158 14.212C19.1244 14.0781 18.9449 13.9591 18.6966 14.0692C18.3796 14.209 18.2838 14.453 18.2868 14.7803C18.2958 17.2944 18.2958 19.8115 18.3018 22.3257C18.3018 22.8017 18.5321 23.1082 18.8821 23.1112C19.2321 23.1171 19.4714 22.8017 19.4714 22.3376C19.4714 21.0731 19.4714 19.8086 19.4714 18.5441L19.4654 18.5411ZM13.6923 18.5708C13.6923 17.2528 13.6923 15.9347 13.6923 14.6167C13.6923 14.218 13.5218 14.0305 13.1599 14.0246C12.8458 14.0186 12.5916 14.2686 12.5916 14.6167C12.5886 17.2379 12.5886 19.8621 12.5916 22.4834C12.5916 22.8583 12.8668 23.1409 13.1838 23.1082C13.5517 23.0695 13.7043 22.8702 13.6983 22.4863C13.6804 21.1832 13.6923 19.877 13.6923 18.5738V18.5708Z"
                                                        fill="#979797" />
                                                    <path
                                                        d="M15.9776 10.0553C13.7461 10.0553 11.5147 10.0553 9.28024 10.0553C8.58927 10.0553 8 9.51382 8 8.88008C8 8.29097 8.58628 7.72864 9.25631 7.72269C10.5844 7.71079 11.9125 7.70781 13.2406 7.72864C13.6085 7.73459 13.7222 7.63938 13.7042 7.26152C13.6713 6.59802 14.2786 6.01486 14.9576 6.00891C15.6366 6.00296 16.3156 6.04462 16.9916 5.99999C17.7035 5.95238 18.3436 6.6129 18.2868 7.23771C18.2509 7.63641 18.4124 7.73162 18.7893 7.72566C20.0755 7.70781 21.3617 7.74947 22.645 7.71674C23.5094 7.69591 24.3081 8.35048 23.8833 9.40076C23.7308 9.7816 23.312 10.0494 22.7616 10.0494C20.599 10.0494 18.4393 10.0494 16.2767 10.0494C16.178 10.0494 16.0793 10.0494 15.9806 10.0494L15.9776 10.0553Z"
                                                        fill="#979797" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_683_12860">
                                                        <rect width="16" height="20" fill="white"
                                                            transform="translate(8 6)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <label for="img" class="cp b-block" v-b-tooltip.hover title="Tải ảnh lên">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="16" cy="16" r="16" fill="#F2F2F2" />
                                                <path d="M10 11.3846L16 6M16 6L22 11.3846M16 6L16 13" stroke="#979797"
                                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M15 15V18.9375C15 19.4898 15.4477 19.9375 16 19.9375C16.5523 19.9375 17 19.4898 17 18.9375V15H23C24.1046 15 25 15.8954 25 17V22C25 23.1046 24.1046 24 23 24H9C7.89543 24 7 23.1046 7 22V17C7 15.8954 7.89543 15 9 15H15Z"
                                                    fill="#979797" />
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

<!--  -->

                        <div>
                            <b-row>
                                <b-col v-for="(item, n) in data?.khoaHoc" :key="n" cols="4" sm="3">
                                    <nuxt-link :to="'/admin/lsm/teacher-training/' + item?.id"
                                        class="card-service wow animate__animated animate__flipInY " v-b-tooltip.hover
                                        title="Bảo mẫu Pro">
                                        <div class="card-service-body">
                                            <div class="box-service-img">
                                                <img :src="item?.image" />

                                            </div>
                                            <div class="service-title">
                                                {{ item?.tieu_de }}
                                            </div>
                                        </div>
                                    </nuxt-link>
                                </b-col>

                                <b-col cols="12" v-if="data == null || data?.length == 0">
                                    <b-alert class="wow animate__animated animate__bounce" show dismissible
                                        variant="primary">Danh sách
                                        trống</b-alert>
                                </b-col>
                            </b-row>
                        </div>
                    </b-col>

                    <b-col cols="12" sm="7">
                        <div class="mt-3">
                            <button-add v-b-modal.my-modal>
                                <span class="mdi mdi-plus"></span> Thêm chương trình
                            </button-add>
                        </div>
                    </b-col>
                </b-row>


                <b-modal id="my-modal" ref="my-modal" hide-footer centered title="Thêm chương trình mới">
                    <!-- <template #modal-header="{ close }">
                            <h5>Thông báo</h5>
                        </template> -->
                    <template #default="{ hide }">
                        <form id="form" @submit="send_data">

                            <div class="my-4 pb-3">
                                <div>
                                    <b-form-group>
                                        <label>Ảnh:</label>
                                        <b-form-file name="image" accept="image/*" v-model="file" ref="file-input"
                                            id="file-large"></b-form-file>
                                    </b-form-group>
                                </div>
                                <div>
                                    <b-form-group>
                                        <label>Tên chương trình:</label>
                                        <b-form-input name="tieu_de" v-model="name" placeholder="Nhập tên"></b-form-input>
                                    </b-form-group>
                                </div>

                            </div>
                            <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                <button class=" btn-delete ms-1" type="submit">Thêm</button>
                            </div>
                        </form>

                    </template>
                </b-modal>

            </div>
        </div>

    </div>
</template>

<script>
import ButtonAdd from '~/components/button/ButtonAdd.vue';
import TitleHeader from '~/components/title/TitleHeader.vue';
// import { defineComponent } from '@vue/composition-api'
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    components: { TitleHeader, ButtonAdd },
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Đào tạo giáo viên',
                previous: '/admin/dashboard'
            },
            data: [],
            file: null,
            name: null,
            image: null,
        };
    },
    computed: {
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        async delete_img() {
            this.image = null;
            this.file = null;

            const formData = new FormData()

            await api.post('dao-tao/xoa-image', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.load_data();
                }
            })
        },
        async handleFileChange(event) {
            const img = event.target.files[0];
            this.file = img;
            if (await img) {
                this.image = URL.createObjectURL(img);
            }

            const formData = new FormData()
            formData.append('image', this.file)

            await api.post('dao-tao/cap-nhat-image', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.load_data();
                }
            })
        },
        changeLink() {
            console.log(this)
        },
        clearFiles() {
            this.$refs['file-input'].reset()
        },
        async load_data() {
            await api.get(`dao-tao/danh-sach?page=1&limit=30&sort=1&tuKhoa`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.data = res?.data?.data
                this.image = res?.data?.data?.image
            })
        },
        async send_data(event) {
            event.preventDefault();
            const formData = new FormData(document.getElementById('form'))
            await api.post('dao-tao/tao-moi', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal'].hide()
                    this.clearFiles();
                    this.name = null
                    this.load_data();
                }
            })
        },
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
        this.load_data()
    },
}
</script>

<style lang="scss" scoped>
.card-img {
    border-radius: 10px;
    border: 1px solid #E5E5E5;
    background: #FFF;
    padding: 15px;
    display: flex;
    justify-content: space-between;

    .box-img {
        width: 248px;
        height: 122px;
        border-radius: 10px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

.box-service-img {
    width: 56px;
    height: 56px;
    overflow: hidden;
    border-radius: 4px;

    img {
        width: 100%;
    }
}

.img-box {
    width: 187px;
    height: 143px;
    border-radius: 15px 15px 0px 0px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.card-service {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 0px 20px 0px rgba(0, 86, 177, 0.15);
    padding: 7px;
    overflow: hidden;
    display: block;
    margin: 10px 0 0px 0;
    height: 100%;
    max-height: 149px;

    .card-service-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        svg {
            margin-top: -10px;
        }
    }
}

.service-title {
    color: #2D2D2D;
    text-align: center;
    font-family: SVN-Gilroy;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    margin-top: 10px;
}
</style>