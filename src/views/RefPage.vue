<template>
  <div>
    <RefComponent ref="refcomponent" />
    <button @click="onChangeChildText">change</button>
  </div>
</template>
<script lang='ts'>
import { Component, Ref, Vue } from 'vue-property-decorator'
import RefComponent from '@/components/RefComponent.vue'
@Component({
  components: {
    RefComponent,
  },
})
export default class RefPage extends Vue {
  @Ref('refcomponent') readonly refcomponent!: RefComponent
  private onChangeChildText() {
    this.refcomponent.p.innerHTML = '通过父组件改变子组件元素值'
  }
}
</script>
<style scoped>
</style>