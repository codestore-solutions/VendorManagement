import { notification } from "antd";

export const Notification = (page: string) => {
    const [api] = notification.useNotification();

    api.open({
        message: page,
        description:
            'New Feature in Progress',
        duration: 0,
    });
    return null
}