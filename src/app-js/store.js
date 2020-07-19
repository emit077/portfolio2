import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store =new Vuex.Store({
	state:{
		drawer:true,
		keys:{
		},
		const_messages:{
		}

	},
	getters:{
		keys:state =>{
			return state.keys;
		},
		messages:state=>{
			return state.const_messages;
		}
	},
	mutations: {
		setUser: state => {
			console.log(state)
		},
	},



});