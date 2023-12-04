import Home from "./components/home.vue";
import LR1 from "./components/LR1_and_2.vue";
import LR3 from "./components/LR3.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import LR4 from "./components/LR4.vue";


const routes = [
    {path: '/', component: Home},
    {path: '/lr1_and_2', component: LR1},
    {path: '/lr3', component: LR3},
    {path: '/lr4', component: LR4}
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})