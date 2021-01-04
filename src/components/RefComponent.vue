<template>
  <div>
    <p ref="p">{{text}}</p>
  </div>
</template>
<script lang='ts'>
import { Component, Ref, Vue } from 'vue-property-decorator'

@Component
export default class RefComponent extends Vue {
  private text = '@Ref(refKey?: string)装饰器的使用'
  @Ref() readonly p!: HTMLParagraphElement
}
</script>
<style scoped>
</style>