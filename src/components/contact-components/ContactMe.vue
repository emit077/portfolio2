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
.contact-data{
	font-weight: bold;
	font-size: 16px;
	padding: 5px;
}

@media screen and (max-width: 900px) {
	.contact-data{
		/*font-weight: bold;*/
		font-size: 14px;
		padding: 5px;
	}
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
									<span v-for="(item,index) in page_title" :key="index" class="font-Oswald page-title">
										<span >{{item}}</span> 
									</span>
									<span class="pt-5 html-tag"> {{html_content[3]}}</span>
									<div class="font-roboto white--text about-text">
										<p v-for="(item ,i) in items" :key="i"> 
											<v-icon color="#08fdd8">
												{{item.icon}}
											</v-icon>	
											<span class="contact-data">
												{{item.data}}
											</span>
										</p>
										<!-- <v-divider></v-divider> -->
										<div  class="pt-5 mt-5">
											<v-icon  v-for="(item,index) in social_media" :key="index" color="#08fdd8" class="pr-5">
												{{item.icon}}
											</v-icon>
										</div>
									</div>
								</div>
							</div>
							<p class="pt-5 html-tag"> {{html_content[1]}}</p>
						</div>
						<p class="html-tag"> {{html_content[5]}}</p>
					</div>
				</div>
			</v-col>
		<!-- 	<v-col md="6" sm="6" cols="12" data-aos="fade-right">
				<v-row align="center" justify="center" class="m-h-100">
					<v-col md="7">

					</v-col>
				</v-row>
			</v-col> -->
		</v-row>
	</v-container >	
</template>	

<script>
export default {
	components: {
	},
	data() {
		return {
			html_content:["<body>","</body>","<h1>","</h1>","<html>","</html>" ],
			page_title:["C","o", "n","t","a","c","t ","m","e"],
			items:[
			{data:" +91 8305050674",icon:"mdi-phone"},
			{data:" +91 8305050674",icon:"mdi-whatsapp"},
			{data:" emitsahu077@gmail.com",icon:"mdi-email-outline"},
			],
			social_media:[
			{icon:"mdi-github"  ,url:""},
			{icon:"mdi-linkedin",url:""},
			{icon:"mdi-facebook",url:""},
			]
		}
	},
}
</script>
