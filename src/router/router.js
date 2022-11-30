import { createRouter, createWebHashHistory } from "vue-router";
const NotFound = () => import("../components/NotFound.vue");
const Home = () => import("../components/Home.vue");
const Article = () => import("../components/Article.vue");
const routes = [
  {
    path: "/",
    component: Home,
  },
  { path: "/article/:id", name: "article", component: Article },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
