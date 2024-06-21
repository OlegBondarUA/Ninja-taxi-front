<template>
  <div class="charts-card">
    <h2 class="chart-title">Пробіг автомобіля</h2>
    <span class="income-dates">01.05.2024</span>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'DashboardChartRunVehicle',
  data() {
    return {
      chartOptions: {
        grid: {
          height: '70%'
        },
        yAxis: {
          type: 'category',
          data: ['Автомобіль 1', 'Автомобіль 2', 'Автомобіль 3', 'Автомобіль 4', 'Автомобіль 5', 'Автомобіль 6', 'Автомобіль 7', 'Автомобіль 8', 'Автомобіль 9'],
          axisLabel: {
            rotate: 45
          }
        },
        xAxis: {
          type: 'value',
          name: 'Пробіг (км)',
          nameLocation: 'middle',
          nameGap: 60,
          nameTextStyle: {
            fontSize: 18,
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
        },
        series: [
          {
            name: 'Пробіг (км)',
            type: 'bar',
            stack: 'total',
            label: {
              focus: 'series'
            },
            itemStyle: {
              color: '#18A64D'
            },
            data: [100, 150, 200, 250, 300, 350, 400, 450, 500]
          },
        ]
      },
      chartInstance: null
    };
  },
  mounted() {
    this.initChart();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    initChart() {
      this.chartInstance = echarts.init(this.$refs.chart);
      this.chartInstance.setOption(this.chartOptions);
    },
    handleResize() {
      if (this.chartInstance) {
        this.chartInstance.resize();
      }
    }
  }
}
</script>

<style scoped>
.chart {
  width: 100%;
  height: 500px;
}

.chart-title {
  text-align: center;
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 32px;
  color: #141e17;
}

.income-dates {
  text-align: right;
  font-size: 25px;
  color: #EC6323;
  position: relative;
  top: -55px;
  right: 10px;
}

.charts-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  gap: 15px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: rgba(194, 251, 211, 0.06);
}
</style>
