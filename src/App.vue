<template>
  <div id="app">
    <div>
      <h1>vuex</h1>
      <p>{{ count }}</p>
      <p>{{exceed(2)}}</p>
      <p>{{exceed(2)}}</p>
      <p>{{more(2)}}</p>
      <button @click="increCount">+</button>
      <button @click="add(4)">+4</button>
    </div>
    <router-link to="/Home">首页</router-link>
    <router-link to="/About">关于</router-link>
    <router-link :to="'/User/' + userId">用户</router-link>
    <router-link :to="{ path: '/Profile', query: { name: 'zuhchen' } }">profile</router-link>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapState, Store} from 'vuex'
export default {
  name: "App",
  data() {
    return {
      userId: "lili",
    };
  },
  methods: {
    homeClick() {
      this.$router.replace("/User");
    },
    increCount() {
      this.$store.commit("increment",2);
    },
    add(n) {
      this.$store.commit("increment",n);
    },
   
  },
  computed:{
     
     ...mapState([

      'count'
     ]),
     ...mapGetters([
       'exceed',
       'more'
     ]),
     ...mapMutations([
       
     ]),
     
     
  },
};
</script>

<style>
.active {
  color: red;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  text-decoration: none;
}
</style>
