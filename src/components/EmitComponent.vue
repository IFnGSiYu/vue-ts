<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>{{ time }}</h1>
    <h1>{{ site }}</h1>
    <button @click="onChangeTitle">改变标题</button>
    <br />
    <br />
    <button @click="onChangeTime">改变时间</button>
    <br />
    <br />
    <input
      type="text"
      @input="changeSite($event)"
    />
  </div>
</template>
<script lang='ts'>
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

@Component
export default class EmitComponent extends Vue {
  @Prop(String)
  private title!: string
  @Prop(String)
  private time!: string
  @Prop(String)
  private site!: string
  //第一个参数是事件名称
  @Emit('change-title')
  private changeTitle() {
    console.log('change-title')
  }
  //如果未传事件名称，@Emit会将回调函数名changeTitle2的camelCase转为kebab-case，并将其作为事件名；
  @Emit()
  private changeTime() {
    console.log('change-time')
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const min = date.getMinutes()
    const second = date.getSeconds()
    return (
      String(year) + '年' + String(month) + '月' + String(day) + '日' + String(hour) + '点'
    )
  }
  @Emit()
  private changeSite(evt: any) {
    console.log('change-site')
    return 'change-site'
  }
  private onChangeTitle() {
    //这样直接改变props里面的值会报警告
    // this.title = "emit-component-title";
    this.changeTitle()
  }
  private onChangeTime() {
    this.changeTime()
  }
}
</script>
<style scoped>
</style>