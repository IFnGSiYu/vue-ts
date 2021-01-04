<template>
  <div>
    <WathcComponent :enscore="enscore" :score="score" />
    <p>语文分数：{{ score.cnscore }}</p>
    <br />
    <button @click="onChangeScore">changeScore</button>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";
import WathcComponent from "@/components/WatchComponent.vue";
@Component({
  components: {
    WathcComponent,
  },
})
export default class WatchPage extends Vue {
  private enscore = 80;
  private score = { cnscore: 80, name: "中文分数" };
  private onChangeScore() {
    this.enscore = 90;
    this.score.cnscore++;
    // this.score = { cnscore: 90, name: "中文分数" };
    // this.score.name = "语文分数";
  }

}
</script>
<style scoped>
</style>