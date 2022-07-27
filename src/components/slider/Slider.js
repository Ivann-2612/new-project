import "./slider.css";
import React, { useState } from "react";
import { slides } from "./dataSlides";

const Slider = () => {
  const [active, setActive] = useState(0);
  const max = slides.length;

  const nextOne = () => active < max - 1 && setActive(active + 1);

  const prevOne = () => active > 0 && setActive(active - 1);

  const isActive = (value) => active === value && "active";

  const setSliderStyles = () => {
    const transition = active * -100;

    return {
      width: slides.length * 100 + "vw",
      transform: "translateX(" + transition + "vw)",
    };
  };

  const renderSlides = () =>
    slides.map((item, index) => (
      <div
        className="each-slide"
        key={index}
        style={{ backgroundImage: item.eachSlide }}
      >
        <p className="each-slide-text">{item.text}</p>
        <p className="each-slide-text-two">{item.sub_text}</p>
      </div>
    ));

  const renderDots = () =>
    slides.map((_, index) => (
      <li className="dots" style={{ listStyle: "none" }} key={index}>
        <button onClick={() => setActive(index)}>
          <span
            style={{
              color: isActive(index) ? "yellow" : "inherit",
            }}
          >
            &#9679;
          </span>
        </button>
      </li>
    ));

  const renderRightArrow = () => (
    <>
      <button type="button" className="shadow next" onClick={() => nextOne()}>
        <span>NEXT</span>
      </button>
    </>
  );

  const renderArrows = () => (
    <>
      <button type="button" className="arrows prev" onClick={() => prevOne()}>
        <svg fill="yellow" width="50" height="50" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
      <div>
        <button type="button" className="arrows next" onClick={() => nextOne()}>
          <svg fill="yellow" height="50" viewBox="0 0 24 24" width="50">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
      </div>
    </>
  );

  return (
    <section className="slider">
      <div className="shadow">{renderRightArrow()}</div>
      <div className="overlay">
        <p style={{ color: "yellow" }}>{slides.text}</p>
        <div className="dots-number-div">
          <ul className="dots-container">{renderDots()}</ul>
          {/* <span className="active-number">
            {active + 1 + "/" + slides.length}
          </span> */}
          <h2 className="active-number">{"0" + (active + 1)}</h2>
        </div>
      </div>
      <div className="wrapper" style={setSliderStyles()}>
        {renderSlides()}
      </div>
      {renderArrows()}
    </section>
  );
};

export default Slider;
