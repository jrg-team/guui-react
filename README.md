# 谷UI

[![CircleCI](https://circleci.com/gh/jrg-team/guui-react.svg?style=svg)](https://circleci.com/gh/jrg-team/guui-react)

## 原则

1. 所有组件不得存储数据（state），只能从外部接受数据（props），并把数据的变化用事件的形式发出（event）。如果一定要存储数据，必须由用户开启此功能。
2. 所有组件不得将容器的样式（尤其是宽高和zIndex）写死，必须可以接受外部 CSS 的覆盖。
3. 必须先写测试，再实现功能。分支覆盖率不得低于 90%。
4. 除了 react、react-dom 和 prop-types，不得有其他外部依赖

## 命名

1. 禁止用 2 表示 to，如 string2Date 必须写成 stringToDate

## 如何开发

1. `cd guui-react`
2. `yarn start`, 打开 http://localhost:8080
3. 创建组件 `yarn task create component 组件名` 
    1. component 可简写为 `c`
    2. 组件名示例：popover / tabItem
4. 打开 example.tsx 添加路由和组件的展示代码 
