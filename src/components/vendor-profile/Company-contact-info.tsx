import { VendorStatusEnum } from '@/assets/constant';
import { verificationType } from '@/assets/dto';
import { VendorBusinessInterface } from '@/types';
import { getColorForVerificationState } from '@/utils';
import { Card, Col, Row } from 'antd';
import React from 'react'


function VerificationCard({ profileStatus }:  {profileStatus: verificationType| undefined}) {
    return (
        <div className='bg-[#F9F9F9] px-4 py-2 rounded' style={{ marginTop: -20}}>
            <Row className='my-1'>
                <Col span={24} className='flex'>
                    <h3 className='text-[#141C38] text-base'>Verification Status :</h3>
                    <p className='text-base ml-2' style={{
                        color: getColorForVerificationState(profileStatus)
                    }}>{profileStatus ? VendorStatusEnum[profileStatus]: "N/A"}</p>
                </Col>
            </Row>

            <Row className='my-1'>
                <Col span={24} className='flex'>
                    <h3 className='text-[#141C38] text-base'>Contact Expiring On </h3>
                    <p className='text-[#7E8299] text-base ml-2'>24/Aug/2023</p>
                </Col>
            </Row>

        </div>
    )
}

function CompanyContactInfo({ profileData, profileStatus }: {
    profileData: VendorBusinessInterface | undefined, profileStatus?: verificationType | undefined}) {
    return (
        <Card title="Company Contact Information" bordered={false}>
            <Row className='my-1'>
                <Col span={16}>
                    <h3 className='text-[#141C38] text-base'>Business Name</h3>
                    <p className='text-[#7E8299] text-base'>{profileData?.businessName ?? "N/A"}</p>
                </Col>
                <Col>
                    { profileStatus && <VerificationCard profileStatus={profileStatus}/>}
                </Col>
            </Row>

            <Row className='my-2'>
                <Col span={12}>
                    <h3 className='text-[#141C38] text-base'>Landmark</h3>
                    <p className='text-[#7E8299] text-base'>{profileData?.address?.landmark ?? "N/A"}</p>
                </Col>
                <Col span={12}>
                    <h3 className='text-[#141C38] text-base'>Street</h3>
                    <p className='text-[#7E8299] text-base'>{profileData?.address?.street}</p>
                </Col>
            </Row>

            <Row className='my-2'>
                <Col span={12} className='flex'>
                    <h3 className='text-[#141C38] text-base'>City : </h3>
                    <p className='text-[#7E8299] text-base ml-2'>{profileData?.address?.city}</p>
                </Col>
                <Col span={12} className='flex'>
                    <h3 className='text-[#141C38] text-base'>State :</h3>
                    <p className='text-[#7E8299] text-base ml-2'>{profileData?.address?.state}</p>
                </Col>
            </Row>

            <Row className='my-2'>
                <Col span={12} className='flex'>
                    <h3 className='text-[#141C38] text-base'>Postal/Zip Code :</h3>
                    <p className='text-[#7E8299] text-base ml-2'>{profileData?.address?.zipCode}</p>
                </Col>
                <Col span={12} className='flex'>
                    <h3 className='text-[#141C38] text-base'>Country :</h3>
                    <p className='text-[#7E8299] text-base ml-2'>{profileData?.address?.country}</p>
                </Col>
            </Row>

            <Row className='my-2'>
                <Col span={12} className='flex'>
                    <h3 className='text-[#141C38] text-base'>Mobile No. :</h3>
                    <p className='text-[#7E8299] text-base ml-2'>{profileData?.phoneNumber}</p>
                </Col>
                <Col span={12} className='flex'>
                    <h3 className='text-[#141C38] text-base'>Email ID :</h3>
                    <p className='text-[#7E8299] text-base ml-2'>{profileData?.email}</p>
                </Col>
            </Row>
        </Card>
    )
}

export default CompanyContactInfo;