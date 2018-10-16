import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button as GuButton, Icon as GuIcon} from './lib';

const div = document.createElement('div');
document.body.appendChild(div);

function test(this: any): void {
  console.log('example')
  console.log(this)
}

ReactDOM.render((
  <div>
    <GuButton onClick={test}>hi</GuButton>
    <GuIcon name="alipay"/>
  </div>
), div);
