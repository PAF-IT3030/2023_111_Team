import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/SignUp.css'

function SignIn() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form className="login-form" onFinish={onFinish}>
        <h2>FoodiesHub</h2>
      <Form.Item label="Full Name" name="username">
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="username">
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      Or <Link to={'/sign-in'}>Already Have a Account!</Link>

    </Form>
  );
}

export default SignIn;