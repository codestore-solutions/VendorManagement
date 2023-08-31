import { businessAdminMenuItems, vendorMenuItems } from "@/assets/menu";
import Sidebar from "@/components/sidebar/Sidebar"
// import { Layout } from "antd";
import { useState } from "react";
import { Button, Layout } from 'antd';
import NavHeader from "@/components/header";
import { useSession } from "next-auth/react";

interface layoutInterface {
    children: React.ReactElement
}

const { Content } = Layout;

export default function ({ children }: layoutInterface) {

    const [collapsed, setCollapsed] = useState(false)
    const { data: session } = useSession()

    const menuHandler = () => {
        setCollapsed(true)
    }

    return (
        <Layout hasSider>
            <Sidebar
                menuItems={session?.user.role === 2 ? businessAdminMenuItems : vendorMenuItems}
                collapsed={collapsed}
                setCollapsed={setCollapsed}
            />
            <Layout>
                <NavHeader
                    collapsed={collapsed}
                    email={session?.user.email}
                    name={session?.user.name} />
                <Content
                    style={{
                        paddingLeft: collapsed ? 34 : 66,
                        paddingRight: 30,
                        paddingTop: 30
                    }}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}