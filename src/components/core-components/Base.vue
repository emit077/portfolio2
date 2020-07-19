<style type="text/css" media="screen">
@import url('../../app-css/common.css');
</style>
<template>
	<v-app>
		<!-- drawer -->
		<Drawer class="large-screen" />

		<!-- <Navbar /> -->

		<!-- Provides the application the proper gutter -->
		<v-container fluid class=" m-h-100 body-bg">

			<main-body />
		</v-container>

		<!-- <Footer/> -->
	</v-app>
	
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
	components: {
		// Navbar: () => import('./Navbar.vue'),
		Drawer: () => import('./Drawer.vue'),
		MainBody: () => import('./MainBody.vue'),
		// Footer: () => import('./Footer.vue'),
	},
	data () {
		return {
			// drawer: true,
		}
	},
}
</script>