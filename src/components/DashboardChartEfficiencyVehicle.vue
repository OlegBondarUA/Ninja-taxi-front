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
        grid: {
          height: '70%',
          top: 10,
          bottom: 120
        },
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
            bottom: 30,
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
