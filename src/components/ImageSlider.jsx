import React from "react";
import { Carousel } from "react-bootstrap";
import Demo1 from "../assets/images/image (1).jpg";
import Demo2 from "../assets/images/image (2).jpg";
import Demo3 from "../assets/images/image (3).jpg";
import Demo4 from "../assets/images/image (4).jpg";
import Demo5 from "../assets/images/image (5).jpg";
import Demo6 from "../assets/images/image (6).jpg";
import Demo7 from "../assets/images/image (7).jpg";
import Demo8 from "../assets/images/image (8).jpg";
import Demo9 from "../assets/images/image (9).jpg";
import { styled } from "@mui/system";

const Mob = styled(Carousel)(({ theme }) => ({
  filter: "brightness(40%)",
  zIndex: 0,
  [theme.breakpoints.down("sm")]:{
    width: "100vw",
    height: "100vh",
  }
}));

function ImageSlider() {
  return (
    <Mob>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={Demo1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={Demo2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={Demo3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={Demo4} alt="forth slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={Demo5} alt="Five slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={Demo6} alt="six slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={Demo7} alt="sev slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={Demo8} alt="eig slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={Demo9} alt="nine slide" />
      </Carousel.Item>
    </Mob>
  );
}

export default ImageSlider;
