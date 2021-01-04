<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/proppage">PropPage</router-link> |
      <router-link to="/propsyncpage">PropSyncPage</router-link> |
      <router-link to="/modelpage">ModelPage</router-link> |
      <router-link to="/wacthpage">WatchPage</router-link> |
      <router-link to="/emitpage">EmitPage</router-link> |
      <router-link to="/refpage">RefPage</router-link> |
      <router-link to="/mixincomponent">MixinComponent</router-link> |
      <router-link to="/mixinpage">MixinPage</router-link> |
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
// - @Provide  
// - @Inject 
// - @ProvideReactive  
// - @InjectReactive  
// import Vue from "vue";
// export default Vue.extend({});
// import { State, Getter, Action, Mutation, namespace } from "vuex-class";
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
