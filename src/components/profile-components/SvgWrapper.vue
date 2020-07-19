<style scoped>
.base {
	position: relative;
	/*left: 15%;*/
	/*top: 15%;*/
	width: 250px;
	height:250px;
	text-align: center;
	overflow: hidden;
}

.img {
	position: absolute;
	left: 17.5%;
	top: 17.5%;
	width: 65%;
	height: 65%;
	background-repeat: no-repeat;
	background-size: 80%;
	background-position: center;
	background-image: url("https://github.githubassets.com/images/modules/logos_page/Octocat.png");
}

.circle__spin7 {
	position: relative;
	left: -10%;
	top: -10%;
	width: 120%;
	height: 120%;
	transform: rotate(-60deg);
}

.circle__spin6 {
	position: absolute;
	left: -5%;
	top: -5%;
	width: 110%;
	height: 110%;
}

.circle__spin {
	position: absolute;
	width: 100%;
	height: 100%;
}

.circle__spin2 {
	position: absolute;
	left: 5%;
	top: 5%;
	width: 90%;
	height: 90%;
}

.circle__spin3 {
	position: absolute;
	left: 7.5%;
	top: 7.5%;
	width: 85%;
	height: 85%;
}

.circle__spin4 {
	position: absolute;
	left: 10%;
	top: 10%;
	width: 80%;
	height: 80%;
}

.circle__spin5 {
	position: absolute;
	left: 12.5%;
	top: 12.5%;
	width: 75%;
	height: 75%;
}

.svg {
	width: 100%;
	height: 100%;
	animation: spin 180s linear infinite;
}

.svg2 {
	width: 100%;
	height: 100%;
	animation: spin2 60s linear infinite;
}

.svg3 {
	width: 100%;
	height: 100%;
	animation: spin 60s linear infinite;
}

.svg4 {
	width: 100%;
	height: 100%;
	animation: spin2 100s linear infinite;
}

.svg6 {
	width: 100%;
	height: 100%;
	animation: spin6 20s linear infinite;
}

.circle7 {
	stroke-width: 0.5%;
	stroke-dasharray: 20%, 2%, 1%, 2%, 1%, 2%, 20%, 100%, 15%, 2%, 1%, 1%, 1%, 180%;
	fill: none;
	stroke: #6ae2e60e;
}

.circle6 {
	stroke-width: 0.5%;
	stroke-dasharray: 1%, 1%, 2%, 3% 20%, 10%, 10%, 180%;
	fill: none;
	stroke: #6ae2e625;
}

.circle {
	stroke-width: 1%;
	stroke-dasharray: 52%, 40%, 1%, 5%, 1%, 1%;
	fill: none;
	stroke: #6ae2e641;
}

.circle12 {
	stroke-width: 1%;
	stroke-dasharray: 52%, 40%, 3%, 5%;
	fill: none;
	stroke: #6ae2e613;
}

.circle2 {
	stroke-width: 2%;
	stroke-dasharray: 40%, 52%, 1%, 5%, 1%, 1%;
	fill: none;
	stroke: #f5c90379;
}

.circle22 {
	stroke-width: 2%;
	stroke-dasharray: 40%, 52%, 1%, 5%, 1%, 1%;
	fill: none;
	stroke: #f5c90334;
}

.circle3 {
	stroke-width: 2.5%;
	stroke-dasharray: 0%, 20%, 38%, 1%, 1%;
	fill: none;
	stroke: #a15003fa;
}

.circle32 {
	stroke-width: 2.5%;
	stroke-dasharray: 0%, 20%, 30%, 1%, 1%;
	fill: none;
	stroke: #a14f037a;
}

.circle4 {
	stroke-width: 0.8%;
	stroke-dasharray: 60%, 60%, 20%, 4%, 1%, 1%;
	fill: none;
	stroke: #971c1c;
}

.circle42 {
	stroke-width: 0.8%;
	stroke-dasharray: 60%, 60%, 20%, 4%, 1%, 1%;
	fill: none;
	stroke: #971c1c54;
}


.circle5 {
	stroke-width: 0.6%;
	stroke-dasharray: 2%, 4%, 0%, 30%, 1%, 2%, 1%, 2%, 60%, 30%, 8%;
	fill: none;
	stroke: #da411b94;
}

.circle52 {
	stroke-width: 0.6%;
	stroke-dasharray: 2%, 4%, 0%, 30%, 1%, 2%, 1%, 2%, 60%, 30%, 8%;
	fill: none;
	stroke: #da411b4d;
}

@keyframes spin {
	100% {
		transform: rotate(360deg);
	}
}

@keyframes spin2 {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(-360deg);
	}
}

@keyframes spin6 {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(-20deg);
	}

	100% {
		transform: rotate(0deg);
	}
}
</style>
<template>

	<div class="base">
		<div class="circle__spin">
			<svg class="svg">
				<circle class="circle" cx="50%" cy="50%" r="49%"></circle>
			</svg>
		</div>
		<div class="circle__spin">
			<svg class="svg" style="transform: rotate(-20deg);">
				<circle class="circle12" cx="50%" cy="50%" r="49%"></circle>
			</svg>
		</div>
		<div class="circle__spin2">
			<svg class="svg2">
				<circle class="circle2" cx="50%" cy="50%" r="49%"></circle>
			</svg>
		</div>
		<div class="circle__spin2" style="transform: rotate(-20deg);">
			<svg class="svg2">
				<circle class="circle22" cx="50%" cy="50%" r="49%"></circle>
			</svg>
		</div>
		<div class="circle__spin3">
			<svg class="svg3">
				<circle class="circle3" cx="50%" cy="50%" r="49%"></circle>
			</svg>
		</div>
		<div class="circle__spin3" style="transform: rotate(-20deg)">
			<svg class="svg3">
				<circle class="circle32" cx="50%" cy="50%" r="49%"></circle>
			</svg>
		</div>
		<div class="circle__spin4">
			<svg class="svg4">
				<circle class="circle4" cx="50%" cy="50%" r="49%"></circle>
			</svg>
		</div>
		<div class="circle__spin4" style="transform: rotate(-20deg);">
			<svg class="svg4">
				<circle class="circle42" cx="50%" cy="50%" r="49%"></circle>
			</svg>
		</div>
		<div class="circle__spin5">
			<svg class="svg3">
				<circle class="circle5" cx="50%" cy="50%" r="49%"></circle>
			</svg>
		</div>
		<div class="circle__spin5" style="transform: rotate(-20deg);">
			<svg class="svg3">
				<circle class="circle52" cx="50%" cy="50%" r="49%"></circle>
			</svg>
		</div>
		<div class="circle__spin6">
			<svg class="svg6">
				<circle class="circle6" cx="50%" cy="50%" r="49%"></circle>
			</svg>
		</div>
		<div class="circle__spin7">
			<svg class="svg6">
				<circle class="circle7" cx="50%" cy="50%" r="49%"></circle>
			</svg>
		</div>
		<div class="img">
		</div>
	</div>
</template>