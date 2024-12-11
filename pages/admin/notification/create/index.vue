<template>
    <div class="content-mp">
        <div class="notification">
            <v-row class="">
                <v-col class="" xs="12" sm="12" md="7" lg="7" xl="7">
                    <div style="min-width: 245px;" class=" wow animate__animated animate__zoomIn">
                        <div>
                            <b-form-group>
                                <div class="label">
                                    <span class="me-2">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.52 1.3335H5.48004C2.96004 1.3335 2.33337 2.00683 2.33337 4.6935V12.2002C2.33337 13.9735 3.30671 14.3935 4.48671 13.1268L4.49337 13.1202C5.04004 12.5402 5.87337 12.5868 6.34671 13.2202L7.02004 14.1202C7.56004 14.8335 8.43337 14.8335 8.97337 14.1202L9.64671 13.2202C10.1267 12.5802 10.96 12.5335 11.5067 13.1202C12.6934 14.3868 13.66 13.9668 13.66 12.1935V4.6935C13.6667 2.00683 13.04 1.3335 10.52 1.3335ZM9.89337 6.66016L9.56004 7.00016H9.55337L7.53337 9.02016C7.44671 9.10683 7.26671 9.20016 7.14004 9.2135L6.24004 9.34683C5.91337 9.3935 5.68671 9.16016 5.73337 8.84016L5.86004 7.9335C5.88004 7.80683 5.96671 7.6335 6.05337 7.54016L8.08004 5.52016L8.41337 5.18016C8.63337 4.96016 8.88004 4.80016 9.14671 4.80016C9.37337 4.80016 9.62004 4.90683 9.89337 5.18016C10.4934 5.78016 10.3 6.2535 9.89337 6.66016Z"
                                                fill="#0056B1" />
                                        </svg>
                                    </span>
                                    Tiêu đề thông báo
                                </div>
                                <b-form-input v-model="tieu_de" placeholder="Nhập tiêu đề thông báo"></b-form-input>
                            </b-form-group>
                        </div>
                        <div>
                            <b-form-group>
                                <div class="label">
                                    <span class="me-2">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.0588 6.87422L12.9518 6.72022C12.7645 6.48222 12.5438 6.29322 12.2896 6.15321C11.9485 5.95021 11.5606 5.84521 11.1593 5.84521H2.83224C2.43094 5.84521 2.0497 5.95021 1.7019 6.15321C1.44105 6.30022 1.20696 6.50322 1.013 6.75522C0.631757 7.26622 0.451171 7.89622 0.511366 8.52622L0.758837 11.7952C0.845786 12.7822 0.959489 14.0002 3.07971 14.0002H10.9185C13.0387 14.0002 13.1457 12.7822 13.2394 11.7882L13.4869 8.53322C13.547 7.94522 13.3999 7.35722 13.0588 6.87422ZM8.59764 10.7382H5.39389C5.13305 10.7382 4.92571 10.5142 4.92571 10.2482C4.92571 9.98222 5.13305 9.75822 5.39389 9.75822H8.59764C8.85848 9.75822 9.06582 9.98222 9.06582 10.2482C9.06582 10.5212 8.85848 10.7382 8.59764 10.7382Z"
                                                fill="#FC4D32" />
                                            <path
                                                d="M12.6926 4.34012C12.7474 4.72504 12.3178 4.98641 11.9402 4.89386C11.6903 4.83262 11.4318 4.80201 11.1659 4.80201H2.83217C2.56024 4.80201 2.29138 4.83564 2.0329 4.9006C1.66 4.99432 1.23364 4.74232 1.23364 4.35783V3.262C1.23364 0.763001 1.96268 0 4.35043 0H5.13966C6.09611 0 6.39708 0.322 6.78501 0.847001L7.58762 1.967C7.75483 2.205 7.76152 2.219 8.0558 2.219H9.64764C11.6276 2.219 12.4651 2.74472 12.6926 4.34012Z"
                                                fill="#FC4D32" />
                                        </svg>
                                    </span>
                                    Chủ đề thông báo
                                </div>
                                <b-form-select v-model="selected" :options="types" class="mb-3">

                                </b-form-select>
                            </b-form-group>
                        </div>
                        <div>
                            <b-form-group>
                                <div class="label">
                                    <span class="me-2">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.5199 1.3335H5.47992C2.95992 1.3335 2.33325 2.00683 2.33325 4.6935V12.2002C2.33325 13.9735 3.30659 14.3935 4.48659 13.1268L4.49325 13.1202C5.03992 12.5402 5.87325 12.5868 6.34659 13.2202L7.01992 14.1202C7.55992 14.8335 8.43325 14.8335 8.97325 14.1202L9.64659 13.2202C10.1266 12.5802 10.9599 12.5335 11.5066 13.1202C12.6933 14.3868 13.6599 13.9668 13.6599 12.1935V4.6935C13.6666 2.00683 13.0399 1.3335 10.5199 1.3335ZM9.89325 6.66016L9.55992 7.00016H9.55325L7.53325 9.02016C7.44659 9.10683 7.26659 9.20016 7.13992 9.2135L6.23992 9.34683C5.91325 9.3935 5.68659 9.16016 5.73325 8.84016L5.85992 7.9335C5.87992 7.80683 5.96659 7.6335 6.05325 7.54016L8.07992 5.52016L8.41325 5.18016C8.63325 4.96016 8.87992 4.80016 9.14659 4.80016C9.37325 4.80016 9.61992 4.90683 9.89325 5.18016C10.4933 5.78016 10.2999 6.2535 9.89325 6.66016Z"
                                                fill="#FFB761" />
                                        </svg>
                                    </span>
                                    Nội dung
                                </div>
                                <textarea v-model="noi_dung" id="sample"></textarea>
                            </b-form-group>
                        </div>
                        <div class="mt-1">
                            <b-form-group>
                                <div class="label">
                                    <span class="me-2">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.72003 12.6735L1.7067 12.6868C1.5267 12.2935 1.41337 11.8468 1.3667 11.3535C1.41337 11.8402 1.54003 12.2802 1.72003 12.6735Z"
                                                fill="#00C092" />
                                            <path
                                                d="M6 6.91992C6.87629 6.91992 7.58666 6.20954 7.58666 5.33325C7.58666 4.45696 6.87629 3.74658 6 3.74658C5.1237 3.74658 4.41333 4.45696 4.41333 5.33325C4.41333 6.20954 5.1237 6.91992 6 6.91992Z"
                                                fill="#00C092" />
                                            <path
                                                d="M10.7933 1.3335H5.20659C2.77992 1.3335 1.33325 2.78016 1.33325 5.20683V10.7935C1.33325 11.5202 1.45992 12.1535 1.70659 12.6868C2.27992 13.9535 3.50659 14.6668 5.20659 14.6668H10.7933C13.2199 14.6668 14.6666 13.2202 14.6666 10.7935V9.26683V5.20683C14.6666 2.78016 13.2199 1.3335 10.7933 1.3335ZM13.5799 8.3335C13.0599 7.88683 12.2199 7.88683 11.6999 8.3335L8.92659 10.7135C8.40659 11.1602 7.56659 11.1602 7.04659 10.7135L6.81992 10.5268C6.34659 10.1135 5.59325 10.0735 5.05992 10.4335L2.56659 12.1068C2.41992 11.7335 2.33325 11.3002 2.33325 10.7935V5.20683C2.33325 3.32683 3.32659 2.3335 5.20659 2.3335H10.7933C12.6733 2.3335 13.6666 3.32683 13.6666 5.20683V8.40683L13.5799 8.3335Z"
                                                fill="#00C092" />
                                        </svg>
                                    </span>
                                    Hình ảnh <i>(Tối thiểu không quá 2mb)</i>
                                </div>
                                <b-form-file v-model="file" ref="file-input" id="file-default"></b-form-file>
                            </b-form-group>
                        </div>

                        <div class="mt-1">
                            <b-form-group>
                                <div class="label">
                                    <span class="me-2">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.3333 2H4.66659C2.66659 2 1.33325 3 1.33325 5.33333V10C1.33325 12.3333 2.66659 13.3333 4.66659 13.3333H7.04659C7.43992 13.3333 7.75992 12.9867 7.70659 12.5933C7.63992 12.12 7.65325 11.6267 7.75325 11.12C8.10659 9.38667 9.53325 8.00667 11.2799 7.72C12.1533 7.58 12.9866 7.7 13.7199 8.02C14.1666 8.21333 14.6666 7.90667 14.6666 7.42V5.33333C14.6666 3 13.3333 2 11.3333 2ZM11.6466 5.72667L9.55992 7.39333C9.11992 7.74667 8.55992 7.92 7.99992 7.92C7.43992 7.92 6.87325 7.74667 6.43992 7.39333L4.35325 5.72667C4.13992 5.55333 4.10659 5.24 4.27325 5.02C4.44659 4.80667 4.75992 4.76667 4.97325 4.94L7.05992 6.60667C7.56659 7.01333 8.42659 7.01333 8.93325 6.60667L11.0199 4.94C11.2333 4.76667 11.5533 4.8 11.7199 5.02C11.8933 5.24 11.8599 5.55333 11.6466 5.72667Z"
                                                fill="#4EAEEA" />
                                            <path
                                                d="M12.0001 8.6665C10.1601 8.6665 8.66675 10.1532 8.66675 11.9998C8.66675 13.8398 10.1601 15.3332 12.0001 15.3332C13.8467 15.3332 15.3334 13.8398 15.3334 11.9998C15.3334 10.1532 13.8467 8.6665 12.0001 8.6665ZM13.3667 11.6998L13.1201 11.9398L11.6667 13.3998C11.6001 13.4598 11.4734 13.5265 11.3801 13.5398L10.7267 13.6332C10.4934 13.6665 10.3267 13.4998 10.3601 13.2665L10.4534 12.6132C10.4667 12.5198 10.5267 12.3932 10.5934 12.3265L12.0467 10.8798L12.2867 10.6332C12.4467 10.4732 12.6267 10.3665 12.8134 10.3665C12.9734 10.3665 13.1534 10.4398 13.3534 10.6332C13.8001 11.0665 13.6601 11.4065 13.3667 11.6998Z"
                                                fill="#4EAEEA" />
                                        </svg>

                                    </span>
                                    Gửi tới
                                </div>
                                <b-form-select v-model="get_toi_id" :options="get_toi" class="mb-3">

                                </b-form-select>
                            </b-form-group>
                        </div>

                        <div class="mt-1" v-show="disabled_giao_vien">
                            <b-form-group>
                                <div class="label">
                                    <span class="me-2">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.06323 4.49908L4.4974 1.06007C5.21759 0.338865 6.21069 -0.0483076 7.22654 0.00483383L11.017 0.187033C12.5332 0.255358 13.7386 1.46243 13.8144 2.97316L13.9963 6.76897C14.0418 7.78625 13.6628 8.78076 12.9426 9.50196L9.50841 12.941C8.09835 14.353 5.8089 14.353 4.39127 12.941L1.06323 9.60824C-0.354409 8.20379 -0.354409 5.91112 1.06323 4.49908ZM8.89435 7.2928C10.0997 7.2928 11.0777 6.31348 11.0777 5.10641C11.0777 3.89934 10.0997 2.92002 8.89435 2.92002C7.68898 2.92002 6.71104 3.89934 6.71104 5.10641C6.71104 6.31348 7.68898 7.2928 8.89435 7.2928Z"
                                                fill="#00C092" />
                                        </svg>
                                    </span>
                                    Gán giáo viên
                                </div>
                                <!-- <v-select v-model="giao_vien_id" :items="giao_vien" label="Chọn giáo viên" multiple filled
                                    flat chips item-text="itemName" item-value="itemId"></v-select> -->

                                    <v-autocomplete v-model="giao_vien_id" :disabled="isUpdating" :items="giao_vien" filled chips
                                color="blue-grey lighten-2" label="" item-text="name" item-value="group" multiple>
                                <template v-slot:selection="data">
                                    <div class="d-flex m-2">
                                        <img width="50" class="border border-2 rounded-circle" :src="data.item.avatar">
                                        <div class="ms-2">
                                            <div class="mt-2">
                                                <b>{{ data.item.name }}</b>
                                            </div>
                                            <div>
                                                <span class="blade-id"># {{ data.item.group }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <v-chip v-bind="data.attrs" :input-value="data.selected" close @click="data.select"
                                        @click:close="remove(data.item)">
                                        <v-avatar left>
                                            <v-img :src="data.item.avatar"></v-img>
                                        </v-avatar>
                                        {{ data.item.name }}
                                    </v-chip> -->
                                </template>
                                <template v-slot:item="data">
                                    <template v-if="typeof data.item !== 'object'">
                                        <v-list-item-content v-text="data.item"></v-list-item-content>
                                    </template>
                                    <template v-else>
                                        <v-list-item-avatar>
                                            <img :src="data.item.avatar">
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title v-html="data.item.name"></v-list-item-title>
                                            <v-list-item-subtitle v-html="data.item.group"></v-list-item-subtitle>
                                        </v-list-item-content>
                                    </template>
                                </template>
                            </v-autocomplete>
                            </b-form-group>
                        </div>

                        <div class="mt-1" v-show="disabled_phu_huynh">
                            <b-form-group>
                                <div class="label">
                                    <span class="me-2">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.06323 4.49908L4.4974 1.06007C5.21759 0.338865 6.21069 -0.0483076 7.22654 0.00483383L11.017 0.187033C12.5332 0.255358 13.7386 1.46243 13.8144 2.97316L13.9963 6.76897C14.0418 7.78625 13.6628 8.78076 12.9426 9.50196L9.50841 12.941C8.09835 14.353 5.8089 14.353 4.39127 12.941L1.06323 9.60824C-0.354409 8.20379 -0.354409 5.91112 1.06323 4.49908ZM8.89435 7.2928C10.0997 7.2928 11.0777 6.31348 11.0777 5.10641C11.0777 3.89934 10.0997 2.92002 8.89435 2.92002C7.68898 2.92002 6.71104 3.89934 6.71104 5.10641C6.71104 6.31348 7.68898 7.2928 8.89435 7.2928Z"
                                                fill="#00C092" />
                                        </svg>
                                    </span>
                                    Gán phụ huynh
                                </div>
                                <!-- <v-select v-model="phu_huynh_id" :items="phu_huynh" label="Chọn phụ huynh" multiple filled
                                    flat chips item-text="itemName" item-value="itemId"></v-select> -->

                                    <v-select
                                    v-model="phu_huynh_id"
                                    :items="phu_huynh"
                                    label="Chọn phụ huynh"
                                    multiple
                                    filled
                                    flat
                                    chips
                                    item-text="itemName"
                                    item-value="itemId"
                                    :search-input.sync="search"
                                    :filter="customFilter"
                                    append-icon="mdi-magnify"
                                  ></v-select>
                            </b-form-group>
                        </div>

                        <div class="mt-1" v-show="disabled_dich_vu">
                            <b-form-group>
                                <div class="label">
                                    <span class="me-2">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.06323 4.49908L4.4974 1.06007C5.21759 0.338865 6.21069 -0.0483076 7.22654 0.00483383L11.017 0.187033C12.5332 0.255358 13.7386 1.46243 13.8144 2.97316L13.9963 6.76897C14.0418 7.78625 13.6628 8.78076 12.9426 9.50196L9.50841 12.941C8.09835 14.353 5.8089 14.353 4.39127 12.941L1.06323 9.60824C-0.354409 8.20379 -0.354409 5.91112 1.06323 4.49908ZM8.89435 7.2928C10.0997 7.2928 11.0777 6.31348 11.0777 5.10641C11.0777 3.89934 10.0997 2.92002 8.89435 2.92002C7.68898 2.92002 6.71104 3.89934 6.71104 5.10641C6.71104 6.31348 7.68898 7.2928 8.89435 7.2928Z"
                                                fill="#00C092" />
                                        </svg>
                                    </span>
                                    Nhóm dịch vụ
                                </div>
                                <v-select v-model="phu_huynh_id" :items="phu_huynh" label="Chọn dịch vụ" multiple filled
                                    flat chips item-text="itemName" item-value="itemId"></v-select>
                            </b-form-group>
                        </div>

                        <div class="mt-1" v-show="disabled_lao_dong">
                            <b-form-group>
                                <div class="label">
                                    <span class="me-2">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.06323 4.49908L4.4974 1.06007C5.21759 0.338865 6.21069 -0.0483076 7.22654 0.00483383L11.017 0.187033C12.5332 0.255358 13.7386 1.46243 13.8144 2.97316L13.9963 6.76897C14.0418 7.78625 13.6628 8.78076 12.9426 9.50196L9.50841 12.941C8.09835 14.353 5.8089 14.353 4.39127 12.941L1.06323 9.60824C-0.354409 8.20379 -0.354409 5.91112 1.06323 4.49908ZM8.89435 7.2928C10.0997 7.2928 11.0777 6.31348 11.0777 5.10641C11.0777 3.89934 10.0997 2.92002 8.89435 2.92002C7.68898 2.92002 6.71104 3.89934 6.71104 5.10641C6.71104 6.31348 7.68898 7.2928 8.89435 7.2928Z"
                                                fill="#00C092" />
                                        </svg>
                                    </span>
                                    Phân loại lao động
                                </div>
                                <v-select v-model="phu_huynh_id" :items="phu_huynh" label="Chọn lao động" multiple filled
                                    flat chips item-text="itemName" item-value="itemId"></v-select>
                            </b-form-group>
                        </div>

                        <div class="mt-6">
                            <form id="form" @submit="send_data">
                                <button-component typeBtn="submit">
                                    Lưu
                                </button-component>
                            </form>
                        </div>

                    </div>
                </v-col>

            </v-row>
        </div>
    </div>
</template>

<script>
import SUNEDITOR from 'suneditor'
import plugins from 'suneditor/src/plugins'
import 'suneditor/dist/css/suneditor.min.css'
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    layout: 'admin',
    data: () => ({
        title: {
            name: 'Tạo thông báo',
            previous: '/admin/notification'
        },
        selected: 0,
        tieu_de: null,
        isUpdating: false,
        types: null,
        get_toi: [],
        giao_vien_id: [],
        giao_vien: [],
        phu_huynh_id: [],
        phu_huynh: [],
        get_toi_id: 0,
        selected2: 0,
        options2: [
            { value: 0, text: 'Tất cả' },
        ],
        suneditorInstance: null,
        noi_dung: 'Nhập nội dung',
        file: null,
        disabled_giao_vien: false,
        disabled_phu_huynh: false,
        disabled_dich_vu: false,
        disabled_lao_dong: false,
        search: '',
    }),
    computed: {
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        customFilter(item, queryText, itemText) {
            // This enables case-insensitive filtering
            const text = itemText.toLowerCase();
            const query = queryText.toLowerCase();
            return text.includes(query);
          },
        async load_type() {
            await api.get('thong-bao/get-type', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.types = res?.data?.data.map(item => {
                    return {
                        value: item.id,
                        text: item.name
                    };
                })
                this.selected = this.types[0].value
            })

            await api.get('thong-bao/get-to', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.get_toi = res?.data?.data.map(item => {
                    return {
                        value: item.id,
                        text: item.name
                    };
                })
                this.get_toi_id = this.get_toi[0].value
            })

            await api.get('thong-bao/danh-sach-giao-vien?tuKhoa=', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                // this.giao_vien = res?.data?.data.map(item => {
                //     return {
                //         itemId: item?.id,
                //         itemName: item?.hoten ?? item?.id,
                //     }
                // })


                this.giao_vien = res?.data?.data.map(item => {
                    return {
                        group: item?.id,
                        name: item?.hoten ?? (item?.id + ' - Chưa cập nhât tên'),
                        avatar: item?.anh_nguoi_dung,
                    };
                })

                this.giao_vien.unshift({group:0, name:'Tất cả', avatar:'https://trongtrepro.htecom.com/upload-file/2024/02/23/_z7i8t7jHFPdXwDLZ95qyUANWvieJ5xcG.png'});

                this.giao_vien_id = this.giao_vien[0].group
            })

            await api.get('thong-bao/danh-sach-phu-huynh?tuKhoa=', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.phu_huynh = res?.data?.data.map(item => {
                    return {
                        itemId: item?.id,
                        itemName: item?.hoten ?? item?.id,
                    }
                })

                this.phu_huynh.unshift({itemId:0, itemName:'Tất cả'});
            })
        },
        async send_data(event) {
            event.preventDefault();
            const formData = new FormData()
            formData.append('type_id', this.selected)
            formData.append('noi_dung', this.noi_dung)
            formData.append('image', this.file)
            formData.append('to_id', this.get_toi_id)
            formData.append('tieu_de', this.tieu_de)

            if(this.disabled_giao_vien) {
                // const check = this.giao_vien.some(item => item.itemId == 0);
                // if(check){
                //     formData.append('giao_vien_id', '0')
                // } else {
                    // formData.append('giao_vien_id', this.giao_vien_id.map(item => item.itemId).join(','))
                    // console.log(this.giao_vien_id, this.giao_vien_id.join(','))

                    // return
                    try {
                        formData.append('giao_vien_id', this.giao_vien_id.join(','))
                    } catch (e) {
                        formData.append('giao_vien_id', this.giao_vien_id)
                    }
                // }
            }else {
                formData.append('giao_vien_id', '')
            }

            if(this.disabled_phu_huynh) {
                // const check = this.phu_huynh.some(item => item.itemId == 0);
                // if(check){
                //     formData.append('phu_huynh_id', '0')
                // } else {
                    // formData.append('phu_huynh_id', this.phu_huynh_id.map(item => item.itemId).join(','))
                    formData.append('phu_huynh_id', this.phu_huynh_id.join(','))
                // }
            }else {
                formData.append('phu_huynh_id', '')
            }

            formData.append('dich_vu_id', '')
            formData.append('lao_dong_id', '')

            await api.post('thong-bao/tao-moi', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$router.push('/admin/notification');
                }
            })
        }
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);

        const editor = SUNEDITOR.create((document.getElementById('sample') || 'sample'), {
            toolbarContainer: '#toolbar_container',
            showPathLabel: false,
            charCounter: true,
            width: 'auto',
            height: 'auto',
            minHeight: '300px',
            maxHeight: '250px',
            plugins: plugins,
            buttonList: [
                ['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
                ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
                ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
                ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save']
            ],
            callBackSave: function (noi_dung, isChanged) {
                this.noi_dung = noi_dung
                console.log(noi_dung);
            },
        });
        this.suneditorInstance = editor; // Store the Suneditor instance in a component property

        this.suneditorInstance.onChange = async (noi_dung, core) => {
            this.noi_dung = noi_dung;
        };

        this.suneditorInstance.setContents(this.noi_dung);

        this.load_type()
    },
    components: {},
    watch: {
        isUpdating(val) {
            if (val) {
                setTimeout(() => (this.isUpdating = false), 3000)
            }
        },
        get_toi_id() {
            if (this.get_toi_id == 60) {
                this.disabled_giao_vien = true
                this.disabled_phu_huynh = false
                this.disabled_dich_vu = false
                this.disabled_lao_dong = false
            }
            if (this.get_toi_id == 61) {
                this.disabled_giao_vien = false
                this.disabled_phu_huynh = true
                this.disabled_dich_vu = false
                this.disabled_lao_dong = false
            }
            if (this.get_toi_id == 62) {
                this.disabled_giao_vien = false
                this.disabled_phu_huynh = false
                this.disabled_dich_vu = true
                this.disabled_lao_dong = false
            }
            if (this.get_toi_id == 63) {
                this.disabled_giao_vien = false
                this.disabled_phu_huynh = false
                this.disabled_dich_vu = false
                this.disabled_lao_dong = true
            }
            console.log(this.disabled_giao_vien)
        },
        giao_vien_id() {
            console.log(this.giao_vien_id)
        }
    }
}
</script>

<style lang="scss" scoped>
.notification {
    i {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: italic;
        font-weight: 400;
        line-height: normal;
        margin-left: 7px;
    }

    .label {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    @media (max-width: 600px) {
        .btn-type {
            padding: 8px 25px;
            margin-right: 7px;
            margin-bottom: 7px;
        }
    }
}
</style>