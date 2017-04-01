<template>
  <div class="setup">
    <!--头部设置中心-->
    <mt-header fixed title="设置中心" class="mt-heade-myheadre" >
      <mt-button  slot="left">
        <router-link to="/userinfo" class="set-gear">
          <span class="iconfont font-color">&#xf0343;</span>
        </router-link>
      </mt-button>
    </mt-header>

    <!--由于有头部需要用一个高撑开 -->
    <p style="height: 48px;border-bottom: 0.03rem solid #c6c6c6"></p>

    <!--第四部分全部订单等-->
    <div class="all-order-info">
      <router-link to="/" class="all-info-padding">
        <div class="float-left">
          <span class="iconfont all-font-size-one">&#xe680;</span>

        </div>
        <span class="all-font-shop">关于神州购物</span>
        <div class="float-right">
          <span class="iconfont all-font-size-tow">&#xf0344;</span>
        </div>
      </router-link>
    </div>
    <!--第二个开始-->
    <div class="all-order-info">
      <router-link to="/" class="all-info-padding">
        <div class="float-left-2">
          <span class="iconfont all-font-size-one">&#xe645;</span>

        </div>
        <span class="all-font-shop">帮助中心</span>
        <div class="float-right">
          <span class="iconfont all-font-size-tow">&#xf0344;</span>
        </div>
      </router-link>
    </div>
    <!--第三个开始-->
    <div class="all-order-info">
      <router-link to="/" class="all-info-padding">
        <div class="float-left-3">
          <span class="iconfont all-font-size-one">&#xe837;</span>

        </div>
        <span class="all-font-shop"> &nbsp;清理缓存</span>
        <div class="float-right">
          <span class="iconfont all-font-size-tow">&#xf0344;</span>
        </div>
      </router-link>
    </div>
    <!--第四个开始-->
    <div class="all-order-info">
      <router-link to="/" class="all-info-padding">
        <div class="float-left-4">
          <span class="iconfont all-font-size-one">&#xe60c;</span>

        </div>
        <span class="all-font-shop"> &nbsp;信息反馈</span>
        <div class="float-right">
          <span class="iconfont all-font-size-tow">&#xf0344;</span>
        </div>
      </router-link>
    </div>
    <!--第五部分开始-->
    <div class="all-order-info">
      <router-link to="/" class="all-info-padding">
        <div class="float-left-5">
          <span class="iconfont all-font-size-one">&#xf004b;</span>

        </div>
        <span class="all-font-shop"> &nbsp;当前版本:3.3.9(最新版本3.3.9)</span>
        <div class="float-right">
          <span class="iconfont all-font-size-tow">&#xf0344;</span>
        </div>
      </router-link>
    </div>
    <!--第六部分开始-->
    <div class="all-order-info">
      <router-link to="/" class="all-info-padding">
        <div class="float-left-6">
          <span class="iconfont all-font-size-one">&#xe632;</span>

        </div>
        <span class="all-font-shop"> &nbsp;接收信息通知</span>
        <div class="float-right">
          <span class="iconfont all-font-size-tow">&#xf0344;</span>
        </div>
      </router-link>
    </div>
    <!--第七部分开始-->
    <div class="all-order-info">
      <router-link to="/" class="all-info-padding">
        <div class="float-left-7">
          <span class="iconfont all-font-size-one">&#xe618;</span>

        </div>
        <span class="all-font-shop"> &nbsp;流量监控</span>
        <div class="float-right">
          <span class="iconfont all-font-size-tow">&#xf0344;</span>
        </div>
      </router-link>
    </div>
    <!--第八部分开始-->
    <div class="all-order-info">
      <router-link to="/" class="all-info-padding">
        <div class="float-left-7">
          <span class="iconfont all-font-size-one">&#xe60a;</span>

        </div>
        <span class="all-font-shop"> &nbsp;官方微博</span>
        <div class="float-right">
          <span class="iconfont all-font-size-tow">&#xf0344;</span>
        </div>
      </router-link>
    </div>
    <!--第九部分开始-->
    <div class="all-order-info">
      <router-link to="/" class="all-info-padding">
        <div class="float-left-7">
          <span class="iconfont all-font-size-one">&#xe91d;</span>

        </div>
        <span class="all-font-shop"> &nbsp;亲,给个评价吧</span>
        <div class="float-right">
          <span class="iconfont all-font-size-tow">&#xf0344;</span>
        </div>
      </router-link>
    </div>
    <!--第十部分开始-->
    <div class="all-order-info">
      <router-link to="/" class="all-info-padding">
        <div class="float-left-7">
          <span class="iconfont all-font-size-one">&#xf0003;</span>

        </div>
        <span class="all-font-shop"> &nbsp;更新设置</span>
        <div class="float-right">
          <span class="iconfont all-font-size-tow">&#xf0344;</span>
        </div>
      </router-link>
     </div>
  </div>
</template>

<script>
  export default {
    name: 'setup',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<style scoped>
  .mt-heade-myheadre{background: #ffffff;color: #000000;font-size: 0.16rem}
  .font-color{color: #8a8a8a;font-size: 0.16rem;font-weight: bold}
  .set-gear{text-decoration:none; }
  .all-order-info{
    height: 1.4rem;
    background: #ffffff;color: #000000;font-size: 0.16rem;
    border-bottom: 0.01rem solid #e0e0e0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

  }
  .all-info-padding{padding: 0.1rem;text-decoration:none;}
  .float-left{float: left;font-size: 0.3rem;margin-top: 0.4rem;
    width: 0.7rem;height: 0.7rem;text-align: center;line-height: 0.7rem;
   color: #ff8800 }
  .float-right{float: right;margin-top: 0.5rem;color: #869193;font-size: 0.25rem}
  .all-font-size-tow{font-size: 0.35rem}
  .all-font-size-one{font-size: 0.5rem;}
  .all-font-shop{font-size: 0.35rem;color: #000000;line-height: 1.4rem;}
  .defout-gray{width: 100%;height: 0.2rem;background: #eeeeee}
  .float-left-2{float: left;font-size: 0.35rem;margin-top: 0.35rem;width: 0.7rem;height: 0.7rem;
    text-align: center;line-height: 0.7rem;
    color: #ff8800 }
  .float-left-3{float: left;font-size: 0.35rem;margin-top: 0.35rem;width: 0.7rem;height: 0.7rem;
    text-align: center;line-height: 0.7rem;
    color: #ff8800 }
  .float-left-4{float: left;font-size: 0.35rem;margin-top: 0.35rem;width: 0.7rem;height: 0.7rem;
    text-align: center;line-height: 0.7rem;
    color:#ff8800 }
  .float-left-5{float: left;font-size: 0.35rem;margin-top: 0.35rem;width: 0.7rem;height: 0.7rem;
    text-align: center;line-height: 0.7rem;
    color: #ff8800 }
  .float-left-6{float: left;font-size: 0.35rem;margin-top: 0.4rem;width: 0.7rem;height: 0.7rem;
    text-align: center;line-height: 0.7rem;
    color: #ff8800 }
  .float-left-7{float: left;font-size: 0.35rem;margin-top: 0.4rem;width: 0.7rem;height: 0.7rem;
    text-align: center;line-height: 0.7rem;
    color: #ff8800 }
</style>
