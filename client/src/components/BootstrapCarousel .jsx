import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";

const BootstrapCarousel = () => {
  const isLogged = useSelector((state) => state.isLogged);
  return (
    <div className="carousel-container">
      {isLogged ? (
        ""
      ) : (
        <div>
          <div className="container-fluid">
            <Carousel>
              <Carousel.Item style={{ height: "500px" }}>
                <img
                  style={{ height: "500px" }}
                  className="d-block w-100"
                  src={"assets/img/green.jpg"}
                  alt=""
                />
                <Carousel.Caption>
                  <h3 id="green">The Nature</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <img
                  style={{ height: "500px" }}
                  className="d-block w-100"
                  src={"assets/img/readbook.jpg"}
                  alt=""
                />
                <Carousel.Caption>
                  <h3 id="study">Best Investment</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <img
                  style={{ height: "500px" }}
                  className="d-block w-100"
                  src={"assets/img/city.jpg"}
                  alt=""
                />
                <Carousel.Caption>
                  <h3 id="city">Beautiful City</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <marquee scrollamount="20"><h1 id="guide">Login to see Different kind of books available</h1></marquee>
        </div>
      )}
    </div>
  );
};

export default BootstrapCarousel;
