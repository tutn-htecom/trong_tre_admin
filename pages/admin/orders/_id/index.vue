<template>
    <div class="content-mp">

        <v-row>
            <v-col xs="12" sm="12" md="12" lg="8" xl="8">
                <detail-service-info v-if="data" :data="data" :status="data?.trang_thai" :load_data="load_data"
                    :nap_tien="nap_tien"></detail-service-info>

                <!-- xac nhan thanh toan -->
                <div class="mt-4">
                    <v-card
                        v-if="data?.trang_thai == 'Chưa có GV' || data?.trang_thai == 'Đang khảo sát' || data?.trang_thai == 'Đang dạy'">
                        <v-card-text>
                            <div>
                                <b-form-checkbox v-on:change="xac_nhan_thanh_toan_method" v-model="xac_nhan_thanh_toan"
                                    size="lg">
                                    <span class="text-dark">
                                        Xác nhận thanh toán
                                    </span>
                                </b-form-checkbox>
                            </div>
                        </v-card-text>

                        <v-divider class="m-0 p-0"></v-divider>

                        <v-card-text>
                            <b-button class="w-100 text-primary rounded-pill" variant="outline-primary"
                                v-b-modal.my-modal-them-phu-phi>
                                <span class="mdi mdi-plus-circle-outline"></span>
                                <span>
                                    Thêm phụ phí
                                </span>
                            </b-button>
                        </v-card-text>
                    </v-card>

                    <v-card v-else>
                        <v-card-text>
                            <div>
                                <b-form-checkbox disabled v-model="xac_nhan_thanh_toan" size="lg">
                                    <span class="text-dark">
                                        Xác nhận thanh toán
                                    </span>
                                </b-form-checkbox>
                            </div>
                        </v-card-text>

                        <v-divider class="m-0 p-0"></v-divider>

                        <v-card-text>
                            <b-button class="w-100 text-secondary rounded-pill" variant="outline-secondary">
                                <span class="mdi mdi-plus-circle-outline"></span>
                                <span>
                                    Thêm phụ phí
                                </span>
                            </b-button>
                        </v-card-text>
                    </v-card>
                </div>

                <!-- Chương trình: Bảo mẫu Pro -->

                <div v-if="data?.trang_thai != 'Chưa có GV'">
                    <div class="mt-6">
                        <div>
                            <h5>
                                Chương trình: <span class="text-primary">{{ data?.dichVu }}</span>
                            </h5>
                        </div>
                        <v-card>
                            <v-card-text>
                                <div>
                                    <b-form-group label="Gán khóa học" class="mb-0">
                                        <b-form-select v-model="chuong_trinh_id"
                                            :options="chuong_trinh"></b-form-select>
                                    </b-form-group>
                                </div>
                                <div class="mt-2">
                                    <b-form-group label="Gán gói học" class="mb-0">
                                        <b-form-select v-model="goi_hoc_id" :options="goi_hoc"></b-form-select>
                                    </b-form-group>
                                </div>
                                <div class="mt-2">
                                    <b-form-group label="Gán bài học" class="mb-0">
                                        <b-form-select v-model="bai_hoc_id" :options="bai_hoc"></b-form-select>
                                    </b-form-group>
                                </div>
                                <div class="mt-5 d-flex flex-wrap" v-for="(goiHoc, i) in data?.ke_hoach_day" v-bind:key="i">
                                    <span v-for="(item, n) in goiHoc?.goiHoc" v-bind:key="n"
                                        class="blade-primary me-2 mb-2">
                                        {{ item?.tieu_de }} <span @click="delete_bh(item?.id)"
                                            class="mdi mdi-window-close ms-2 cp"></span>
                                    </span>
                                </div>
                            </v-card-text>
                        </v-card>
                    </div>
                </div>

                <div v-if="data?.trang_thai != 'Chưa có GV'">
                    <div class="mt-6" v-for="(item, n) in data?.ke_hoach_day?.[0]?.goiHoc" v-bind:key="n">
                        <div>
                            <h5>
                                Giáo cụ liên quan ( {{ item?.tieu_de }} )
                            </h5>
                        </div>
                        <v-card>
                            <v-card-text>
                                <div class="mt-4 d-flex flex-wrap">
                                    <div class="box-img me-4" v-for="(item_i, i) in item?.giaoCu" v-bind:key="i">
                                        <img v-b-tooltip.hover :title="item_i?.code" v-if="item_i?.image" class="img-w"
                                            :src="item_i?.image" :alt="item_i?.code">
                                    </div>

                                    <div class="alert alert-info w-100" v-if="item?.giaoCu?.length == 0">
                                        Không có giáo cụ được gán.
                                    </div>
                                </div>
                            </v-card-text>
                        </v-card>
                    </div>
                </div>

                <b-modal id="my-modal-edit-kd" ref="my-modal-edit-kd" hide-footer centered
                    title="Sửa thông tin quản lý">
                    <template #default="{ hide }">
                        <form>
                            <div class="">
                                <div>
                                    <b-form-group>
                                        <label>Gán leader KD:</label>
                                        <b-form-select v-model="kds_id" :options="kds"
                                            aria-placeholder="Chọn"></b-form-select>
                                    </b-form-group>
                                </div>

                            </div>
                            <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                <button type="button" class=" btn-delete ms-1" @click="duyet_don_kd()">Đồng ý</button>
                            </div>
                        </form>

                    </template>
                </b-modal>

                <!-- Thông tin quản lý  -->
                <div v-if="data?.leaderKD != null">
                <!-- <div v-if="data?.trang_thai == 'Đang khảo sát'"> -->
                    <div class="mt-6">
                        <div>
                            <h5 class="d-flex justify-content-between">
                                <span>Thông tin quản lý</span> <span v-b-modal.my-modal-edit-kd class="cp text-primary"
                                    v-if="data?.leaderKD">Sửa</span>
                            </h5>
                        </div>
                        <v-card>
                            <v-card-text>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <div class="me-3 layout-user">
                                            <img :src="data?.leaderKD?.anh_nguoi_dung" alt="">
                                        </div>
                                        <div>
                                            <b-badge pill variant="success">
                                                {{ data?.leaderKD?.vai_tro ?? 'Chưa cập nhật' }}
                                            </b-badge>
                                            <h6 class="text-dark mt-1">
                                                {{ data?.leaderKD?.hoten }}
                                            </h6>
                                            <div class="text-dark">
                                                {{ data?.leaderKD?.dien_thoai }}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex">
                                        <div class="me-2 cp" v-b-tooltip.hover.top="data?.leaderKD?.dien_thoai">
                                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="19" cy="19" r="19" fill="#0056B1" fill-opacity="0.1" />
                                                <path
                                                    d="M11.6796 9.84669L12.8192 8.70711C13.2097 8.31658 13.8429 8.31658 14.2334 8.70711L17.2403 11.7139C17.6308 12.1045 17.6308 12.7376 17.2403 13.1282L15.1847 15.1837C14.8544 15.514 14.7725 16.0187 14.9814 16.4365C16.1892 18.8521 18.1479 20.8108 20.5635 22.0186C20.9813 22.2275 21.486 22.1456 21.8163 21.8153L23.8718 19.7597C24.2624 19.3692 24.8955 19.3692 25.2861 19.7597L28.2929 22.7666C28.6834 23.1571 28.6834 23.7903 28.2929 24.1808L27.1533 25.3204C25.042 27.4317 21.6994 27.6693 19.3107 25.8777L17.2602 24.3398C15.5166 23.0322 13.9678 21.4834 12.6602 19.7399L11.1223 17.6893C9.33072 15.3006 9.56827 11.958 11.6796 9.84669Z"
                                                    fill="#0056B1" />
                                            </svg>
                                        </div>
                                        <div class="cp">
                                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="19" cy="19" r="19" fill="#0056B1" fill-opacity="0.1" />
                                                <path opacity="0.4"
                                                    d="M29 13.25V18.35C29 19.62 28.58 20.69 27.83 21.43C27.09 22.18 26.02 22.6 24.75 22.6V24.41C24.75 25.09 23.99 25.5 23.43 25.12L22.46 24.48C22.55 24.17 22.59 23.83 22.59 23.47V19.4C22.59 17.36 21.23 16 19.19 16H12.4C12.26 16 12.13 16.01 12 16.02V13.25C12 10.7 13.7 9 16.25 9H24.75C27.3 9 29 10.7 29 13.25Z"
                                                    fill="#0056B1" />
                                                <path
                                                    d="M22.59 19.4V23.47C22.59 23.83 22.55 24.17 22.46 24.48C22.09 25.95 20.87 26.87 19.19 26.87H16.47L13.45 28.88C13 29.19 12.4 28.86 12.4 28.32V26.87C11.38 26.87 10.53 26.53 9.94 25.94C9.34 25.34 9 24.49 9 23.47V19.4C9 17.5 10.18 16.19 12 16.02C12.13 16.01 12.26 16 12.4 16H19.19C21.23 16 22.59 17.36 22.59 19.4Z"
                                                    fill="#0056B1" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </v-card-text>
                        </v-card>
                    </div>
                </div>

                <div class="mt-6" v-if="data?.leaderKD != null">
                    <div v-if="data?.giaoVien == null || data?.giaoVien?.length == 0">
                        <div>
                        <!-- <div v-if="data?.trang_thai != 'Chưa có GV'"> -->
                            <div>
                                <h5>
                                    Thông tin Giáo viên
                                </h5>
                            </div>
                            <v-card>
                                <v-card-text>
                                    <div>
                                        <div class="my-2 box-teacher">
                                            <div v-for="(item, n) in teachers" v-bind:key="n">
                                                <div
                                                    :class="'card-teacher ' + (teacher_id == item?.id ? ' active' : '')">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div class="d-flex align-items-center">
                                                            <div class="me-3 layout-user">
                                                                <img :src="item?.anh_nguoi_dung" alt="">
                                                            </div>
                                                            <div class="ps-2" style="margin-left: 5px;">
                                                                <div>
                                                                    <b-badge pill variant="danger">
                                                                        # {{ item?.id }}
                                                                    </b-badge>
                                                                    <b-badge pill variant="success">
                                                                        Đang trống ca
                                                                    </b-badge>
                                                                </div>
                                                                <strong>
                                                                    <span class="user-name">
                                                                        {{ item?.hoten }}
                                                                    </span>
                                                                </strong>
                                                                <p class="w-p p-0 m-0">
                                                                    {{ item?.trinh_do }}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div class="">
                                                            <b-button @click="set_teacher(item?.id)" size="sm"
                                                                style="min-width: 130px;padding: 0.325rem 0.75rem !important;"
                                                                :class="'w-100 rounded-pill ' + (teacher_id == item?.id ? 'text-light' : 'text-primary')"
                                                                :variant="teacher_id == item?.id ? 'primary' : 'outline-primary'">
                                                                Chọn
                                                            </b-button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <b-button class="w-100 text-light rounded-pill" variant="primary"
                                            v-b-modal.my-modal-teacher>
                                            Điều giáo viên
                                        </b-button>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </div>
                    </div>
                    <div v-else>
                        <div>
                            <div>
                                <h5>
                                    Thông tin Giáo viên
                                </h5>
                            </div>
                            <v-card>
                                <v-card-text>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <div class="me-3 layout-user">
                                                <img :src="data?.giaoVien?.anh_nguoi_dung" alt="">
                                            </div>
                                            <div>
                                                <h6 class="text-dark mt-1">
                                                    {{ data?.giaoVien?.hoten }}
                                                </h6>
                                                <div>
                                                    <span class="me-5">
                                                        Giáo viên
                                                    </span>
                                                    <span class="text-warning text-star blade-start">
                                                        <span class="mdi mdi-star me-1"></span>
                                                        <span class="text-dark">{{ data?.giaoVien?.danh_gia }}</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="d-flex">
                                            <div class="me-2 cp" v-b-tooltip.hover.top="data?.giaoVien?.dien_thoai">
                                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="19" cy="19" r="19" fill="#0056B1" fill-opacity="0.1" />
                                                    <path
                                                        d="M11.6796 9.84669L12.8192 8.70711C13.2097 8.31658 13.8429 8.31658 14.2334 8.70711L17.2403 11.7139C17.6308 12.1045 17.6308 12.7376 17.2403 13.1282L15.1847 15.1837C14.8544 15.514 14.7725 16.0187 14.9814 16.4365C16.1892 18.8521 18.1479 20.8108 20.5635 22.0186C20.9813 22.2275 21.486 22.1456 21.8163 21.8153L23.8718 19.7597C24.2624 19.3692 24.8955 19.3692 25.2861 19.7597L28.2929 22.7666C28.6834 23.1571 28.6834 23.7903 28.2929 24.1808L27.1533 25.3204C25.042 27.4317 21.6994 27.6693 19.3107 25.8777L17.2602 24.3398C15.5166 23.0322 13.9678 21.4834 12.6602 19.7399L11.1223 17.6893C9.33072 15.3006 9.56827 11.958 11.6796 9.84669Z"
                                                        fill="#0056B1" />
                                                </svg>
                                            </div>
                                            <div class="cp">
                                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="19" cy="19" r="19" fill="#0056B1" fill-opacity="0.1" />
                                                    <path opacity="0.4"
                                                        d="M29 13.25V18.35C29 19.62 28.58 20.69 27.83 21.43C27.09 22.18 26.02 22.6 24.75 22.6V24.41C24.75 25.09 23.99 25.5 23.43 25.12L22.46 24.48C22.55 24.17 22.59 23.83 22.59 23.47V19.4C22.59 17.36 21.23 16 19.19 16H12.4C12.26 16 12.13 16.01 12 16.02V13.25C12 10.7 13.7 9 16.25 9H24.75C27.3 9 29 10.7 29 13.25Z"
                                                        fill="#0056B1" />
                                                    <path
                                                        d="M22.59 19.4V23.47C22.59 23.83 22.55 24.17 22.46 24.48C22.09 25.95 20.87 26.87 19.19 26.87H16.47L13.45 28.88C13 29.19 12.4 28.86 12.4 28.32V26.87C11.38 26.87 10.53 26.53 9.94 25.94C9.34 25.34 9 24.49 9 23.47V19.4C9 17.5 10.18 16.19 12 16.02C12.13 16.01 12.26 16 12.4 16H19.19C21.23 16 22.59 17.36 22.59 19.4Z"
                                                        fill="#0056B1" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </v-card-text>
                                <v-divider class="m-0 p-0"></v-divider>
                                <v-card-text>
                                    <div v-if="data?.trang_thai == 'Đang dạy'"
                                        class="d-flex align-items-center justify-content-between">
                                        <div class="w-100 btn btn-doi text- rounded-pill" variant="outline-danger"
                                            v-b-modal.my-modal-teacher-doi>
                                            Đổi giáo viên
                                        </div>
                                        <div class="w-100 btn btn-dieu-lai rounded-pill ms-4" variant="outline-primary"
                                            v-b-modal.my-modal-teacher>
                                            Điều lại
                                        </div>
                                    </div>
                                    <div v-else class="d-flex align-items-center justify-content-between">
                                        <div class="w-100 btn btn-deactive rounded-pill">
                                            Đổi giáo viên
                                        </div>
                                        <div class="w-100 btn btn-deactive rounded-pill ms-4">
                                            Điều lại
                                        </div>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </div>
                    </div>
                </div>

                <b-modal id="my-modal-teacher" ref="my-modal-teacher" hide-footer centered title="Điều giáo viên">
                    <template #default="{ hide }">
                        <div>
                            <span>Có <b class="text-primary">{{ teachers?.length ?? 0 }}</b> giáo viên nhận lịch</span>
                        </div>
                        <div>

                            <div class="my-2 box-teacher">
                                <div v-for="(item, n) in teachers" v-bind:key="n">
                                    <div :class="'card-teacher ' + (teacher_id == item?.id ? ' active' : '')">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="d-flex align-items-center">
                                                <div class="me-3 layout-user">
                                                    <img :src="item?.anh_nguoi_dung" alt="">
                                                </div>
                                                <div class="ps-2" style="margin-left: 5px;">
                                                    <div>
                                                        <b-badge pill variant="danger">
                                                            # {{ item?.id }}
                                                        </b-badge>
                                                        <b-badge pill variant="success">
                                                            Đang trống ca
                                                        </b-badge>
                                                    </div>
                                                    <strong>
                                                        <span class="user-name">
                                                            {{ item?.hoten }}
                                                        </span>
                                                    </strong>
                                                    <p class="w-p p-0 m-0">
                                                        {{ item?.trinh_do }}
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="">
                                                <b-button @click="set_teacher(item?.id)" size="sm"
                                                    style="min-width: 130px;padding: 0.325rem 0.75rem !important;"
                                                    :class="'w-100 rounded-pill ' + (teacher_id == item?.id ? 'text-light' : 'text-primary')"
                                                    :variant="teacher_id == item?.id ? 'primary' : 'outline-primary'">
                                                    Chọn
                                                </b-button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-5">
                                    <b-form-input class="w-100" v-model.lazy="tuKhoa"
                                        placeholder="Gán giáo viên cụ thể"></b-form-input>
                                </div>
                                <div class="mt-3">
                                    <b-form-select v-model="trinh_do_giao_vien"
                                        :options="trinh_do_giao_viens"></b-form-select>
                                </div>

                            </div>
                            <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                <button type="button" class=" btn-delete ms-1" @click="add_teacher()">Điều giáo viên</button>
                            </div>
                        </div>

                    </template>
                </b-modal>

                <b-modal id="my-modal-teacher-doi" ref="my-modal-teacher-doi" hide-footer centered
                    title="Đổi giáo viên">
                    <template #default="{ hide }">
                        <div>
                            <span>Danh sách các buổi chưa dậy</span>
                        </div>
                         <div class="mt-3" style="margin-bottom:12px">
                                    <b-form-select 
                                    v-model="buoi_chua_day_id"
                                        :options="cac_buoi_chua_days"
                                        aria-placeholder="Chọn"
                                        ></b-form-select>
                        </div>
                        <div>
                            <span>Có <b class="text-primary">{{ teacherss?.length ?? 0 }}</b> giáo viên</span>
                        </div>
                        <div>
                            <div class="my-2 box-teacher">
                                <div v-for="(item, n) in teacherss" v-bind:key="n">
                                    <div :class="'card-teacher ' + (teacher_ids == item?.id ? ' active' : '')">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="d-flex align-items-center">
                                                <div class="me-3 layout-user">
                                                    <img :src="item?.anh_nguoi_dung" alt="">
                                                </div>
                                                <div class="ps-2" style="margin-left: 5px;">
                                                    <div>
                                                        <b-badge pill variant="danger">
                                                            # {{ item?.id }}
                                                        </b-badge>
                                                        <b-badge pill variant="success">
                                                            Đang trống ca
                                                        </b-badge>
                                                    </div>
                                                    <strong>
                                                        <span class="user-name">
                                                            {{ item?.hoten }}
                                                        </span>
                                                    </strong>
                                                    <p class="w-p p-0 m-0">
                                                        {{ item?.trinh_do }}
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="">
                                                <b-button @click="set_teachers(item?.id)" size="sm"
                                                    style="min-width: 130px;padding: 0.325rem 0.75rem !important;"
                                                    :class="'w-100 rounded-pill ' + (teacher_id == item?.id ? 'text-light' : 'text-primary')"
                                                    :variant="teacher_ids == item?.id ? 'primary' : 'outline-primary'">
                                                    Chọn
                                                </b-button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                <button type="button" class=" btn-delete ms-1" @click="add_teachers()">Xác nhận đổi</button>
                            </div>
                        </div>

                    </template>
                </b-modal>


                <!-- duyệt đơn -->

                <div class="mt-6"
                    v-if="data?.trang_thai == 'Chưa có GV' || data?.trang_thai == 'Đang khảo sát' || data?.trang_thai == 'Đang dạy'">
                    <div class="d-flex">
                        <div class="w-100 text-light rounded-pill btn btn-cancel-order" variant="danger"
                            v-b-modal.my-modal-cancel>
                            Hủy đơn
                        </div>
                        <div class="w-100 text-light rounded-pill mx-4 btn btn-hoan" variant="info"
                            v-b-modal.my-modal-rollback>
                            Hoàn tiền
                        </div>
                        <!-- <div class="w-100 text-light rounded-pill btn btn-chuong" variant="warning">
                            Chương trình
                        </div> -->
                    </div>

                    <div class="mt-4" v-if="data?.trang_thai == 'Chưa có GV'">
                        <b-button v-if="data?.leaderKD == null" class="w-100 text-light rounded-pill" variant="primary" v-b-modal.my-modal>
                            Duyệt đơn
                        </b-button>

                        <b-modal id="my-modal" ref="my-modal" hide-footer centered title="Duyệt đơn này">
                            <template #default="{ hide }">
                                <form>

                                    <div class="my-2">
                                        <div>
                                            <b-form-group>
                                                <label>Gán leader KD:</label>
                                                <b-form-select v-model="kds_id" :options="kds"
                                                    aria-placeholder="Chọn"></b-form-select>
                                            </b-form-group>
                                        </div>

                                    </div>
                                    <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                        <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                        <button type="button" class=" btn-delete ms-1" @click="duyet_don()">Đồng
                                            ý</button>
                                    </div>
                                </form>

                            </template>
                        </b-modal>
                    </div>

                    <div class="mt-4">
                        <b-button class="w-100 text-light rounded-pill" variant="success" v-b-modal.my-modal-gia-han>
                            Gia hạn đơn
                        </b-button>
                    </div>

                    <!-- <div class="mt-4">
                        <b-button class="w-100 rounded-pill" variant="outline-danger" v-b-modal.my-modal>
                            Đổi giờ dạy
                        </b-button>
                    </div> -->
                </div>

                <!-- // đơn đã huỷ -->
                <div class="mt-6" v-if="data?.trang_thai == 'Đã huỷ' || data?.trang_thai == 'Đã hủy'">
                    <div class="mb-3">
                        <div>
                            <b>Lý do hủy</b>
                        </div>
                        <b-form-textarea id="textarea" :value="data?.ghi_chu" placeholder="Lý do hủy" rows="3"
                            max-rows="6"></b-form-textarea>
                    </div>
                    <div class="d-flex">
                        <div disabled class="w-100 rounded-pill btn btn-deactive" variant="danger">
                            Hủy đơn
                        </div>
                        <div disabled class="w-100 rounded-pill mx-4 btn btn-deactive" variant="info">
                            Hoàn tiền
                        </div>
                        <!-- <div disabled class="w-100 rounded-pill btn btn-deactive" variant="warning">
                            Chương trình
                        </div> -->
                    </div>

                    <div class="mt-4">
                        <div class="w-100 text-light rounded-pill btn btn-canceled" variant="danger">
                            <span class="mdi mdi-close-circle-outline"></span>
                            <span>Đơn đã hủy</span>
                        </div>
                    </div>
                </div>

                <!-- // Đã hoàn thành -->
                <div class="mt-6" v-if="data?.trang_thai == 'Đã hoàn thành'">
                    <div class="d-flex">
                        <b-button disabled class="w-100 text-light rounded-pill" variant="danger">
                            Hủy đơn
                        </b-button>
                        <b-button disabled class="w-100 text-light rounded-pill mx-4" variant="info">
                            Hoàn tiền
                        </b-button>
                        <!-- <b-button disabled class="w-100 text-light rounded-pill" variant="warning">
                            Chương trình
                        </b-button> -->
                    </div>

                    <div class="mt-4">
                        <div class="w-100 text-light btn btn-complete rounded-pill" variant="success">
                            <span class="mdi mdi-check-circle"></span>
                            <span>Đơn đã hoàn thành</span>
                        </div>
                    </div>
                </div>

                <!-- // Đơn hoàn -->
                <div class="mt-6" v-if="data?.trang_thai == 'Đơn hoàn'">
                    <div class="d-flex">
                        <div disabled class="w-100 rounded-pill btn btn-deactive" variant="danger">
                            Hủy đơn
                        </div>
                        <div disabled class="w-100 rounded-pill mx-4 btn btn-deactive" variant="info">
                            Hoàn tiền
                        </div>
                        <!-- <div disabled class="w-100 rounded-pill btn btn-deactive" variant="warning">
                            Chương trình
                        </div> -->
                    </div>

                    <div class="mt-4">
                        <b-button class="w-100 text-light rounded-pill btn btn-hoaned" variant="primary">
                            <span class="mdi mdi-check-circle"></span>
                            <span>Đơn hoàn</span>
                        </b-button>
                    </div>
                </div>


                <v-card style="min-width: 245px;" class="teacher-nav p-2 cp mt-5">
                    <div class="block w-100 teachers " @click="delete_item()">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="">
                                <span class="me-2">
                                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16.8335" cy="16" r="16" fill="#F2F2F2" />
                                        <g clip-path="url(#clip0_683_10960)">
                                            <path
                                                d="M16.8979 11.1534C19.0306 11.1534 21.1663 11.1594 23.2991 11.1475C23.6311 11.1475 23.7567 11.1802 23.7118 11.5789C23.4606 13.849 23.1974 16.1222 23.0448 18.4013C22.9581 19.6896 22.8534 20.9719 22.7487 22.2572C22.6889 22.9951 22.626 23.4801 22.4944 24.2061C22.3239 25.1344 21.941 26.0002 20.589 25.9883C18.1153 25.9913 15.6416 25.9645 13.1708 26.0002C12.1538 26.0151 11.3492 25.8038 11.1129 24.2061C10.8466 22.412 10.2783 14.1019 10.2783 14.1019L10.051 11.7157C10.051 11.7157 9.98816 11.1534 10.5415 11.1534C12.6623 11.1534 14.7801 11.1534 16.9009 11.1534H16.8979ZM17.4124 18.55C17.4124 17.2736 17.4124 15.9972 17.4124 14.7208C17.4124 14.2983 17.197 14.0305 16.862 14.0216C16.4881 14.0127 16.2189 14.3072 16.2189 14.7387C16.2189 17.2766 16.2189 19.8145 16.2219 22.3554C16.2219 22.8047 16.4701 23.1052 16.8321 23.1171C17.1701 23.129 17.4064 22.8107 17.4064 22.3376C17.4064 21.0761 17.4064 19.8115 17.4064 18.55H17.4124ZM20.2989 18.5411C20.2989 17.2498 20.2989 15.9556 20.2989 14.6643C20.2989 14.4977 20.3198 14.331 20.1493 14.212C19.9579 14.0781 19.7784 13.9591 19.5301 14.0692C19.2131 14.209 19.1173 14.453 19.1203 14.7803C19.1293 17.2944 19.1293 19.8115 19.1353 22.3257C19.1353 22.8017 19.3656 23.1082 19.7156 23.1112C20.0656 23.1171 20.3049 22.8017 20.3049 22.3376C20.3049 21.0731 20.3049 19.8086 20.3049 18.5441L20.2989 18.5411ZM14.5258 18.5708C14.5258 17.2528 14.5258 15.9347 14.5258 14.6167C14.5258 14.218 14.3553 14.0305 13.9934 14.0246C13.6793 14.0186 13.4251 14.2686 13.4251 14.6167C13.4221 17.2379 13.4221 19.8621 13.4251 22.4834C13.4251 22.8583 13.7003 23.1409 14.0173 23.1082C14.3852 23.0695 14.5378 22.8702 14.5318 22.4863C14.5139 21.1832 14.5258 19.877 14.5258 18.5738V18.5708Z"
                                                fill="#979797" />
                                            <path
                                                d="M16.8111 10.0553C14.5796 10.0553 12.3482 10.0553 10.1137 10.0553C9.42277 10.0553 8.8335 9.51382 8.8335 8.88008C8.8335 8.29097 9.41977 7.72864 10.0898 7.72269C11.4179 7.71079 12.746 7.70781 14.0741 7.72864C14.442 7.73459 14.5557 7.63938 14.5377 7.26152C14.5048 6.59802 15.1121 6.01486 15.7911 6.00891C16.4701 6.00296 17.1491 6.04462 17.8251 5.99999C18.537 5.95238 19.1771 6.6129 19.1203 7.23771C19.0844 7.63641 19.2459 7.73162 19.6228 7.72566C20.909 7.70781 22.1952 7.74947 23.4785 7.71674C24.3429 7.69591 25.1416 8.35048 24.7168 9.40076C24.5643 9.7816 24.1455 10.0494 23.5951 10.0494C21.4325 10.0494 19.2728 10.0494 17.1102 10.0494C17.0115 10.0494 16.9128 10.0494 16.8141 10.0494L16.8111 10.0553Z"
                                                fill="#979797" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_683_10960">
                                                <rect width="16" height="20" fill="white"
                                                    transform="translate(8.8335 6)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <span>
                                    Xoá đơn dịch vụ này
                                </span>
                            </div>
                            <div>
                                <div class="web-icon">
                                    <span class="mdi mdi-chevron-right"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-card>


            </v-col>
        </v-row>

        <b-modal id="my-modal-cancel" ref="my-modal-cancel" hide-footer centered title="Xác nhận hủy?">
            <template #default="{ hide }">
                <form>

                    <div class="my-2">
                        <div>
                            <b-form-group>
                                <label>Lý do hủy:</label>
                                <b-form-textarea id="textarea" v-model="li_do_huy" placeholder="Lý do hủy..." rows="3"
                                    max-rows="6"></b-form-textarea>
                            </b-form-group>
                        </div>

                    </div>
                    <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                        <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                        <button type="button" class=" btn-delete ms-1" @click="huy_don()">Đồng ý</button>
                    </div>
                </form>

            </template>
        </b-modal>

        <b-modal id="my-modal-rollback" ref="my-modal-rollback" hide-footer centered title="Hoàn tiền">
            <template #default="{ hide }">
                <form>

                    <div class="my-2">
                        <div>
                            <b-form-group>
                                <label>Số lượng buổi hoàn:</label>
                                <b-form-input v-model="so_buoi_hoan" type="number"
                                    placeholder="Số lượng buổi hoàn"></b-form-input>
                            </b-form-group>
                        </div>
                        <div>
                            <b-form-group>
                                <label>Số tiền:</label>
                                <b-form-input v-model="so_tien_hoan" type="number" placeholder="Số tiền"></b-form-input>
                            </b-form-group>
                        </div>

                    </div>
                    <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                        <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                        <button type="button" class=" btn-delete ms-1" @click="confirm_hoan()">Đồng ý</button>
                    </div>
                </form>

            </template>
        </b-modal>


        <!-- them-phu-phi -->
        <b-modal id="my-modal-them-phu-phi" ref="my-modal-them-phu-phi" hide-footer centered title="Thêm phụ phí">
            <template #default="{ hide }">
                <form>

                    <div class="my-2">
                        <div>
                            <b-form-group>
                                <label>Nhập số tiền:</label>
                                <b-form-input v-model="phu_phi_tien" type="number"
                                    placeholder="Nhập số tiền"></b-form-input>
                            </b-form-group>
                        </div>
                        <div>
                            <b-form-group>
                                <label>Loại phí:</label>
                                <b-form-select v-model="nap_tien_id" :options="nap_tien"
                                    aria-placeholder="Chọn"></b-form-select>
                            </b-form-group>
                        </div>
                        <div>
                            <b-form-group>
                                <label>Nhập ghi chú:</label>
                                <b-form-textarea id="textarea" v-model="phu_phi_li_do" placeholder="Nhập ghi chú..."
                                    rows="3" max-rows="6"></b-form-textarea>
                            </b-form-group>
                        </div>

                    </div>
                    <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                        <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                        <button type="button" class=" btn-delete ms-1" @click="add_phu_phi()">Thêm phụ phí</button>
                    </div>
                </form>

            </template>
        </b-modal>

        <b-modal id="my-modal-gia-han" ref="my-modal-gia-han" hide-footer centered title="Gia hạn đơn">
            <template #default="{ hide }">
                <form>

                    <div class="my-2">
                        <div>
                            <b-form-group>
                                <label>Nhập số buổi:</label>
                                <b-form-input v-model="so_buoi_gia_han" type="number" placeholder="Nhập"
                                    min="0"></b-form-input>
                            </b-form-group>
                        </div>

                    </div>
                    <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                        <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                        <button type="button" class=" btn-delete ms-1" @click="send_gia_han()">Xác nhận</button>
                    </div>
                </form>

            </template>
        </b-modal>

    </div>
</template>

<script>
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';
import DetailServiceInfo from '~/components/service/DetailServiceInfo.vue';

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Chi tiết đơn',
                previous: '/admin/orders'
            },
            data: null,
            file: null,
            image: null,
            kds: null,
            kds_id: null,
            teachers: null,
            teacher_id: null,
            teacherss: null,
            teacher_ids: null,
            li_do_huy: null,
            phu_phi_li_do: null,
            phu_phi_tien: null,
            xac_nhan_thanh_toan: false,
            per_page: 0,
            current_page: 1,
            total: 0,
            nap_tien: null,
            nap_tien_id: null,
            so_buoi_hoan: 0,
            so_tien_hoan: 0,
            tuKhoa: '',
            timeOut: null,
            timer: 400,
            chuong_trinh_id: null,
            chuong_trinh: [],
            goi_hoc_id: null,
            goi_hoc: [],
            bai_hoc_id: null,
            bai_hoc: [],
            array_bai_hoc: [],
            trinh_do_giao_viens: [],
            trinh_do_giao_vien: 0,
            cac_buoi_chua_days: [],
            buoi_chua_day_id: null,
            so_buoi_gia_han: 0,
        };
    },
    components: {
        DetailServiceInfo
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
        clearFiles() {
            this.$refs['file-input'].reset()
        },
        async delete_item() {
            const formData = new FormData();
            formData.append('id', this.id)

            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: `Xoá đơn dịch vụ đã chọn!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Xác nhận!',
                cancelButtonText: 'Huỷ'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.post('dich-vu/xoa-don-dich-vu', formData, {
                        'Content-Type': 'multipart/form-data',
                        Authorization: 'Bearer ' + this.token
                    }).then(res => {
                        if (res?.status == 200) {
                            toastr.success(res?.data?.message);
                            this.$router.push('/admin/orders');
                        } else {
                            toastr.error(res?.data?.message);
                        }
                    })

                }
            })
        },
        set_teacher(id) {
            if (this.teacher_id == id) {
                this.teacher_id = null
            } else {
                this.teacher_id = id
            }
            console.log(this.teacher_id)
        },
        set_teachers(id) {
            if (this.teacher_ids == id) {
                this.teacher_ids = null
            } else {
                this.teacher_ids = id
            }
            console.log(this.teacher_ids)
        },
        async confirm_hoan() {
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('so_buoi_hoan', this.so_buoi_hoan)
            formData.append('so_tien_hoan', this.so_tien_hoan)

            await api.post('don-dich-vu/hoan-don', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-rollback'].hide()
                    this.so_buoi_hoan = 0
                    this.so_tien_hoan = 0
                    this.load_data();
                }
            })
        },
        async add_teacher() {
            if (!this.teacher_id) {
                toastr.error('Chọn giáo viên để tiếp tục');
                return
            }
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('giao_vien_id', this.teacher_id)

            await api.post('don-dich-vu/dieu-giao-vien', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-teacher'].hide()
                    this.teacher_id = null
                    this.load_data();
                }
            })
        },
        async send_gia_han() {
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('so_buoi', this.so_buoi_gia_han)
            await api.post('don-dich-vu/gia-han-don', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-gia-han'].hide()
                    this.so_buoi_gia_han = 0
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000)
                    // this.load_data();
                }
            })
        },
        async add_teachers() {
            if (!this.teacher_ids) {
                toastr.error('Chọn giáo viên để tiếp tục');
                return
            }
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('giao_vien_id', this.teacher_ids)
            formData.append('buoi_chua_day_id', this.buoi_chua_day_id)

            await api.post('don-dich-vu/dieu-giao-vien', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-teacher-doi'].hide()
                    this.teacher_id = null
                    this.load_data();
                }
            })
        },
        async load_kd() {
            await api.get('don-dich-vu/leader-kinh-doanh', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.kds = res?.data?.data.map(item => {
                    return {
                        value: item.id,
                        text: item.hoten
                    };
                })
            })

        },
        async load_data() {
            await api.get(`dich-vu/danh-sach?page=1&limit=1000&sort=1&tuKhoa=`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.dich_vu = res?.data?.data.map(item => {
                    return {
                        value: item.id,
                        text: item.ten_dich_vu
                    };
                })
            })

            await api.get(`don-dich-vu/get-trinh-do-khi-dieu-giao-vien`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.trinh_do_giao_viens = res?.data?.data.map(item => {
                    return {
                        value: item?.id,
                        text: item?.name ?? (item?.id + ' - Chưa cập nhật')
                    };
                })
                this.trinh_do_giao_vien = this.trinh_do_giao_viens[0].value
            })

            await api.get(`giao-vien/loai-giao-dich-nap-tien`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.nap_tien = res?.data?.data.map(item => {
                    return {
                        value: item?.id,
                        text: item?.name ?? (item?.id + ' - Chưa cập nhật')
                    };
                })
                this.nap_tien_id = this.nap_tien[0].value
            })

            await api.get(`don-dich-vu/chi-tiet?id=` + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.data = res?.data?.data
                this.xac_nhan_thanh_toan = res?.data?.data?.trang_thai_thanh_toan == 'Đã thanh toán' ? true : false
                const chuong_trinh_hoc_id = res?.data?.data?.chuong_trinh_hoc_id
                this.chuong_trinh_id = chuong_trinh_hoc_id
                this.kds_id = res?.data?.data?.leaderKD?.id
                this.cac_buoi_chua_days = res?.data?.data?.tienDoKhoaHocChuaDay.map(item => {
                        return {
                            value: item.id,
                            text: 'Buổi thứ: ' + item.buoi ?? item.buoi,
                        };
                    })
                this.buoi_chua_day_id = this.cac_buoi_chua_days[0].value
                api.get(`don-dich-vu/danh-sach-chuong-trinh-hoc?id=` + res?.data?.data?.id, {
                    'Content-Type': 'multipart/form-data',
                    Authorization: 'Bearer ' + this.token
                }).then(res => {
                    this.chuong_trinh = res?.data?.data.map(item => {
                        return {
                            value: item.id,
                            text: item.tieu_de ?? item.id,
                        };
                    })
                    if (this.chuong_trinh_id == null) {
                        this.chuong_trinh_id = this.chuong_trinh[0].value
                    }

                })

            //     if(this.data?.giaoVien) {

            // } else {

            // }

            api.get(`don-dich-vu/danh-sach-giao-vien?tuKhoa=${this.tuKhoa ?? ''}&page=1&limit=1000&id=` + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.teachers = res?.data?.data
            })

            api.get(`don-dich-vu/danh-sach-giao-vien-dang-ranh?trinh_do=26`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.teacherss = res?.data?.data
            })

                this.data?.ke_hoach_day.map(goiHoc => {
                    this.array_bai_hoc.push(...goiHoc?.goiHoc?.map(item => (
                        item.id
                    )));
                })
                
                console.log(123)
                console.log(this.array_bai_hoc)
            })


        },
        async add_phu_phi() {
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('tong_tien', this.phu_phi_tien)
            formData.append('ghi_chu', this.phu_phi_li_do)
            formData.append('type_id', this.nap_tien_id)

            await api.post('don-dich-vu/them-phu-phi', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-them-phu-phi'].hide()
                    this.phu_phi_tien = null
                    this.phu_phi_li_do = null
                    this.load_data();
                }
            })
        },
        async duyet_don() {
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('leader_kd_id', this.kds_id)
            // formData.append('noi_dung_khao_sat', this.noi_dung_khao_sat)
            // formData.append('xac_nhan_thanh_toan', this.xac_nhan_thanh_toan ? 1 : 0)

            await api.post('don-dich-vu/duyet-don', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal'].hide()
                    this.kds_id = null
                    window.location.reload();
                    this.load_data();
                }
            })
        },
        async duyet_don_kd() {
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('leader_kd_id', this.kds_id)

            await api.post('don-dich-vu/sua-leaderkd', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-edit-kd'].hide()
                    this.kds_id = null
                    window.location.reload();
                    this.load_data();
                }
            })
        },
        async huy_don() {
            if (this.li_do_huy == '' || this.li_do_huy == null) {
                toastr.error('Vui lòng nhập lý do huỷ đơn');
                return
            }
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('li_do_huy', this.li_do_huy)

            await api.post('don-dich-vu/huy-don', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-cancel'].hide()
                    this.li_do_huy = null
                    this.load_data();
                }
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
        async delete_bh(id) {
            const formData = new FormData();
            formData.append('id', this.id)
            formData.append('bai_hoc_id', id)

            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: `Xoá lựa chọn này!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Xác nhận!',
                cancelButtonText: 'Huỷ'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.post('don-dich-vu/xoa-bai-hoc', formData, {
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
                            // this.load_data()
                            setTimeout(function () {
                                window.location.reload();
                            }, 1000)
                        } else {
                            toastr.error(res?.data?.message);
                        }
                    })

                }
            })
        },
        xac_nhan_thanh_toan_method() {
            const formData = new FormData();
            formData.append('id', this.id)
            formData.append('xac_nhan_thanh_toan', this.xac_nhan_thanh_toan == true ? 1 : 0)

            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: `Xác nhận thanh toán đơn này!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Chắc chắn/Chấp nhận!',
                cancelButtonText: 'Huỷ'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.post('don-dich-vu/xac-nhan-thanh-toan', formData, {
                        'Content-Type': 'multipart/form-data',
                        Authorization: 'Bearer ' + this.token
                    }).then(res => {
                        if (res?.status == 200) {
                            toastr.success(res?.data?.message);
                            // this.$router.push('/admin/service');
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
        this.load_kd()
    },
    watch: {
        tuKhoa() {
            clearTimeout(this.timeOut);
            console.log(this.tuKhoa)
            if(this.tuKhoa != null && this.tuKhoa != '') {
                this.timeOut = setTimeout(() => {
                    // this.load_kd()
                    api.get(`don-dich-vu/danh-sach-giao-vien-dang-ranh?trinh_do=${this.trinh_do_giao_vien}&tuKhoa=` + this.tuKhoa, {
                        'Content-Type': 'multipart/form-data',
                        Authorization: 'Bearer ' + this.token
                    }).then(res => {
                        this.teachers = res?.data?.data
                    })
                    // this.load_kd()

                }, this.timer);
            }
        },
        // async trinh_do_giao_vien() {
        //     await api.get(`don-dich-vu/danh-sach-giao-vien-dang-ranh?trinh_do=${this.trinh_do_giao_vien}&tuKhoa=` + this.tuKhoa, {
        //         'Content-Type': 'multipart/form-data',
        //         Authorization: 'Bearer ' + this.token
        //     }).then(res => {
        //         this.teachers = res?.data?.data
        //     })
        // },
        async chuong_trinh_id() {
            if (this.chuong_trinh_id) {
                await api.get(`don-dich-vu/danh-sach-goi-hoc?page=1&limit=1000&chuong_trinh_hoc_id=` + (this.chuong_trinh_id ?? ''), {
                    'Content-Type': 'multipart/form-data',
                    Authorization: 'Bearer ' + this.token
                }).then(res => {
                    this.goi_hoc = res?.data?.data.map(item => {
                        return {
                            value: item.id,
                            text: item.name ?? item.id,
                            baiHoc: item.baiHoc ?? [],
                        };
                    })
                    if (this.goi_hoc_id == null && this.goi_hoc.length > 0) {
                        this.goi_hoc_id = this.goi_hoc[0].value
                    }
                })
            }

        },
        goi_hoc_id() {
            let bai_hoc = this.bai_hoc
            bai_hoc = []
            bai_hoc.unshift({
                value: 0,
                text: 'Chọn bài học'
            });
            // if(this.goi_hoc?.baiHoc?.length)
            var result = this.goi_hoc.find(x => {
                console.log(x)
                return x.value === this.goi_hoc_id
            })
            bai_hoc.push(...result?.baiHoc?.map(item => ({
                value: item.id,
                text: item.tieu_de ?? item.id,
            })));
            this.bai_hoc = bai_hoc
            this.bai_hoc_id = this.bai_hoc[0]?.value
        },
        async bai_hoc_id() {
            if (this.bai_hoc_id == 0 || this.bai_hoc_id == null) {
                return
            }
            this.array_bai_hoc.push(this.bai_hoc_id)

            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('chuong_trinh_hoc_id', this.chuong_trinh_id)

            for (var i = 0; i < this.array_bai_hoc.length; i++) {
                formData.append(`baiHocs[${i}]`, this.array_bai_hoc[i])
            }
            console.log(this.array_bai_hoc, this.bai_hoc_id)

            await api.post('don-dich-vu/them-chuong-trinh-hoc', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.load_data();

                    // setTimeout(function () {
                    //     window.location.reload();
                    // }, 1000)
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.box-teacher {
    max-height: 464px;
    overflow-y: auto;
    padding: 4px;
}

.blade-primary {
    border-radius: 46px;
    border: 1px solid #0056B1;
    background: rgba(0, 86, 177, 0.10);
    padding: 8px 20px;
    color: #0056B1;
    text-align: center;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

table {
    margin: 0 !important;
    padding: 0 !important;
}

button:hover {
    span {
        color: white;
    }
}

button {
    transition: 0.3s;

    span {
        transition: 0.3s;
    }
}

.box-img img {
    width: 40px;
}

.btn {
    padding: 0.575rem 0.75rem !important;
}

.card-teacher {
    border-radius: 10px;
    background: #FFF;
    border: 1px solid #c9c8c8;
    padding: 10px;
    margin-bottom: 10px;
}

.card-teacher.active {
    border-radius: 10px;
    border: 1px solid #4EAEEA;

    background: #E7F6FF;
}
</style>