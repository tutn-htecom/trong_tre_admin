<template>
    <div class="content-mp">
        <div class="banner">
            <div class="mb-7 d-none d-sm-block ">
                <div class="d-flex justify-content-between align-items-center">
                    <title-header>
                        Cấu hình
                    </title-header>
                </div>
            </div>

            <b-row>
                <b-col cols="12" sm="12" class="border-bottom-baner wow animate__animated animate__zoomIn">
                    <div>
                        <b-form-group>
                            <label>{{ data?.chiet_khau_don?.name }}:</label>
                            <b-form-input name="ck" type="number" min="0" max="100"
                                v-model="chiet_khau_don"></b-form-input>
                        </b-form-group>
                    </div>
                </b-col>
                <b-col cols="12" sm="12" class="border-bottom-baner wow animate__animated animate__zoomIn">
                    <div>
                        <b-form-group>
                            <label>{{ data?.phu_phi_them_gio?.name }}:</label>
                            <b-form-input name="ck" type="number" min="0" max="100"
                                v-model="phu_phi_them_gio"></b-form-input>
                        </b-form-group>
                    </div>
                </b-col>
                <b-col cols="12" sm="12" class="border-bottom-baner wow animate__animated animate__zoomIn">
                    <div>
                        <b-form-group>
                            <label>{{ data?.phu_thu_an_trua?.name }}:</label>
                            <b-form-input name="ck" type="number" min="0" max="100"
                                v-model="phu_thu_an_trua"></b-form-input>
                        </b-form-group>
                    </div>
                </b-col>
                <b-col cols="12" sm="12" class="border-bottom-baner wow animate__animated animate__zoomIn">
                    <div>
                        <b-form-group>
                            <label>{{ data?.phu_thu_them_tre?.name }}:</label>
                            <b-form-input name="ck" type="number" min="0" max="100"
                                v-model="phu_thu_them_tre"></b-form-input>
                        </b-form-group>
                    </div>
                </b-col>
                <b-col cols="12" sm="12" class="border-bottom-baner wow animate__animated animate__zoomIn">
                    <div>
                        <b-form-group>
                            <label>{{ data?.phu_cap_them?.name }}:</label>
                            <b-form-input name="ck" type="number" min="0" max="100"
                                v-model="phu_cap_them"></b-form-input>
                        </b-form-group>
                    </div>
                </b-col>
            </b-row>

            <div class="my-5" @click="send_data()">
                <button-add>
                    <span class="mdi mdi-plus"></span> Lưu thông tin
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
                name: 'Cấu hình',
                previous: '/admin/dashboard'
            },
            data: null,
            file: null,
            link: null,
            edit_link: null,
            edit_file: null,
            ck: null,
            id: 0,
            chiet_khau_don: null,
            chiet_khau_don_id: 0,
            phu_cap_them: null,
            phu_cap_them_id: 0,
            phu_phi_them_gio: null,
            phu_phi_them_gio_id: 0,
            phu_thu_an_trua: null,
            phu_thu_an_trua_id: 0,
            phu_thu_them_tre: null,
            phu_thu_them_tre_id: 0,

        };
    },
    computed: {
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        async submit_edit() {
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
            await api.get('he-thong/get-chiet-khau', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.data = res?.data?.data
                this.chiet_khau_don = this.data?.chiet_khau_don?.content
                this.chiet_khau_don_id = this.data?.chiet_khau_don?.id
                this.phu_cap_them = this.data?.phu_cap_them?.content
                this.phu_cap_them_id = this.data?.phu_cap_them?.id
                this.phu_phi_them_gio = this.data?.phu_phi_them_gio?.content
                this.phu_phi_them_gio_id = this.data?.phu_phi_them_gio?.id
                this.phu_thu_an_trua = this.data?.phu_thu_an_trua?.content
                this.phu_thu_an_trua_id = this.data?.phu_thu_an_trua?.id
                this.phu_thu_them_tre = this.data?.phu_thu_them_tre?.content
                this.phu_thu_them_tre_id = this.data?.phu_thu_them_tre?.id
                // this.ck = this.data?.content ?? 0
                // this.id = this.data?.id ?? 0
                setTimeout(function () {
                    this.id = 1
                }, 1500)
            })
        },
        async send_data() {
            // console.log(this.id)
            // if (this.id != 0) {

                var formData = new FormData()
                formData.append('content', this.chiet_khau_don)
                formData.append('id', this.chiet_khau_don_id)

                await api.post('he-thong/save-chiet-khau', formData, {
                    'Content-Type': 'multipart/form-data',
                    Authorization: 'Bearer ' + this.token
                }).then(res => {
                    if (res?.status == 200) {
                        // toastr.success(res?.data?.message);
                        // this.load_data();
                        // setTimeout(function () {
                        //     window.location.reload()
                        // }, 2500)
                    }
                })
                var formData = new FormData()
                formData.append('content', this.phu_cap_them)
                formData.append('id', this.phu_cap_them_id)

                await api.post('he-thong/save-chiet-khau', formData, {
                    'Content-Type': 'multipart/form-data',
                    Authorization: 'Bearer ' + this.token
                }).then(res => {
                    if (res?.status == 200) {
                        // toastr.success(res?.data?.message);
                        // this.load_data();
                    }
                })
                var formData = new FormData()
                formData.append('content', this.phu_phi_them_gio)
                formData.append('id', this.phu_phi_them_gio_id)

                await api.post('he-thong/save-chiet-khau', formData, {
                    'Content-Type': 'multipart/form-data',
                    Authorization: 'Bearer ' + this.token
                }).then(res => {
                    if (res?.status == 200) {
                        // toastr.success(res?.data?.message);
                        // this.load_data();
                    }
                })
                var formData = new FormData()
                formData.append('content', this.phu_thu_an_trua)
                formData.append('id', this.phu_thu_an_trua_id)

                await api.post('he-thong/save-chiet-khau', formData, {
                    'Content-Type': 'multipart/form-data',
                    Authorization: 'Bearer ' + this.token
                }).then(res => {
                    if (res?.status == 200) {
                        // toastr.success(res?.data?.message);
                        // this.load_data();
                    }
                })
                var formData = new FormData()
                formData.append('content', this.phu_thu_them_tre)
                formData.append('id', this.phu_thu_them_tre_id)

                await api.post('he-thong/save-chiet-khau', formData, {
                    'Content-Type': 'multipart/form-data',
                    Authorization: 'Bearer ' + this.token
                }).then(res => {
                    if (res?.status == 200) {
                        // toastr.success(res?.data?.message);
                        this.load_data();
                    }
                })

                toastr.success("Đã sửa thành công");
            // }

        },
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
        this.load_data()
    },
    components: { CardItem, ButtonAdd },
    // watch: {
    //     chiet_khau_don() {
    //         this.send_data(this.chiet_khau_don_id, this.chiet_khau_don)
    //     },
    //     phu_cap_them() {
    //         this.send_data(this.phu_cap_them_id, this.phu_cap_them)
    //     },
    //     phu_phi_them_gio() {
    //         this.send_data(this.phu_phi_them_gio_id, this.phu_phi_them_gio)
    //     },
    //     phu_thu_an_trua() {
    //         this.send_data(this.phu_thu_an_trua_id, this.phu_thu_an_trua)
    //     },
    //     phu_thu_them_tre() {
    //         this.send_data(this.phu_thu_them_tre_id, this.phu_thu_them_tre)
    //     },
    // }
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

.btn-banner-devare {
    cursor: pointer;
    transition: 0.3s;
    // &:hover {
    //     stroke: rgb(238, 50, 50);
    //     transform: scale(1.05);
    // }
}
</style>