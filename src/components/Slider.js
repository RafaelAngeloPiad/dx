import { useState } from "react";
import "./css/Slider.css";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

export default function Slider(props) {
  const [slideIndex, setSlideIndex] = useState(1);

  // setTimeout(() => {
  //   nextSlide();
  // }, 9000);

  const nextSlide = () => {
    if (slideIndex !== props.data.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === props.data.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(props.data.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {props.data.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <div>{obj.title}</div>
            <img
              src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`}
              alt="Slider"
            />
          </div>
        );
      })}
      <button onClick={nextSlide} className={"btn-slide next"}>
        <img src={rightArrow} alt="Slider Right" />
      </button>

      <button onClick={prevSlide} className={"btn-slide prev"}>
        <img src={leftArrow} alt="Slider Left" />
      </button>

      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
