import { menuItems } from "@/assets/menu";
import Sidebar from "@/components/sidebar/Sidebar"
// import { Layout } from "antd";
import { useState } from "react";
import { Button, Layout } from 'antd';
import NavHeader from "@/components/header";

interface layoutInterface {
    children: React.ReactElement
}

const { Content } = Layout;

export default function ({ children }: layoutInterface) {

    const [collapsed, setCollapsed] = useState(false)

    const menuHandler = () => {
        setCollapsed(true)
    }

    return (
        <Layout hasSider>
            <Sidebar 
                menuItems={menuItems} 
                collapsed={collapsed} 
                setCollapsed={setCollapsed}
                />
            <Layout>
                <NavHeader
                    collapsed={collapsed}/>
                <Content 
                    style={{ 
                        paddingLeft: collapsed ? 34 : 66, 
                        paddingRight: 30, 
                        paddingTop: 30 }}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}