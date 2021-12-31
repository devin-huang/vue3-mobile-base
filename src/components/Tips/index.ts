/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Toast } from "vant";

export const show = (text: string) => {
  Toast.loading({
    duration: 0, // 持续展示 toast
    forbidClick: true,
    message: text || "加载中....",
  });
};

export const close = () => {
  Toast.clear();
};
