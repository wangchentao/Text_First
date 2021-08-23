<template>
  <div class="all">
    <div class="header">
      <div class="header-logo"></div>
      <div class="personal">
        <div class="personal-icon" @click="help">
          <Icon style="font-size: 18px; margin-right: 5px;" type="md-help-circle" />帮助
        </div>
        <div class="personal-icon" @click="getPersonalCenter">
          <Icon style="font-size: 18px; margin-right: 5px;" type="ios-people" />个人中心
        </div>
      </div>
    </div>
    <div class="all-content">
      <div class="navigation">
        <div class="navigation-icon" @click="getPersonal"> 
          <Icon style="font-size: 24px; margin-right: 20px;" type="ios-people" />
          <div>人物信息</div>
        </div>
        <div class="navigation-icon" @click="getMyText">
          <Icon style="font-size: 24px; margin-right: 20px;" type="md-albums" />
          <div>客户</div>
        </div>
        <div class="navigation-icon" @click="getExamin">
          <Icon style="font-size: 24px; margin-right: 20px;" type="md-albums" />
          <div>模拟</div>
        </div>
        <div class="navigation-icon" @click="gerCanvas">
          <Icon style="font-size: 24px; margin-right: 20px;" type="ios-color-palette" />
          <div>系统界面</div>
        </div>
        <div class="navigation-icon" @click="getManage">
          <Icon style="font-size: 24px; margin-right: 20px;" type="ios-cube" />
          <div>合同</div>
        </div>
      </div>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      modal: false,
    };
  },
  methods: {
    help() {
      // this.$Modal.confirm({
      //   title: "帮助",
      //   content:
      //     "<p>如需选择类型请点击左边导航栏</p><p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </p><p>To select the type, click the left navigation bar</p>"
      // });
      this.$router.push('/text')
    },
    getPersonal() {
      this.$router.push('/people_message')
    },
    getMyText() {
      this.$router.push('/my_text')
    },
    getExamin() {
      this.$router.push('/simulation')
    },
    getPersonalCenter() {
      this.$router.push('/personal_center')
    },
    gerCanvas() {
      this.$router.push('/my_canvas')
    },
    getManage() {
      this.$router.push('/manage')
    }
  }
};
</script>

<style lang="less" scoped>
.all {
  height: 100%;
  width: 100%;
  background: #f8f8f9;
  overflow: hidden;
  .header {
    width: 100%;
    height: 10%;
    background: black;
    display: flex;

    .header-logo {
      width: 16%;
      height: 100%;
      background: url("../assets/header.png");
    }

    .personal {
      width: 84%;
      height: 100%;
      font-size: 12px;
      color: white;
      display: flex;
      background: black;
      padding: 20px 30px 0 0;
      justify-content: flex-end;

      .personal-icon {
        margin-right: 20px;
        cursor: pointer;

        &:hover {
          color: #5cadff;
        }
      }
    }
  }
  .all-content {
    width: 100%;
    height: 90%;
    display: flex;
    
    .navigation {
      background: black;
      height: 100%;
      width: 16%;
      font-size: 16px;
      color: white;

      .navigation-icon {
        cursor: pointer;
        position: relative;
        padding: 10px 30px 10px 30px;
        top: 0px;
        display: flex;

        &:hover {
          color: #5cadff;
          background: #dcdee2;
        }
      }
    }
    .content {
      width: 84%;
      height: 100%;
      background: #dcdee2;
    }
  }
}
</style>

<style lang="less">
</style>
