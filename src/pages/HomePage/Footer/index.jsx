import React from "react";
import "./index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { isMobile } from "react-device-detect";
const Footer = () => {
  return (
    <div className="bg-black py-5">
      <Container>
        <Row xs={1} md={2} lg={4}>
          {isMobile ? (
            <Col className="">
              <h1 className="fs-4 text-white text-start">
                Sign up for our newsletter
              </h1>
              <p className="footer-signup-content my-4  text-secondary ">
                Be the first to know about our special offers, news, and
                updates.
              </p>
              <div className="   w-sm-80  my-4 d-flex bg-black  justify-content-center border border-secondary border-solid">
                <input
                  type="text"
                  className="p-1 footer-signup-input   bg-dark focus:outline-none text-secondary"
                />
                <button className="p-1 footer-signup-btn w-50 py-[4px] px-4 bg-dark text-white  ">
                  Sign Up
                </button>
              </div>
            </Col>
          ) : (
            <Col className="bg-succes text-light " xs={12} lg={6}>
              <h1 className="fs-4 text-white text-start w-75 ">
                Sign up for our newsletter
              </h1>
              <p className="footer-signup-content my-4  w-75">
                Be the first to know about our special offers, news, and
                updates.
              </p>
              <div className=" w-50 w-sm-100  my-4 d-flex bg-black  justify-content-center border border-secondary border-solid">
                <input
                  type="text"
                  className="p-1 footer-signup-input w-75 bg-dark focus:outline-none text-secondary"
                />
                <button className="p-1 footer-signup-btn w-50 py-[4px] px-4 bg-dark text-white  ">
                  Sign Up
                </button>
              </div>
            </Col>
          )}

          <Row xs={2} >
            <Col className="" >
              <p className="  text-light">Footer</p>
              <div className="text-secondary">Lorem Lorem</div>
              <div className="text-secondary">Lorem Lorem</div>
              <div className="text-secondary">Lorem Lorem</div>
              <div className="text-secondary">Lorem Lorem</div>
              <div className="text-secondary">Lorem Lorem</div>
            </Col>
            <Col className="  ">
              <p className="text-white">Footer</p>
              <div className="text-secondary">Lorem Lorem</div>
              <div className="text-secondary">Lorem Lorem</div>
              <div className="text-secondary">Lorem Lorem</div>
              <div className="text-secondary">Lorem Lorem</div>
              <div className="text-secondary">Lorem Lorem</div>
            </Col>
          </Row>

          <Col className="  text-light text-center w-100">
            <p className="  mt-5 ">Copyrights site.com. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
