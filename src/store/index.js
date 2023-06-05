import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';

import auth from './auth'

const vuexLocal = new VuexPersistence({
	storage: window.localStorage,
});

export default createStore({
	state: {
		chatList: null,
		notifications: null,
	},
	getters: {
		getChats(state) {
			return state.chatList
		}
	},
	mutations: {
		SET_CHATLIST(state, chatlist){
			state.chatList = chatlist
		}
	},
	actions: {
		async fetchChatList({commit}){
			
		}
	},
	modules: {
		auth,
	},
	plugins: [vuexLocal.plugin]
})
