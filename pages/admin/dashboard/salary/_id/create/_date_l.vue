<template>
    <div class="content-mp">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="8" lg="8" xl="8">
                <!-- <div class="d-flex justify-content-between align-items-center mb-5">
                    <title-header>Tổng lương theo tháng</title-header>

                    <div class="d-inline-block">
                        <div>
                            <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="date" label="" class="month-picker" prepend-icon="mdi-calendar"
                                        readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker v-model="date" type="month" scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="modal = false">
                                        Cancel
                                    </v-btn>
                                    <v-btn text color="primary" @click="$refs.dialog.save(date)">
                                        OK
                                    </v-btn>
                                </v-date-picker>
                            </v-dialog>
                        </div>
                    </div>
                </div> -->


                <div>
                    <div class="my-4 d-flex flex-wrap">
                        <button class="btn-excel" @click="export_excel()">
                            Xuất Excel
                        </button>
                        <button class="btn-pdf ms-3"  @click="export_pdf()">
                            In phiếu
                        </button>
                    </div>
                    <div class="card">
                        <div class="card-header bg-primary text-light text-center">
                            <b>PHIẾU LƯƠNG</b>
                        </div>
                        <div class="card-body">
                            <table class="table">
                                <tr>
                                    <td colspan="2">
                                        <div class="text-center">
                                            <b>{{ data?.thoi_gian }}</b>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Họ và tên</b>
                                    </td>
                                    <td>
                                        <b>{{ data?.giaoVien?.hoten }}</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Mã đối tác</b>
                                    </td>
                                    <td>
                                        <b>{{ data?.giaoVien?.id }}</b>
                                    </td>
                                </tr>
                            </table>

                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <td><b>Chi tiết khoản mục</b></td>
                                        <td><b>Ngày công thực tế</b></td>
                                        <td><b>Đơn giá</b></td>
                                    </tr>
                                </thead>
                                <!--  -->
                                <tr>
                                    <td colspan="3">
                                        <b>1. Thông tin tính lương</b>
                                    </td>
                                </tr>
                                <tr v-for="(item, n) in data?.donDichVu" v-bind:key="n">
                                    <td>
                                        <div>Mã đơn dịch vụ</div>
                                        <div class="text-primary">
                                            <!-- {{ item?.ma_don_hang }} -->
                                            <nuxt-link :to="'/admin/orders/' + item?.id">
                                        <span>{{ item?.ma_don_hang ?? 'Chưa cập nhật' }}</span>
                                    </nuxt-link>
                                        </div>
                                    </td>
                                    <td>
                                        <span>{{ item?.so_buoi }}</span>
                                    </td>
                                    <td>
                                        <span>{{ formatCurrency(item?.tong_tien) }}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>Làm thêm giờ</div>
                                    </td>
                                    <td>
                                        <span>-</span>
                                    </td>
                                    <td>
                                        <span>{{ formatCurrency(data?.themGio) }}</span>
                                    </td>
                                </tr>
                                <!--  -->
                                <tr>
                                    <td colspan="2">
                                        <b>2. Tổng lương theo ngày công thực tế</b>
                                    </td>
                                    <td>
                                        <b>{{ formatCurrency(data?.tongThucTe) }}</b>
                                    </td>
                                </tr>
                                <!--  -->
                                <tr>
                                    <td colspan="2">
                                        <b>3. Thu nhập bổ sung</b>
                                    </td>
                                    <td>
                                        <b>{{ formatCurrency(data?.tongPhuPhi) }}</b>
                                    </td>
                                </tr>
                                <tr v-for="(item, n) in data?.phuPhiKhac" v-bind:key="n">
                                    <td colspan="2">
                                        <span>{{ item?.name }}</span>
                                    </td>
                                    <td>
                                        <span>{{ formatCurrency(item?.so_tien) }}</span>
                                    </td>
                                </tr>
                                <!--  -->
                                <tr>
                                    <td colspan="2">
                                        <b>4. Các khoản giảm trừ</b>
                                    </td>
                                    <td>
                                        <b>{{ formatCurrency(data?.tongGiamTru) }}</b>
                                    </td>
                                </tr>
                                <tr v-for="(item, n) in data?.giamTru" v-bind:key="n">
                                    <td colspan="2">
                                        <span>{{ item?.name }}</span>
                                    </td>
                                    <td>
                                        <span>{{ formatCurrency(item?.so_tien) }}</span>
                                    </td>
                                </tr>
                                <!--  -->
                                <tr>
                                    <td colspan="2">
                                        <b>Thành tiền</b>
                                    </td>
                                    <td>
                                        <b>{{ formatCurrency(data?.thanhTien) }}</b>
                                    </td>
                                </tr>
                                 <tr>
                                    <td colspan="2">
                                        <b>Số tiền đã thanh toán</b>
                                    </td>
                                    <td>
                                        <b>{{ formatCurrency(data?.so_tien_da_thanh_toan) }}</b>
                                    </td>
                                </tr>
                                 <tr>
                                    <td colspan="2">
                                        <b>Số tiền còn lại</b>
                                    </td>
                                    <td>
                                        <b>{{ formatCurrency(data?.so_tien_con_lai) }}</b>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <button class="btn btn-primary mb-3" v-b-modal.my-modal>Thanh toán toàn bộ số tiền còn lại</button>
                        <button class="btn btn-success mb-3" v-b-modal.my-modal-2>Thanh toán 1 phần số tiền còn lại</button>

                    </div>
                </div>

                <b-modal id="my-modal" ref="my-modal" hide-footer centered title="Thanh toán số tiền còn lại">
                    <template #default="{ hide }">
                        <form id="form">

                            <div class="my-4 pb-3">
                                <div>
                                    <b-form-group>
                                        <label>Tổng số tiền còn lại:</label>
                                        <b-form-input type="number" name="tong_tien" v-model="tong_tien" placeholder="Nhập số tiền"></b-form-input>
                                    </b-form-group>
                                </div>
                                <div>
                                    <b-form-group>
                                        <label>Ghi chú:</label>
                                        <b-form-input name="ghi_chu" v-model="ghi_chu" placeholder="Nhập ghi chú"></b-form-input>
                                    </b-form-group>
                                </div>

                            </div>
                            <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                <button class=" btn-delete ms-1" type="button" @click="send_data">Xác nhận</button>
                            </div>
                        </form>

                    </template>
                </b-modal>

                <b-modal id="my-modal-2" ref="my-modal-2" hide-footer centered title="Thanh toán 1 phần số tiền còn lại">
                    <template #default="{ hide }">
                        <form id="form">

                            <div class="my-4 pb-3">
                                <div>
                                    <b-form-group>
                                        <label>Tổng số tiền còn lại:</label>
                                        <b-form-input type="number" name="tong_tien_2" v-model="tong_tien_2" placeholder="Nhập số tiền"></b-form-input>
                                    </b-form-group>
                                </div>
                                <div>
                                    <b-form-group>
                                        <label>Ghi chú:</label>
                                        <b-form-input  name="ghi_chu" v-model="ghi_chu" placeholder="Nhập ghi chú"></b-form-input>
                                    </b-form-group>
                                </div>

                            </div>
                            <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                <button class=" btn-delete ms-1" type="button" @click="send_data_2">Xác nhận</button>
                            </div>
                        </form>

                    </template>
                </b-modal>


            </v-col>
        </v-row>

    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Tạo phiếu lương',
                previous: '/admin/dashboard/salary'
            },
            data: null,
            date: new Date().toISOString().substr(0, 7),
            month: 1,
            menu: false,
            modal: false,
            tong_tien: 0,
            tong_tien_2: 0,
            ghi_chu: null,
        };
    },
    validate({ params }) {
        return /^\d+$/.test(params.id);
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        date_l() {
            return this.$route.params.date_l
        },
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        async load_data() {
            let chuoi = this.date_l;
            let ketqua = chuoi.split('-');
            await api.get(`chi-luong/tao-phieu-luong?thang=${(this.$route.query.t ?? ketqua[1]) + "/" +  ketqua[0]}&id=` + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                const user = res?.data?.data
                this.data = user
                this.tong_tien = this.data?.so_tien_con_lai
            })
        },
        async send_data() {
            const formData = new FormData()
            formData.append('tong_tien', this.tong_tien)
            formData.append('phieu_luong_id', this.data?.phieu_luong_id)
            formData.append('ghi_chu', this.ghi_chu)

            await api.post('chi-luong/thanh-toan', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal'].hide()
                    this.load_data()
                }
            })
        },
        async send_data_2() {
            const formData = new FormData()
            formData.append('tong_tien', this.tong_tien_2)
            formData.append('phieu_luong_id', this.data?.phieu_luong_id)
            formData.append('ghi_chu', this.ghi_chu)
            await api.post('chi-luong/thanh-toan', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-2'].hide()
                    this.load_data()
                }
            })
        },
        async export_excel() {
            Swal.fire({
                title: "Đang xử lý yêu cầu!",
                html: "Vui lòng chờ...",
                timerProgressBar: true,
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log("I was closed by the timer");
                }
            });

            let currentDate = new Date();

            // Lấy thông tin về ngày, tháng, năm
            let day = currentDate.getDate(); // Lấy ngày
            let month = currentDate.getMonth() + 1; // Lấy tháng (lưu ý rằng tháng bắt đầu từ 0, nên cần cộng thêm 1)
            let year = currentDate.getFullYear(); // Lấy năm

            let chuoi = this.date_l;
            let ketqua = chuoi.split('-');
            // Hiển thị ngày hiện tại
            console.log(`${month}/${year}`);

            await api.get(`chi-luong/export-phieu-luong?id=${this.id}&thang=${(this.$route.query.t ?? ketqua[1]) + "/" +  ketqua[0]}`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                Swal.close()
                toastr.success('Tải xuống thành công');
                window.open(res?.data?.data);
            })
        },
        async export_pdf() {
            Swal.fire({
                title: "Đang xử lý yêu cầu!",
                html: "Vui lòng chờ...",
                timerProgressBar: true,
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log("I was closed by the timer");
                }
            });

            let currentDate = new Date();

            // Lấy thông tin về ngày, tháng, năm
            let day = currentDate.getDate(); // Lấy ngày
            let month = currentDate.getMonth() + 1; // Lấy tháng (lưu ý rằng tháng bắt đầu từ 0, nên cần cộng thêm 1)
            let year = currentDate.getFullYear(); // Lấy năm

            let chuoi = this.date_l;
            let ketqua = chuoi.split('-');
            // Hiển thị ngày hiện tại
            console.log(`${month}/${year}`);

            await api.get(`/chi-luong/pdf-phieu-luong?id=${this.id}&thang=${(this.$route.query.t ?? ketqua[1]) + "/" +  ketqua[0]}`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                Swal.close()
                toastr.success('Tải xuống thành công');
                window.open(res?.data?.data);
            })
        }
    },
    mounted() {
        this.title.previous = '/admin/dashboard/salary/' + this.id  + '?t=' + (this.$route.query.t ?? 1)
        this.$store.dispatch('title/set_title', this.title);
        this.load_data()
    },
}
</script>


<style lang="scss" scoped>
.btn-excel {
    border-radius: 46px;
    background: #00C092;
    display: flex;
    padding: 12px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    color: #FFF;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.btn-pdf {
    border-radius: 46px;
    background: #0056B1;
    display: flex;
    padding: 12px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    color: #FFF;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.blade-id {
    display: initial;
}

.box-img {
    width: 55px;
    height: 55px;
    overflow: hidden;
    border-radius: 50%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>