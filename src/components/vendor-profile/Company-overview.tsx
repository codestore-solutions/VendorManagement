import { VendorBusinessInterface } from '@/types';
import { Card, Col, Row } from 'antd';
import React from 'react'


function CompanyOverviewInfo({ profileData }: {profileData: VendorBusinessInterface | undefined}) {
    return (
        <Card title="Company Overview" bordered={false} className='my-8'>
            <Row className='my-1'>
                <Col span={24}>
                    <h3 className='text-[#141C38] text-base'>General Detail of Services / Goods</h3>
                    <p className='text-[#7E8299] text-base'>{profileData?.generalDetail ?? "N/A"}</p>
                </Col>
            </Row>

            <Row className='my-2'>
                <Col span={12} className='flex'>
                    <h3 className='text-[#141C38] text-base'>Date of Establishing :</h3>
                    <p className='text-[#7E8299] text-base ml-2'>{profileData?.dateOfEstablishment??"N/A"}</p>
                </Col>
                <Col span={12} className='flex'>
                    <h3 className='text-[#141C38] text-base'>Geographic Service Area :</h3>
                    <p className='text-[#7E8299] text-base ml-2'>NBXBBX</p>
                </Col>
            </Row>

            <Row className='my-2'>
                <Col span={12} className='flex'>
                    <h3 className='text-[#141C38] text-base'>Business Type : </h3>
                    <p className='text-[#7E8299] text-base ml-2'>{profileData?.vendorBusinessType??"N/A"}</p>
                </Col>
                <Col span={12}>
                    <Row>
                        <Col span={12} className='flex'>
                            <h3 className='text-[#141C38] text-base'>Insured :</h3>
                            <p className='text-[#7E8299] text-base ml-2'>{profileData?.insured? "Yes": "No"}</p>
                        </Col>

                        <Col span={12} className='flex'>
                            <h3 className='text-[#141C38] text-base'>Licensed :</h3>
                            <p className='text-[#7E8299] text-base ml-2'>{profileData?.licensed ? "Yes": "No"}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className='my-2'>
                <Col span={12} className='flex'>
                    <h3 className='text-[#141C38] text-base'>Gross Annual Sales :</h3>
                    <p className='text-[#7E8299] text-base ml-2'>{profileData?.grossAnnualSale??"N/A"}</p>
                </Col>
                <Col span={12} className='flex'>
                    <h3 className='text-[#141C38] text-base'>Currency :</h3>
                    <p className='text-[#7E8299] text-base ml-2'>{profileData?.currency}</p>
                </Col>
            </Row>
        </Card>
    )
}

export default CompanyOverviewInfo;