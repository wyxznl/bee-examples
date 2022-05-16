# 新版React18脚手架搭配Antd组件库

> 项目使用全新的架构，全新的体验
>
> 1. React18版本强势来袭，搭配使用Roo React组件化开发

> 2. 随心所欲使用TS，框架能够解析JS、TS、JSX、TSX等多种语法，任意搭配产生不同效果

> 3. 内置Recoil原子状态管理，详细例子参考内部代码

> 4. JSX书写时校验prop-types，定义类型方便后人

> 5. eslint规则随心配，可视化的eslint配置，增强掌控

> 6. 样式语法支持css与less，暂未支持sass（与less相同）

> 7. 提交代码自动校验eslint规则，主动帮你fix更省心

***
***注意***：

- 当前脚手架模版使用`React18`版本，若需要使用`React17及之前版本`请使用[React17及以下版本脚手架模版](https://montage.sankuai.com/montage/component/templetdetail/419)
- 项目内React使用基于路由的代码分割，使用`React.lazy`和`React Router`。
- `React.lazy`目前只支持默认导出（default exports），若您想用命名导出，请使用[React官网命名导出(Named Exports)](https://zh-hans.reactjs.org/docs/code-splitting.html#named-exports)
- 为兼容低版本浏览器，增加多个polyfill
  - React引入兼容，在入口文件处引入`import 'babel-polyfill'`
  - React-Router-DOM使用hooks写法，官方示例中使用了`URLSearchParams`api，为兼容低版本浏览器，需要引入`import 'url-search-params-polyfill'`

***

## 工程介绍

- 项目内置了recoil进行数据管理，详情查看[Recoil官网](https://recoiljs.org/zh-hans/)，学诚链接辅助学习[了解Recoil分散管理状态](https://km.sankuai.com/page/960968018)
- 项目内置了ahooks库，详情查看[ahooks](https://ahooks.js.org/)
- 项目内置了axios请求，内部进行了封装，暴露两个方法`commonGetApi与commonPostApi`，可以自行向上追加实例方法
- 项目内置了灵犀埋点5.0版本的SDK，内部进行了封装，暴露两个方法`pageTracker与moduleTracker`，同时暴露`LxType`灵犀模块类型
- 项目内置了Akita监控
- 项目内置了Antd组件库
- 在提交代码commit阶段调用husky自动fix代码与样式

## 下载该模版

``` shell
mon fetch react-frame-template18-antd -t
```

## 安装依赖

``` shell
mnpm install
```

## 启动项目

``` shell
mnpm run serve
```

## 校验Eslint

```shell
mnpm run lint
```

## 修复Eslint

```shell
mnpm run lint:fix
```
