<template>
  <div id="app">
    <span slot="left" class="goBack" v-show="falg" @click="goBack">
      <mt-button class="flex">
        <img src="../static/img/history.png" title="" alt="">
      </mt-button>
    </span>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      falg:true
    }
  },
  methods: {
    goBack() {
      if (this.$route.path == "/index") {
        return;
      } else {
        this.$router.go(-1);
      }
    }
  },
  watch: {
    "$route.path": function(newVal, oldVal) {
      if (newVal == "/index") {
        this.falg = false;
      } else {
        this.falg = true;
      }
    }
  },
  created(){
    
  }
}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html{
  font-size: 62.5%;
}
.flex {
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
}
.flex-justify{
  justify-content: space-between;
  align-items: center;
}
.img-responsive{
  display: block;
  max-width: 100%;
  height: auto;
}
.text-center {
  text-align: center;
}
.container {
  position: relative;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active,.v-move {
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
}
.v-leave-active{
  position: absolute;
}
#app{
  position: relative;
  .goBack{
    position:absolute;
    z-index:999;
    top: 6px;
    left: 12px;
    color:#191919;
    label{
      display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
    }
    button{
      background: #fff;
      box-shadow: none;
      font-size: 2.6rem;
      color: #191919;
      justify-content: center;
      flex-direction: column;
    }
  }
}
</style>
