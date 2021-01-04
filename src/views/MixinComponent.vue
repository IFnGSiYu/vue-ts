<template>
  <div>{{methodFromMixins('hello mixins')}}</div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import mymixins from '@/components/mixins/mymixins'
@Component({
  mixins: [mymixins],
})
export default class MixinPage extends Vue {
  created() {
    // this.methodFromMixins('hi')
    console.log('father init data,method from mixins,')
  }
}
</script>
<style scoped>
</style>