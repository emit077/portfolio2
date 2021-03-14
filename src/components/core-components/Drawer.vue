<style type="text/css" media="screen">

/* add the  active color in the tab element */
.active-tab{
  color:#08fdd8 !important;

}
/* add the  inactive tab color in the tab element */
.tab{
  color:grey !important;
  text-decoration: none;
}

/* customize the list item height*/
.custome-list .v-list-item{
  /*min-height: unset !important;*/
}

/* tab test style*/
.tab-text{
  font-size: 10px;
}

/* allgn the tab container */
.tab-item{
  justify-content: center;
  margin: 2px;
  padding: 5px 8px !important;
}
.drawer-logo{
  height: 40px;

}
</style>

<template>
  <v-navigation-drawer color="#181818" v-model="$store.state.drawer"  app mini-variant class="large-screen" >
    <div class="black text-center">
      <v-list-item class="px-2">
        <img src="../../assets/logo/logo1.png" class="drawer-logo">
      </v-list-item>
      <small class="html-tag white--text ">
        <b>Amit</b>
      </small>
    </div>
    <v-divider></v-divider>
    <v-list nav dense class="custome-list px-0 text-center" >
      <div>
        <!-- <router-link  > -->
          <v-list-item 
          class="tab-item" 
          v-for="(item) in items" 
          :key="item.title"
          @click="$router.push(item.url)"
          :class="$route.name==item.url.name?'v-list-item--active':''"
          >
          <!-- :to="item.url" -->
          <div class="w-100">
            <v-icon :class="$route.name==item.url.name?'active-tab':'tab'" >{{item.icon}}</v-icon>
            <br>
            <p class="tab-text" v-if="item.isactive||$route.name==item.url.name" :class="$route.name==item.url.name?'active-tab':'tab'">
              {{item.title}}
            </p>
          </div>
        </v-list-item>
        <!-- </router-link> -->
      </div>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
      { title: 'Home',  isactive:false, icon: 'mdi-home' ,url:{name:'profile'}},
      { title: 'About',  isactive:false, icon: 'mdi-account' ,url:{name:"aboutMe"}},
      { title: 'Skills',isactive:false, icon: 'mdi-xml',url:{name:"techSkill"} },
      { title: 'Contact',isactive:false, icon: 'mdi-email-outline',url:{name:"contactMe"} },
      ],
    }
  },
  created(){
    console.log(this.$route)
  },
  method:{
    findActive(index){

      this.items[index].isactive=true;
    }
  }
}
</script>