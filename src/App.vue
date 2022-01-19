<template>
  <Header />
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  color: #2c3e50;
}
</style>
<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: { Header },
};
</script>
