<template>
  <div>
    <div>子组件title：{{ title }}</div>
    <input
      style="width: 50%"
      type="text"
      :value="title"
      @input="onInputHandle($event)"
    />
  </div>
</template>
<script lang='ts'>
import { Component, Model, Vue, Emit, Prop } from "vue-property-decorator";

@Component
export default class ModelComponent extends Vue {
  //@Model第一个参数changeInput可以随便写，实际上只是规定了子组件要更新父组件值需要注册的方法
  //即@Emit第一个参数名，不同也不影响什么
  @Model("changeInput", String) readonly title!: string;
  @Emit("changeInput")
  private onChangeInput(evt: string) {
    // console.log(evt);
  }
  // 监听输入
  private onInputHandle(evt: any) {
    this.onChangeInput(evt.target.value);
  }
}
</script>
<style scoped>
</style>