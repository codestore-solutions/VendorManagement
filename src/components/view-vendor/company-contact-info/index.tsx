import { Card, Row, Col } from "antd";

export default function () {
    return (
        <Card>
            <h1 className="font-semibold 
                text-lg sm:text-lg leading-10">Company Contact Information</h1>
            <hr className="my-1 mb-6" />
            <h2 className="text-[#000] font-semibold">Business Name</h2>
            <p className="text-[#7E8299]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            <div className="mt-4">
                <Row>
                    <Col span={24} md={{ span: 12 }} className="my-2">
                        <h2 className="text-[#000] font-semibold">Street Address 1</h2>
                        <p className="text-[#7E8299]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text</p>
                    </Col>
                    <Col span={24} md={{ span: 12 }} className="my-2">
                        <h2 className="text-[#000] font-semibold">Street Address 2</h2>
                        <p className="text-[#7E8299]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text</p>
                    </Col>
                </Row>

                <Row>
                    <Col span={24} md={{ span: 12 }} className="flex my-2">
                        <h2 className="text-[#000] font-semibold">City : </h2>
                        <p className="ml-2 text-[#7E8299]">Noida</p>
                    </Col>
                    <Col span={24} md={{ span: 12 }} className="flex my-2">
                        <h2 className="text-[#000] font-semibold">State : </h2>
                        <p className="ml-2 text-[#7E8299]">Uttar Pradesh</p>
                    </Col>
                </Row>
                
                <Row>
                    <Col span={24} md={{ span: 12 }} className="flex my-2">
                        <h2 className="text-[#000] font-semibold">Postal/Zip Code : </h2>
                        <p className="ml-2 text-[#7E8299]">201301</p>
                    </Col>
                    <Col span={24} md={{ span: 12 }}  className="flex my-2">
                        <h2 className="text-[#000] font-semibold">Country : </h2>
                        <p className="ml-2 text-[#7E8299]">India</p>
                    </Col>
                </Row>

                <Row>
                    <Col span={24} md={{ span: 12 }} className="flex my-2">
                        <h2 className="text-[#000] font-semibold">Mobile No. : </h2>
                        <p className="ml-2 text-[#7E8299]">99887 87654</p>
                    </Col>
                    <Col span={24} md={{ span: 12 }}  className="flex my-2">
                        <h2 className="text-[#000] font-semibold">Email ID : </h2>
                        <p className="ml-2 text-[#7E8299]">india123@gmail.com</p>
                    </Col>
                </Row>
            </div>
        </Card>
    )
}