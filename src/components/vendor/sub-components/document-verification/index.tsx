import { Form, Upload } from "antd";
import { InboxOutlined, UploadOutlined, CloudUploadOutlined } from '@ant-design/icons';

export default function () {

    const normFile = (e: any) => {
        console.log('Upload event:', e);
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
                    name="dragger" 
                    valuePropName="fileList" 
                    getValueFromEvent={normFile} 
                    noStyle>
                    <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                            <CloudUploadOutlined style={{ color: '#7E8299' }}/>
                        </p>
                        <p className="ant-upload-text">Upload doc</p>
                        <p className="ant-upload-hint text-xs">Click or drag file to upload</p>
                    </Upload.Dragger>
                </Form.Item>
            </Form.Item>

            <Form.Item label="Identity Proof" className="px-2 w-full lg:w-1/3">
                <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                    <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                            <CloudUploadOutlined style={{ color: '#7E8299' }}/>
                        </p>
                        <p className="ant-upload-text">Upload doc</p>
                        <p className="ant-upload-hint text-xs">Click or drag file to upload</p>
                    </Upload.Dragger>
                </Form.Item>
            </Form.Item>

            <Form.Item label="Address Proof" className="px-2 w-full lg:w-1/3">
                <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                    <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                            <CloudUploadOutlined style={{ color: '#7E8299' }}/>
                        </p>
                        <p className="ant-upload-text">Upload doc</p>
                        <p className="ant-upload-hint text-xs">Click or drag file to upload</p>
                    </Upload.Dragger>
                </Form.Item>
            </Form.Item>
        </div>
    )
}