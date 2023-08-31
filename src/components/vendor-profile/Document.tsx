import { VendorBusinessInterface } from '@/types';
import { generateFileObj } from '@/utils';
import { Card, Col, Image, Row } from 'antd';
import React from 'react'


function DocumentInfo({ profileData }: {profileData: VendorBusinessInterface | undefined }) {
    return (
        <Card title="Document for Verification" bordered={false} className='my-8'>
            <Row className='my-1'>
                <Col span={8}>
                    <h3 className='text-[#141C38] text-base'>Business Registration Certificate</h3>
                    <Image className='p-4 rounded'
                        src={generateFileObj('rc', profileData?.businessRegCert??"").url}
                    />
                </Col>
                <Col span={8}>
                    <h3 className='text-[#141C38] text-base'>Identity Proof</h3>
                    <Image className='p-4 rounded'
                        src={generateFileObj('rc', profileData?.identityProof??"").url}
                    />
                </Col>
                <Col span={8}>
                    <h3 className='text-[#141C38] text-base'>Address Proof</h3>
                    <Image className='p-4 rounded'
                        src={generateFileObj('rc', profileData?.addressProof??"").url}
                    />
                </Col>
            </Row>
        </Card>
    )
}

export default DocumentInfo;