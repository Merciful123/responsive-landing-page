import "./index.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../../../components/Button";
import { CategoryCarousel } from "./Carousel";
const Categories = () => {
  return (
    <div className="category-background py-5">
      <div className="container">
        <div className=" d-flex flex-column justify-items-center align-items-center p-8 gap-4">
          <h1 className="   text-white">Categories</h1>
          <div className="container w-50">
            <p className=" text-center text-white m-0 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              rerum optio, eius debitis harum laborum quam quaerat dolorem?
              Praesentium.
            </p>
          </div>
          <div className="my-4">
            <Button props={"Shop All"} />
          </div>
        </div>
        <div className="d-flex w-90 mx-auto gap-2 pb-8">
          <CategoryCarousel />
        </div>
      </div>
    </div>
  );
};

export default Categories;
