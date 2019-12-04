<template>
  <div>
    <Button @click="getBack">返回登陆</Button>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
    };
  },
  methods: {
    getBack() {
      this.$router.push('/')
    }
  }
};
</script>

<style lang="less" scoped>

</style>

<style lang="less">

</style>
