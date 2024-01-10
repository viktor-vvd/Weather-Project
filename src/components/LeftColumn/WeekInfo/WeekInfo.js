import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import LeftArrow from "./../../../images/LeftArrow.svg";
import RightArrow from "./../../../images/RightArrow.svg";
import DayInfoCard from "./DayInfoCard";
import "swiper/css";

const WeekInfo = ({ forecastData }) => {

  return (
    <div className="week-info">
      <div id="left-arrow" key="LeftArrow">
        <img src={LeftArrow} alt="left-arrow" />
      </div>
      <Swiper
        navigation={{
          prevEl: "#left-arrow",
          nextEl: "#right-arrow",
        }}
        modules={[Navigation]}
        className="cards-container"
        tag="div"
        spaceBetween={"6.2%"}
        slidesPerView={"auto"}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {forecastData &&
          forecastData.map((item, index) => (
            <SwiperSlide className="day-info-card" tag="div" key={index}>
              <DayInfoCard
                key={index}
                tempValue={item.main.temp}
                weatherPic={item.weather[0].icon}
                time={item.dt}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <div id="right-arrow" key="RightArrow">
        <img src={RightArrow} alt="right-arrow" />
      </div>
    </div>
  );
};

export default WeekInfo;
