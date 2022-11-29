import { createRouter, createWebHashHistory } from 'vue-router'
const NotFound = () =>
    import ('../components/NotFound.vue')
const Home = () =>
    import ("../layout/Layout.vue")


const routes = [
    { path: '/', component: Home },
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router