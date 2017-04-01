<template class="template-bg">
  <div class="register">
    <mt-header fixed title="注册" class="mt-heade-myheadre" >
      <mt-button  slot="left">
        <router-link to="/login" class="set-gear">
          <span class="iconfont font-color">&#xf0343;</span>
        </router-link>
      </mt-button>
    </mt-header>

    <!--由于有头部需要用一个高撑开 -->
    <p style="height: 48px;border-bottom: 0.03rem solid #c6c6c6"></p>
    <div class="login-box-size">
      <form :model="form">
        <div class="user-login-uesrname">
          <label>
            <span class="iconfont username-icon-size">&#xe65d;&nbsp;|&nbsp;</span>
            <input type="text" placeholder=" 手机号"
                   v-model="form.username"
                   @change="bacomechange(form.username,form.password1,form.password2)">
          </label>
        </div>
        <div class="user-login-password">
          <label>
            <span class="iconfont username-icon-size">&#xe828;&nbsp;|&nbsp;</span>
            <input type="password" placeholder="输入验证码 ">
            <button >获取验证码</button>
          </label>
        </div>
        <div class="user-login-password">
          <label>
            <span class="iconfont username-icon-size">&#xe689;&nbsp;|&nbsp;</span>
            <input type="password" placeholder="6-20 位字母、数字或符号 "  v-model="form.password1">
          </label>
        </div>
        <div class="user-login-password">
          <label>
            <span class="iconfont username-icon-size">&#xe689;&nbsp;|&nbsp;</span>
            <input type="password" placeholder="请重新输入一遍新密码"
                   v-model="form.password2" @input="passwordchange(form.password1,form.password2)">
          </label>
        </div>
        <div class="user-register">
            <input type="checkbox" id="checkedbox" @click="auto">
            <span>我已同意阅读<a href="">用户协议</a></span>
        </div>
        <div class="user-login">
          <input type="button" value="注册"
                 id="registerbutton"
                 class="styleinput"
                 disabled=""
                 @click="onsubmit(form.username,form.password1,form.password2)">
        </div>
        <div class="error-info" v-show="flagerror">
          <span>网络延迟，请从新注册</span>
        </div>
        <div class="error-info1" v-show="flagerror1">
          <span>用户名已经被使用请从新输入</span>
        </div>
        <div class="error-info3" v-show="flagerror3">
          <span>两次密码不一致，请从新输入</span>
        </div>
        <div class="error-info2" v-show="flagerror2">
          <span>请进行选择是否同意本协议进行注册</span>
        </div>
      </form>
    </div>


  </div>
</template>

<script>


  export default {
    name: 'register',
    data () {
      return {
        msg: '',
        flagerror:false,
        flagerror1:false,
        flagerror2:true,
        flagerror3:false,
        form:{
          verify:"",
          username:"",
          password1:"",
          password2:"",
        }
      }
    },
    methods:{
//      判断用户是否点击了input里的CheckBox单选框
    auto:function(){
      var that = this;
       if(document.getElementById("checkedbox").checked){
         that.flagerror2=false;
         document.getElementById("registerbutton").className="styleinput1"
         document.getElementById("registerbutton").disabled=false;
       }else {
         that.flagerror2=true;
         document.getElementById("registerbutton").className="styleinput"
         document.getElementById("registerbutton").disabled=true;
       }
     },

//      判断用户名是否已存在
      bacomechange:function(input1,input2,input3) {
        var that = this;
        this.$http.get("http://datainfo.duapp.com/shopdata/userinfo.php", {
            params: {
              status: "register",
              userID: input1,
              password: input2
            }
          })
          .then(function (res) {
//            验证用户名是否存在
            if (res.body == 0) {
              that.flagerror1 = true;
            }else {
              that.flagerror1 = false;
            };
//            用户名为空时候警告框隐藏
            if (input1 =="" ) {
              that.flagerror1 = false;
            };

          }, function () {
            alert("获取失败")
          })
      },
//      判断密码是否两次输入一致
      passwordchange:function(value1,value2){
        var that=this;
        if(value1!=value2){
          that.flagerror3 = true;
        }else {
          that.flagerror3 = false;
        }
      },
//      注册提交
      onsubmit:function(input1,input2,input3){
        var that=this;
        this.$http.get("http://datainfo.duapp.com/shopdata/userinfo.php",{params:{status:"register",userID:input1,password:input2}})
          .then(function(res){
            console.log(res)
            if(res.body==0){
              that.flagerror1=true;
              if(that.username==""){
                that.flagerror1=false;
              }
            };
            if(res.body==2){
              that.flagerror=true;
            }else {
              that.flagerror=false;
            };
            if(res.body==1){
              that.$router.push("/Login")
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
  .user-login .styleinput1{
    width: 60%;height: 0.5rem;border-radius: 0.1rem;
    background: #fe8a00;border:none;outline: none;
    font-size: 0.25rem;color: #ffffff;font-weight: 400;
  }
  .user-login .styleinput{
    width: 60%;height: 0.5rem;border-radius: 0.1rem;
    background:gray;border:none;outline: none;
    font-size: 0.25rem;color: #ffffff;font-weight: 400;
  }
  .user-login-password label button{
    width: 1.5rem;height: 0.4rem;position: absolute;right: 2rem;margin-top: 0.07rem;
    background: #ffffff; color:#d3903c ;border:0.01rem solid #d3903c;border-radius: 0.05rem;

  }
  .user-register{
    background: #eeeeee;padding:0.1rem 0.2rem 0.2rem 1.1rem;
    text-align: left;
  }
  .user-register input{display: inline;width: 0.3rem;height: 0.3rem;outline: none}
  .user-register span{font-size: 0.2rem}
  .user-register span a{text-decoration: none;color:#fe8a00}
  .error-info{color: red;background: #eeeeee;padding-bottom: 0.2rem}
  .error-info1{color: red;background: #eeeeee;padding-bottom: 0.2rem}
  .error-info3{color: red;background: #eeeeee;padding-bottom: 0.2rem}
  .error-info2{color: red;background: #eeeeee;padding-bottom: 0.2rem}
</style>
