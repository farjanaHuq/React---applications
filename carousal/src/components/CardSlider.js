import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export default function CardSlider({ slides }) {

  const [current, setCurrent] = useState(0);
  const length = slides.length;
  console.log(length);

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <div className="container">

      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

      {slides.map((data, index) => {
        return (
          <div
            className ={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && <div className="card">{data.question}</div>}
          </div>
        );
      })}
    </div>
  );
}
