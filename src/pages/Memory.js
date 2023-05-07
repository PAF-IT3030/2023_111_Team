import { Form, Input, Button } from 'antd';
import '../styles/Memory.css'
import { useNavigate } from 'react-router-dom';
import ImageUpload from '../componets/ImageUpload';

function Memory() {

  const navigate = useNavigate();

  const onFinish = (values) => {
    navigate('/');
    console.log('Received values of form: ', values);
  };


  return (
    <Form className="login-form" onFinish={onFinish}>
        <h2>Share Your Memories</h2>
      <Form.Item label="Description" name="description">
        <Input />
      </Form.Item>
      <Form.Item label="Image Upload" name="description">
      </Form.Item>
      <ImageUpload/>
      <Form.Item>
        <Button type="primary" htmlType="submit">
         Save
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Memory;