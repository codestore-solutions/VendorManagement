import { Button, Result } from "antd";


interface WelcomeBackProps {
    onClickHandler: () => void
}

export default function ({ onClickHandler }: WelcomeBackProps) {
    return (
        <Result
            status="success"
            title="Welcome back!"
            subTitle="To continue, kindly fill out your business profile and provide the necessary details"
            extra={[
                <Button type="primary" key="console" onClick={onClickHandler}>
                    Go to business profile form
                </Button>
            ]}
        />
    )
}