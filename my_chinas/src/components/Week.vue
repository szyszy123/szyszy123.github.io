<template>
  <div class="week">
    <mt-header fixed class="heder" title="本周必逛">
      <router-link to="/" slot="left">
        <!-- 跳转-》首页 -->
        <mt-button class="text01"><span class="iconfont text01">&#xf0343;</span></mt-button>
      </router-link>
    </mt-header>

    <mt-navbar v-model="selected" @click.native="weekDiscount(selected,linenumbers)">
      <mt-tab-item id="1">折扣</mt-tab-item>
      <mt-tab-item id="2">新品</mt-tab-item>
      <mt-tab-item id="3">冬衣</mt-tab-item>
    </mt-navbar>

    <mt-swipe :auto="3000" :show-indicators="true" v-model="selected">
      <mt-swipe-item  v-for="item in res"><img :src="item.goodsListImg" alt="" width="100%"></mt-swipe-item>
    </mt-swipe>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <!-- 跳转至-》商品信息 -->
        <mt-cell v-for="item in res" :to="{name:'info',params:{goodsID:item.goodsID}}">
          <img :src="item.goodsListImg" alt=""><p class="text01">{{ item.goodsName }}</p><h2 class="text02">{{ item.discount }}折</h2><h3 class="text03">￥{{ item.price }}</h3>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="item in res" :to="{name:'info',params:{goodsID:item.goodsID}}">
          <img :src="item.goodsListImg" alt=""><p class="text01">{{ item.goodsName }}</p><h2 class="text02">{{ item.discount }}折</h2><h3 class="text03">￥{{ item.price }}</h3>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="item in res" :to="{name:'info',params:{goodsID:item.goodsID}}">
          <img :src="item.goodsListImg" alt=""><p class="text01">{{ item.goodsName }}</p><h2 class="text02">{{ item.discount }}折</h2><h3 class="text03">￥{{ item.price }}</h3>
        </mt-cell>
      </mt-tab-container-item>
      </mt-tab-container-item>
    </mt-tab-container>



  </div>
</template>

<script>
export default {
  name: 'week',
  data () {
    return {
     msg: '',
     selected: "1",
     linenumbers:'10',
     res:'',
    }
  },
  mounted:function () {
    this.weekDiscount(this.selected,this.linenumbers);
  },
  methods:{
    weekDiscount:function (selectedID,linenumbers) {
       this.$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php",{params:{classID:selectedID,pageCode:'',linenumber:linenumbers}})
         .then(callback=>{
           console.log(callback);
           this.res = callback.body;
           console.log(this.res);
         },()=>{
             alert("获取失败");
         })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{background-color: #e0e0e0;}
  body>*{background-color: #ffffff;}
  .mint-header.is-fixed[data-v-739a6784]{color: #000000;background-color:#ffffff;font-size: 0.6rem;height: 1.2rem;line-height: 1.2rem;box-shadow: 0 0.1rem 0.2rem #e0e0e0;border-bottom: 0.1rem solid #eeeeea;padding: 0.6rem 0rem;}
  .mint-header .iconfont{font-size: 0.6rem;margin-left: 0.5rem;}

  .mint-navbar{height: 1rem;line-height: 1rem;display: flex;}
  .mint-navbar .mint-tab-item-label{font-size: 0.4rem;margin-top: -0.15rem;color: #0d3349;height: 0.5rem;}
  .mint-navbar .mint-tab-item.is-selected{border-bottom: 0.03rem solid #ffc107;color: #ff9e07;}

  /*轮播图*/
  .mint-swipe{height: 5rem;margin-top: 0.1rem;}

  .mint-cell{height: 2.5rem;display: -webkit-box;padding: 0.15rem 0rem;background-position: top;}
  .mint-cell img{width: 2.3rem;position: absolute;left: 0rem;top: 0rem;}
  .mint-cell .text01{position: absolute;top: 0.3rem;font-size: 0.4rem;left: 2.4rem;    color: #000;}
  .mint-cell .text02{color: red;}
  .mint-cell .text03{position: absolute;top: 1.75rem;font-size: 0.5rem;right: 0.45rem;color: orangered}
</style>
