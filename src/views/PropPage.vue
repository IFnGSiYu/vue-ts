<template>
  <div>
    <PropComponent height="175" sex="boy" age="26" />
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import PropComponent from "@/components/PropComponent.vue";

@Component({
  components: {
    PropComponent,
  },
})
export default class PropPage extends Vue {}
</script>
<style scoped>
</style>