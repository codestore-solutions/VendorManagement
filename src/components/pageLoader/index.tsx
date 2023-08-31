import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Button, Result, Spin } from 'antd';

const antIcon = <LoadingOutlined style={{ fontSize: 44 }} spin />;
interface PageLevelLoaderProps {
    loader: boolean;
    error: string | null;
    success: boolean;
    onRetry: () => void;
}
function PageLevelLoader({ loader, success, error, onRetry }: PageLevelLoaderProps) {
    if(loader === false && error === null && !success) return null;
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
            {success && <Result
                status="success"
                title="Registration completed!!"
                subTitle={"Go back to profile page"}
            ></Result>}
        </div>
    )
}

export default PageLevelLoader