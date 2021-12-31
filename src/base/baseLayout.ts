/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import eventBus from "@/utils/eventBus";

const baseLayout = (page: any) => {
  return {
    ...page,
    created() {
      eventBus.on("AlivePage", (args: any) => {
        const { name, mode } = args;

        if (mode) {
          !this.keepAliveList.includes(name) && this.keepAliveList.push(name);
        } else {
          this.keepAliveList = this.keepAliveList.filter((v) => v !== name);
        }
      });
      page.created && page.created.call(this);
    },
  };
};

export default baseLayout;
