import * as React from 'react';
import {Dialog, Button} from '..';
import {alert, confirm, modal} from './dialog';
import {useState, Fragment} from 'react';

export default function (props: any) {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const x = () => {
    const closer = modal(<div>
      hi
      <button onClick={e => closer()}>close</button>
    </div>);
  };
  return (
    <div className="DialogExample">
      <h2>普通示例</h2>
      <div>
        <Dialog visible={visible} onClose={e => setVisible(false)}/>
        <div>
          <Button onClick={e => x()}>打开</Button>
          <Button onClick={e => setVisible(false)}>关闭</Button>
        </div>
      </div>
      <h2>普通示例</h2>
      <div>
        <Dialog visible={visible2}
                mask={{visible: true, closeOnClick: true}}
                onClose={e => setVisible2(false)}
                buttons={
                  <Fragment>
                    <Button onClick={e => setVisible2(false)}>Cancel</Button>
                    <Button onClick={e => setVisible2(false)} level="important">OK</Button>
                  </Fragment>
                }
        >
          确定删除吗？
        </Dialog>
        <div>
          <Button onClick={e => setVisible2(true)}>打开</Button>
          <Button onClick={e => setVisible2(false)}>关闭</Button>
        </div>
      </div>
    </div>
  );
}
