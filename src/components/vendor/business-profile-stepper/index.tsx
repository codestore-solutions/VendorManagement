import React, { useState, useEffect } from 'react';
import { Button, message, Steps, Form } from 'antd';
import CompanyContactInfo from '../sub-components/company-contact-info';
import CompanyOverview from '../sub-components/company-overview';
import DocumentVerification from '../sub-components/document-verification';
import BankingInfo from '../sub-components/banking-info';
import { BusinessInfoOverviewInterface, CompanyInfoInterface } from '@/types';
import { updateVendorBusinessCompanyInfo, updateVendorBusinessCompanyOverview, updateVendorBusinessDocs } from '@/httpServices/userService';

const steps = [
    {
        title: 'Company Contact Information',
        content: <CompanyContactInfo />,
    },
    {
        title: 'Company Overview',
        content: <CompanyOverview />,
    },
    {
        title: 'Document for Verification',
        content: <DocumentVerification />,
    },
    {
        title: 'Banking Information',
        content: <BankingInfo />
    }
];


export default function ({ formStep, businessData }: { formStep: number, businessData: any }) {

    const [current, setCurrent] = useState(0);
    const [loading, setLoading] = useState(false)

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    useEffect(() => {
        setCurrent(formStep - 1)
    }, [formStep])

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    const onFormSubmitHandler = async (values: CompanyInfoInterface | BusinessInfoOverviewInterface) => {
        try {
            const businessId = 7;
            setLoading(true)
            console.log(values, current)
            switch (current) {
                case 0:
                    await updateVendorBusinessCompanyInfo(businessId, values as CompanyInfoInterface);
                    break;

                case 1:
                    await updateVendorBusinessCompanyOverview(businessId, values as BusinessInfoOverviewInterface);
                    break;

                case 2:
                    const { businessRegCert, identifyProof, addressProof } = values as any;

                    const formData = new FormData()
                    formData.append("businessRegCert", businessRegCert.file.originFileObj)
                    formData.append("identifyProof", identifyProof.file.originFileObj)
                    formData.append("addressProof", addressProof.file.originFileObj)
                    await updateVendorBusinessDocs(businessId, formData as any);
                    break;
                default:
            }
            setCurrent((e) => ++e);
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <>
            <Form
                name="complex-form"
                layout="vertical"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFormSubmitHandler}
                initialValues={{ ...businessData }}>
                <Steps current={current} items={items} />
                <div className='mt-8'>{steps[current].content}</div>
                <div style={{ marginTop: 24 }}>
                    {current === steps.length - 1 && (
                        <>
                            <p className="font-normal text-sm sm:text-sm mb-2">
                                I hereby affirm that all information provided above is accurate
                                to the best of my knowledge and belief, and I understand that this information will be
                                considered material in the evaluation of quotations, bids and proposals.
                            </p>
                        </>
                    )}
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Previous
                        </Button>
                    )}
                    {current < steps.length - 1 && (
                        <Button
                            type="primary"
                            style={{ margin: '0 8px' }}
                            onClick={next}>
                            Next
                        </Button>
                    )}
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ margin: '0 8px' }}
                        loading={loading}>
                        Submit
                    </Button>
                </div>
            </Form>
        </>
    )
}