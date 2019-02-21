import * as React from 'react';
import {Dialog,Button} from '../lib/index';
import {useState} from 'react';

export default function (props: any) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="DialogExample">
      <h2>普通示例</h2>
      <div>
        <Dialog visible={visible}/>
        <Button onClick={e => setVisible(!visible)}>Dialog</Button>
      </div>
    </div>
  );
}
