<template>
  <div id="app">
    <router-view></router-view>

      <mt-tabbar v-model="selected" fixed v-show="$route.meta.navShow">
        <mt-tab-item id="首页" @click.native="hello({name:'Hello'})">
          <div slot="icon" class="iconfont">&#xe6e6;</div>
          首页
        </mt-tab-item>
        <mt-tab-item id="VIP">
          <div slot="icon" class="iconfont">&#xe6df;</div>
          VIP
        </mt-tab-item>
        <mt-tab-item id="广播">
          <div slot="icon" class="iconfont">&#xe637;</div>
          广播
        </mt-tab-item>
        <mt-tab-item id="购物车" @click.native="userinfo">
          <div slot="icon" class="iconfont">&#xe6e4;</div>
          购物车
        </mt-tab-item>
        <mt-tab-item id="我的" @click.native="userinfo">
          <div slot="icon" class="iconfont">&#xe66e;</div>
          我的
        </mt-tab-item>
      </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
      return {
        selected:'首页'
      }
  },
  methods:{
    userinfo(){
        this.$router.push('Userinfo')
    },
    hello(hello){
      this.$router.push(hello)
    }
  }
}
</script>
<!--<script src="./assets/rem/remformobile/js/adaptive-version3.js"></script>-->
<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*color: #2c3e50;*/
}

.mint-tabbar > .mint-tab-item.is-selected{color: #f44336;background-color: inherit;}
.mint-tabbar .iconfont{font-size: 0.6rem;}
</style>
