<template>
    <div class="content-mp">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="8" md="8" lg="4" xl="3">
                <b-card style="min-width: 245px;" class="">
                    <nuxt-link class="block w-100 teachers teacher-detail" to="#">
                        <div class="d-flex align-center">
                            <div class="me-2 layout-user">
                                <img :src="data?.anh_nguoi_dung" :alt="data?.hoten">
                            </div>
                            <div class="flex-1">
                                <div class="d-flex align-items-center w-100 justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <span class="blade-id me-2"># {{ data?.id }}</span>
                                        <span class="blade-rate">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10"
                                                viewBox="0 0 11 10" fill="none">
                                                <path
                                                    d="M4.46066 1.32835C4.85351 0.710079 5.75587 0.710078 6.14872 1.32835L7.01485 2.69149C7.16144 2.92219 7.39607 3.08284 7.66418 3.13605L9.203 3.44151C9.98137 3.59602 10.2783 4.55212 9.72438 5.12038L8.7729 6.09651C8.56414 6.31067 8.4622 6.60703 8.49504 6.9043L8.6476 8.28556C8.73067 9.03764 7.98069 9.60595 7.2791 9.32255L5.67923 8.67629C5.43897 8.57924 5.17041 8.57924 4.93015 8.67629L3.33027 9.32255C2.62869 9.60595 1.8787 9.03764 1.96178 8.28556L2.11434 6.9043C2.14717 6.60703 2.04523 6.31067 1.83647 6.09651L0.884995 5.12038C0.331079 4.55212 0.628003 3.59602 1.40638 3.44151L2.9452 3.13605C3.2133 3.08284 3.44794 2.92219 3.59452 2.69149L4.46066 1.32835Z"
                                                    fill="#FFB761" />
                                            </svg>
                                            <span class="span-text">{{ data?.danh_gia }}</span>
                                        </span>
                                    </div>
                                    <div>
                                        <nuxt-link :to="'/admin/users/teachers/' + data?.id + '/edit'" v-b-tooltip.hover
                                            title="Sửa thông tin">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="15" cy="15" r="15" fill="#F2F2F2" />
                                                <path
                                                    d="M21.75 22.5H8.25C7.9425 22.5 7.6875 22.245 7.6875 21.9375C7.6875 21.63 7.9425 21.375 8.25 21.375H21.75C22.0575 21.375 22.3125 21.63 22.3125 21.9375C22.3125 22.245 22.0575 22.5 21.75 22.5Z"
                                                    fill="#979797" />
                                                <path
                                                    d="M20.2649 8.61024C18.8099 7.15524 17.3849 7.11774 15.8924 8.61024L14.9849 9.51774C14.9099 9.59274 14.8799 9.71274 14.9099 9.81774C15.4799 11.8052 17.0699 13.3952 19.0574 13.9652C19.0874 13.9727 19.1174 13.9802 19.1474 13.9802C19.2299 13.9802 19.3049 13.9502 19.3649 13.8902L20.2649 12.9827C21.0074 12.2477 21.3674 11.5352 21.3674 10.8152C21.3749 10.0727 21.0149 9.35274 20.2649 8.61024Z"
                                                    fill="#979797" />
                                                <path
                                                    d="M17.7075 14.6471C17.49 14.5421 17.28 14.4371 17.0775 14.3171C16.9125 14.2196 16.755 14.1146 16.5975 14.0021C16.47 13.9196 16.32 13.7996 16.1775 13.6796C16.1625 13.6721 16.11 13.6271 16.05 13.5671C15.8025 13.3571 15.525 13.0871 15.2775 12.7871C15.255 12.7721 15.2175 12.7196 15.165 12.6521C15.09 12.5621 14.9625 12.4121 14.85 12.2396C14.76 12.1271 14.655 11.9621 14.5575 11.7971C14.4375 11.5946 14.3325 11.3921 14.2275 11.1821C14.0898 10.8871 13.7026 10.7995 13.4724 11.0297L9.255 15.2471C9.1575 15.3446 9.06749 15.5321 9.04499 15.6596L8.63999 18.5321C8.56499 19.0421 8.7075 19.5221 9.0225 19.8446C9.2925 20.1071 9.66749 20.2496 10.0725 20.2496C10.1625 20.2496 10.2525 20.2421 10.3425 20.2271L13.2225 19.8221C13.3575 19.7996 13.545 19.7096 13.635 19.6121L17.8594 15.3877C18.085 15.1621 18.0002 14.774 17.7075 14.6471Z"
                                                    fill="#979797" />
                                            </svg>
                                        </nuxt-link>
                                    </div>
                                </div>
                                <h3 class="name">
                                    {{ data?.hoten ?? 'Chưa cập nhật tên' }}
                                </h3>
                                <p class="w-p p-0 m-0 position">
                                    {{ data?.trinh_do_name ?? 'Chưa cập nhật trình độ' }} - {{ data?.gioi_tinh ?? 'Chưa cập nhật giới tính' }}
                                </p>
                                <div class="d-flex align-items-center blade-infor">
                                    <span class="me-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                            fill="none">
                                            <circle cx="10" cy="10" r="10" fill="#0056B1" fill-opacity="0.1" />
                                            <path
                                                d="M13.9703 11.5492L15.4486 13.0275C15.7531 13.3321 15.7531 13.8258 15.4486 14.1304C13.802 15.777 11.1952 15.9622 9.33236 14.5651L9.22376 14.4836C7.81856 13.4297 6.57029 12.1814 5.51639 10.7762L5.43494 10.6676C4.03778 8.80476 4.22304 6.19801 5.86961 4.55145C6.17416 4.24689 6.66794 4.24689 6.9725 4.55145L8.45079 6.02974C8.84131 6.42026 8.84131 7.05342 8.45079 7.44395L7.4477 8.44704C7.2432 8.65154 7.1925 8.96395 7.32184 9.22262C8.06951 10.718 9.28203 11.9305 10.7774 12.6782C11.036 12.8075 11.3485 12.7568 11.553 12.5523L12.5561 11.5492C12.9466 11.1587 13.5797 11.1587 13.9703 11.5492Z"
                                                fill="#0056B1" />
                                        </svg>
                                        <span>{{ data?.dien_thoai ?? 'Chưa cập nhật SĐT' }}</span>
                                    </span>
                                    <span class="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                            fill="none">
                                            <path
                                                d="M7.5249 9.81408H7.9799C8.4349 9.81408 8.81289 9.40809 8.81289 8.91809C8.81289 8.30909 8.5959 8.19009 8.2389 8.06409L7.5319 7.81909V9.81408H7.5249Z"
                                                fill="#FFA02F" />
                                            <path
                                                d="M6.979 1.17483e-05C3.11503 0.0140117 -0.0139531 3.157 4.67969e-05 7.02098C0.0140467 10.885 3.15703 14.014 7.021 14C10.885 13.986 14.014 10.843 14 6.97898C13.986 3.115 10.843 -0.00698822 6.979 1.17483e-05ZM8.58199 7.06998C9.12799 7.25898 9.86298 7.66498 9.86298 8.91797C9.86298 9.99597 9.01599 10.864 7.97999 10.864H7.525V11.27C7.525 11.557 7.287 11.795 7 11.795C6.713 11.795 6.475 11.557 6.475 11.27V10.864H6.22301C5.07501 10.864 4.14402 9.89797 4.14402 8.70798C4.14402 8.42098 4.38202 8.18298 4.66902 8.18298C4.95601 8.18298 5.19401 8.42098 5.19401 8.70798C5.19401 9.31697 5.65601 9.81397 6.22301 9.81397H6.475V7.44798L5.41801 7.06998C4.87201 6.88098 4.13702 6.47498 4.13702 5.22199C4.13702 4.14399 4.98401 3.276 6.02001 3.276H6.475V2.87C6.475 2.583 6.713 2.345 7 2.345C7.287 2.345 7.525 2.583 7.525 2.87V3.276H7.77699C8.92499 3.276 9.85598 4.24199 9.85598 5.43199C9.85598 5.71899 9.61798 5.95699 9.33098 5.95699C9.04399 5.95699 8.80599 5.71899 8.80599 5.43199C8.80599 4.82299 8.34399 4.32599 7.77699 4.32599H7.525V6.69198L8.58199 7.06998Z"
                                                fill="#FFA02F" />
                                            <path
                                                d="M5.19385 5.22911C5.19385 5.8381 5.41085 5.9571 5.76784 6.0831L6.47484 6.3281V4.32611H6.01984C5.56485 4.32611 5.19385 4.73211 5.19385 5.22911Z"
                                                fill="#FFA02F" />
                                        </svg>
                                        <span class="span-text">{{ formatCurrency(data?.vi_dien_tu) }} đ</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </nuxt-link>
                </b-card>
            </v-col>

            <v-col class="mt-0 pt-0" xs="12" sm="8" md="8" lg="5" xl="5">
                <div class="w-100 teacher-detail-info" style="min-width: 300px;">
                    <h3>Thông tin cá nhân</h3>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="align-top td-first">
                                            <span class="w-text-p">
                                                Họ và tên
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="w-text-p-1">
                                            {{ data?.hoten ?? 'Chưa cập nhật tên' }}
                                        </span>
                                    </td>
                                </tr>
                                <tr v-if="data?.ngay_sinh">
                                    <td>
                                        <div class="align-top td-first">
                                            <span class="w-text-p">
                                                Ngày sinh
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="w-text-p-1">
                                            {{ data?.ngay_sinh ?? 'Chưa cập nhật' }}
                                        </span>
                                    </td>
                                </tr>
                                <tr v-if="data?.cmnd_cccd">
                                    <td>
                                        <div class="align-top td-first">
                                            <span class="w-text-p">
                                                CMND/CCCD
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="w-text-p-1">
                                            {{ data?.cmnd_cccd ?? 'Chưa cập nhật' }}
                                        </span>
                                    </td>
                                </tr>
                                <tr v-if="data?.email">
                                    <td>
                                        <div class="align-top td-first">
                                            <span class="w-text-p">
                                                Email
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="w-text-p-1">
                                            {{ data?.email == '' ? 'Chưa cập nhật' : data?.email }}
                                        </span>
                                    </td>
                                </tr>
                                <tr  v-if="data?.bang_cap">
                                    <td>
                                        <div class="align-top td-first">
                                            <span class="w-text-p">
                                                Bằng cấp
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="w-text-p-1">
                                            {{ !data?.bang_cap ? 'Chưa cập nhật' : data?.bang_cap}}
                                        </span>
                                    </td>
                                </tr>
                                <tr  v-if="chungNhan?.length != 0">
                                    <td>
                                        <div class="align-top td-first">
                                            <span class="w-text-p">
                                                Chứng chỉ/ Chứng nhận
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="cp text-primary" @click="open = !open" v-b-toggle.collapse-1
                                            variant="primary">
                                            {{ open == true ? 'Xem chi tiết' : 'Thu gọn' }}
                                        </div>
                                        <b-collapse id="collapse-1" class="mt-2">
                                            <div v-if="chungNhan?.length == 0">
                                                <p class="text-danger">Chưa cập nhật Chứng chỉ/ Chứng nhận</p>
                                            </div>
                                            <div v-else v-for="(item, index) in chungNhan" v-bind:key="index"
                                                class="card-certificate mb-2">
                                                <div class="card-certificate-body">
                                                    <div class="box-certificate">
                                                        <img :src="item?.file_path" />
                                                    </div>

                                                    <a :href="item?.file_path" target="_blank" v-b-tooltip.hover
                                                        title="Xem chi tiết Chứng chỉ - Chứng nhận">
                                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="16" cy="16" r="16" fill="#F2F2F2" />
                                                            <path
                                                                d="M19.5556 12.4444L24 8M24 8H19.5556M24 8V12.4444M12.4444 12.4444L8 8M8 8L8 12.4444M8 8L12.4444 8M12.4444 19.5556L8 24M8 24H12.4444M8 24L8 19.5556M19.5556 19.5556L24 24M24 24V19.5556M24 24H19.5556"
                                                                stroke="#979797" stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </b-collapse>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </v-col>
        </v-row>
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="8" lg="8" xl="8">
                <div class="w-100 teacher-detail-info-nav" style="min-width: 300px;">
                    <h3>Tùy chỉnh</h3>
                    <div class="w-100">
                        <div>

                            <b-card style="min-width: 245px;" class="teacher-nav">
                                <nuxt-link class="block w-100 teachers "
                                    :to="'/admin/users/teachers/' + data?.id + '/change-service'">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="">
                                            <span class="me-2">
                                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="15" cy="15.5" r="15" fill="#FFB761" fill-opacity="0.2" />
                                                    <path
                                                        d="M22.526 12.1683L15.4677 16.2566C15.1835 16.4216 14.826 16.4216 14.5327 16.2566L7.47436 12.1683C6.9702 11.8749 6.84186 11.1874 7.22686 10.7566C7.4927 10.4541 7.7952 10.2066 8.11603 10.0324L13.0844 7.28245C14.1477 6.68661 15.871 6.68661 16.9344 7.28245L21.9027 10.0324C22.2235 10.2066 22.526 10.4633 22.7919 10.7566C23.1585 11.1874 23.0302 11.8749 22.526 12.1683Z"
                                                        fill="#FFB761" />
                                                    <path
                                                        d="M14.4773 17.9617V24.2134C14.4773 24.9101 13.7714 25.3684 13.1481 25.0659C11.2598 24.1401 8.07895 22.4076 8.07895 22.4076C6.96061 21.7751 6.04395 20.1801 6.04395 18.8692V14.1392C6.04395 13.4151 6.80478 12.9567 7.42811 13.3142L14.0189 17.1367C14.2939 17.3109 14.4773 17.6226 14.4773 17.9617Z"
                                                        fill="#FFB761" />
                                                    <path
                                                        d="M15.5225 17.9617V24.2134C15.5225 24.9101 16.2283 25.3684 16.8516 25.0659C18.74 24.1401 21.9208 22.4076 21.9208 22.4076C23.0391 21.7751 23.9558 20.1801 23.9558 18.8692V14.1392C23.9558 13.4151 23.195 12.9567 22.5716 13.3142L15.9808 17.1367C15.7058 17.3109 15.5225 17.6226 15.5225 17.9617Z"
                                                        fill="#FFB761" />
                                                </svg>
                                            </span>
                                            <span>
                                                Thay đổi dịch vụ
                                            </span>
                                        </div>
                                        <div>
                                            <div class="web-icon">
                                                <span class="mdi mdi-chevron-right"></span>
                                            </div>
                                        </div>
                                    </div>
                                </nuxt-link>
                            </b-card>

                            <b-card style="min-width: 245px;" class="teacher-nav">
                                <nuxt-link class="block w-100 teachers "
                                    :to="'/admin/users/teachers/' + data?.id + '/change-level'">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="">
                                            <span class="me-2">
                                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="15" cy="15.5" r="15" fill="#4EAEEA" fill-opacity="0.2" />
                                                    <path
                                                        d="M19.4789 18.3922C20.1695 17.9353 21.0767 18.4338 21.0767 19.2646V20.6043C21.0767 21.9233 20.0561 23.3357 18.8294 23.7511L15.541 24.852C14.9637 25.0493 14.0256 25.0493 13.4586 24.852L10.1701 23.7511C8.9331 23.3357 7.92285 21.9233 7.92285 20.6043V19.2542C7.92285 18.4338 8.83001 17.9353 9.51038 18.3819L11.634 19.7735C12.4484 20.3239 13.4792 20.5939 14.5101 20.5939C15.541 20.5939 16.5718 20.3239 17.3862 19.7735L19.4789 18.3922Z"
                                                        fill="#4EAEEA" />
                                                    <path
                                                        d="M22.5685 10.2485L16.5196 6.50696C15.429 5.83101 13.6315 5.83101 12.5409 6.50696L6.46173 10.2485C4.51276 11.4386 4.51276 14.1329 6.46173 15.3324L8.07746 16.3226L12.5409 19.0645C13.6315 19.7404 15.429 19.7404 16.5196 19.0645L20.9528 16.3226L22.3363 15.4657V18.379C22.3363 18.7693 22.6796 19.093 23.0936 19.093C23.5077 19.093 23.851 18.7693 23.851 18.379V13.6949C24.2549 12.4668 23.8409 11.0387 22.5685 10.2485Z"
                                                        fill="#4EAEEA" />
                                                </svg>

                                            </span>
                                            <span>
                                                Thay đổi trình độ
                                            </span>
                                        </div>
                                        <div>
                                            <div class="web-icon">
                                                <span class="mdi mdi-chevron-right"></span>
                                            </div>
                                        </div>
                                    </div>
                                </nuxt-link>
                            </b-card>

                            <b-card style="min-width: 245px;" class="teacher-nav">
                                <nuxt-link class="block w-100 teachers "
                                    :to="'/admin/users/teachers/' + data?.id + '/training-results'">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="">
                                            <span class="me-2">
                                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="15" cy="15.5" r="15" fill="#EB1B24" fill-opacity="0.2" />
                                                    <path
                                                        d="M23.3721 9.18605H6.62791C6.28465 9.18605 6 8.91721 6 8.59302C6 8.26884 6.28465 8 6.62791 8H23.3721C23.7153 8 24 8.26884 24 8.59302C24 8.91721 23.7153 9.18605 23.3721 9.18605Z"
                                                        fill="#EB1B24" />
                                                    <path
                                                        d="M18.9098 24.6758C18.801 24.8814 18.575 25 18.3489 25C18.2568 25 18.1564 24.9763 18.0726 24.9367L15.0001 23.4898L11.9275 24.9367C11.8438 24.9763 11.7433 25 11.6512 25C11.4252 25 11.1991 24.8814 11.0903 24.6758C10.9312 24.3754 11.0568 24.0195 11.375 23.8772L14.3722 22.4619V20.4535H15.628V22.4619L18.6252 23.8772C18.9433 24.0195 19.0689 24.3754 18.9098 24.6758Z"
                                                        fill="#EB1B24" />
                                                    <path
                                                        d="M7.46533 8.59302V18.1605C7.46533 19.6628 8.30254 20.4535 9.89324 20.4535H20.1072C21.6979 20.4535 22.5351 19.6628 22.5351 18.1605V8.59302H7.46533ZM19.1695 13.7958L16.5323 15.8753C16.2895 16.0651 15.9798 16.1442 15.6867 16.0967C15.3853 16.0493 15.1258 15.8753 14.9667 15.6223L14.0877 14.2386L11.6346 16.1679C11.5174 16.2628 11.3751 16.3023 11.2328 16.3023C11.057 16.3023 10.8728 16.2312 10.7472 16.0888C10.5211 15.8358 10.563 15.4642 10.8309 15.2507L13.4681 13.1712C13.7109 12.9814 14.0207 12.9023 14.3137 12.9498C14.6151 12.9972 14.8746 13.1712 15.0337 13.4242L15.9128 14.8079L18.3658 12.8786C18.6337 12.6651 19.0272 12.7046 19.2532 12.9577C19.4709 13.2107 19.4374 13.5823 19.1695 13.7958Z"
                                                        fill="#EB1B24" />
                                                </svg>

                                            </span>
                                            <span>
                                                Kết quả đào tạo
                                            </span>
                                        </div>
                                        <div>
                                            <div class="web-icon">
                                                <span class="mdi mdi-chevron-right"></span>
                                            </div>
                                        </div>
                                    </div>
                                </nuxt-link>
                            </b-card>

                            <b-card style="min-width: 245px;" class="teacher-nav">
                                <nuxt-link class="block w-100 teachers "
                                    :to="'/admin/users/teachers/' + data?.id + '/course-history'">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="">
                                            <span class="me-2">
                                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="15" cy="15.5" r="15" fill="#00C092" fill-opacity="0.2" />
                                                    <path
                                                        d="M15 6C9.49 6 5 10.2655 5 15.5C5 20.7345 9.49 25 15 25C20.51 25 25 20.7345 25 15.5C25 10.2655 20.51 6 15 6ZM19.35 18.8915C19.21 19.1195 18.96 19.243 18.7 19.243C18.57 19.243 18.44 19.2145 18.32 19.1385L15.22 17.381C14.45 16.944 13.88 15.9845 13.88 15.139V11.244C13.88 10.8545 14.22 10.5315 14.63 10.5315C15.04 10.5315 15.38 10.8545 15.38 11.244V15.139C15.38 15.481 15.68 15.9845 15.99 16.1555L19.09 17.913C19.45 18.1125 19.57 18.5495 19.35 18.8915Z"
                                                        fill="#00C092" />
                                                </svg>

                                            </span>
                                            <span>
                                                Lịch sử khóa học
                                            </span>
                                        </div>
                                        <div>
                                            <div class="web-icon">
                                                <span class="mdi mdi-chevron-right"></span>
                                            </div>
                                        </div>
                                    </div>
                                </nuxt-link>
                            </b-card>

                            <b-card style="min-width: 245px;" class="teacher-nav">
                                <nuxt-link class="block w-100 teachers "
                                    :to="'/admin/users/teachers/' + data?.id + '/recharge'">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="">
                                            <span class="me-2">
                                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="15" cy="15.5" r="15" fill="#0056B1" fill-opacity="0.2" />
                                                    <path
                                                        d="M8.61905 17.64C6.61952 17.64 5 19.2868 5 21.32C5 22.01 5.19 22.6632 5.52476 23.2152C6.14905 24.2824 7.2981 25 8.61905 25C9.94 25 11.089 24.2824 11.7133 23.2152C12.0481 22.6632 12.2381 22.01 12.2381 21.32C12.2381 19.2868 10.6186 17.64 8.61905 17.64ZM10.4014 21.0164L8.47429 22.8288C8.34762 22.9484 8.17571 23.0128 8.01286 23.0128C7.84095 23.0128 7.66905 22.9484 7.53333 22.8104L6.63762 21.8996C6.37524 21.6328 6.37524 21.1912 6.63762 20.9244C6.9 20.6576 7.33429 20.6576 7.59667 20.9244L8.03095 21.366L9.47857 20.0044C9.75 19.7468 10.1843 19.7652 10.4376 20.0412C10.691 20.3172 10.6729 20.7588 10.4014 21.0164Z"
                                                        fill="#0056B1" />
                                                    <path
                                                        d="M23.5475 15.3401H21.2856C20.2904 15.3401 19.4761 16.1681 19.4761 17.1801C19.4761 18.1921 20.2904 19.0201 21.2856 19.0201H23.5475C23.8008 19.0201 23.9999 18.8177 23.9999 18.5601V15.8001C23.9999 15.5425 23.8008 15.3401 23.5475 15.3401Z"
                                                        fill="#0056B1" />
                                                    <path
                                                        d="M19.051 8.80828C19.3225 9.07507 19.0963 9.48907 18.7163 9.48907L11.2248 9.47987C10.7905 9.47987 10.5734 8.94628 10.881 8.63348L12.4644 7.01429C13.8034 5.6619 15.9658 5.6619 17.3048 7.01429L19.0148 8.77148C19.0239 8.78068 19.042 8.79908 19.051 8.80828Z"
                                                        fill="#0056B1" />
                                                    <path
                                                        d="M23.8825 21.0073C23.3306 22.9024 21.7382 24.08 19.5668 24.08H13.6858C13.333 24.08 13.1068 23.6844 13.2515 23.3532C13.523 22.7092 13.6949 21.9825 13.6949 21.3201C13.6949 18.5325 11.4601 16.2601 8.71868 16.2601C8.03106 16.2601 7.36154 16.4073 6.7463 16.6833C6.41154 16.8305 6.00439 16.6005 6.00439 16.2325V14.8801C6.00439 12.3777 7.4882 10.6297 9.79535 10.3354C10.0215 10.2986 10.2658 10.2802 10.5192 10.2802H19.5668C19.802 10.2802 20.0282 10.2894 20.2453 10.3262C22.073 10.5377 23.3939 11.6693 23.8825 13.3529C23.973 13.6565 23.7558 13.9601 23.4482 13.9601H21.3763C19.413 13.9601 17.8568 15.7817 18.282 17.8517C18.5806 19.3605 19.9558 20.4001 21.4668 20.4001H23.4482C23.7649 20.4001 23.973 20.7129 23.8825 21.0073Z"
                                                        fill="#0056B1" />
                                                </svg>


                                            </span>
                                            <span>
                                                Nạp/ Trừ tiền
                                            </span>
                                        </div>
                                        <div>
                                            <div class="web-icon">
                                                <span class="mdi mdi-chevron-right"></span>
                                            </div>
                                        </div>
                                    </div>
                                </nuxt-link>
                            </b-card>

                            <b-card @click="khoa()" v-if="data?.khoa_tai_khoan == 0" style="min-width: 245px;"
                                class="teacher-nav">
                                <nuxt-link class="block w-100 teachers " to="#">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="">
                                            <span class="me-2">
                                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="15" cy="15.5" r="15" fill="#EB1B24" fill-opacity="0.2" />
                                                    <path
                                                        d="M15.0002 19.8152C15.8104 19.8152 16.4672 19.1584 16.4672 18.3482C16.4672 17.538 15.8104 16.8812 15.0002 16.8812C14.19 16.8812 13.5332 17.538 13.5332 18.3482C13.5332 19.1584 14.19 19.8152 15.0002 19.8152Z"
                                                        fill="#EB1B24" />
                                                    <path
                                                        d="M20.652 12.777V11.652C20.652 9.222 20.067 6 15 6C9.933 6 9.348 9.222 9.348 11.652V12.777C6.828 13.092 6 14.37 6 17.511V19.185C6 22.875 7.125 24 10.815 24H19.185C22.875 24 24 22.875 24 19.185V17.511C24 14.37 23.172 13.092 20.652 12.777ZM15 21.066C13.497 21.066 12.282 19.842 12.282 18.348C12.282 16.845 13.506 15.63 15 15.63C16.494 15.63 17.718 16.854 17.718 18.348C17.718 19.851 16.503 21.066 15 21.066ZM10.815 12.696C10.743 12.696 10.68 12.696 10.608 12.696V11.652C10.608 9.015 11.355 7.26 15 7.26C18.645 7.26 19.392 9.015 19.392 11.652V12.705C19.32 12.705 19.257 12.705 19.185 12.705H10.815V12.696Z"
                                                        fill="#EB1B24" />
                                                </svg>

                                            </span>
                                            <span>
                                                Khóa tài khoản
                                            </span>
                                        </div>
                                        <div>
                                            <div class="web-icon">
                                                <!-- <span class="mdi mdi-chevron-right"></span> -->
                                            </div>
                                        </div>
                                    </div>
                                </nuxt-link>
                            </b-card>

                            <b-card @click="mo()" v-else style="min-width: 245px;" class="teacher-nav">
                                <nuxt-link class="block w-100 teachers " to="#">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="">
                                            <span class="me-2">
                                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="15" cy="15.5" r="15" fill="#FFB761" fill-opacity="0.2" />
                                                    <path
                                                        d="M22.59 9.85L16.65 6.42C15.68 5.86 14.48 5.86 13.5 6.42L7.57 9.85C6.6 10.41 6 11.45 6 12.58V19.42C6 20.54 6.6 21.58 7.57 22.15L13.51 25.58C14.48 26.14 15.68 26.14 16.66 25.58L22.6 22.15C23.57 21.59 24.17 20.55 24.17 19.42V12.58C24.16 11.45 23.56 10.42 22.59 9.85ZM15.08 11.34C16.37 11.34 17.41 12.38 17.41 13.67C17.41 14.96 16.37 16 15.08 16C13.79 16 12.75 14.96 12.75 13.67C12.75 12.39 13.79 11.34 15.08 11.34ZM17.76 20.66H12.4C11.59 20.66 11.12 19.76 11.57 19.09C12.25 18.08 13.57 17.4 15.08 17.4C16.59 17.4 17.91 18.08 18.59 19.09C19.04 19.75 18.56 20.66 17.76 20.66Z"
                                                        fill="#FFB761" />
                                                </svg>

                                            </span>
                                            <span>
                                                Kích hoạt
                                            </span>
                                        </div>
                                        <div>
                                            <div class="web-icon">
                                                <!-- <span class="mdi mdi-chevron-right"></span> -->
                                            </div>
                                        </div>
                                    </div>
                                </nuxt-link>
                            </b-card>

                            <b-card style="min-width: 245px;" class="teacher-nav cp">
                                <div class="block w-100 teachers " v-b-modal.my-modal-password>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="">
                                            <span class="me-2">
                                                <svg width="21" height="14" viewBox="0 0 21 14" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M1.46324 7.6113C1.3363 7.42646 1.27283 7.33404 1.2373 7.1915C1.21061 7.08443 1.21061 6.91557 1.2373 6.8085C1.27283 6.66596 1.3363 6.57354 1.46324 6.3887C2.51225 4.86129 5.6347 1 10.3931 1C15.1516 1 18.274 4.86129 19.323 6.3887C19.4499 6.57354 19.5134 6.66596 19.549 6.8085C19.5756 6.91557 19.5756 7.08443 19.549 7.1915C19.5134 7.33404 19.4499 7.42646 19.323 7.6113C18.274 9.13871 15.1516 13 10.3931 13C5.6347 13 2.51225 9.13871 1.46324 7.6113Z"
                                                        stroke="#979797" stroke-width="1.3" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M10.3931 9.57143C11.9375 9.57143 13.1895 8.42016 13.1895 7C13.1895 5.57984 11.9375 4.42857 10.3931 4.42857C8.84875 4.42857 7.59679 5.57984 7.59679 7C7.59679 8.42016 8.84875 9.57143 10.3931 9.57143Z"
                                                        stroke="#979797" stroke-width="1.3" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>

                                            </span>
                                            <span>
                                                Đổi mật khẩu
                                            </span>
                                        </div>
                                        <div>
                                            <div class="web-icon">
                                                <span class="mdi mdi-chevron-right"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </b-card>


                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>


        <b-modal id="my-modal-password" ref="my-modal-password" hide-footer centered title="Đổi mật khẩu">
            <template #default="{ hide }">
                <div>

                    <div class="">
                        <div>
                            <b-form-group>
                                <label>Mật khẩu mới:</label>
                                <b-form-input name="link" type="password" v-model="password"
                                    placeholder="Nhập mẩu khẩu mới"></b-form-input>
                            </b-form-group>
                        </div>
                        <div>
                            <b-form-group>
                                <label>Nhập lại mật khẩu:</label>
                                <b-form-input name="link" type="password" v-model="password_comfirm"
                                    placeholder="Nhập mẩu khẩu mới"></b-form-input>
                            </b-form-group>
                        </div>

                    </div>
                    <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                        <button class=" btn-cancel me-1" @click="hide()">Hủy</button>
                        <button class=" btn-delete ms-1" @click="edit_password()">Xác nhận đổi</button>
                    </div>
                </div>

            </template>
        </b-modal>
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
                name: 'Chi tiết Giáo viên',
                previous: '/admin/users/teachers'
            },
            data: null,
            chungNhan: null,
            open: true,
            showPassword: false,
            password: null,
            password_comfirm: null,
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
        changeLink() {
            console.log(this)
        },
        async load_data() {
            await api.get('giao-vien/chi-tiet?id=' + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                const user = res?.data?.data.user
                this.chungNhan = res?.data?.data.chungNhan
                this.data = user
                // this.hoten = user?.hoten
                // this.dien_thoai = user?.dien_thoai
                // this.selected = user?.vai_tro
            })
        },
        async khoa() {
            const formData = new FormData();
            formData.append('id', this.id)

            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: `Khoá tài khoản này!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Xác nhận!',
                cancelButtonText: 'Huỷ'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.post('giao-vien/khoa-tai-khoan', formData, {
                        'Content-Type': 'multipart/form-data',
                        Authorization: 'Bearer ' + this.token
                    }).then(res => {
                        if (res?.status == 200) {
                            toastr.success(res?.data?.message);
                            this.load_data()
                        } else {
                            toastr.error(res?.data?.message);
                        }
                    })

                }
            })
        },
        async mo() {
            const formData = new FormData();
            formData.append('id', this.id)

            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: `Kích hoạt tài khoản này!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Xác nhận!',
                cancelButtonText: 'Huỷ'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.post('giao-vien/kich-hoat-tai-khoan', formData, {
                        'Content-Type': 'multipart/form-data',
                        Authorization: 'Bearer ' + this.token
                    }).then(res => {
                        if (res?.status == 200) {
                            toastr.success(res?.data?.message);
                            this.load_data()
                        } else {
                            toastr.error(res?.data?.message);
                        }
                    })

                }
            })
        },
        async edit_password() {
            const formData = new FormData();
            formData.append('password', this.password)
            formData.append('phu_huynh_id', this.id)
            formData.append('password_comfirm', this.password_comfirm)

            if (this.password == null || this.password == '') {
                toastr.error('Nhập mật khẩu để tiếp tục');
                return
            }
            api.post('phu-huynh/reset-password', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$router.push('/admin/users/teachers');
                } else {
                    // toastr.error(res?.data?.message);
                }
            })
        }
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
        this.load_data()
    },
}
</script>


<style lang="scss" scoped>
table {
    width: 100%;
}

tr {
    display: flex;
    align-items: self-start;
    padding-bottom: 8px;
}

.card-certificate {
    border-radius: 5px;
    border: 1px solid #E5E5E5;
    background: #FFF;
    padding: 10px;
    overflow: hidden;
    width: 236px;

    .card-certificate-body {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .box-certificate {
            height: 83px;

            img {
                // width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}

.td-first {
    width: 100px;

    span {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}</style>