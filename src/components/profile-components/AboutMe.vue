<style scoped>
.page-title{
	font-size: 50px;
	color:#08fdd8;
}
.page-title:hover{
	font-size: 45px;
	/*color:#ffff;*/
}
.about-text{
	font-size: 14px;
}
.about-text p{
	margin-top: 15px !important;
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
									<span v-for="(item,index) in introduction" :key="index" class="font-Oswald page-title">
										<span >{{item}}</span> 
									</span>
									<span class="pt-5 html-tag"> {{html_content[3]}}</span>
									<span class="pt-5 html-tag"> {{html_content[6]}}"</span>

									<v-row align="center" justify="center" class="small-screen">
										<v-col md="7">
											<!-- <Animation/> -->
											<Lotties/>
										</v-col>
									</v-row>
									<span class="pt-5 html-tag">" {{html_content[7]}}</span>

									<div class="font-roboto white--text about-text">
										<p > 
											Professionally connected with the web development industry and information technology for many years.
										</p>
										<p>
											Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and, recently, English literature. A family person, father of two fractious boys, therefore remote employment is preferred.
										</p>
										<p>
											Interested in the entire frontend spectrum and working on ambitious projects with positive people.
										</p>
									</div>
									
								</div>
							</div>
							<p class="pt-5 html-tag"> {{html_content[1]}}</p>
						</div>
						<p class="html-tag"> {{html_content[5]}}</p>
					</div>
				</div>
			</v-col>
			<v-col md="6" sm="6" cols="12" data-aos="fade-right" class="large-screen">
				<v-row align="center" justify="center" class="m-h-100 large-screen">
					<v-col md="7">
						<Animation/>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container >	
</template>	

<script>
export default {
	components: {
		Animation: () => import('./Animation.vue'),
		Lotties: () => import('./Lotties.vue'),
	},
	data() {
		return {
			html_content:["<body>","</body>","<h1>","</h1>","<html>","</html>","<img src=","/>" ],
			introduction:["A","b", "o","u","t ","m","e"],

		}
	},
}
</script>
