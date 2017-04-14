import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default {
  getters:{
    TabBarStatus: (state) => {return state.TabBarStatus},
    NavigationStatue:(state) => {return state.NavigationStatue}
  },

  state: {
    NavigationStatue: true,
    TabBarStatus: true
  },
  
  mutations: {
    toggleNavigationStatus(state,data){
      state.NavigationStatue = data;
    },
    toggleTabBarStatus(state,data){
      state.TabBarStatus = data;
    }
  },
  actions: {
  }
}
