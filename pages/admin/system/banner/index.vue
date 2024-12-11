<template>
    <div class="content-mp">
        <div class="banner">
            <div class="mb-7 d-none d-sm-block ">
                <div class="d-flex justify-content-between align-items-center">
                    <title-header>
                        Danh sách Banner
                    </title-header>
                    <button-add addClass="btn-header" v-b-modal.my-modal>
                        <span class="mdi mdi-plus"></span> Thêm banner
                    </button-add>
                </div>
            </div>

            <b-modal id="my-modal" ref="my-modal" hide-footer centered title="Thêm banner mới">
                <!-- <template #modal-header="{ close }">
                            <h5>Thông báo</h5>
                        </template> -->
                <template #default="{ hide }">
                    <form id="form" @submit="send_data">

                        <div class="my-4 pb-3">
                            <div>
                                <b-form-group>
                                    <label>Ảnh banner:</label>
                                    <b-form-file name="image" accept="image/*" v-model="file" ref="file-input"
                                        id="file-large"></b-form-file>
                                </b-form-group>
                            </div>
                            <div>
                                <b-form-group>
                                    <label>Link:</label>
                                    <b-form-input name="link" v-model="link" placeholder="Nhập đường dẫn"></b-form-input>
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

            <b-modal id="my-modal-edit" ref="my-modal-edit" hide-footer centered title="Sửa banner">
                <template #default="{ hide }">
                    <form >

                        <div class="my-4 pb-3">
                            <div>
                                <b-form-group>
                                    <label>Ảnh banner:</label>
                                    <b-form-file name="image" accept="image/*" v-model="edit_file" ref="file-input"
                                        id="file-large"></b-form-file>
                                </b-form-group>
                            </div>
                            <div>
                                <b-form-group>
                                    <label>Link:</label>
                                    <b-form-input name="link" v-model="edit_link" placeholder="Nhập đường dẫn"></b-form-input>
                                </b-form-group>
                            </div>

                        </div>
                        <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                            <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                            <button type="button"  class=" btn-delete ms-1" @click="submit_edit()">Sửa</button>
                        </div>
                    </form>

                </template>
            </b-modal>

            <b-row>
                <b-col cols="12" sm="12" md="6" lg="4" xl="3"
                    class="border-bottom-baner wow animate__animated animate__zoomIn" v-for="(item, index) in data"
                    :key="index">
                    <div>
                        <div class="mb-2">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.21954 12.6733L2.20621 12.6867C2.02621 12.2933 1.91288 11.8467 1.86621 11.3533C1.91288 11.84 2.03954 12.28 2.21954 12.6733Z"
                                    fill="#FC4D32" />
                                <path
                                    d="M6.49975 6.92C7.37604 6.92 8.08642 6.20962 8.08642 5.33333C8.08642 4.45704 7.37604 3.74667 6.49975 3.74667C5.62346 3.74667 4.91309 4.45704 4.91309 5.33333C4.91309 6.20962 5.62346 6.92 6.49975 6.92Z"
                                    fill="#FC4D32" />
                                <path
                                    d="M11.293 1.33333H5.70634C3.27967 1.33333 1.83301 2.78 1.83301 5.20667V10.7933C1.83301 11.52 1.95967 12.1533 2.20634 12.6867C2.77967 13.9533 4.00634 14.6667 5.70634 14.6667H11.293C13.7197 14.6667 15.1663 13.22 15.1663 10.7933V9.26667V5.20667C15.1663 2.78 13.7197 1.33333 11.293 1.33333ZM14.0797 8.33333C13.5597 7.88667 12.7197 7.88667 12.1997 8.33333L9.42634 10.7133C8.90634 11.16 8.06634 11.16 7.54634 10.7133L7.31967 10.5267C6.84634 10.1133 6.09301 10.0733 5.55967 10.4333L3.06634 12.1067C2.91967 11.7333 2.83301 11.3 2.83301 10.7933V5.20667C2.83301 3.32667 3.82634 2.33333 5.70634 2.33333H11.293C13.173 2.33333 14.1663 3.32667 14.1663 5.20667V8.40667L14.0797 8.33333Z"
                                    fill="#FC4D32" />
                            </svg>
                            <span class="title-banner">
                                Ảnh {{ index + 1 }} <i>(Tối thiểu không quá 2mb)</i>
                            </span>
                        </div>

                        <div class="card-banner">
                            <div class="card-banner-body">
                                <div class="banner-img">
                                    <img :src="item?.image" />
                                </div>

                                <div>
                                    <div class="mb-3 btn-banner-delete" v-b-tooltip.hover title="Xoá banner"
                                        @click="delete_item(item?.id, item?.id)">
                                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16" r="16" fill="#F2F2F2" />
                                            <g clip-path="url(#clip0_678_8713)">
                                                <path
                                                    d="M16.5639 11.1532C18.6966 11.1532 20.8323 11.1592 22.9651 11.1473C23.2971 11.1473 23.4227 11.18 23.3779 11.5787C23.1266 13.8489 22.8634 16.122 22.7108 18.4011C22.6241 19.6894 22.5194 20.9717 22.4147 22.2571C22.3549 22.9949 22.2921 23.4799 22.1604 24.2059C21.9899 25.1342 21.6071 26 20.255 25.9881C17.7813 25.9911 15.3076 25.9643 12.8368 26C11.8198 26.0149 11.0152 25.8036 10.7789 24.2059C10.5127 22.4118 9.94433 14.1018 9.94433 14.1018L9.71699 11.7156C9.71699 11.7156 9.65418 11.1532 10.2076 11.1532C12.3283 11.1532 14.4461 11.1532 16.5669 11.1532H16.5639ZM17.0784 18.5498C17.0784 17.2734 17.0784 15.997 17.0784 14.7206C17.0784 14.2981 16.863 14.0303 16.528 14.0214C16.1541 14.0125 15.8849 14.3071 15.8849 14.7385C15.8849 17.2764 15.8849 19.8143 15.8879 22.3553C15.8879 22.8045 16.1361 23.105 16.4981 23.1169C16.8361 23.1288 17.0724 22.8105 17.0724 22.3374C17.0724 21.0759 17.0724 19.8114 17.0724 18.5498H17.0784ZM19.9649 18.5409C19.9649 17.2496 19.9649 15.9554 19.9649 14.6641C19.9649 14.4975 19.9858 14.3309 19.8153 14.2118C19.6239 14.078 19.4444 13.9589 19.1961 14.069C18.8791 14.2089 18.7834 14.4528 18.7864 14.7801C18.7953 17.2943 18.7953 19.8114 18.8013 22.3255C18.8013 22.8015 19.0316 23.108 19.3816 23.111C19.7316 23.1169 19.9709 22.8015 19.9709 22.3374C19.9709 21.0729 19.9709 19.8084 19.9709 18.5439L19.9649 18.5409ZM14.1918 18.5707C14.1918 17.2526 14.1918 15.9345 14.1918 14.6165C14.1918 14.2178 14.0213 14.0303 13.6594 14.0244C13.3453 14.0184 13.0911 14.2684 13.0911 14.6165C13.0881 17.2377 13.0881 19.8619 13.0911 22.4832C13.0911 22.8581 13.3663 23.1407 13.6833 23.108C14.0513 23.0693 14.2038 22.87 14.1978 22.4862C14.1799 21.183 14.1918 19.8768 14.1918 18.5736V18.5707Z"
                                                    fill="#979797" />
                                                <path
                                                    d="M16.4776 10.0552C14.2461 10.0552 12.0147 10.0552 9.78024 10.0552C9.08927 10.0552 8.5 9.51374 8.5 8.88C8.5 8.29089 9.08628 7.72856 9.75631 7.72261C11.0844 7.71071 12.4125 7.70773 13.7406 7.72856C14.1085 7.73451 14.2222 7.6393 14.2042 7.26144C14.1713 6.59795 14.7786 6.01479 15.4576 6.00883C16.1366 6.00288 16.8156 6.04454 17.4916 5.99991C18.2035 5.9523 18.8436 6.61282 18.7868 7.23764C18.7509 7.63633 18.9124 7.73154 19.2893 7.72559C20.5755 7.70773 21.8617 7.74939 23.145 7.71666C24.0094 7.69583 24.8081 8.3504 24.3833 9.40068C24.2308 9.78152 23.812 10.0493 23.2616 10.0493C21.099 10.0493 18.9393 10.0493 16.7767 10.0493C16.678 10.0493 16.5793 10.0493 16.4806 10.0493L16.4776 10.0552Z"
                                                    fill="#979797" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_678_8713">
                                                    <rect width="16" height="20" fill="white"
                                                        transform="translate(8.5 6)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>

                                    <div class="btn-banner-save" @click="edit_item(item?.id, item?.link)" v-b-tooltip.hover title="Sửa banner">
                                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16" r="16" fill="#F2F2F2" />
                                            <path d="M10.5 11.3846L16.5 6M16.5 6L22.5 11.3846M16.5 6L16.5 13"
                                                stroke="#979797" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M15.5 15V18.9375C15.5 19.4898 15.9477 19.9375 16.5 19.9375C17.0523 19.9375 17.5 19.4898 17.5 18.9375V15H23.5C24.6046 15 25.5 15.8954 25.5 17V22C25.5 23.1046 24.6046 24 23.5 24H9.5C8.39543 24 7.5 23.1046 7.5 22V17C7.5 15.8954 8.39543 15 9.5 15H15.5Z"
                                                fill="#979797" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="input-title mt-3 mb-1">
                            Liên kết
                        </div>
                        <div class="position-relative">
                            <input placeholder="Nhập đường dẫn" disabled :value="item?.link" class="form-control banner-input"
                                type="text" />
                            <div class="copy-link" @click="copyText(item?.link)">
                                <svg  v-b-tooltip.hover title="Copy link" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.86204 14.5083L8.63796 15.7324C6.94786 17.4225 4.20767 17.4225 2.51757 15.7324C0.827475 14.0423 0.827476 11.3021 2.51757 9.61204L3.74165 8.38796M14.7583 9.61204L15.9824 8.38796C17.6725 6.69786 17.6725 3.95767 15.9824 2.26757C14.2923 0.577475 11.5521 0.577476 9.86204 2.26757L8.63796 3.49165M6.22056 12.0294L12.2794 5.97054"
                                        stroke="#979797" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </b-col>

                <v-col v-if="data == null || data?.length == 0">
                    <b-alert class="wow animate__animated animate__flash" show dismissible variant="primary">Danh sách trống</b-alert>
                </v-col>
            </b-row>

            <div class="my-5 d-sm-none">
                <button-add v-b-modal.my-modal>
                    <span class="mdi mdi-plus"></span> Thêm banner
                </button-add>
            </div>
        </div>

    </div>
</template>

<script>
import CardItem from '@/components/card/CardItem.vue';
import ButtonAdd from '~/components/button/ButtonAdd.vue';
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Banner App',
                previous: '/admin/dashboard'
            },
            data: null,
            file: null,
            link: null,
            edit_link: null,
            edit_file: null,
            edit_id: null,
        };
    },
    computed: {
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        clearFiles() {
            this.$refs['file-input'].reset()
        },
        copyText(textToCopy) {
            const textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
            toastr.success('Đã sao chép nội dung');
            // alert("Đã sao chép nội dung: " + textToCopy);
        },
        edit_item (id, link) {
            this.edit_link = link
            this.edit_id = id
            this.$refs['my-modal-edit'].show()
        },
        async submit_edit () {
            const formData = new FormData()
            formData.append('banner_id', this.edit_id)
            formData.append('image', this.edit_file)
            formData.append('link', this.edit_link)

            await api.post('he-thong/sua-banner', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-edit'].hide()
                    this.clearFiles();
                    this.edit_link = null
                    this.edit_id = null
                    this.edit_file = null
                    this.load_data();
                }
            })
        },
        async load_data() {
            await api.get('he-thong/danh-sach?page=1&limit=40&sort=1&tuKhoa=', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.data = res?.data?.data
            })
        },
        async send_data(event) {
            event.preventDefault();
            const formData = new FormData(document.getElementById('form'))
            await api.post('he-thong/them-moi-banner', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal'].hide()
                    this.clearFiles();
                    this.link = null
                    this.load_data();
                }
            })
        },
        async delete_item(user_id, name) {
            const formData = new FormData();
            formData.append('banner_id', user_id)

            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: `Xoá banner đã chọn!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Chắc chắn/Chấp nhận!',
                cancelButtonText: 'Huỷ'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.post('he-thong/xoa-banner', formData, {
                        'Content-Type': 'multipart/form-data',
                        Authorization: 'Bearer ' + this.token
                    }).then(res => {
                        if (res?.status == 200) {
                            // toastr.success(res?.data?.message);
                            Swal.fire(
                                'Đã xoá!',
                                res?.data?.message,
                                'success'
                            )
                            this.load_data()
                            this.load_role()
                        } else {
                            toastr.error(res?.data?.message);
                        }
                    })

                }
            })

        },
        async updateFilter(filter) {
            this.selectedFilter = await filter ?? '';
            await this.load_data()
        }
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
        this.load_data()
    },
    components: { CardItem, ButtonAdd }
}
</script>

<style lang="scss" scoped>
.banner-img {
    height: 122px;
    width: 217px;
    border-radius: 10px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.title-banner {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    i {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: italic;
        font-weight: 400;
        line-height: normal;
    }
}

.border-bottom-baner {
    border-bottom: 1px solid #E5E5E5;
    margin-bottom: 10px;
    padding-bottom: 25px;
}

.copy-link {
    position: absolute;
    top: 5px;
    right: 11px;
    cursor: pointer;
    transition: 0.3s;

    &:hover path {
        color: rgb(140, 207, 228);
        stroke: rgb(140, 207, 228);
    }
}

.banner-input {
    border-radius: 10px;
    border: 1px solid #E5E5E5;
    background: #FFF;
    color: rgba(45, 45, 45, 0.60);
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 12px 10px;
    width: 100%;
    transition: 0.3s;
}

.banner-input:focus {
    border: 1px solid #83d8e7;
}

.input-title {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.card-banner {
    border-radius: 10px;
    border: 1px solid #E5E5E5;
    background: #FFF;
    // width: 353px;
    height: 150px;
    padding: 12px;
    overflow: hidden;

    .card-banner-body {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
    }
}

.btn-banner-save {
    transition: 0.3s;
    cursor: pointer;
    // &:hover {
    //     stroke: rgb(30, 161, 236);
    //     transform: scale(1.05);
    // }
}

.btn-banner-delete {
    cursor: pointer;
    transition: 0.3s;
    // &:hover {
    //     stroke: rgb(238, 50, 50);
    //     transform: scale(1.05);
    // }
}
</style>