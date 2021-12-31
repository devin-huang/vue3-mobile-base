<template>
  <van-image v-bind="{ ...attrs }" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CmImg",
  props: {},
  setup(props, context) {
    return { props, attrs: context.attrs };
  },
});
</script>

<style lang="scss" scoped></style>
