<template>
  <div>
    <a-layout>
      <a-layout-header>
        <MyTitle />
      </a-layout-header>
      <a-layout-content>
       <PackageList/>
      </a-layout-content>
    </a-layout>
  </div>
</template>
<script>
import axios from "axios";
import MyTitle from "@/components/Title.vue";
import PackageList from "@/components/PackageList.vue";
export default {
  name: "",
  components: {
    MyTitle,
    PackageList
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
