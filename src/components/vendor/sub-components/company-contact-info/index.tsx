import { validatePhoneNumber } from '@/utils/validation';
import { Form, Input, Select } from 'antd';

const { TextArea } = Input;
const { Option } = Select;


const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
        </Select>
    </Form.Item>
);


export default function () {
    return (
        <>
            <Form.Item
                label="Business Name"
                name="businessName"
                className='w-full max-w-full'
                rules={[{ required: true, message: 'Please input vendor business name!' }]}>
                <Input
                    placeholder="Enter Business Name"
                    className='color-[#141C38]' />
            </Form.Item>

            <div className='w-full flex flex-col lg:flex-row justify-between'>
                <Form.Item
                    label="Street Address I"
                    name="street1"
                    className='w-full lg:w-1/2 mr-4'
                    rules={[{ required: true, message: 'Please input vendor business street I!' }]}>
                    <TextArea rows={4}
                        placeholder="Enter Street Address I" />
                </Form.Item>

                <Form.Item
                    label="Street Address II"
                    name="street2"
                    className='w-full lg:w-1/2'
                    rules={[{ required: true, message: 'Please input vendor business street II!' }]}>
                    <TextArea rows={4}
                        placeholder="Enter Street Address II" />
                </Form.Item>
            </div>

            <div className='w-full flex flex-col lg:flex-row justify-between'>
                <Form.Item
                    label="City"
                    name="city"
                    className='w-full lg:w-1/2 mr-4'
                    rules={[{ required: true, message: 'Please input City name!' }]}>
                    <Input
                        placeholder="Enter City" />
                </Form.Item>

                <Form.Item
                    label="State Province"
                    name="state"
                    className='w-full lg:w-1/2'
                    rules={[{ required: true, message: 'Please input State Province' }]}>
                    <Input
                        placeholder="Enter State Province" />
                </Form.Item>
            </div>

            <div className='w-full flex flex-col lg:flex-row justify-between'>
                <Form.Item
                    label="Postal / Zip Code"
                    name="zipCode"
                    className='w-full lg:w-1/2 mr-4'
                    rules={[{ required: true, message: 'Please input Postal / Zip Code!' }]}>
                    <Input
                        placeholder="Enter Postal / Zip Code" />
                </Form.Item>

                <Form.Item
                    label="Country"
                    name="country"
                    className='w-full lg:w-1/2'
                    rules={[{ required: true, message: 'Please input Country name!' }]}>
                    <Input
                        placeholder="Enter country name" />
                </Form.Item>
            </div>

            <div className='w-full flex flex-col lg:flex-row justify-between'>
                <Form.Item
                    label="Mobile Number"
                    name="mobileNumber"
                    className='w-full lg:w-1/2 mr-4'
                    rules={[
                        {
                            required: true,
                            message: 'Please input Mobile Number!'
                        },
                        { validator: validatePhoneNumber },
                    ]}>
                    <Input
                        addonBefore={prefixSelector}
                        placeholder="Enter mobile number" />
                </Form.Item>

                <Form.Item
                    label="Email ID"
                    name="email"
                    className='w-full lg:w-1/2'
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid Email!',
                        },
                        {
                            required: true,
                            message: 'Please input Email ID!'
                        }]}>
                    <Input
                        placeholder="Enter email address" />
                </Form.Item>
            </div>
        </>
    )
}