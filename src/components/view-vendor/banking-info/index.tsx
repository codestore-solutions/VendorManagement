import { Card, Row, Col } from "antd";

export default function () {
    return (
        <Card className="my-8">
            <h1 className="font-semibold 
                text-lg sm:text-lg leading-10">Banking Information</h1>
            <hr className="my-1 mb-6" />

            <div className="mt-4">
                <Row>
                    <Col span={24} md={{ span: 8 }} className="flex my-2">
                        <h2 className="text-[#000] font-semibold">Bank Name :</h2>
                        <p className="text-[#7E8299] ml-2">Axis bank</p>
                    </Col>
                    <Col span={24} md={{ span: 8 }} className="flex my-2">
                        <h2 className="text-[#000] font-semibold">Beneficiary Name :</h2>
                        <p className="text-[#7E8299] ml-2">Amit khanna</p>
                    </Col>
                    <Col span={24} md={{ span: 8 }} className="flex my-2">
                        <h2 className="text-[#000] font-semibold">Account Number :</h2>
                        <p className="text-[#7E8299] ml-2">8764 87652 7752</p>
                    </Col>
                </Row>
            </div>
            <hr className="my-1 mb-6" />

            <h1 className="font-bold">Total Payout : 9876548</h1>
        </Card>
    )
}