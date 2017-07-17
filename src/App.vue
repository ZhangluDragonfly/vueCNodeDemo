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
  font-family: Helvetica, sans-serif;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  background-color: #eee;
}
</style>
