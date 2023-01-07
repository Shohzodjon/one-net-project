import { createRouter, createWebHistory } from "vue-router";
import routes from "./router";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
  routes,
});

export default router;
