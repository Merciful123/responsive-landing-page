import React from "react";
import "./index.css";
import Form from "react-bootstrap/Form";
import Button from "../../components/Button";
import { Col, Row } from "react-bootstrap";
const LoginPage = () => {
  return (
    <div className="login-page-main ">
      <div className=" d-flex justify-content-start align-items-center login-breadcrumb bg-light  ">
        <div className="container  ml-5 text-gray-400">Home / login</div>
      </div>
      
      <Col
        xs={10}
        sm={10}
        md={8}
        lg={4}
        className="container d-flex flex-column justify-content-center align-items-center  mx-auto bg-light login-form-parent mt-5 pb-4"
      >
        <Form className="container">
          <h1 className="  text-2xl  fs-2 mb-5 login-heading text-center">Login</h1>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control
              type="email"
              id="email"
              placeholder=" Email"
              className="input-color"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control
              type="password"
              id="password"
              placeholder="Password"
              className="input-color"
            />
          </Form.Group>
          <div className="d-flex flex-column">
            <div className="  forgot-pass-btn place-self-start input-color">
              Forgot Password?
            </div>
            <div className="align-self-center mt-4">
              <Button props={"Login"} />
            </div>
            <div className=" text-center reg-link-btn place-self-center mt-5">
              Don't have an account?
            </div>
          </div>
        </Form>
      </Col>
    </div>
  );
};

export default LoginPage;
