<template class="template-bg">
  <div class="login">
    <mt-header fixed title="登录" class="mt-heade-myheadre" >
      <mt-button  slot="left">
        <router-link to="/userinfo" class="set-gear">
          <span class="iconfont font-color">&#xf0343;</span>
        </router-link>
      </mt-button>
    </mt-header>

    <!--由于有头部需要用一个高撑开 -->
    <p style="height: 48px;border-bottom: 0.03rem solid #c6c6c6"></p>
    <div class="login-box-size">
        <form :model="form" >
          <div class="user-login-uesrname">
            <label class="lable-input">
              <span class="iconfont username-icon-size">&#xe65d;&nbsp;|&nbsp;</span>
              <input type="text" placeholder=" 手机号" v-model="form.username">
            </label>
          </div>
          <div class="user-login-password">
            <label class="lable-input">
              <span class="iconfont username-icon-size">&#xe689;&nbsp;|&nbsp;</span>
              <input type="password" placeholder=" 密码" v-model="form.password">
            </label>
          </div>
          <div class="user-login">
              <button type="button" @click="onsubmit(form.username,form.password)">登录</button>
          </div>
          <div class="error-info" v-show="flagerror">
            <span>用户名或密码错误请从新输入</span>
          </div>
        </form>
      <div class="login-box-size">
        <router-link to="/register" class="login-register-left">立即注册</router-link>
        <router-link to="/forget"  class="login-register-right">忘记密码？</router-link>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      flagerror:false,
    form:{
      username:"",
      password:""
    }
    }
  },
  methods:{
    onsubmit:function(input1,input2){
      console.log("用户点击了")
      this.$http.get("http://datainfo.duapp.com/shopdata/userinfo.php",{params:{status:"login",userID:input1,password:input2}})
        .then(function(res){
          console.log(res)
          if( res.body==1||res.body==2){
            this.flagerror=true;
          }else{
           var str= JSON.stringify({uesr:input1,password:input2,userimg:res.body.userimg_url})
            localStorage.setItem("name",str)
            this.$router.push("/Userinfo")
          }
        },function(){
          alert("获取失败")
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mt-heade-myheadre{background: #ffffff;color: #000000;font-size: 0.16rem}
  .font-color{color: #8a8a8a;font-size: 0.12rem;font-weight: bold}
  .set-gear{text-decoration:none; }
  .login-box-size{padding: 0.4rem;text-align: center;background: #ffffff}
  .user-login-uesrname{background: #eeeeee;padding: 0.2rem}
  .lable-input{display: inline-block;background: #ffffff;width: 80%;border-radius: 0.1rem }
  .user-login-uesrname input{
    width: 80%;height:0.50rem;border-radius: 0.1rem;
    outline: none;
    border: none;
    text-indent:0.1rem;
    font-size:0.16rem;

  }
  .username-icon-size{font-size: 0.25rem ;}
  .user-login-password{background: #eeeeee;padding: 0.2rem}
  .user-login-password input{
    width: 80%;height:0.50rem;border-radius: 0.1rem;
    outline: none;
    border: none;
    text-indent:0.1rem;
    font-size:0.16rem;
  }
  .user-login{
    background: #eeeeee;padding:0.1rem 0.2rem 0.2rem 0.2rem;
  }
  .user-login button{
    width: 60%;height: 0.5rem;border-radius: 0.1rem;
    background: #fe8a00;border:none;outline: none;
    font-size: 0.25rem;color: #ffffff;font-weight: 400;
  }
  .login-register-left{float:left;color: #969696;text-decoration: none;}
  .login-register-right{float: right;color: #969696;text-decoration: none;}
  .error-info{color: red}
</style>
