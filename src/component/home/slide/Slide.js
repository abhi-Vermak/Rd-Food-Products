import React, { useState, useEffect } from "react";
import "./slide.css";

export default function Slide(props) {

 const {image} = props;
 
  const [index, setIndex] = useState(0);
  let totalSlides = 0;

  const showSlide = (index) => {
    const slides = document.querySelectorAll(".carousleSlide");
    totalSlides = slides.length;

    slides.forEach((slide) => (slide.style.display = "none"));
    slides[index].style.display = "block";
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      showSlide(index);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [index]);

  useEffect(() => {
    showSlide(index);
  }, [index]);

  const nextBtn = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };
  const prevBtn = () => {
    if(index===0){
      setIndex(0)
    }
   else{
     setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    } 
    };
  

  return (
    <div className="slide">
      <div className="carousleContainer">
        <div className="carousleSlide">
          <img
            className="image"
            src={image}
            alt="carousle 1"
          />
        </div>
      </div>

      {/* buttons for prev  and next btn */}
      {/* Prev Button */}
      <div className="slideBtn ">
        <button className="PrevBtn btn" onClick={prevBtn}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        {/* Next Button */}
        <button className="nextBtn btn" onClick={nextBtn}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
