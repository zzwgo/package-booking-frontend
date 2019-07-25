<template>
  <div>
    <a-layout>
      <a-layout-header>
        <span id="titile"></span>
        <div>
          <a-button type="default">ALL</a-button>
          <a-button type="default" >已预约</a-button>
          <a-button type="default" >已取件</a-button>
          <a-button type="default" >未预约</a-button>
          <a-button size="large" type="primary">+add</a-button>
        </div>
      </a-layout-header>
      <a-layout-content>
        <a-table
          :rowKey="record => record.orderNumber"
          bordered
          :dataSource="getItems"
          :columns="columns"
        >
          <template slot="action" slot-scope="text, record">
            <a-popconfirm title="确定收货吗?" @confirm="() => changeStatus(record.orderNumber)">
              <a href="javascript:;">确认收货</a>
            </a-popconfirm>
          </template>
        </a-table>
      </a-layout-content>
    </a-layout>
  </div>
</template>
<script>
import axios from "axios";
const columns = [
  {
    title: "运单号",
    dataIndex: "orderNumber",
    width: "20%"
  },
  {
    title: "收件人",
    dataIndex: "customerName",
    width: "20%"
  },
  {
    title: "电话",
    dataIndex: "phoneNum",
    width: "20%"
  },
  {
    title: "状态",
    dataIndex: "status",
    width: "20%"
  },
  {
    title: "预约时间",
    dataIndex: "getTime",
    width: "20%"
  },
  {
    title: "Action",
    width: "30%",
    scopedSlots: { customRender: "action" }
  }
];
export default {
  name: "",
  mounted: function() {
    const self = this;
    axios.get("http://localhost:8088/station").then(function(res) {
      self.items = res.data;
      self.$store.dispatch("initItems", self.items);
    });
    this.$router.push({ path: `/Manage` });
  },
  data: function() {
    return {
      columns
    };
  },
  computed: {
    getItems() {
      return this.$store.getters.getItems;
    }
  },
  methods: {
    changeStatus(orderNumber) {
      const self = this;
      axios
        .patch("http://localhost:8088/station/" + orderNumber, {
          status: "已取件"
        })
        .then(function(res) {
        })
       self.$store.dispatch("setItemsStatus", {
         orderNumber:orderNumber,
         status:"已取件"
       });
    }
  }
};
</script>

<style>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
#titile {
  float: left;
}
</style>
