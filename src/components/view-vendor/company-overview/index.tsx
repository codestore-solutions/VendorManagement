import { Card, Row, Col } from "antd";

export default function () {
    return (
        <Card className="my-8">
            <h1 className="font-semibold 
                text-lg sm:text-lg leading-10">Company Overview</h1>
            <hr className="my-1 mb-6" />
            <h2 className="text-[#000] font-semibold">General Detail of Services / Goods</h2>
            <p className="text-[#7E8299]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy textLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text</p>

            <div className="mt-4">
                <Row>
                    <Col span={24} md={{ span: 12 }} className="flex my-2">
                        <h2 className="text-[#000] font-semibold">Date of Establishing :</h2>
                        <p className="text-[#7E8299] ml-2">DD/MM/YY</p>
                    </Col>
                    <Col span={24} md={{ span: 12 }} className="flex my-2">
                        <h2 className="text-[#000] font-semibold">Geographic Service Area :</h2>
                        <p className="text-[#7E8299] ml-2">DD/MM/YY</p>
                    </Col>
                </Row>

                <Row>
                    <Col span={24} md={{ span: 12 }} className="flex my-2">
                        <h2 className="text-[#000] font-semibold">Business Type : </h2>
                        <p className="ml-2 text-[#7E8299]">Lorem Ipsum</p>
                    </Col>
                    <Col span={24} md={{ span: 12 }} className="flex my-2 justify-between">
                        <div className="flex">
                            <h2 className="text-[#000] font-semibold">Insured : </h2>
                            <p className="ml-2 text-[#7E8299]">Yes</p>
                        </div>
                        <div className="flex">
                            <h2 className="text-[#000] font-semibold">Licensed : </h2>
                            <p className="ml-2 text-[#7E8299]">Yes</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col span={24} md={{ span: 12 }} className="flex my-2">
                        <h2 className="text-[#000] font-semibold">Gross Annual Sales : </h2>
                        <p className="ml-2 text-[#7E8299]">4,123,0000</p>
                    </Col>
                    <Col span={24} md={{ span: 12 }} className="flex my-2">
                        <h2 className="text-[#000] font-semibold">Currency : </h2>
                        <p className="ml-2 text-[#7E8299]">INR</p>
                    </Col>
                </Row>
            </div>
        </Card>
    )
}