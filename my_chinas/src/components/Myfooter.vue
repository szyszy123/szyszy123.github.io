<template>
  <div class="myfooter">
    <mt-header fixed title="我的足迹" class="mt-heade-myheadre" >
      <mt-button  slot="left">
        <router-link to="/userinfo" class="set-gear">
          <span class="iconfont font-color">&#xf0343;</span>
        </router-link>
      </mt-button>
      <mt-button  slot="right" @click="clearinfo">
        <router-link to="" class="set-gear">
          <span class="iconfont font-color">&#xe66f;</span>
        </router-link>
      </mt-button>
    </mt-header>
    <p style="height: 48px;border-bottom: 0.03rem solid #c6c6c6"></p>
  </div>
</template>

<script>
export default {
  name: 'myfooter',
  data () {
    return {
      msg: '我是myfooter'
    }
  },
  methods:{
    clearinfo:function(){
      this.$messagebox.confirm(" ",'确定清空历史记录');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mt-heade-myheadre{background: #ffffff;color: #000000;font-size: 0.16rem}
  .font-color{color: #8a8a8a;font-size: 0.12rem;font-weight: bold;}
  .set-gear{text-decoration:none; }
</style>
