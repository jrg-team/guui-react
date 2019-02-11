import * as React from 'react';
import {Vmenu} from '..';
import {useState} from 'react';

export default function (props: any) {
  const [selected, setSelected] = useState('hi');
  return (
    <div className="VmenuExample">
      <h2>selected & onSelect</h2>
      <div style={{width: 200}}>
        <Vmenu selected={selected} onSelect={(selected: string) => setSelected(selected)}
               initFolding="foldAll">
          <Vmenu.Item id="hi">标题</Vmenu.Item>
          <Vmenu.Item id="hi2">标题2</Vmenu.Item>
          <Vmenu.Dir id="group" title="分组3">
            <Vmenu.Item id="ho">标题3-1</Vmenu.Item>
            <Vmenu.Item id="ho2">标题3-2</Vmenu.Item>
            <Vmenu.Item id="ho3">标题3-3</Vmenu.Item>
            <Vmenu.Dir id="group33" title="分组3">
              <Vmenu.Item id="ho331">标题3-1</Vmenu.Item>
              <Vmenu.Item id="ho332">标题3-2</Vmenu.Item>
              <Vmenu.Item id="ho333">标题3-3</Vmenu.Item>
              <Vmenu.Dir id="group333" title="分组3">
                <Vmenu.Item id="ho3331">标题3-1</Vmenu.Item>
                <Vmenu.Item id="ho3332">标题3-2</Vmenu.Item>
                <Vmenu.Item id="ho3333">标题3-3</Vmenu.Item>
                <Vmenu.Dir id="group3333" title="分组3">
                  <Vmenu.Item id="ho33331">标题3-1</Vmenu.Item>
                  <Vmenu.Item id="ho33332">标题3-2</Vmenu.Item>
                  <Vmenu.Item id="ho33333">标题3-3</Vmenu.Item>
                </Vmenu.Dir>
              </Vmenu.Dir>
            </Vmenu.Dir>
          </Vmenu.Dir>
          <Vmenu.Dir id="group2" title="分组4">
            <Vmenu.Item id="ha">标题4-1</Vmenu.Item>
            <Vmenu.Item id="ha2">标题4-2</Vmenu.Item>
            <Vmenu.Item id="ha3">标题4-3</Vmenu.Item>
          </Vmenu.Dir>
        </Vmenu>
      </div>
      <h2>defaultSelected</h2>
      <div style={{width: 200}}>
        <Vmenu defaultSelected="hi">
          <Vmenu.Item id="hi">hi</Vmenu.Item>
          <Vmenu.Item id="hi2">hi2</Vmenu.Item>
          <Vmenu.Item id="hi3">hi3</Vmenu.Item>
          <Vmenu.Item id="hi4">hi4</Vmenu.Item>
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
      <div style={{width: 200}}>
        <Vmenu defaultSelected="hi">
          <Vmenu.Item id="hi">hi</Vmenu.Item>
          <Vmenu.Dir id="group" title="group">
            <Vmenu.Item id="ho">ho</Vmenu.Item>
            <Vmenu.Dir id="group2" title="group">
              <Vmenu.Item id="ha2">ho</Vmenu.Item>
              <Vmenu.Dir id="group3" title="group">
                <Vmenu.Item id="ha3">ho</Vmenu.Item>
                <Vmenu.Dir id="group4" title="group">
                  <Vmenu.Item id="ha4">ho</Vmenu.Item>
                  <Vmenu.Dir id="group5" title="group">
                    <Vmenu.Item id="ha5">ho</Vmenu.Item>
                    <Vmenu.Dir id="group6" title="group">
                      <Vmenu.Item id="ha6">ho</Vmenu.Item>
                      <Vmenu.Dir id="group7" title="group">
                        <Vmenu.Item id="ha7">ho</Vmenu.Item>
                        <Vmenu.Dir id="group8" title="group">
                          <Vmenu.Item id="ha8">ho</Vmenu.Item>
                          <Vmenu.Dir id="group9" title="group">
                            <Vmenu.Item id="ha9">ho</Vmenu.Item>
                          </Vmenu.Dir>
                        </Vmenu.Dir>
                      </Vmenu.Dir>
                    </Vmenu.Dir>
                  </Vmenu.Dir>
                </Vmenu.Dir>
              </Vmenu.Dir>
            </Vmenu.Dir>
          </Vmenu.Dir>
        </Vmenu>
      </div>
    </div>
  );
}
