<template>
  <NavBar/>
  <router-view />
</template>

<script>
import NavBar from './components/layout/NavBar.vue'


export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
@import '../node_modules/bulma';
html {
  background-color: #fff; 
  color: #000;
}

</style>
