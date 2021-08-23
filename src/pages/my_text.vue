<template>
  <div class="all">
    <div class="header">客户</div>
    <div class="layout">
      <Layout>
        <Layout>
          <Sider hide-trigger :style="{ background: '#fff' }">
            <Menu
              active-name="1-2"
              theme="light"
              width="auto"
              :open-names="['1']"
            >
            <div class="search">
               <Input size="default" search enter-button placeholder="快速搜索" />
            </div>
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>
                  客户列表
                </template>
                <MenuItem name="1-1">公海客户</MenuItem>
                <MenuItem name="1-2">垃圾客户</MenuItem>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>
                  线索
                </template>
                <MenuItem name="2-1">销售线索</MenuItem>
                <MenuItem name="2-2">公共线索</MenuItem>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  客户管理
                </template>
                <MenuItem name="3-1">信息管理</MenuItem>
              </Submenu>
            </Menu>
          </Sider>
          <Layout :style="{ padding: '0 24px 24px' }">
            <Breadcrumb :style="{ margin: '24px 0' }">
              <BreadcrumbItem>客户</BreadcrumbItem>
              <BreadcrumbItem >公海客户</BreadcrumbItem>
            </Breadcrumb>
            <Content 
              :style="{
                padding: '24px',
                minHeight: '280px',
                background: '#fff',
              }"
            >
              <div>
                <div>
                  姓名：
                  <Input size="small" style="width: 100px"></Input>
                </div>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
      
    </div>
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
    SeaClient () {
      console.log(this.message)
    }
  },
};
</script>

<style lang="less" scoped>
.all {
  .header {
    padding: 10px 20px 0px 20px;
    font-size: 18px;
    font-weight: bold;
    height: 8%;
  }
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: auto;
}
.search {
  margin-left: 10px;
  margin-right: 10px;  
  margin-top: 10px;
  font-size: 10px;
}

</style>

<style lang="less">
</style>
