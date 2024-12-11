<template>
    <div class="content-mp">
        <v-row class="">
            <v-col class="" xs="12" sm="12" md="7" lg="7" xl="7">
                <div style="min-width: 245px;" class="wow animate__animated animate__zoomIn">

                    <div class="card-review">
                        <div class="card-review-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="26" height="26" rx="7" fill="#00C092" />
                                        <path opacity="0.4"
                                            d="M16.6859 5.35303H9.31413C7.68531 5.35303 6.36237 6.68362 6.36237 8.30479V19.0795C6.36237 20.456 7.34884 21.0371 8.55707 20.3719L12.2888 18.2995C12.6865 18.0777 13.3288 18.0777 13.7188 18.2995L17.4506 20.3719C18.6588 21.0448 19.6453 20.4636 19.6453 19.0795V8.30479C19.6377 6.68362 18.3147 5.35303 16.6859 5.35303Z"
                                            fill="white" />
                                        <path
                                            d="M14.9118 12.5416H11.0882C10.7747 12.5416 10.5147 12.2816 10.5147 11.9681C10.5147 11.6545 10.7747 11.3945 11.0882 11.3945H14.9118C15.2253 11.3945 15.4853 11.6545 15.4853 11.9681C15.4853 12.2816 15.2253 12.5416 14.9118 12.5416Z"
                                            fill="white" />
                                    </svg>
                                    <div class="ms-2">
                                        <span class="span-title">Mã đơn:</span>
                                        <span class="span-content">{{ data?.ma_don_hang }}</span>
                                    </div>
                                </div>

                                <div>
                                    <span class="blade-success">Đã hoàn thành</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-review mt-5">
                        <div class="card-review-body">
                            <div class="">
                                <div class="d-flex align-items-center">
                                    <div class="box-img me-2">
                                        <img :src="data?.giaoVien?.anh_nguoi_dung" alt="">
                                    </div>
                                    <div class="">
                                        <div class="user-name mb-2">{{ data?.giaoVien?.hoten ?? 'Chưa cập nhật' }}</div>
                                        <div class="user-position">Giáo viên</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="m-0" />
                        <div class="card-review-body">
                            <div class="d-flex">
                                <div class="d-flex align-items-center">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.6688 9.13117C11.1777 8.79446 11.8462 9.16177 11.8462 9.77397V10.7611C11.8462 11.733 11.0942 12.7737 10.1903 13.0798L7.76721 13.891C7.34184 14.0363 6.65061 14.0363 6.23284 13.891L3.80977 13.0798C2.89826 12.7737 2.15387 11.733 2.15387 10.7611V9.76631C2.15387 9.16177 2.8223 8.79446 3.32363 9.12351L4.88838 10.1489C5.48845 10.5545 6.24803 10.7535 7.00762 10.7535C7.76721 10.7535 8.52679 10.5545 9.12686 10.1489L10.6688 9.13117Z"
                                            fill="#0056B1" />
                                        <path
                                            d="M12.9452 3.13048L8.48815 0.373553C7.68454 -0.124518 6.36007 -0.124518 5.55646 0.373553L1.07706 3.13048C-0.359021 4.00737 -0.359021 5.99263 1.07706 6.87653L2.2676 7.6061L5.55646 9.62645C6.36007 10.1245 7.68454 10.1245 8.48815 9.62645L11.7547 7.6061L12.7741 6.97474V9.12136C12.7741 9.40898 13.0271 9.64749 13.3321 9.64749C13.6372 9.64749 13.8902 9.40898 13.8902 9.12136V5.66994C14.1878 4.76499 13.8828 3.71273 12.9452 3.13048Z"
                                            fill="#0056B1" />
                                    </svg>
                                    <span class="chapter ms-2">Buổi {{ data?.tienDo?.buoi }}</span>
                                </div>
                                <div class="d-flex align-items-center ms-4">
                                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.17969 1.62905V0.528914C9.17969 0.239774 8.95206 0 8.67756 0C8.40306 0 8.17543 0.239774 8.17543 0.528914V1.58674H3.82365V0.528914C3.82365 0.239774 3.59602 0 3.32152 0C3.04703 0 2.8194 0.239774 2.8194 0.528914V1.62905C1.01173 1.80536 0.134682 2.94076 0.000781097 4.62623C-0.012609 4.83075 0.148072 5 0.335533 5H11.6635C11.8577 5 12.0184 4.8237 11.9983 4.62623C11.8644 2.94076 10.9873 1.80536 9.17969 1.62905Z"
                                            fill="#0056B1" />
                                        <path
                                            d="M11.3333 6H0.666667C0.3 6 0 6.29605 0 6.65789V10.7105C0 12.6842 1 14 3.33333 14H8.66667C11 14 12 12.6842 12 10.7105V6.65789C12 6.29605 11.7 6 11.3333 6ZM4.14 11.5066C4.10667 11.5329 4.07333 11.5658 4.04 11.5855C4 11.6118 3.96 11.6316 3.92 11.6447C3.88 11.6645 3.84 11.6776 3.8 11.6842C3.75333 11.6908 3.71333 11.6974 3.66667 11.6974C3.58 11.6974 3.49333 11.6776 3.41333 11.6447C3.32667 11.6118 3.26 11.5658 3.19333 11.5066C3.07333 11.3816 3 11.2105 3 11.0395C3 10.8684 3.07333 10.6974 3.19333 10.5724C3.26 10.5132 3.32667 10.4671 3.41333 10.4342C3.53333 10.3816 3.66667 10.3684 3.8 10.3947C3.84 10.4013 3.88 10.4145 3.92 10.4342C3.96 10.4474 4 10.4671 4.04 10.4934C4.07333 10.5197 4.10667 10.5461 4.14 10.5724C4.26 10.6974 4.33333 10.8684 4.33333 11.0395C4.33333 11.2105 4.26 11.3816 4.14 11.5066ZM4.14 9.20395C4.01333 9.32237 3.84 9.39474 3.66667 9.39474C3.49333 9.39474 3.32 9.32237 3.19333 9.20395C3.07333 9.07895 3 8.90789 3 8.73684C3 8.56579 3.07333 8.39474 3.19333 8.26974C3.38 8.08553 3.67333 8.02632 3.92 8.13158C4.00667 8.16447 4.08 8.21053 4.14 8.26974C4.26 8.39474 4.33333 8.56579 4.33333 8.73684C4.33333 8.90789 4.26 9.07895 4.14 9.20395ZM6.47333 11.5066C6.34667 11.625 6.17333 11.6974 6 11.6974C5.82667 11.6974 5.65333 11.625 5.52667 11.5066C5.40667 11.3816 5.33333 11.2105 5.33333 11.0395C5.33333 10.8684 5.40667 10.6974 5.52667 10.5724C5.77333 10.3289 6.22667 10.3289 6.47333 10.5724C6.59333 10.6974 6.66667 10.8684 6.66667 11.0395C6.66667 11.2105 6.59333 11.3816 6.47333 11.5066ZM6.47333 9.20395C6.44 9.23026 6.40667 9.25658 6.37333 9.28289C6.33333 9.30921 6.29333 9.32895 6.25333 9.34211C6.21333 9.36184 6.17333 9.375 6.13333 9.38158C6.08667 9.38816 6.04667 9.39474 6 9.39474C5.82667 9.39474 5.65333 9.32237 5.52667 9.20395C5.40667 9.07895 5.33333 8.90789 5.33333 8.73684C5.33333 8.56579 5.40667 8.39474 5.52667 8.26974C5.58667 8.21053 5.66 8.16447 5.74667 8.13158C5.99333 8.02632 6.28667 8.08553 6.47333 8.26974C6.59333 8.39474 6.66667 8.56579 6.66667 8.73684C6.66667 8.90789 6.59333 9.07895 6.47333 9.20395ZM8.80667 11.5066C8.68 11.625 8.50667 11.6974 8.33333 11.6974C8.16 11.6974 7.98667 11.625 7.86 11.5066C7.74 11.3816 7.66667 11.2105 7.66667 11.0395C7.66667 10.8684 7.74 10.6974 7.86 10.5724C8.10667 10.3289 8.56 10.3289 8.80667 10.5724C8.92667 10.6974 9 10.8684 9 11.0395C9 11.2105 8.92667 11.3816 8.80667 11.5066ZM8.80667 9.20395C8.77333 9.23026 8.74 9.25658 8.70667 9.28289C8.66667 9.30921 8.62667 9.32895 8.58667 9.34211C8.54667 9.36184 8.50667 9.375 8.46667 9.38158C8.42 9.38816 8.37333 9.39474 8.33333 9.39474C8.16 9.39474 7.98667 9.32237 7.86 9.20395C7.74 9.07895 7.66667 8.90789 7.66667 8.73684C7.66667 8.56579 7.74 8.39474 7.86 8.26974C7.92667 8.21053 7.99333 8.16447 8.08 8.13158C8.2 8.07895 8.33333 8.06579 8.46667 8.09211C8.50667 8.09868 8.54667 8.11184 8.58667 8.13158C8.62667 8.14474 8.66667 8.16447 8.70667 8.19079C8.74 8.21711 8.77333 8.24342 8.80667 8.26974C8.92667 8.39474 9 8.56579 9 8.73684C9 8.90789 8.92667 9.07895 8.80667 9.20395Z"
                                            fill="#0056B1" />
                                    </svg>
                                    <span class="time ms-2">{{ data?.tienDo?.thoi_gian }}</span>
                                </div>
                            </div>
                        </div>
                        <hr class="m-0" />

                        <div class="card-review-body">
                            <div class="">
                                <div class="d-flex align-items-center">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3.33335 9C1.86002 9 0.666687 10.1933 0.666687 11.6667C0.666687 12.1667 0.806687 12.64 1.05335 13.04C1.51335 13.8133 2.36002 14.3333 3.33335 14.3333C4.30669 14.3333 5.15335 13.8133 5.61335 13.04C5.86002 12.64 6.00002 12.1667 6.00002 11.6667C6.00002 10.1933 4.80669 9 3.33335 9ZM4.64669 11.4467L3.22669 12.76C3.13335 12.8467 3.00669 12.8933 2.88669 12.8933C2.76002 12.8933 2.63335 12.8467 2.53335 12.7467L1.87335 12.0867C1.68002 11.8933 1.68002 11.5733 1.87335 11.38C2.06669 11.1867 2.38669 11.1867 2.58002 11.38L2.90002 11.7L3.96669 10.7133C4.16669 10.5267 4.48669 10.54 4.67335 10.74C4.86002 10.94 4.84669 11.26 4.64669 11.4467Z"
                                            fill="#0056B1" />
                                        <path
                                            d="M11.5 1.62012H5.16667C3.26667 1.62012 2 2.88678 2 4.78678V7.76012C2 7.99345 2.24 8.16012 2.46667 8.10012C2.74667 8.03345 3.03333 8.00012 3.33333 8.00012C5.24 8.00012 6.81333 9.54678 6.98667 11.4201C7 11.6068 7.15333 11.7534 7.33333 11.7534H7.7L10.52 13.6335C10.9333 13.9135 11.5 13.6068 11.5 13.1001V11.7534C12.4467 11.7534 13.24 11.4334 13.7933 10.8868C14.3467 10.3268 14.6667 9.53345 14.6667 8.58678V4.78678C14.6667 2.88678 13.4 1.62012 11.5 1.62012ZM10.5533 7.20678H6.11333C5.85333 7.20678 5.64 6.99345 5.64 6.73345C5.64 6.46678 5.85333 6.25345 6.11333 6.25345H10.5533C10.8133 6.25345 11.0267 6.46678 11.0267 6.73345C11.0267 6.99345 10.8133 7.20678 10.5533 7.20678Z"
                                            fill="#0056B1" />
                                    </svg>
                                    <span class="chapter ms-2">Nhận xét buổi học hôm nay</span>
                                </div>
                                <div class="content my-3">
                                    {{ data?.tienDo?.nhan_xet_buoi_hoc ?? 'Chưa cập nhật' }}
                                </div>
                                <div>
                                    <div class="title-h">Hình ảnh/ Video</div>

                                    <div class="w-100 mt-2">
                                        <img height="200" :src="data?.tienDo?.image" />
                                    </div>
                                </div>
                            </div>

                            <div class="mt-3 d-flex align-items-center justify-content-between">
                                <div class="d-flex align-items-center">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.05011 4.17771L2.61197 0.247274C1.08437 -0.68701 -0.576545 1.20089 0.195587 2.99214L1.09548 5.07978C1.34545 5.65968 1.34545 6.34268 1.09548 6.92258L0.195587 9.01022C-0.576545 10.8015 1.08437 12.6829 2.61197 11.7551L9.05011 7.82465C10.3166 7.05144 10.3166 4.95091 9.05011 4.17771Z"
                                            fill="#2D2D2D" />
                                    </svg>
                                    <span class="title-h ms-2">Đánh giá hoạt động</span>
                                </div>

                                <div>
                                    <span class="pt-2">{{ data?.tienDo?.danh_gia ?? '0' }}</span>
                                    <span class="">
                                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.67949 1.17777C9.0774 0.606607 9.9226 0.606608 10.3205 1.17778L12.9317 4.92588C13.067 5.12017 13.2669 5.26012 13.4958 5.32083L17.9704 6.50777C18.6771 6.69522 18.9503 7.55286 18.4822 8.11451L15.6399 11.5255C15.4803 11.717 15.398 11.9613 15.4091 12.2103L15.6055 16.6064C15.6371 17.3154 14.9408 17.8308 14.272 17.5935L9.83444 16.0187C9.61809 15.9419 9.38191 15.9419 9.16556 16.0187L4.72797 17.5935C4.05918 17.8308 3.36287 17.3154 3.39454 16.6064L3.59091 12.2103C3.60204 11.9613 3.51974 11.717 3.36014 11.5255L0.517765 8.11451C0.049739 7.55286 0.322944 6.69522 1.0296 6.50777L5.50419 5.32083C5.73306 5.26012 5.93296 5.12017 6.06831 4.92588L8.67949 1.17777Z"
                                                fill="#FFB761" />
                                        </svg>
                                    </span>
                                    <!-- <span class="ms-2">
                                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.67949 1.17777C9.0774 0.606607 9.9226 0.606608 10.3205 1.17778L12.9317 4.92588C13.067 5.12017 13.2669 5.26012 13.4958 5.32083L17.9704 6.50777C18.6771 6.69522 18.9503 7.55286 18.4822 8.11451L15.6399 11.5255C15.4803 11.717 15.398 11.9613 15.4091 12.2103L15.6055 16.6064C15.6371 17.3154 14.9408 17.8308 14.272 17.5935L9.83444 16.0187C9.61809 15.9419 9.38191 15.9419 9.16556 16.0187L4.72797 17.5935C4.05918 17.8308 3.36287 17.3154 3.39454 16.6064L3.59091 12.2103C3.60204 11.9613 3.51974 11.717 3.36014 11.5255L0.517765 8.11451C0.049739 7.55286 0.322944 6.69522 1.0296 6.50777L5.50419 5.32083C5.73306 5.26012 5.93296 5.12017 6.06831 4.92588L8.67949 1.17777Z"
                                                fill="#FFB761" />
                                        </svg>
                                    </span> -->
                                    <!-- <span class="ms-2">
                                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.67949 1.17777C9.0774 0.606607 9.9226 0.606608 10.3205 1.17778L12.9317 4.92588C13.067 5.12017 13.2669 5.26012 13.4958 5.32083L17.9704 6.50777C18.6771 6.69522 18.9503 7.55286 18.4822 8.11451L15.6399 11.5255C15.4803 11.717 15.398 11.9613 15.4091 12.2103L15.6055 16.6064C15.6371 17.3154 14.9408 17.8308 14.272 17.5935L9.83444 16.0187C9.61809 15.9419 9.38191 15.9419 9.16556 16.0187L4.72797 17.5935C4.05918 17.8308 3.36287 17.3154 3.39454 16.6064L3.59091 12.2103C3.60204 11.9613 3.51974 11.717 3.36014 11.5255L0.517765 8.11451C0.049739 7.55286 0.322944 6.69522 1.0296 6.50777L5.50419 5.32083C5.73306 5.26012 5.93296 5.12017 6.06831 4.92588L8.67949 1.17777Z"
                                                fill="#FFB761" />
                                        </svg>
                                    </span>
                                    <span class="ms-2">
                                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.67949 1.17777C9.0774 0.606607 9.9226 0.606608 10.3205 1.17778L12.9317 4.92588C13.067 5.12017 13.2669 5.26012 13.4958 5.32083L17.9704 6.50777C18.6771 6.69522 18.9503 7.55286 18.4822 8.11451L15.6399 11.5255C15.4803 11.717 15.398 11.9613 15.4091 12.2103L15.6055 16.6064C15.6371 17.3154 14.9408 17.8308 14.272 17.5935L9.83444 16.0187C9.61809 15.9419 9.38191 15.9419 9.16556 16.0187L4.72797 17.5935C4.05918 17.8308 3.36287 17.3154 3.39454 16.6064L3.59091 12.2103C3.60204 11.9613 3.51974 11.717 3.36014 11.5255L0.517765 8.11451C0.049739 7.55286 0.322944 6.69522 1.0296 6.50777L5.50419 5.32083C5.73306 5.26012 5.93296 5.12017 6.06831 4.92588L8.67949 1.17777Z"
                                                fill="#FFB761" />
                                        </svg>
                                    </span>
                                    <span class="ms-2">
                                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.67949 1.17777C9.0774 0.606607 9.9226 0.606608 10.3205 1.17778L12.9317 4.92588C13.067 5.12017 13.2669 5.26012 13.4958 5.32083L17.9704 6.50777C18.6771 6.69522 18.9503 7.55286 18.4822 8.11451L15.6399 11.5255C15.4803 11.717 15.398 11.9613 15.4091 12.2103L15.6055 16.6064C15.6371 17.3154 14.9408 17.8308 14.272 17.5935L9.83444 16.0187C9.61809 15.9419 9.38191 15.9419 9.16556 16.0187L4.72797 17.5935C4.05918 17.8308 3.36287 17.3154 3.39454 16.6064L3.59091 12.2103C3.60204 11.9613 3.51974 11.717 3.36014 11.5255L0.517765 8.11451C0.049739 7.55286 0.322944 6.69522 1.0296 6.50777L5.50419 5.32083C5.73306 5.26012 5.93296 5.12017 6.06831 4.92588L8.67949 1.17777Z"
                                                fill="#E5E5E5" />
                                        </svg>
                                    </span> -->
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-7 mb-2">
                        <title-header>Form đánh giá</title-header>
                    </div>

                    <div v-for="(item, n) in data?.formDanhGia" v-bind:key="n">
                        <div class="card-review-primary mb-4 mt-4">
                            <div class="d-flex">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.82 1.91016H7.18001C5.06001 1.91016 3.32001 3.65016 3.32001 5.77016V19.8602C3.32001 21.6602 4.61001 22.4202 6.19001 21.5502L11.07 18.8402C11.59 18.5502 12.43 18.5502 12.94 18.8402L17.82 21.5502C19.4 22.4302 20.69 21.6702 20.69 19.8602V5.77016C20.68 3.65016 18.95 1.91016 16.82 1.91016ZM15.62 9.03016L11.62 13.0302C11.47 13.1802 11.28 13.2502 11.09 13.2502C10.9 13.2502 10.71 13.1802 10.56 13.0302L9.06001 11.5302C8.77001 11.2402 8.77001 10.7602 9.06001 10.4702C9.35001 10.1802 9.83001 10.1802 10.12 10.4702L11.09 11.4402L14.56 7.97016C14.85 7.68016 15.33 7.68016 15.62 7.97016C15.91 8.26016 15.91 8.74016 15.62 9.03016Z"
                                        fill="#0056B1" />
                                </svg>
                                <span class="span-priamry ms-2">
                                    {{ item?.danhMuc }}
                                </span>
                            </div>
                        </div>
                        <div v-for="(i, j) in item?.data" v-bind:key="j" class="card-review mt-5">
                            <div class="card-review-body">
                                <div class="">
                                    <div class="d-flex align-items-center">
                                        <span class="chapter">{{ i?.tieu_de }}<span class="text-danger">*</span></span>
                                    </div>
                                </div>
                            </div>
                            <hr class="m-0" />

                            <div class="card-review-body">
                                <div class="">
                                    <div class="mb-3" v-for="(h, k) in i?.cac_buoi" v-bind:key="k">
                                        <div class="chapter">
                                            {{ h.tieu_de }}
                                        </div>
                                        <div class="d-flex" v-for="(x, y) in h?.muc_do" v-bind:key="y">
                                            <input type="radio"  
                                            :name="'radio-size' + k" 
                                            :value="x" 
                                            :checked="x == h.muc_do_da_cho"  
                            
                                            :id="'__BVID__' + k">
                                            <!-- <b-form-radio v-for="(x, y) in h?.muc_do" v-bind:key="y" class="me-4"
                                            :name="'radio-size' + k" size="lg" :checked="x == h.muc_do_da_cho"> -->
                                            <span class="answer">{{ x }}</span>
                                        <!-- </b-form-radio> -->
                                        </div>
                                    </div>
                                    <!-- <div class="d-flex">
                                        <b-form-radio v-for="(h, k) in i?.goi_y" v-bind:key="k" class="me-4"
                                            :name="'radio-size' + k" size="lg">
                                            <span class="answer">{{ h }}</span>
                                        </b-form-radio>
                                    </div> -->
                                    <div class="" v-for="(h, k) in i?.muc_do" v-bind:key="k">
                                        <!-- <b-form-radio class="me-4"
                                            :name="'radio-size' + k" size="lg" :checked="x == h.muc_do_da_cho"> -->
                                            <input type="radio"  
                                            :name="'radio-size-' + i?.id" 
                                            :value="h" 
                                            :checked="h == i.muc_do_da_cho"  
                                       
                                            :id="'__BVD__' + k">
                                            <span class="answer">{{ h }}</span>
                                        <!-- </b-form-radio> -->
                                    </div>
                                    <div>
                                        <div class="title-h mt-4 mb-1">
                                            Nhận xét
                                        </div>
                                        <div>
                                            <b-form-input :value="i?.noi_dung_nhan_xet"
                                                :placeholder="i?.noi_dung_nhan_xet ?? ''"></b-form-input>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <!-- <div class="card-review mt-5">
                        <div class="card-review-body">
                            <div class="">
                                <div class="d-flex align-items-center">
                                    <span class="chapter">1. Ăn uống<span class="text-danger">*</span></span>
                                </div>
                            </div>
                        </div>
                        <hr class="m-0" />
                        <div class="card-review-body">
                            <div class="">
                                <div class="mb-3">
                                    <div class="chapter">
                                        Sáng
                                    </div>
                                    <div class="d-flex">
                                        <b-form-radio class="me-4" name="radio-size" size="lg">
                                            <span class="answer">Bỏ bữa</span>
                                        </b-form-radio>
                                        <b-form-radio class="me-4" name="radio-size" checked size="lg">
                                            <span class="answer">Ăn 1/2 suất</span>
                                        </b-form-radio>
                                        <b-form-radio class="me-4" name="radio-size" size="lg">
                                            <span class="answer">
                                                Ăn hết suất
                                            </span>
                                        </b-form-radio>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="chapter">
                                        Trưa
                                    </div>
                                    <div class="d-flex">
                                        <b-form-radio class="me-4" name="radio-size" size="lg">
                                            <span class="answer">Bỏ bữa</span>
                                        </b-form-radio>
                                        <b-form-radio class="me-4" name="radio-size" checked size="lg">
                                            <span class="answer">Ăn 1/2 suất</span>
                                        </b-form-radio>
                                        <b-form-radio class="me-4" name="radio-size" size="lg">
                                            <span class="answer">
                                                Ăn hết suất
                                            </span>
                                        </b-form-radio>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="chapter">
                                        Chiều
                                    </div>
                                    <div class="d-flex">
                                        <b-form-radio class="me-4" name="radio-size" size="lg">
                                            <span class="answer">Bỏ bữa</span>
                                        </b-form-radio>
                                        <b-form-radio class="me-4" name="radio-size" checked size="lg">
                                            <span class="answer">Ăn 1/2 suất</span>
                                        </b-form-radio>
                                        <b-form-radio class="me-4" name="radio-size" size="lg">
                                            <span class="answer">
                                                Ăn hết suất
                                            </span>
                                        </b-form-radio>
                                    </div>
                                </div>

                                <div>
                                    <div class="title-h mt-4 mb-1">
                                        Nhận xét
                                    </div>
                                    <div>
                                        <b-form-input placeholder="Bé rất thích thú khi tham gia"></b-form-input>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> -->

                    <!-- <div class="card-review mt-5">
                        <div class="card-review-body">
                            <div class="">
                                <div class="d-flex align-items-center">
                                    <span class="chapter">2. Vệ sinh<span class="text-danger">*</span></span>
                                </div>
                            </div>
                        </div>
                        <hr class="m-0" />
                        <div class="card-review-body">
                            <div class="">
                                <div class="mb-3">
                                    <div class="d-flex">
                                        <b-form-checkbox class="me-4" name="radio-size" size="lg">
                                            <span class="answer">Khá</span>
                                        </b-form-checkbox>
                                        <b-form-checkbox class="me-4" name="radio-size" checked size="lg">
                                            <span class="answer">Tốt</span>
                                        </b-form-checkbox>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> -->

                    <!-- <div class="card-review mt-5">
                        <div class="card-review-body">
                            <div class="">
                                <div class="d-flex align-items-center">
                                    <span class="chapter">3. Sức khoẻ<span class="text-danger">*</span></span>
                                </div>
                            </div>
                        </div>
                        <hr class="m-0" />
                        <div class="card-review-body">
                            <div class="">
                                <div class="mb-3">
                                    <div class="mb-3">
                                        <div class="d-flex">
                                            <b-form-radio class="me-4" name="radio-size" size="lg">
                                                <span class="answer">Gặp vấn đề</span>
                                            </b-form-radio>
                                            <b-form-radio class="me-4" name="radio-size" checked size="lg">
                                                <span class="answer">Bình thường</span>
                                            </b-form-radio>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="title-h mt-4 mb-1">
                                            Nhận xét
                                        </div>
                                        <div>
                                            <b-form-input placeholder="Bé rất thích thú khi tham gia"></b-form-input>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> -->

                    <!-- <div class="card-review mt-5">
                        <div class="card-review-body">
                            <div class="">
                                <div class="d-flex align-items-center">
                                    <span class="chapter">4. Ngủ<span class="text-danger">*</span></span>
                                </div>
                            </div>
                        </div>
                        <hr class="m-0" />
                        <div class="card-review-body">
                            <div class="">
                                <div class="mb-3">
                                    <div class="d-flex">
                                        <b-form-radio class="me-4" name="radio-size" size="lg">
                                            <span class="answer">Đủ giấc</span>
                                        </b-form-radio>
                                        <b-form-radio class="me-4" name="radio-size" checked size="lg">
                                            <span class="answer">Thiếu ngủ</span>
                                        </b-form-radio>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> -->

                    <!-- <div class="card-review mt-5">
                        <div class="card-review-body">
                            <div class="">
                                <div class="d-flex align-items-center">
                                    <span class="chapter">5. Thuốc<span class="text-danger">*</span></span>
                                </div>
                            </div>
                        </div>
                        <hr class="m-0" />
                        <div class="card-review-body">
                            <div class="">
                                <div class="mb-3">
                                    <div>
                                        <div class="title-h mb-1">
                                            Nhận xét
                                        </div>
                                        <div>
                                            <b-form-input placeholder="Bé không gặp vấn đề gì về sức khỏe"></b-form-input>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> -->

                    <hr class="my-8" />

                    <div>
                        <div>
                            <title-header>Nhận xét đánh giá của phụ huynh</title-header>
                        </div>

                        <div class="card-review mt-5">
                            <div class="card-review-body">
                                <div class="d-flex align-items-center justify-content-between">
                                    <!-- <div class="d-flex align-items-center">
                                        <div class="box-img me-2">
                                            <img src="@/static/images/teacher/Ellipse49.png" alt="">
                                        </div>
                                        <div class="">
                                            <div class="user-name mb-2">Nguyễn Thị Anh</div>
                                            <div class="user-position">Phụ huynh</div>
                                        </div>
                                    </div> -->

                                    <!-- <div class="d-flex">
                                        <div class="cp me-2" v-b-tooltip.hover title="Gọi điện">
                                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="19" cy="19" r="19" fill="#0056B1" fill-opacity="0.15" />
                                                <path
                                                    d="M11.6796 9.84669L12.8192 8.70711C13.2097 8.31658 13.8429 8.31658 14.2334 8.70711L17.2403 11.7139C17.6308 12.1045 17.6308 12.7376 17.2403 13.1282L15.1847 15.1837C14.8544 15.514 14.7725 16.0187 14.9814 16.4365C16.1892 18.8521 18.1479 20.8108 20.5635 22.0186C20.9813 22.2275 21.486 22.1456 21.8163 21.8153L23.8718 19.7597C24.2624 19.3692 24.8955 19.3692 25.2861 19.7597L28.2929 22.7666C28.6834 23.1571 28.6834 23.7903 28.2929 24.1808L27.1533 25.3204C25.042 27.4317 21.6994 27.6693 19.3107 25.8777L17.2602 24.3398C15.5166 23.0322 13.9678 21.4834 12.6602 19.7399L11.1223 17.6893C9.33072 15.3006 9.56827 11.958 11.6796 9.84669Z"
                                                    fill="#0056B1" />
                                            </svg>
                                        </div>
                                        <div class="cp" v-b-tooltip.hover title="Nhắn tin">
                                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="19" cy="19" r="19" fill="#0056B1" fill-opacity="0.15" />
                                                <path opacity="0.4"
                                                    d="M29 13.25V18.35C29 19.62 28.58 20.69 27.83 21.43C27.09 22.18 26.02 22.6 24.75 22.6V24.41C24.75 25.09 23.99 25.5 23.43 25.12L22.46 24.48C22.55 24.17 22.59 23.83 22.59 23.47V19.4C22.59 17.36 21.23 16 19.19 16H12.4C12.26 16 12.13 16.01 12 16.02V13.25C12 10.7 13.7 9 16.25 9H24.75C27.3 9 29 10.7 29 13.25Z"
                                                    fill="#0056B1" />
                                                <path
                                                    d="M22.59 19.4V23.47C22.59 23.83 22.55 24.17 22.46 24.48C22.09 25.95 20.87 26.87 19.19 26.87H16.47L13.45 28.88C13 29.19 12.4 28.86 12.4 28.32V26.87C11.38 26.87 10.53 26.53 9.94 25.94C9.34 25.34 9 24.49 9 23.47V19.4C9 17.5 10.18 16.19 12 16.02C12.13 16.01 12.26 16 12.4 16H19.19C21.23 16 22.59 17.36 22.59 19.4Z"
                                                    fill="#0056B1" />
                                            </svg>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                            <hr class="m-0" />
                            <div class="card-review-body">
                                <div class="">
                                    <div class="mb-3">
                                        <div class="content">
                                            {{ data?.tienDo?.phu_huynh_nhan_xet ?? 'Chưa cập nhật' }}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="mt-6">
                        <!-- <button-component>Lưu</button-component> -->
                    </div>

                </div>
            </v-col>

        </v-row>
    </div>
</template>

<script>
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';
import TitleHeader from '~/components/title/TitleHeader.vue';
export default {
    components: { TitleHeader },
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Chi tiết đánh giá',
                previous: '/admin/review-lesson'
            },
            data: null,
        };
    },
    validate({ params }) {
        return /^\d+$/.test(params.id);
    },
    computed: {
        id() {
            console.log(this.$route.params.id)
            return this.$route.params.id
        },
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        async load_data() {
            await api.get('danh-gia-buoi-hoc/chi-tiet-nhan-xet?ca_day_id=' + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                const user = res?.data?.data
                this.data = user
                console.log(this.data)
            })
        },
    },
    mounted() {
        this.load_data()
        this.$store.dispatch('title/set_title', this.title);
    },
}
</script>

<style lang="scss" scoped>
.answer {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    vertical-align: middle;
}

.card-review-primary {
    border-radius: 15px;
    border: 1px solid #E8F3FF;
    background: #E8F3FF;
    box-shadow: 0px 0px 10px 0px rgba(0, 86, 177, 0.15);
    padding: 15px;

    .span-priamry {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px;
    }
}

.title-h {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
}

.content {
    color: #2D2D2D;
    text-align: justify;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

.time {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.chapter {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.user-name {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.user-position {
    color: #7D7D7D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.box-img {
    width: 48px;
    height: 48px;
    overflow: hidden;
    border-radius: 50%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.blade-success {
    color: #009874;
    text-align: center;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 46px;
    background: rgba(0, 192, 146, 0.20);
    display: flex;
    padding: 12px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
}

.span-title {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 6px;
}

.span-content {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.card-review {
    border-radius: 15px;
    background: #FFF;

    .card-review-body {
        padding: 15px;
    }
}
</style>