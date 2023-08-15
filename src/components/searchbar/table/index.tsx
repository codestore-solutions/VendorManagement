import React from 'react';
import { poppinFont } from '@/assets/fonts';
import { VendorDataIndex, VendorDataType } from '@/pages/vendor';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import type { ColumnType } from 'antd/es/table';


export const getColumnSearchProps = (
    dataIndex: VendorDataIndex,
    searchInput: any,
    handleSearch: Function,
    handleReset: Function,
    className: string
): ColumnType<VendorDataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }: any) => (
        <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
            <Input
                ref={searchInput}
                placeholder={`Search ${dataIndex}`}
                value={selectedKeys[0]}
                onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onPressEnter={() => handleSearch(selectedKeys as string[], confirm)}
                style={{ marginBottom: 8, display: 'block' }}
            />
            <Space className='flex items-center'>
                <Button
                    className={`${poppinFont.className} flex items-center font-light bg-[#1677ff] text-white`}
                    onClick={() => handleSearch(selectedKeys as string[], confirm)}
                    icon={<SearchOutlined />}
                    size="small"
                    style={{ width: 90 }}>
                    Search
                </Button>
                <Button
                    className={`${poppinFont.className} font-light`}
                    onClick={() => clearFilters && handleReset(clearFilters)}
                    size="small"
                    style={{ width: 90 }}>
                    Reset
                </Button>
                <Button
                    type="link"
                    className={`${poppinFont.className} font-light`}
                    size="small"
                    onClick={() => {
                        close();
                    }}>
                    close
                </Button>
            </Space>
        </div>
    ),
    filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
        record[dataIndex]
            .toString()
            .toLowerCase()
            .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
        if (visible && searchInput) {
            setTimeout(() => searchInput?.current?.select(), 100);
        }
    },
    render: (value) => (<span className={`${className} text-base
        ${poppinFont.className}`}>{value}</span>)
});