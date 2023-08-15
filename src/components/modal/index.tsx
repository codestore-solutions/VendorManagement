import React, { ReactNode } from 'react';
import { Modal } from 'antd';


interface ModalProps {
    isOpen: boolean;
    children: React.ReactElement;
    closeIcon?: boolean | ReactNode
    footerBtn?: null | boolean;
    title?: string;
    width?: string| number;
}

export default function ({ isOpen, children, closeIcon, footerBtn, title, width }: ModalProps) {

    return (
        <Modal
            title={title}
            open={isOpen}
            closeIcon={<></>}
            width={width}
            centered={true}
            footer={footerBtn}>
            {children}
        </Modal>
    );
};