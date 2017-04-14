import Vue from 'vue'
import vuex from 'vuex'
import AQI from './modules/AQI'
import Nav from './modules/Nav'
import ToDoList from './modules/ToDoList'
Vue.use(vuex)

export default new vuex.Store({
  modules: {
   Nav,
   AQI,
   ToDoList
  }
})
