<template>
  <div class="all">
    <div class="header">模拟考试</div>
    <Divider />
    <div class="pageHeader">
      <div style="color: #17233d">考试内容:</div>
      <div style="color: #17233d">(单项选择 135 道，多项选择 100 道)</div>
    </div>
    <div class="pageHeader" style="color: #17233d">请选择需要模拟的类型</div>
    <div class="option">
      <div style="margin-right:20px" class="optionBox" @click="modal1 = true">
        <div class="optionBoxContent">单项选择</div>
      </div>
      <Modal v-model="modal1" title="单项选择" @on-ok="getUniter" @on-cancel="cancel">
        <p style="font-size: 16px;">是否开始模拟单项选择 ？</p>
      </Modal>
      <div style="margin-left:20px" class="optionBox" @click="modal2 = true">
        <div class="optionBoxContent">多项选择</div>
      </div>
      <Modal v-model="modal2" title="多项选择" @on-ok="getMultipe" @on-cancel="cancel">
        <p style="font-size: 16px;">是否开始模拟多项选择 ？</p>
      </Modal>
    </div>
    <div class="reminder" style="">提示（选择考试内容后可在考试页面切换考试内容,考生答题完毕可提交试卷查看答案）</div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      modal2: false,
      modal1: false,
    };
  },
  methods: {
    getUniter() {
      this.$Message.success("开始模拟");
      this.$router.push('/uniterming')
    },
    cancel() {
      this.$Message.error("取消选择");
    },
    getMultipe() {
      this.$Message.success("开始模拟");
      this.$router.push('/multipleChoice')
    }
  }
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
  .pageHeader {
    display: flex;
    font-size: 20px;
    font-weight: bold;
    justify-content: center;
  }
  .option {
    display: flex;
    justify-content: center;
    margin-top: 80px;
    height: 50%;

    .optionBox {
      width: 20%;
      height: 40%;
      background: #5cadff;
      border-radius: 8px;
      cursor: pointer;
      &:hover {
        background: #2d8cf0;
      }

      .optionBoxContent {
        color: white;
        font-size: 24px;
        line-height: 100px;
        text-align: center;
        font-weight: bold;
      }
    }
  }
  .reminder {
    display: flex;
    justify-content: center;
    font-size: 14px;
    color: #17233d;
    font-weight: bold;
  }
}
</style>

<style lang="less">
</style>
