import VueRouter from "vue-router";

import LogInPage from "@/views/LogInPage.vue";

const routes = [
  {
    path: "/",
    name: "LogIn",
    component: LogInPage,
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
