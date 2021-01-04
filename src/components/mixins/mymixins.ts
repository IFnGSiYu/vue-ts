// mymixins.ts
import { Vue, Component } from 'vue-property-decorator';

declare module 'vue/types/vue' {
    interface Vue {
        methodFromMixins(value: number | string): void;  // 记得声明一下，要不然会报错 Property 'methodFromMixins' does not exist on type 'App'.
    }
}

@Component
export default class MyMixins extends Vue {
    public text = 'method from mixins,';
    public methodFromMixins(value: number | string): string {
        console.log(this.text, value);
        return this.text + value;
    }
    created() {
        console.log('init data,method from mixins,');
    }
}