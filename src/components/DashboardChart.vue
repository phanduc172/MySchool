<template>
    <div>
      <apexchart
        type="bar"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </template>
  
<script>
import VueApexCharts from 'vue-apexcharts';
import axios from 'axios';

    export default {
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
        series: [{
            name: 'Số lượng',
            data: []
        }],
        chartOptions: {
            chart: {
            type: 'bar',
            height: 350,
            },
            plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
            },
            xaxis: {
            categories: ['Học sinh', 'Giáo viên', 'Người dùng', 'Tổng số'],
            },
            yaxis: {
            title: {
                text: 'Số lượng'
            }
            },
            fill: {
            opacity: 1
            },
            title: {
            text: 'Biểu đồ tổng số',
            align: 'center',
            margin: 20,
            style: {
                fontSize: '18px',
            }
            },
        }
        };
    },
    methods: {
        async fetchData() {
        const response = await axios.get('http://localhost:3000/api/tong-so');
        const data = response.data;
        this.series[0].data = [
        data.tongHocSinh,
        data.tongGiaoVien,
        data.tongNguoiDung,
        data.tongSo,
        ];
        }
    },
    mounted() {
        this.fetchData();
    }
};
</script>
  