import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock icon" />
              <h3>Efficient</h3>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, laudantium.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="diaphragm icon" />
              <h3>Affordable</h3>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, laudantium.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="money icon" />
              <h3>Pro Grade Gear</h3>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, laudantium.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="teamwork icon" />
              <h3>Teamwork</h3>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, laudantium.
            </p>
          </div>
        </div>
      </div>
      <div className="imag">
        <img src={home2} alt="black camera" />
      </div>
    </div>
  );
};

export default ServicesSection;
