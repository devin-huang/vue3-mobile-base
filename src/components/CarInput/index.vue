<template>
  <section class="car-input-contaniner">
    <div class="car-number-cell" @click="showCarKeyBoard">
      <!-- 普通车牌输入 -->
      <div
        v-for="(item, index) in carNumberObj.carNumber"
        :key="index"
        class="car-number-item"
        :class="{ actived: (item.keys ? item.keys.length : 0) === index }"
      >
        <div>{{ item.label }}</div>
      </div>
      <!-- 新能源车牌输入 -->
      <div class="car-number-item" :id="CAR_CODE_TYPE.ENERGY">
        {{ energy.energyCode.label }}
        <!-- <ParkImg :src="energy.energyImg" />
        <div >新能源</div> -->
      </div>
    </div>
    <!-- 输入板 -->
    <CarKeyBoard
      :keys="carNumberObj.keys"
      v-model:show="showKeyBoard"
      @change="hanldeCarKeyBoardChange"
    />
  </section>
</template>

<script lang="ts">
const CAR_CODE_TYPE = {
  NORMAL: 1,
  ENERGY: 2,
};

import { defineComponent, ref, reactive } from "vue";
import CarKeyBoard from "@/components/CarKeyBoard/index.vue";
import { provinceCode, keysCode } from "@/components/CarKeyBoard/keys";
export default defineComponent({
  name: "CarInput",
  props: {
    carNumber: {
      type: Array,
      default: () => new Array(7).fill({ label: null }),
    },
  },
  components: {
    CarKeyBoard,
  },
  setup(props) {
    let showKeyBoard = ref(false);
    // 新能源
    let energy = reactive({
      energyCode: { label: null },
      img: require("@/assets/images/new_energy.png"),
    });

    // 车牌基础配置
    let carNumberObj = reactive({
      carNumber: props.carNumber,
      keys: provinceCode as any[],
      type: CAR_CODE_TYPE.NORMAL,
    });

    const hanldeCarKeyBoardChange = (keys) => {
      // 新能源号码输入
      if (carNumberObj.type === CAR_CODE_TYPE.ENERGY) {
        energy.energyCode = keys;
        return false;
      }
      carNumberObj.carNumber = carNumberObj.carNumber.map((_, index) => {
        return {
          keys,
          label: keys[index] ? keys[index].label : null,
        };
      });
    };

    const showCarKeyBoard = (event) => {
      // 新能源
      if (+event.target.id === CAR_CODE_TYPE.ENERGY) {
        carNumberObj.type = CAR_CODE_TYPE.ENERGY;
        carNumberObj.keys = keysCode;
      }
      // 普通
      else {
        carNumberObj.type = CAR_CODE_TYPE.NORMAL;
        carNumberObj.keys = provinceCode;
      }
      showKeyBoard.value = true;
    };

    return {
      energy,
      CAR_CODE_TYPE,
      carNumberObj,
      showKeyBoard,
      showCarKeyBoard,
      hanldeCarKeyBoardChange,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base.scss";

.car-number-cell {
  display: flex;
  justify-content: center;
  align-content: center;
  .car-number-item {
    height: 80px;
    width: 80px;
    line-height: 80px;
    // border-bottom: thin solid $COLOR_PRIMARY;
    border: thin solid $COLOR_LIGHTGRAY;
    // padding: 15px;
    margin-left: 15px;
    margin-right: 15px;
    display: flex;
    justify-content: center;
    align-content: center;
    &.actived {
      border: thin solid $COLOR_PRIMARY;
    }
  }
}
</style>
