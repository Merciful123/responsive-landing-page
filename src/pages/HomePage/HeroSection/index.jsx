import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { PiRocketLaunch } from "react-icons/pi";
import { PiCreditCard } from "react-icons/pi";
import { PiChatsCircleLight } from "react-icons/pi";
import { GoGift } from "react-icons/go";
import "./index.css";
import { images } from "./data";
import { BsCart2 } from "react-icons/bs";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HeroSection = () => {
  const features = [
    {
      icon: <PiRocketLaunch size={30} className="text-color-custom" />,
      title: "Free Delivery",
      description: "For all orders over $99",
    },
    {
      icon: <PiCreditCard size={30} className="text-color-custom" />,
      title: "Secure Payment",
      description: "100% Secure Payment",
    },
    {
      icon: <PiChatsCircleLight size={30} className="text-color-custom" />,
      title: "24/7 Support",
      description: "Dedicated Support",
    },
    {
      icon: <GoGift size={30} className="text-color-custom" />,
      title: "Gift Service",
      description: "Support Gift Service",
    },
  ];

  return (
    <div>
      <Carousel slide={false} className=" hero-carousel-height">
        {images?.map((img) => (
          <Carousel.Item key={img?.id}>
            <div className="position-relative">
              <img
                className=" d-block w-100   hero-carousel-height"
                src={img?.image}
                alt="Second slide"
              />
              <div
                style={{ backgroundColor: "white" }}
                className="position-absolute top-50  left-5 d-flex flex-column w-md-60 gap-0 carousel-btn-container "
              >
                <button
                  style={{ backgroundColor: "white" }}
                  className=" fs-6 fw-bold px-4 py-1 explore-btn-carousel h-10 w-full border-0"
                >
                  Explore Now
                </button>
                <div className="position-relative z-[999999999999]  custom-primary-color go-btn-carousel-container-outer">
                  <div className="position-absolute  custom-primary-color  items-center z-[-99999999] go-btn-carousel-container-inner">
                    <div className="max-md-w-100 d-flex justify-content-center w-100 align-items-center gap-2 w-100 px-4 ms-2 items-center flex-nowrap py-1 ">
                      <button className=" w-100 custom-primary-color text-white fs-6 fw-bold go-btn-carousel h-10 border-0">
                        Less Goo!
                      </button>
                      <div className="fw-bold">
                        <BsCart2 size={20} color="white" fontWeight={800} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      {/* Features in hero section */}

      <Container className="justify-content-center">
        <Row className="my-4" xs={2} md={2} lg={4}>
          {features?.map((feature, index) => (
            <Col key={index} className="mb-2 mb-md-0">
              <div className="d-flex gap-2 justify-content-center align-items-center feature-container">
                {feature?.icon}
                <div className="feature-container">
                  <div style={{ fontSize: "18px" }}>
                    <strong>{feature?.title}</strong>
                  </div>
                  <div style={{ fontSize: "13px" }}>
                    <p className="mb-0">{feature?.description}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
