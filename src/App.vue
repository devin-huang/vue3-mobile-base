<template>
<!-- VUE3：用于 <transition> 和 <keep-alive> 包裹路由组件 -->
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'" mode="out-in">
      <keep-alive :include="keepAliveList">
        <component :is="Component" :key="route.path" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import baseLayout from "@/base/baseLayout";

export default defineComponent(
  baseLayout({
    setup() {
      const state = reactive({
        keepAliveList: ["Home", "PaymentList"],
      });

      return { ...toRefs(state) };
    },
  })
);
</script>
<style lang="scss">
@import "./assets/scss/base.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
