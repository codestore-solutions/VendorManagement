import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Button, Result, Spin } from 'antd';

const antIcon = <LoadingOutlined style={{ fontSize: 44 }} spin />;
interface PageLevelLoaderProps {
    loader: boolean;
    error: string | null;
    onRetry: () => void;
}
function PageLevelLoader({ loader, error, onRetry }: PageLevelLoaderProps) {
    if(loader === false && error === null) return null;
    return (
        <div className='flex justify-center items-center' style={{ minHeight: '80vh' }}>
            {loader && <Spin indicator={antIcon} />}
            {error && <Result
                status="error"
                title="Something went wrong!!"
                subTitle={error}
                extra={[
                    <Button 
                        type="primary" 
                        onClick={onRetry}>
                        Retry !!
                    </Button>
                ]}
            ></Result>}
        </div>
    )
}

export default PageLevelLoader