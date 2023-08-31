import { VendorBusinessInterface } from '@/types';
import { maskSensitiveInfo } from '@/utils';
import { Card, Col, Row } from 'antd';
import React from 'react'


function BankingInfo({ profileData }: {profileData: VendorBusinessInterface | undefined }) {
    return (
        <Card title="Banking Information" bordered={false} className='my-8'>
            <Row className='my-2'>
                <Col span={8} className='flex'>
                    <h3 className='text-[#141C38] text-base'>Bank Name : </h3>
                    <p className='text-[#7E8299] text-base ml-2'>{maskSensitiveInfo(profileData?.bankName)}</p>
                </Col>
                <Col span={8} className='flex'>
                    <h3 className='text-[#141C38] text-base'>Beneficiary Name :</h3>
                    <p className='text-[#7E8299] text-base ml-2'>{maskSensitiveInfo(profileData?.beneficiaryName)}</p>
                </Col>
                <Col span={8} className='flex'>
                    <h3 className='text-[#141C38] text-base'>Account Number :</h3>
                    <p className='text-[#7E8299] text-base ml-2'>{maskSensitiveInfo(profileData?.accountNumber)}</p>
                </Col>
            </Row>
            <Row className='flex justify-between pr-24 mt-4 border-t pt-4'>
                <h3 className='text-[#000000] font-semibold'>Total Payout : 9876548</h3>
                <h3 className='text-[#000000] font-semibold'>Pending Payout : 9876548</h3>
            </Row>
        </Card>
    )
}

export default BankingInfo;