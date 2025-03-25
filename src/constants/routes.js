// qui ci saranno le rotte
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/cv",
    name: "cv",
    component: () => import("../views/Cv.vue"),
  },
  {
    path: "/cl",
    name: "cl",
    component: () => import("../views/Cl.vue"),
  },
  {
    path: "/contatti",
    name: "Contatti",
    component: () => import("@/views/Contatti.vue"),
  },
];

export default new VueRouter({
  mode: "history", // rimuove l'# dall'URL
  routes,
});
