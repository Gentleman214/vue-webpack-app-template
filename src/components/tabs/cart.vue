<template>
  <div>
    <mt-swipe :auto="2000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: "cart"
  }
</script>

<style scoped>
  .mint-swipe{ height: 200px; }
  .mint-swipe-item:nth-child(1){ background-color: #d4e9e7; }
  .mint-swipe-item:nth-child(2){ background-color: #ab39e9; }
  .mint-swipe-item:nth-child(3){ background-color: #9de963; }
</style>
