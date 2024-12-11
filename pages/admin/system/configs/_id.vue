<template>
    <div class="content-mp">
        <div class="medias">
            <v-row class="">
                <v-col class="" xs="12" sm="12" md="7" lg="7" xl="7">
                    <div style="min-width: 245px;" class="">

                        <div>
                            <div>
                                <b-form-group>
                                    <label><b>Tiêu đề:</b></label>
                                    <b-form-input name="ck" disabled v-model="name"></b-form-input>
                                </b-form-group>
                            </div>
                        </div>
                        <div>
                            <b-form-group>
                                <div class="label">
                                    <span class="me-2">
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.0202 1.3335H5.98016C3.46016 1.3335 2.8335 2.00683 2.8335 4.6935V12.2002C2.8335 13.9735 3.80683 14.3935 4.98683 13.1268L4.9935 13.1202C5.54016 12.5402 6.3735 12.5868 6.84683 13.2202L7.52016 14.1202C8.06016 14.8335 8.9335 14.8335 9.4735 14.1202L10.1468 13.2202C10.6268 12.5802 11.4602 12.5335 12.0068 13.1202C13.1935 14.3868 14.1602 13.9668 14.1602 12.1935V4.6935C14.1668 2.00683 13.5402 1.3335 11.0202 1.3335ZM10.3935 6.66016L10.0602 7.00016H10.0535L8.0335 9.02016C7.94683 9.10683 7.76683 9.20016 7.64016 9.2135L6.74016 9.34683C6.4135 9.3935 6.18683 9.16016 6.2335 8.84016L6.36016 7.9335C6.38016 7.80683 6.46683 7.6335 6.5535 7.54016L8.58016 5.52016L8.9135 5.18016C9.1335 4.96016 9.38016 4.80016 9.64683 4.80016C9.8735 4.80016 10.1202 4.90683 10.3935 5.18016C10.9935 5.78016 10.8002 6.2535 10.3935 6.66016Z"
                                                fill="#00C092" />
                                        </svg>
                                    </span>
                                    Nội dung
                                </div>
                                <b-form-textarea id="textarea" placeholder="Enter something..." v-model="noi_dung"
                                    rows="7" max-rows="6"></b-form-textarea>
                                <!-- <textarea class="form-controll" v-model="noi_dung" id="sample"></textarea> -->
                            </b-form-group>
                        </div>


                        <div class="mt-6">
                            <form @submit="send_data">
                                <button-component typeBtn="submit">Lưu</button-component>
                            </form>
                        </div>

                        <!-- <div class="mt-6">
                            <div @click="delete_item(id, data?.tieu_de)">
                                <button-component addClass="silver">
                                    <svg class="me-2" width="16" height="18" viewBox="0 0 16 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.66667 1H10.3333M1 3.66667H15M13.4444 3.66667L12.899 13.0171C12.8172 14.42 12.7762 15.1215 12.5111 15.6533C12.2777 16.1216 11.9256 16.498 11.5013 16.7331C11.0193 17 10.4042 17 9.17394 17H6.82607C5.59582 17 4.98069 17 4.49871 16.7331C4.07437 16.498 3.72229 16.1216 3.48888 15.6533C3.22375 15.1215 3.18284 14.42 3.101 13.0171L2.55556 3.66667M6.44444 7.66667V12.1111M9.55556 7.66667V12.1111"
                                            stroke="#2D2D2D" stroke-width="1.3" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    Xóa bài viết
                                </button-component>
                            </div>
                        </div> -->

                    </div>
                </v-col>

            </v-row>
        </div>
    </div>
</template>

<script>
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
                name: 'Sửa cài đặt',
                previous: '/admin/system/configs'
            },
            type: null,
            selected: 1,
            options: [
                { value: 0, text: 'Mới nhất' },
                { value: 1, text: 'Hướng dẫn' },
                { value: 2, text: 'Giới thiệu' },
                { value: 3, text: 'Hoạt động' }
            ],
            suneditorInstance: null,
            noi_dung: 'Nhập nội dung',
            tieu_de: '',
            name: '',
            status: true,
            link: '',
            image: null,
            file: null,
            // noi_dung: '',
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
        async load_data() {
            await api.get('he-thong/get-cau-hinh?id=' + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                const user = res?.data?.data
                this.data = user

                this.noi_dung = user?.content
                this.title = user?.name
                this.name = user?.name

                this.suneditorInstance.setContents(user?.content);

            })
        },
        async send_data(event) {
            event.preventDefault();
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('content', this.noi_dung)

            await api.post('he-thong/cap-nhat-cau-hinh', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$router.push('/admin/system/configs');
                }
            })
        },
    },
    mounted() {

        // const editor = SUNEDITOR.create((document.getElementById('sample') || 'sample'), {
        //     toolbarContainer: '#toolbar_container',
        //     showPathLabel: false,
        //     charCounter: true,
        //     width: 'auto',
        //     height: 'auto',
        //     minHeight: '300px',
        //     maxHeight: '250px',
        //     plugins: plugins,
        //     buttonList: [
        //         ['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
        //         ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
        //         ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
        //         ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save']
        //     ],
        //     callBackSave: function (noi_dung, isChanged) {
        //         this.noi_dung = noi_dung
        //         console.log(noi_dung);
        //     },
        // });
        // this.suneditorInstance = editor; // Store the Suneditor instance in a component property

        // this.suneditorInstance.onChange = async (noi_dung, core) => {
        //     this.noi_dung = noi_dung;
        //     await console.log(this.noi_dung)
        // };
        //

        this.load_data()
        this.$store.dispatch('title/set_title', this.title);

    },
    components: {}
}
</script>

<style lang="scss" scoped>
.box-x {
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid #E5E5E5;
    background: #FFF;

    .box-img {
        overflow: hidden;
        height: 109px;
        border-radius: 10px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

.medias {
    i {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: italic;
        font-weight: 400;
        line-height: normal;
        margin-left: 7px;
    }

    .label {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    @media (max-width: 600px) {
        .btn-type {
            padding: 8px 25px;
            margin-right: 7px;
            margin-bottom: 7px;
        }
    }
}
</style>