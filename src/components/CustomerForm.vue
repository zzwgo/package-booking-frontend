<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item label="运单号：" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'orderNumber',
          {rules: [{ required: true, message: '请输入运单号' }]}
        ]"
      />
    </a-form-item>
    <a-form-item label="取件时间" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-date-picker
        v-decorator="[
          'getTime',
          {rules: [{ required: true, message: '请输入时间' }]}
        ]"
        show-time
        format="YYYY-MM-DD HH:mm:ss"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="default" html-type="submit">预约</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit() {
      this.form.validateFields((err, values) => {
        let time = values["getTime"].format("YYYY-MM-DD HH:mm:ss");
        if (
          parseInt(time.substring(11, 13)) >= 9 &&
          parseInt(time.substring(11, 13)) <= 20
        ) {
          axios
            .patch("http://localhost:8088/station/" + values["orderNumber"], {
              status: "已预约",
              getTime: time
            })
            .then(function(res) {});
        }else{
             this.$message.error("预约失败", 5);
        }
      });
    }
  }
};
</script>