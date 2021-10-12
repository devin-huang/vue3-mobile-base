import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "Home",
    component: () => import("@/pages/Home/index.vue"),
    meta: {
      title: "天虹停车缴费",
    },
  },
  {
    path: "/404",
    name: "empyt",
    component: () => import("@/pages/Empty/index.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
