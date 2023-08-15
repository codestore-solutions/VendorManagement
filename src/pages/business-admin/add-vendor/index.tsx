import CrumbAndSearchLayer from "@/components/searchlayer";
import BankingInfo from "@/components/vendor/sub-components/banking-info";
import CompanyContactInfo from "@/components/vendor/sub-components/company-contact-info";
import CompanyOverview from "@/components/vendor/sub-components/company-overview";
import DocumentVerification from "@/components/vendor/sub-components/document-verification";
import { Button, Card, Form } from "antd";
import { useRouter } from 'next/router';
import { useRef } from "react";
import type { FormInstance } from 'antd/es/form';


export default function AddVendor() {
    const router = useRouter();
    const formRef = useRef<FormInstance>(null);

    const goBack = () => {
        router.back();
    }

    const onFinish = (values: any) => {
        console.log(values);
    }

    const onReset = () => {
        formRef.current?.resetFields();
    }

    return (
        <div>
            <CrumbAndSearchLayer
                searchbar={false}
                breadcrumbItems={[{ title: 'Vendor Management' }]}
                goBack={goBack} />

            <Form
                name="complex-form"
                onFinish={onFinish}
                layout="vertical"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}>

                <Card>
                    <h1 className="font-semibold text-lg sm:text-lg leading-10">Company Contact Information</h1>
                    <hr className="my-1 mb-6" />
                    <CompanyContactInfo />
                </Card>

                <Card className="my-8">
                    <h1 className="font-semibold text-lg sm:text-lg leading-10">Company Overview</h1>
                    <hr className="my-1 mb-6" />
                    <CompanyOverview />
                </Card>

                <Card className="my-8">
                    <h1 className="font-semibold text-lg sm:text-lg leading-10">Document for Verification</h1>
                    <hr className="my-1 mb-6" />
                    <DocumentVerification />
                </Card>

                <Card className="my-8">
                    <h1 className="font-semibold text-lg sm:text-lg leading-10">Banking Information</h1>
                    <hr className="my-1 mb-6" />
                    <BankingInfo />
                </Card>

                <Card className="my-8">
                    <p className="font-normal text-sm sm:text-sm leading-10 mb-2">
                        I hereby affirm that all information provided above is accurate
                        to the best of my knowledge and belief, and I understand that this information will be
                        considered material in the evaluation of quotations, bids and proposals.
                    </p>
                    <hr className="my-1 mb-6" />
                    <div className="flex justify-center">
                        <Button type="primary" className="mx-2" htmlType="submit">Submit</Button>
                        <Button htmlType="button" onClick={onReset}>Cancel</Button>
                    </div>
                </Card>

            </Form>
        </div>
    )
} 