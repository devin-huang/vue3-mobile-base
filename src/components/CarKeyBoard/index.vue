<template>
  <div class="action-sheet-contaniner">
    <van-action-sheet
      v-model:show="showSheet"
      safe-area-inset-bottom
      @closed="hanldeActionSheet(false)"
    >
      <div class="delete-btn flex" @click="hanldeActionSheet(false)">关闭</div>
      <div class="keys-content" @click="clickKeyNumber">
        <div class="keys-item" v-for="(item, index) in keysBoard" :key="index">
          <van-button type="default" :value="item.value">
            {{ item.label }}
          </van-button>
        </div>
        <div class="keys-item-delete">
          <van-button type="default" :value="INIT_KEY.DELETE">删除</van-button>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { isEmpty } from "@/utils/base";
import { provinceCode, keysCode } from "./keys";
export default defineComponent({
  name: "HelloWorld",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    keys: {
      type: Array,
      default: () => provinceCode,
    },
    limit: {
      type: Number,
      default: 7,
    },
    value: Number || String,
  },
  setup(props, context) {
    let showSheet = ref(false);
    let keysBoard = ref(props.keys) as any;
    let inputNumbers = [] as any[];
    const INIT_KEY = {
      DELETE: -1,
    };

    watchEffect(() => {
      keysBoard.value = props.keys;
      showSheet.value = props.show;
    });

    const clickKeyNumber = (e) => {
      // 键盘按键控制
      if (+e.target.value === INIT_KEY.DELETE) {
        inputNumbers.length > 0 && inputNumbers.pop();
      } else if (inputNumbers.length < props.limit) {
        inputNumbers.push({
          label: e.target.outerText,
          value: e.target.value,
        });
      }

      // 判断显示键盘类型（省简称、数字字母）
      if (inputNumbers.length >= 1) {
        keysBoard.value = keysCode;
      } else {
        keysBoard.value = provinceCode;
      }

      context.emit("change", inputNumbers);
    };
    const hanldeActionSheet = (value: boolean): void => {
      showSheet.value = value;
      inputNumbers = [];
      context.emit("update:show", value);
    };

    return {
      hanldeActionSheet,
      keysBoard,
      clickKeyNumber,
      INIT_KEY,
      showSheet,
    };
  },
});
</script>

<style lang="scss" scoped>
.keys-content {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  position: relative;
  .keys-item {
    box-sizing: border-box;
    flex: 0 0 16.667%;
  }
  .keys-item-delete {
    position: absolute;
    bottom: 5px;
    right: 15px;
    width: 29.5%;
    .van-button {
      height: 55px;
      width: 100%;
    }
  }
}
.delete-btn {
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
  padding-left: 15px;
}
.action-sheet-contaniner ::v-deep {
  .van-action-sheet__content {
    min-height: 590px;
  }
  .van-action-sheet {
    padding: 15px;
    border-radius: 0;
  }
  .keys-item {
    height: 75px;
    .van-button {
      height: 55px;
      // width: 100%;
    }
  }
}
</style>
