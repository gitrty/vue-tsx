# business_parity

## 项目安装

`npm i`

## 项目启动

`npm run dev`或
`npm start`

## 项目搭建简介

vue-cli4 搭建

## commitlint 规范 <type>: <descrtiption> (注意:后边有一个空格)

build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle 等)的提交
docs：文档更新
feat：新增功能
merge：分支合并 Merge branch ? of ?
fix：bug 修复
perf：性能, 体验优化
refactor：重构代码(既没有新增功能，也没有修复 bug)
style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
test：新增测试用例或是更新现有测试
revert：回滚某个更早之前的提交
chore：不属于以上类型的其他类型

## 项目插件介绍

1. `axios` 处理网络请求
2. UI 框架 `element-ui`
3. `vue-class-component`(官方提供) `vue-property-decorator`(官方提供)
4. `vue-tsx-support` 更好的支持 props, 修饰符 等 ts 校验
5. `@babel/preset-env` `babel-plugin-component` 支持 element-ui 按需引入
6. `classnames` 方便操作多类名情况
7. `vuex-class-modules` vuex class 版（支持装饰器）
8. `vue-create-api` 让 Vue 组件通过 API 方式调用

## 项目目录介绍

1. page 放置基本页面
2. components 放置公共封装组件（单用组件放入 page 对应的页面文件夹下的 components 文件）
3. plugin 放置项目引入的配置插件,再暴露到 main.ts 进行挂载，保证 main.ts 中的逻辑清晰
4. style 放置 sass 公共函数，公共变量等
5. App.scss 作为全局性类名配置（单独组件有模块化 .module.scss 文件，全局不生效）
6. assets 放置静态资源
7. filter 放置公共的 filter
8. util 放置业务逻辑中的公共方法等
9. api 放置对应请求地址
10. store 放置 vuex
11. global.d.ts 全局公共 interface 等
12. libs 放置非业务逻辑全局配置
13. common 放置使用createApi创建的全局公用组件

## 项目具体语法实例（对应 vue 语法）

参考
[渲染函数 & JSX](https://cn.vuejs.org/v2/guide/render-function.html)
[vue-property-decorator](https://github.com/kaorun343/vue-property-decorator#Prop)
[vue-tsx-support](https://www.npmjs.com/package/vue-tsx-support)
[Vue Class Component](https://class-component.vuejs.org/guide/class-component.html)

1. 默认插槽 `{this.$slots.default}`

2. props `@Prop(options: (PropOptions | Constructor[] | Constructor) = {})`

```javascript
export default {
  props: {
    propA: {
      type: Number
    },
    propB: {
      default: 'default value'
    },
    propC: {
      type: [String, Boolean]
    }
  }
}
```

等同于

```typescript
@Component
export default class YourComponent extends Vue {
  @Prop(Number) readonly propA: number | undefined
  @Prop({ default: 'default value' }) readonly propB!: string
  @Prop([String, Boolean]) readonly propC: string | boolean | undefined
}
```

3. this.\$refs `ts报错，使用as断言`

```typescript
  // 方案一、引入相关包的文件，ts中会引入对用的.d.ts声明文件
  import { ElInput } from 'element-ui/types/input'
  (this.$refs[ref] as ElInput).someMethod()
  // 方案二、断言为一个Element
  this.$refs[ref] as HTMLFormElement).someMethod()
  // 方案三、自己声明一个interface & type
  // 方案四、使用@
  import { Vue, Component, Ref } from 'vue-property-decorator'
  import AnotherComponent from '@/path/to/another-component.vue'
    @Component
    export default class YourComponent extends Vue {
    @Ref() readonly anotherComponent!: AnotherComponent
    @Ref('aButton') readonly button!: HTMLButtonElement
    }
```

4. native.xxx

```javascript
@keyup.native.enter
```

等同于

```typescript
// 声明的修饰符 参考 node_modules 中的 vue-tsx-support 文件夹下的 modifiers.d.ts 文件
import { modifiers } from 'vue-tsx-support'
  nativeOnKeyup={modifiers.enter(this.xxx)}
```

5. emit `@Emit(event?: string) decorator`

```javascript
  addToCount(n) {
    this.count += n
    this.$emit('add-to-count', n)
  },
  resetCount() {
    this.count = 0
    this.$emit('reset')
  },
  returnValue() {
    this.$emit('return-value', 10)
  },
```

等同于

```typescript
 @Emit()
  addToCount(n: number) {
    this.count += n
  }

  @Emit('reset')
  resetCount() {
    this.count = 0
  }

  @Emit()
  returnValue() {
    return 10
  }
```
