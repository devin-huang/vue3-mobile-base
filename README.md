# vue3-mobile-base-h5

## 注意

- vue.config.js 中的 JS 与 CSS 是必须的，否则通过 mode 指定环境时打包的项目文件没有哈希值

- vue3 公共属性的挂载用了 `provide` 与 `inject`

- 不太建议 TS 构建不好的引入，否则编译有很多错误及不规范

- tsconfig.json noImplicitAny false 代表编译器无法根据变量的用途推断出变量的类型，它就会悄悄的把变量类型默认为 any

- .eslinttrc.js @typescript-eslint/explicit-module-boundary-types 导出的函数和类的公共类方法上需要显式返回和参数类型（既不填写类型会提示警告）

- px 转 rem 下载 postcss-pxtorem 、 amfe-flexible 并在 .postcssrc.js 配置 postcss-pxtorem 与 mian.js 中引用 amfe-flexible (vant 官网有对 rem 配合使用经行说明)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm start
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
