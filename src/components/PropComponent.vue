<template>
  <div>我是一个{{ sex }}，身高有{{ height }}公分，{{ age }}岁了</div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class PropComponent extends Vue {
  @Prop(String)
  //   参数类型的写法
  //   private height!: string;
  //   private height?: string;
  //   private height = "175";
  private height: string | undefined;
  @Prop({ type: String, required: true, default: "girl" })
  private sex!: string;
  @Prop([String, Number])
  private age!: string | number;
}
</script>
<style scoped>
</style>