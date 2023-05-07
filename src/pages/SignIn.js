import { Form, Input, Button, Checkbox } from 'antd';
import { signInWithGoogle } from "../firebase";

import { GoogleOutlined } from '@ant-design/icons';
import '../styles/SignIn.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SignIn() {

  const navigate = useNavigate();

  const onFinish = (values) => {
    navigate('/');
    console.log('Received values of form: ', values);
  };


  return (
    <Form className="login-form" onFinish={onFinish}>
        <h2>FoodiesHub</h2>
      <Form.Item label="Email" name="username">
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input.Password />
      </Form.Item>
      {/* <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link className="login-form-forgot" href="">
          Forgot password
        </Link>
      </Form.Item> */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Sign in
        </Button>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={signInWithGoogle}>
        <GoogleOutlined />Continue with Google
        </Button>
      </Form.Item>
      Or <Link to={'/sign-up'}>register now!</Link>
    </Form>
  );
}

export default SignIn;