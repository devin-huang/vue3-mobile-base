<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png" />
    <div class="mg_lf_25 mg_rt_25 devn">11111111</div>
    <van-button type="primary" @click="clickBtn">主要按钮</van-button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { common } from "@/servers";
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    const clickBtn = () => common.getUserAddressList({});
    return {
      clickBtn,
    };
  },
});
</script>
<style lang="scss" scoped></style>
