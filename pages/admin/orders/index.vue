<template>
    <div class="content-mp">
        <div class="d-flex justify-content-between align-items-center wmt-27 ">
            <h1 class="w-title d-inline w-h1">
                Tổng quan tình trạng đơn
            </h1>


        </div>

        <div class="wow animate__animated animate__zoomIn">
            <!-- <div class="d-flex justify-content-between align-center mb-3"> -->
            <!-- <div class="h3-title">Tổng quan tình trạng đơn</div> -->
            <!-- <nuxt-link class="watch-more" to="/">Xem thêm</nuxt-link> -->
            <!-- </div> -->
            <!-- <b-card style="min-width: 245px;" class="mb-2"> -->
            <div class="d-flex justify-content-between align-center">
                <div class="w-100 ">

                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="card-order">
                                <div class="span-title">Số ca chạy theo dự kiến </div>
                                <div class="mt-2 d-flex justify-content-between align-items-center">
                                    <div class="text text-c-danger">{{ analysis?.du_kien?.tong_buoi }}</div>
                                    <div class="text-rate">
                                        <svg width="26" height="18" viewBox="0 0 26 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="9.28687" cy="9" r="9" fill="#FC4D32" fill-opacity="0.1" />
                                            <path
                                                d="M13.2296 6.85537C13.1723 6.71488 13.0577 6.59917 12.9185 6.54132C12.853 6.51653 12.7793 6.5 12.7056 6.5H11.183C10.8637 6.5 10.61 6.7562 10.61 7.07851C10.61 7.40083 10.8637 7.65703 11.183 7.65703H11.3304L9.60306 9.40083L8.76806 8.14463C8.66983 8.00413 8.52248 7.90496 8.35056 7.88843C8.17047 7.8719 8.01493 7.92975 7.89214 8.05372L5.45264 10.5165C5.23161 10.7397 5.23161 11.1033 5.45264 11.3347C5.56724 11.4504 5.70641 11.5 5.85376 11.5C6.00111 11.5 6.14847 11.4421 6.25489 11.3347L8.20321 9.36777L9.03821 10.624C9.13644 10.7645 9.2838 10.8636 9.45571 10.8802C9.6358 10.8967 9.79134 10.8388 9.91414 10.7149L12.1408 8.46694V8.6157C12.1408 8.93802 12.3946 9.19421 12.7138 9.19421C13.0331 9.19421 13.2869 8.93802 13.2869 8.6157V7.07025C13.2705 6.99587 13.2623 6.92149 13.2296 6.85537Z"
                                                fill="#FC4D32" />
                                        </svg>
                                        + {{ analysis?.du_kien?.phan_tram }}%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="card-order">
                                <div class="span-title">Số ca chưa "vào ca" theo dự kiến </div>
                                <div class="mt-2 d-flex justify-content-between align-items-center">
                                    <div class="text text-c-warning">{{ analysis?.chua_vao_ca?.tong_buoi }}</div>
                                    <div class="text-rate">
                                        <svg width="27" height="18" viewBox="0 0 27 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="9.75" cy="9" r="9" fill="#FFB761" fill-opacity="0.2" />
                                            <path
                                                d="M13.6927 6.85537C13.6354 6.71488 13.5208 6.59917 13.3816 6.54132C13.3161 6.51653 13.2425 6.5 13.1688 6.5H11.6461C11.3269 6.5 11.0731 6.7562 11.0731 7.07851C11.0731 7.40083 11.3269 7.65703 11.6461 7.65703H11.7935L10.0662 9.40083L9.2312 8.14463C9.13296 8.00413 8.98561 7.90496 8.8137 7.88843C8.6336 7.8719 8.47806 7.92975 8.35527 8.05372L5.91577 10.5165C5.69474 10.7397 5.69474 11.1033 5.91577 11.3347C6.03038 11.4504 6.16954 11.5 6.3169 11.5C6.46425 11.5 6.6116 11.4421 6.71802 11.3347L8.66635 9.36777L9.50134 10.624C9.59958 10.7645 9.74693 10.8636 9.91884 10.8802C10.0989 10.8967 10.2545 10.8388 10.3773 10.7149L12.6039 8.46694V8.6157C12.6039 8.93802 12.8577 9.19421 13.177 9.19421C13.4962 9.19421 13.75 8.93802 13.75 8.6157V7.07025C13.7336 6.99587 13.7254 6.92149 13.6927 6.85537Z"
                                                fill="#FFB761" />
                                        </svg>
                                        + {{ analysis?.chua_vao_ca?.phan_tram }}%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="card-order">
                                <div class="span-title">Số ca đang chạy (đã ấn "vào ca")</div>
                                <div class="mt-2 d-flex justify-content-between align-items-center">
                                    <div class="text text-c-primary">{{ analysis?.dang_day?.tong_buoi }}</div>
                                    <div class="text-rate">
                                        <svg width="26" height="18" viewBox="0 0 26 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="9.28687" cy="9" r="9" fill="#0056B1" fill-opacity="0.15" />
                                            <path
                                                d="M13.2296 6.85537C13.1723 6.71488 13.0577 6.59917 12.9185 6.54132C12.853 6.51653 12.7793 6.5 12.7056 6.5H11.183C10.8637 6.5 10.61 6.7562 10.61 7.07851C10.61 7.40083 10.8637 7.65703 11.183 7.65703H11.3304L9.60306 9.40083L8.76806 8.14463C8.66983 8.00413 8.52248 7.90496 8.35056 7.88843C8.17047 7.8719 8.01493 7.92975 7.89214 8.05372L5.45264 10.5165C5.23161 10.7397 5.23161 11.1033 5.45264 11.3347C5.56724 11.4504 5.70641 11.5 5.85376 11.5C6.00111 11.5 6.14847 11.4421 6.25489 11.3347L8.20321 9.36777L9.03821 10.624C9.13644 10.7645 9.2838 10.8636 9.45571 10.8802C9.6358 10.8967 9.79134 10.8388 9.91414 10.7149L12.1408 8.46694V8.6157C12.1408 8.93802 12.3946 9.19421 12.7138 9.19421C13.0331 9.19421 13.2869 8.93802 13.2869 8.6157V7.07025C13.2705 6.99587 13.2623 6.92149 13.2296 6.85537Z"
                                                fill="#0056B1" />
                                        </svg>
                                        + {{ analysis?.dang_day?.phan_tram }}%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="card-order">
                                <div class="span-title">Số ca hoàn thành (đã ấn "hoàn thành")</div>
                                <div class="mt-2 d-flex justify-content-between align-items-center">
                                    <div class="text text-c-success">{{ analysis?.da_hoan_thanh?.tong_buoi }}</div>
                                    <div class="text-rate">
                                        <svg width="27" height="18" viewBox="0 0 27 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="9.75" cy="9" r="9" fill="#00C092" fill-opacity="0.2" />
                                            <path
                                                d="M13.6927 6.85537C13.6354 6.71488 13.5208 6.59917 13.3816 6.54132C13.3161 6.51653 13.2425 6.5 13.1688 6.5H11.6461C11.3269 6.5 11.0731 6.7562 11.0731 7.07851C11.0731 7.40083 11.3269 7.65703 11.6461 7.65703H11.7935L10.0662 9.40083L9.2312 8.14463C9.13296 8.00413 8.98561 7.90496 8.8137 7.88843C8.6336 7.8719 8.47806 7.92975 8.35527 8.05372L5.91577 10.5165C5.69474 10.7397 5.69474 11.1033 5.91577 11.3347C6.03038 11.4504 6.16954 11.5 6.3169 11.5C6.46425 11.5 6.6116 11.4421 6.71802 11.3347L8.66635 9.36777L9.50134 10.624C9.59958 10.7645 9.74693 10.8636 9.91884 10.8802C10.0989 10.8967 10.2545 10.8388 10.3773 10.7149L12.6039 8.46694V8.6157C12.6039 8.93802 12.8577 9.19421 13.177 9.19421C13.4962 9.19421 13.75 8.93802 13.75 8.6157V7.07025C13.7336 6.99587 13.7254 6.92149 13.6927 6.85537Z"
                                                fill="#00C092" />
                                        </svg>
                                        + {{ analysis?.da_hoan_thanh?.phan_tram }}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- </b-card> -->
        </div>

        <div class="d-flex justify-content-between align-items-center mt-5">
            <title-header>Danh sách đơn</title-header>

            <div class="d-flex">
                    <nuxt-link class="create d-inline-block" to="/admin/orders/create">

                        <span class="mdi mdi-plus"></span>
                        Tạo đơn DV
                    </nuxt-link>
                <div class="d-inline-block">
                    <div>
                        <div class="btn-export-excel" @click="export_excel()">
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
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

        <div class="d-flex justify-content-between align-items-center flex-wrap mt-5 mb-5">
            <div class="d-flex flex-wrap align-items-center">
                <div class="me-3" v-if="items">
                    <v-select class="w-50" :items="items" v-model="item" item-text="text" item-value="value" persistent-hint
                        return-object single-line label="dịch vụ"></v-select>
                </div>
                <div class="me-3" v-if="dich_vu">
                    <v-select class="w-50" :items="dich_vu" v-model="dich_vu_id" item-text="text" item-value="value"
                        persistent-hint return-object single-line label="Dịch vụ"></v-select>
                </div>
                <div class="me-5 web-w-100">
                    <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="date" label="" class="month-picker w-50" prepend-icon="mdi-calendar"
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
                <!-- <div>
                    <b-form-input class="mb-2" v-model.lazy="tuKhoa" placeholder="Tìm kiếm đơn hàng"></b-form-input>
                </div> -->
            </div>
            <b-row class="search">
                <b-col cols="12" md="6">
                    <b-form-input v-model.lazy="tuKhoa" placeholder="Tìm kiếm Khách hàng"></b-form-input>
                </b-col>
                <b-col cols="12" md="6">
                    <b-form-input v-model.lazy="giaoVien" placeholder="Tìm giáo viên"></b-form-input>
                </b-col>
            </b-row>
        </div>

        <div class="">
            <v-row>
                <v-col v-for="(item, n) in data" :key="n" xs="12" sm="6" md="4" lg="4" xl="3">
                    <!-- <CardItem /> -->
                    <card-service-order :data="item" :status="item?.trang_thai"></card-service-order>
                </v-col>

                <v-col v-if="data == null || data?.length == 0">
                    <b-alert class="wow animate__animated animate__bounce" show dismissible variant="primary">Danh sách
                        trống</b-alert>
                </v-col>
                <div class="w-100" v-else>
                    <div class="d-flex justify-content-center mt-4 w-100">
                        <b-pagination v-model="current_page" :total-rows="total" :per-page="per_page" first-text="First"
                            prev-text="Prev" next-text="Next" last-text="Last"></b-pagination>

                    </div>
                </div>
            </v-row>
        </div>
    </div>
</template>

<script>
import CardItem from '../../../components/card/CardItem.vue';
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';
import CardServiceOrder from '~/components/card/CardServiceOrder.vue';

export default {
    layout: 'admin_order',
    data() {
        return {
            title: {
                name: 'Quản lý đơn dịch vụ',
                previous: '/admin/dashboard'
            },
            date: new Date().toISOString().substr(0, 7),
            month: 1,
            menu: false,
            modal: false,
            data: null,
            giaoVien: '',
            tuKhoa: '',
            timeOut: null,
            timer: 700,
            items: [],
            dich_vu: [],
            dich_vu_id: '',
            trang_thai: '',
            item: 0,
            selected: 'A',
            options: [
                { item: 'A', name: 'Option A' },
                { item: 'B', name: 'Option B' },
                { item: 'D', name: 'Option C', notEnabled: true },
                { item: { d: 1 }, name: 'Option D' }
            ],
            selectedDate: null,
            datepickerOptions: {
                formatSectionMonth: true, // Hiển thị chọn tháng
                formatSectionYear: true,  // Hiển thị chọn năm
                maxDate: new Date(),       // Ngày tối đa hiển thị là ngày hiện tại
            },
            per_page: 0,
            current_page: 1,
            total: 0,
            analysis: null,
            // date: new Date().toISOString().substr(0, 7),
            // month: 1,
            // menu: false,
            // modal: false,
        };
    },
    computed: {
        keyword() {
            console.log(this.$store.getters[`order/keyword`])
            return this.$store.getters[`order/keyword`]
        },
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        async load_type() {
            await api.get('don-dich-vu/trang-thai-don', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.items.unshift({
                    value: '',
                    text: 'Tất cả trạng thái'
                });
                this.items.push(...res?.data?.data.map(item => ({
                    value: item.id,
                    text: item.name
                })));

                this.item = this.items[0].value
            })

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

                // this.dich_vu = res?.data?.data.map(item => {
                //     return {
                //         value: item.id,
                //         text: item.ten_dich_vu ?? '...'
                //     };
                // })
            })
        },
        async load_data() {
            await api.get(`don-dich-vu/danh-sach?tuKhoa=${this.tuKhoa}&giaoVien=${this.giaoVien}&dich_vu_id=${this.dich_vu_id?.text == 'Tất cả dịch vụ' ? '' : (this?.dich_vu_id?.value ?? '')}&thang=${this.month}&trang_thai=${this?.item?.text == 'Tất cả trạng thái' ? '' : (this?.item?.text ?? '')}&sort=1&limit=9&page=${this.current_page}`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.data = res?.data?.data
                this.per_page = res?.data?.per_page ?? 0
                this.current_page = res?.data?.current_page ?? 0
                this.total = res?.data?.total
            })

            await api.get('bao-cao/bao-cao-tinh-trang-don?thang=' + (this.month ?? ''), {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.analysis = res?.data?.data
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

            await api.get('bao-cao/export-excel-bao-cao-tinh-trang-don?thang=' + (this.month ?? ''), {
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
        this.month = this.date.split("-")[1] + '/' + this.date.split("-")[0];
        this.$store.dispatch('title/set_title', this.title);

        this.load_type()
        this.load_data()
    },
    components: { CardItem, CardServiceOrder },
    watch: {
        item() {
            console.log(this.item)
            this.load_data()
        },
        dich_vu_id() {
            console.log(this.item)
            this.load_data()
        },
        giaoVien() {
            clearTimeout(this.timeOut);

            this.timeOut = setTimeout(() => {
                // this.$emit("click");
                this.load_data()

            }, this.timer);
        },
        date() {
            console.log(this.date)
            const dateArray = this.date.split("-");
            this.month = dateArray[1] + '/' + dateArray[0];
            this.load_data();
        },
        tuKhoa() {
            clearTimeout(this.timeOut);

            this.timeOut = setTimeout(() => {
                // this.$emit("click");
                this.current_page = 1
                this.load_data()

            }, this.timer);
        },
        current_page() {
            this.load_data()
        },
        keyword() {
            this.current_page = 1
            this.tuKhoa = this.keyword
        }
    }
}
</script>


<style scoped lang="scss">
.create {
    border-radius: 42px;
    border: 1px solid #4EAEEA;
    background: #E8F3FF;
    padding: 7px 9px;
    margin-right: 5px;
    color: #4EAEEA;
    text-align: center;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
}

.w-50 {
    width: 170px !important;

}

.web-w-100 {}

@media (max-width: 600px) {
    .w-50 {
        width: 100% !important;
        margin: 0;
        padding: 0;
    }

    .web-w-100 {
        width: 100% !important;
        margin: 0;
        padding: 0;
    }

    .create {
        padding: 6px 6px;
        font-size: 11px;
    }

    .btn-export-excel {
        padding: 10px 10px;
        font-size: 11px;
    }
}

.text-c-danger {
    color: #FA4D32;
}

.text-c-primary {
    color: #0056B1;
}

.text-c-warning {
    color: #FFB761;
}

.text-c-success {
    color: #00C092;
}

.c-primary {
    background: #0056B1 !important;
}

.c-danger {
    background: #FC4D32 !important;
}

.c-warning {
    background: #FFB761 !important;
}

.c-success {
    background: #00C092 !important;
}

.card-order {
    border-radius: 8px;
    border: 2px solid #F2F2F2;
    background: #FFF;
    box-shadow: 0px 5px 49px 0px rgba(0, 0, 0, 0.06);
    padding: 15px;

    .span-title {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 16px;
    }

    .text {
        font-family: SVN-Gilroy;
        font-size: 26px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .text-rate {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
}
</style>