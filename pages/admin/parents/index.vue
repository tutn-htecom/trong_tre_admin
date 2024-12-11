<template>
    <div class="content-mp parents">
        <div class="">
            <v-row>
                <v-col class="mt-0 pt-0" v-for="n in 6" :key="n" xs="12" sm="6" md="4" lg="4" xl="3">
                    <b-card style="min-width: 245px;" class="">
                        <nuxt-link class="block w-100 teachers" to="/admin/parents/34">
                            <div class="d-flex align-center">
                                <div class="me-2 layout-user">
                                    <img src="@/static/images/teacher/Ellipse49.png" alt="">
                                </div>
                                <div>
                                    <div class="d-flex align-items-center">
                                        <span class="blade-id me-2"># {{ n + 200 }}</span>
                                    </div>
                                    <h3 class="name">
                                        Nguyễn Hoàng Anh Thư
                                    </h3>
                                    <p class="w-p p-0 m-0 position">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="10" cy="10" r="10" fill="#0056B1" fill-opacity="0.1" />
                                            <path
                                                d="M13.9703 11.5492L15.4486 13.0275C15.7531 13.3321 15.7531 13.8258 15.4486 14.1304C13.802 15.777 11.1952 15.9622 9.33236 14.5651L9.22376 14.4836C7.81856 13.4297 6.57029 12.1814 5.51639 10.7762L5.43494 10.6676C4.03778 8.80476 4.22304 6.19801 5.86961 4.55145C6.17416 4.24689 6.66794 4.24689 6.9725 4.55145L8.45079 6.02974C8.84131 6.42026 8.84131 7.05342 8.45079 7.44395L7.4477 8.44704C7.2432 8.65154 7.1925 8.96395 7.32184 9.22262C8.06951 10.718 9.28203 11.9305 10.7774 12.6782C11.036 12.8075 11.3485 12.7568 11.553 12.5523L12.5561 11.5492C12.9466 11.1587 13.5797 11.1587 13.9703 11.5492Z"
                                                fill="#0056B1" />
                                        </svg>
                                        <span class="text-field">
                                            ******** 789
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </nuxt-link>
                    </b-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import CardItem from '../../../components/card/CardItem.vue';

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Danh sách Phụ huynh',
                previous: '/admin/dashboard'
            },
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            selected: 'A',
            options: [
                { item: 'A', name: 'Option A' },
                { item: 'B', name: 'Option B' },
                { item: 'D', name: 'Option C', notEnabled: true },
                { item: { d: 1 }, name: 'Option D' }
            ]
        };
    },
    computed: {},
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
    },
    components: { CardItem }
}
</script>