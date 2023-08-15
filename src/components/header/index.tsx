import { Layout } from 'antd';
import { Avatar, Space } from "antd";
import { poppinFont } from '@/assets/fonts';
import { FC } from 'react';
const { Header } = Layout;


interface navHeaderProps {
    collapsed: boolean
}

const NavHeader:FC<navHeaderProps> = ({ collapsed }) => {
    return (
        <Header id="navbar" className={`flex justify-between 
            items-center bg-white py-8 ${collapsed ? 'pl-16':'pl-24'}`}>
            <div className="nav-left flex">
                <p className={`font-medium tracking-tight
                 text-[#7E8299] text-base 
                 ${poppinFont.className} font-normal`}>Vendor Management</p>
            </div>
            <div className="nav-right hidden sm:block">
                <div className="flex items-center">
                    <div className='cursor-pointer px-6'>
                        <img src='/svgs/notification.svg' alt="" className='w-6 h-6 object-fill' />
                    </div>
                    <div className="flex cursor-pointer items-center">
                        <Avatar
                            size={36}
                            src={
                                <img
                                    src={
                                        "https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                                    }
                                    alt="avatar"
                                    className='border-2 border-gray-300 rounded'
                                />
                            }
                        />
                        <Space className='flex flex-col items-start justify-center ml-1'>
                            <p className={`font-normal text-sm
                                        pr-2 text-[#000000] leading-none 
                                        ${poppinFont.className}`}>Olivia Luca</p>
                            <p className={`font-light text-xs pr-2 text-[#7E8299] leading-none 
                                        ${poppinFont.className}`}>olivia@gmail.com</p>
                        </Space>

                    </div>
                </div>
            </div>
        </Header>
    )
}

export default NavHeader;