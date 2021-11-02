import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import menu01 from "./menu01";
import menu02 from "./menu02";
import menu03 from "./menu03";
import menu04 from "./menu04";
import menu05 from "./menu05";
import menu06 from "./menu06";
import menu07 from "./menu07";

//Vue가 router를 이용하게 하겠다.
Vue.use(VueRouter);

//routes : path와 컴포넌트를 매핑해줌
//상대 경로로만 표현해야한다.
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  ...menu01,
  ...menu02,
  ...menu03,
  ...menu04,
  ...menu05,
  ...menu06,
  ...menu07,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;