import { Form, Input } from 'antd';


export default function () {
    return (
        <>
            <div className='w-full flex flex-col lg:flex-row justify-between'>
                <Form.Item
                    label="Bank Name"
                    name="bankName"
                    className='w-full lg:w-1/2 mr-4'
                    rules={[{ required: true, message: 'Please input City name!' }]}>
                    <Input
                        placeholder="Enter Bank Name" />
                </Form.Item>

                <Form.Item
                    label="Beneficiary Name"
                    name="beneficiaryName"
                    className='w-full lg:w-1/2 mr-4'
                    rules={[{ required: true, message: 'Please input City name!' }]}>
                    <Input
                        placeholder="Enter Beneficiary Name" />
                </Form.Item>

                <Form.Item
                    label="Account Number"
                    name="accountNumber"
                    className='w-full lg:w-1/2'
                    rules={[{ required: true, message: 'Please input State Province' }]}>
                    <Input
                        placeholder="Enter Account Number" />
                </Form.Item>
            </div>

        </>
    )
}