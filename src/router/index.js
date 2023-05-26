import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory("/"),
    routes: [
        {
            path: "/",
            name: "Home",
            meta: {
                requiresAuth: true,
            },
            component: ()=>import("../views/Home.vue")
        },
        {
            path: "/sign-in",
            name: "Sign-in",
            component: ()=>import("../views/Sign-in.vue"),
        },
        {
            path: "/sign-up",
            name: "Sign-up",
            component: ()=>import("../views/Sign-up.vue"),
        }
    ],
    scrollBehavior: (to, from, savedPosition)=>{
        return (savedPosition ? savedPosition : {top: 0});
    }
})

export default router;