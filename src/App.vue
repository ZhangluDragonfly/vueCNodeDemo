<template>
  <div id="app"> 
  	<nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import navBar from './components/NavBar.vue';
export default {
  data () {
    return {
    }
  },
  components: {
  	navBar
  }
  ,
  methods: {}
};
</script>

<style>
body {
  /*font-family: Helvetica, sans-serif;*/
  font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  background-color: #eee;
}
</style>
