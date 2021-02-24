<template>
  <div>
    <h1>我是首页</h1>
    <router-link to="/Home/news">新闻</router-link>
    <router-link to="/Home/messages">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  activated() {
    console.log('home activated');
  },
  deactivated() {
    console.log('home deactivated');
  },
  
};
</script>

<style>
</style>
