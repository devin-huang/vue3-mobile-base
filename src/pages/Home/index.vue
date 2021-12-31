<template>
  <div class="home">
    <div ref="divDOM" class="mg_lf_25 mg_rt_25 devn">{{ name }}</div>
    <div class="mg_lf_25 mg_rt_25 devn">{{ age }}</div>
    <van-button type="primary" @click="clickBtn">
      主要按钮 {{ readersNumber }}
    </van-button>
    <CarInput />
  </div>
</template>

<script lang="ts">
import { common } from "@/servers";
import { defineComponent, ref, reactive, watch, computed, inject, toRefs } from "vue";
import CarInput from "@/components/CarInput/index.vue";

export default defineComponent({
  name: "Home",
  components: {
    CarInput,
  },
  setup() {
    // 主要定义变量方式（不建议使用ref）
    const state = reactive({
      name:'A',
      age:10,
    })
    // 获取全局公共属性
    const $query = inject("$query");
    // 获取DOM
    const divDOM = ref();
    const readersNumber = ref(1);
    const twiceTheCounter = computed(() => readersNumber.value * 2);

    const clickBtn = () => {
      readersNumber.value++;
      common.getUserAddressList({});
    };

    watch(readersNumber, (newValue, oldValue) => {
      console.log(
        "The new counter value is: " + readersNumber.value,
        newValue,
        oldValue
      );
    });
    return {
      ...toRefs(state),
      divDOM,
      $query,
      readersNumber,
      twiceTheCounter,
      clickBtn,
    };
  },
});
</script>
<style lang="scss" scoped></style>
