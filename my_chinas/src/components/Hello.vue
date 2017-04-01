<template>
  <div class="hello">
    <mt-header fixed class="heder">
      <router-link to="/" slot="left">
        <!-- 跳转-》城市定位 -->
        <mt-button class="text01"><span class="iconfont text01">&#xe609;</span>郑州</mt-button>
      </router-link>
      <!-- 跳转-》热门搜索 -->
      <router-link to="/hot" slot="left" class="input01"><input type="text" placeholder="选择你喜欢的商品或商户"><span class="text02">商品</span><span
        class="iconfont text03">&#xe6e0;</span></router-link>
      <!-- 跳转-》分类 -->
      <mt-button slot="right" class="iconfont text01 text04" @click="classification">&#xe651;</mt-button>
    </mt-header>

    <mt-swipe :auto="3000" :show-indicators="true" class="swipe01">
      <mt-swipe-item><img src="../../static/imgaes/cbd.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../static/imgaes/muwu.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../static/imgaes/shuijiao.jpg" alt=""></mt-swipe-item>
    </mt-swipe>

    <div class="color01"></div>

    <mt-navbar v-model="selected">
      <mt-tab-item class="imgList">
        <img src="../../static/imgaes/1.png" alt="">
        <div>商&nbsp;&nbsp;场</div>
      </mt-tab-item>
      <mt-tab-item class="imgList">
        <img src="../../static/imgaes/2.png" alt="">
        <div>商&nbsp;&nbsp;圈</div>
      </mt-tab-item>
      <mt-tab-item class="imgList">
        <img src="../../static/imgaes/3.png" alt="">
        <div>超&nbsp;&nbsp;市</div>
      </mt-tab-item>
      <mt-tab-item class="imgList">
        <img src="../../static/imgaes/4.png" alt="">
        <div>美&nbsp;&nbsp;食</div>
      </mt-tab-item>
      <mt-tab-item class="imgList">
        <img src="../../static/imgaes/5.png" alt="">
        <div>头&nbsp;&nbsp;条</div>
      </mt-tab-item>
      <mt-tab-item class="imgList">
        <img src="../../static/imgaes/6.png" alt="">
        <div>沃商店</div>
      </mt-tab-item>
      <mt-tab-item class="imgList">
        <img src="../../static/imgaes/7.png" alt="">
        <div>附&nbsp;&nbsp;近</div>
      </mt-tab-item>
      <mt-tab-item class="imgList">
        <img src="../../static/imgaes/8.png" alt="">
        <div>我喜欢</div>
      </mt-tab-item>
    </mt-navbar>

    <div class="color01"></div>

    <div class="special01">
      <!-- 跳转至-》本周必逛 -->
      <router-link to="/week" class="stroll01"><img src="../../static/imgaes/01.png" alt=""></router-link>
      <router-link to="" class="stroll02"><img src="../../static/imgaes/02.png" alt=""></router-link>
      <router-link to="" class="stroll03"><img src="../../static/imgaes/03.png" alt=""></router-link>
      <div class="color02"></div>
    </div>

    <mt-cell is-link to="" class="products">
      <img src="../../static/imgaes/05.png" alt="">
      <h1>精品推荐</h1>
      <span style="color: orangered" class="iconfont">更多</span>
    </mt-cell>

    <div class="height01">

    </div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      value: '',
      selected:""
    }
  },
  methods:{
    classification() {
      this.$router.push('Classification');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heder {background-color: #ffffff;box-shadow: 0 0.1rem 0.2rem #000;border-bottom: 0.1rem solid #eeeeea;padding: 0.6rem 0rem;}
.heder .text01{color: #f0ad4e;margin-left: 0.2rem;font-size: 0.4rem;}
.heder .input01 input{border-color: #eeeeea;border-radius: 1rem;height: 0.6rem;width: 6rem;font-size: 0.2rem;margin-left: 0.3rem;padding-left: 1.3rem;outline: none;}
.heder .text02{color: gray;position: absolute;display: inline-block;
left: 2.1rem;font-size: 0.4rem;top: 0.5rem;}
.heder .text03{position: absolute;display: inline-block;right: 2rem;color: darkslategray;top: 0.4rem;font-size: 0.5rem;}
.heder .text04{margin-right: 0.5rem;}

.swipe01[data-v-71b87b1c]{height: 7rem;margin-top: -0.2rem;}
.swipe01 .mint-swipe-items-wrap{height: 7rem;}
.swipe01 img{width: 100%}
.swipe01 .mint-swipe-indicators{top: 4.5rem;}

.color01[data-v-71b87b1c]{width: 100%;height: 0.2rem;background-color: #e0e0e0;}

.mint-navbar[data-v-71b87b1c]{flex-wrap: wrap;background-color: inherit;margin-top: 0.2rem;}
.mint-navbar .imgList[data-v-71b87b1c]{margin: -0.3rem 0.7rem;}
.mint-navbar img{width: 1.2rem;}
.mint-navbar .mint-tab-item.is-selected{border-bottom: none;color: inherit;}

.special01[data-v-71b87b1c]{position: relative;height: 5.05rem;}
.special01 .stroll01 img[data-v-71b87b1c]{width: 5rem;position: absolute;left: 0;border-right: 0.1rem solid #e0e0e0;}
.special01 .stroll02 img{width: 6rem;position: absolute;left: 5.1rem;}
.special01 .stroll03 img{width: 6rem;position: absolute;left: 5.1rem;top: 2.4rem;}
.special01 .color02[data-v-71b87b1c][data-v-71b87b1c]{width: 100%;height: 0.2rem;background-color: #e0e0e0;position: absolute;bottom: 0rem;}

.products{position: relative;height: 1rem;}
.products img[data-v-71b87b1c]{position: absolute;width: 0.1rem;height: 0.5rem;left: 0.2rem;}
.products h1[data-v-71b87b1c]{position: absolute;left: 0.6rem;font-size: 0.5rem;color: #000000;}

.height01{height: 1.5rem;}
</style>
