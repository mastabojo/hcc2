import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import Shutters from './pages/Shutters.vue';
import Lights from './pages/Lights.vue';
import Calendar from './pages/Calendar.vue';
import Environment from './pages/Environment.vue';
import Weather from './pages/Weather.vue';
import Heating from './pages/Heating.vue';
import System from './pages/System.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/shutters',
            name: 'shutters',
            component: Shutters
        },
        {
            path: '/lights',
            name: 'lights',
            component: Lights
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: Calendar
        },
        {
            path: '/environment',
            name: 'environment',
            component: Environment
        },
        {
            path: '/weather',
            name: 'weather',
            component: Weather
        },
        {
            path: '/heating',
            name: 'heating',
            component: Heating
        },
        {
            path: '/system',
            name: 'system',
            component: System
        },
    ]
});

export default router;