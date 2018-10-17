import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button as GuButton, Icon as GuIcon} from './lib';
import Tabs from './lib/tabs';
import Tab from './lib/tab';

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
  </div>
), div);
