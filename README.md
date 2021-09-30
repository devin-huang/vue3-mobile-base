# praking-h5

## 注意

tsconfig.json noImplicitAny false 代表编译器无法根据变量的用途推断出变量的类型，它就会悄悄的把变量类型默认为 any

.eslinttrc.js @typescript-eslint/explicit-module-boundary-types 导出的函数和类的公共类方法上需要显式返回和参数类型（既不填写类型会提示警告）

px 转 rem 下载 postcss-pxtorem 、 amfe-flexible 并在 .postcssrc.js 配置 postcss-pxtorem 与 mian.js 中引用 amfe-flexible

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
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
