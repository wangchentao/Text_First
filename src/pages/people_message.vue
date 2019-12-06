<template>
  <div class="all">
    <div v-for="item in people" class="card" @click="cardMessage">
      <div class="people-name">{{item.name}}</div>
      <div class="see">点击查看</div>
    </div>

    <div class="card" @click="addCard">
      <div class="card-icon">
        <Icon type="md-add" />
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
      people: [
        {
          name: "王辰涛"
        },
        {
          name: "左琴"
        }
      ],
      columns: [
        {
          title: "姓名",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  },
  methods: {
    addCard() {
      this.people.push( this.people = [{
        name: "王辰涛"
      },{
        name: "左琴"
      },{
        name: "xxx"
      }])
    },
    cardMessage() {
      this.$Modal.confirm({
        title: "个人信息",
        render: h => {
          return h("Table", {
            props: {
              columns: this.columns,
              data: this.data
            }
          });
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.all {
  padding: 40px;
  display: flex;

  .card {
    width: 30%;
    height: 30%;
    background: #c5c8ce;
    margin-left: 40px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background: #808695;
    }

    .people-name {
      font-size: 24px;
      line-height: 80px;
      text-align: center;
      font-weight: bold;
    }

    .see {
      font-size: 14px;
      text-align: center;
      font-weight: bold;
    }

    .card-icon {
      font-size: 40px;
      text-align: center;
      line-height: 120px;
    }
  }
}
</style>

<style lang="less">
</style>
