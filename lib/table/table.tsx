import * as React from 'react';
import classes, {createScopedClasses} from 'utils/classes';
import {ReactNode} from 'react';
import './table.scss';

const componentName = 'Table';
const sc = createScopedClasses(componentName);

export interface TableColumn {
  name: string;
  width?: string;
  render: ((item: TableDataSourceItem, column: TableColumn) => ReactNode) | string;
}

export interface TableDataSourceItem {
  [K: string]: any;

  id: string | number;
}

export interface IProps extends IStyledProps {
  dataSource: TableDataSourceItem[];
  columns: TableColumn[];
}

const renderColumn = (item: TableDataSourceItem, col: TableColumn) => {
  if (typeof col.render === 'string') {
    return item[col.render];
  } else {
    return col.render.call(undefined, item, col);
  }
};

const Table: GFC<IProps> = ({dataSource, columns, className, style}) => {
  const headers = columns.map(col =>
    <th key={col.name} className={sc('header')} style={{width: col.width}}>
      {col.name}
    </th>
  );
  const rows = dataSource.map(item =>
    <tr key={item.id}>
      {columns.map(col =>
        <td key={col.name} className={sc('td')}>
          {renderColumn(item, col)}
        </td>
      )}
    </tr>
  );
  const table = (
    <table className={sc()}>
      <thead>
      <tr>
        {headers}
      </tr>
      </thead>
      <tbody>
      {rows}
      </tbody>
    </table>
  );
  const empty = (
    <div className={sc('empty')}>没有数据</div>
  );
  return (
    <div className={classes(sc('wrapper'), className)} style={style}>
      {dataSource && dataSource.length > 0 ? table : empty}
    </div>
  );
};
Table.displayName = componentName;
Table.defaultProps = {};
Table.propTypes = {};
export default Table;
