<template>
  <div class="all">
    <div class="header">系统界面</div>
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
                <Input
                  size="default"
                  search
                  enter-button
                  placeholder="快速搜索"
                />
              </div>
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>
                  项目管理
                </template>
                <MenuItem name="1-1">项目变更</MenuItem>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>
                  人事管理
                </template>
                <MenuItem name="2-1">工作交接申请</MenuItem>
                <MenuItem name="2-2">请假申请详情</MenuItem>
                <MenuItem name="2-3">出差申请详情</MenuItem>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  合同管理
                </template>
                <MenuItem name="3-1">全部合同</MenuItem>
              </Submenu>
            </Menu>
          </Sider>
          <Layout :style="{ padding: '0 24px 24px' }">
            <Breadcrumb :style="{ margin: '24px 0' }">
              <BreadcrumbItem>系统界面</BreadcrumbItem>
              <BreadcrumbItem>项目管理</BreadcrumbItem>
              <BreadcrumbItem>项目变更</BreadcrumbItem>
            </Breadcrumb>
            <Content
              :style="{
                padding: '24px',
                minHeight: '280px',
                background: '#fff',
              }"
            >
              <div>
                <div style="display: flex; padding-left: 80px">
                  <div
                    style="
                      color: red;
                      font-size: 20px;
                      padding-right: 5px;
                      padding-top: 5px;
                    "
                  >
                    *
                  </div>
                  <div style="font-size: 15px; padding-top: 5px;">
                    项目编号：
                  </div>
                  <Input style="width: 500px;"></Input>
                </div>
                <div
                  style="display: flex; padding-left: 80px; padding-top: 10px"
                >
                  <div
                    style="
                      color: red;
                      font-size: 20px;
                      padding-right: 5px;
                      padding-top: 5px;
                    "
                  >
                    *
                  </div>
                  <div style="font-size: 15px; padding-top: 5px">
                    项目标题：
                  </div>
                  <Input style="width: 500px"></Input>
                </div>
                <div
                  style="display: flex; padding-left: 80px; padding-top: 10px"
                >
                  <div
                    style="
                      color: red;
                      font-size: 20px;
                      padding-right: 5px;
                      padding-top: 5px;
                    "
                  >
                    *
                  </div>
                  <div style="font-size: 15px; padding-top: 5px">
                    项目状态：
                  </div>
                  <Select v-model="model1" style="width: 500px">
                    <Option
                      v-for="item in State"
                      :value="item.value"
                      :key="item.value"
                      >{{ item.label }}</Option
                    >
                  </Select>
                </div>
                <div
                  style="display: flex; padding-left: 80px; padding-top: 10px"
                >
                  <div
                    style="
                      color: red;
                      font-size: 20px;
                      padding-right: 5px;
                      padding-top: 5px;
                    "
                  >
                    *
                  </div>
                  <div style="font-size: 15px; padding-top: 5px">
                    项目进度：
                  </div>
                  <Select style="width: 500px">
                    <Option></Option>
                  </Select>
                </div>
                <div
                  style="display: flex; padding-left: 80px; padding-top: 10px"
                >
                  <div
                    style="
                      color: red;
                      font-size: 20px;
                      padding-right: 5px;
                      padding-top: 5px;
                    "
                  >
                    *
                  </div>
                  <div style="font-size: 15px; padding-top: 5px">
                    项目性质：
                  </div>
                  <Select style="width: 500px">
                    <Option></Option>
                  </Select>
                </div>
                <div
                  style="display: flex; padding-left: 80px; padding-top: 10px"
                >
                  <div
                    style="
                      color: red;
                      font-size: 20px;
                      padding-right: 5px;
                      padding-top: 5px;
                    "
                  >
                    *
                  </div>
                  <div style="font-size: 15px; padding-top: 5px">
                    客户名称：
                  </div>
                  <Input style="width: 500px"></Input>
                </div>
                <div
                  style="display: flex; padding-left: 95px; padding-top: 10px"
                >
                  <div
                    style="
                      color: red;
                      font-size: 20px;
                      padding-right: 5px;
                      padding-top: 5px;
                    "
                  >
                    *
                  </div>
                  <div style="font-size: 15px; padding-top: 5px">下单人：</div>
                  <Input style="width: 500px"></Input>
                </div>
                <div
                  style="display: flex; padding-left: 80px; padding-top: 10px"
                >
                  <div
                    style="
                      color: red;
                      font-size: 20px;
                      padding-right: 5px;
                      padding-top: 5px;
                    "
                  >
                    *
                  </div>
                  <div style="font-size: 15px; padding-top: 5px">
                    下单日期：
                  </div>
                  <Col span="12">
                    <DatePicker type="date" placeholder="Select date" style="width: 500px"></DatePicker>
                  </Col>
                </div>
                <div
                  style="display: flex; padding-left: 50px; padding-top: 10px"
                >
                  <div
                    style="
                      color: red;
                      font-size: 20px;
                      padding-right: 5px;
                      padding-top: 5px;
                    "
                  >
                    *
                  </div>
                  <div style="font-size: 15px; padding-top: 5px">
                    计划开始日期：
                  </div>
                  <Col span="12">
                    <DatePicker type="date" placeholder="Select date" style="width: 500px"></DatePicker>
                  </Col>
                </div>
                <div
                  style="display: flex; padding-left: 50px; padding-top: 10px"
                >
                  <div
                    style="
                      color: red;
                      font-size: 20px;
                      padding-right: 5px;
                      padding-top: 5px;
                    "
                  >
                    *
                  </div>
                  <div style="font-size: 15px; padding-top: 5px">
                    计划结束日期：
                  </div>
                  <Col span="12">
                    <DatePicker type="date" placeholder="Select date" style="width: 500px"></DatePicker>
                  </Col>
                </div>
                <div style="text-align:center; padding-top: 20px;">
                  <Button type="primary" style="font-size: 15px;">
                    <Icon type="md-checkmark-circle" />
                    提交变更
                  </Button>
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
      State: [
        {
          value: "完成",
          label: "完成",
        },
        {
          value: "进行中",
          label: "进行中",
        },
        {
          value: "未开始",
          label: "未开始",
        }
      ],
      model1: "",
    };
  },
};
</script>

<style lang="less" scoped>
.all {
  overflow: auto;
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
