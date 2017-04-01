<template>
  <div class="classification">
    <mt-header fixed class="heder" title="分类">
      <router-link to="/" slot="left">
        <!-- 跳转-》首页 -->
        <mt-button class="text01"><span class="iconfont text01">&#xf0343;</span></mt-button>
      </router-link>
    </mt-header>

    <mt-cell><p class="text02">全部</p></mt-cell>

    <mt-button v-for="item in array01">
      <img :src="'../../static/imgaes/'+item+'.png'">
    </mt-button>

  </div>
</template>

<script>
export default {
  name: 'classification',
  data () {
    return {
     msg: '0',
     array01:[]
    }
  },
  mounted(){
     this.array();
  },
  methods:{
    array(){
        for (let i = 0;i < 24; i++){
           this.msg = 11 + i;
           this.array01.push(this.msg)
        }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{background-color: #e0e0e0;}
  body>*{background-color: #ffffff;}
  .mint-header.is-fixed{color: #000000;background-color:#ffffff;font-size: 0.6rem;height: 1.2rem;line-height: 1.2rem;box-shadow: 0 0.1rem 0.2rem #e0e0e0;border-bottom: 0.1rem solid #eeeeea;padding: 0.6rem 0rem;}
  .mint-header .iconfont{font-size: 0.6rem;margin-left: -1rem;}

  .mint-cell-wrapper{-webkit-box-align: inherit;}
  .mint-cell[data-v-0d2d4714]{border-bottom: 0.01rem solid #9e9e9e;margin-bottom: 0.3rem;}
  .text02{position: absolute;left: 0.5rem;font-size: 0.5rem;}

  .mint-button-text img[data-v-0d2d4714]{width: 80%;}
  .mint-button--normal{width: 2.5rem;height: 2.6rem;}
</style>
