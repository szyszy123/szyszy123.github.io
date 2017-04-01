<template>
  <div class="myorder">
    <mt-header fixed title="我的订单" class="mt-heade-myheadre" >
      <mt-button  slot="left">
        <router-link to="/userinfo" class="set-gear">
          <span class="iconfont font-color">&#xf0343;</span>
        </router-link>
      </mt-button>
    </mt-header>
    <p style="height: 48px;border-bottom: 0.03rem solid #c6c6c6"></p>
    <!--{{$route.params.selected1}}-->
    <mt-navbar v-model="selected">
      <mt-tab-item id="1" >待付款</mt-tab-item>
      <mt-tab-item id="2">待发货</mt-tab-item>
      <mt-tab-item id="3">待付款</mt-tab-item>
      <mt-tab-item id="4">待收货</mt-tab-item>
      <mt-tab-item id="5" >待评价</mt-tab-item>
    </mt-navbar>
 <div style="height: 0.05rem"></div>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 1" :title="'内容 ' + 1" :key="n.id"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 1" :title="'测试 ' + 2" :key="n.id" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 1" :title="'选项 ' + 3" :key="n.id"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <mt-cell v-for="n in 1" :title="'选项 ' + 4" :key="n.id"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
        <mt-cell v-for="n in 1" :title="'选项 ' + 5" :key="n.id"/>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
//  window.onload=function(){
//    this.$router.go(0)
//  }
export default {
  name: 'myorder',
  data () {
    return {
      selected:""
    }
  },

//  勾调函数执行传过来数据
  mounted:function(){
    this.selected =  this.$route.params.selected1.toString( )

    console.log(this.selected)
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mt-heade-myheadre{background: #ffffff;color: #000000;font-size: 0.16rem}
  .font-color{color: #8a8a8a;font-size: 0.12rem;font-weight: bold;}
  .set-gear{text-decoration:none; }
</style>
