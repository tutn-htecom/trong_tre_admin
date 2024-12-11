<template>
    <b-card style="min-width: 245px;" class="mb-2 hover-card">
        <div class="d-flex justify-content-between align-center">
            <!-- <Bar id="my-chart-id" :options="chartOptions" :data="chartData" /> -->
            <!-- <bar-chart /> -->
            <bar-chart></bar-chart>
        </div>
    </b-card>
</template>

<script>
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';
import BarChart from '../Chart/BarChart.vue'

export default {
    name: 'SalesReport',
    components: {
        BarChart
    },
    data() {
        return {
            data: null,
            date: new Date().toISOString().substr(0, 7),
            menu: false,
            modal: false,
        }
    },
}
</script>

<style></style>