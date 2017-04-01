<template>
  <div class="personage">
    <mt-header fixed title="个人中心" class="mt-heade-myheadre" >
      <mt-button  slot="left">
        <router-link to="/userinfo" class="set-gear">
          <span class="iconfont font-color">&#xf0343;</span>
        </router-link>
      </mt-button>
    </mt-header>
    <p style="height: 48px;border-bottom: 0.03rem solid #c6c6c6"></p>
    <!--头像开始-->
    <div class="all-order-info">
      <router-link to="/" class="all-info-padding">
        <span class="all-font-shop">头像：</span>
        <div class="float-right">
          <span><img :src="hportrait" alt=""></span>
        </div>
      </router-link>
    </div>
    <!--第二部分-->
    <div class="all-order-info1">
      <router-link to="/personage" class="all-info-padding1">
        <span class="all-font-shop1"> &nbsp;昵称</span>
        <div class="float-right1">
          <span class="iconfont all-font-size-tow1">&#xf0344;</span>
        </div>
      </router-link>
    </div>
    <!--第三部分-->
    <div class="all-order-info1">
      <router-link to="/personage" class="all-info-padding1">
        <span class="all-font-shop1"> &nbsp;性别</span>
        <div class="float-right1">
          <span class="iconfont all-font-size-tow1">&#xf0344;</span>
        </div>
      </router-link>
    </div>
    <!--第四部分-->
    <div class="all-order-info1">
      <router-link to="/personage" class="all-info-padding1">
        <span class="all-font-shop1"> &nbsp;手机号码</span>
        <div class="float-right1">
          <span class="iconfont all-font-size-tow1">&#xf0344;</span>
        </div>
      </router-link>
    </div>
    <!--第五部分-->
    <div class="all-order-info1">
      <router-link to="/personage" class="all-info-padding1">
        <span class="all-font-shop1"> &nbsp;重置账号密码</span>
        <div class="float-right1">
          <span class="iconfont all-font-size-tow1">&#xf0344;</span>
        </div>
      </router-link>
    </div>
    <div style="height: 0.1rem;background: #e3e3e3"></div>
    <!--第六部分-->
    <div class="all-order-info1">
      <router-link to="/personage" class="all-info-padding1">
        <span class="all-font-shop1"> &nbsp;我的收获地址</span>
        <div class="float-right1">
          <span class="iconfont all-font-size-tow1">&#xf0344;</span>
        </div>
      </router-link>
    </div>
    <!--退出当前账号-->
    <div class="user-login">
      <button type="button" @click="exit">退出当前账号</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personage',
  data () {
    return {
      msg: '我是个人中心',
      hportrait:""
    }
  },
//  获取本地头像
  mounted:function(){
    var json=JSON.parse(localStorage.getItem("name"));
    this.hportrait=json.userimg
  },
methods:{
  exit:function(){
    localStorage.removeItem("name");
    this.$router.push("/userinfo")

  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mt-heade-myheadre{background: #ffffff;color: #000000;font-size: 0.16rem}
  .font-color{color: #8a8a8a;font-size: 0.12rem;font-weight: bold;}
  .set-gear{text-decoration:none; }

  .all-order-info{
    height: 1.4rem;
    background: #ffffff;color: #000000;font-size: 0.16rem;
    border-bottom: 0.01rem solid #e0e0e0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

  }

  .all-info-padding{padding: 0.1rem;text-decoration:none;}
  .float-right{float: right;margin-top: 0.5rem;color: #869193;font-size: 0.25rem}
  .all-font-shop{font-size: 0.35rem;color: #000000;line-height: 1.4rem;}
  .float-right span img{ width: 1rem;height: 1rem;border-radius: 1rem;margin-top: -0.25rem}
  .all-order-info1{
    height: 1rem;
    background: #ffffff;color: #000000;font-size: 0.14rem;
    border-bottom: 0.01rem solid #e0e0e0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

  }

  .all-info-padding1{padding: 0.1rem;text-decoration:none;}
  .float-right1{float: right;margin-top: 0.5rem;color: #869193;font-size: 0.25rem}
  .all-font-shop1{font-size: 0.35rem;color: #000000;line-height: 1rem;}
  .float-right1 span img{ width: 1rem;height: 1rem;border-radius: 1rem;margin-top: -0.25rem}
  .user-login{
    background: #ffffff;padding:0.1rem 0.2rem 0.2rem 0.2rem;text-align: center;
  }
  .user-login button{
    width: 80%;height: 0.8rem;border-radius: 0.1rem;
    background: #fe8a00;border:none;outline: none;
    font-size: 0.25rem;color: #ffffff;font-weight: 400;
  }
</style>
