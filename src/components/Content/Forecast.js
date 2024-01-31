import React, { useEffect, useRef, useState } from "react";
import LeftArrow from "./../../images/LeftArrow.svg";
import RightArrow from "./../../images/RightArrow.svg";
import DayInfoCard from "./../common/WeatherCard";
import { register } from "swiper/element";

const Forecast = ({ forecastData }) => {
  register();

  const swiperElRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  register();

  useEffect(() => {
    const swiperContainer = swiperElRef.current;

    const params = {
      loop: false,
      observer: true,
      observeSlideChildren: true,
      observeParents: true,
      slidesPerView: "auto",
      /* spaceBetween: 20, */
      /* breakpoints: {
        200: {
        },
        767: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: "32rem",
        },
        1000: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: "32rem",
        },
      }, */
      on: {
        realIndexChange(s) {
          setIsBeginning(s.isBeginning);
          setIsEnd(s.isEnd);
        },
      },
    };
    Object.assign(swiperContainer, params);
    swiperContainer.initialize();

    prevRef.current?.addEventListener("click", () => {
      swiperContainer.swiper.slidePrev();
    });
    nextRef.current?.addEventListener("click", () => {
      swiperContainer.swiper.slideNext();
    });
  }, []);

  return (
    <div className="container_horizontal forecast">
      <div
        className={
          "container_horizontal forecast__button" +
          (isBeginning ? " hidden" : "")
        }
        id="forecast__previous"
        key="previous"
      >
        <img ref={prevRef} src={LeftArrow} alt="previous" />
      </div>
      <swiper-container class="forecast__slider" init="false" ref={swiperElRef}>
        {forecastData.data &&
          forecastData.data.map((item, index) => (
            <DayInfoCard
              key={index}
              tempValue={item.main.temp}
              icon={item.weather[0].icon}
              time={item.dt}
              imperial={forecastData.imperial}
            />
          ))}
      </swiper-container>
      <div
        className={
          "container_horizontal forecast__button" + (isEnd ? " hidden" : "")
        }
        id="forecast__next"
        key="next"
      >
        <img ref={nextRef} src={RightArrow} alt="next" />
      </div>
    </div>
  );
};

export default Forecast;
