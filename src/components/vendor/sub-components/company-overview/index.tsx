import { Form, Input, Radio, Select } from 'antd';
const { TextArea } = Input;
import { DatePicker } from 'antd/es';


export default function () {
    return (
        <>
            <Form.Item
                label="General Detail of Services / Goods"
                name="generalDetail"
                className='w-full max-w-full'
                rules={[{ required: true, message: 'Please input general detail!' }]}>
                <TextArea rows={4}
                    placeholder="Services / Goods" />
            </Form.Item>

            <div className='w-full flex flex-col lg:flex-row justify-between'>
                <Form.Item
                    label="Date of Establishing"
                    name="dateOfEstablishment"
                    className='w-full lg:w-1/2 mr-4'
                    rules={[{ required: true, message: 'Please input date of establishing!' }]}>
                    <DatePicker className='w-full' />
                </Form.Item>

                <Form.Item
                    label="Geographic Service Area"
                    name="areaDescription"
                    className='w-full lg:w-1/2'
                    rules={[{ required: true, message: 'Please input geographic service area description!' }]}>
                    <Input
                        placeholder="Enter Geographic Service Area" />
                </Form.Item>
            </div>

            <div className='w-full flex flex-col lg:flex-row justify-between'>

                <Form.Item
                    label="Business Type"
                    name="businessType"
                    className='w-full lg:w-1/2 mr-4'
                    rules={[{ required: true, message: 'Please select business type!' }]}>
                    <Select
                        className='w-full'
                        placeholder='Select Business Type'>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>

                <div className='w-full lg:w-1/2 flex justify-between'>
                    <Form.Item 
                        label="Insured"
                        name="insured"
                        rules={[{ required: true, message: 'Please select insured!' }]}>
                        <Radio.Group>
                            <Radio value="yes"> Yes </Radio>
                            <Radio value="no"> No </Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item 
                        label="Licensed"
                        name="licensed"
                        rules={[{ required: true, message: 'Please select licensed!' }]}>
                        <Radio.Group>
                            <Radio value="yes"> Yes </Radio>
                            <Radio value="no"> No </Radio>
                        </Radio.Group>
                    </Form.Item>
                </div>
            </div>

            <div className='w-full flex flex-col lg:flex-row justify-between'>
                <Form.Item
                    label="Gross Annual Sales"
                    name="grossAnnualSale"
                    className='w-full lg:w-1/2 mr-4'
                    rules={[{ required: true, message: 'Please input Gross Annual Sales!' }]}>
                    <Input
                        placeholder="Enter Gross Annual Sales" />
                </Form.Item>

                <Form.Item
                    label="Currency"
                    name="currency"
                    className='w-full lg:w-1/2'
                    rules={[{ required: true, message: 'Please input Currency!' }]}>
                    <Select
                        className='w-full'
                        placeholder='Select Currency'>
                        <Select.Option value="inr">INR</Select.Option>
                    </Select>
                </Form.Item>
            </div>
        </>
    )
}