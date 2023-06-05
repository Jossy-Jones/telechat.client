import axios from "axios";

export default {
    namespaced: true,
    state: {
        token: null,
        user: null
    },
    
    getters: {
        authenticated(state) {
            if (state.token){
                console.log("valid")
                return true;
            }
            return false;
        },
        getAuth(state){
            return state.token;
        },
        getUser(state) {
            return state.user;
        },
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_USER(state, user) {
            state.user = user;
        }
    },

    actions: {
        async signUp({commit}, payload){
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_GATEWAY}/auth/sign-up`, payload, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json;charset=UTF-8"
                    },
                })
                const {succeeded, ...info} = response.data
                if(succeeded){
                    commit("SET_TOKEN", info.data.accessToken)
                    return {
                        succeeded: true,
                        message: info.message
                    }
                } else {
                    commit("SET_Token", null)
                    return{
                        succeeded: false,
                        message: info.message
                    }
                }
            } catch (error) {
                const {data} = error.response;
                return data;
            }
        },

        async signIn({commit}, payload){
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_GATEWAY}/auth/sign-in`, payload, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json;charset=UTF-8"
                    },
                });

                const {succeeded, ...info} = response.data
                if(succeeded){
                    commit("SET_TOKEN", info.data.accessToken)
                    return {
                        succeeded: true,
                        message: info.message,
                    }
                } else {
                    commit("SET_Token", null)
                    return{
                        succeeded: false,
                        message: info.message,
                    }
                }
            } catch (error) {
                const {data} = error.response;
                return data;
            }
        }
    }
}