<template>
    <div class="content-mp">
        <div class="educational-ecosystem">
            <b-row>
                <b-col cols="12" sm="7">
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
                            <span class="title-educational-ecosystem">
                                Ảnh đại diện <i>(Tối thiểu không quá 2mb)</i>
                            </span>
                        </div>

                        <div class="card-educational-ecosystem">
                            <div class="card-educational-ecosystem-body">
                                <div class="educational-ecosystem-img">
                                    <img :src="image" />
                                </div>

                                <div>
                                    <input type="file" hidden @change="handleFileChange" id="img" />
                                    <label @click="delete_img()" class="d-block mb-3 btn-educational-ecosystem-delete"
                                        v-b-tooltip.hover title="Xoá ảnh">
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
                                    </label>

                                    <label for="img" class="d-block btn-educational-ecosystem-save" v-b-tooltip.hover
                                        title="Tải ảnh lên">
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
                                    </label>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="input-title mt-3 mb-1">
                            Gán liên kết
                        </div>
                        <div class="position-relative">
                            <input placeholder="Nhập đường dẫn" class="form-control educational-ecosystem-input" type="text" />
                            <div class="copy-link">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.86204 14.5083L8.63796 15.7324C6.94786 17.4225 4.20767 17.4225 2.51757 15.7324C0.827475 14.0423 0.827476 11.3021 2.51757 9.61204L3.74165 8.38796M14.7583 9.61204L15.9824 8.38796C17.6725 6.69786 17.6725 3.95767 15.9824 2.26757C14.2923 0.577475 11.5521 0.577476 9.86204 2.26757L8.63796 3.49165M6.22056 12.0294L12.2794 5.97054"
                                        stroke="#979797" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div> -->
                    </div>

                    <div class="mt-7">
                        <div class="mb-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.5197 1.33333H5.47967C2.95967 1.33333 2.33301 2.00666 2.33301 4.69333V12.2C2.33301 13.9733 3.30634 14.3933 4.48634 13.1267L4.49301 13.12C5.03967 12.54 5.87301 12.5867 6.34634 13.22L7.01967 14.12C7.55967 14.8333 8.43301 14.8333 8.97301 14.12L9.64634 13.22C10.1263 12.58 10.9597 12.5333 11.5063 13.12C12.693 14.3867 13.6597 13.9667 13.6597 12.1933V4.69333C13.6663 2.00666 13.0397 1.33333 10.5197 1.33333ZM9.89301 6.66L9.55967 7H9.55301L7.53301 9.01999C7.44634 9.10666 7.26634 9.2 7.13967 9.21333L6.23967 9.34666C5.91301 9.39333 5.68634 9.16 5.73301 8.84L5.85967 7.93333C5.87967 7.80666 5.96634 7.63333 6.05301 7.54L8.07967 5.51999L8.41301 5.18C8.63301 4.96 8.87967 4.79999 9.14634 4.79999C9.37301 4.79999 9.61967 4.90666 9.89301 5.18C10.493 5.77999 10.2997 6.25333 9.89301 6.66Z"
                                    fill="#0056B1" />
                            </svg>
                            <span class="title-educational-ecosystem">
                                Nội dung
                            </span>
                        </div>

                        <div class="educational-ecosystem-content">
                            <div>
                                <textarea v-model="contents" id="sample"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="my-7">
                        <form @submit="send_data">
                            <button-save typeBtn="submit">
                                Lưu thay đổi
                            </button-save>
                        </form>
                    </div>
                </b-col>
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
                name: 'Hệ sinh thái giáo dục',
                previous: '/admin/dashboard'
            },
            suneditorInstance: null,
            contents: 'Nhập nội dung',
            image: null,
            file: null,
        };
    },
    computed: {
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        delete_img() {
            this.image = null;
            this.file = null;
        },
        handleFileChange(event) {
            const img = event.target.files[0];
            this.file = img;
            if (img) {
                this.image = URL.createObjectURL(img);
            }
        },
        async load_data() {
            await api.get('he-thong/he-sinh-thai', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                const user = res?.data?.data
                this.data = user
                this.image = user?.image
                this.contents = user?.content
                this.suneditorInstance.setContents(user?.content);
            })
        },
        async send_data(event) {
            event.preventDefault();
            const formData = new FormData()
            formData.append('image', this.file)
            formData.append('content', this.contents)

            await api.post('he-thong/cap-nhat-he-sinh-thai', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.load_data()
                }
            })
        },
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);

        const editor = SUNEDITOR.create((document.getElementById('sample') || 'sample'), {
            toolbarContainer: '#toolbar_container',
            showPathLabel: false,
            charCounter: true,
            width: 'auto',
            height: 'auto',
            minHeight: '300px',
            maxHeight: '250px',
            plugins: plugins,
            buttonList: [
                ['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
                ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
                ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
                ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save']
            ],
            callBackSave: function (contents, isChanged) {
                this.contents = contents
                console.log(contents);
            },
        });
        this.suneditorInstance = editor; // Store the Suneditor instance in a component property

        this.suneditorInstance.onChange = async (contents, core) => {
            this.contents = contents;
            await console.log(this.contents)
        };

        this.load_data();
    },
    components: { CardItem, ButtonAdd, ButtonSave }
}
</script>

<style lang="scss" scoped>
.educational-ecosystem-content {
    margin: 0px 0px;
}

.educational-ecosystem-img {
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

.title-educational-ecosystem {
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

.educational-ecosystem-input {
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

.educational-ecosystem-input:focus {
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

.card-educational-ecosystem {
    border-radius: 10px;
    border: 1px solid #E5E5E5;
    background: #FFF;
    // width: 353px;
    height: 150px;
    padding: 12px;
    overflow: hidden;

    .card-educational-ecosystem-body {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
    }
}

.btn-educational-ecosystem-save {
    transition: 0.3s;
    cursor: pointer;
    // &:hover {
    //     stroke: rgb(30, 161, 236);
    //     transform: scale(1.05);
    // }
}

.btn-educational-ecosystem-delete {
    cursor: pointer;
    transition: 0.3s;
    // &:hover {
    //     stroke: rgb(238, 50, 50);
    //     transform: scale(1.05);
    // }
}
</style>