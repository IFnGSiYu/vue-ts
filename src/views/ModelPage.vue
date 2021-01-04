<template>
  <div>
    <ModelComponent
      v-model="title"
      @changeInput="onChangeInput"
    />
    <div>父组件title：{{ title }}</div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import ModelComponent from "@/components/ModelComponent.vue";
@Component({
  components: {
    ModelComponent,
  },
})
export default class ModelPage extends Vue {
  private title = "通过v-model实现子父组件数据双向绑定";
  private onChangeInput(evt: any) {
    console.log(evt);
    this.title = evt;
  }
}
</script>
<style scoped>
</style>