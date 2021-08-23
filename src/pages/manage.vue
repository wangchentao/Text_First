<template>
  <div class="all">
    <div class="header">外包合同</div>
    <Divider />
    <div style="display: flex">
      <div style="padding-left: 30px">
        <Input placeholder="搜索关键词"></Input>
      </div>
      <div style="padding-left: 30px">
        <Select placeholder="项目状态" style="width: 150px"></Select>
      </div>
      <div style="padding-left: 30px">
        <Select placeholder="项目类型" style="width: 150px"></Select>
      </div>
      <div style="padding-left: 30px">
        <Select placeholder="PM" style="width: 150px"></Select>
      </div>
      <div style="padding-left: 30px">
        <Select placeholder="总价" style="width: 150px"></Select>
      </div>
      <div style="padding-left: 30px">
        <Button type="primary">
          <Icon type="ios-search" />
          查询
        </Button>
      </div>
    </div>
    <Divider />
    <div style="display: flex">
      <div style="padding-left: 30px">
        <Button type="primary" style="width: 75px">
          <Icon style="font-size: 13px" type="md-add" />
          添加
        </Button>
      </div>
      <div style="padding-left: 30px">
        <Button style="width: 70px">
          <Icon type="md-cloud-download" />
          导入
        </Button>
      </div>
      <div style="padding-left: 30px">
        <Button style="width: 70px">
          <Icon type="md-cloud-upload" />
          导出
        </Button>
      </div>
      <div style="padding-left: 30px">
        <Button style="width: 100px">
          <Icon type="md-sync" />
          分配项目
        </Button>
      </div>
    </div>
    <div style="padding: 20px 10px 0px 10px">
      <Table style="margin-bottom: 20px" border ref="selection" :columns="columns" :data="data1"></Table>
      <Button @click="handleSelectAll(true)">全选</Button>
      <Button @click="handleSelectAll(false)">反选</Button>
      <Select style="width: 100px">更多操作</Select>
    </div>
    <div class="manage"></div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: "项目编号",
          key: "number",
        },
        {
          title: "项目进度",
          key: "schedule",
        },
        {
          title: "项目经理",
          key: "PM",
        },
        {
          title: "发起时间",
          key: "date",
        },{
          title: "项目状态",
          key: "status",
        },{
          title: "总价",
          key: "price",
        }
      ],
      data1: [
        {
          number: "XM20190324010001",
          schedule: "任务完成",
          PM: "李小磊",
          date: "2016-10-03",
          status: "已结算",
          price: "1000000"
        },
        {
          number: "XM20190324010001",
          schedule: "任务执行中",
          PM: "李小磊",
          date: "2016-10-03",
          status: "待结算",
          price: "128000000"
        },
        {
          number: "XM20190324010001",
          schedule: "任务完成",
          PM: "李小磊",
          date: "2016-10-03",
          status: "任务异常",
          price: "321000000"
        },
        {
          number: "XM20190324010001",
          schedule: "任务完成",
          PM: "李小磊",
          date: "2016-10-03",
          status: "已结算",
          price: "4328000000"
        },
      ],
    };
  },
  methods: {
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    },
  },
};
</script>

<style lang="less" scoped>
.all {
  // overflow: hidden;

  .header {
    padding: 10px 20px 0px 20px;
    font-size: 18px;
    font-weight: bold;
    height: 5%;
  }

  .manage {
    width: 100%;
    padding: 20px;
    text-align: center;
  }
}
</style>

<style lang="less">
</style>
