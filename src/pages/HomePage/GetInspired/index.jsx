import React from "react";
import Rectangle from "../../../assets/Rectangle 39.png";
import Button from "../../../components/Button";
import "./index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const GetInspired = () => {
  return (
    <>
      <div className="get-inspired-background my-5">
        <Container className=" w-80 mx-auto">
          <Row xs={1} md={2} gap={5} className="get-inspired-row">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={4}
              className="d-flex flex-column justify-content-center   get-inspired-resp-class gap-2"
            >
              <h1
                id="get-inspire-head"
                className="fw-bold text-white text-start get-inspire-heading"
              >
                Get Inspired
              </h1>
              <p className="text-start text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                rerum optio, eius debitis harum laborum quam quaerat dolorem?
                Praesentium.
              </p>
              <div className="text-start get-inspire-btn">
                <Button props={"Shop All"} />
              </div>
            </Col>
            <Col className=" py-5 get-inspired-col" xs={12} sm={12} md={12} lg={8}>
              <div className=" position-relative mx-auto get-inspired-box-lateral">
                <img
                  src={Rectangle}
                  alt=""
                  className="  w-100  get-inspired-img  "
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default GetInspired;
