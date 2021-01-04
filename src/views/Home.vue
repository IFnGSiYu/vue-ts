<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <HomeComponent msg="Hello World" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"; //导入Component装饰器
import HomeComponent from "@/components/HomeComponent.vue"; // 引入组件
import { NavigationGuardNext, Route } from "vue-router";

@Component({
  components: {
    HomeComponent,
  },
  beforeRouteEnter(to: Route, from: Route, next: NavigationGuardNext) {
    // 导航进入该组件的对应路由时调用，或者可以理解为从另一个页面跳转到当前页面
    console.log("*****Home***Enter*****");
    console.log("beforeRouteEnter", this); //undefined
    console.log("to", to);
    console.log("from", from);
    next((vm: any) => {
      console.log(vm); // vm就是当前组件的实例，相当于this
      // 因为当beforeRouteEnter钩子执行前，组件实例还未被创建
      // 所有需要通过传一个回调给next来访问组件实例
      // 在下面定义了一个title变量，我们来改变这个参数试试
      vm._data.title = "vmHomeTitle"; //不知道这样操作对不对，编译运行都没报错和警告，^_^
    });
  },
  beforeRouteUpdate(to: Route, from: Route, next: NavigationGuardNext) {
    // 在当前路由改变，但是该组件被复用时调用
    // 对于一个带有动态参数的路径 /home/:id，在 /home/1 和 /home/2 之间跳转的时候，
    // 由于会渲染同样的home组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问当前组件实例this
    console.log("*****Home***Update*****");
    console.log("Update", this); //当前组件实例
    console.log("to", to);
    console.log("from", from);
    console.log("next", next);
    // 注意 beforeRouteEnter 是支持给 next 传递回调的唯一守卫。
    // 对于 beforeRouteUpdate 和 beforeRouteLeave 来说，this 已经可用了，所以不支持传递回调，因为没有必要了。
    next();
  },
  beforeRouteLeave(to: Route, from: Route, next: NavigationGuardNext) {
    // 导航离开该组件的对应路由时调用，或者可以理解为从当前页面跳转到另一个页面
    // 可以访问当前组件实例this
    console.log("*****Home***Leave*****");
    console.log("Leave", this); //当前组件实例
    console.log("to", to);
    console.log("from", from);
    console.log("next", next);
    // 这个离开守卫通常用来禁止用户在还未保存修改前突然离开。
    // 该导航可以通过 next(false) 来取消。
    const answer = window.confirm(
      "Do you really want to leave? you have unsaved changes!"
    );
    if (answer) {
      next();
    } else {
      next(false);
    }
  },
})
export default class Home extends Vue {
  private title = "HomeTitle";
}
</script>
