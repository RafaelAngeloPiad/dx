import { useState } from "react";

import { ButtonDx } from "./ButtonDx";
import "./css/SplashSlider.css";
import "./css/Splash.css";

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

  // const prevSlide = () => {
  //   if (slideIndex !== 1) {
  //     setSlideIndex(slideIndex - 1);
  //   } else if (slideIndex === 1) {
  //     setSlideIndex(props.data.length);
  //   }
  // };

  // const moveDot = (index) => {
  //   setSlideIndex(index);
  //   console.log(index);
  // };

  return (
    <div className="container-splashSlider">
      {props.data.map((obj, index) => {
        return (
          <div
            key={`${obj.headline}-${index}`}
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

                      {obj.buttonShow === "yes" ? (
                        <ButtonDx buttonStyle="rounded-dx" onClick={nextSlide}>
                          {obj.buttonLabel}
                        </ButtonDx>
                      ) : (
                        ""
                      )}
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
    </div>
  );
}
