<template>
  <div class="hot">
    <mt-header fixed class="heder">
      <router-link to="/" slot="left">
        <!-- 跳转-》首页 -->
        <mt-button class="text01"><span class="iconfont text01">&#xf0343;</span></mt-button>
      </router-link>
      <!-- 跳转-》搜索页面 -->
      <router-link to="" slot="left" class="input01"><input type="text" placeholder="选择你喜欢的商品或商户"><span class="text02">商品</span><span class="iconfont text03">&#xe6e0;</span></router-link>
      <mt-header slot="left" title="热门搜索" class="text04"></mt-header>
    </mt-header>

    <mt-cell><h2 class="text05">安踏</h2></mt-cell>
    <mt-cell><h2 class="text05">芒果</h2></mt-cell>
    <mt-cell><h2 class="text05">鳄鱼</h2></mt-cell>
    <mt-cell><h2 class="text05">必胜客</h2></mt-cell>
    <mt-cell><h2 class="text05">麦当劳</h2></mt-cell>
    <mt-cell><h2 class="text05">肯德基</h2></mt-cell>
    <mt-cell><h2 class="text05">真功夫</h2></mt-cell>
    <mt-cell><h2 class="text05">泰满冠</h2></mt-cell>

  </div>
</template>

<script>
export default {
  name: 'hot',
  data () {
    return {
     msg: '0',
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{background-color: #e0e0e0;}
  body>*{background-color: #ffffff;}
  .heder {background-color: #ffffff;box-shadow: 0 0.1rem 0.2rem #e0e0e0;border-bottom: 0.1rem solid #eeeeea;padding: 0.6rem 0rem;}
  .heder .text01{color: #6E6E6E;margin-left: 0.2rem;font-size: 0.6rem;}
  .heder .text02[data-v-04486a6d]{color: gray;position: absolute;display: inline-block;
  left: 1.5rem;font-size: 0.4rem;top: 0.5rem;}
  .heder .input01 input{border-color: #eeeeea;border-radius: 1rem;height: 0.6rem;width: 7.5rem;font-size: 0.2rem;margin-left: 0.3rem;padding-left: 1.3rem;outline: none;}
  .heder .text03{position: absolute;display: inline-block;right: 0.9rem;color: darkslategray;top: 0.5rem;font-size: 0.5rem;}
  .mint-header .text04[data-v-04486a6d]{width: 4rem;position: absolute;color: #5a5a5a;background-color: #ffffff;height: 0rem;top: 1.9rem;left: -1rem;}

  .mint-cell{top: 0.5rem;border-bottom: 0.01rem solid #e0e0e0;height: 1.5rem;}
  .text05{position: absolute;left: 0.4rem;top: 0.5rem;bottom: 0.2rem;}

</style>
