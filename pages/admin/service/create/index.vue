<template>
    <div class="content-mp">
        <div class="service-edit">
            <div class="mb-7 d-none d-sm-block ">
                <div class="d-flex justify-content-between align-items-center">
                    <title-header>
                        Thêm dịch vụ
                    </title-header>
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

                                <span class="service-title">Tên dịch vụ <span class="text-danger">*</span></span>
                            </span>

                        </div>
                        <div>
                            <input type="text" v-model="ten_dich_vu" placeholder="Nhập tên"
                                class="form-control form-benefits" />
                        </div>

                        <!-- <hr class="support-hr" />

                        <div class="mt-2 mb-2 d-flex justify-content-between align-items-center">
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

                        <hr class="support-hr" />

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
                                <span class="service-title">Độ tuổi <span class="text-danger">*</span></span>
                            </span>

                        </div>
                        <div>
                            <b-form-select v-model="do_tuoi_id" :options="do_tuoi"
                                aria-placeholder="Chọn"></b-form-select>
                        </div>

                        <hr class="support-hr" />

                        <div class="mt-4 mb-6">
                            <div class="mb-2">
                                <div class="mb-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <title-header>
                                            Quyền lợi <span class="text-danger">*</span>
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
                                    <!-- <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15.1667 3.23329V11.16C15.1667 11.8066 14.64 12.4 13.9933 12.48L13.7867 12.5066C12.6933 12.6533 11.1533 13.1066 9.91333 13.6266C9.48 13.8066 9 13.48 9 13.0066V3.73329C9 3.48662 9.14 3.25995 9.36 3.13995C10.58 2.47995 12.4267 1.89329 13.68 1.78662H13.72C14.52 1.78662 15.1667 2.43329 15.1667 3.23329Z"
                                            fill="#FC4D32" />
                                        <path
                                            d="M7.63999 3.13995C6.41999 2.47995 4.57333 1.89329 3.31999 1.78662H3.27333C2.47333 1.78662 1.82666 2.43329 1.82666 3.23329V11.16C1.82666 11.8066 2.35333 12.4 2.99999 12.48L3.20666 12.5066C4.29999 12.6533 5.83999 13.1066 7.07999 13.6266C7.51333 13.8066 7.99333 13.48 7.99333 13.0066V3.73329C7.99333 3.47995 7.85999 3.25995 7.63999 3.13995ZM3.83333 5.15995H5.33333C5.60666 5.15995 5.83333 5.38662 5.83333 5.65995C5.83333 5.93995 5.60666 6.15995 5.33333 6.15995H3.83333C3.55999 6.15995 3.33333 5.93995 3.33333 5.65995C3.33333 5.38662 3.55999 5.15995 3.83333 5.15995ZM5.83333 8.15995H3.83333C3.55999 8.15995 3.33333 7.93995 3.33333 7.65995C3.33333 7.38662 3.55999 7.15995 3.83333 7.15995H5.83333C6.10666 7.15995 6.33333 7.38662 6.33333 7.65995C6.33333 7.93995 6.10666 8.15995 5.83333 8.15995Z"
                                            fill="#FC4D32" />
                                    </svg> -->
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
                                                        v-b-modal.my-modal-edit>Sửa quyền
                                                        lợi</v-list-item-title>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-title
                                                        @click="deleteTodo(item?.id)">Xóa</v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="support-hr" />

                        <div class="mt-4 mb-6">
                            <div class="mb-2">
                                <div class="mb-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <title-header>
                                            Giá trị <span class="text-danger">*</span>
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
                                            Cam kết <span class="text-danger">*</span>
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
                                            Hợp đồng dịch vụ <span class="text-danger">*</span>
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
        title: 'thêm mới dịch vụ',
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
                name: 'Thêm mới dịch vụ',
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
                this.do_tuoi_id = this.do_tuoi[0].value
            })
        },
        async send_data(event) {
            if (this.hop_dong_dich_vu == '' || this.hop_dong_dich_vu == null) {
                toastr.error("vui lòng nhập đủ thông tin");
                return
            }
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
            formData.append('loai_dich_vu_id', this.loai_dich_vu_id)

            this.todos.forEach((value, key) => {
                formData.append(`quyen_loi[${key}][name]`, value.name_benefit)
                formData.append(`quyen_loi[${key}][link]`, value.link_benefit)
            });

            formData.forEach((value, key) => {
                console.log(`${key}: ${value}`);
            });

            // return;

            await api.post('dich-vu/tao-moi', formData, {
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
        this.load_role()

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
                ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save']
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
                ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save']
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
        this.suneditorcam_ketInstance = editor2;

        this.suneditorcam_ketInstance.onChange = async (contents, core) => {
            this.hop_dong_dich_vu = contents;
            await console.log(this.hop_dong_dich_vu)
        };

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