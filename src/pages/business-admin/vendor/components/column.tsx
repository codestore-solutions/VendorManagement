import type { ColumnsType } from 'antd/es/table';
import { Tag } from "antd";
import { getColorForVerificationState } from '@/utils';
import { verificationType } from '@/assets/dto';
import { poppinFont } from '@/assets/fonts';
import { getColumnSearchProps } from '@/components/searchbar/table';
import { VendorDataType } from '..';
import { Button, Popconfirm } from 'antd';


interface Columnprops {
    searchInput: any;
    handleSearch: (selectedKeys: string[], confirm: () => void) => void;
    handleReset: (clearFilters: () => void) => void,
}

export default function fetchVendorColumns({
    searchInput,
    handleSearch,
    handleReset,
}: Columnprops) {
    const vendorColumns: ColumnsType<VendorDataType> = [
        {
            title: 'Sr. no',
            width: '12%',
            dataIndex: 'sno',
            render: (value) => (
                <span className="font-medium text-sm text-[#000000]">
                    {value}
                </span>)
        },
        {
            title: 'Vendor name',
            dataIndex: 'vendorName',
            width: '25%',
            render: (value) => (
                <span className="font-medium text-sm text-[#000000]">
                    {value}
                </span>)
        },
        {
            title: 'Mobile Number',
            dataIndex: 'mobileNumber',
            width: '18%',
            render: (value) => (
                <span className="font-medium text-sm text-[#000000]">
                    {value}
                </span>)
        },
        {
            title: 'Email',
            dataIndex: 'email',
            ...getColumnSearchProps('email',
                searchInput, handleSearch,
                handleReset, 'font-normal text-sm text-[#000000]'),

        },
        {
            title: 'Joining date',
            width: '14%',
            dataIndex: 'joiningDate',
            render: (value) => (
                <span className="font-normal text-sm text-[#000000]">
                    {value}
                </span>)
        },
        {
            title: 'Verification Status',
            width: '25%',
            dataIndex: 'verificationStatus',
            filters: [
                {
                    text: 'Verified',
                    value: 'Verified',
                },
                {
                    text: 'Rejected',
                    value: 'Rejected',
                },
                {
                    text: 'Not Verified',
                    value: 'Not Verified',
                },
            ],
            onFilter: (value: string | number | boolean, record) => record.verificationStatus === value,
            render: (status: verificationType) => (
                <Tag
                    color={getColorForVerificationState(status)}
                    className={`${poppinFont.className} font-light text-sm`}>
                    {status}
                </Tag>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            fixed: 'right',
            render: () => (
                <div className='flex'>
                    <button className='mr-1 w-6'>
                        <img src='/svgs/eye.svg' />
                    </button>
                    <Popconfirm
                        title="Reject vendor"
                        description="Are you sure to reject this vendor?"
                        okText="Yes"
                        cancelText="No"
                        placement="leftTop">
                        <button className='mr-1 w-6'>
                            <img src='/svgs/reject.svg' />
                        </button>
                    </Popconfirm>
                    <Popconfirm
                        title="Delete the vendor"
                        description="Are you sure to delete this vendor?"
                        okText="Yes"
                        cancelText="No"
                        placement="leftTop">
                        <button className='w-8'>
                            <img src='/svgs/delete.svg' />
                        </button>
                    </Popconfirm>
                </div>
            ),
        },
    ];

    return vendorColumns;
}


export const vendors: VendorDataType[] = [
    {
        key: 1,
        sno: 1,
        vendorName: "Joey ramore",
        mobileNumber: "9876543210",
        email: "joey.ramore@codestore.com",
        joiningDate: "01/05/2023",
        verificationStatus: "Verified",
    },
    {
        key: 2,
        sno: 2,
        vendorName: "Priya Patel",
        mobileNumber: "9998887776",
        email: "priya.patel@codestore.com",
        joiningDate: "15/06/2023",
        verificationStatus: "Rejected",
    },
    {
        key: 3,
        sno: 3,
        vendorName: "Amit Sharma",
        mobileNumber: "9871234567",
        email: "amit.sharma@codestore.com",
        joiningDate: "25/07/2023",
        verificationStatus: "Pending",
    },
    {
        key: 4,
        sno: 4,
        vendorName: "Sneha Gupta",
        mobileNumber: "9876541230",
        email: "sneha.gupta@codestore.com",
        joiningDate: "12/10/2023",
        verificationStatus: "Verified",
    },
    {
        key: 5,
        sno: 5,
        vendorName: "Manish Singh",
        mobileNumber: "8765432109",
        email: "manish.singh@codestore.com",
        joiningDate: "09/08/2023",
        verificationStatus: "Pending",
    },
    {
        key: 6,
        sno: 6,
        vendorName: "Deepika Sharma",
        mobileNumber: "7890123456",
        email: "deepika.sharma@codestore.com",
        joiningDate: "20/11/2023",
        verificationStatus: "Rejected",
    },
    {
        key: 7,
        sno: 7,
        vendorName: "Ashish Verma",
        mobileNumber: "9087654321",
        email: "ashish.verma@codestore.com",
        joiningDate: "07/09/2023",
        verificationStatus: "Verified",
    },
    {
        key: 8,
        sno: 8,
        vendorName: "Neha Patel",
        mobileNumber: "9876789876",
        email: "neha.patel@codestore.com",
        joiningDate: "14/12/2023",
        verificationStatus: "Pending",
    },
    {
        key: 9,
        sno: 9,
        vendorName: "Rahul Mehta",
        mobileNumber: "9876540987",
        email: "rahul.mehta@codestore.com",
        joiningDate: "18/07/2023",
        verificationStatus: "Verified",
    },
    {
        key: 10,
        sno: 10,
        vendorName: "Pooja Gupta",
        mobileNumber: "8765098765",
        email: "pooja.gupta@codestore.com",
        joiningDate: "29/03/2023",
        verificationStatus: "Rejected",
    },

];