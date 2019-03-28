import * as React from 'react';
import classes, {createScopedClasses} from 'utils/classes';
import {ReactNode} from 'react';
import './table.scss';

const componentName = 'Table';
const sc = createScopedClasses(componentName);

interface ColumnConfig {
  name: string;
  render: ((item: DataSourceItem) => ReactNode) | string;
}

interface DataSourceItem {
  [K: string]: any;

  id: string | number;
}

export interface IProps extends IStyledProps {
  dataSource: DataSourceItem[];
  columns: ColumnConfig[];
}

const renderColumn = (item: DataSourceItem, col: ColumnConfig) => {
  if (typeof col.render === 'string') {
    return item[col.render];
  } else {
    return col.render(item);
  }
};

const Table: GFC<IProps> = ({dataSource, columns, className, style}) => {
  const headers = columns.map(col =>
    <th key={col.name} className={sc('header')}>
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
