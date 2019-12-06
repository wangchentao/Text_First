<template>
  <div class="hello">
    <div class="login">
      <div class="login-header">测试登陆</div>
      <div class="login-out">
        <Icon class="login-icon" type="ios-contact" />
        <div style="padding:5px 0 0 10px">账号：</div>
        <Input placeholder="请输入账号" v-model="account" />
        <Icon class="login-icon-i" type="md-close" @click="resetAccount" />
      </div>
      <div class="login-out">
        <Icon class="login-icon" type="md-key" />
        <div style="padding:5px 0 0 10px">密码：</div>
        <Input placeholder="请输入密码" type="password" v-model="password" />
        <Icon class="login-icon-i" type="md-close" @click="resetPassword" />
      </div>
      <div style="text-align:center">
        <Button class="login-Btn" @click="login" @keyup.enter="handleAddBook">登陆</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  components: {},
  data() {
    return {
      test: false,
      account: "",
      password: ""
    };
  },
  created() {
    this.keyupEnter();
  },
  methods: {
    click() {
      this.test = true;
      console.log(this.test);
    },
    resetAccount() {
      this.account = ""
    },
    resetPassword() {
      this.password = ""
    },
    login() {
      if (this.account == "" || this.password == "") {
        this.$Message.warning("账号与密码不能为空");
      } else if (this.account == "admin" && this.password == "wct19940820") {
        this.$Message.success("登陆成功");
        this.$router.push("/home");
      } else if (this.account != "admin" || this.password != "wct19940820") {
        this.$Message.error("账号或密码错误");
      }
    },
    keyupEnter() {
      document.onkeydown = e => {
        let body = document.getElementsByTagName("body")[0];
        if (e.keyCode === 13) {
          this.login();
        }
      };
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("../assets/timg.jpg") center center no-repeat;
}
.login {
  height: 40%;
  width: 30%;
  background: #383838;
  opacity: 0.5;
  border-radius: 8px;
  border: 1px solid green;

  .login-header {
    color: white;
    text-align: center;
    font-size: 15px;
    height: 30%;
    line-height: 55px;
  }
  .login-Btn {
    width: 80%;
    background: rgb(82, 146, 82);
    color: white;
    
  }

  .login-out {
    height: 25%;
    font-size: 15px;
    padding-left: 0px;
    display: flex;
    color: white;
    padding: 0 35px;

    .login-icon {
      line-height: 30px;
      font-size: 25px;
    }

    .login-icon-i {
      border: 1px solid white;
      height: 16px;
      border-radius: 30px;
      background: white;
      color: black;
      margin: 9px 0 0 10px;
      cursor: pointer;
    }
  }
}
</style>

<style lang="less">
.login-out {
  .ivu-input-wrapper {
    width: 65%;

    .ivu-input {
      background-color: #383838;
      color: white;
      border-right-width: 0px;
      border-top-width: 0px;
      border-left-width: 0px;
      border-radius: 0px;
      font-size: 16px;

      &:focus {
        box-shadow: 0 0 0 2px #383838;
      }
    }
  }
}
</style>
