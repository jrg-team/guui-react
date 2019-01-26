import * as React from 'react';
import {Vmenu} from '..';
import {useState} from 'react';

export default function (props: any) {
  const [selected, setSelected] = useState('hi');
  return (
    <div className="VmenuExample">
      <h2>selected & onSelect</h2>
      <div>
        <Vmenu selected={selected} onSelect={(selected: string) => setSelected(selected)}>
          <Vmenu.Item id="hi">hi</Vmenu.Item>
          <Vmenu.Dir id="group" title="group">
            <Vmenu.Item id="ho">ho</Vmenu.Item>
            <Vmenu.Item id="ho2">ho2</Vmenu.Item>
            <Vmenu.Item id="ho3">ho3</Vmenu.Item>
          </Vmenu.Dir>
          <Vmenu.Dir id="group2" title="group">
            <Vmenu.Item id="ha">ho</Vmenu.Item>
            <Vmenu.Item id="ha2">ho2</Vmenu.Item>
            <Vmenu.Item id="ha3">ho3</Vmenu.Item>
          </Vmenu.Dir>
        </Vmenu>
      </div>
      <h2>defaultSelected</h2>
      <div>
        <Vmenu defaultSelected="hi">
          <Vmenu.Item id="hi">hi</Vmenu.Item>
          <Vmenu.Dir id="group" title="group">
            <Vmenu.Item id="ho">ho</Vmenu.Item>
            <Vmenu.Item id="ho2">ho2</Vmenu.Item>
            <Vmenu.Item id="ho3">ho3</Vmenu.Item>
          </Vmenu.Dir>
          <Vmenu.Dir id="group2" title="group">
            <Vmenu.Item id="ha">ho</Vmenu.Item>
            <Vmenu.Item id="ha2">ho2</Vmenu.Item>
            <Vmenu.Item id="ha3">ho3</Vmenu.Item>
          </Vmenu.Dir>
        </Vmenu>
      </div>
      <h2>dir in dir</h2>
      <div>
        <Vmenu defaultSelected="hi">
          <Vmenu.Item id="hi">hi</Vmenu.Item>
          <Vmenu.Dir id="group" title="group">
            <Vmenu.Item id="ho">ho</Vmenu.Item>
            <Vmenu.Dir id="group2" title="group">
              <Vmenu.Item id="ha">ho</Vmenu.Item>
            </Vmenu.Dir>
          </Vmenu.Dir>
        </Vmenu>
      </div>
    </div>
  );
}
