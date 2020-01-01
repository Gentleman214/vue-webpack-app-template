<template>
  <div>
    <mt-swipe :auto="2000">
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(menuItem, index) in menu" :key="index">
        <a href="#">
        <span :class="menuItem.icon"></span>
        <div class="mui-media-body">{{menuItem.title}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  const menu = [
    { title: '新闻咨讯', icon: 'mui-icon-extra mui-icon-extra-new'},
    { title: '图片分享', icon: 'mui-icon-extra mui-icon-extra-share'},
    { title: '商品购买', icon: 'mui-icon-extra mui-icon-extra-cart'},
    { title: '留言反馈', icon: 'mui-icon-extra mui-icon-extra-comment'},
    { title: '视频专区', icon: 'mui-icon-extra mui-icon-extra-computer'},
    { title: '联系我们', icon: 'mui-icon-extra mui-icon-extra-addpeople'},
  ]
  export default {
    name: "home",
    data() {
      return {
        menu
      }
    },
    created() {},
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .mint-swipe{ height: 200px; }
  .mint-swipe-item:nth-child(1){ background-color: #8a6de9; }
  .mint-swipe-item:nth-child(2){ background-color: #85e965; }
  .mint-swipe-item:nth-child(3){ background-color: #e99ed0; }
  .mui-grid-view.mui-grid-9{ background-color: white; border: none; }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{ border: 0; }
  .mui-icon-extra { color: burlywood; }
</style>
