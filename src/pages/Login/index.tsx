import { Form, Button, Input } from 'antd';
import { history } from 'umi';
import styles from './index.less';

export default function Login() {
  return (
    <div className={styles.container}>
      <Form>
        <Form.Item label="Username">
          <Input></Input>
        </Form.Item>
        <Form.Item label="Password">
          <Input></Input>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8 }}>
          <Button type="primary" onClick={() => history.push('/home')}>
            Login
          </Button>
          <Button>Register</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
