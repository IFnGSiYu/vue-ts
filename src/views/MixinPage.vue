<template>
  <div>{{hello}} | {{hi}}</div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { HelloMixins, HiMixins } from '@/components/mixins/Mixins'
import { mixins } from 'vue-class-component'
@Component
export default class MixinPage extends mixins(HelloMixins, HiMixins) {
  created() {
    console.log(this.hello + this.hi)
  }
}
</script>
<style scoped>
</style>