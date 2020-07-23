<template>
  <div class="all">
    <div class="header">图谱模块</div>
    <Divider />
    <div>
      <div style="display: flex; justify-content: center; margin-bottom: 30px;">
        <Button style="font-size: 18px">启动所有批量服务</Button>
      </div>
      <div class="text">
        <div class="text-play">启动任务: </div>
        <div>
          <Input></Input>
        </div>
        <div style="padding-left: 10px;">
          <Button>执行</Button>
        </div>
      </div>
      <div class="text">
        <div class="text-play">单元命令: </div>
        <div>
          <Input></Input>
        </div>
        <div style="padding-left: 10px;">
          <Button>执行</Button>
        </div>
      </div>
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
  methods: {}
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
.text {
  display: flex;
  justify-content: center;

  .text-play {
    font-size: 16px;
    padding-right: 12px;
  }
}
</style>

<style lang="less">
</style>
