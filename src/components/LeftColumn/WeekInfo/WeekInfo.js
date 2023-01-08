import React, { useRef, useState } from 'react'
/* import $ from "https://cdn.skypack.dev/jquery@3.6.0"; */
import LeftArrow from './../../../images/LeftArrow.svg';
import RightArrow from './../../../images/RightArrow.svg';
import Rain from './../../../images/Rain.svg';
import DayInfoCard from './DayInfoCard';

const WeekInfo = () => {
  const container = useRef(null);
  const leftArrow = useRef(null);
  const card0 = React.createRef();
  const card1 = React.createRef();
  const card2 = React.createRef();
  const card3 = React.createRef();
  const card4 = React.createRef();
  const card5 = React.createRef();
  const card6 = React.createRef();
  const cards = [card0, card1, card2, card3, card4, card5, card6];
  const rightArrow = useRef(null);
  let max_visible_cards = 1;
  let visible_now = 7;

  React.useEffect(() => {
    new ResizeObserver(resizer).observe(container.current);
  }, []);

  /*function postAnim(animatedComponent) {
    console.log("attributeStyleMap " + (animatedComponent.current.className));
    if (animatedComponent.current.attributeStyleMap.get("opacity")) {
      if (animatedComponent.current.attributeStyleMap.get("opacity").value == "0") {
        console.log("opacity 0");
        animatedComponent.current.attributeStyleMap.set("display", "none");
      }
      else if (animatedComponent.current.attributeStyleMap.get("opacity").value == "1") {
        /*console.log(getComputedStyle(animatedComponent.current).opacity);
        console.log("opacity 1");
        animatedComponent.current.attributeStyleMap.set("display", "flex");
      }
    }
    else {
      console.log("ComputedStyle_display " + getComputedStyle(animatedComponent.current).display);
      console.log("ComputedStyle_opacity " + getComputedStyle(animatedComponent.current).opacity);
      if (getComputedStyle(animatedComponent.current).opacity == 0 && getComputedStyle(animatedComponent.current).display == "flex") {
        console.log("ComputedStyle_opacity 0");
        animatedComponent.current.attributeStyleMap.set("display", "none");
      }
      else if (getComputedStyle(animatedComponent.current).opacity == 1 && getComputedStyle(animatedComponent.current).display == "none") {
        /*console.log(getComputedStyle(animatedComponent.current).opacity);
        console.log("ComputedStyle_opacity 1");
        animatedComponent.current.attributeStyleMap.set("display", "flex");
      }
    } 
  }*/

  function hideElem(animatedComponent) {
/*     animatedComponent.current.addEventListener('transitionend', postAnim(animatedComponent));
    animatedComponent.current.className=animatedComponent.current.className+" hidden";*/ 
    animatedComponent.current.attributeStyleMap.set("width", "0px");
    animatedComponent.current.attributeStyleMap.set("opacity", "0");
    animatedComponent.current.attributeStyleMap.set("display", "none");
  }

  function showCard(animatedComponent) {
    animatedComponent.current.attributeStyleMap.set("display", "flex");
    animatedComponent.current.attributeStyleMap.set("width", "130px");
    animatedComponent.current.attributeStyleMap.set("opacity", "1");
  }

  function showArrow(animatedComponent) {
    animatedComponent.current.attributeStyleMap.set("display", "flex");
    animatedComponent.current.attributeStyleMap.set("width", "109px");
    animatedComponent.current.attributeStyleMap.set("opacity", "1");
  }

  function resizer() {
    let styles = getComputedStyle(container.current);
    let width_container = parseFloat(styles.width);
    let width_card = parseFloat(130);
    let gap_container = parseFloat(styles.gap);
    max_visible_cards = parseInt((width_container + width_container * (gap_container / 100)) / (width_card + (width_container * (gap_container / 100))));
    if (visible_now < max_visible_cards) {
      let diff = max_visible_cards - visible_now;
      while (diff !== 0) {
        /* console.log(width_container+"px " + max_visible_cards+"~" + (7 - max_visible_cards + diff - 1));
        cards[7 - max_visible_cards + diff-1].current.attributeStyleMap.set("display", "flex"); */
        showCard(cards[7 - max_visible_cards + diff - 1]);
        visible_now++;
        diff--;
      }
    }
    if (visible_now > max_visible_cards) {
      showArrow(rightArrow);
    }
  }

  function rightClick() {
    showArrow(leftArrow);
    if (visible_now > max_visible_cards) {
      hideElem(cards[7 - visible_now]);
      visible_now--;
    }
    if (visible_now <= max_visible_cards) {
      hideElem(rightArrow);
    }
    console.log(visible_now);
  }

  function leftClick() {
    if (visible_now < 7) {
      showCard(cards[7 - visible_now - 1]);
      visible_now++;
      showArrow(rightArrow);
    }
    if (visible_now === 7) {
      hideElem(leftArrow);
    }
    console.log(visible_now);
  }


  function CardsRenderer() {
    let output = [];
    for (let i = 0; i < 7; i++) {
      output[i] = <DayInfoCard ref={cards[i]} key={"card" + i} tempValue="25" tempMeasurement="C" weatherPic={Rain} dayofWeek={i} />;
    }
    return (output);
  }


  return (
    <div className='week-info'>
      <div id='left-arrow' ref={leftArrow} key="LeftArrow" onClick={leftClick}>
        <img src={LeftArrow} alt='left-arrow' />
      </div>
      <div id='cards-container' ref={container}>
        <CardsRenderer />
      </div>
      <div id='right-arrow' ref={rightArrow} key="RightArrow" onClick={rightClick}>
        <img src={RightArrow} alt='right-arrow' />
      </div>
    </div>
  )
}

export default WeekInfo