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
  },
];

const router = new VueRouter({
  routes
});
export default router;
