<style type="text/css" media="screen">
.nav-heading .v-list-item--link {
	color: #e9ebee !important;
	display: inline-block;


}

.nav-heading .v-list-item--link:after {
	content: '';
	width: 0px;
	height: 1px;
	display: block;
	background: #009688;
	transition: 300ms;
	transform-origin: 0% 50%;
}

.nav-heading .v-list-item{
	min-height: unset !important;
}
.nav-heading .v-list-item--link:hover:after {
	width: 100%;
}
.nav-heading .v-list-item--active{
	color: #009688 !important;
}
.nav-heading .v-list-item--active::after {
	background: #009688;
	width: 100% !important;
}	
.nav-heading .v-list-item--link::before{
	background-color: transparent !important;
}
</style>

<template>
	<v-app-bar color="blue-grey darken-4" dense dark  app elevate-on-scroll height="60">
		<v-app-bar-nav-icon @click="$store.state.drawer=!$store.state.drawer"></v-app-bar-nav-icon>
		<v-toolbar-title>Page title</v-toolbar-title>
		<v-spacer></v-spacer>
		<div v-for="item in items" :key="item.title" class="nav-heading large-screen" >
			<v-list-item   link :to="item.url" :ripple="false" >
				<v-list-item-content  class="py-1">
					<v-list-item-title class="font-italic subtitle-2 px-2" >
						{{ item.title }}
					</v-list-item-title>

				</v-list-item-content>
			</v-list-item>
		</div>
	</v-app-bar>
</template>	
<script>
export default {
	data () {
		return {
			items: [
			{ title: 'Home', active:true,url:{name:'profile' }, },
			{ title: 'About', active:false,url:{name:'aboutMe'}, },
			{ title: 'Contact', active:false,url:{name:'techSkill' }, },
			// { title: 'Contact', active:false,url:{name:'contactMe' }, },
			{ title: 'Hire me',active:false,url:"", },
			],
		}
	},
	methods: {
	},

}
</script>