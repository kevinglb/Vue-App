<template>
  <div class="tabbar ">
      <div class="">
          <ul class="tab tabbar-tab">
            <li class="tab-item">
              <router-link to="/">Home</router-link>
            </li>
             <li class="tab-item">
              <router-link to="/aqi">AQI</router-link>
            </li>
             <li class="tab-item">
              <router-link to="/">Home</router-link>
            </li>
          </ul>
      </div>  
  </div>
</template>

<script>
import {mapState, mapGetters } from 'vuex'; 
export default {
  name: 'tabbar',
  data () {
    return {
      TabStatus: ""
    }
  },

  computed: {
    TabStatus: function(){
      this.$store.getters.TabBarStatus;
    }
  },
  created() {
    // // mapState({
    // //   TabStatus: state => state.Nav.TabBarStatus
    // // })
    // console.log(this.TabStatus);
  },
  mounted() {
    // ...mapState({
    //   TabStatus: state => state.Nav.TabBarStatus
    // }),
    this.TabStatus = this.$store.state.Nav.TabBarStatus;
    // ...mapGetters({
    //   TabStatus: state => state.getters.TabBarStatus
    // })
  },

  methods: {

  },

  updated(){
    //console.log(this.TabStatus) ;

  },

  watch: {
    TabStatus: function(){
      //console.log(this.TabStatus)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  width: 33%;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.tabbar {
 position: fixed;
 bottom: 0;
 left: 0;
 width:100%;
 height: 98px;
 border-top: 1px solid #E4E4E4;
 background-color: rgba(255,255,255,0.6);
 transition: all 300ms ease-in-out;
 transform: translate3d(0,0,0);
}

.tabbar.hide{
  transform: translate3d(0,88px,0);
}
.tabbar > div{
  height: 100%;
} 
.tabbar  ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap
}
.tabbar  ul li{
  line-height: 88px;
  font-size: 30px;
}

</style>
