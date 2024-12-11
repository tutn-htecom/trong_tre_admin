<template>
    <div class="content-mp">
        <div class="support">
            <b-row>
                <b-col v-for="item in data" cols="12" sm="7" v-bind:key="item?.id">
                    <div>
                        <div class="mb-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.45202 13.3047C8.63518 13.3473 8.65196 13.5872 8.47356 13.6467L7.42023 13.9933C4.77356 14.8467 3.38023 14.1333 2.52023 11.4867L1.66689 8.85332C0.813561 6.20665 1.52023 4.80665 4.16689 3.95332L4.17756 3.94979C4.58042 3.81637 4.98127 4.22363 4.87926 4.63557C4.87288 4.6613 4.86654 4.68722 4.86023 4.71332L4.20689 7.50665C3.47356 10.6467 4.54689 12.38 7.68689 13.1267L8.45202 13.3047Z"
                                    fill="#FC4D32" />
                                <path
                                    d="M11.4465 2.14001L10.3331 1.88001C8.10646 1.35334 6.77979 1.78667 5.99979 3.40001C5.79979 3.80667 5.63979 4.30001 5.50646 4.86667L4.85313 7.66001C4.19979 10.4467 5.05979 11.82 7.83979 12.48L8.95979 12.7467C9.34646 12.84 9.70646 12.9 10.0398 12.9267C12.1198 13.1267 13.2265 12.1533 13.7865 9.74667L14.4398 6.96001C15.0931 4.17334 14.2398 2.79334 11.4465 2.14001ZM10.1931 8.88667C10.1331 9.11334 9.93313 9.26001 9.70646 9.26001C9.66646 9.26001 9.62646 9.25334 9.57979 9.24667L7.63979 8.75334C7.37313 8.68667 7.21313 8.41334 7.27979 8.14667C7.34646 7.88001 7.61979 7.72001 7.88646 7.78667L9.82646 8.28001C10.0998 8.34667 10.2598 8.62001 10.1931 8.88667ZM12.1465 6.63334C12.0865 6.86001 11.8865 7.00667 11.6598 7.00667C11.6198 7.00667 11.5798 7.00001 11.5331 6.99334L8.29979 6.17334C8.03313 6.10667 7.87313 5.83334 7.93979 5.56667C8.00646 5.30001 8.27979 5.14001 8.54646 5.20667L11.7798 6.02667C12.0531 6.08667 12.2131 6.36001 12.1465 6.63334Z"
                                    fill="#FC4D32" />
                            </svg>
                            <span class="title-support">
                                {{ item?.tieu_de }}
                            </span>
                        </div>

                        <div class="card-support">
                            <div class="card-support-body">
                                <div>
                                    <div class="link-youtube">
                                        {{ item?.link }}
                                    </div>
                                    <div class="support-img">
                                        <img src="@/static/images/banner/banner3.png" />
                                    </div>
                                </div>

                                <div class="d-flex justify-content-between flex-column align-items-center">
                                    <div @click="copy_link(item?.link)" class="btn-support-save copy-link cp"
                                        v-b-tooltip.hover title="Copy link">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.61204 14.5083L8.38796 15.7324C6.69786 17.4225 3.95767 17.4225 2.26757 15.7324C0.577475 14.0423 0.577476 11.3021 2.26757 9.61204L3.49165 8.38796M14.5083 9.61204L15.7324 8.38796C17.4225 6.69786 17.4225 3.95767 15.7324 2.26757C14.0423 0.577475 11.3021 0.577476 9.61204 2.26757L8.38796 3.49165M5.97056 12.0294L12.0294 5.97054"
                                                stroke="#979797" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </div>

                                    <div @click="edit_sp(item?.id)" class="cp" v-b-tooltip.hover title="Sửa">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15" cy="15" r="15" fill="white" fill-opacity="0.8" />
                                            <path
                                                d="M21.75 22.5H8.25C7.9425 22.5 7.6875 22.245 7.6875 21.9375C7.6875 21.63 7.9425 21.375 8.25 21.375H21.75C22.0575 21.375 22.3125 21.63 22.3125 21.9375C22.3125 22.245 22.0575 22.5 21.75 22.5Z"
                                                fill="#979797" />
                                            <path
                                                d="M20.2649 8.61024C18.8099 7.15524 17.3849 7.11774 15.8924 8.61024L14.9849 9.51774C14.9099 9.59274 14.8799 9.71274 14.9099 9.81774C15.4799 11.8052 17.0699 13.3952 19.0574 13.9652C19.0874 13.9727 19.1174 13.9802 19.1474 13.9802C19.2299 13.9802 19.3049 13.9502 19.3649 13.8902L20.2649 12.9827C21.0074 12.2477 21.3674 11.5352 21.3674 10.8152C21.3749 10.0727 21.0149 9.35274 20.2649 8.61024Z"
                                                fill="#979797" />
                                            <path
                                                d="M17.7073 14.6476C17.4898 14.5426 17.2798 14.4376 17.0773 14.3176C16.9123 14.2201 16.7548 14.1151 16.5973 14.0026C16.4698 13.9201 16.3198 13.8001 16.1773 13.6801C16.1623 13.6726 16.1098 13.6276 16.0498 13.5676C15.8023 13.3576 15.5248 13.0876 15.2773 12.7876C15.2548 12.7726 15.2173 12.7201 15.1648 12.6526C15.0898 12.5626 14.9623 12.4126 14.8498 12.2401C14.7598 12.1276 14.6548 11.9626 14.5573 11.7976C14.4373 11.5951 14.3323 11.3926 14.2273 11.1826C14.0896 10.8876 13.7024 10.8 13.4722 11.0302L9.25475 15.2476C9.15725 15.3451 9.06725 15.5326 9.04475 15.6601L8.63975 18.5326C8.56475 19.0426 8.70725 19.5226 9.02225 19.8451C9.29225 20.1076 9.66725 20.2501 10.0723 20.2501C10.1623 20.2501 10.2523 20.2426 10.3423 20.2276L13.2223 19.8226C13.3573 19.8001 13.5448 19.7101 13.6348 19.6126L17.8592 15.3882C18.0847 15.1626 18 14.7744 17.7073 14.6476Z"
                                                fill="#979797" />
                                        </svg>
                                    </div>

                                    <div @click="delete_item(item?.id, item?.id)" class="mb-3 btn-support-delete cp"
                                        v-b-tooltip.hover title="Xoá hướng dẫn này">
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
                                </div>
                            </div>
                        </div>

                        <hr class="support-hr" />
                    </div>
                </b-col>

                <b-col cols="12" sm="7">
                    <div class="my-0">
                        <button-add v-b-modal.my-modal>
                            <span class="mdi mdi-plus"></span> Thêm tài liệu
                        </button-add>
                    </div>
                    <!-- <div class="my-5">
                        <button-save>
                            Lưu thay đổi
                        </button-save>
                    </div> -->
                </b-col>

                <b-modal id="my-modal" ref="my-modal" hide-footer centered title="Thêm hướng dẫn mới">
                    <template #default="{ hide }">
                        <form id="form">

                            <div class="my-4 pb-3">
                                <div>
                                    <b-form-group>
                                        <label>Tiêu đề:</label>
                                        <b-form-input name="tieu_de" v-model="tieu_de"
                                            placeholder="Nhập tiêu đề"></b-form-input>
                                    </b-form-group>
                                </div>
                                <div>
                                    <b-form-group>
                                        <label>Link:</label>
                                        <b-form-input name="link" v-model="link"
                                            placeholder="Nhập đường dẫn"></b-form-input>
                                    </b-form-group>
                                </div>

                            </div>
                            <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                <button class=" btn-delete ms-1" @click="send_data">Thêm</button>
                            </div>
                        </form>

                    </template>
                </b-modal>


                <b-modal id="my-modal-edit" ref="my-modal-edit" hide-footer centered title="Sửa hướng dẫn">
                    <template #default="{ hide }">
                        <form id="form">

                            <div class="my-4 pb-3">
                                <div>
                                    <b-form-group>
                                        <label>Tiêu đề:</label>
                                        <b-form-input name="tieu_de" v-model="sua_tieu_de"
                                            placeholder="Nhập tiêu đề"></b-form-input>
                                    </b-form-group>
                                </div>
                                <div>
                                    <b-form-group>
                                        <label>Link:</label>
                                        <b-form-input name="link" v-model="sua_link"
                                            placeholder="Nhập đường dẫn"></b-form-input>
                                    </b-form-group>
                                </div>

                            </div>
                            <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                <button class=" btn-delete ms-1" @click="send_data_edit">Sửa</button>
                            </div>
                        </form>

                    </template>
                </b-modal>
            </b-row>
        </div>

    </div>
</template>

<script>
import CardItem from '@/components/card/CardItem.vue';
import ButtonAdd from '~/components/button/ButtonAdd.vue';
import ButtonSave from '~/components/button/ButtonComponent.vue';
import SUNEDITOR from 'suneditor'
import plugins from 'suneditor/src/plugins'
import 'suneditor/dist/css/suneditor.min.css'
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Hướng dẫn App',
                previous: '/admin/dashboard'
            },
            suneditorInstance: null,
            suneditorHotlineInstance: null,
            suneditorTutorialInstance: null,
            suneditorTutorialMoneyInstance: null,
            contents: 'Nhập nội dung giới thiệu',
            hotline: 'Nhập hotline',
            tutorial: 'Nhập nội dung',
            tutorial_money: 'Nhập nội dung',
            data: [],
            tieu_de: '',
            link: '',
            sua_id: null,
            sua_tieu_de: null,
            sua_link: null,
        };
    },
    computed: {
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        async edit_sp(id) {
            this.sua_id = id

            api.get(`he-thong/chi-tiet-huong-dan-app?id=` + id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.sua_tieu_de = res?.data?.data?.tieu_de
                this.sua_link = res?.data?.data?.link

                this.$refs['my-modal-edit'].show()

            })
        },
        async load_data() {
            await api.get('he-thong/danh-sach-huong-dan-app?tuKhoa', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.data = res?.data?.data ?? []
            })
        },
        async send_data_edit(event) {
            event.preventDefault();
            const formData = new FormData()
            formData.append('tieu_de', this.sua_tieu_de)
            formData.append('link', this.sua_link)
            formData.append('id', this.sua_id)

            await api.post('he-thong/sua-huong-dan-app', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-edit'].hide()
                    this.sua_tieu_de = null
                    this.sua_link = null
                    this.load_data();
                }
            })
        },
        async send_data(event) {
            event.preventDefault();
            const formData = new FormData()
            formData.append('tieu_de', this.tieu_de)
            formData.append('link', this.link)

            await api.post('he-thong/tao-moi-huong-dan-app', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal'].hide()
                    this.link = null
                    this.tieu_de = null
                    this.load_data();
                }
            })
        },
        copy_link(textToCopy) {
            const textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
            toastr.success('Đã sao chép nội dung');
        },
        async delete_item(user_id, name) {
            const formData = new FormData();
            formData.append('id', user_id)

            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: `Xoá hướng dẫn đã chọn!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Chắc chắn/Chấp nhận!',
                cancelButtonText: 'Huỷ'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.post('he-thong/xoa-huong-dan', formData, {
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
    },
    components: { CardItem, ButtonAdd, ButtonSave }
}
</script>

<style lang="scss" scoped>
.link-youtube {
    color: #0056B1;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 10px;
}

.support-hr {
    margin: 25px 0px 10px 0px;
}

.support-content {
    margin: 0px 0px;
}

.support-img {
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

.title-support {
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
    cursor: pointer;
    transition: 0.3s;

    &:hover path {
        color: rgb(140, 207, 228);
        stroke: rgb(140, 207, 228);
    }
}

.support-input {
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

.support-input:focus {
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

.card-support {
    border-radius: 10px;
    border: 1px solid #E5E5E5;
    background: #FFF;
    // width: 353px;
    height: 173px;
    padding: 12px;
    overflow: hidden;

    .card-support-body {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
    }
}

.btn-support-save {
    transition: 0.3s;
    cursor: pointer;
    // &:hover {
    //     stroke: rgb(30, 161, 236);
    //     transform: scale(1.05);
    // }
}

.btn-support-delete {
    cursor: pointer;
    transition: 0.3s;
    // &:hover {
    //     stroke: rgb(238, 50, 50);
    //     transform: scale(1.05);
    // }
}
</style>