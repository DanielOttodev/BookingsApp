<template>
  <v-app>     
   <NavDrawer/>
     <v-content>         
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
//import Calendar from "./components/Calendar.vue";
//import Footer from './components/Footer.vue';
import NavDrawer from './components/NavDrawer.vue';
export default {
  name: 'App',
  components:{
    NavDrawer
  }
,
  data: () => ({
    //
  }),
};
</script>

<style>
#app{
font-family: Arial, Helvetica, sans-serif;
}
  
</style>