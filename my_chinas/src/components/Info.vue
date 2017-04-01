<template>
  <div class="info">
    <mt-header fixed class="heder" title="商品信息">
      <router-link to="/week" slot="left">
        <!-- 跳转-》首页 -->
        <mt-button class="text01"><span class="iconfont text01">&#xf0343;</span></mt-button>
      </router-link>
      <router-link to="" slot="right">
        <!-- 跳转-》商铺 -->
        <mt-button class="text02"><span class="iconfont text01">&#xe654;</span></mt-button>
      </router-link>
      <router-link to="" slot="right">
        <!-- 跳转-》购物车 -->
        <mt-button class="text02"><span class="iconfont text01">&#xe6e4;</span></mt-button>
      </router-link>
    </mt-header>

    <mt-swipe :auto="3000" :show-indicators="true">
      <mt-swipe-item v-for="items in imgs"><img :src="items" alt="" width="100%"></mt-swipe-item>
    </mt-swipe>

    <mt-cell><h2 class="text03">{{ res.goodsName }}</h2></mt-cell>
    <mt-cell><h2 class="text03">{{ res.detail }}</h2></mt-cell>

    <mt-cell><h2 class="text03 text04">￥{{ res.price }}</h2></mt-cell>

    <mt-cell><h2 class="text03">全场包邮</h2></mt-cell>

    <!-- -》商品详情-->
    <mt-cell slot="right" :to="{name:'details',params:{goodsID:res.goodsID}}">
      <h2 class="text03 text05">查看商品详情</h2>
      <span class="iconfont">&#xf0344;</span>
    </mt-cell>
    <!-- -》评价-->
    <mt-cell slot="right">
      <h2 class="text03 text05">商品评价(1)</h2>
      <span class="iconfont">&#xf0344;</span>
    </mt-cell>

    <mt-cell>
      <h2 class="text03">规格:</h2>
      <div class="sml01">
        <span class="border01">S</span>
        <span class="border01">M</span>
        <span class="border01">L</span>
      </div>
    </mt-cell>
    <mt-cell>
      <h2 class="text03">颜色分类:</h2>
      <div class="sml01">
        <span class="border01">灰色</span>
        <span class="border01">蓝色</span>
      </div>
    </mt-cell>
    <mt-cell>
      <h2 class="text03">数量:</h2>
      <div class="sml01">
        <span class="border02">-</span>
        <span class="border02 border03">0</span>
        <span class="border02">+</span>
        <span class="border04">剩余：0</span>
      </div>
    </mt-cell>
    <div class="height01"></div>

    <mt-tabbar fixed>
      <div class="text06"><p class="text07">该商品已卖光</p></div>
      <mt-tab-item id="立即购买" class="bcolor01">
        <span class="bcolor01">立即购买</span>
      </mt-tab-item>
      <mt-tab-item id="加入购物车" class="bcolor01">
        <span class="bcolor01">加入购物车</span>
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
     msg: '0',
     res:'',
     imgs:[]
    }
  },
  mounted:function () {
    this.$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php",{params:{goodsID:this.$route.params.goodsID}})
      .then(callback=>{
        console.log(callback);
        this.res = callback.body[0];
        console.log(this.res)
        this.imgs = eval(this.res.goodsBenUrl);
        console.log(this.imgs)
      },()=>{
        alert("获取失败");
      })
  },
  methods:{

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{background-color: #e0e0e0;}
  body>*{background-color: #ffffff;}
  .mint-header.is-fixed{color: #000000;background-color:#ffffff;font-size: 0.6rem;height: 1.2rem;line-height: 1.2rem;box-shadow: 0 0.1rem 0.2rem #e0e0e0;border-bottom: 0.1rem solid #eeeeea;padding: 0.6rem 0rem;}
  .mint-header .iconfont{font-size: 0.6rem;margin-left: -1rem;}
  .mint-button--normal{width: 2.5rem;height: 2.6rem;}
  .text02[data-v-b9618184]{width: 1.6rem;margin-right: -0.5rem;}

  /*轮播图*/
  .mint-swipe-items-wrap{margin-top: -0.2rem;}
  .mint-swipe{height: 11rem;}

  .mint-cell{margin-top: -0.1rem;margin-bottom: -0.1rem;}
  .text03{position: absolute;left: 0.2rem;top: 0rem;}

  .text04{font-size: 0.6rem;color: orangered;margin-top: 0.3rem;}

  .text05{font-size: 0.5rem;}

  .sml01{position: absolute;left: 2.2rem;}

  .border01{display: inline-block;border: 0.01rem solid #9e9e9e;padding: 0.1rem 0.2rem;margin-left: 0.3rem;background-color: #ffffff;color: #9e9e9e;}

  .border02{display: inline-block;border: 0.01rem solid #9e9e9e;padding: 0.1rem 0.2rem;}
  .border03{padding: 0.1rem 0.4rem;border-right: none;border-left: none;}
  .border04{font-size: 0.35rem;margin-left: 0.4rem;}
  .height01{height: 2rem;}

  .bcolor01{background-color: #9a9ea3;color: #ffffff;height: 1rem;margin-top: -0.2rem;padding-top: 0.4rem;margin-bottom: -0.2rem;font-size: 0.4rem;display: inline-block;}
  .mint-tab-item-label[data-v-b9618184]{font-size: 0.4rem;}
  .text06{position: absolute;height: 0.1rem;width: 100%;top: -0.69rem;margin-bottom: -0.55rem;}
  .text07{background-color: #FF9700;padding: 0.2rem 0rem;color: #ffffff;font-size: 0.1rem;}
</style>
