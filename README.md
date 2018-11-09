# 谷UI

[![CircleCI](https://circleci.com/gh/jrg-team/guui-react.svg?style=svg)](https://circleci.com/gh/jrg-team/guui-react)

## 原则

1. 所有组件不得存储数据（state），只能从外部接受数据（props），并把数据的变化用事件的形式发出（event）。如果一定要存储数据，必须由用户开启此功能。
2. 所有组件不得将容器的样式（尤其是宽高和zIndex）写死，必须可以接受外部 CSS 的覆盖。
3. 必须先写测试，再实现功能。分支覆盖率不得低于 90%。
4. 除了 react、react-dom 和 prop-types，不得有其他外部依赖
