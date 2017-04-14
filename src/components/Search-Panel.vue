<template>
  <div class="search-panel" v-bind:class="{fullScreen: fullScreen}" >
    <div class="search-input form-group">
      <input type="search" placeholder="Search" v-model="searchCity"  v-on:focus="setFocus" v-on:change="autoComplete">
      <button class="btn" v-show="fullScreen" v-on:click="setCancel">Cancel</button>
    </div> 

  </div>
</template>

<script>
export default {
  name: 'search-panel',
  data () {
    return {
      fullScreen: false,
      searchCity: ""
    }
  },
  computed:{

  },

  methods:{
    setFocus(){
      let self = this;
      self.fullScreen = true;
      console.log("fullScreen")
    },
    setCancel(){
      let self = this;
      self.fullScreen = false;
      self.searchCity = "";
      console.log("cancel");
    },
    autoComplete() {

    }
  }
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
.search-panel{
  background:#fff;
  position: relative;
  width:100;  
  height: auto;
  transition:all 200ms ease-in-out;
}
/*.search-panel.fullScreen{
  position: absolute;
  height: 100%;
  width:100%;
  left:0;
  top:0;
}*/
</style>
