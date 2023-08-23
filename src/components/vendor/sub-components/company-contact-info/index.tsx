import { validateLongitude, validatePhoneNumber,
    validateLatitude } from '@/utils/validation';
import { Form, Input, Select } from 'antd';

const { TextArea } = Input;
const { Option } = Select;


const prefixCountryCodeSelector = (
    <Form.Item name="countryCode" 
        noStyle
        rules={[{ required: true, message: 'Please input country code!' }]}>
        <Select style={{ width: 90 }} placeholder="Code">
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
                    label="Landmark"
                    name="landmark"
                    className='w-full lg:w-1/2 mr-4'
                    rules={[{ required: true, message: 'Please input landmark!' }]}>
                    <TextArea rows={4}
                        placeholder="Enter landmark" />
                </Form.Item>

                <Form.Item
                    label="Street Address"
                    name="street"
                    className='w-full lg:w-1/2'
                    rules={[{ required: true, message: 'Please input vendor business street!' }]}>
                    <TextArea rows={4}
                        placeholder="Enter Street Address" />
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
                    label="State/Province"
                    name="state"
                    className='w-full lg:w-1/2'
                    rules={[{ required: true, message: 'Please input State Province' }]}>
                    <Input
                        placeholder="Enter State/Province" />
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
                    label="Phone Number"
                    name="phoneNumber"
                    className='w-full lg:w-1/2 mr-4'
                    rules={[
                        {
                            required: true,
                            message: 'Please input Phone Number!'
                        },
                        { validator: validatePhoneNumber },
                    ]}>
                    <Input
                        addonBefore={prefixCountryCodeSelector}
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
                        type="email"
                        placeholder="Enter email" />
                </Form.Item>
            </div>
            <div className='w-full flex flex-col lg:flex-row justify-between'>
                <div className='w-full lg:w-1/2 flex justify-between'>
                    <Form.Item
                        label="Latitude"
                        name="latitude"
                        className='w-full lg:w-1/2 mr-2'
                        rules={[
                            {
                                required: true,
                                message: 'Please input latitude value!'
                            },
                            { validator: validateLatitude },
                        ]}>
                        <Input
                            type="number"
                            placeholder="Enter latitude" />
                    </Form.Item>

                    <Form.Item
                        label="Longitude"
                        name="longitude"
                        className='w-full lg:w-1/2  ml-2'
                        rules={[
                            {
                                required: true,
                                message: 'Please input longitude value!'
                            },
                            { validator: validateLongitude }
                        ]}>
                        <Input
                            type="number"
                            placeholder="Enter longitude" />
                    </Form.Item>
                </div>
            </div>
        </>
    )
}