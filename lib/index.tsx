import * as React from 'react';
import {CSSProperties} from 'react';

declare global {
  interface GuuiFunctionComponent<P = {}> extends React.FunctionComponent<P> {
    // 强制要求 displayName
    displayName: string,
    // 由于 propTypes 与 TypeScript + 函数式组件配合起来有 bug
    // 所以我不得不覆盖掉 propTypes 了
    // 奇怪的是，propTypes 与 TypeScript + class组件配合得很好
    // 我测试发现 class 组件的 propTypes 属性根本就没有被 TypeScript 检查！
    // 见 https://stackoverflow.com/questions/53672656/typescript-does-not-check-a-react-components-proptypes-how-could-i-fix-it/53675443
    propTypes?: any
  }

  interface IStyledProps {
    className?: ClassValue;
    style?: CSSProperties;
  }

  type GFC<P = {}> = GuuiFunctionComponent<P>

  type ClassValue = string | string[] | { [K: string]: boolean | undefined } | undefined | false | null
}

import Button from './button/button';
import Icon from './icon/icon';
import {Layout, Footer, Aside, Main, Header} from './layout/index';
import {Col, Row} from './grid/index';

export {Button, Icon, Layout, Footer, Aside, Main, Header, Col, Row};
