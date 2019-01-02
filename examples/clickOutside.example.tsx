import * as React from 'react';
import {ClickOutside} from '../lib/index';
import {useRef, useState} from 'react';

export default function (props: any) {
  const [n, setN] = useState(0);
  const [n2, setN2] = useState(0);
  const div = useRef(null);
  return (
    <div className="demo PopoverExample">
      <h2>用法</h2>
      <ClickOutside className="demo-row bordered" handler={() => setN(n + 1)}>
        n: {n} （点击别处 n 会增长）
      </ClickOutside>

      <h2>增加例外</h2>
      <ClickOutside className="demo-row bordered" handler={() => setN2(n2 + 1)}
        exclude={div}>
        n2: {n2} （点击别处 n2 会增长）
      </ClickOutside>
      <div ref={div}>
        点击这里 n2 不会增长
      </div>
    </div>
  );
}
