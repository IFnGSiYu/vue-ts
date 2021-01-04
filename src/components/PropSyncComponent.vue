<template>
  <div>
    <h1>{{ syncTitle }}</h1>
    <button @click="onChangeTitle">子组件按钮</button>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, PropSync } from "vue-property-decorator";

@Component
export default class PropSyncComponent extends Vue {
  @PropSync("title", { type: String }) syncTitle!: string;
  private onChangeTitle(): void {
    this.syncTitle = "这是一个子组件改变的title";
  }
}
</script>
<style scoped>
</style>