import React from "react";
import "./index.css";
import image1 from "../../../assets/FeatureImage/Image1.png";
import image2 from "../../../assets/FeatureImage/Image2.png";
import image3 from "../../../assets/FeatureImage/Image3.png";
import { BsCartPlus } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "../../../components/Button";
const FeaturedProducts = () => {
  const images = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
  ];

  return (
    <div
      className="w-50 d-flex flex-column gap-10 text-center mx-auto  "
    >
      <div className="container d-flex flex-column justify-content-center w-90 mx-auto ">
        <h1 className="feature-heading text-center fs-1 fw-bold p-4 my-4 ">
          Featured Products
        </h1>
      </div>
      <div>
        <Row xs={1} md={2} lg={3} className="g-2 my-4">
          {images?.map((img) => (
            <Col key={img?.id}>
              <div className="d-flex flex-column gap-2 featured-product-container">
                <Card className="d-flex flex-column justify-content-center featured-product-btn-container position-relative">
                  <Card.Img variant="top" src={img?.image} className="h-100" />
                  <button className="d-flex justify-content-center gap-1 align-items-center featured-product-btn position-absolute w-100 text-dark  bottom-0 bg-light border-0  p-1 rounded-1  ">
                    Add to cart
                    <div className="feature-product-icon">
                      <BsCartPlus size={15} />
                    </div>
                  </button>
                  <p>Title</p>
                  <p>$ 10</p>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className="my-8 mt-8 h-50">
        <Button props={"Shop All"} />
      </div>
    </div>
  );
};

export default FeaturedProducts;
