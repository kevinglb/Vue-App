import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default {
  getters:{
    getUnDoneList: (state) => {
      return state.UnDoneList.sort(function(a,b){
        if(new Date(a.time.date) !== new Date(b.time.date)){
          return new Date(a.time.date) > new Date(b.time.date);
        }
        return new Date(a.time.time) > b.time.time;
      });
    },

    getDoneList: (state) => {
      return state.DoneList.sort(function(a, b){
        if(new Date(a.time.date) !== new Date(b.time.date)){
          return new Date(a.time.date) > new Date(b.time.date);
        }
        return new Date(a.time.time) > b.time.time;
      });
    },
    UnDoneListLength: (state) => {return state.UnDoneList.length},
    // DoneListLength:(state) => {return state.DoneList.length},
  },

  state: {
    UnDoneList:[
      {"title": "Todo 1","desc": "Todo 1 Desc", "time": {'date': '05/12', 'time':"22:30"}},
      {"title": "Todo 2","desc": "Todo 2 Desc", "time": {'date': '05/12', 'time':"2:30"}},
      {"title": "Todo 3","desc": "Todo 3 Desc", "time": {'date': '04/12', 'time':"21:30"}},
      {"title": "Todo 4","desc": "Todo 4 Desc", "time": {'date': '05/11', 'time':"22:30"}},
      {"title": "Todo 5","desc": "Todo 5 Desc qwe wqeq ewqeq ewq ", "time": {'date': '05/02', 'time':"12:30"}},
    ],

    DoneList: [
        {"done ": "done  1","desc": "Todo 1 Desc", "time": {'date': '05/11', 'time':"12:30"}},
        {"title": "Todo 2","desc": "Todo 2 Desc", "time": {'date': '04/11', 'time':"07:30"}},
        {"title": "Todo 3","desc": "Todo 3 Desc", "time": {'date': '12/11', 'time':"03:30"}}
    ]
  },
  mutations: {
    insertItem(state,data){
      if(data.type === 'undone'){
        Object.assign({}, state.UnDoneList.push(data));
      }else{
        Object.assign({}, state.DoneList.push(data));
      }
    }
  },
  actions: {
    ADD_NEW_ITEM({commit}, data){
      commit('insertItem', data);
    }
  }
}
