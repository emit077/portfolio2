<style>
.vue-typer .custom.char.typed {
	color: #FFFF;
	font-size: 1rem;
}
.vue-typer .custom.caret.typing {
	background-color: #009688;
}

.title-text{
	font-size: 60px;
	color: #ffff;
	font-weight: 400;
	line-height: 53px
}
.title-text:hover{
	color: #08fdd8;
	/*color: #81D4FA;*/
	font-size: 55px;
}
.color-pink{
	color:#0091EA !important;
}
.sub-text{
	color:#8d8d8d;
	font-family: 'Open Sans Condensed', sans-serif;
	letter-spacing: 3px;
	font-size: 11px
}
.contact-me-btn{
	font-family: 'Roboto', sans-serif;
	font-weight: 300;
	letter-spacing: 4px
}
.primary-logo{
	transform: rotate(-20deg);
	/*width:100%;*/
	height:90%;
	margin-top: -20px;
}
.logo-text{
	height: 60px;
	margin-bottom: -3px;
	margin-right: -5px;
}
</style>

<template>
	<v-container>	
		<v-row class="m-w-100" >
			<v-col md="6" sm="6" cols="12" class="px-0" data-aos="fade-left">
				<div>
					<div class="font-la-belle-auror" >	
						<div class="px-5">
							<p class="mb-5 pb-4 html-tag"> {{html_content[0]}}</p>
							<div class="pa-5">
								<p class="pt-5 mt-5 html-tag"> {{html_content[2]}}</p>
								<div class="pa-5 pt-0">
									<span v-for="(item,index) in introduction" :key="index" class="font-Oswald title-text">
										<span v-if="index==6" class="color-pink">
											<img src="../../assets/logo/logo1.png" alt="" class="logo-text">
										</span> 
										<span v-else>{{item}}</span> 
										<br v-if="index==2||index==10"></span>
										<span class="pt-5 html-tag"> {{html_content[3]}}</span>
										<p class="font-aldrich  sub-text mt-4"> Front End Developer / Back End Developer </p>
										<v-btn outlined color="#08fdd8" class="mt-5 sub-text"  @click="$router.push({name:'contactMe'})"> 
											<p class="contact-me-btn"> Contact me</p>
										</v-btn>
									</div>
								</div>
								<p class="pt-5 html-tag"> {{html_content[1]}}</p>
							</div>
							<p class="html-tag"> {{html_content[5]}}</p>
						</div>
					</div>
				</v-col>
				<v-col md="6" sm="6" cols="12" data-aos="fade-right">
					<v-row align="center" justify="center" class="m-h-100">
						<v-col md="12">
							<img src="../../assets/logo/logo1.png" alt="" class="primary-logo">
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-container >	
	</template>	

	<script>
	export default {
		components: {
			// Animation: () => import('./Animation.vue'),
		},
		data() {
			return {
				html_content:["<body>","</body>","<h1>","</h1>","<html>","</html>" ],
				introduction:["H","i","," ," I","'","m "," A","m","i","t",",","w","e","b ","d","e","v","e","l","o","p","e","r","." ]

			}
		},
	// created: function(){
	// 	window.addEventListener('scroll', this.handleScroll);
	// },
	// methods: {
	// 	clickedButton: function() {
	// 		console.log(this.$refs);
	// 		this.$refs.myButton.innerText = this.message;
	// 	},
	// 	handleScroll (event) {
	// 		console.log("event");
	// 		console.log(event);
	// 	}
	// },
}
</script>
