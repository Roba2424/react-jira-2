import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { Component } from "react";
import { Button, Form, Input, notification } from "antd";
import "./style.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      loading: false,
    };
  }

  handleChangeInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleRegister = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({ loading: true });
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {

      notification.error({
        
      })
      console.log("error:" + error);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { loading } = this.state;

    return (
      <div className="auth-container">
        <Form layout="vertical" onFinish={this.handleRegister}>
          <Form.Item label="First Name">
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={this.handleChangeInput}
            />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={this.handleChangeInput}
            />
          </Form.Item>
          <Form.Item label="Email">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.handleChangeInput}
            />
          </Form.Item>
          <Form.Item label="Password">
            <Input.Password
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChangeInput}
            />
          </Form.Item>
          <Button onClick={this.handleRegister} loading={loading} type="primary">
            Register
          </Button>
        </Form>
      </div>
    );
  }
}

export default Register;
