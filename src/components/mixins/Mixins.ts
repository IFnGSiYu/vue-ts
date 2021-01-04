//mixins.ts
import { Vue, Component } from "vue-property-decorator";

@Component // 一定要用Component修饰
export class HelloMixins extends Vue {
    public hello = 'hello mixins';
}
@Component // 一定要用Component修饰
export class HiMixins extends Vue {
    public hi = 'hi mixins';
}