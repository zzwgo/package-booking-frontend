<template>
  <div class="home">
    <a-button type="primary" @click="manage">Manage</a-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'home',
  data() {
    return {
     items:Array
    };
  },
  methods:{
    manage(){
      const self=this
  axios
      .get("http://localhost:8088/station")
      .then(function(res){
        self.items=res.data
         self.$store.dispatch('initItems',self.items)
      });
  // console.log( self.items)
       this.$router.push({ path: `/Manage` });
      
    }
  }
}
</script>
<style>
body{
  text-align: center
}
</style>

