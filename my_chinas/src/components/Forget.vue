<template class="template-bg">
  <div class="forget">
    <mt-header fixed title="忘记密码" class="mt-heade-myheadre" >
      <mt-button  slot="left">
        <router-link to="/login" class="set-gear">
          <span class="iconfont font-color">&#xf0343;</span>
        </router-link>
      </mt-button>
    </mt-header>

    <!--由于有头部需要用一个高撑开 -->
    <p style="height: 48px;border-bottom: 0.03rem solid #c6c6c6"></p>
    <div class="login-box-size">
      <form >
        <div class="user-login-uesrname">
          <label>
            <span class="iconfont username-icon-size">&#xe65d;&nbsp;|&nbsp;</span>
            <input type="text" placeholder=" 手机号">
          </label>
        </div>
        <div class="user-login-password">
          <label>
            <span class="iconfont username-icon-size">&#xe828;&nbsp;|&nbsp;</span>
            <input type="password" placeholder="输入验证码 ">
            <button>获取验证码</button>
          </label>
        </div>
        <div class="user-login-password">
          <label>
            <span class="iconfont username-icon-size">&#xe689;&nbsp;|&nbsp;</span>
            <input type="password" placeholder="6-20 位字母、数字或符号 ">
          </label>
        </div>
        <div class="user-login-password">
          <label>
            <span class="iconfont username-icon-size">&#xe689;&nbsp;|&nbsp;</span>
            <input type="password" placeholder="请重新输入一遍新密码">
          </label>
        </div>
        <div class="user-login">
          <button type="button" @click="restpossword">重置</button>
        </div>
      </form>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'forget',
    data () {
      return {
        msg: ''
      }
    },
    methods:{
      restpossword:function(){
        this.$router.push("/Login")
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
  label{display: inline-block;background: #ffffff;width: 80%;border-radius: 0.1rem }
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
    position: relative;
  }
  .user-login{
    background: #eeeeee;padding:0.1rem 0.2rem 0.2rem 0.2rem;
  }
  .user-login button{
    width: 60%;height: 0.5rem;border-radius: 0.1rem;
    background: #fe8a00;border:none;outline: none;
    font-size: 0.25rem;color: #ffffff;font-weight: 400;
  }
  .user-login-password label button{
    width: 1.5rem;height: 0.4rem;position: absolute;right: 2rem;margin-top: 0.07rem;
    background: #ffffff; color:#d3903c ;border:0.01rem solid #d3903c;border-radius: 0.05rem;

  }
  .user-register input{display: inline;width: 0.3rem;height: 0.3rem;outline: none}
  .user-register span{font-size: 0.2rem}
  .user-register span a{text-decoration: none;color:#fe8a00}
</style>
