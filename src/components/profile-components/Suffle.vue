<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,700");

.card {
	/*width: 75px;*/
	height: 30px;
	float: left;
	margin-right: 5px;
	margin-bottom: 5px;
	border-radius: 2px;
}

.shuffleSlow-move {
	transition: transform 2s;
}

.shuffleMedium-move {
	transition: transform 1s;
}

.shuffleFast-move {
	transition: transform 0.5s;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}
.tech{
	padding:10px;
}

.tech-html{
	font-family: 'Barlow Semi Condensed', sans-serif;
	font-size: 32px;
	color: #e34f26;
	text-shadow: 2px 2px #FFA726;
}
.tech-css{
	font-family: 'Aldrich', sans-serif !important;
	font-size: 18px;
	color: #90A4AE;
	/*font-weight: bold;*/
}
.tech-vue{
	font-family: 'Roboto', sans-serif;
	font-size: 26px;
	color: #42b883;
	font-weight: bold;
}
.tech-django{
	font-family: 'Roboto', sans-serif;
	font-size: 20px;
	color: #092e20 ;
	font-weight: bold;
	text-shadow: 1px 1px #B9F6CA;
}
.tech-python{
	font-family: 'Roboto', sans-serif;
	font-size: 30px;
	color: #ffde57;
	font-weight: bold;
	text-shadow: -2px -2px #4584b6;
}
.tech-java{
	font-family: 'Aldrich', sans-serif !important;
	font-size: 16px;
	color: #f7df1e;
	font-weight: ;
}
.tech-jquery{
	font-family: 'Oswald', sans-serif;
	font-size: 20px;
	color: #0769ad;
	font-weight: ;
}
.tech-bootstrap{
	font-family: 'Aldrich', sans-serif !important;
	font-size: 16px;
	color: #7E57C2;
	font-weight: ;
}
.tech-linux{
	font-family: 'Barlow Semi Condensed', sans-serif;
	font-size: 16px;
	color: #dd4814;
	font-weight: ;
}
.tech-rest{
	font-family: 'Aldrich', ;
	font-size: 12px;
	color: #ff9500;
	font-weight: ;
}
.tech-git{
	font-family: 'Aldrich', ;
	font-size: 16px;
	color: #fca326;
	font-weight: bold;
}
.tech-json{
	font-family: 'Aldrich', ;
	font-size: 16px;
	color: #FF80AB;
	font-weight: bold;
}
.deck {
	justify-content: justify !important;
}

</style>
<template>
	<div id="suffle" class="deck">
		<!--  main logic -->
		<transition-group :name="shuffleSpeed" tag="div" class="deck">
			<div v-for="card in cards" :key="card.id"
			class="card">
			<span :class="'tech-'+card.suit.toLowerCase()" class="tech" >{{ card.suit }}</span>
		</div>
	</transition-group>

</div>
</template>
<script>
export default {
	data(){
		return {
			ranks: ['1', '2',],
			suits: ['HTML','css','django','Python',"vue","java script","jQuery","Bootstrap","Linux","git","json","REST"],
			
			cards: [],
			shuffleSpeed: 'shuffleSlow',
			shuffleTypes: ['Slow', 'Medium', 'Fast'],
			isDeckShuffled: false,
			shuffleCount: 0,
		}
	},
	created() {
		this.displayInitialDeck();
		setTimeout(()=>{
			this.shuffleDeck();
		},10);
	},  
	methods: {
		displayInitialDeck() {
			let id = 1;
			this.cards = [];

			for( let s = 0; s < this.suits.length; s++ ) {
				for( let r = 0; r < this.ranks.length; r++ ) {
					let card = {
						id: id,
						// rank: this.ranks[r],
						suit: this.suits[s]
					}
					this.cards.push(card);
					id++;
				}
			}

			this.isDeckShuffled = false;
			this.shuffleCount = 0;
		},
		shuffleDeck() {        
			for(let i = this.cards.length - 1; i > 0; i--) {
				let randomIndex = Math.floor(Math.random() * i);

				let temp = this.cards[i];
				this.$set(this.cards, i, this.cards[randomIndex]);
				this.$set(this.cards, randomIndex, temp);
			}

			this.isDeckShuffled = true;
			this.shuffleCount = this.shuffleCount + 1;

			setTimeout(()=>{
				this.shuffleDeck();
			},3000);
		}
	},
};
</script>

