import React, { useState } from 'react';
import { Button, message, Steps, Form } from 'antd';
import CompanyContactInfo from '../sub-components/company-contact-info';
import CompanyOverview from '../sub-components/company-overview';
import DocumentVerification from '../sub-components/document-verification';
import BankingInfo from '../sub-components/banking-info';

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


export default function () {

    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    return (
        <>
            <Form
                name="complex-form"
                layout="vertical"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}>
                <Steps current={current} items={items} />
                <div className='mt-8'>{steps[current].content}</div>
                <div style={{ marginTop: 24 }}>
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <>
                            <p className="font-normal text-sm sm:text-sm mb-2">
                                I hereby affirm that all information provided above is accurate
                                to the best of my knowledge and belief, and I understand that this information will be
                                considered material in the evaluation of quotations, bids and proposals.
                            </p>
                            <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                Submit
                            </Button>
                        </>
                    )}
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Previous
                        </Button>
                    )}
                </div>
            </Form>
        </>
    )
}