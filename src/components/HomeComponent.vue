<template>
  <h1>{{ msg }}</h1>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class HomeComponent extends Vue {
  @Prop() private msg!: string;
}
</script>
<style scoped>
</style>