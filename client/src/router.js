import Vue from "vue";
import Router from "vue-router";
import PostComponent from "./components/PostComponent";
import Calendar from './components/Calendar';
import Settings from './components/Settings';
import Client from './views/Client';
//import Todos from "./components/Todos.vue";

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:"/",
            name:"index",
            component: PostComponent
        },
        {
            path:"/calendar",
            name:"calendar",
            component: Calendar
        },
        {
            path:"/settings",
            name:"settings",
            component: Settings
        },
        {
            path:"/clients",
            name:"clients",
            component: Client
        },
    ]
})