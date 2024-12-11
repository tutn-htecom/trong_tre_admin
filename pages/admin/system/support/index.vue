<template>
    <div class="content-mp">
        <div class="support">
            <b-row>
                <b-col cols="12" sm="7">
                    <div>
                        <div class="mb-2">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.21954 12.6733L2.20621 12.6867C2.02621 12.2933 1.91288 11.8467 1.86621 11.3533C1.91288 11.84 2.03954 12.28 2.21954 12.6733Z"
                                    fill="#FC4D32" />
                                <path
                                    d="M6.49975 6.92C7.37604 6.92 8.08642 6.20962 8.08642 5.33333C8.08642 4.45704 7.37604 3.74667 6.49975 3.74667C5.62346 3.74667 4.91309 4.45704 4.91309 5.33333C4.91309 6.20962 5.62346 6.92 6.49975 6.92Z"
                                    fill="#FC4D32" />
                                <path
                                    d="M11.293 1.33333H5.70634C3.27967 1.33333 1.83301 2.78 1.83301 5.20667V10.7933C1.83301 11.52 1.95967 12.1533 2.20634 12.6867C2.77967 13.9533 4.00634 14.6667 5.70634 14.6667H11.293C13.7197 14.6667 15.1663 13.22 15.1663 10.7933V9.26667V5.20667C15.1663 2.78 13.7197 1.33333 11.293 1.33333ZM14.0797 8.33333C13.5597 7.88667 12.7197 7.88667 12.1997 8.33333L9.42634 10.7133C8.90634 11.16 8.06634 11.16 7.54634 10.7133L7.31967 10.5267C6.84634 10.1133 6.09301 10.0733 5.55967 10.4333L3.06634 12.1067C2.91967 11.7333 2.83301 11.3 2.83301 10.7933V5.20667C2.83301 3.32667 3.82634 2.33333 5.70634 2.33333H11.293C13.173 2.33333 14.1663 3.32667 14.1663 5.20667V8.40667L14.0797 8.33333Z"
                                    fill="#FC4D32" />
                            </svg>
                            <span class="title-support">
                                Ảnh đại diện <i>(Tối thiểu không quá 2mb)</i>
                            </span>
                        </div>

                        <div class="card-support">
                            <div class="card-support-body">
                                <div class="support-img">
                                    <img :src="image" />
                                </div>

                                <div>
                                    <input type="file" hidden @change="handleFileChange" id="img" />
                                    <label @click="delete_img()" class="mb-3 btn-support-delete d-block" v-b-tooltip.hover
                                        title="Xoá ảnh">
                                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16" r="16" fill="#F2F2F2" />
                                            <g clip-path="url(#clip0_678_8713)">
                                                <path
                                                    d="M16.5639 11.1532C18.6966 11.1532 20.8323 11.1592 22.9651 11.1473C23.2971 11.1473 23.4227 11.18 23.3779 11.5787C23.1266 13.8489 22.8634 16.122 22.7108 18.4011C22.6241 19.6894 22.5194 20.9717 22.4147 22.2571C22.3549 22.9949 22.2921 23.4799 22.1604 24.2059C21.9899 25.1342 21.6071 26 20.255 25.9881C17.7813 25.9911 15.3076 25.9643 12.8368 26C11.8198 26.0149 11.0152 25.8036 10.7789 24.2059C10.5127 22.4118 9.94433 14.1018 9.94433 14.1018L9.71699 11.7156C9.71699 11.7156 9.65418 11.1532 10.2076 11.1532C12.3283 11.1532 14.4461 11.1532 16.5669 11.1532H16.5639ZM17.0784 18.5498C17.0784 17.2734 17.0784 15.997 17.0784 14.7206C17.0784 14.2981 16.863 14.0303 16.528 14.0214C16.1541 14.0125 15.8849 14.3071 15.8849 14.7385C15.8849 17.2764 15.8849 19.8143 15.8879 22.3553C15.8879 22.8045 16.1361 23.105 16.4981 23.1169C16.8361 23.1288 17.0724 22.8105 17.0724 22.3374C17.0724 21.0759 17.0724 19.8114 17.0724 18.5498H17.0784ZM19.9649 18.5409C19.9649 17.2496 19.9649 15.9554 19.9649 14.6641C19.9649 14.4975 19.9858 14.3309 19.8153 14.2118C19.6239 14.078 19.4444 13.9589 19.1961 14.069C18.8791 14.2089 18.7834 14.4528 18.7864 14.7801C18.7953 17.2943 18.7953 19.8114 18.8013 22.3255C18.8013 22.8015 19.0316 23.108 19.3816 23.111C19.7316 23.1169 19.9709 22.8015 19.9709 22.3374C19.9709 21.0729 19.9709 19.8084 19.9709 18.5439L19.9649 18.5409ZM14.1918 18.5707C14.1918 17.2526 14.1918 15.9345 14.1918 14.6165C14.1918 14.2178 14.0213 14.0303 13.6594 14.0244C13.3453 14.0184 13.0911 14.2684 13.0911 14.6165C13.0881 17.2377 13.0881 19.8619 13.0911 22.4832C13.0911 22.8581 13.3663 23.1407 13.6833 23.108C14.0513 23.0693 14.2038 22.87 14.1978 22.4862C14.1799 21.183 14.1918 19.8768 14.1918 18.5736V18.5707Z"
                                                    fill="#979797" />
                                                <path
                                                    d="M16.4776 10.0552C14.2461 10.0552 12.0147 10.0552 9.78024 10.0552C9.08927 10.0552 8.5 9.51374 8.5 8.88C8.5 8.29089 9.08628 7.72856 9.75631 7.72261C11.0844 7.71071 12.4125 7.70773 13.7406 7.72856C14.1085 7.73451 14.2222 7.6393 14.2042 7.26144C14.1713 6.59795 14.7786 6.01479 15.4576 6.00883C16.1366 6.00288 16.8156 6.04454 17.4916 5.99991C18.2035 5.9523 18.8436 6.61282 18.7868 7.23764C18.7509 7.63633 18.9124 7.73154 19.2893 7.72559C20.5755 7.70773 21.8617 7.74939 23.145 7.71666C24.0094 7.69583 24.8081 8.3504 24.3833 9.40068C24.2308 9.78152 23.812 10.0493 23.2616 10.0493C21.099 10.0493 18.9393 10.0493 16.7767 10.0493C16.678 10.0493 16.5793 10.0493 16.4806 10.0493L16.4776 10.0552Z"
                                                    fill="#979797" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_678_8713">
                                                    <rect width="16" height="20" fill="white"
                                                        transform="translate(8.5 6)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </label>

                                    <label for="img" class="btn-support-save d-block" v-b-tooltip.hover title="Tải ảnh lên">
                                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16" r="16" fill="#F2F2F2" />
                                            <path d="M10.5 11.3846L16.5 6M16.5 6L22.5 11.3846M16.5 6L16.5 13"
                                                stroke="#979797" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M15.5 15V18.9375C15.5 19.4898 15.9477 19.9375 16.5 19.9375C17.0523 19.9375 17.5 19.4898 17.5 18.9375V15H23.5C24.6046 15 25.5 15.8954 25.5 17V22C25.5 23.1046 24.6046 24 23.5 24H9.5C8.39543 24 7.5 23.1046 7.5 22V17C7.5 15.8954 8.39543 15 9.5 15H15.5Z"
                                                fill="#979797" />
                                        </svg>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <hr class="support-hr" />

                        <title-header>Thông tin liên hệ</title-header>

                        <div class="mt-5">
                            <div class="input-title mb-2">
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.75098 4.66669C2.78264 4.66669 2.00098 5.44835 2.00098 6.41669V11.0834C2.00098 12.0517 2.78264 12.8334 3.75098 12.8334H4.62598C5.26764 12.8334 5.79264 12.3084 5.79264 11.6667V5.83335C5.79264 5.19169 5.26764 4.66669 4.62598 4.66669H3.75098ZM4.33431 9.91669C4.33431 10.1559 4.13598 10.3542 3.89681 10.3542C3.65764 10.3542 3.45931 10.1559 3.45931 9.91669V7.58335C3.45931 7.34419 3.65764 7.14585 3.89681 7.14585C4.13598 7.14585 4.33431 7.34419 4.33431 7.58335V9.91669Z"
                                        fill="#FC4D32" />
                                    <path
                                        d="M11.917 1.16669H8.41699C7.44866 1.16669 6.66699 1.94835 6.66699 2.91669V11.0834C6.66699 12.0517 7.44866 12.8334 8.41699 12.8334H8.70866C8.87199 12.8334 9.00033 12.705 9.00033 12.5417V10.5C9.00033 10.1792 9.26283 9.91669 9.58366 9.91669H10.7503C11.0712 9.91669 11.3337 10.1792 11.3337 10.5V12.5417C11.3337 12.705 11.462 12.8334 11.6253 12.8334H11.917C12.8853 12.8334 13.667 12.0517 13.667 11.0834V2.91669C13.667 1.94835 12.8853 1.16669 11.917 1.16669ZM9.43783 7.58335C9.43783 7.82252 9.23949 8.02085 9.00033 8.02085C8.76116 8.02085 8.56283 7.82252 8.56283 7.58335V4.66669C8.56283 4.42752 8.76116 4.22919 9.00033 4.22919C9.23949 4.22919 9.43783 4.42752 9.43783 4.66669V7.58335ZM11.7712 7.58335C11.7712 7.82252 11.5728 8.02085 11.3337 8.02085C11.0945 8.02085 10.8962 7.82252 10.8962 7.58335V4.66669C10.8962 4.42752 11.0945 4.22919 11.3337 4.22919C11.5728 4.22919 11.7712 4.42752 11.7712 4.66669V7.58335Z"
                                        fill="#FC4D32" />
                                </svg>
                                Đơn vị chủ quản
                            </div>
                            <div class="position-relative">
                                <input placeholder="Nhập thông tin" v-model="donViChuQuan"
                                    class="form-control support-input" type="text" />
                            </div>
                        </div>

                        <div class="mt-5">
                            <div class="input-title mb-2">
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8.31786 12.2454C9.49072 11.6407 12.929 9.58172 12.929 6.22678C12.929 3.56102 10.6914 1.39999 7.93129 1.39999C5.17114 1.39999 2.93359 3.56102 2.93359 6.22678C2.93359 9.58172 6.37186 11.6407 7.54472 12.2454C7.78996 12.3719 8.07262 12.3719 8.31786 12.2454ZM7.93099 8.29528C9.11391 8.29528 10.0729 7.36913 10.0729 6.22666C10.0729 5.0842 9.11391 4.15804 7.93099 4.15804C6.74807 4.15804 5.78912 5.0842 5.78912 6.22666C5.78912 7.36913 6.74807 8.29528 7.93099 8.29528Z"
                                        fill="#FFB761" />
                                </svg>
                                Trụ sở
                            </div>
                            <div class="position-relative">
                                <!-- <input placeholder="Nhập thông tin" class="form-control support-input" type="text" /> -->
                                <textarea placeholder="Nhập thông tin" v-model="truSo"
                                    class="form-control support-input"></textarea>
                            </div>
                        </div>

                        <div class="mt-5">
                            <div class="input-title mb-2">
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.5445 12.11L13.1245 11.69C13.3403 11.3633 13.4687 10.9667 13.4687 10.5467C13.4687 9.39168 12.5353 8.45834 11.3803 8.45834C10.2253 8.45834 9.29199 9.39168 9.29199 10.5467C9.29199 11.7017 10.2253 12.635 11.3803 12.635C11.8062 12.635 12.197 12.5067 12.5237 12.2908L12.9437 12.7108C13.0253 12.7925 13.1362 12.8333 13.2412 12.8333C13.352 12.8333 13.457 12.7925 13.5387 12.7108C13.7078 12.5417 13.7078 12.2733 13.5445 12.11Z"
                                        fill="#4EAEEA" />
                                    <path
                                        d="M2.0185 8.53418C2.0185 8.55168 2.00684 8.57501 2.00684 8.59251C2.5435 9.66585 3.4185 10.5467 4.49184 11.0775C4.50934 11.0775 4.53267 11.0658 4.55017 11.0658C4.35184 10.3892 4.20017 9.69501 4.08934 9.00085C3.38934 8.88418 2.69517 8.73251 2.0185 8.53418Z"
                                        fill="#4EAEEA" />
                                    <path
                                        d="M11.958 3.75082C11.4097 2.60165 10.4822 1.67415 9.33887 1.13165C9.54887 1.82582 9.72387 2.53749 9.84053 3.24915C10.5522 3.36582 11.2639 3.53499 11.958 3.75082Z"
                                        fill="#4EAEEA" />
                                    <path
                                        d="M1.95996 3.75084C2.65996 3.54084 3.37163 3.36584 4.08329 3.24918C4.19996 2.55501 4.34579 1.86668 4.54413 1.19001C4.52663 1.19001 4.50329 1.17834 4.48579 1.17834C3.38913 1.72084 2.49663 2.63668 1.95996 3.75084Z"
                                        fill="#4EAEEA" />
                                    <path
                                        d="M8.89579 3.12668C8.75579 2.36834 8.58079 1.61001 8.32996 0.87501C8.31829 0.834177 8.31829 0.799177 8.31246 0.75251C7.88079 0.64751 7.42579 0.583344 6.95913 0.583344C6.48663 0.583344 6.03746 0.64751 5.59996 0.758343C5.59413 0.799177 5.59996 0.834177 5.58829 0.880844C5.34329 1.61584 5.16246 2.36834 5.02246 3.12668C6.31163 2.98668 7.60663 2.98668 8.89579 3.12668Z"
                                        fill="#4EAEEA" />
                                    <path
                                        d="M3.96033 4.18832C3.19616 4.32832 2.44949 4.50916 1.70866 4.75416C1.66783 4.76582 1.63283 4.76582 1.59199 4.77166C1.48116 5.20332 1.41699 5.65832 1.41699 6.12499C1.41699 6.59749 1.48116 7.04666 1.59199 7.48416C1.63283 7.48999 1.66783 7.48416 1.71449 7.49582C2.44949 7.74082 3.20199 7.92166 3.96616 8.06166C3.82033 6.77249 3.82033 5.47749 3.96033 4.18832Z"
                                        fill="#4EAEEA" />
                                    <path
                                        d="M12.3253 4.77166C12.2845 4.77166 12.2495 4.76582 12.2028 4.75416C11.4678 4.50916 10.7095 4.32832 9.95117 4.18832C10.097 5.47749 10.097 6.77249 9.95117 8.05582C10.7095 7.91582 11.4678 7.74082 12.2028 7.48999C12.2437 7.47832 12.2787 7.48416 12.3253 7.47832C12.4303 7.04082 12.5003 6.59166 12.5003 6.11916C12.5003 5.65832 12.4362 5.20916 12.3253 4.77166Z"
                                        fill="#4EAEEA" />
                                    <path
                                        d="M5.02246 9.12333C5.16246 9.88749 5.33746 10.64 5.58829 11.375C5.59996 11.4158 5.59413 11.4508 5.59996 11.4975C6.03746 11.6025 6.48663 11.6667 6.95913 11.6667C7.42579 11.6667 7.88079 11.6025 8.31246 11.4917C8.31829 11.4508 8.31829 11.4158 8.32996 11.3692C8.57496 10.6342 8.75579 9.88166 8.89579 9.11749C8.25413 9.18749 7.60663 9.23999 6.95913 9.23999C6.31163 9.23999 5.66413 9.19333 5.02246 9.12333Z"
                                        fill="#4EAEEA" />
                                    <path
                                        d="M4.88809 4.05416C4.71309 5.43083 4.71309 6.81916 4.88809 8.20166C6.26475 8.37666 7.65309 8.37666 9.03559 8.20166C9.21059 6.825 9.21059 5.43666 9.03559 4.05416C7.65309 3.87916 6.26475 3.87916 4.88809 4.05416Z"
                                        fill="#4EAEEA" />
                                </svg>
                                Website
                            </div>
                            <div class="position-relative">
                                <input placeholder="Nhập thông tin" v-model="website" class="form-control support-input"
                                    type="text" />
                            </div>
                        </div>

                        <div class="mt-5">
                            <div class="input-title mb-2">
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.751 2.04169H4.91764C3.16764 2.04169 2.00098 2.91669 2.00098 4.95835V9.04169C2.00098 11.0834 3.16764 11.9584 4.91764 11.9584H10.751C12.501 11.9584 13.6676 11.0834 13.6676 9.04169V4.95835C13.6676 2.91669 12.501 2.04169 10.751 2.04169ZM11.0251 5.59419L9.19931 7.05252C8.81431 7.36169 8.32431 7.51335 7.83431 7.51335C7.34431 7.51335 6.84848 7.36169 6.46931 7.05252L4.64348 5.59419C4.45681 5.44252 4.42764 5.16252 4.57348 4.97585C4.72514 4.78919 4.99931 4.75419 5.18598 4.90585L7.01181 6.36419C7.45514 6.72002 8.20764 6.72002 8.65098 6.36419L10.4768 4.90585C10.6635 4.75419 10.9435 4.78335 11.0893 4.97585C11.241 5.16252 11.2118 5.44252 11.0251 5.59419Z"
                                        fill="#0056B1" />
                                </svg>
                                Email
                            </div>
                            <div class="position-relative">
                                <input placeholder="Nhập thông tin" v-model="email" class="form-control support-input"
                                    type="text" />
                            </div>
                        </div>

                        <div class="mt-5">
                            <div class="input-title mb-2">
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.1126 6.27083C10.8618 6.27083 10.6635 6.06666 10.6635 5.82166C10.6635 5.60583 10.4476 5.15666 10.086 4.76583C9.73014 4.38666 9.33931 4.165 9.01264 4.165C8.76181 4.165 8.56348 3.96083 8.56348 3.71583C8.56348 3.47083 8.76764 3.26666 9.01264 3.26666C9.59598 3.26666 10.2085 3.58166 10.7451 4.1475C11.2468 4.67833 11.5676 5.3375 11.5676 5.81583C11.5676 6.06666 11.3635 6.27083 11.1126 6.27083Z"
                                        fill="#00C092" />
                                    <path
                                        d="M13.2185 6.27085C12.9677 6.27085 12.7693 6.06669 12.7693 5.82169C12.7693 3.75085 11.0835 2.07085 9.0185 2.07085C8.76767 2.07085 8.56934 1.86669 8.56934 1.62169C8.56934 1.37669 8.76767 1.16669 9.01267 1.16669C11.5793 1.16669 13.6677 3.25502 13.6677 5.82169C13.6677 6.06669 13.4635 6.27085 13.2185 6.27085Z"
                                        fill="#00C092" />
                                    <path
                                        d="M7.28014 8.72085L6.20098 9.80002C5.97348 10.0275 5.61181 10.0275 5.37848 9.80585C5.31431 9.74169 5.25014 9.68335 5.18598 9.61919C4.58514 9.01252 4.04264 8.37669 3.55848 7.71169C3.08014 7.04669 2.69514 6.38169 2.41514 5.72252C2.14098 5.05752 2.00098 4.42169 2.00098 3.81502C2.00098 3.41835 2.07098 3.03919 2.21098 2.68919C2.35098 2.33335 2.57264 2.00669 2.88181 1.71502C3.25514 1.34752 3.66348 1.16669 4.09514 1.16669C4.25848 1.16669 4.42181 1.20169 4.56764 1.27169C4.71931 1.34169 4.85348 1.44669 4.95848 1.59835L6.31181 3.50585C6.41681 3.65169 6.49264 3.78585 6.54514 3.91419C6.59764 4.03669 6.62681 4.15919 6.62681 4.27002C6.62681 4.41002 6.58598 4.55002 6.50431 4.68419C6.42848 4.81835 6.31764 4.95835 6.17764 5.09835L5.73431 5.55919C5.67014 5.62335 5.64098 5.69919 5.64098 5.79252C5.64098 5.83919 5.64681 5.88002 5.65848 5.92669C5.67598 5.97335 5.69348 6.00835 5.70514 6.04335C5.81014 6.23585 5.99098 6.48669 6.24764 6.79002C6.51014 7.09335 6.79014 7.40252 7.09348 7.71169C7.15181 7.77002 7.21598 7.82835 7.27431 7.88669C7.50764 8.11419 7.51348 8.48752 7.28014 8.72085Z"
                                        fill="#00C092" />
                                    <path
                                        d="M13.6494 10.6925C13.6494 10.8558 13.6203 11.025 13.5619 11.1883C13.5444 11.235 13.5269 11.2817 13.5036 11.3283C13.4044 11.5383 13.2761 11.7367 13.1069 11.9233C12.8211 12.2383 12.5061 12.4658 12.1503 12.6117C12.1444 12.6117 12.1386 12.6175 12.1328 12.6175C11.7886 12.7575 11.4153 12.8333 11.0128 12.8333C10.4178 12.8333 9.78193 12.6933 9.11109 12.4075C8.44026 12.1217 7.76943 11.7367 7.10443 11.2525C6.87693 11.0833 6.64943 10.9142 6.43359 10.7333L8.34109 8.82584C8.50443 8.94834 8.65026 9.04167 8.77276 9.10584C8.80193 9.1175 8.83693 9.135 8.87776 9.1525C8.92443 9.17 8.97109 9.17584 9.02359 9.17584C9.12276 9.17584 9.19859 9.14084 9.26276 9.07667L9.70609 8.63917C9.85193 8.49334 9.99193 8.3825 10.1261 8.3125C10.2603 8.23084 10.3944 8.19 10.5403 8.19C10.6511 8.19 10.7678 8.21334 10.8961 8.26584C11.0244 8.31834 11.1586 8.39417 11.3044 8.49334L13.2353 9.86417C13.3869 9.96917 13.4919 10.0917 13.5561 10.2375C13.6144 10.3833 13.6494 10.5292 13.6494 10.6925Z"
                                        fill="#00C092" />
                                </svg>
                                Hotline - Zalo 24/7
                            </div>
                            <div class="position-relative">
                                <textarea placeholder="Nhập thông tin" v-model="hotline" class="form-control support-input"
                                    id="hotline"></textarea>
                            </div>
                        </div>



                        <hr class="support-hr" />

                        <title-header>Hướng dẫn nhận lịch</title-header>

                        <div class="mt-5">
                            <div class="input-title mb-2">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.8759 4.2121C12.3734 4.69361 11.9117 5.39585 11.2194 5.39585H2.16699C1.61471 5.39585 1.16699 4.94814 1.16699 4.39585V3.74502C1.16699 2.32169 2.32199 1.16669 3.74533 1.16669H5.09866C6.04949 1.16669 6.34699 1.47585 6.72616 1.98335L7.54283 3.06835C7.72366 3.30752 7.74699 3.33669 8.08533 3.33669H9.71282C10.5529 3.33669 11.3158 3.66995 11.8759 4.2121Z"
                                        fill="#FC4D32" />
                                    <path
                                        d="M12.8254 7.26726C12.8235 6.71629 12.3763 6.27064 11.8254 6.27065L2.16697 6.27082C1.6147 6.27083 1.16699 6.71854 1.16699 7.27082V9.7125C1.16699 11.4333 2.56699 12.8333 4.28783 12.8333H9.71282C11.4337 12.8333 12.8337 11.4333 12.8337 9.7125L12.8254 7.26726ZM8.45866 9.77084H7.47283V10.7917C7.47283 11.0308 7.27449 11.2292 7.03533 11.2292C6.79033 11.2292 6.59783 11.0308 6.59783 10.7917V9.77084H5.54199C5.30283 9.77084 5.10449 9.5725 5.10449 9.33334C5.10449 9.09417 5.30283 8.89584 5.54199 8.89584H6.59783V7.875C6.59783 7.63584 6.79033 7.4375 7.03533 7.4375C7.27449 7.4375 7.47283 7.63584 7.47283 7.875V8.89584H8.45866C8.69783 8.89584 8.89616 9.09417 8.89616 9.33334C8.89616 9.5725 8.69783 9.77084 8.45866 9.77084Z"
                                        fill="#FC4D32" />
                                </svg>
                                Hướng dẫn nhận lịch cho Giáo viên
                            </div>
                            <div class="position-relative">
                                <textarea placeholder="Nhập thông tin" class="form-control support-input"
                                    id="tutorial"></textarea>
                            </div>
                        </div>

                        <hr class="support-hr" />

                        <title-header>Hướng dẫn quy trình cho giáo viên</title-header>

                        <div class="mt-5">
                            <div class="input-title mb-2">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.6492 5.10421H9.93417C9.19333 5.10421 8.75 4.66087 8.75 3.92004V2.20504C8.75 1.46421 9.19333 1.02087 9.93417 1.02087H11.6492C12.39 1.02087 12.8333 1.46421 12.8333 2.20504V3.92004C12.8333 4.66087 12.39 5.10421 11.6492 5.10421ZM11.7775 3.17337C11.7075 3.10337 11.6142 3.06837 11.5208 3.06837C11.4275 3.06837 11.3342 3.10337 11.2642 3.17337L11.1592 3.27837V1.97171C11.1592 1.76754 10.9958 1.60421 10.7917 1.60421C10.5875 1.60421 10.4242 1.76754 10.4242 1.97171V3.27837L10.3192 3.17337C10.1792 3.03337 9.94583 3.03337 9.80583 3.17337C9.66583 3.31337 9.66583 3.54671 9.80583 3.68671L10.535 4.41587C10.5642 4.44504 10.605 4.46837 10.6458 4.48587C10.6575 4.49171 10.6692 4.49171 10.6808 4.49754C10.71 4.50921 10.7392 4.51504 10.7742 4.51504C10.7858 4.51504 10.7975 4.51504 10.8092 4.51504C10.85 4.51504 10.885 4.50921 10.9258 4.49171C10.9317 4.49171 10.9317 4.49171 10.9375 4.49171C10.9783 4.47421 11.0133 4.45087 11.0425 4.42171C11.0483 4.41587 11.0483 4.41587 11.0542 4.41587L11.7833 3.68671C11.9233 3.54671 11.9233 3.31337 11.7775 3.17337Z"
                                        fill="#FC4D32" />
                                    <path
                                        d="M1.16699 6.68496V9.60163C1.16699 10.9375 2.24616 12.0166 3.58199 12.0166H10.4128C11.7487 12.0166 12.8337 10.9316 12.8337 9.59579V6.68496C12.8337 6.29413 12.5187 5.97913 12.1278 5.97913H1.87283C1.48199 5.97913 1.16699 6.29413 1.16699 6.68496ZM4.66699 10.0625H3.50033C3.26116 10.0625 3.06283 9.86413 3.06283 9.62496C3.06283 9.38579 3.26116 9.18746 3.50033 9.18746H4.66699C4.90616 9.18746 5.10449 9.38579 5.10449 9.62496C5.10449 9.86413 4.90616 10.0625 4.66699 10.0625ZM8.45866 10.0625H6.12533C5.88616 10.0625 5.68783 9.86413 5.68783 9.62496C5.68783 9.38579 5.88616 9.18746 6.12533 9.18746H8.45866C8.69783 9.18746 8.89616 9.38579 8.89616 9.62496C8.89616 9.86413 8.69783 10.0625 8.45866 10.0625Z"
                                        fill="#FC4D32" />
                                    <path
                                        d="M7.87533 2.68911V4.39828C7.87533 4.78911 7.56033 5.10411 7.16949 5.10411H1.87283C1.47616 5.10411 1.16699 4.77744 1.16699 4.38661C1.17283 3.72744 1.43533 3.12661 1.87283 2.68911C2.31033 2.25161 2.91699 1.98328 3.58199 1.98328H7.16949C7.56033 1.98328 7.87533 2.29828 7.87533 2.68911Z"
                                        fill="#FC4D32" />
                                </svg>
                                Hướng dẫn quy trình cho giáo viên
                            </div>
                            <div class="position-relative">
                                <textarea placeholder="Nhập thông tin" class="form-control support-input"
                                    id="tutorial_money"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="my-7">
                        <form @submit="send_data">
                            <button-save typeBtn="submit">
                                Lưu thay đổi
                            </button-save>
                        </form>
                    </div>
                </b-col>
            </b-row>
        </div>

    </div>
</template>

<script>
import CardItem from '@/components/card/CardItem.vue';
import ButtonAdd from '~/components/button/ButtonAdd.vue';
import ButtonSave from '~/components/button/ButtonComponent.vue';
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
                name: 'Liên hệ/ Trợ giúp',
                previous: '/admin/dashboard'
            },
            suneditorInstance: null,
            suneditorHotlineInstance: null,
            suneditorTutorialInstance: null,
            suneditorTutorialMoneyInstance: null,
            contents: 'Nhập nội dung giới thiệu',
            hotline: 'Nhập hotline',
            tutorial: 'Nhập nội dung',
            tutorial_money: 'Nhập nội dung',
            image: null,
            file: null,
            donViChuQuan: "",
            email: "",
            nhanLich: "",
            rutTien: "",
            truSo: "",
            website: "",
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
        async load_data() {
            await api.get('he-thong/lien-he-va-tro-giup', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                const user = res?.data?.data
                this.data = user
                this.image = user?.image
                this.donViChuQuan = user?.donViChuQuan
                this.email = user?.email
                this.hotline = user?.hotline
                this.nhanLich = user?.nhanLich
                this.rutTien = user?.rutTien
                this.truSo = user?.truSo
                this.website = user?.website

                this.suneditorHotlineInstance.setContents(user?.hotline);
                this.suneditorTutorialInstance.setContents(user?.nhanLich);
                this.suneditorTutorialMoneyInstance.setContents(user?.rutTien);

                // this.suneditorInstance.setContents(user?.content);
            })
        },
        async send_data(event) {
            event.preventDefault();
            const formData = new FormData()
            formData.append('image', this.file)
            formData.append('donViChuQuan', this.donViChuQuan)
            formData.append('email', this.email)
            formData.append('hotline', this.hotline)
            formData.append('nhanLich', this.nhanLich)
            formData.append('rutTien', this.rutTien)
            formData.append('truSo', this.truSo)
            formData.append('website', this.website)

            await api.post('he-thong/cap-nhat-lien-he-va-tro-giup', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.load_data()
                }
            })
        },
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);

        const editor1 = SUNEDITOR.create((document.getElementById('hotline') || 'hotline'), {
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
                // ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
                // ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save']
            ],
            callBackSave: function (contents, isChanged) {
                this.hotline = contents
                console.log(contents);
            },
        });
        this.suneditorHotlineInstance = editor1; // Store the Suneditor instance in a component property

        this.suneditorHotlineInstance.onChange = async (contents, core) => {
            this.hotline = contents;
            await console.log(this.hotline)
        };
        //

        const editor2 = SUNEDITOR.create((document.getElementById('tutorial') || 'tutorial'), {
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
                // ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
                // ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save']
            ],
            callBackSave: function (contents, isChanged) {
                this.nhanLich = contents
                console.log(contents);
            },
        });
        this.suneditorTutorialInstance = editor2; // Store the Suneditor instance in a component property

        this.suneditorTutorialInstance.onChange = async (contents, core) => {
            this.nhanLich = contents;
            await console.log(this.nhanLich)
        };


        //

        const editor3 = SUNEDITOR.create((document.getElementById('tutorial_money') || 'tutorial_money'), {
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
                // ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
                // ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save']
            ],
            callBackSave: function (contents, isChanged) {
                this.rutTien = contents
                console.log(contents);
            },
        });
        this.suneditorTutorialMoneyInstance = editor3; // Store the Suneditor instance in a component property

        this.suneditorTutorialMoneyInstance.onChange = async (contents, core) => {
            this.rutTien = contents;
            await console.log(this.rutTien)
        };


        this.load_data();
    },
    components: { CardItem, ButtonAdd, ButtonSave }
}
</script>

<style lang="scss" scoped>
.support-hr {
    margin: 35px 0px;
}

.support-content {
    margin: 0px 0px;
}

.support-img {
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

.title-support {
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

.support-input {
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

.support-input:focus {
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

.card-support {
    border-radius: 10px;
    border: 1px solid #E5E5E5;
    background: #FFF;
    // width: 353px;
    height: 150px;
    padding: 12px;
    overflow: hidden;

    .card-support-body {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
    }
}

.btn-support-save {
    transition: 0.3s;
    cursor: pointer;
    // &:hover {
    //     stroke: rgb(30, 161, 236);
    //     transform: scale(1.05);
    // }
}

.btn-support-delete {
    cursor: pointer;
    transition: 0.3s;
    // &:hover {
    //     stroke: rgb(238, 50, 50);
    //     transform: scale(1.05);
    // }
}
</style>