import Image from "@/components/image";
import { Card, Row, Col } from "antd";

export default function () {
    return (
        <Card className="my-8">
            <h1 className="font-semibold 
                text-lg sm:text-lg leading-10">Document for Verification</h1>
            <hr className="my-1 mb-6" />

            <div className="mt-4">
                <Row>
                    <Col span={24} md={{ span: 8 }} className="my-2 mx-2">
                        <h2 className="text-[#000] font-semibold mb-2">Business Registration Certificate</h2>
                        <Image/>
                    </Col>
                    <Col span={24} md={{ span: 7 }} className="my-2 mx-2">
                        <h2 className="text-[#000] font-semibold mb-2">Identity Proof</h2>
                        <Image/>
                    </Col>
                    <Col span={24} md={{ span: 7 }} className="my-2 mx-2">
                        <h2 className="text-[#000] font-semibold mb-2">Address Proof</h2>
                        <Image/>
                    </Col>
                </Row>
            </div>
        </Card>
    )
}