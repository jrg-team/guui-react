import * as React from 'react';
import {Table} from '..';
import {useEffect, useState} from 'react';

export default function (props: any) {
  const [dataSource, setDataSource] = useState<Array<{ id: number, name: string }>>([]);
  useEffect(() => {
    setTimeout(() => {
      setDataSource([{
        id: 1,
        name: 'frank'
      }, {
        id: 2,
        name: 'jack'
      }]);
    }, 1000);
  }, []);
  const columns = [{
    name: 'ID',
    render: 'id'
  }, {
    name: '姓名',
    render: 'name'
  }];
  return (
    <div className="TableExample">
      <h2>普通示例</h2>
      <div>
        <Table dataSource={dataSource} columns={columns}/>
      </div>
    </div>
  );
}
