<template>
  <div>
    <!-- <EmitComponent :title="title" @change-title1="onChangeTitle" /> -->
    <!-- <EmitComponent :title="title" @change-title2="onChangeTitle" /> -->
    <EmitComponent
      :title="title"
      :time="time"
      :site="site"
      @change-title="onChangeTitle"
      @change-site="onChangeSite"
      @change-time="onChangeTime"
    />
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import EmitComponent from "@/components/EmitComponent.vue";
@Component({
  components: {
    EmitComponent,
  },
})
export default class EmitPage extends Vue {
  private title = "EmitTitle";
  private time = "2021年1月3日12点";
  private site = "湖南长沙";
  private onChangeTitle() {
    this.title = "通过@Emit装饰器改变父组件的值";
  }
  private onChangeTime(data: string) {
    console.log(data);
    //接受子组件传过来的参数直接赋值
    this.time = data;
  }
  private onChangeSite(data: string, evt: any) {
    console.log(data, evt);
    //接受回调函数参数赋值
    this.site = evt.target.value;
  }
}
</script>
<style scoped>
</style>