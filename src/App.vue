<template>
  <div id="app">
    <!-- <Navigation></Navigation> -->
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import TabBar from './components/TabBar'
export default {
  name: 'app',
  components: {
    'Navigation': Navigation,
    'TabBar': TabBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:#fff;
  font-size:1.5rem
}
</style>
