<template>
  <div class="charts-card">
    <h2 class="chart-title">Доходи автомобілів</h2>
    <span class="income-dates">01.05.2024</span>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'DashboardChartEarningsVehicle',
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
          data: ['Авто 1', 'Авто 2', 'Авто 3', 'Авто 4', 'Авто 5', 'Авто 6', 'Авто 7', 'Авто 8', 'Авто 9'],
          axisLabel: {
            rotate: 45
          }
        },
        yAxis: {
          type: 'value',
          name: 'Сума (грн.)',
          nameLocation: 'middle',
          nameRotate: 90,
          nameGap: 60,
          nameTextStyle: {
            fontSize: 18,
          }
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
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function (params) {
            let category = params[0].axisValue;
            let cash = parseFloat(params[0].value);
            let cashColor = '#A1E8B9';
            return (
              category +
              ':<br>' +
              '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background-color:' +
              cashColor +
              '"></span> Дохід: ' +
              cash +
              ' грн.<br>'
            );
          }
        },
        series: [
          {
            name: 'cash',
            type: 'bar',
            stack: 'total',
            label: {
              focus: 'series'
            },
            itemStyle: {
              color: '#A1E8B9'
            },
            data: [1200, 1500, 1800, 1100, 1600, 1700, 1900, 2000, 2100],
          }
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
