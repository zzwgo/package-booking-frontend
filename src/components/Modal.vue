<template>
  <a-modal
    title="包裹入库"
    :visible="visible"
    @ok="handleCreate"
    :confirmLoading="confirmLoading"
    @cancel="handleCancel"
  >
    <a-form :form="form">
      <a-form-item label="运单号：" :label-col="{ span: 5 }" :wrapper-col="{ span: 13 }">
        <a-input
          v-decorator="[
          'orderNumber',
          {rules: [{ required: true, message: '请输入运单号' }]}
        ]"
        />
      </a-form-item>
      <a-form-item label="收件人" :label-col="{ span: 5 }" :wrapper-col="{ span: 13 }">
        <a-input
          v-decorator="[
          'customerName',
          {rules: [{ required: true, message: '请输入姓名' }]}
        ]"
        />
      </a-form-item>
      <a-form-item label="电话" :label-col="{ span: 5 }" :wrapper-col="{ span: 13 }">
        <a-input
          v-decorator="[
          'phoneNum',
          {rules: [{ required: true, message: '请输入电话' }]}
        ]"
        />
      </a-form-item>
      <a-form-item label="重量" :label-col="{ span: 5 }" :wrapper-col="{ span: 13 }">
        <a-input
          v-decorator="[
          'weight',
          {rules: [{ required: true, message: '请输入重量' }]}
        ]"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this),
      confirmLoading: false
    };
  },
  props: {
    visible: Boolean
  },
  methods: {
    handleCreate() {
        const self=this
      this.form.validateFields((err, values) => {
        if (!err) {
          axios
            .post("http://localhost:8088/station/", values)
            .then(function(res) {
              self.$store.dispatch("getItemsFromBack");
            });
        }
      });
      this.handleCancel();
    },
    handleCancel(e) {
      this.$emit("cancle");
    }
  }
};
</script>