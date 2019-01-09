# 谷UI

[![CircleCI](https://circleci.com/gh/jrg-team/guui-react.svg?style=svg)](https://circleci.com/gh/jrg-team/guui-react)

## 原则

1. 所有组件不得存储数据（state），只能从外部接受数据（props），并把数据的变化用事件的形式发出（event）。如果一定要存储数据，必须由用户开启此功能。
2. 所有组件不得将容器的样式（尤其是宽高和zIndex）写死，必须可以接受外部 CSS 的覆盖。
3. 分支覆盖率不得低于 90%。
4. 除了 react、react-dom 和 prop-types，不得有其他外部依赖

## 命名

1. 普通变量只能用名词，如 let user = {...} 对，let getUser = {...} 错
    1. 不允许添加 info、data 后缀，如 userInfo 错，userData 错
2. 布尔变量只能有三种形式
    1. 形容词，如 active
    2. be 动词接名词，如 isAdmin
    3. 动词的完成态（也就是动词的ed形态），如 created, destroyed, broken 
    4. has 接名词，如 hasChildren
    5. 介词接名词，如 inCache
3. 函数
    1. 无参数函数用不及物动词，如 die()
    2. 有参数函数用及物动词，如 remove(id)
    3. 回调函数用介词（before、after、on）加动词或动词的名词形式，如 onClickButton、afterAnimation
        1. 不推荐用 handleClick
    4. getter/setter用名词形式，如 person.name
    5. 钩子函数跟 React 风格统一，用表时态的动词，如 willAnimate, didAnimate
4. 缩写
    1. 禁止任何缩写，如 cnt 错，cls 错，btn 错，str 错
    2. 如果某个缩写是行业共识，则可以使用，如 html、dom
        1. 但是如果这些缩写需要大写，请只大写第一个字母，如 renderHtml 对，renderHTML 错
0. 禁止用 2 表示 to，如 string2Date 必须写成 stringToDate

## 如何开发

1. `cd guui-react`
2. `yarn start`, 打开 http://localhost:8080
3. 创建组件 `yarn task create component 组件名` 
    1. component 可简写为 `c`
    2. 组件名示例：popover / tabItem
4. 打开 example.tsx 添加路由和组件的展示代码 
