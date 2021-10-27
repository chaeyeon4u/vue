import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/menu01/exam01view',
    name:'menu01_exam01view',
    component:() => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam01View.vue')//상대 경로로만 표현
  },
  {
    path:'/menu01/exam02view',
    name:'menu01_exam02view',
    component:() => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam02View')//'index.vue'는 생략 가능
  },
  {
    path:'/menu01/exam03view',
    component:() => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam03View'),
    children: [
      {
        path="/menu01/subacomponent",
        component: () => import(/* webpackChunkName: "menu01" */ '../components/menu01/SubAComponent')
      },
      {
        path="/menu01/subbcomponent",
        component: () => import(/* webpackChunkName: "menu01" */ '../components/menu01/SubBComponent')
      }
    ]
  },
  {
    path: "/menu01/exam4view",
    component:() => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam04View'),
    children:[
      {
        path:"",
        components:[
          default: () => import(/* webpackChunkName: "menu01" */ '../components/menu01/SubAComponent'),
          rv1: () => import(/* webpackChunkName: "menu01" */ '../components/menu01/SubBComponent'),
          rv2: () => import(/* webpackChunkName: "menu01" */ '../components/menu01/SubCComponent')
        ]
      }
    ]
  }
]

//base -> 적지 않으면 '/'가 들어간다.
//routes -> path와 객체를 정의한 배열
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,  
  routes 
})

export default router
