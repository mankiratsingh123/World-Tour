import React, { useRef } from "react";
import "./Locations.css";
import Location1 from "../../assets/Location1.jpg";
import Location2 from "../../assets/Location2.jpg";
import Location3 from "../../assets/Location3.jpg";
import Location4 from "../../assets/Location4.jpg";
import Location5 from "../../assets/Location5.jpg";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
const Locations = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    console.log("Forward button clicked");
    if (tx > -65) {
      tx -= 25;
    }
    console.log("New tx value:", tx);
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="locations">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider" ref={slider}>
        <div className="slide">
          <img src={Location1} alt="" className="img"></img>
          <h2 className="text">Bangkok</h2>
        </div>
        <div className="slide">
          <img src={Location2} alt="" className="img"></img>
          <h2 className="text">Paris</h2>
        </div>
        <div className="slide">
          <img src={Location3} alt="" className="img"></img>
          <h2 className="text">Istanbul</h2>
        </div>
        <div className="slide">
          <img src={Location4} alt="" className="img"></img>
          <h2 className="text">Dubai</h2>
        </div>
        <div className="slide">
          <img src={Location5} alt="" className="img"></img>
          <h2 className="text">London</h2>
        </div>
      </div>
    </div>
  );
};

export default Locations;
