import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../pages/Home.vue"),
    },
    {
      path: "/color",
      component: () => import("../pages/Color.vue"),
    },
    {
      path: "/typography",
      component: () => import("../pages/Typography.vue"),
    },
  ],
});

export default router;
