<template>
  <div class="charts-card">
    <h2 class="chart-title">Доходи водіїв</h2>
    <span class="income-dates">01.05.2024</span>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'Chart',
  data() {
    return {
      chartOptions: {
        title: {
          text: 'Схеми за кольором',
        },
        legend: {
          data: ['6/1', '5/2', '4/3', '2/2', 'Інші схеми без кольору']
        },
        calculable: true,
        grid: {
          height: '70%',
          bottom: 120
        },
        xAxis: {
          type: 'category',
          data: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця'],
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
            let card = parseFloat(params[1].value);
            let total = (cash + card).toFixed(2);
            let cashColor = '#EC6323';
            let cardColor = '#A1E8B9';
            return (
              category +
              ':<br>' +
              '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background-color:' +
              cardColor +
              '"></span> Карта: ' +
              card +
              ' грн.<br>' +
              '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background-color:' +
              cashColor +
              '"></span> Готівка: ' +
              cash +
              ' грн.<br>' +
              'Весь дохід: ' +
              total +
              ' грн.'
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
              color: '#EC6323'
            },
            data: [500, 600, 700, 800, 900]
          },
          {
            name: 'card',
            type: 'bar',
            stack: 'total',
            label: {
              focus: 'series'
            },
            itemStyle: {
              color: '#A1E8B9'
            },
            data: [1500, 1600, 1700, 1800, 1900]
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
            data: [1, 1, 1, 1, 1]
          },
          {
            name: '6/1',
            type: 'line',
            itemStyle: {color: 'green'},
            markLine: {
              data: [
                {
                  yAxis: 0,
                  lineStyle: {color: 'green', width: 3}
                }
              ]
            }
          },
          {
            name: '5/2',
            type: 'line',
            itemStyle: {color: 'orange'},
            markLine: {
              data: [
                {
                  yAxis: 0,
                  lineStyle: {color: 'orange', width: 3}
                }
              ]
            }
          },
          {
            name: '4/3',
            type: 'line',
            itemStyle: {color: 'red'},
            markLine: {
              data: [
                {
                  yAxis: 0,
                  lineStyle: {color: 'red', width: 3}
                }
              ]
            }
          },
          {
            name: '2/2',
            type: 'line',
            itemStyle: {color: 'blue'},
            markLine: {
              data: [
                {
                  yAxis: 0,
                  lineStyle: {color: 'blue', width: 3}
                }
              ]
            }
          },
          {
            name: 'Інші схеми без кольору',
            type: 'line',
            data: [],
            itemStyle: {color: 'white'},
            markLine: {
              show: false,
              data: [
                {
                  yAxis: 0,
                  lineStyle: {color: 'white', width: 3}
                }
              ]
            }
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
.charts-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 80px;
  gap: 15px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: rgba(194, 251, 211, 0.06);
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

.chart {
  width: 100%;
  height: 500px;
}
</style>