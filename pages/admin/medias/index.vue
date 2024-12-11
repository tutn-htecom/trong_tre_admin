<template>
    <div class="content-mp">
        <div class="medias">
            <div class="mb-7">
                <div class="d-flex justify-content-between align-items-center">
                    <title-header>
                        Danh sách Tin tức
                    </title-header>
                    <nuxt-link to="/admin/medias/create">
                        <button-add :addClass="'btn-header'">
                            <span class="mdi mdi-plus"></span> Thêm bài viết
                        </button-add>
                    </nuxt-link>
                </div>

                <div class="admins-group-btn mb-5 mt-4">
                    <div class="btn btn-filter" :class="{ active: selectedFilter === '' }" @click="updateFilter('')">
                        Mới nhất
                    </div>
                    <div class="btn btn-filter" v-for="(item, index) in type" :key="index"
                        :class="{ active: selectedFilter === item?.id }" @click="updateFilter(item?.id)">
                        {{ item?.name }}
                    </div>
                </div>

                <!-- <div class="admins-group-btn mb-5 mt-4">
                    <div class="btn btn-filter active">
                        Mới nhất
                    </div>
                    <div class="btn btn-filter">
                        Hướng dẫn
                    </div>
                    <div class="btn btn-filter">
                        Giới thiệu
                    </div>
                    <div class="btn btn-filter">
                        Hoạt động
                    </div>
                </div> -->
            </div>

            <b-row>
                <b-col cols="12" sm="12" md="6" lg="4" xl="3" class="border-bottom-baner" v-for="(item, index) in data"
                    :key="index">
                    <div class="card-media hover-card position-relative  wow animate__animated animate__flipInY">
                        <div class="card-media-body">
                            <div class="media-content">
                                <div class="media-title">
                                    {{ item?.tieu_de }}
                                </div>
                                <div class="media-des mt-2" v-html="item?.noi_dung">

                                </div>
                            </div>
                            <div class="box-img">
                                <a :href="item?.link" class="d-block" target="_blank">
                                    <img v-if="item?.anh_dai_dien" :src="item?.anh_dai_dien" />
                                    <img v-else src="@/static/images/media/yt.jpg" v-b-tooltip.hover :title="item?.link ?? 'Chưa cập nhật'" />
                                </a>
                                <!-- <iframe src="https://www.youtube.com/embed/Zknq_nzLNvE" :title="item?.tieu_de"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe> -->
                            </div>
                        </div>
                        <hr class="m-0" />
                        <div class="card-media-footer">
                            <div class="button" v-b-tooltip.hover title="Xoá tin"
                                @click="delete_item(item?.id, item?.tieu_de)">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="16" cy="16" r="16" fill="#F2F2F2" />
                                    <g clip-path="url(#clip0_879_10958)">
                                        <path
                                            d="M16.0644 11.1534C18.1971 11.1534 20.3328 11.1594 22.4656 11.1475C22.7976 11.1475 22.9232 11.1802 22.8784 11.5789C22.6271 13.849 22.3639 16.1222 22.2113 18.4013C22.1246 19.6896 22.0199 20.9719 21.9152 22.2572C21.8554 22.9951 21.7925 23.4801 21.6609 24.2061C21.4904 25.1344 21.1076 26.0002 19.7555 25.9883C17.2818 25.9913 14.8081 25.9645 12.3373 26.0002C11.3203 26.0151 10.5157 25.8038 10.2794 24.2061C10.0131 22.412 9.44481 14.1019 9.44481 14.1019L9.21748 11.7157C9.21748 11.7157 9.15467 11.1534 9.70804 11.1534C11.8288 11.1534 13.9466 11.1534 16.0674 11.1534H16.0644ZM16.5789 18.55C16.5789 17.2736 16.5789 15.9972 16.5789 14.7208C16.5789 14.2983 16.3635 14.0305 16.0285 14.0216C15.6546 14.0127 15.3854 14.3072 15.3854 14.7387C15.3854 17.2766 15.3854 19.8145 15.3884 22.3554C15.3884 22.8047 15.6366 23.1052 15.9986 23.1171C16.3366 23.129 16.5729 22.8107 16.5729 22.3376C16.5729 21.0761 16.5729 19.8115 16.5729 18.55H16.5789ZM19.4654 18.5411C19.4654 17.2498 19.4654 15.9556 19.4654 14.6643C19.4654 14.4977 19.4863 14.331 19.3158 14.212C19.1244 14.0781 18.9449 13.9591 18.6966 14.0692C18.3796 14.209 18.2838 14.453 18.2868 14.7803C18.2958 17.2944 18.2958 19.8115 18.3018 22.3257C18.3018 22.8017 18.5321 23.1082 18.8821 23.1112C19.2321 23.1171 19.4714 22.8017 19.4714 22.3376C19.4714 21.0731 19.4714 19.8086 19.4714 18.5441L19.4654 18.5411ZM13.6923 18.5708C13.6923 17.2528 13.6923 15.9347 13.6923 14.6167C13.6923 14.218 13.5218 14.0305 13.1599 14.0246C12.8458 14.0186 12.5916 14.2686 12.5916 14.6167C12.5886 17.2379 12.5886 19.8621 12.5916 22.4834C12.5916 22.8583 12.8668 23.1409 13.1838 23.1082C13.5517 23.0695 13.7043 22.8702 13.6983 22.4863C13.6804 21.1832 13.6923 19.877 13.6923 18.5738V18.5708Z"
                                            fill="#979797" />
                                        <path
                                            d="M15.9776 10.0553C13.7461 10.0553 11.5147 10.0553 9.28024 10.0553C8.58927 10.0553 8 9.51382 8 8.88008C8 8.29097 8.58628 7.72864 9.25631 7.72269C10.5844 7.71079 11.9125 7.70781 13.2406 7.72864C13.6085 7.73459 13.7222 7.63938 13.7042 7.26152C13.6713 6.59802 14.2786 6.01486 14.9576 6.00891C15.6366 6.00296 16.3156 6.04462 16.9916 5.99999C17.7035 5.95238 18.3436 6.6129 18.2868 7.23771C18.2509 7.63641 18.4124 7.73162 18.7893 7.72566C20.0755 7.70781 21.3617 7.74947 22.645 7.71674C23.5094 7.69591 24.3081 8.35048 23.8833 9.40076C23.7308 9.7816 23.312 10.0494 22.7616 10.0494C20.599 10.0494 18.4393 10.0494 16.2767 10.0494C16.178 10.0494 16.0793 10.0494 15.9806 10.0494L15.9776 10.0553Z"
                                            fill="#979797" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_879_10958">
                                            <rect width="16" height="20" fill="white" transform="translate(8 6)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <!-- <div class="button" v-b-tooltip.hover title="...">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="16" cy="16" r="16" fill="#F2F2F2" />
                                    <g clip-path="url(#clip0_879_10990)">
                                        <path
                                            d="M23.9912 17.916C23.9912 19.5182 23.9871 21.1201 23.9934 22.7223C23.9959 23.3479 23.6095 23.8031 23.0981 23.9541C22.9618 23.9943 22.8218 23.9987 22.6828 23.9987C20.7037 24.0002 18.7243 24.0009 16.7452 23.9984C15.4785 23.9969 14.2115 23.9965 12.9453 23.9815C12.4181 23.9753 11.9283 23.4887 11.8746 22.9603C11.8066 22.2919 11.8471 21.6213 11.8453 20.9522C11.8391 18.3628 11.8424 15.7733 11.8431 13.1839C11.8431 12.5363 12.1937 12.0467 12.7676 11.8997C12.9014 11.8654 13.0432 11.8478 13.1818 11.8475C16.3372 11.8449 19.4927 11.8445 22.6481 11.8464C23.3196 11.8464 23.8062 12.1813 23.9528 12.7667C24.0284 13.0683 23.9912 13.3846 23.9919 13.6947C23.9941 15.1016 23.993 16.509 23.993 17.916H23.9923H23.9912ZM18.5287 20.0465H18.528C18.528 19.6078 18.5353 19.169 18.524 18.7302C18.5199 18.573 18.5561 18.5266 18.721 18.5284C19.6104 18.5379 20.4998 18.5306 21.3895 18.5361C21.5259 18.5368 21.5697 18.4962 21.565 18.3595C21.5555 18.0856 21.5518 17.8107 21.5661 17.5372C21.5749 17.3679 21.5178 17.3185 21.3526 17.3192C20.4815 17.3244 19.61 17.3156 18.7389 17.3233C18.5744 17.3247 18.5221 17.2885 18.5236 17.1156C18.5324 16.2322 18.5251 15.3484 18.5302 14.4647C18.5309 14.3312 18.4951 14.2804 18.3562 14.2844C18.0824 14.2925 17.8078 14.2921 17.534 14.2811C17.3739 14.2749 17.3125 14.3144 17.3143 14.4925C17.3231 15.3759 17.3133 16.2596 17.3198 17.143C17.3209 17.2882 17.2836 17.3244 17.14 17.3233C16.2506 17.3163 15.3612 17.3218 14.4714 17.3163C14.3219 17.3156 14.2697 17.3584 14.2777 17.5138C14.2916 17.781 14.2927 18.0501 14.2795 18.3178C14.2715 18.4838 14.319 18.5375 14.4905 18.5361C15.3616 18.528 16.233 18.5368 17.1042 18.5288C17.2694 18.5273 17.3213 18.5715 17.3198 18.7401C17.3125 19.6235 17.3206 20.5072 17.314 21.3906C17.3129 21.5372 17.3535 21.5775 17.4979 21.5716C17.7899 21.5599 18.0827 21.5632 18.3748 21.5705C18.4925 21.5734 18.5327 21.5398 18.5309 21.4169C18.524 20.9599 18.5283 20.5029 18.5283 20.0458L18.5287 20.0465Z"
                                            fill="#979797" />
                                        <path
                                            d="M6.99988 13.0603C6.99988 11.4702 6.99988 9.87999 6.99988 8.2902C6.99988 7.66276 7.32339 7.21924 7.91339 7.03935C8.06071 6.99437 8.21314 7.00169 8.36412 7.00169C11.1233 6.99986 13.8825 6.99949 16.6417 6.99986C17.1107 6.99986 17.5801 6.99584 18.048 7.01521C18.5861 7.03752 19.0624 7.50225 19.1128 8.03681C19.191 8.86315 19.1296 9.69169 19.1461 10.5188C19.149 10.6636 19.0576 10.6336 18.9772 10.6339C17.905 10.6347 16.8329 10.6347 15.7611 10.6347C14.4758 10.6347 13.1905 10.6336 11.9052 10.6347C11.161 10.6354 10.6327 11.1667 10.6324 11.9151C10.6313 14.2549 10.6305 16.5942 10.6349 18.9339C10.6349 19.0912 10.6082 19.1544 10.4302 19.1519C9.72397 19.1416 9.01699 19.154 8.31038 19.1486C7.66299 19.1434 7.21044 18.8096 7.03936 18.2279C6.99586 18.0794 7.00244 17.927 7.00244 17.7752C7.00134 16.2033 7.00171 14.6318 7.00171 13.06C7.00097 13.06 7.00024 13.06 6.99951 13.06L6.99988 13.0603Z"
                                            fill="#979797" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_879_10990">
                                            <rect width="17" height="17" fill="white" transform="translate(7 7)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div> -->
                            <nuxt-link :to="'/admin/medias/' + item?.id + '/edit'" class="btn btn-edit" v-b-tooltip.hover
                                title="Sửa bài viết">
                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.5 11.5982L13.7777 12.365C13.3946 12.7716 12.8751 13 12.3334 13C11.7918 13 11.2723 12.7716 10.8892 12.365C10.5056 11.9593 9.98611 11.7314 9.44458 11.7314C8.90306 11.7314 8.38361 11.9593 7.99999 12.365M1.5 13H2.70939C3.06269 13 3.23934 13 3.40558 12.9613C3.55296 12.9269 3.69386 12.8703 3.8231 12.7934C3.96887 12.7067 4.09378 12.5855 4.3436 12.3431L13.4167 3.53811C14.015 2.95748 14.015 2.0161 13.4167 1.43547C12.8184 0.854843 11.8483 0.854843 11.25 1.43547L2.17691 10.2404C1.92709 10.4829 1.80218 10.6041 1.71285 10.7456C1.63366 10.871 1.57529 11.0077 1.53991 11.1507C1.5 11.3121 1.5 11.4835 1.5 11.8264V13Z"
                                        stroke="#2D2D2D" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                Tùy chỉnh
                            </nuxt-link>
                        </div>
                        <div class="time">
                            <svg class="me-1" width="12" height="12" viewBox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6 3V6L8 7M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z"
                                    stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            {{ item?.created }}
                        </div>
                    </div>
                </b-col>

                <div class="d-flex justify-content-center mt-4 w-100">
                    <b-pagination v-model="current_page" :total-rows="total" :per-page="per_page" first-text="First"
                        prev-text="Prev" next-text="Next" last-text="Last"></b-pagination>

                </div>
            </b-row>

        </div>

    </div>
</template>

<script>
import CardItem from '@/components/card/CardItem.vue';
import ButtonAdd from '~/components/button/ButtonAdd.vue';
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    layout: 'admin_media',
    data() {
        return {
            title: {
                name: 'Quản lý Media',
                previous: '/admin/dashboard'
            },
            type: '',
            data: null,
            roles: null,
            selectedFilter: '',
            per_page: 0,
            current_page: 1,
            total: 0,
            tuKhoa: '',
        };
    },
    computed: {
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        },
        keyword() {
            return this.$store.getters[`media/keyword`]
        },
    },
    methods: {
        async load_type() {
            await api.get(`tin-tuc/get-loai-tin-tuc`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.type = res?.data?.data
            })
        },
        async load_data() {
            await api.get(`tin-tuc/danh-sach?tuKhoa=${this.tuKhoa}&page=${this.current_page}&type=${this.selectedFilter}&limit=15&sort=1`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.data = res?.data?.data?.tinTuc
                this.per_page = res?.data?.per_page ?? 0
                this.current_page = res?.data?.current_page ?? 0
                this.total = res?.data?.total
            })
        },
        async delete_item(user_id, name) {
            const formData = new FormData();
            formData.append('id', user_id)

            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: `Xoá bài viết ${name}!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Xác nhận xoá!',
                cancelButtonText: 'Huỷ'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.post('tin-tuc/xoa', formData, {
                        'Content-Type': 'multipart/form-data',
                        Authorization: 'Bearer ' + this.token
                    }).then(res => {
                        if (res?.status == 200) {
                            // toastr.success(res?.data?.message);
                            Swal.fire(
                                'Deleted!',
                                res?.data?.message,
                                'success'
                            )
                            this.load_type()
                            this.load_data()
                        } else {
                            toastr.error(res?.data?.message);
                        }
                    })

                }
            })
        },
        async updateFilter(filter) {
            this.selectedFilter = await filter ?? '';
            await this.load_data()
        },
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
        this.load_type()
        this.load_data()
    },
    components: { CardItem, ButtonAdd },
    watch: {
        current_page() {
            this.load_data()
        },
        keyword() {
            this.tuKhoa = this.keyword
        },
        tuKhoa() {
            clearTimeout(this.timeOut);

            this.timeOut = setTimeout(() => {
                this.load_data()

            }, this.timer);
        },
    }
}
</script>

<style lang="scss" scoped>
.btn-filter {
    border-radius: 46px;
    background: rgba(0, 86, 177, 0.15);
    margin-right: 10px;
}

.active {
    border-radius: 46px;
    background: #0056B1;
    color: #FFF;
}

.admins-group-btn {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .btn {
        display: flex;
        height: 34px;
        padding: 12px 25px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        margin-bottom: 10px;
    }
}

.button {
    cursor: pointer;
}

.time {
    border-radius: 0 10px 0 10px;
    position: absolute;
    background: #0056B1;
    color: #FFF;
    font-family: SVN-Gilroy;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px 13px;
    top: 0;
    right: 0;
}

.btn-edit {
    border-radius: 50px;
    background: #E5E5E5;
    color: #2D2D2D;
    text-align: center;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    flex: 1;
    margin: 0px !important;
}

.card-media-footer {
    display: flex;
    overflow: hidden;
    padding: 15px;

    div {
        margin-right: 10px;
    }
}

.media-content {
    max-width: 219px;
}

.card-media-body {
    padding: 20px 15px 15px 15px;
    display: flex;
    justify-content: space-between;
}

.box-img {
    width: 80px;
    height: 80px;
    min-width: 80px;
    overflow: hidden;
    border-radius: 10px;
    margin-top: 12px;

    iframe {
        width: 100%;
        height: 100%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.media-title {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
}

.media-des {
    color: rgba(45, 45, 45, 0.80);
    font-family: SVN-Gilroy;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    max-height: 107px;
    overflow: hidden;

    img {
        width: 100%;
    }
}

.card-media {
    border-radius: 10px;
    background: #FFF;
}
</style>