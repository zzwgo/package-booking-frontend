<template>
  <div id="user">
    <a-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"></a-col>
    <a-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">
        <CustomerForm></CustomerForm>
    </a-col>
    <a-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"></a-col>
  </div>
</template>

<script>
import CustomerForm from "@/components/CustomerForm";
export default {
  name: "Customer",
  components: { CustomerForm }
};
</script>