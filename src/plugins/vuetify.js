import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: '#5C80BC',// changed
				secondary: '#b0bec5',
				accent: '#8c9eff',
				error: '#b71c1c',
			},
		},
	},
	icons: {
    iconfont: 'mdi', // default - only for display purposes
},
});
