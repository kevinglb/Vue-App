<template>

  <div class="content">
    <div class="navbar"> 
      <button class="nav-btn nav-left-btn"></button>
      <h1 class="nav-title">ToDo List</h1>
      <button class="nav-btn nav-right-btn" v-on:click="showAddPop" :disabled="visibleList == 'donelist'"><span class="glyphicon glyphicon-plus-sign"></span></button>
    </div>
    <div class="panel-content">
      <div class="panel-wrap">
        <button v-on:click="toggleListContent" v-bind:class="{'active': visibleList === 'undonelist'}">Undone List</button>
        <button v-on:click="toggleListContent" v-bind:class="{'active': visibleList === 'donelist'}">Done List</button>
      </div>
    </div>
    <div class="list-content">
      <ul class="list-wrap" v-if="visibleList === 'undonelist'">
        <template v-for="item in UnDoneList">
          <li class="list-item">
          <div class="list-item-content">
            <p class="list-item-title">{{item.title}}</p>
            <p class="list-item-desc">{{item.desc}}</p>
            <span class="list-item-time">{{item.time.date}} {{item.time.time}}</span>
          </div>
          <div class="list-item-action">
            <button class="list-item-mark" data-mark="done">
                Mark As Done
            </button>
            <button class="list-item-delete">
                Delete
            </button>
          </div>
        </li>
        </template>
      </ul>
      <ul class="list-wrap" v-if="visibleList === 'donelist'">
       <template v-for="item in DoneList">
          <li class="list-item">
          <div class="list-item-content">
            <p class="list-item-title">{{item.title}}</p>
            <p class="list-item-desc">{{item.desc}}</p>
            <span class="list-item-time">{{item.time.date}} {{item.time.time}}</span>
          </div>
          <div class="list-item-action">
            <button class="list-item-mark" data-mark="done">
                Mark As Done
            </button>
            <button class="list-item-delete">
                Delete
            </button>
          </div>
        </li>
        </template>
      </ul>
    </div>
    <div class="popup popup-add-item" v-bind:class="{'show': showPop}">
      <div class="popup-content">
        <p class="popup-title">Add New Item</p>
        <div class="popup-input">
          <input type="text" placeholder="Title" v-model="newItemTitle" id="title-input"/>
          <textarea placeholder="Description" v-model="newItemDesc"></textarea>
        </div>
         <div class="popup-action">
            <button class="popup-cancel" v-on:click="hideAddPop">Cancel</button>
            <button class="popup-submit" v-on:click="addNewItem" :disabled="newItemTitle=='' && newItemDesc.length==''">Add</button> 
          </div>
      </div>    
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters } from 'vuex';
export default {
  name: 'todolist',
  data () {
    return {
      UnDoneList:  {},
      DoneList: {},
      visibleList: "undonelist",
      showPop: false,
      newItemTitle: "",
      newItemDesc: "",
      touchEvents:{"start": "touchstart", "move": "touchmove", "end": "touchend"}
    }
  },

  computed: {
    UnDoneList: function() {
      this.$store.getters.getUnDoneList
    },
    DoneList: function() {
      this.$store.getters.getDoneList
    }
  },

  created() {
    this.UnDoneList = this.$store.state.ToDoList.UnDoneList;
    this.DoneList = this.$store.state.ToDoList.DoneList;
    
  },
  mounted(){
    this.initTouchEvents();
  },  
  methods: {
    toggleListContent(e) {
      let self = this;
      if(e.target.classList.contains("active")){
        return;
      }
      self.visibleList = self.visibleList === "undonelist" ? "donelist" : "undonelist";
    },

    showAddPop(e) {
      this.showPop = true;
    },
    
    hideAddPop(e) {
      this.showPop = false;
      setTimeout(this.clearPopContent,500);
    },

    clearPopContent() {
      this.newItemTitle = "";
      this.newItemDesc = "";
    },

    getCurrentTime(){
      var s = {};
      var t = new Date();
      s.date = (t.getMonth() < 10 ? '0'+ (t.getMonth() + 1) : t.getMonth() + 1)  + '/' + (t.getDate() < 10 ? '0' + t.getDate() : t.getDate());
      s.time = (t.getHours() < 10 ? '0'+ t.getHours() : t.getHours())  + ':' + (t.getMinutes() < 10 ? '0' + t.getMinutes() : t.getMinutes());
      return s;
    },

    addNewItem() {
      this.$store.dispatch("ADD_NEW_ITEM",{
        'title': this.newItemTitle,
        'desc' : this.newItemDesc,
        'time' : this.getCurrentTime(),
        'type' : 'undone'
      });

      this.hideAddPop();
    },

    initTouchEvents() {
      var currentTarget = null,
          currentTouch = {};
      var ul = [].slice.call(document.querySelectorAll('.list-wrap'));
      
    
      function  touchStartHandler(e){
        e.preventDefault();
        
        
        console.log(currentTarget)
        currentTouch.startX = e.touches[0].clientX;
        currentTouch.startY = e.touches[0].clientY;
        currentTouch.touched = true;
        currentTouch.isScrolling = false;
        //console.log(currentTarget);
      }

      function touchMoveHandler(e) {
        e.preventDefault();
        currentTouch.moveX = e.touches[0].clientX;
        currentTouch.moveY = e.touches[0].clientY;
        console.log(currentTouch.moveX);
      }

      function touchEndHandler(e) {

      }

      ul.forEach(function(li, index){
        ul[index].addEventListener('touchstart', touchStartHandler.bind(ul[index]));
        ul[index].addEventListener('touchmove', touchMoveHandler.bind(ul[index]));
        ul[index].addEventListener('touchend', touchEndHandler.bind(ul[index]));
      });
    }

  },
  watch: {
    UnDoneList: function() {
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
.panel-content{
  height: 68px;
  padding: 5px 50px;
}
.panel-content .panel-wrap{
  width: 100%;
  margin: 0 auto;
  display: flex;
  height: 58px;
  border: none;
}
.panel-content .panel-wrap button{
  width: 50%;
  font-size:26px;
  background-color: transparent; 
  border:1px solid #e3e3e3;
}
.panel-content .panel-wrap button:first-child{
  border-bottom-left-radius: 7.5px;
  border-top-left-radius: 7.5px; 
}
.panel-content .panel-wrap button:last-child{
  border-bottom-right-radius: 7.5px;
  border-top-right-radius: 7.5px; 
}
.panel-content .panel-wrap button.active{
  color: #fff;
  background-color: #42b983;
  border-color: #42b983;
}
.list-content{
  border-top: 1px solid #e3e3e3;
  border-bottom:  1px solid #e3e3e3;
  overflow: scroll;
}
ul.list-wrap{
  position: relative;
  width: 750px;
}
.list-item{
  position: relative;
  width: 750px;
  height: 132px;
  line-height: 132px;
  margin: 0;
  border-bottom: 1px solid #e3e3e3;
}
.list-item:last-child{
  border-bottom: none
}

.list-item-content{
  position: relative;
  width: 100%;
  height: 100%;
  padding:20px 30px;
  text-align: left;
}
.list-item-content .list-item-title{
  font-size:30px;
}
.list-item-content .list-item-desc{
  font-size:24px;
  margin-top: 10px;
  color: #a1a1a1;
}
.list-item-content p{
  line-height: 1.5;
  text-overflow: ellipsis;
  white-space:nowrap;
  overflow: hidden;
}
.list-item-content .list-item-time{
  position: absolute;
  top:25px;
  right:30px;
  font-size:24px;
  line-height: 1.5  
}
.list-item-action{
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: auto;
  display: flex;
  z-index: -1;
}
.list-item-action button{
  position: relative;
  flex-direction: row;
  height: 100%;
  color: #fff;
  padding: 0 20px;
  font-size: 2rem;
}

button.list-item-mark{
  background-color: #42b983
}
button.list-item-delete{
  background-color: #f7072b
}
.popup-add-item{
  width: 540px;
  height: 700px;
  margin-top: -350px;
  margin-left: -270px;
}
</style>
