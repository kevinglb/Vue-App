<template>
  <div class="navbar navbar-light">
    <nav class="container">
      <div class="collapse navbar-collapse" id="bd-main-nav">
          <!-- <ul class="nav navbar-nav">
            <li class="nav-item">
              <router-link to="/">Home</router-link>
            </li>
             <li class="nav-item">
              <router-link to="/">Home</router-link>
            </li>
             <li class="nav-item">
              <router-link to="/">Home</router-link>
            </li>
             <li class="nav-item">
              <router-link to="/">Home</router-link>
            </li>
          </ul> -->
      </div>
    </nav>    
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
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
.navbar{
  height: 88px;
  margin: 0;
}
.navbar .nav > li{
  font-size:2rem;

}
</style>
