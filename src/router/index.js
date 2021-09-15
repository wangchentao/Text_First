import Vue from 'vue'
import VueRouter from 'vue-router'
import 'iview/dist/styles/iview.css'
import iView from 'iview'


Vue.use(iView)
Vue.use(VueRouter)

// 路由的数组
const routes = [
  {
    // 访问路径
    path: '/',
    component: () => import('@/pages/login'),
  },
  {
    // 访问路径
    path: '/home',
    component: () => import('@/pages/home'),
    children: [{
      path: '/people_message',
      component: () => import('@/pages/people_message')
    },{
      path: '/my_text',
      component: () => import('@/pages/my_text')
    },{
      path: '/personal_center',
      component: () => import("@/pages/personal_center")
    },{
      path: '/my_canvas',
      component: () => import("@/pages/my_canvas")
    },{
      path: '/manage',
      component: () => import("@/pages/manage")
    },{
      path: '/uniterming',
      component: () => import("@/pages/uniterming")
    },{
      path: '/multipleChoice',
      component: () => import("@/pages/multipleChoice")
    },{
      path: '/simulation',
      component: () => import("@/pages/simulation")
    },{
      path: '/text',
      component: () => import("@/pages/text")
    },{
      path: '/template',
      component: () => import("@/pages/template")
    }]
  },
];

const router = new VueRouter({
  routes
});
export default router;
