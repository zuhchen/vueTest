<template>
  <div>
    <h1>这是用户界面</h1>
    <p>{{userId}}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'user',
  data() {
    return {
      
    }
  },
  computed:{
    userId(){
      return this.$route.params.userId
    }
  },
  activated() {
    console.log('user activated');
  },
  deactivated() {
    console.log('user deactivated');
  },
}
</script>