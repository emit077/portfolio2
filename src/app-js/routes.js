
// import LandingPage from "../components/LandingPage.vue"
// import NotFound404 from "./components/NotFound-404.vue"
// import MainBody from "../components/core-components/MainBody.vue"
import Base from "../components/core-components/Base.vue"

import Profile from "../components/profile-components/Profile.vue"
import AboutMe from "../components/profile-components/AboutMe.vue"
import TechnicalSkills from "../components/profile-components/TechnicalSkills.vue"

import ContactMe from "../components/contact-components/ContactMe.vue"



export const routes = [
// { path: '', component: Profile },
	{
		path: '/a', component: Base,redirect:{name:"profile"},
		children: [
		{ path: 'profile', component: Profile , name: 'profile' },
		{ path: 'about-me', component: AboutMe , name: 'aboutMe' },
		{ path: 'tech-skill', component: TechnicalSkills , name: 'techSkill' },
		{ path: 'contact-me', component: ContactMe , name: 'contactMe' },
		]
	},

	]