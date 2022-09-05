import { useState } from "react";
// import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./css/SplashSlider.css";
// import leftArrow from "./icons/left-arrow.svg";
// import rightArrow from "./icons/right-arrow.svg";

export default function SplashSlider(props) {
  const [slideIndex, setSlideIndex] = useState(1);

  // setTimeout(() => {
  //   nextSlide();
  // }, 25000);

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
    console.log(index);
  };

  return (
    <div className="container-splashSlider">
      {props.data.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideIndex === index + 1
                ? "Splashslide active-anim"
                : "Splashslide not-active"
            }
          >
            <div className="Splashslide-overlay-container">
              <div className="splash-section">
                <div
                  className="splash_row"
                  style={{
                    display: "flex",
                    flexDirection:
                      obj.imgStart === "yes" ? "row-reverse" : "row",
                  }}
                >
                  <div className="splash_col">
                    <div className="splash-text-wrapper">
                      <h1 className="splash_heading dark">{obj.headline}</h1>
                      <div className="splash_subtitle dark">{obj.subtitle}</div>

                      <Button
                        buttonSize="custom_btn--wide"
                        buttonColor="custom_blue"
                        onClick={nextSlide}
                      >
                        {obj.buttonLabel}
                      </Button>
                    </div>
                  </div>
                  <div className="splash_col">
                    <div className="splash_img_wrapper">
                      <img
                        src={process.env.PUBLIC_URL + obj.img}
                        alt="DialogX"
                        className="splash-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="Splashslide-control-panel">
        {/* <button onClick={nextSlide} className={"btn-Splashslide next"}>
          <img src={rightArrow} alt="Slider Right" />
        </button>

        <button onClick={prevSlide} className={"btn-Splashslide prev"}>
          <img src={leftArrow} alt="Slider Left" />
        </button> */}

        <div className="container-dots">
          {Array.from({ length: 2 }).map((item, index) => (
            <div
              key={index}
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
