<template>
  <div class="details">
    <mt-header fixed class="heder" title="商品详情">
      <router-link :to="{name:'info',params:{goodsID:res.goodsID}}" slot="left">
        <!-- 跳转-》首页 -->
        <mt-button class="text01"><span class="iconfont text01">&#xf0343;</span></mt-button>
      </router-link>
    </mt-header>

    <div class="text02"><p class="text03">产品展示</p></div>

    <div>
      <p class="bColor01"></p>
      <div v-for="item in imgs" class="img01">
        <img :src="item" alt="">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'details',
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
        this.imgs = eval(this.res.imgsUrl);
//        this.imgs = eval(this.res.goodsBenUrl);
        console.log(this.imgs)
      },()=>{
        alert("获取失败");
      })
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


  .text02{background-color: #3c510c;position: relative;padding: 0.15rem 0rem;height: 0.3rem;}
  .text03{color: #ffffff;position: absolute;left: 0.15rem;}

  .bColor01{height: 0.3rem;width: 100%;background-color: #9e9e9e;}
  .img01{padding:0.2rem;}
  .img01 img{width: 100%;}
</style>
