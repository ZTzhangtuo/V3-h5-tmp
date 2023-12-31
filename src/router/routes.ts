import Layout from "@/layout/index.vue";
import type { RouteRecordRaw } from "vue-router";
import Demo from "@/views/demo/index.vue";
import Login from "@/views/login/login.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/s",
    name: "root",
    component: Layout,
    redirect: { name: "Demo" },
    children: [
      {
        path: "demo",
        name: "Demo",
        component: Demo,
        meta: {
          title: "主页"
        }
      },
      {
        path: "tools",
        name: "Tools",
        component: () => import("@/views/tools/index.vue"),
        meta: {
          title: "工具"
        }
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/about/index.vue"),
        meta: {
          title: "关于",
          noCache: true
        }
      }
    ]
  },
  {
    path: "/",
    name: "Login",
    component: Layout,
    redirect: { name: "login" },
    children: [
      {
        path: "index",
        name: "login",
        component: Login,
        meta: {
          title: "登录"
        }
      }
    ]
  }
];

export default routes;
