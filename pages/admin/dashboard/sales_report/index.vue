<template>
    <div class="content-mp">

        <b-row>
            <b-col cols="12" sm="10">

                <div>
                    <sales-report></sales-report>
                </div>

                <div class="d-flex justify-content-between align-items-center flex-wrap mt-5">
                    <title-header>Báo cáo doanh thu</title-header>

                    <div class="d-inline-block">
                        <div class="d-inline-block">
                            <div>
                                <div class="btn-export-excel" @click="export_excel()">
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.24833 7.02233C8.24833 9.30589 8.24794 11.5898 8.25023 13.8734C8.25023 13.9793 8.24566 14.0185 8.11422 13.9919C7.88259 13.9446 7.65058 13.8974 7.41742 13.857C7.01968 13.788 6.6269 13.6943 6.22726 13.6353C6.02191 13.6048 5.82038 13.5477 5.61542 13.5118C5.17806 13.4356 4.7426 13.3457 4.30715 13.2604C4.02752 13.2055 3.74598 13.1587 3.46672 13.0985C3.02403 13.0036 2.57486 12.9381 2.13255 12.8429C1.95692 12.8051 1.77977 12.7747 1.60414 12.7373C1.31308 12.6756 1.01858 12.631 0.725996 12.5766C0.561415 12.5461 0.398359 12.5087 0.233397 12.4794C0.175489 12.4691 0.158726 12.4398 0.16025 12.3868C0.162155 12.3129 0.161393 12.2386 0.161393 12.1647C0.161393 8.70433 0.161393 5.24395 0.162155 1.78318C0.162155 1.53098 0.171298 1.51345 0.418931 1.49402C0.611323 1.47916 0.79419 1.42164 0.982773 1.3904C1.36451 1.32677 1.7432 1.24487 2.12303 1.17172C2.48267 1.10276 2.84345 1.03914 3.20233 0.965992C3.63321 0.877988 4.06561 0.797602 4.49916 0.724455C4.63174 0.701978 4.76089 0.665404 4.89423 0.643689C5.22339 0.58959 5.5476 0.506157 5.87562 0.443677C6.27183 0.368244 6.66957 0.302336 7.06693 0.231475C7.1995 0.207855 7.33208 0.177758 7.46238 0.148804C7.65782 0.104992 7.85821 0.0867048 8.0506 0.0284158C8.23232 -0.0268254 8.24871 -0.0123484 8.24871 0.1709C8.24871 2.45446 8.24871 4.7384 8.24871 7.02195L8.24833 7.02233ZM4.20734 7.60484C4.22067 7.62503 4.23705 7.63837 4.23781 7.65208C4.24848 7.86733 4.36544 8.04449 4.46221 8.22316C4.70298 8.66776 4.93461 9.11617 5.16625 9.56533C5.22796 9.68496 5.29387 9.75125 5.45045 9.74363C5.80781 9.72611 6.16707 9.73868 6.52518 9.7383C6.68519 9.7383 6.70348 9.70972 6.61928 9.57105C6.38079 9.17712 6.13849 8.78548 5.8981 8.39308C5.6318 7.95839 5.36626 7.5237 5.0992 7.08939C5.05957 7.025 5.05043 6.96785 5.09272 6.89776C5.32549 6.51526 5.5537 6.13009 5.78571 5.74683C6.05353 5.30452 6.32365 4.86335 6.59185 4.42104C6.66424 4.3018 6.65243 4.28313 6.50499 4.28237C6.15487 4.28085 5.80438 4.28847 5.45464 4.27818C5.32778 4.27437 5.28092 4.33342 5.23025 4.43285C5.08129 4.72392 4.91518 5.0066 4.76622 5.29767C4.64888 5.52777 4.50259 5.74302 4.41078 5.98609C4.36315 6.11181 4.31782 6.23867 4.26639 6.37925C4.21343 6.23867 4.17457 6.11828 4.12314 6.00361C4.00085 5.73045 3.87513 5.45882 3.74598 5.18833C3.6134 4.91021 3.47129 4.63668 3.34291 4.35704C3.31129 4.28808 3.27243 4.28047 3.21147 4.28085C3.00955 4.28237 2.80764 4.28085 2.6061 4.28085C2.39199 4.28085 2.17751 4.27856 1.9634 4.28161C1.85711 4.28313 1.84149 4.31513 1.89292 4.40809C1.92644 4.46867 1.96264 4.52772 1.99692 4.58753C2.21141 4.96165 2.42323 5.33767 2.64077 5.71026C2.88612 6.13047 3.13642 6.54764 3.38481 6.96595C3.405 7.00024 3.40805 7.02767 3.38253 7.06653C3.12537 7.45779 2.86936 7.84943 2.61715 8.24374C2.31999 8.70814 2.02626 9.17522 1.73215 9.64191C1.71767 9.66477 1.68834 9.68725 1.70319 9.71811C1.71881 9.75049 1.75463 9.73677 1.78091 9.73677C2.20532 9.73792 2.62934 9.73639 3.05375 9.73906C3.11699 9.73944 3.15204 9.71315 3.17909 9.6621C3.38138 9.28037 3.58787 8.90092 3.78522 8.51651C3.89722 8.29822 4.02904 8.0902 4.11781 7.85895C4.14905 7.77742 4.15324 7.68485 4.20734 7.60446V7.60484Z"
                                            fill="white" />
                                        <path
                                            d="M14.1621 7.00706C14.1621 8.6323 14.1564 10.2572 14.1667 11.8824C14.169 12.2283 13.9275 12.4058 13.6448 12.4047C12.0676 12.3994 10.4903 12.4009 8.91309 12.4047C8.79804 12.4047 8.76794 12.3731 8.76946 12.2603C8.7767 11.8077 8.77785 11.3551 8.77213 10.9029C8.77061 10.7939 8.80794 10.7749 8.90547 10.776C9.35845 10.7806 9.81143 10.7757 10.2644 10.7802C10.3616 10.7814 10.4012 10.7604 10.3981 10.6534C10.3909 10.3863 10.3901 10.1185 10.3981 9.85141C10.4019 9.72836 10.3505 9.69445 10.2393 9.69483C9.79466 9.69674 9.34969 9.69102 8.90509 9.69598C8.80185 9.69712 8.77137 9.66855 8.77365 9.5653C8.77937 9.29405 8.77937 9.02203 8.76984 8.75078C8.76604 8.64182 8.80566 8.62468 8.9028 8.62582C9.35578 8.63077 9.80876 8.62506 10.2617 8.63001C10.3631 8.63116 10.3977 8.60068 10.3958 8.49896C10.3909 8.2357 10.3909 7.97245 10.3974 7.7092C10.4004 7.58957 10.3509 7.55109 10.237 7.55148C9.79238 7.553 9.3474 7.54614 8.9028 7.54995C8.80032 7.55071 8.76794 7.52366 8.77061 7.41928C8.77784 7.13964 8.77708 6.85963 8.77061 6.57999C8.76832 6.48437 8.79918 6.4657 8.89061 6.46646C9.34359 6.47027 9.79657 6.46303 10.2495 6.46494C10.3558 6.46532 10.4019 6.44094 10.3977 6.32093C10.3882 6.05387 10.392 5.78604 10.3966 5.51898C10.3981 5.41916 10.365 5.38335 10.2617 5.38411C9.80457 5.38754 9.3474 5.38145 8.89061 5.38411C8.79766 5.38488 8.76984 5.35592 8.77137 5.26449C8.77594 4.98066 8.77708 4.69684 8.77061 4.41301C8.7687 4.32272 8.79956 4.30443 8.88261 4.3052C9.34778 4.30863 9.81333 4.30253 10.2785 4.30939C10.3974 4.31129 10.4256 4.26938 10.4229 4.16081C10.4172 3.91013 10.4214 3.65906 10.4214 3.408C10.4214 3.2598 10.3917 3.22437 10.2419 3.22361C9.79733 3.22094 9.35235 3.2179 8.90776 3.22399C8.79613 3.22552 8.77023 3.19237 8.77175 3.0857C8.77708 2.63729 8.77594 2.18889 8.77175 1.74048C8.77099 1.64943 8.78508 1.61285 8.89023 1.61285C10.4922 1.61666 12.0942 1.61476 13.6962 1.61552C13.9637 1.61552 14.1545 1.79191 14.1564 2.05745C14.1621 2.83083 14.1602 3.6042 14.1606 4.37758C14.161 5.25382 14.1606 6.13006 14.1606 7.00668H14.1614L14.1621 7.00706ZM12.018 10.7768V10.7776C12.335 10.7776 12.6523 10.7745 12.9693 10.7795C13.0623 10.781 13.0989 10.7608 13.0962 10.6583C13.0886 10.3829 13.087 10.107 13.0966 9.8316C13.1004 9.71731 13.0592 9.69369 12.9571 9.69445C12.3354 9.6975 11.7136 9.69788 11.0919 9.69407C10.9723 9.69331 10.9227 9.73255 10.9258 9.85522C10.9319 10.1265 10.9326 10.3981 10.9281 10.6694C10.9265 10.7597 10.9601 10.7791 11.0427 10.7783C11.3681 10.7745 11.6934 10.7768 12.0184 10.7768H12.018ZM12.0298 5.38678V5.38564C11.7174 5.38564 11.4047 5.39097 11.0923 5.38297C10.9688 5.37992 10.9243 5.42183 10.9265 5.54184C10.9315 5.80052 10.9338 6.05958 10.9273 6.31826C10.9243 6.4356 10.9753 6.46532 11.0808 6.46494C11.714 6.46189 12.3476 6.46151 12.9811 6.46303C13.0642 6.46303 13.0969 6.44056 13.095 6.35217C13.0901 6.06453 13.0908 5.7769 13.095 5.48926C13.0962 5.41078 13.0768 5.38335 12.9926 5.3845C12.6718 5.38983 12.351 5.3864 12.0302 5.3864L12.0298 5.38678ZM12.0218 8.62773C12.3346 8.62773 12.6474 8.62392 12.9598 8.63001C13.0581 8.63192 13.0981 8.61096 13.0954 8.50315C13.0886 8.22389 13.0893 7.94426 13.0954 7.66462C13.0973 7.57738 13.0691 7.55224 12.9853 7.55262C12.3476 7.5549 11.7098 7.55528 11.0721 7.55262C10.9719 7.55224 10.9281 7.59186 10.9284 7.68786C10.9296 7.96331 10.933 8.23837 10.9315 8.51382C10.9311 8.60677 10.9711 8.63039 11.0587 8.62925C11.3795 8.62506 11.7007 8.62773 12.0215 8.62773H12.0218ZM12.0116 4.30634C12.3369 4.30634 12.6623 4.30405 12.9876 4.30786C13.0653 4.30863 13.0966 4.29148 13.095 4.20652C13.0901 3.9227 13.0905 3.63887 13.095 3.35505C13.0962 3.27085 13.0729 3.23999 12.9853 3.24037C12.343 3.24304 11.7007 3.24266 11.0584 3.23923C10.9673 3.23885 10.93 3.27428 10.9303 3.36038C10.9315 3.64002 10.9345 3.91965 10.9319 4.19929C10.9311 4.28691 10.9654 4.30863 11.0484 4.30748C11.3696 4.30329 11.6908 4.30558 12.0119 4.30596L12.0116 4.30634Z"
                                            fill="white" />
                                    </svg>
                                    Xuất Excel
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-6">
                    <div class="d-flex filter-warp flex-wrap">
                        <div class="w-100 m-1" style="min-width: 200px; flex: 50%;">
                            <b-form-input v-model.lazy="tuKhoa" placeholder="Tìm theo số điện thoại"></b-form-input>
                        </div>
                        <div class="w-100 m-1" style="flex: 25%;">
                            <b-form-input v-model.lazy="diachi" placeholder="Địa chỉ"></b-form-input>
                        </div>
                        <div class="w-100 m-1" style="flex: 25%;">
                            <b-form-select v-model="dich_vu_id" :options="dich_vu" aria-placeholder="Chọn"></b-form-select>
                        </div>
                        <div class="w-100 m-1" style="flex: 25%;">
                            <b-form-select v-model="leader_kd_id" :options="leader_kd"
                                aria-placeholder="Chọn"></b-form-select>
                        </div>
                        <div class="w-100 m-1" style="width: 50%;">
                            <label for="example-input">Từ ngày</label>
                            <b-form-datepicker id="example-input" today-button reset-button close-button v-model="value"
                                locale="vi" class="mb-2"></b-form-datepicker>
                            <!-- <b-form-select v-model="thang_id" :options="thang" aria-placeholder="Chọn"></b-form-select> -->
                        </div>
                        <div class="w-100 m-1" style="width: 50%;">
                            <label for="example-input1">Đến ngày</label>
                            <b-form-datepicker id="example-input1" today-button reset-button close-button v-model="value1"
                                locale="vi" class="mb-2"></b-form-datepicker>
                            <!-- <b-form-select v-model="thang_id" :options="thang" aria-placeholder="Chọn"></b-form-select> -->
                        </div>
                    </div>

                    <table class="table table-bordered table-hover table-striped table-responsive">
                        <thead class="bg-primary">
                            <th>
                                <tr>
                                    <span class="text-light">Ngày đóng</span>
                                </tr>
                            </th>
                            <th>
                                <tr>
                                    <span class="text-light">Giáo viên</span>
                                </tr>
                            </th>
                            <th>
                                <tr>
                                    <span class="text-light">Tên Phụ huynh</span>
                                </tr>
                            </th>
                            <th>
                                <tr>
                                    <span class="text-light">Số điện thoại</span>
                                </tr>
                            </th>
                            <th>
                                <tr>
                                    <span class="text-light">Mã đơn hàng</span>
                                </tr>
                            </th>
                            <th>
                                <tr>
                                    <span class="text-light">Dịch vụ</span>
                                </tr>
                            </th>

                            <th>
                                <tr>
                                    <span class="text-light">Đơn giá</span>
                                </tr>
                            </th>
                            <th>
                                <tr>
                                    <span class="text-light">Trạng thái</span>
                                </tr>
                            </th>
                            <th>
                                <tr>
                                    <span class="text-light">Số buổi</span>
                                </tr>
                            </th>
                            <!-- <th>
                                <tr>
                                    <span class="text-light">Số buổi đã thực hiện (tính đến thời điểm xuất)
                                    </span>
                                </tr>
                            </th>
                            <th>
                                <tr>
                                    <span class="text-light">Tiền còn dư (gói đã đóng - số buổi còn lại chưa thực hiện)
                                    </span>
                                </tr>
                            </th> -->
                        </thead>
                        <tbody>
                            <tr v-for="(item, n) in data" v-bind:key="n">
                                <td>
                                    <span>
                                        {{ item?.ngay_thanh_toan }}
                                    </span>
                                </td>
                                <td>
                                    <div v-if="item?.giaoVien" class="d-flex align-items-center">
                                        <div class="box-img me-2">
                                            <img :src="item?.giaoVien?.image" />
                                        </div>
                                        <div>
                                            <div class="blade blade-id"># {{ item?.giaoVien?.id }}</div>
                                            <div class="user-name">
                                                {{ item?.giaoVien?.hoten ?? 'Chưa cập nhật tên' }}
                                            </div>
                                            <div class="">
                                                {{ item?.giaoVien?.dien_thoai }}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="box-img me-2">
                                            <img :src="item?.phuHuynh?.anh_nguoi_dung" />
                                        </div>
                                        <div>
                                            <div class="blade blade-id"># {{ item?.phuHuynh?.id }}</div>
                                            <div class="user-name">
                                                {{ item?.phuHuynh?.ho_ten ?? 'Chưa cập nhật tên' }}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span>{{ item?.phuHuynh?.dien_thoai ?? 'Chưa cập nhật' }}</span>
                                </td>
                                <td>
                                    <nuxt-link :to="'/admin/orders/' + item?.id">
                                        <span>{{ item?.ma_don_hang ?? 'Chưa cập nhật' }}</span>
                                    </nuxt-link>
                                </td>
                                <td>
                                    <span>{{ item?.dichVu ?? 'Chưa cập nhật' }}</span>
                                </td>

                                <td>
                                    <span class="text-danger">{{ formatCurrency(item?.don_gia) ?? 0 }}</span>
                                </td>
                                <td>
                                    <span>{{ item?.trang_thai ?? 'Chưa cập nhật' }}</span>
                                </td>
                                <td>
                                    <span>{{ item?.soBuoiHoanThanh ?? '0' }}</span>
                                </td>
                                <!-- <td>
                                    <tr>
                                        {{ item?.soBuoiHoanThanh }}
                                    </tr>
                                </td>
                                <td>
                                    <span class="text-danger">{{ formatCurrency(item?.soTienConDu) ?? 0 }}</span>
                                </td> -->
                            </tr>

                            <tr v-if="data?.length <= 0">
                                <td colspan="10">
                                    <div class="alert alert-danger text-center">Danh sách trống</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="d-flex justify-content-center mt-4">
                    <b-pagination v-model="current_page" :total-rows="total" :per-page="per_page" first-text="First"
                        prev-text="Prev" next-text="Next" last-text="Last"></b-pagination>

                </div>


            </b-col>
        </b-row>




    </div>
</template>

<script>
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';
import SalesReport from '~/components/Report/SalesReport.vue';

export default {
    layout: 'admin',
    components: { SalesReport },
    data() {
        return {
            title: {
                name: 'Báo cáo doanh thu',
                previous: '/admin/dashboard'
            },
            value: '',
            value1: '',
            date: new Date().toISOString().substr(0, 7),
            month: 1,
            menu: false,
            modal: false,
            selected: 0,
            options: [
                { value: 0, text: 'Tất cả' },
                { value: 1, text: 'Giáo viên' },
            ],
            data: null,
            per_page: 0,
            current_page: 1,
            total: 0,
            dich_vu_id: '',
            dich_vu: [],
            leader_kd_id: '',
            leader_kd: [],
            tuKhoa: '',
            diachi: '',
            thang: [
                { value: 1, text: 'Tháng 01' },
                { value: 2, text: 'Tháng 02' },
                { value: 3, text: 'Tháng 03' },
                { value: 4, text: 'Tháng 04' },
                { value: 5, text: 'Tháng 05' },
                { value: 6, text: 'Tháng 06' },
                { value: 7, text: 'Tháng 07' },
                { value: 8, text: 'Tháng 08' },
                { value: 9, text: 'Tháng 09' },
                { value: 10, text: 'Tháng 10' },
                { value: 11, text: 'Tháng 11' },
                { value: 12, text: 'Tháng 12' },
            ],
            thang_id: '',
            timeOut: null,
            timer: 700,
        }
    },
    computed: {
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        async load_type() {
            await api.get('dich-vu/danh-sach?page=1&limit=1000&sort=1&tuKhoa=', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.dich_vu.unshift({
                    value: '',
                    text: 'Tất cả dịch vụ'
                });
                this.dich_vu.push(...res?.data?.data.map(item => ({
                    value: item.id,
                    text: item.ten_dich_vu
                })));

                this.dich_vu_id = this.dich_vu[0].value
            })

            await api.get('admin-api/danh-sach-leaderkd', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.leader_kd.unshift({
                    value: '',
                    text: 'Tìm theo leader'
                });
                this.leader_kd.push(...res?.data?.data.map(item => ({
                    value: item.id,
                    text: item.hoten ?? ('chưa cập nhập tên - ' + item.id)
                })));

                this.leader_kd_id = this.leader_kd[0].value
            })
        },
        async load_data() {
            // await api.get(`bao-cao/bao-cao-doanh-thu?dien_thoai=${this.tuKhoa}&leader_kd_id=${this.leader_kd_id}&dia_chi=${this.diachi}&dich_vu_id=${this.dich_vu_id}&thang=${this.month}&page=${this.current_page}&limit=10&sort=&tuNgay=${this.value}&denNgay=${this.value1}`, {
            await api.get(`/bao-cao/bao-cao-doanh-thu-theo-ngay?don_dich_vu_id=${this.dich_vu_id}&page=${this.current_page}&limit=20&sort=&tuNgay=${this.value}&denNgay=${this.value1}&giao_vien_id=`, {
            // await api.get(`bao-cao/bao-cao-doanh-thu?dien_thoai=${this.tuKhoa}&leader_kd_id=${this.leader_kd_id}&dia_chi=${this.diachi}&dich_vu_id=${this.dich_vu_id}&thang=${this.month}&page=${this.current_page}&limit=20&sort=&tuNgay=${this.value}&denNgay=${this.value1}`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.data = res?.data?.data
                this.per_page = res?.data?.per_page ?? 0
                this.current_page = res?.data?.current_page ?? 0
                this.total = res?.data?.total
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
            // &thang=${this.month}
            await api.get(`bao-cao/export-excel-bao-cao-doanh-thu?dien_thoai=&leader_kd_id=&dia_chi=&dich_vu_id=&page=1&limit=&sort=&tuNgay=${this.value}&denNgay=${this.value1}`, {
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
        this.$store.dispatch('title/set_title', this.title)
        this.month = this.date.split("-")[1] + '/' + this.date.split("-")[0];
        this.load_type();
        let currentDate1 = new Date();
        this.thang_id = currentDate1.getMonth() + 1;

        var currentDate = new Date();

        // Lấy thông tin năm, tháng, ngày
        var year = currentDate.getFullYear();
        var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);  // Thêm '0' và cắt 2 ký tự từ cuối chuỗi để đảm bảo định dạng hh
        var day = ('0' + currentDate.getDate()).slice(-2);  // Thêm '0' và cắt 2 ký tự từ cuối chuỗi để đảm bảo định dạng hh

        // Tạo chuỗi định dạng "Y-m-d"
        this.value = year + '-' + month + '-' + day;
        this.value1 = year + '-' + month + '-' + day;
        // this.load_data()
    },
    watch: {
        current_page() {
            this.load_data()
        },
        value() {
            console.log(this.value)

            if (this.value != '' && this.value1 != '') {
                this.load_data()
            }
        },
        value1() {
            console.log(this.value1)
            if (this.value != '' && this.value1 != '') {
                this.load_data()
            }
        },
        date() {
            console.log(this.date)
            const dateArray = this.date.split("-");
            console.log(dateArray)
            this.month = dateArray[1] + '/' + dateArray[0];
            this.load_data();
        },
        diachi() {
            clearTimeout(this.timeOut);

            this.timeOut = setTimeout(() => {
                // this.$emit("click");
                this.load_data()

            }, this.timer);
        },
        tuKhoa() {
            clearTimeout(this.timeOut);

            this.timeOut = setTimeout(() => {
                // this.$emit("click");
                this.load_data()

            }, this.timer);
        },
        thang_id() {
            this.load_data()
        },
        dich_vu_id() {
            this.load_data()
        },
        leader_kd_id() {
            this.load_data()
        }
    }
}
</script>

<style lang="scss" scoped>
.box-img {
    width: 35px;
    height: 35px;
    overflow: hidden;
    border-radius: 50%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.span {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.blade-id {
    display: initial;
}

.user-name {
    color: #0056B1;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration-line: underline;
}
</style>