import Navbar from '../componets/Navbar';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import ImageUpload from '../componets/ImageUpload';
import '../styles/Memory.css'


function Memory() {

  const navigate = useNavigate();

  const onFinish = (values) => {
    navigate('/');
    console.log('Received values of form: ', values);
  };


  return (
    <div>
        <Navbar/>
            <Form className="login-form" onFinish={onFinish}>
        <h2><font color="blue">..Share Your Events..</font></h2>
      <Form.Item label="Description" name="description">
        <Input />
      </Form.Item>
      <Form.Item label="Place" name="description">
        <Input />
      </Form.Item>
      <Form.Item label="Date" name="description">
        <Input />
      </Form.Item>
      <Form.Item label="Image Upload" name="description">
      </Form.Item>
      <ImageUpload/>
      <Form.Item>
        <Button type="primary" className="eventSave"htmlType="submit">
         Save
        </Button>
      </Form.Item>
    </Form>
    </div>

  );
}

export default Memory;