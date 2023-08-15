import { FC } from "react";
import { Layout, Menu, notification } from "antd";
const { Sider } = Layout;
import SubMenu from "antd/es/menu/SubMenu";
import { poppinFont } from "@/assets/fonts";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

interface SidebarProps {
    menuItems: Array<any>;
    collapsed: boolean;
    setCollapsed: Function;
}

const Sidebar: FC<SidebarProps> = ({ menuItems, collapsed, setCollapsed }) => {

    const [api, contextHolder] = notification.useNotification();
    const router = useRouter()

    const openNotification = (page: string) => {
        api.info({
            message: 'Feature',
            description:
                'Feature comming soon!!',
            duration: 2,
        });
    };

    const logoutHandler = () => {
        signOut({ callbackUrl: "/auth/signout" });
    };

    const renderMenuItems = (menuItems: any) => {
        return menuItems.map((item: any) => {
            if (item.children) {
                return (
                    <SubMenu
                        key={item.key}
                        icon={item.icon}
                        title={item.title}
                        className="ant-menu-item-group">
                        {renderMenuItems(item.children)}
                    </SubMenu>
                );
            }

            return item.key === "4" ? (
                <Menu.Item
                    className="logout-absolute"
                    key={item.key}
                    icon={item.icon}
                    onClick={() => logoutHandler()}>
                    <span className={`${poppinFont.className} font-light`}>{item.label}</span>
                </Menu.Item>
            ) : (
                <Menu.Item
                    key={item.key}
                    icon={item.icon}
                    onClick={() => {
                        if (item.path) {
                            router.push(item.path)
                        } else {
                            openNotification(item.label)
                        }
                    }}>
                    <span className={`${poppinFont.className} font-light`}>{item.label}</span>
                </Menu.Item>
            );
        });
    };

    return (
        <Sider
            trigger={null}
            breakpoint="md"
            collapsedWidth="75"
            collapsible
            collapsed={collapsed}
            onBreakpoint={(broken) => {
                setCollapsed(broken)
                console.log(broken);
            }}
            className="overflow-auto h-screen sidebar-bg-color">
            {contextHolder}
            <div
                className="flex flex-col my-6 pl-7 justify-center cursor-pointer"
                onClick={() => setCollapsed(!collapsed)}>
                <img src='/svgs/logo.svg' alt={'logo'}
                    className={`${!collapsed ? 'w-12 h-12' : 'w-6 h-6'} object-contain`} />
            </div>
            <Menu selectedKeys={["sidebar"]} mode="inline">
                {renderMenuItems(menuItems)}
            </Menu>
        </Sider>
    );
};

export default Sidebar;
