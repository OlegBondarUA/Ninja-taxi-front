<template>
  <div class="charts-card">
    <h2 class="chart-title">Середня ефективність автомобіля</h2>
    <span class="income-dates">01.05.2024</span>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'DashboardChartAverageEfficiencyVehicle',
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
          data: ['Автомобіль 1', 'Автомобіль 2', 'Автомобіль 3', 'Автомобіль 4', 'Автомобіль 5', 'Автомобіль 6', 'Автомобіль 7', 'Автомобіль 8', 'Автомобіль 9'],
          axisLabel: {
            rotate: 45
          }
        },
        yAxis: {
          type: 'value',
          max: 20, // Example value; adjust according to BusinessVehicleEfficiency
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
            name: 'efficiency',
            type: 'bar',
            stack: 'total',
            itemStyle: {
              color: '#A1E8B9'
            },
            data: [10, 12, 15, 20, 18, 14, 17, 19, 13],
            markLine: {
              data: [
                {
                  yAxis: 15,
                  name: 'Another Value',
                  lineStyle: {color: 'green', width: 3}
                },
                {
                  yAxis: 12,
                  name: 'Another Value',
                  lineStyle: {color: 'red', width: 3}
                }
              ]
            }
          },
          {
            name: 'vision_color',
            type: 'bar',
            stack: 'total',
            label: {
              focus: 'series'
            },
            itemStyle: {
              color: '#A1E8B9',
              borderColor: 'green',
              borderWidth: 5
            },
            data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]
          },
        ],
        tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function (params) {
            let carName = params[0].name;
            let efficiency = params[0].value;
            return `Автомобіль: ${carName}<br/>Ефективність: ${efficiency}`;
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
