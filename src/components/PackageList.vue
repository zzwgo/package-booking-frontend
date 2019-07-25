<template>
  <a-table
    :rowKey="record => record.orderNumber"
    bordered
    :dataSource="chooseStatusItems"
    :columns="columns"
  >
    <template slot="action" slot-scope="text, record">
      <a-popconfirm title="确定收货吗?" @confirm="() => changeStatus(record.orderNumber)">
        <a href="javascript:;">确认收货</a>
      </a-popconfirm>
    </template>
  </a-table>
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
  name: "packageList",
  mounted: function() {
    this.$store.dispatch("getItemsFromBack");
  },
  data: function() {
    return {
      columns,
      visible: false
    };
  },
  computed: {
    chooseStatusItems() {
      return this.$store.getters.chooseStatusItems;
    }
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    changeStatus(orderNumber) {
      const self = this;
      axios
        .patch("http://localhost:8088/station/" + orderNumber, {
          status: "已取件"
        })
        .then(function(res) {});
      self.$store.dispatch("setItemsStatus", {
        orderNumber: orderNumber,
        status: "已取件"
      });
    }
  }
};
</script>

