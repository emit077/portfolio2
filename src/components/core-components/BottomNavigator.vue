<style>
.buttonDisabled:hover{
  background-color: transparent !important;
}
.bottom-nav .v-btn--active{
  background-color: #151414 !important;
  color: #08fdd8 !important;
}
.bottom-nav .v-btn--deactive{
  background-color: transparent !important;
  color: rgba(255, 255, 255, 0.7) !important;
}
.bottom-nav button{
  border-radius: 5px;
}
</style>

<template>
  <v-bottom-navigation
  v-model="bottomNav"
  background-color="#181818"
  class="bottom-nav"
  absolute
  dark
  fixed
  shift
  grow
  >
  <v-btn  :ripple="false" v-for="(item,i) in items" :key="i" @click="$router.push(item.url)"
  :class="$route.name==item.url.name?'v-btn--active':'v-btn--deactive'" >
    <span class="caption">{{item.title}}</span>
    <v-icon>{{item.icon}}</v-icon>
  </v-btn>
</v-bottom-navigation>
</template>


<script>
export default {
  data () {
    return {
      bottomNav: 3,
      items: [
      { title: 'Home',  isactive:false, icon: 'mdi-home' ,url:{name:'profile'}},
      { title: 'About',  isactive:false, icon: 'mdi-account' ,url:{name:"aboutMe"}},
      { title: 'Skills',isactive:false, icon: 'mdi-xml',url:{name:"techSkill"} },
      { title: 'Contact',isactive:false, icon: 'mdi-email-outline',url:{name:"contactMe"} },
      ],
    }
  },
}
</script>