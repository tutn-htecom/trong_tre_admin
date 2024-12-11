<template>
    <div class="content-mp">
        <div class="service-edit">
            <div class="mb-7 d-none d-sm-block ">
                <div class="d-flex justify-content-between align-items-center">
                    <title-header>
                        Tổng quan dịch vụ
                    </title-header>
                    <!-- <button-add :addClass="'btn-header'">
                        <span class="mdi mdi-plus"></span> Thêm banner
                    </button-add> -->
                </div>
            </div>
            <b-row>
                <b-col class="mt-0 pt-0" cols="12" sm="9" md="7">
                    <div class="w-100">

                        <div class="mt-2 d-flex justify-content-between align-items-center">
                            <span>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.8263 6.4735C14.5997 6.38016 14.2997 6.3335 13.9263 6.3335H10.4063C9.24634 6.3335 8.83301 6.74683 8.83301 7.92016V13.0802C8.83301 13.4668 8.87967 13.7668 8.97967 14.0002C9.18634 14.4802 9.62634 14.6668 10.4063 14.6668H13.9263C15.0863 14.6668 15.4997 14.2468 15.4997 13.0802V7.92016C15.4997 7.12683 15.313 6.68016 14.8263 6.4735ZM12.833 13.1668H11.4997C11.4863 13.1668 11.4663 13.1668 11.453 13.1602C11.353 13.1535 11.2663 13.1202 11.193 13.0535C11.073 12.9668 10.9997 12.8268 10.9997 12.6668C10.9997 12.3935 11.2263 12.1668 11.4997 12.1668H12.833C13.1063 12.1668 13.333 12.3935 13.333 12.6668C13.333 12.9402 13.1063 13.1668 12.833 13.1668Z"
                                        fill="#FC4D32" />
                                    <path
                                        d="M14.8262 4.12683V4.66683C14.8262 5.0335 14.5262 5.3335 14.1595 5.3335H10.4062C8.69952 5.3335 7.83285 6.20683 7.83285 7.92016V14.0002C7.83285 14.3668 7.53285 14.6668 7.16618 14.6668H5.86618C5.59952 14.6668 5.38618 14.4535 5.38618 14.1935C5.38618 13.9268 5.59952 13.7202 5.86618 13.7202H7.16618V11.1668H4.83285C3.35285 11.0935 2.17285 9.8735 2.17285 8.3735V4.12683C2.17285 2.58683 3.42618 1.3335 4.97285 1.3335H12.0329C13.5729 1.3335 14.8262 2.58683 14.8262 4.12683Z"
                                        fill="#FC4D32" />
                                </svg>
                                <span class="service-title">Khóa dịch vụ</span>
                            </span>
                            <span>
                                <b-form-checkbox v-model="khoa_dich_vu" switch size="lg"></b-form-checkbox>
                            </span>
                        </div>

                        <hr class="support-hr" />

                        <div class="mt-3 mb-6">
                            <div class="mb-2">
                                <strong class="service-title">

                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2.22003 12.6735L2.2067 12.6868C2.0267 12.2935 1.91337 11.8468 1.8667 11.3535C1.91337 11.8402 2.04003 12.2802 2.22003 12.6735Z"
                                            fill="#FFB761" />
                                        <path
                                            d="M6.5 6.91992C7.37629 6.91992 8.08666 6.20954 8.08666 5.33325C8.08666 4.45696 7.37629 3.74658 6.5 3.74658C5.6237 3.74658 4.91333 4.45696 4.91333 5.33325C4.91333 6.20954 5.6237 6.91992 6.5 6.91992Z"
                                            fill="#FFB761" />
                                        <path
                                            d="M11.2934 1.3335H5.70671C3.28004 1.3335 1.83337 2.78016 1.83337 5.20683V10.7935C1.83337 11.5202 1.96004 12.1535 2.20671 12.6868C2.78004 13.9535 4.00671 14.6668 5.70671 14.6668H11.2934C13.72 14.6668 15.1667 13.2202 15.1667 10.7935V9.26683V5.20683C15.1667 2.78016 13.72 1.3335 11.2934 1.3335ZM14.08 8.3335C13.56 7.88683 12.72 7.88683 12.2 8.3335L9.42671 10.7135C8.90671 11.1602 8.06671 11.1602 7.54671 10.7135L7.32004 10.5268C6.84671 10.1135 6.09337 10.0735 5.56004 10.4335L3.06671 12.1068C2.92004 11.7335 2.83337 11.3002 2.83337 10.7935V5.20683C2.83337 3.32683 3.82671 2.3335 5.70671 2.3335H11.2934C13.1734 2.3335 14.1667 3.32683 14.1667 5.20683V8.40683L14.08 8.3335Z"
                                            fill="#FFB761" />
                                    </svg>
                                    <span>Hình ảnh</span>
                                </strong>
                                <i class="img-note">(Tối thiểu không quá 2mb)</i>
                            </div>

                            <div class="input-grop">
                                <div class="box-x d-flex justify-content-between p-2">
                                    <div class="box-img">
                                        <input type="file" hidden @change="handleFileChange" id="img" />
                                        <img v-if="image" :src="image" alt="">
                                        <img v-else src="@/static/images/teacher-training/Rectangle4052.png" alt="">
                                        <input id="images" type="file" class="d-none" />
                                    </div>
                                    <div class="action">
                                        <div @click="delete_img()" class="mb-3 btn-service-delete" v-b-tooltip.hover
                                            title="Xoá ảnh">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="16" cy="16" r="16" fill="#F2F2F2" />
                                                <g clip-path="url(#clip0_207_5736)">
                                                    <path
                                                        d="M16.0639 11.1534C18.1966 11.1534 20.3323 11.1594 22.4651 11.1475C22.7971 11.1475 22.9227 11.1802 22.8779 11.5789C22.6266 13.849 22.3634 16.1222 22.2108 18.4013C22.1241 19.6896 22.0194 20.9719 21.9147 22.2572C21.8549 22.9951 21.7921 23.4801 21.6604 24.2061C21.4899 25.1344 21.1071 26.0002 19.755 25.9883C17.2813 25.9913 14.8076 25.9645 12.3368 26.0002C11.3198 26.0151 10.5152 25.8038 10.2789 24.2061C10.0127 22.412 9.44433 14.1019 9.44433 14.1019L9.21699 11.7157C9.21699 11.7157 9.15418 11.1534 9.70755 11.1534C11.8283 11.1534 13.9461 11.1534 16.0669 11.1534H16.0639ZM16.5784 18.55C16.5784 17.2736 16.5784 15.9972 16.5784 14.7208C16.5784 14.2983 16.363 14.0305 16.028 14.0216C15.6541 14.0127 15.3849 14.3072 15.3849 14.7387C15.3849 17.2766 15.3849 19.8145 15.3879 22.3554C15.3879 22.8047 15.6361 23.1052 15.9981 23.1171C16.3361 23.129 16.5724 22.8107 16.5724 22.3376C16.5724 21.0761 16.5724 19.8115 16.5724 18.55H16.5784ZM19.4649 18.5411C19.4649 17.2498 19.4649 15.9556 19.4649 14.6643C19.4649 14.4977 19.4858 14.331 19.3153 14.212C19.1239 14.0781 18.9444 13.9591 18.6961 14.0692C18.3791 14.209 18.2834 14.453 18.2864 14.7803C18.2953 17.2944 18.2953 19.8115 18.3013 22.3257C18.3013 22.8017 18.5316 23.1082 18.8816 23.1112C19.2316 23.1171 19.4709 22.8017 19.4709 22.3376C19.4709 21.0731 19.4709 19.8086 19.4709 18.5441L19.4649 18.5411ZM13.6918 18.5708C13.6918 17.2528 13.6918 15.9347 13.6918 14.6167C13.6918 14.218 13.5213 14.0305 13.1594 14.0246C12.8453 14.0186 12.5911 14.2686 12.5911 14.6167C12.5881 17.2379 12.5881 19.8621 12.5911 22.4834C12.5911 22.8583 12.8663 23.1409 13.1833 23.1082C13.5513 23.0695 13.7038 22.8702 13.6978 22.4863C13.6799 21.1832 13.6918 19.877 13.6918 18.5738V18.5708Z"
                                                        fill="#979797" />
                                                    <path
                                                        d="M15.9776 10.0553C13.7461 10.0553 11.5147 10.0553 9.28024 10.0553C8.58927 10.0553 8 9.51382 8 8.88008C8 8.29097 8.58628 7.72864 9.25631 7.72269C10.5844 7.71079 11.9125 7.70781 13.2406 7.72864C13.6085 7.73459 13.7222 7.63938 13.7042 7.26152C13.6713 6.59802 14.2786 6.01486 14.9576 6.00891C15.6366 6.00296 16.3156 6.04462 16.9916 5.99999C17.7035 5.95238 18.3436 6.6129 18.2868 7.23771C18.2509 7.63641 18.4124 7.73162 18.7893 7.72566C20.0755 7.70781 21.3617 7.74947 22.645 7.71674C23.5094 7.69591 24.3081 8.35048 23.8833 9.40076C23.7308 9.7816 23.312 10.0494 22.7616 10.0494C20.599 10.0494 18.4393 10.0494 16.2767 10.0494C16.178 10.0494 16.0793 10.0494 15.9806 10.0494L15.9776 10.0553Z"
                                                        fill="#979797" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_207_5736">
                                                        <rect width="16" height="20" fill="white"
                                                            transform="translate(8 6)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <label for="img" class="btn-service-upload d-block" v-b-tooltip.hover
                                            title="Tải ảnh lên">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="16" cy="16" r="16" fill="#F2F2F2" />
                                                <path d="M10 11.3846L16 6M16 6L22 11.3846M16 6L16 13" stroke="#979797"
                                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M15 15V18.9375C15 19.4898 15.4477 19.9375 16 19.9375C16.5523 19.9375 17 19.4898 17 18.9375V15H23C24.1046 15 25 15.8954 25 17V22C25 23.1046 24.1046 24 23 24H9C7.89543 24 7 23.1046 7 22V17C7 15.8954 7.89543 15 9 15H15Z"
                                                    fill="#979797" />
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="support-hr" />

                        <div class="mt-2 mb-2 d-flex justify-content-between align-items-center">
                            <span>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.0588 6.87422L12.9518 6.72022C12.7645 6.48222 12.5438 6.29322 12.2896 6.15321C11.9485 5.95021 11.5606 5.84521 11.1593 5.84521H2.83224C2.43094 5.84521 2.0497 5.95021 1.7019 6.15321C1.44105 6.30022 1.20696 6.50322 1.013 6.75522C0.631757 7.26622 0.451171 7.89622 0.511366 8.52622L0.758837 11.7952C0.845786 12.7822 0.959489 14.0002 3.07971 14.0002H10.9185C13.0387 14.0002 13.1457 12.7822 13.2394 11.7882L13.4869 8.53322C13.547 7.94522 13.3999 7.35722 13.0588 6.87422ZM8.59764 10.7382H5.39389C5.13305 10.7382 4.92571 10.5142 4.92571 10.2482C4.92571 9.98222 5.13305 9.75822 5.39389 9.75822H8.59764C8.85848 9.75822 9.06582 9.98222 9.06582 10.2482C9.06582 10.5212 8.85848 10.7382 8.59764 10.7382Z"
                                        fill="#4EAEEA" />
                                    <path
                                        d="M12.6927 4.34012C12.7476 4.72504 12.318 4.98641 11.9403 4.89386C11.6905 4.83262 11.4319 4.80201 11.166 4.80201H2.83229C2.56037 4.80201 2.2915 4.83564 2.03302 4.9006C1.66012 4.99432 1.23376 4.74232 1.23376 4.35783V3.262C1.23376 0.763001 1.9628 0 4.35056 0H5.13979C6.09623 0 6.3972 0.322 6.78513 0.847001L7.58774 1.967C7.75495 2.205 7.76164 2.219 8.05593 2.219H9.64776C11.6278 2.219 12.4653 2.74472 12.6927 4.34012Z"
                                        fill="#4EAEEA" />
                                </svg>

                                <span class="service-title">Tên dịch vụ</span>
                            </span>

                        </div>
                        <div>
                            <input type="text" v-model="ten_dich_vu" placeholder="Nhập tên"
                                class="form-control form-benefits" />
                        </div>

                        <hr class="support-hr" />

                        <!-- <div class="mt-2 mb-2 d-flex justify-content-between align-items-center">
                            <span>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.5068 3.90016L9.54678 1.6135C8.90011 1.24016 8.10011 1.24016 7.44678 1.6135L3.49344 3.90016C2.84678 4.2735 2.44678 4.96683 2.44678 5.72016V10.2802C2.44678 11.0268 2.84678 11.7202 3.49344 12.1002L7.45344 14.3868C8.10011 14.7602 8.90011 14.7602 9.55344 14.3868L13.5134 12.1002C14.1601 11.7268 14.5601 11.0335 14.5601 10.2802V5.72016C14.5534 4.96683 14.1534 4.28016 13.5068 3.90016ZM10.0001 8.9335L9.30678 9.3335L8.61344 9.7335C7.72678 10.2468 7.00011 9.82683 7.00011 8.80016V8.00016V7.20016C7.00011 6.1735 7.72678 5.7535 8.61344 6.26683L9.30678 6.66683L10.0001 7.06683C10.8868 7.58016 10.8868 8.42016 10.0001 8.9335Z"
                                        fill="#FC4D32" />
                                </svg>

                                <span class="service-title">Link</span>
                            </span>

                        </div>
                        <div>
                            <input type="text" v-model="link" placeholder="Nhập link" class="form-control form-benefits" />
                        </div> -->



                        <div class="mt-2 mb-2 d-flex justify-content-between align-items-center">
                            <span>
                                <svg width="16" height="11" viewBox="0 0 16 11" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.75 4.71429C3.57734 4.71429 4.25 4.0096 4.25 3.14286C4.25 2.27612 3.57734 1.57143 2.75 1.57143C1.92266 1.57143 1.25 2.27612 1.25 3.14286C1.25 4.0096 1.92266 4.71429 2.75 4.71429ZM13.25 4.71429C14.0773 4.71429 14.75 4.0096 14.75 3.14286C14.75 2.27612 14.0773 1.57143 13.25 1.57143C12.4227 1.57143 11.75 2.27612 11.75 3.14286C11.75 4.0096 12.4227 4.71429 13.25 4.71429ZM14 5.5H12.5C12.0875 5.5 11.7148 5.67433 11.443 5.9567C12.3875 6.49933 13.0578 7.47902 13.2031 8.64286H14.75C15.1648 8.64286 15.5 8.29174 15.5 7.85714V7.07143C15.5 6.20469 14.8273 5.5 14 5.5ZM8 5.5C9.45078 5.5 10.625 4.26987 10.625 2.75C10.625 1.23013 9.45078 0 8 0C6.54922 0 5.375 1.23013 5.375 2.75C5.375 4.26987 6.54922 5.5 8 5.5ZM9.8 6.28571H9.60547C9.11797 6.53125 8.57656 6.67857 8 6.67857C7.42344 6.67857 6.88438 6.53125 6.39453 6.28571H6.2C4.70937 6.28571 3.5 7.55268 3.5 9.11429V9.82143C3.5 10.4721 4.00391 11 4.625 11H11.375C11.9961 11 12.5 10.4721 12.5 9.82143V9.11429C12.5 7.55268 11.2906 6.28571 9.8 6.28571ZM4.55703 5.9567C4.28516 5.67433 3.9125 5.5 3.5 5.5H2C1.17266 5.5 0.5 6.20469 0.5 7.07143V7.85714C0.5 8.29174 0.835156 8.64286 1.25 8.64286H2.79453C2.94219 7.47902 3.6125 6.49933 4.55703 5.9567Z"
                                        fill="#00C092" />
                                </svg>
                                <span class="service-title">Loại dịch vụ</span>
                            </span>

                        </div>

                        <div>
                            <b-form-select v-model="loai_dich_vu_id" :options="loai_dich_vu" aria-placeholder="Chọn loại dịch vụ" name="loai_dich_vu_id"></b-form-select>
                        </div>


                        <div class="mt-2 mb-2 d-flex justify-content-between align-items-center">
                            <span>
                                <svg width="16" height="11" viewBox="0 0 16 11" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.75 4.71429C3.57734 4.71429 4.25 4.0096 4.25 3.14286C4.25 2.27612 3.57734 1.57143 2.75 1.57143C1.92266 1.57143 1.25 2.27612 1.25 3.14286C1.25 4.0096 1.92266 4.71429 2.75 4.71429ZM13.25 4.71429C14.0773 4.71429 14.75 4.0096 14.75 3.14286C14.75 2.27612 14.0773 1.57143 13.25 1.57143C12.4227 1.57143 11.75 2.27612 11.75 3.14286C11.75 4.0096 12.4227 4.71429 13.25 4.71429ZM14 5.5H12.5C12.0875 5.5 11.7148 5.67433 11.443 5.9567C12.3875 6.49933 13.0578 7.47902 13.2031 8.64286H14.75C15.1648 8.64286 15.5 8.29174 15.5 7.85714V7.07143C15.5 6.20469 14.8273 5.5 14 5.5ZM8 5.5C9.45078 5.5 10.625 4.26987 10.625 2.75C10.625 1.23013 9.45078 0 8 0C6.54922 0 5.375 1.23013 5.375 2.75C5.375 4.26987 6.54922 5.5 8 5.5ZM9.8 6.28571H9.60547C9.11797 6.53125 8.57656 6.67857 8 6.67857C7.42344 6.67857 6.88438 6.53125 6.39453 6.28571H6.2C4.70937 6.28571 3.5 7.55268 3.5 9.11429V9.82143C3.5 10.4721 4.00391 11 4.625 11H11.375C11.9961 11 12.5 10.4721 12.5 9.82143V9.11429C12.5 7.55268 11.2906 6.28571 9.8 6.28571ZM4.55703 5.9567C4.28516 5.67433 3.9125 5.5 3.5 5.5H2C1.17266 5.5 0.5 6.20469 0.5 7.07143V7.85714C0.5 8.29174 0.835156 8.64286 1.25 8.64286H2.79453C2.94219 7.47902 3.6125 6.49933 4.55703 5.9567Z"
                                        fill="#00C092" />
                                </svg>
                                <span class="service-title">Độ tuổi</span>
                            </span>

                        </div>
                        <div>
                            <b-form-select v-model="do_tuoi_id" :options="do_tuoi" name="ad_tuoi" aria-placeholder="Chọn"></b-form-select>
                        </div>


                        <hr class="support-hr" />

                        <div class="mt-4 mb-6">
                            <div class="mb-2">
                                <div class="mb-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <title-header>
                                            Quyền lợi
                                        </title-header>
                                        <button-add :addClass="'btn-add-more-law'" v-b-modal.my-modal>
                                            <span class="mdi mdi-plus"></span>
                                        </button-add>
                                    </div>
                                </div>
                            </div>

                            <b-modal id="my-modal" ref="my-modal" hide-footer centered title="Thêm quyền lợi">
                                <template #default="{ hide }">
                                    <div>

                                        <div class="my-4 pb-3">
                                            <div>
                                                <b-form-group>
                                                    <label>Tên quyền lợi:</label>
                                                    <b-form-input name="link" v-model="name_benefit"
                                                        placeholder="Nhập tên quyền lợi"></b-form-input>
                                                </b-form-group>
                                            </div>
                                            <div>
                                                <b-form-group>
                                                    <label>Đường dẫn:</label>
                                                    <b-form-input name="link" v-model="link_benefit"
                                                        placeholder="Nhập đường dẫn"></b-form-input>
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

                            <b-modal id="my-modal-edit" ref="my-modal-edit" hide-footer centered title="Sửa quyền lợi">
                                <template #default="{ hide }">
                                    <div>

                                        <div class="my-4 pb-3">
                                            <div>
                                                <b-form-group>
                                                    <label>Tên quyền lợi:</label>
                                                    <b-form-input name="link" v-model="name_benefit_edit"
                                                        placeholder="Nhập tên quyền lợi"></b-form-input>
                                                </b-form-group>
                                            </div>
                                            <div>
                                                <b-form-group>
                                                    <label>Đường dẫn:</label>
                                                    <b-form-input name="link" v-model="link_benefit_edit"
                                                        placeholder="Nhập đường dẫn"></b-form-input>
                                                </b-form-group>
                                            </div>

                                        </div>
                                        <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                            <button class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                            <button class=" btn-delete ms-1" @click="edit_benefit()">Sửa</button>
                                        </div>
                                    </div>

                                </template>
                            </b-modal>

                            <div class="input-group-service" v-for="(item, n) in todos" v-bind:key="n">
                                <div class="service-title mb-2">
                                    <span>{{n+1}}. {{ item?.name_benefit }}</span>
                                </div>
                                <div class="d-block position-relative">
                                    <input type="text" :value="item?.link_benefit" placeholder="Nhập đường dẫn"
                                        class="form-control form-benefits" />

                                    <div class="text-center action-benefits">
                                        <v-menu offset-y open-on-hover transition="scale-transition">
                                            <template v-slot:activator="{ on, attrs }">
                                                <div v-bind="attrs" v-on="on">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="18"
                                                        viewBox="0 0 4 18" fill="none">
                                                        <path
                                                            d="M2 10C2.55228 10 3 9.55228 3 9C3 8.44772 2.55228 8 2 8C1.44772 8 1 8.44772 1 9C1 9.55228 1.44772 10 2 10Z"
                                                            stroke="#979797" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path
                                                            d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z"
                                                            stroke="#979797" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path
                                                            d="M2 17C2.55228 17 3 16.5523 3 16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16C1 16.5523 1.44772 17 2 17Z"
                                                            stroke="#979797" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </template>
                                            <v-list>
                                                <v-list-item>
                                                    <v-list-item-title @click="show_edit(item?.id)"
                                                        v-b-modal.my-modal-edit>Sửa quyền lợi</v-list-item-title>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-title @click="deleteTodo(item?.id)">Xóa</v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="support-hr" />
                        <!--  -->

                        <div class="mt-4 mb-6">
                            <div class="mb-2">
                                <div class="mb-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <title-header>
                                            Giá trị
                                        </title-header>
                                    </div>
                                </div>
                            </div>

                            <div class="">
                                <textarea v-model="gia_tri" id="gia_tri"></textarea>
                            </div>
                        </div>

                        <hr class="support-hr" />

                        <div class="mt-4 mb-6">
                            <div class="mb-2">
                                <div class="mb-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <title-header>
                                            Cam kết
                                        </title-header>
                                    </div>
                                </div>
                            </div>

                            <div class="">
                                <textarea v-model="cam_ket" id="cam_ket"></textarea>
                            </div>
                        </div>

                        <hr class="support-hr" />

                        <div class="mt-4 mb-6">
                            <div class="mb-2">
                                <div class="mb-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <title-header>
                                            Hợp đồng dịch vụ
                                        </title-header>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <textarea v-model="hop_dong_dich_vu" id="hop_dong_dich_vu"></textarea>
                            </div>

                            <div class="mt-3">
                                <div class="mb-2">
                                    <div class="mb-3">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <title-header>
                                                Chi tiết dịch vụ <span class="text-danger">*</span>
                                            </title-header>
                                        </div>
                                    </div>
                                </div>
                                <input type="text" v-model="link" placeholder="Nhập đường dẫn"
                                    class="form-control form-benefits" />
                            </div>
                        </div>

                        <hr class="support-hr" />

                        <div class="w-100 teacher-detail-info-nav mt-6 pt-5" style="min-width: 300px;">
                            <h3>Tùy chỉnh khác</h3>
                            <div class="w-100">
                                <div>
                                    <b-card style="min-width: 245px;" class="teacher-nav">
                                        <nuxt-link class="block w-100 teachers "
                                            :to="'/admin/service/' + this.id + '/lesson-price'">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="">
                                                    <span class="me-2">
                                                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="15" cy="15.5" r="15" fill="#FC4D32"
                                                                fill-opacity="0.1" />
                                                            <path
                                                                d="M8.61905 17.6401C6.61952 17.6401 5 19.2869 5 21.3201C5 22.0101 5.19 22.6633 5.52476 23.2153C6.14905 24.2825 7.2981 25.0001 8.61905 25.0001C9.94 25.0001 11.089 24.2825 11.7133 23.2153C12.0481 22.6633 12.2381 22.0101 12.2381 21.3201C12.2381 19.2869 10.6186 17.6401 8.61905 17.6401ZM10.4014 21.0165L8.47429 22.8289C8.34762 22.9485 8.17571 23.0129 8.01286 23.0129C7.84095 23.0129 7.66905 22.9485 7.53333 22.8105L6.63762 21.8997C6.37524 21.6329 6.37524 21.1913 6.63762 20.9245C6.9 20.6577 7.33429 20.6577 7.59667 20.9245L8.03095 21.3661L9.47857 20.0045C9.75 19.7469 10.1843 19.7653 10.4376 20.0413C10.691 20.3173 10.6729 20.7589 10.4014 21.0165Z"
                                                                fill="#FC4D32" />
                                                            <path
                                                                d="M23.5476 15.3398H21.2857C20.2905 15.3398 19.4762 16.1678 19.4762 17.1798C19.4762 18.1918 20.2905 19.0198 21.2857 19.0198H23.5476C23.801 19.0198 24 18.8174 24 18.5598V15.7998C24 15.5422 23.801 15.3398 23.5476 15.3398Z"
                                                                fill="#FC4D32" />
                                                            <path
                                                                d="M19.0509 8.80828C19.3223 9.07507 19.0961 9.48907 18.7161 9.48907L11.2247 9.47987C10.7904 9.47987 10.5733 8.94628 10.8809 8.63348L12.4642 7.01429C13.8033 5.6619 15.9657 5.6619 17.3047 7.01429L19.0147 8.77148C19.0238 8.78068 19.0419 8.79908 19.0509 8.80828Z"
                                                                fill="#FC4D32" />
                                                            <path
                                                                d="M23.8824 21.0074C23.3305 22.9026 21.7381 24.0802 19.5667 24.0802H13.6857C13.3328 24.0802 13.1067 23.6846 13.2514 23.3534C13.5228 22.7094 13.6947 21.9826 13.6947 21.3202C13.6947 18.5326 11.46 16.2602 8.71856 16.2602C8.03094 16.2602 7.36142 16.4074 6.74618 16.6834C6.41142 16.8306 6.00427 16.6006 6.00427 16.2326V14.8802C6.00427 12.3779 7.48808 10.6299 9.79523 10.3355C10.0214 10.2987 10.2657 10.2803 10.519 10.2803H19.5667C19.8019 10.2803 20.0281 10.2895 20.2452 10.3263C22.0728 10.5379 23.3938 11.6695 23.8824 13.353C23.9728 13.6566 23.7557 13.9602 23.4481 13.9602H21.3762C19.4128 13.9602 17.8567 15.7818 18.2819 17.8518C18.5805 19.3606 19.9557 20.4002 21.4667 20.4002H23.4481C23.7647 20.4002 23.9728 20.713 23.8824 21.0074Z"
                                                                fill="#FC4D32" />
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        Học phí và khuyến mãi
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
                                            :to="'/admin/service/' + this.id + '/lesson-content'">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="">
                                                    <span class="me-2">
                                                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="15" cy="15.5" r="15" fill="#FFB761"
                                                                fill-opacity="0.2" />
                                                            <path
                                                                d="M19.4791 18.3924C20.1698 17.9354 21.0769 18.4339 21.0769 19.2647V20.6045C21.0769 21.9234 20.0564 23.3358 18.8297 23.7512L15.5412 24.8521C14.9639 25.0494 14.0258 25.0494 13.4588 24.8521L10.1704 23.7512C8.93334 23.3358 7.9231 21.9234 7.9231 20.6045V19.2544C7.9231 18.4339 8.83026 17.9354 9.51063 18.382L11.6342 19.7736C12.4486 20.324 13.4795 20.5941 14.5103 20.5941C15.5412 20.5941 16.5721 20.324 17.3864 19.7736L19.4791 18.3924Z"
                                                                fill="#FFB761" />
                                                            <path
                                                                d="M22.5685 10.2485L16.5196 6.50696C15.429 5.83101 13.6315 5.83101 12.5409 6.50696L6.46173 10.2485C4.51276 11.4386 4.51276 14.1329 6.46173 15.3324L8.07746 16.3226L12.5409 19.0645C13.6315 19.7404 15.429 19.7404 16.5196 19.0645L20.9528 16.3226L22.3363 15.4657V18.379C22.3363 18.7693 22.6796 19.093 23.0936 19.093C23.5077 19.093 23.851 18.7693 23.851 18.379V13.6949C24.2549 12.4668 23.8409 11.0387 22.5685 10.2485Z"
                                                                fill="#FFB761" />
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        Thời lượng ca và nội dung buổi học
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

                                    <b-card style="min-width: 245px;" class="teacher-nav cp">
                                        <div class="block w-100 teachers " v-b-modal.my-modal-delete>
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
                                                        Xoá dịch vụ
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


                        <b-modal id="my-modal-delete" ref="my-modal-delete" hide-footer centered title="Xoá dịch vụ">
                            <template #default="{ hide }">
                                <div>

                                    <div class="">
                                        <div>
                                            <b-form-group>
                                                <label>Mật khẩu:</label>
                                                <b-form-input name="link" type="password" v-model="password"
                                                    placeholder="Nhập mẩu khẩu"></b-form-input>
                                            </b-form-group>
                                        </div>

                                    </div>
                                    <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                        <button class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                        <button class=" btn-delete ms-1" @click="delete_item()">Xác nhận xoá</button>
                                    </div>
                                </div>

                            </template>
                        </b-modal>

                        <div class="mt-8" @click="send_data()">
                            <button-component>Lưu thay đổi</button-component>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>

    </div>
</template>

<script>
import SUNEDITOR from 'suneditor'
import plugins from 'suneditor/src/plugins'
import 'suneditor/dist/css/suneditor.min.css'
import ButtonComponent from '~/components/button/ButtonComponent.vue'
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    components: { ButtonComponent },
    layout: 'admin',
    head: {
        title: 'Chi tiết dịch vụ',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Home page description'
            }
        ],
    },
    data() {
        return {
            title: {
                name: 'Dich vụ',
                previous: '/admin/service'
            },
            khoa_dich_vu: false,
            suneditorInstance: null,
            image: null,
            suneditorcam_hop_dong_dich_vu: null,
            hop_dong_dich_vu: null,
            ten_dich_vu: null,
            // ten_dich_vu: null,
            gia_tri: 'Nhập nội dung',
            suneditorcam_ketInstance: null,
            cam_ket: 'Nhập nội dung',
            name_benefit: '',
            link_benefit: '',
            name_benefit_edit: '',
            link_benefit_edit: '',
            id_benefit_edit: '',
            do_tuoi: [],
            do_tuoi_id: 0,
            loai_dich_vu: [],
            loai_dich_vu_id: 0,
            todos: [],
            image: null,
            file: null,
            link: null,
            password: '',
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
        add_benefit() {
            console.log(this.name_benefit, this.link_benefit)
            if (this.name_benefit == '' || this.link_benefit == '') {
                toastr.error('Bạn cần nhập đầy đủ thông tin');
                return
            }
            const newId = this.todos.length + 1;
            this.todos.push({ id: newId, name_benefit: this.name_benefit, link_benefit: this.link_benefit });
            this.name_benefit = ''
            this.link_benefit = ''
            this.$refs['my-modal'].hide()
        },
        deleteTodo(id) {
            this.todos = this.todos.filter((todo) => todo.id !== id);
            // console.log(id, this.todos.filter((todo) => todo.id !== id))
        },
        show_edit(id) {
            // if(this.name_benefit_edit == '' || this.link_benefit_edit == '') {
            //     toastr.success('Bạn cần nhập đầy đủ thông tin');
            // }
            const todoIndex = this.todos.find((todo) => todo.id === id);
            if (!todoIndex) {
                toastr.error('Lỗi thao tác id:' + id);
                return
            }
            console.log(todoIndex)
            this.name_benefit_edit = todoIndex.name_benefit;
            this.link_benefit_edit = todoIndex.link_benefit;
            this.id_benefit_edit = todoIndex.id;
        },
        edit_benefit() {
            if (this.name_benefit_edit == '' || this.link_benefit_edit == '') {
                toastr.error('Bạn cần nhập đầy đủ thông tin');
                return
            }
            console.log(this.name_benefit_edit, this.id_benefit_edit)
            const todoIndex = this.todos.findIndex((todo) => todo.id === this.id_benefit_edit);
            if (todoIndex !== -1) {
                this.todos[todoIndex].name_benefit = this.name_benefit_edit;
                this.todos[todoIndex].link_benefit = this.link_benefit_edit;
                this.$refs['my-modal-edit'].hide()

                this.name_benefit_edit = ''
                this.link_benefit_edit = ''
                this.id_benefit_edit = ''
            }
        },
        async load_role() {

        },
        async load_data() {
            await api.get('dich-vu/loai-dich-vu', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.loai_dich_vu = res?.data?.data.map(item => {
                    return {
                        value: item.id,
                        text: item.name
                    };
                })
                this.loai_dich_vu_id = this.loai_dich_vu[0].value
            })

            await api.get('dich-vu/get-do-tuoi', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.do_tuoi = res?.data?.data.map(item => {
                    return {
                        value: item.id,
                        text: item.name
                    };
                })
                // this.do_tuoi_id = this.do_tuoi[0].value
            })

            await api.get('dich-vu/chi-tiet?id=' + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                const user = res?.data?.data?.dichVu
                this.data = user

                this.khoa_dich_vu = user?.khoa_dich_vu == 0 ? false : true
                this.cam_ket = user?.cam_ket
                this.suneditorcam_ketInstance.setContents(this.cam_ket);
                this.gia_tri = user?.gia_tri
                this.suneditorInstance.setContents(this.gia_tri);
                this.image = user?.image
                this.hop_dong_dich_vu = user?.hop_dong_dich_vu
                this.suneditorcam_hop_dong_dich_vu.setContents(this.hop_dong_dich_vu);
                this.ten_dich_vu = user?.ten_dich_vu
                this.do_tuoi_id = user?.do_tuoi_id
                this.loai_dich_vu_id = user?.loai_dich_vu_id
                this.link = user?.link
                console.log(this.data)

                const ql = res?.data?.data?.quyenLoi.map(function (item, index) {
                    return {
                        id: item.id,
                        name_benefit: item.name,
                        link_benefit: item.link,
                    }
                })
                this.todos = ql
                // console

                // this.title.name = this.ten_dich_vu ?? 'Chi tiết dịch vụ'
                // this.$store.dispatch('title/set_title', this.title);


            })
        },
        async delete_item() {
            const formData = new FormData();
            formData.append('id', this.id)
            formData.append('password', this.password)

            if (this.password == null || this.password == '') {
                toastr.error('Nhập mật khẩu để tiếp tục');
                return
            } else {
                await api.post('admin-api/kiem-tra-mat-khau', formData, {
                    'Content-Type': 'multipart/form-data',
                    Authorization: 'Bearer ' + this.token
                }).then(res => {
                    if (res?.status == 200) {
                        toastr.success(res?.data?.message);

                        api.post('dich-vu/xoa-dich-vu', formData, {
                            'Content-Type': 'multipart/form-data',
                            Authorization: 'Bearer ' + this.token
                        }).then(res => {
                            if (res?.status == 200) {
                                toastr.success(res?.data?.message);
                                this.$router.push('/admin/service');
                            } else {
                                toastr.error(res?.data?.message);
                            }
                        })
                    } else {
                        return
                        // toastr.error(res?.data?.message);
                    }
                })
            }
            // return

            // Swal.fire({
            //     title: 'Bạn có chắc chắn?',
            //     text: `Xoá dịch vụ đã chọn!`,
            //     icon: 'warning',
            //     showCancelButton: true,
            //     confirmButtonColor: '#3085d6',
            //     cancelButtonColor: '#d33',
            //     confirmButtonText: 'Chắc chắn/Chấp nhận!',
            //     cancelButtonText: 'Huỷ'
            // }).then(async (result) => {
            //     if (result.isConfirmed) {


            // }
            // })
        },
        async send_data(event) {
            // event.preventDefault();
            const formData = new FormData()
            formData.append('khoa_dich_vu', this.khoa_dich_vu ? 1 : 0)
            formData.append('ten_dich_vu', this.ten_dich_vu)
            formData.append('gia_tri', this.gia_tri)
            formData.append('do_tuoi_id', this.do_tuoi_id)
            formData.append('cam_ket', this.cam_ket)
            formData.append('hop_dong_dich_vu', this.hop_dong_dich_vu)
            formData.append('image', this.file)
            formData.append('link', this.link)
            formData.append('id', this.id)
            formData.append('loai_dich_vu_id', this.loai_dich_vu_id)

            this.todos.forEach((value, key) => {
                formData.append(`quyen_loi[${key}][name]`, value.name_benefit)
                formData.append(`quyen_loi[${key}][link]`, value.link_benefit)
            });

            formData.forEach((value, key) => {
                console.log(`${key}: ${value}`);
            });

            await api.post('dich-vu/sua', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$router.push('/admin/service');
                }
            })
        },
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);

        this.load_role();
        this.load_data();


        const editor = SUNEDITOR.create((document.getElementById('gia_tri') || 'gia_tri'), {
            toolbarContainer: '#toolbar_container',
            showPathLabel: false,
            charCounter: true,
            width: 'auto',
            height: 'auto',
            minHeight: '100px',
            maxHeight: '250px',
            plugins: plugins,
            buttonList: [
                ['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
                ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
                ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
                // ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save']
            ],
            callBackSave: function (contents, isChanged) {
                this.gia_tri = contents
                console.log(contents);
            },
        });
        this.suneditorInstance = editor;

        this.suneditorInstance.onChange = async (contents, core) => {
            this.gia_tri = contents;
            await console.log(this.gia_tri)
        };


        const editor1 = SUNEDITOR.create((document.getElementById('cam_ket') || 'cam_ket'), {
            toolbarContainer: '#toolbar_container',
            showPathLabel: false,
            charCounter: true,
            width: 'auto',
            height: 'auto',
            minHeight: '100px',
            maxHeight: '250px',
            plugins: plugins,
            buttonList: [
                ['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
                ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
                ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
                // ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save']
            ],
            callBackSave: function (contents, isChanged) {
                this.cam_ket = contents
                console.log(contents);
            },
        });
        this.suneditorcam_ketInstance = editor1;

        this.suneditorcam_ketInstance.onChange = async (contents, core) => {
            this.cam_ket = contents;
            await console.log(this.cam_ket)
        };

        const editor2 = SUNEDITOR.create((document.getElementById('hop_dong_dich_vu') || 'hop_dong_dich_vu'), {
            toolbarContainer: '#toolbar_container',
            showPathLabel: false,
            charCounter: true,
            width: 'auto',
            height: 'auto',
            minHeight: '100px',
            maxHeight: '250px',
            plugins: plugins,
            buttonList: [
                ['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
                ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
                ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
                ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save']
            ],
            callBackSave: function (contents, isChanged) {
                this.hop_dong_dich_vu = contents
                console.log(contents);
            },
        });
        this.suneditorcam_hop_dong_dich_vu = editor2;

        this.suneditorcam_hop_dong_dich_vu.onChange = async (contents, core) => {
            this.hop_dong_dich_vu = contents;
            await console.log(this.hop_dong_dich_vu)
        };

        this.loai_dich_vu_id = this.data?.loai_dich_vu_id

    },
}
</script>

<style lang="scss" scoped>
.service-title {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.support-hr {
    margin: 25px 0px 25px 0px;
}

.img-note {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 12px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
}

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

.input-group-service {
    margin-bottom: 24px;
}

.btn-service-upload {
    cursor: pointer;
}

.btn-service-delete {
    cursor: pointer;
}

.action-benefits {
    position: absolute;
    top: 7px;
    right: 4px;
    cursor: pointer;

    div {
        width: 32px;
    }
}

.form-benefits {
    height: calc(1.6em + 1rem + 2px);
    padding: 0.575rem 0.75rem;
    border-radius: 10px;
    border: 1px solid #E5E5E5;
    background: #FFF;
    color: #0056B1;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>