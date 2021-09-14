<template>
  <div class="all">
    <div class="header">测试</div>
    <Divider />
    <div>
      <div id="myChart" :style="{ width: '1000px', height: '450px' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },

  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        legend: {
          top: "bottom",
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [25, 150],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 40, name: "rose 1" },
              { value: 38, name: "rose 2" },
              { value: 32, name: "rose 3" },
              { value: 30, name: "rose 4" },
              { value: 28, name: "rose 5" },
              { value: 26, name: "rose 6" },
              { value: 22, name: "rose 7" },
              { value: 18, name: "rose 8" },
            ],
          },
        ],
      });
    },
  },
};
</script>

<style lang="less" scoped>
.all {
  .header {
    padding: 10px 20px 0px 20px;
    font-size: 18px;
    font-weight: bold;
    height: 5%;
  }
}
</style>

<style lang="less">
</style>
