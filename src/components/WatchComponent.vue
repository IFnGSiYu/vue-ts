<template>
  <div>
    <h1>一个{{ age }}岁的学生，<br />期末考试总分是{{ total }}</h1>
    <button @click="age = age + 1">addAge</button>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class WatchComponent extends Vue {
  @Prop(Number)
  private enscore!: number;
  @Prop()
  private score!: any;
  private age = 17;
  private total = 0;
  //1.常用方法
  //特定：当值第一次绑定的时候，不会触发监听函数，只有值发生改变才会执行。
  @Watch("age")
  onAgeChanged(newValue: number, oldValue: number) {
    console.log("age", newValue, oldValue);
  }
  //2.立即执行(immediate)属性
  //当需要在绑定值的时候也触发函数，监听值的变化，就需要用到immediate属性。
  @Watch("enscore", { immediate: false })
  onEnscoreChanged(newValue: object, oldValue: object) {
    console.log(
      "绑定时触发enscore",
      newValue,
      oldValue,
      this.score,
      this.enscore
    );
    this.total = this.score.cnscore + this.enscore;
    console.log(
      "注意这里，当immediate为false进入页面时，没有执行监听函数",
      this.total
    );
  }
  //3.深度监听
  //当需要监听复杂数据类型(对象)的改变时，上述两个方法无法监听到对象内部属性的改变，
  //只有score中的数据才能够监听到变化，此时就需要deep属性对对象进行深度监听。
  @Watch("score", { deep: false }) //无法监听到变化
  //   @Watch("score.cnscore", {  deep: false })//可以监听到变化
  onscoreChanged(newValue: number, oldValue: number) {
    console.log(
      "深度监听cnscore",
      newValue,
      oldValue,
      this.score.cnscore,
      this.score.name,
      this.enscore
    );
    this.total = this.score.cnscore + this.enscore;
    console.log(
      "注意这里，当deep为false时，没有执行监听函数，total没有变化",
      this.total
    );
  }
}
</script>
<style scoped>
</style>