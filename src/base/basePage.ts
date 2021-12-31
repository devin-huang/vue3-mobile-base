/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import eventBus from "@/utils/eventBus";
import { uuid } from "@/utils/base";

const generateName = () => {
  return `page_${uuid("")}`;
};

export default (page) => {
  // 初始化页面名称
  page.name = page.name || generateName();

  const baseMethods = {
    /**
     *  修改页面是否keep-alive
     */
    __changeAlivePage(mode) {
      if (!page.keepAlive) {
        return;
      }
      eventBus.emit("AlivePage", { name: page.name, mode });
    },
  };

  const payload = {
    ...page,
    mounted() {
      this.__changeAlivePage(true);
      page.mounted && page.mounted.call(this);
    },
    activated() {
      this.__changeAlivePage(true);
      page.activated && page.activated.call(this);
    },
    beforeRouteEnter(to, from, next) {
      if (page.beforeRouteEnter) {
        page.beforeRouteEnter.call(this, to, from, next);
      } else {
        next((weakThis) => {
          weakThis.__changeAlivePage(true);
        });
      }
    },
    beforeRouteLeave(to, from, next) {
      if (page.beforeRouteLeave) {
        page.beforeRouteLeave.call(this, to, from, next);
      } else {
        next();
      }
    },
    methods: {
      ...page.methods,
      ...baseMethods,
    },
  };

  return payload;
};
