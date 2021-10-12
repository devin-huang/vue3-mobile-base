<template>
  <div class="home">
    <div class="mg_lf_25 mg_rt_25 devn">{{ book.title }}</div>
    <van-button type="primary" @click="clickBtn">
      主要按钮 {{ readersNumber }}
    </van-button>
    <CarInput />
  </div>
</template>

<script lang="ts">
import { common } from "@/servers";
import { defineComponent, ref, reactive, watch, computed } from "vue";
import CarInput from "@/components/CarInput/index.vue";

export default defineComponent({
  name: "Home",
  components: {
    CarInput,
  },
  setup() {
    const readersNumber = ref(1);
    const twiceTheCounter = computed(() => readersNumber.value * 2);
    const book = reactive({ title: "Vue 3 Guide" });

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
      book,
      readersNumber,
      twiceTheCounter,
      clickBtn,
    };
  },
});
</script>
<style lang="scss" scoped></style>
