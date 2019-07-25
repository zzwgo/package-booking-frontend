<template>
  <div>
    <span id="a">菜鸟驿站</span>
    <a-button type="default" @click="changeList('ALL')">ALL</a-button>
    <a-button type="default" @click="changeList('已预约')">已预约</a-button>
    <a-button type="default" @click="changeList('已取件')">已取件</a-button>
    <a-button type="default" @click="changeList('未预约')">未预约</a-button>
    <a-button type="primary" @click="showModal">添加</a-button>
    <Modal :visible="visible" @cancle="handleCancel" />
  </div>
</template>
<script>
import Modal from "@/components/Modal";
export default {
  name: "Title",
  data: function() {
    return {
      visible: false
    };
  },
  components: {
    Modal
  },
  methods: {
    changeList(val) {
      this.$store.dispatch("setListFilter", val);
    },
    showModal() {
      this.visible = true;
    },
    handleCancel() {
      this.visible = false;
    }
  }
};
</script>

