<template>
  <div class="userinfo">
      <!--头部我的-->
      <mt-header fixed title="我的" class="mt-heade-myheadre" >
        <mt-button  slot="right">
          <router-link to="/setup" class="set-gear">
          <span class="iconfont font-color">&#xe66d;</span>
          </router-link>
        </mt-button>
      </mt-header>
      <!--由于有头部需要用一个高撑开-->
        <p style="height: 48px;"></p>
      <!--登录注册按钮-->
        <div class="regPhoto">
          <router-link to="/login" v-show="falsg1">
          <mt-button class="btn-yellow">登录注册</mt-button>
          </router-link>
        </div>
        <div class="regPhoto" v-show="falsg2">
          <router-link to="">
            <mt-button class="btn-yellow1"><img :src="userimg" alt=""><br>{{msg}}</mt-button>
          </router-link>
        </div>
      <!--弹性布局处理导航链接图标-->
        <div class="set-flex">
            <div class="set-son">
              <router-link :to="{name:'myorder',params:{selected1:introduction1,id1:num1}}" class="set-gear">
                <span class="iconfont son-icon-size">&#xe617;</span>
                <p class="son-font-style">待付款</p>
              </router-link>
            </div>
            <div class="set-son">
              <router-link :to="{name:'myorder',params:{selected1:introduction2,id1:num2}}" class="set-gear">
                <span class="iconfont son-icon-size">&#xe654;</span>
                <p class="son-font-style">待发货</p>
              </router-link>
            </div>
            <div class="set-son">
              <router-link :to="{name:'myorder',params:{selected1:introduction3,id1:num3}}" class="set-gear">
                <span class="iconfont son-icon-size">&#xe678;</span>
                <p class="son-font-style">待提货</p>
              </router-link>
            </div>
            <div class="set-son">
              <router-link :to="{name:'myorder',params:{selected1:introduction4,id1:num4}}" class="set-gear">
                <span class="iconfont son-icon-size">&#xe672;</span>
                <p class="son-font-style">待收货</p>
              </router-link>
            </div>
            <div class="set-son">
              <router-link :to="{name:'myorder',params:{selected1:introduction5,id1:num5}}" class="set-gear">
                <span class="iconfont son-icon-size">&#xe67a;</span>
                <p class="son-font-style">待评价</p>
              </router-link>
            </div>
      </div>
    <!--第四部分全部订单等-->
      <div class="all-order-info" @click="allorder ">
        <router-link to="/" class="all-info-padding">
          <div class="float-left">
              <span class="iconfont all-font-size-one">&#xe60c;</span>

          </div>
          <span class="all-font-shop">全部订单</span>
          <div class="float-right">
            <span>查看全部已购宝贝</span>
            <span class="iconfont all-font-size-tow">&#xf0344;</span>
          </div>
        </router-link>
      </div>
    <!--第二个开始-->
      <div class="all-order-info" @click="aporder ">
        <router-link to="/" class="all-info-padding">
          <div class="float-left-2">
            <span class="iconfont all-font-size-one">&#xe614;</span>

          </div>
          <span class="all-font-shop">预约订单</span>
          <div class="float-right">
            <span>查看全部预约订单</span>
            <span class="iconfont all-font-size-tow">&#xf0344;</span>
          </div>
        </router-link>
      </div>
    <!--第三个开始-->
    <div class="all-order-info" @click="woorder ">
      <router-link to="/" class="all-info-padding">
        <div class="float-left-3">
          <span class="iconfont all-font-size-one">&#xe60e;</span>

        </div>
        <span class="all-font-shop"> &nbsp;沃订单</span>
        <div class="float-right">
          <span class="iconfont all-font-size-tow">&#xf0344;</span>
        </div>
      </router-link>
    </div>
    <!--第四个开始-->
    <div class="all-order-info" @click="voucher">
      <router-link to="/" class="all-info-padding">
        <div class="float-left-4">
          <span class="iconfont all-font-size-one">&#xe62e;</span>

        </div>
        <span class="all-font-shop"> &nbsp;代金券</span>
        <div class="float-right">
          <span class="iconfont all-font-size-tow">&#xf0344;</span>
        </div>
      </router-link>
    </div>
    <div class="defout-gray"></div>
    <!--第五部分开始-->
    <div class="all-order-info" @click="sysmessages">
      <router-link to="/" class="all-info-padding">
        <div class="float-left-5">
          <span class="iconfont all-font-size-one">&#xe637;</span>

        </div>
        <span class="all-font-shop"> &nbsp;系统消息</span>
        <div class="float-right">
          <span class="iconfont all-font-size-tow">&#xf0344;</span>
        </div>
      </router-link>
    </div>
    <!--第六部分开始-->
    <div class="all-order-info"  @click="myfooter">
      <router-link to="/" class="all-info-padding">
        <div class="float-left-6">
          <span class="iconfont all-font-size-one">&#xe62a;</span>

        </div>
        <span class="all-font-shop"> &nbsp;我的足记</span>
        <div class="float-right">
          <span class="iconfont all-font-size-tow">&#xf0344;</span>
        </div>
      </router-link>
    </div>
    <!--第七部分开始-->
    <div class="all-order-info"  @click="selfcenter" >
      <router-link to="" class="all-info-padding">
        <div class="float-left-7">
          <span class="iconfont all-font-size-one">&#xe615;</span>

        </div>
        <span class="all-font-shop"> &nbsp;个人中心</span>
        <div class="float-right">
          <span class="iconfont all-font-size-tow">&#xf0344;</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userinfo',
  data () {
    return {
      msg: '',
//      头像
      userimg:"",
//      falsg1 代表登录/注册是否显示
      falsg1:true,
//      falsg2 代表 用户名字是否现在
      falsg2:false,
      introduction1:1,
      introduction2:2,
      introduction3:3,
      introduction4:4,
      introduction5:5,
      num1:1,
      num2:2,
      num3:3,
      num4:4,
      num5:5

    }
  },
  methods:{
    selfcenter:function(){
      if(localStorage.getItem("name")==null){
        this.$router.push("/login")
      }else {
        this.$router.push("/personage")
      }
    },
    allorder:function(){
      if(localStorage.getItem("name")==null){
        this.$router.push("/login")
      }else {
        this.$router.push("/allorder")
      }
    },
    aporder:function(){
      if(localStorage.getItem("name")==null){
        this.$router.push("/login")
      }else {
        this.$router.push("/aporder")
      }
    },
    woorder:function(){
      if(localStorage.getItem("name")==null){
        this.$router.push("/login")
      }else {
        this.$router.push("/woorder")
      }
    },
    voucher:function(){
      if(localStorage.getItem("name")==null){
        this.$router.push("/login")
      }else {
        this.$router.push("/voucher")
      }
    },
    sysmessages:function(){
      if(localStorage.getItem("name")==null){
        this.$router.push("/login")
      }else {
        this.$router.push("/sysmessages")
      }
    },
    myfooter:function(){
      if(localStorage.getItem("name")==null){
        this.$router.push("/login")
      }else {
        this.$router.push("/myfooter")
      }
    }
  },
  mounted:function(){
    if(localStorage.getItem("name")==null){
      this.falsg1=true;
      this.falsg2=false;
    }else {
      this.falsg1=false;
      this.falsg2=true;
      var json=JSON.parse(localStorage.getItem("name"));
      this.msg=json.uesr;
      this.userimg=json.userimg;
      this.$router.push("/Userinfo")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mt-heade-myheadre{background: #ffffff;color: #000000;font-size: 0.16rem}
  .font-color{color: #8a8a8a;font-size: 0.16rem}
  .regPhoto{text-align: center;line-height: 3.36rem }
  .regPhoto{background-image: url("../../static/imgaes/mybj1.png");
    background-repeat: no-repeat;
  }
  .btn-yellow{background:#fe8a00;color: #ffffff;width: 3.15rem;height: 0.9rem;border-radius: 0.1rem;font-size: 0.3rem }
  .btn-yellow1{background:yellowgreen;color: #ffffff;width: 2rem;
    height: 2rem;border-radius: 2rem;font-size: 0.2rem ;
    margin-bottom: 2rem;text-align: center;
  }
  .btn-yellow1 img{width: 1rem;height: 1rem;border-radius: 1rem}
  .set-gear{text-decoration:none; }
  .set-flex{
    display: flex;
    padding: 0.1rem 0.2rem 0.2rem 0.2rem;
    flex-flow: wrap row;
    justify-content:space-between;
    text-align: center;
    border-bottom: 0.01rem solid #e0e0e0;
    background: #ffffff;
  }
  .set-son{ flex: 1; }
  .son-icon-size{font-size: 0.7rem;color: #979797;}
  .son-font-style{font-size: 0.25rem;color: #000000;font-weight:400}
  .all-order-info{
    height: 1.4rem;
    background: #ffffff;color: #000000;font-size: 0.16rem;
    border-bottom: 0.01rem solid #e0e0e0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

  }
  .float-left-size{width: 0.7rem;height: 0.7rem;border:0.01rem solid #000000;text-align: center;line-height: 0.7rem}
  .all-info-padding{padding: 0.1rem;text-decoration:none;}
  .float-left{float: left;font-size: 0.35rem;margin-top: 0.35rem;
               width: 0.7rem;height: 0.7rem;text-align: center;line-height: 0.7rem;
               background-color:#4f8eca;color: #ffffff }
  .float-right{float: right;margin-top: 0.5rem;color: #869193;font-size: 0.25rem}
  .all-font-size-tow{font-size: 0.35rem}
  .all-font-size-one{font-size: 0.5rem;}
  .all-font-shop{font-size: 0.35rem;color: #000000;line-height: 1.4rem;}
  .defout-gray{width: 100%;height: 0.2rem;background: #eeeeee}
  .float-left-2{float: left;font-size: 0.35rem;margin-top: 0.35rem;width: 0.7rem;height: 0.7rem;
               text-align: center;line-height: 0.7rem;
               background-color:#f77300;color: #ffffff }
  .float-left-3{float: left;font-size: 0.35rem;margin-top: 0.35rem;width: 0.7rem;height: 0.7rem;
    text-align: center;line-height: 0.7rem;
    background-color:#f1b305;color: #ffffff }
  .float-left-4{float: left;font-size: 0.35rem;margin-top: 0.35rem;width: 0.7rem;height: 0.7rem;
    text-align: center;line-height: 0.7rem;
    background-color:#f77300;color: #ffffff }
  .float-left-5{float: left;font-size: 0.35rem;margin-top: 0.35rem;width: 0.7rem;height: 0.7rem;
    text-align: center;line-height: 0.7rem;
    background-color:#cc3c36;color: #ffffff }
  .float-left-6{float: left;font-size: 0.35rem;margin-top: 0.35rem;width: 0.7rem;height: 0.7rem;
    text-align: center;line-height: 0.7rem;
    background-color:#add000;color: #ffffff }
  .float-left-7{float: left;font-size: 0.35rem;margin-top: 0.35rem;width: 0.7rem;height: 0.7rem;
    text-align: center;line-height: 0.7rem;
    background-color:#62a6e2;color: #ffffff }
</style>
