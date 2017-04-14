<template>
  <div class="content">
    <SearchPanel></SearchPanel>
    <div class="hello">
      <button v-on:click="hideTab"></button>
    </div>
  </div>
</template>

<script>
import SearchPanel from '../components/Search-Panel.vue'
export default {
  name: 'aqi',
  data () {
    return {
      searchCity: "",
      toggled: false
    }
  },
  components: {
    'SearchPanel': SearchPanel
  },
  computed: {
    
  },

  methods: {
    hideTab() {
      console.log("click");
      this.$store.commit("toggleTabBarStatus", !this.toggled);
      this.toggled = !this.toggled;
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
