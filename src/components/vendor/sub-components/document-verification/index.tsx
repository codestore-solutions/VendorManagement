import { Form, Upload } from "antd";
import { CloudUploadOutlined } from '@ant-design/icons';

export default function () {

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <div className='w-full flex flex-col lg:flex-row justify-between'>
            <Form.Item
                label="Business Registration Certificate"
                className="px-2 w-full lg:w-1/3"
                rules={[{ required: true, message: 'Please upload business registration certificate!' }]}>
                <Form.Item
                    name="businessRegCert"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    noStyle>
                    <Upload
                        listType="picture-card" maxCount={1} className="w-32">
                        <div className="flex flex-col w-64">
                            <p className="ant-upload-drag-icon">
                                <CloudUploadOutlined style={{ color: '#7E8299' }} />
                            </p>
                            <p className="ant-upload-text">Upload doc</p>
                            <p className="ant-upload-hint text-xs">Click or drag file to upload</p>
                        </div>
                    </Upload>
                </Form.Item>
            </Form.Item>

            <Form.Item label="Identity Proof" className="px-2 w-full lg:w-1/3">
                <Form.Item name="identityProof"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    noStyle>
                    <Upload
                        name="identityProof"
                        listType="picture-card" maxCount={1} className="w-32">
                        <div className="flex flex-col w-64">
                            <p className="ant-upload-drag-icon">
                                <CloudUploadOutlined style={{ color: '#7E8299' }} />
                            </p>
                            <p className="ant-upload-text">Upload doc</p>
                            <p className="ant-upload-hint text-xs">Click or drag file to upload</p>
                        </div>
                    </Upload>
                </Form.Item>
            </Form.Item>

            <Form.Item label="Address Proof" className="px-2 w-full lg:w-1/3">
                <Form.Item name="addressProof"
                    valuePropName="fileList" 
                    getValueFromEvent={normFile}   
                    noStyle>
                    <Upload
                        listType="picture-card" maxCount={1} className="w-32">
                        <div className="flex flex-col w-64">
                            <p className="ant-upload-drag-icon">
                                <CloudUploadOutlined style={{ color: '#7E8299' }} />
                            </p>
                            <p className="ant-upload-text">Upload doc</p>
                            <p className="ant-upload-hint text-xs">Click or drag file to upload</p>
                        </div>
                    </Upload>
                </Form.Item>
            </Form.Item>
        </div>
    )
}