<template>
  <div class="charts-card">
    <h2 class="chart-title">Ефективність автомобіля</h2>
    <span class="income-dates">01.05.2024</span>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'DashboardChartEfficiencyVehicle',
  data() {
    return {
      chartOptions: {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01', '2024-07-01', '2024-08-01', '2024-09-01'],
        },
        yAxis: {
          type: 'value'
        },
        dataZoom: [
          {
            type: 'slider',
            start: 1,
            end: 100,
            showDetail: false,
            backgroundColor: 'white',
            dataBackground: {
              lineStyle: {
                color: 'orange',
                width: 5
              }
            },
            selectedDataBackground: {
              lineStyle: {
                color: 'rgb(255, 69, 0)',
                width: 5
              }
            },
            handleStyle: {
              color: 'orange',
              borderWidth: 0
            },
          }
        ],
        series: [
          {
            data: [10, 20, 15, 30, 25, 35, 40, 50, 45],
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
              color: '#79C8C5',
              width: 5
            },
            itemStyle: {
              color: '#18A64D'
            },
            areaStyle: {
              color: '#A1E8B9'
            }
          }
        ],
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            return 'Дата: ' + params[0].name + '<br/>' + params[0].seriesName + ' : ' + params[0].value + ' грн/км';
          }
        }
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
  height: 400px; /* початковий розмір графіка */
}
.chart-title {
  font-size: 24px;
  margin-bottom: 10px;
}
.income-dates {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}
.charts-card {
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 20px;
}
</style>
