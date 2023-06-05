import store from "../store";

export const Authenticated = (to, from, next)=>{
    const auth_routes = ["Sign-in", "Sign-up", "Forgot-Password", "Reset-Password"]
    // Check if a user is logged in and in an Auth page
    if((auth_routes.includes(to.name)) && store.getters['auth/authenticated']){
        next({name: "Home"})
    }
    // If a user is not logged in and in a secured page
    else if(to.matched.some(record => record.meta.requiresAuth) && !store.getters['auth/authenticated']){
        next({name:"Sign-in"});
    } else {
        next()
    }
}