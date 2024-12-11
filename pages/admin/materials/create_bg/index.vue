<template>
    <div class="content-mp">
        <div class="materials">
            <v-row class="">
                <v-col class="" xs="12" sm="12" md="7" lg="7" xl="7">
                    <div style="min-width: 245px;" class=" wow animate__animated animate__zoomIn">
                        <div>
                            <div>
                                <label for="example-datepicker">Ngày nhận</label>
                                <b-form-datepicker id="example-datepicker" locale="vi" v-model="ngay_nhan"
                                    class="mb-2"></b-form-datepicker>
                            </div>
                        </div>

                        <div>
                            <div class="mt-4">
                                <div>
                                    <span>Giáo viên</span>
                                </div>
                                <v-autocomplete v-model="phu_huynh_id" :disabled="isUpdating" :items="phu_huynh" filled
                                    chips color="blue-grey lighten-2" label="" item-text="name" item-value="group">
                                    <template v-slot:selection="data">
                                        <div class="d-flex">
                                            <v-avatar left>
                                                <v-img :src="data.item.avatar"></v-img>
                                            </v-avatar>
                                            <div class="ms-2">
                                                <div class="mt-2">
                                                    <b>{{ data.item.name }}</b>
                                                </div>
                                                <div>
                                                    <span class="blade-id"># {{ data.item.group }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                    <template v-slot:item="data">
                                        <template v-if="typeof data.item !== 'object'">
                                            <v-list-item-content v-text="data.item"></v-list-item-content>
                                        </template>
                                        <template v-else>
                                            <v-list-item-avatar>
                                                <img :src="data.item.avatar">
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title v-html="data.item.name"></v-list-item-title>
                                                <v-list-item-subtitle v-html="data.item.group"></v-list-item-subtitle>
                                            </v-list-item-content>
                                        </template>
                                    </template>
                                </v-autocomplete>
                            </div>
                        </div>

                        <div>
                            <div class="mt-2">
                                <div>
                                    <span>Đơn dịch vụ</span>
                                </div>
                                <v-autocomplete v-model="item_id" :disabled="isUpdating" :items="items" filled chips
                                    color="blue-grey lighten-2" label="" item-text="name" item-value="id">
                                    <template v-slot:selection="data">
                                        <div class="d-flex">
                                            <div class="ms-2">
                                                <div class="mt-2">
                                                    <b>{{ data.item.name }}</b>
                                                </div>
                                                <div>
                                                    <!-- <span class="blade-id"># {{ data.item.name }}</span> -->
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                    <template v-slot:item="data">
                                        <template v-if="typeof data.item !== 'object'">
                                            <v-list-item-content v-text="data.item"></v-list-item-content>
                                        </template>
                                        <template v-else>
                                            <v-list-item-content>
                                                <v-list-item-title v-html="data.item.name"></v-list-item-title>
                                                <!-- <v-list-item-subtitle v-html="data.item.id"></v-list-item-subtitle> -->
                                            </v-list-item-content>
                                        </template>
                                    </template>
                                </v-autocomplete>
                            </div>
                        </div>

                        <div>
                            <b-form-group id="input-group-1" label="Ghi chú:" label-for="input-1" description="">
                                <b-form-input id="input-1" v-model="ghi_chu" type="text" placeholder=""
                                    required></b-form-input>
                            </b-form-group>
                        </div>

                        <div class="mt-4">
                            <strong class="strong-title">
                                <span class="me-2">
                                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.91455 9.13117C10.3871 8.79446 11.0078 9.16177 11.0078 9.77397V10.7611C11.0078 11.733 10.3095 12.7737 9.4702 13.0798L7.2202 13.891C6.82521 14.0363 6.18336 14.0363 5.79543 13.891L3.54543 13.0798C2.69904 12.7737 2.00781 11.733 2.00781 10.7611V9.76631C2.00781 9.16177 2.6285 8.79446 3.09402 9.12351L4.547 10.1489C5.10421 10.5545 5.80954 10.7535 6.51487 10.7535C7.2202 10.7535 7.92552 10.5545 8.48273 10.1489L9.91455 9.13117Z"
                                            fill="#FFB761" />
                                        <path
                                            d="M12.0284 3.13048L7.88967 0.373553C7.14346 -0.124518 5.91359 -0.124518 5.16738 0.373553L1.00794 3.13048C-0.325564 4.00737 -0.325564 5.99263 1.00794 6.87653L2.11344 7.6061L5.16738 9.62645C5.91359 10.1245 7.14346 10.1245 7.88967 9.62645L10.9229 7.6061L11.8695 6.97474V9.12136C11.8695 9.40898 12.1044 9.64749 12.3877 9.64749C12.6709 9.64749 12.9059 9.40898 12.9059 9.12136V5.66994C13.1822 4.76499 12.899 3.71273 12.0284 3.13048Z"
                                            fill="#FFB761" />
                                    </svg>
                                </span>
                                <span>Giáo cụ bàn giao</span>
                            </strong>

                            <div>
                            <div class="my-3 w-100 wow animate__animated animate__zoomIn" v-for="(item, n) in giao_cu" v-bind:key="n">
                                <v-card>
                                    <v-card-text>
                                        <div>
                                            <strong>
                                                <b>
                                                    ID giáo cụ: {{ item?.id }}
                                                </b>
                                            </strong>
                                        </div>
                                        <div class="mt-3">
                                            <p>
                                                <b>Số lượng: </b> <span>{{ item?.so_luong }}</span>
                                            </p>

                                        </div>
                                    </v-card-text>
                                </v-card>
                            </div>
                        </div>



                            <div class="w-100 mt-4 mb-4">
                                <button class="btn-add-le" v-b-modal.my-modal>
                                    <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                        viewBox="0 0 13 13" fill="none">
                                        <path d="M6.5 1V12M1 6.5H12" stroke="#4EAEEA" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Thêm giáo cụ bàn giao
                                </button>
                            </div>

                            <b-modal id="my-modal" ref="my-modal" hide-footer centered title="Thêm giáo cụ bàn giao">
                                <template #default="{ hide }">
                                    <div>

                                        <div class="my-2">

                                            <div>
                                                <b-form-select v-model="selected" :options="types" class="mb-3">
                                                </b-form-select>
                                            </div>
                                            <div>
                                                <b-form-group>
                                                    <label>Nhập số lượng:</label>
                                                    <b-form-input type="number" min="0" name="link" v-model="so_luong"
                                                        placeholder="Nhập số lượng"></b-form-input>
                                                </b-form-group>
                                            </div>

                                        </div>
                                        <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                            <button class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                            <button class=" btn-delete ms-1" @click="add_benefit()">Thêm</button>
                                        </div>
                                    </div>

                                </template>
                            </b-modal>
                        </div>

                        <div class="mt-7">
                            <form id="form" @submit="send_data">
                                <button-component typeBtn="submit">
                                    Xác nhận
                                </button-component>
                            </form>
                        </div>

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
                name: 'Tạo bàn giao',
                previous: '/admin/materials'
            },
            code: null,
            so_luong_tong: null,
            so_luong_ton: null,
            ghi_chu: null,
            file: null,
            phu_huynh_id: null,
            phu_huynh: [],
            isUpdating: false,
            loading: false,
            items: [],
            item_id: null,
            search: null,
            select: null,
            ngay_nhan: null,
            types: [],
            selected: 0,
            so_luong: 0,
            giao_cu: [],
            clearFiles() {
                this.$refs['file-input'].reset()
            }
        };
    },
    computed: {
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        add_benefit() {
            if (this.selected == '') {
                toastr.error('Bạn cần nhập đầy đủ thông tin');
                return
            }
            const newId = this.giao_cu.length + 1;
            this.giao_cu.push({ id: this.selected, so_luong: this.so_luong});
            this.selected = ''
            this.so_luong = 0
            this.$refs['my-modal'].hide()
        },
        async send_data(event) {
            event.preventDefault();
            const formData = new FormData()
            formData.append('giao_vien_id', this.phu_huynh_id)
            formData.append('don_dich_vu_id', this.item_id)
            formData.append('ghi_chu', this.ghi_chu)
            formData.append('ngay_nhan', this.ngay_nhan)

            this.giao_cu.forEach((value, key) => {
                formData.append(`giaoCu[${key}][id]`, value.id)
                formData.append(`giaoCu[${key}][so_luong]`, value.so_luong)
            });

            await api.post('giao-cu/tao-moi-ban-giao', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$router.push('/admin/materials');
                }
            })
        },
        async load_data() {
            await api.get('giao-vien/danh-sach?tuKhoa=&trinh_do=26&page=1&limit=1005&sort=1', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.phu_huynh = res?.data?.data?.users.map(item => {
                    return {
                        group: item?.id,
                        name: item?.hoten ?? (item?.id + ' - Chưa cập nhât tên'),
                        avatar: item?.anh_nguoi_dung,
                    };
                })
                this.phu_huynh_id = this.phu_huynh[0].group
            })

            await api.get('giao-cu/danh-sach?page=1&limit=100000&sort=1&tuKhoa=', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.types = res?.data?.data.map(item => {
                    return {
                        value: item.id,
                        text: item.code + " (Tồn" + ": " + item.so_luong_ton + ")"
                    };
                })
                this.selected = this.types[0].value
            })
        },
        async querySelections() {

        },
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);

        this.load_data();
    },
    components: {},
    watch: {
        search(val) {
            val && val !== this.select && this.querySelections()
        },
        phu_huynh_id() {
            api.get('don-dich-vu/danh-sach-don-dich-vu-full?giao_vien_id=' + this.phu_huynh_id +'&trang_thai=&tuKhoa=' + this.search, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.items = res?.data?.data.map(item => {
                    return {
                        id: item?.id,
                        name: item?.ma_don_hang ?? (item?.id + ' - Chưa cập nhât'),
                    };
                })
                // this.phu_huynh_id = this.phu_huynh[0].group
            })
        }
    },
}
</script>

<style lang="scss" scoped>
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

.card-img {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #E5E5E5;
    background: #FFF;
    display: flex;
    justify-content: space-between;
}

.box-img {

    width: 104px;
    height: 72px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.materials {
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