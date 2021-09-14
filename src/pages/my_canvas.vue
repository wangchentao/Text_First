<template>
  <div class="all">
    <div class="header">测试</div>
    <Divider />
    <div>
      <div id="myChart" :style="{ width: '600px', height: '450px' }"></div>
    </div>
  </div>
</template>

<script>
var ROOT_PATH =
  "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples";
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
        backgroundColor: "#000",
        globe: {
          baseTexture: ROOT_PATH + "/data-gl/asset/earth.jpg",
          shading: "lambert",

          environment: ROOT_PATH + "/data-gl/asset/starfield.jpg",

          atmosphere: {
            show: true,
          },

          light: {
            ambient: {
              intensity: 0.1,
            },
            main: {
              intensity: 1.5,
            },
          },
        },
        series: [],
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
