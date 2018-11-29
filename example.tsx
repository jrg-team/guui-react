import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button as GuButton, Icon as GuIcon} from './lib';
import Tabs from './lib/tabs';
import Tab from './lib/tab';
import Input from './lib/input';

const div = document.createElement('div');
document.body.appendChild(div);

function test(this: any): void {
  console.log(arguments)
}

ReactDOM.render((
  <div>
    <GuButton onClick={test}>hi</GuButton>
    <GuIcon name="alipay"/>

    <Tabs selected="first" onChange={test}>
      <Tab title="tab1" name="first">
        <span id="span1"></span>
      </Tab>
      <Tab title="tab2" name="second">
        <span id="span2"></span>
      </Tab>
    </Tabs>

    <div className="input">
      <h1>我是Input</h1>
      <Input placeholder={'用户名'}/>
      <Input placeholder={'密码'} type={'password'}/>
      <Input placeholder={'用户名'} value={'张三'} />
      <Input placeholder={'用户名'} value={'张三'} label={'用户名'} />
      <Input placeholder={'用户名'} value={'张三'} label={'用户名'} labelPosition={'left'}/>
      <Input placeholder={'用户名'} value={'张三'} error={'密码错误'}/>
      <Input placeholder={'用户名'} value={'张三'} error={'密码错误'} errorPosition={'right'}/>
    </div>
  </div>
), div);
