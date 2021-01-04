<template>
  <div>
    <PropSyncComponent :title.sync="title" />
    <br />
    <button @click="onChangeTitle">父组件按钮</button>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import PropSyncComponent from "@/components/PropSyncComponent.vue";

@Component({
  components: {
    PropSyncComponent,
  },
})
export default class PropSyncPage extends Vue {
  private title = "这是父组件传给子组件的一个title";
  private onChangeTitle(): void {
    this.title = "这是一个父组件改变的title";
  }
}
</script>
<style scoped>
</style>