<template>
<div>
<!--  <router-link to="/login">登录</router-link>
  <router-link to="/register">注册</router-link>
  <mt-button>afa</mt-button>-->
  <mt-header fixed title="app模板"></mt-header>
  <div class="tabs-container">
    <router-view></router-view>
  </div>
  <nav class="mui-bar mui-bar-tab">
    <router-link class="mui-tab-item" to="/home">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </router-link>
    <router-link class="mui-tab-item" to="/member">
      <span class="mui-icon mui-icon-contact"></span>
      <span class="mui-tab-label">会员</span>
    </router-link>
    <router-link class="mui-tab-item" to="/cart">
      <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
      <span class="mui-tab-label">购物车</span>
    </router-link>
    <router-link class="mui-tab-item" to="/search">
      <span class="mui-icon mui-icon-search"></span>
      <span class="mui-tab-label">搜索</span>
    </router-link>
  </nav>
</div>
</template>
<script>
  export default {
    name: "app"
  }
</script>

<style lang="scss" scoped>
.tabs-container {
  padding: 0;
  margin-top: 40px;
}
</style>
