import Home from "./components/home.vue";
import LR1 from "./components/LR1.vue";
import LR2 from "./components/LR2.vue";
import LR3 from "./components/LR3.vue";
import {createRouter, createWebHashHistory} from "vue-router";


const routes = [
    {path: '/', component: Home},
    {path: '/lr1', component: LR1},
    {path: '/lr2', component: LR2},
    {path: '/lr3', component: LR3},
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})