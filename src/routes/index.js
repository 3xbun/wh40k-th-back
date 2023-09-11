import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import CoreRules from "../views/CoreRules.vue";
import QuickStart from "../views/QuickStart.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/core-rules",
    name: "CoreRules",
    component: CoreRules,
  },
  {
    path: "/quick-start-guide",
    name: "QuickStart",
    component: QuickStart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;