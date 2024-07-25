import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css'
import { Link } from 'react-router-dom';


const LoginPage = ()=> {
  return (
    <div className='form-login'>
        <h2 className='text-center'>Login</h2>
        <Form className='border border-2 p-4 rounded-2 w-50'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <p>Bạn chưa có tài khoản ? <Link to={"/register"}>Đăng kí</Link></p>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default LoginPage;