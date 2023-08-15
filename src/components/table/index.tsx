import React, { FC } from 'react';
import { Table, } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import type { TableProps } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';


type TablePaginationPosition =
    | 'topLeft'
    | 'topCenter'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomCenter'
    | 'bottomRight';


export interface DataTableProps {
    loading?: boolean;
    bordered?: boolean;
    size?: SizeType;
    columns: any[];
    data: any[];
    hasData?: boolean;
    rowSelection?: TableRowSelection<any> | undefined;
    top?: TablePaginationPosition | 'none';
    bottom?: TablePaginationPosition;
    yScroll?: number | boolean;
    xScroll?: string | null | 'Fixed Columns' | 'Scroll' | 'Unset';
}


const DataTable: FC<DataTableProps> = ({
    loading, size,
    hasData = true,
    top,
    columns=[], 
    data=[],
    rowSelection,
    bottom = 'bottomRight',
    yScroll, xScroll,
    bordered }) => {


    const scroll: { x?: number | string; y?: number | string } = {};
    if (yScroll) {
        scroll.y = 240;
    }
    if (xScroll) {
        scroll.x = '100vw';
    }

    const tableColumns = columns.map((item) => ({ ...item }));
    if (xScroll === 'fixed') {
        tableColumns[0].fixed = true;
        tableColumns[tableColumns.length - 1].fixed = 'right';
    }

    const tableProps: TableProps<any> = {
        loading,
        bordered,
        size,
        rowSelection,
        scroll,
    };

    return (
        <Table
            className='overflow-x-scroll'
            {...tableProps}
            pagination={{ position: [top as TablePaginationPosition, bottom] }}
            columns={tableColumns}
            dataSource={hasData ? data : []}
            scroll={scroll}
        />
    );
};

DataTable.defaultProps = {
    loading: false,
    bordered: false,
    size: 'large',
    xScroll: null,
    yScroll: false,
    top: 'none',
    bottom: 'bottomRight',
} as Partial<DataTableProps>;

export default DataTable;