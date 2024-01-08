import React, { useState, useEffect } from "react";
import HomeComponent from "./home.css";

export default function Home() {
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
        showSlide(index)
      }, [index]);
    

  return (
    <div className="home">
      <div className="carousleContainer">
        <div className="carousleSlide">
          <img
            className="image"
            src="/Images/Carasoule image/1st.jpg"
            alt="carousle 1"
          />
        </div>

        <div className="carousleSlide">
          <img
            className="image"
            src="/Images/Carasoule image/2nd.jpg"
            alt="carousle 1"
          />
        </div>

        <div className="carousleSlide">
          <img
            className="image"
            src="/Images/Carasoule image/3rd.jpg"
            alt="carousle 1"
          />
        </div>

        <div className="carousleSlide">
          <img
            className="image"
            src="/Images/Carasoule image/4th.jpg"
            alt="carousle 1"
          />
        </div>
      </div>
    </div>
  );
}
