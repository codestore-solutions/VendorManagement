
import { useState, type ReactElement } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Button, Form, Input, Select, notification } from 'antd';
import Link from 'next/link';
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import { signUpUser } from '@/httpServices/userService';
import { SignUpFormFinalData } from '@/types';
import { passwordValidationRegex } from '@/utils';
import { businessAdminId } from '@/assets/constant';

const { Option } = Select;

interface RegistrationValues {
    email: string;
    password: string;
    confirmPassword: string;
}

export default function Registration() {
    const { data: session } = useSession()
    const router = useRouter()

    if (session) {
        router.replace('/business-admin/vendor')
    }

    const [loading, setLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string | null>()
    const onFinish = async (values: SignUpFormFinalData) => {
        try {
            const { firstName, lastName, email, countryCode,
                phoneNumber, password, confirmPassword } = values;

            if (password !== confirmPassword) {
                setErrorMessage('Passwords do not match');
                return;
            }

            if (!passwordValidationRegex.test(password)) {
                setErrorMessage('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character');
                return;
            }

            setLoading(true)
            setErrorMessage(null)

            await signUpUser({ 
                firstName, lastName, 
                email,
                businessAdminId: businessAdminId,
                password,
                phoneNumber,
                countryCode
            });
  
            router.push('/auth/signin');
            notification.success({
                message: 'Signup successfull',
                description: 'You are registered successfully!!',
            });
            setLoading(false)
        } catch (error) {
            setLoading(false)

            console.log(error)
        }
        console.log('Received values of form: ', values);

    };

    const prefixCountryCodeSelector = (
        <Form.Item name="countryCode" noStyle={true}>
            <Select style={{ width: 90 }} placeholder="Code">
                <Option value="86">+91</Option>
                <Option value="87">+92</Option>
            </Select>
        </Form.Item>
    );

    return (
        <div className='min-h-screen flex'>
            <div className='sm:w-1/3 bg-black min-h-screen'></div>
            <div className='w-full bg-white min-h-screen flex justify-center items-center flex-col'>
                <div className='w-full lg:w-2/3 xl:w-5/12 p-8'>
                    <div className='mb-4'>
                        <p className='font-semibold text-3xl'>Sign Up</p>
                        <p>Ordering and Delivery</p>
                    </div>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}>
                        <Form.Item
                            name="firstName"
                            rules={[{ required: true, message: 'Please input your first name!' }]}>
                            <Input
                                type="text"
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="First name"
                            />
                        </Form.Item>
                        <Form.Item
                            name="lastName"
                            rules={[{ required: true, message: 'Please input your last name!' }]}>
                            <Input
                                type="text"
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Last name"
                            />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your Email!' }]}>
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Email"
                            />
                        </Form.Item>

                        <Form.Item
                            name="phoneNumber"
                            rules={[{ required: true, message: 'Please input your phone number!' }]}>
                            <Input addonBefore={prefixCountryCodeSelector}
                                style={{ width: '100%' }}
                                placeholder='Phone number' />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}>
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item
                            name="confirmPassword"
                            rules={[{ required: true, message: 'Please re-enter your Password!' }]}>
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Confirm Password"
                            />
                        </Form.Item>

                        {errorMessage &&
                            <Alert message={errorMessage} type="error" showIcon className='mb-3 text-sm' />}

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                loading={loading}>
                                Register
                            </Button>
                            <br />
                            <p className='mt-1'>Already have an account,
                                <Link href="/auth/signin" className='text-[#545BFC] ml-1 font-semibold'>login</Link></p>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

Registration.getLayout = function getLayout(page: ReactElement) {
    return (
        <div>
            {page}
        </div>
    )
}