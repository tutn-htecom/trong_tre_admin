<template>
    <div class="content-mp">

        <div class="service">

            <div class="w-100">

                <b-row>
                    <b-col cols="12" sm="7">
                        <div class="mb-7 ">
                            <div class="d-flex justify-content-between align-items-center">
                                <title-header>
                                    Danh sách chương trình
                                </title-header>
                            </div>
                        </div>
                        <div>
                            <b-row>
                                <b-col v-for="(item, n) in data" :key="n" cols="4" sm="3">
                                    <nuxt-link :to="'/admin/lsm/students/' + item?.id"
                                        class="card-service wow animate__animated animate__flipInY " v-b-tooltip.hover
                                        title="Bảo mẫu Pro">
                                        <div class="card-service-body">
                                            <div class="box-service-img">
                                                <img :src="item?.image" />

                                            </div>
                                            <div class="service-title">
                                                {{ item?.ten_dich_vu }}
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
                        <div class="mt-3" @click="create_new()">
                            <button-add>
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
                name: 'Chương trình học',
                previous: '/admin/dashboard'
            },
            data: [],
            file: null,
            name: null,
        };
    },
    computed: {
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        changeLink() {
            console.log(this)
        },
        clearFiles() {
            this.$refs['file-input'].reset()
        },
        create_new() {
            this.$router.push('/admin/lsm/students/create')
        },
        async load_data() {
            await api.get(`chuong-trinh-hoc/danh-sach-chuong-trinh?page=1&limit=100&tuKhoa=&sort=1`, {
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
            await api.post('chuong-trinh-hoc/tao-moi', formData, {
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
.box-service-img {
    width: 56px;
    height: 56px;
    overflow: hidden;
    border-radius: 4px;

    img {
        width: 100%;
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
    max-height: 153px;

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