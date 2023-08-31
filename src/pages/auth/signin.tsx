import { useState, type ReactElement } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Button, Checkbox, Form, Input } from 'antd';
import Link from 'next/link';
import { useSession, signIn } from "next-auth/react"
import { useRouter } from 'next/router'


interface LoginValues {
    email: string;
    password: string;
}

export default function Login() {

    const { data: session } = useSession()
    const router = useRouter()

    if (session) {
        setTimeout(() => {
            router.push('/')
        }, 500)
    }

    const [loading, setLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string | null>()
    const onFinish = async (values: any) => {
        console.log('Received values of form: ', values);
        setLoading(true)
        const { email, password } = values;
        const res = await signIn('credentials', {
            callbackUrl: '/',
            email,
            password,
            redirect: false,
        });
        if (res?.error) {
            setLoading(false)
            setErrorMessage("Invalid username or password. Please try again")
            setTimeout(() => {
                setErrorMessage(null)
            }, 3000)
        }
    };


    return (
        <div className='min-h-screen flex'>
            <div className='sm:w-1/3 bg-black min-h-screen'></div>
            <div className='w-full bg-white min-h-screen flex justify-center items-center flex-col'>
                <div className='w-full lg:w-2/3 xl:w-5/12 p-8'>
                    <div className='mb-4'>
                        <p className='font-semibold text-3xl'>Sign In</p>
                        <p>Ordering and Delivery</p>
                    </div>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your Email!' }]}>
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Email"
                            />
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

                        <Form.Item className='remember-forgotpass-row'>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Link href="" className='text-[#000]'>
                                Forgot password?
                            </Link>
                        </Form.Item>
                        {errorMessage &&
                            <Alert message={errorMessage} type="error" showIcon className='mb-3 text-sm' />}

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                loading={loading}>
                                Log in
                            </Button>
                            <br />
                            <p className='mt-1'>Vendor? don't have any account,
                                <Link href="/auth/signup" className='text-[#545BFC] ml-1 font-semibold'>register now</Link></p>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

Login.getLayout = function getLayout(page: ReactElement) {
    return (
        <div>
            {page}
        </div>
    )
}