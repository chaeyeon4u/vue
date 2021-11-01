export default[
  {
    path: "/menu04/exam01props",
    component: () => import(/* webpackChunkName: "menu04" */ "../views/menu04/Exam01Props"),
  },
  {
    path: "/menu04/exam01props/childa",
    component: () => import(/* webpackChunkName: "menu04" */ "../views/menu04/Exam01Props/ChildA"),
  },
  {
    path: "/menu04/exam02eventemit",
    component: () => import(/* webpackChunkName: "menu04" */ "../views/menu04/Exam02EventEmit"),
  },
  {
    path: "/menu04/exam03inject",
    component: () => import(/* webpackChunkName: "menu04" */ "../views/menu04/Exam03Inject"),
  },
  {
    path: "/menu04/exam04ref",
    component: () => import(/* webpackChunkName: "menu04" */ "../views/menu04/Exam04Ref"),
  },

];